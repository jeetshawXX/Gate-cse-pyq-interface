const fs   = require('fs').promises;
const path = require('path');

const BASE_DIR   = process.argv[2] || "GATE_CSE_Data_Fast";
const SLOT_SIZE  = 15;   // target questions per slot
const MERGE_THRESHOLD = 5;  // if last slot has <= this many Qs, merge into previous

// GATE gives 180 minutes for 65 questions → 2.769 min/question
const MINUTES_PER_QUESTION = 180 / 65;

// ─────────────────────────────────────────────────────────────────────────────
// Calculate duration (in minutes, rounded to nearest minute) for N questions
// ─────────────────────────────────────────────────────────────────────────────
function calcDuration(numQuestions) {
    return Math.round(numQuestions * MINUTES_PER_QUESTION);
}

// ─────────────────────────────────────────────────────────────────────────────
// Split an array of questions into slots of SLOT_SIZE.
// If the last slot has <= MERGE_THRESHOLD questions, merge it into the previous.
//
// Examples (SLOT_SIZE=15, MERGE_THRESHOLD=5):
//   30 questions → [15, 15]
//   31 questions → [15, 16]   (16 > 5, keep as-is)
//   34 questions → [15, 19]   (19 > 5, keep as-is)
//   35 questions → [15, 15, 5] → last slot = 5 ≤ 5 → merge → [15, 20]
//   36 questions → [15, 15, 6] → last = 6 > 5 → keep → [15, 15, 6]
//   20 questions → [15, 5]    → last = 5 ≤ 5 → merge → [20]
//   14 questions → [14]        (only one slot, nothing to merge)
// ─────────────────────────────────────────────────────────────────────────────
function splitIntoSlots(questions) {
    if (questions.length === 0) return [];

    const slots = [];
    for (let i = 0; i < questions.length; i += SLOT_SIZE) {
        slots.push(questions.slice(i, i + SLOT_SIZE));
    }

    // Merge last slot into second-to-last if it's too small
    if (slots.length >= 2 && slots[slots.length - 1].length <= MERGE_THRESHOLD) {
        const last       = slots.pop();
        const secondLast = slots.pop();
        slots.push([...secondLast, ...last]);
    }

    return slots;
}

// ─────────────────────────────────────────────────────────────────────────────
// Process a single data.json file:
//   1. Re-save original with updated duration
//   2. Create S1_<topic>, S2_<topic>, ... subdirectories with slot data.json
// ─────────────────────────────────────────────────────────────────────────────
async function processDataJson(filePath) {
    const raw     = await fs.readFile(filePath, 'utf-8');
    const data    = JSON.parse(raw);
    const topicDir = path.dirname(filePath);
    const topicName = path.basename(topicDir);  // e.g. "Asymptotic_Notation"

    const allQuestions = data.sections[0].questions;
    const total        = allQuestions.length;

    if (total === 0) {
        console.log(`    [skip] ${filePath} — no questions`);
        return;
    }

    // ── 1. Update original data.json with correct duration ──────────────────
    data.duration = calcDuration(total);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

    // ── 2. Split into slots ──────────────────────────────────────────────────
    const slots = splitIntoSlots(allQuestions);

    console.log(`    [${topicName}] ${total} questions → ${slots.length} slot(s): [${slots.map(s => s.length).join(', ')}]`);

    for (let i = 0; i < slots.length; i++) {
        const slotNum       = i + 1;
        const slotQuestions = slots[i];
        const slotDirName   = `S${slotNum}_${topicName}`;
        const slotDir       = path.join(topicDir, slotDirName);

        await fs.mkdir(slotDir, { recursive: true });

        // Re-number IDs from 1 within each slot
        const renumbered = slotQuestions.map((q, idx) => ({ ...q, id: idx + 1 }));

        const slotData = {
            title:    `${data.title} — Slot ${slotNum} (${slotQuestions.length} Questions)`,
            duration: calcDuration(slotQuestions.length),
            sections: [{
                name:      `${data.sections[0].name} — Slot ${slotNum}`,
                questions: renumbered
            }]
        };

        const slotFile = path.join(slotDir, 'data.json');
        await fs.writeFile(slotFile, JSON.stringify(slotData, null, 2), 'utf-8');
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Recursively walk the BASE_DIR and find every data.json
// Skip files that are already inside a slot folder (S1_*, S2_*, ...)
// ─────────────────────────────────────────────────────────────────────────────
async function findAllDataJsonFiles(dir) {
    const results = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Skip slot folders so we don't re-process already-split files
            if (/^S\d+_/.test(entry.name)) continue;
            results.push(...await findAllDataJsonFiles(fullPath));
        } else if (entry.name === 'data.json') {
            results.push(fullPath);
        }
    }

    return results;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
    console.log(`\n🔍 Scanning: ${BASE_DIR}`);
    console.log(`   Slot size      : ${SLOT_SIZE} questions`);
    console.log(`   Merge threshold: last slot ≤ ${MERGE_THRESHOLD} questions → merge into previous`);
    console.log(`   Time per Q     : ${MINUTES_PER_QUESTION.toFixed(3)} min  (GATE: 180min / 65Qs)\n`);

    const files = await findAllDataJsonFiles(BASE_DIR);
    console.log(`📄 Found ${files.length} data.json files to process\n`);

    for (const file of files) {
        await processDataJson(file);
    }

    console.log('\n✅ Done! All files split and durations updated.');
    console.log('\nFolder structure example:');
    console.log('  Algorithms/Asymptotic_Notation/data.json          ← original (untouched content, updated duration)');
    console.log('  Algorithms/Asymptotic_Notation/S1_Asymptotic_Notation/data.json');
    console.log('  Algorithms/Asymptotic_Notation/S2_Asymptotic_Notation/data.json');
    console.log('  ...');
}

main().catch(err => {
    console.error('❌ Fatal error:', err);
    process.exit(1);
});
