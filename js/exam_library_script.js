// exam_library_script.js — Exam Library tree rendering + attempt tracking
(async function () {
    'use strict';

    // ====== State ======
    let indexData = null;
    let attemptMap = {};   // { examTitle: attemptCount }
    let activeFilter = 'all';
    let searchTerm = '';

    // Multi-Select State
    let isMultiSelectMode = false;
    let selectedExams = new Map(); // file -> name

    // ====== DOM Refs ======
    const contentEl = document.getElementById('libContent');
    const searchInput = document.getElementById('libSearch');
    const statsEl = document.getElementById('libStats');
    const scrollBtn = document.getElementById('scrollTopBtn');

    // Multi-Select DOM Elements
    const multiSelectToggle = document.getElementById('multiSelectToggle');
    const multiSelectFab = document.getElementById('multiSelectFab');
    const fabSelectedCount = document.getElementById('fabSelectedCount');
    const fabTotalQuestions = document.getElementById('fabTotalQuestions');
    const fabGenerateBtn = document.getElementById('fabGenerateBtn');

    // ====== Detect if running on a local server (http) or file:// ======
    const isHttpMode = window.location.protocol.startsWith('http');

    // ====== Init ======
    await loadAttemptData();
    await loadIndex();

    // ====== Load exam index: strictly static via EXAM_INDEX ======
    async function loadIndex() {
        contentEl.innerHTML = '<div class="lib-loading"><div class="spinner"></div><br>Loading exam library...</div>';
        try {
            if (!window.EXAM_INDEX) {
                throw new Error('Static EXAM_INDEX not found. Please ensure exam_index.js is loaded.');
            }
            indexData = window.EXAM_INDEX;
            render();
        } catch (e) {
            contentEl.innerHTML = '<div class="lib-empty">❌ Failed to load exam library.<br><small>Make sure <code>exam_index.js</code> is generated via <code>node generate_exam_index.js</code> and loaded in HTML.</small></div>';
            console.error(e);
        }
    }

    // ====== Load attempt data from IndexedDB ======
    async function loadAttemptData() {
        try {
            if (typeof initDB === 'function') {
                await initDB();
            }
            if (typeof getExamHistory === 'function') {
                const history = await getExamHistory();
                attemptMap = {};
                history.forEach(exam => {
                    const key = exam.file || exam.title;
                    attemptMap[key] = (attemptMap[key] || 0) + 1;
                });
            }
        } catch (e) {
            console.warn('Could not load exam history for attempt tracking:', e);
        }
    }

    // ====== Render ======
    function render() {
        if (!indexData || !indexData.sources) {
            contentEl.innerHTML = '<div class="lib-empty">No exam sources found.</div>';
            return;
        }

        let filteredSources = indexData.sources;
        if (activeFilter !== 'all') {
            filteredSources = filteredSources.filter(s => s.category === activeFilter);
        }

        if (filteredSources.length === 0) {
            contentEl.innerHTML = '<div class="lib-empty">No sources match the selected filter.</div>';
            updateStats(0, 0);
            return;
        }

        let html = '';
        let totalExams = 0;
        let totalAttempted = 0;

        filteredSources.forEach((source, idx) => {
            const counts = countExams(source.children);
            totalExams += counts.total;
            totalAttempted += counts.attempted;

            const icon = getCategoryIcon(source.category);
            const badgeClass = 'badge-' + source.category;
            const pct = counts.total > 0 ? Math.round((counts.attempted / counts.total) * 100) : 0;

            html += `
                <div class="source-card" data-source-idx="${idx}">
                    <div class="source-header" onclick="toggleSource(this)">
                        <span class="source-chevron">▶</span>
                        <span class="source-icon">${icon}</span>
                        <div class="source-info">
                            <div class="source-name">${source.name}</div>
                            <div class="source-meta">${counts.total} tests · ${counts.attempted} attempted · ${pct}% complete</div>
                        </div>
                        <span class="source-completion-badge ${pct === 100 ? 'complete' : pct > 0 ? 'partial' : ''}">${pct}%</span>
                        <span class="source-badge ${badgeClass}">${formatCategory(source.category)}</span>
                    </div>
                    <div class="source-progress-bar"><div class="source-progress-fill" style="width: ${pct}%"></div></div>
                    <div class="source-body">${renderChildren(source.children, 0)}</div>
                </div>`;
        });

        contentEl.innerHTML = html;
        updateStats(totalExams, totalAttempted);

        // Show index timestamp
        updateIndexTimestamp();

        // Apply search filter if active
        if (searchTerm) applySearch();
    }

    function renderChildren(items, depth) {
        if (!items || items.length === 0) return '';
        let html = '';

        // Separate folders from exams and flatten single-exam folders 
        const folders = items.filter(i => i.type === 'folder');
        const exams = items.filter(i => i.type === 'exam');

        // Render exams first at this level
        exams.forEach(exam => {
            html += renderExamItem(exam, depth);
        });

        // Render folders
        folders.forEach(folder => {
            // If a folder has only one child that is an exam, flatten it
            if (folder.children.length === 1 && folder.children[0].type === 'exam') {
                html += renderExamItem(folder.children[0], depth);
            } else {
                const childHtml = renderChildren(folder.children, depth + 1);
                const fCounts = countExams(folder.children);
                const fPct = fCounts.total > 0 ? Math.round((fCounts.attempted / fCounts.total) * 100) : 0;
                html += `
                    <div class="tree-folder" data-name="${escapeAttr(folder.name)}">
                        <div class="folder-header" style="padding-left: ${28 + depth * 16}px" onclick="toggleFolder(this)">
                            <span class="folder-chevron">▶</span>
                            <span class="folder-icon">📁</span>
                            <span>${folder.name}</span>
                            <span class="folder-completion ${fPct === 100 ? 'complete' : fPct > 0 ? 'partial' : ''}">${fPct}%</span>
                        </div>
                        <div class="folder-children">${childHtml}</div>
                    </div>`;
            }
        });

        return html;
    }

    function renderExamItem(exam, depth) {
        const attempts = attemptMap[exam.file] || attemptMap[exam.name] || 0;
        const ticksHtml = attempts > 0
            ? '<span class="exam-attempts">' + '✅'.repeat(Math.min(attempts, 5)) +
            (attempts > 5 ? `<span class="exam-meta-tag">×${attempts}</span>` : '') + '</span>'
            : '';

        const qText = exam.questions ? `${exam.questions} Q` : '';
        const dText = exam.duration ? `${exam.duration} min` : '';
        const metaTags = [qText, dText].filter(Boolean).map(t => `<span class="exam-meta-tag">${t}</span>`).join('');

        let actionHtml = '';
        if (isMultiSelectMode) {
            const isChecked = selectedExams.has(exam.file) ? 'checked' : '';
            actionHtml = `<input type="checkbox" class="exam-item-checkbox" value="${escapeAttr(exam.file)}" data-name="${escapeAttr(exam.name)}" data-questions="${exam.questions || 0}" onchange="handleExamSelect(this)" ${isChecked} onclick="event.stopPropagation()">`;
        }

        return `
            <div class="exam-item" data-file="${escapeAttr(exam.file)}" data-name="${escapeAttr(exam.name)}" onclick="${isMultiSelectMode ? 'toggleExamCheckbox(this)' : 'launchExam(this)'}" style="padding-left: ${36 + depth * 16}px; cursor: pointer;">
                ${actionHtml}
                <span class="exam-item-icon">📝</span>
                <span class="exam-item-name">${exam.name}</span>
                <div class="exam-item-meta">
                    ${metaTags}
                    ${ticksHtml}
                </div>
            </div>`;
    }

    // ====== Multi-Select Logic ======
    window.toggleMultiSelect = function () {
        isMultiSelectMode = !isMultiSelectMode;

        if (multiSelectToggle) {
            if (isMultiSelectMode) {
                multiSelectToggle.classList.add('active');
                multiSelectToggle.innerHTML = '❌ Cancel Multi-Select';
                multiSelectToggle.style.backgroundColor = '#e74c3c';
                multiSelectToggle.style.borderColor = '#c0392b';
                multiSelectFab.style.display = 'flex';
                selectedExams.clear();
                updateFabUI();
            } else {
                multiSelectToggle.classList.remove('active');
                multiSelectToggle.innerHTML = '✨ Multi-Select Exam';
                multiSelectToggle.style.backgroundColor = 'rgba(155, 89, 182, 0.2)';
                multiSelectToggle.style.borderColor = '#9b59b6';
                multiSelectFab.style.display = 'none';
                selectedExams.clear();
            }
        }
        render(); // re-render to show/hide checkboxes
    };

    window.toggleExamCheckbox = function (el) {
        if (!isMultiSelectMode) return;
        const checkbox = el.querySelector('.exam-item-checkbox');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            handleExamSelect(checkbox);
        }
    };

    window.handleExamSelect = function (checkbox) {
        if (checkbox.checked) {
            selectedExams.set(checkbox.value, {
                name: checkbox.dataset.name,
                questions: parseInt(checkbox.dataset.questions, 10) || 0
            });
        } else {
            selectedExams.delete(checkbox.value);
        }
        updateFabUI();
    };

    function updateFabUI() {
        if (fabSelectedCount) {
            fabSelectedCount.textContent = `${selectedExams.size} exams selected`;
        }

        let totalAvailableQuestions = 0;
        selectedExams.forEach((data) => {
            totalAvailableQuestions += data.questions;
        });

        if (fabAvailableCount) {
            if (selectedExams.size > 0) {
                fabAvailableCount.textContent = `(Max: ${totalAvailableQuestions})`;
                fabAvailableCount.style.display = 'inline';
                fabTotalQuestions.max = totalAvailableQuestions;
                if (parseInt(fabTotalQuestions.value, 10) > totalAvailableQuestions) {
                    fabTotalQuestions.value = totalAvailableQuestions;
                }
            } else {
                fabAvailableCount.style.display = 'none';
                fabTotalQuestions.max = 200;
            }
        }

        if (fabGenerateBtn) {
            fabGenerateBtn.disabled = selectedExams.size === 0;
            fabGenerateBtn.textContent = selectedExams.size === 0 ? 'Select Exams ↑' : 'Generate & Start ▶';
        }
    }

    window.generateCustomExam = async function () {
        if (selectedExams.size === 0) return;

        const totalRequested = parseInt(fabTotalQuestions.value, 10);
        if (isNaN(totalRequested) || totalRequested < 1) {
            alert('Please enter a valid number of total questions.');
            return;
        }

        fabGenerateBtn.disabled = true;
        fabGenerateBtn.textContent = 'Generating... ⌛';

        if (window.enterFullScreen) window.enterFullScreen();

        try {
            const rawExamsData = [];
            // Fetch all selected exams one by one
            for (const [file, examMeta] of selectedExams) {
                const data = await fetchExamData(file);
                if (data && data.sections) {
                    rawExamsData.push({ name: examMeta.name, file: file, data });
                }
            }

            if (rawExamsData.length === 0) {
                throw new Error("Could not load any data from selected exams.");
            }

            const customExam = generateMixedExamData(rawExamsData, totalRequested);
            customExam.file = "custom_" + Date.now() + ".json";

            // Save and launch
            startExamDirectly(customExam, fabGenerateBtn);

        } catch (error) {
            console.error(error);
            alert('❌ Error generating custom exam: ' + error.message);
            fabGenerateBtn.disabled = false;
            fabGenerateBtn.textContent = 'Generate & Start ▶';
        }
    };

    function startExamDirectly(data, loadingEl) {
        window.examData = data;
        setTimeout(() => {
            if (window.shuffleExamData) window.shuffleExamData();
            if (window.initializeQuestionStates) window.initializeQuestionStates();
            
            if (window.toggleHomeView) window.toggleHomeView(false);
            const examSec = document.getElementById('examSection');
            if (examSec) examSec.style.display = 'flex';
            
            if (window.startExam) window.startExam();
            
            if (loadingEl) {
                if (loadingEl.id === 'fabGenerateBtn') {
                    loadingEl.disabled = false;
                    loadingEl.textContent = 'Generate & Start ▶';
                } else {
                    loadingEl.style.opacity = '1';
                    loadingEl.style.pointerEvents = 'auto';
                }
            }
        }, 50);
    }

    // Helper to fetch exam data
    // HTTP mode: uses fetch() directly (no CORS issues on localhost)
    // File mode: uses JSONP-style _load.js scripts
    let _fetchIdCounter = 0;
    function fetchExamData(jsonFile) {
        if (isHttpMode) {
            // HTTP mode (including GitHub pages): direct static fetch of the file
            // Note: bypassing browser cache with a tiny query string to ensure fresh exam loads
            return fetch(jsonFile + '?t=' + Date.now())
                .then(r => {
                    if (!r.ok) throw new Error('Failed to load static file: ' + jsonFile);
                    return r.json();
                })
                .catch(err => {
                    console.warn('Fetch failed for static ' + jsonFile + ':', err);
                    return null;
                });
        }

        // File:// mode: JSONP with unique callbacks
        return new Promise((resolve, reject) => {
            const jsFile = jsonFile.replace(/\.json$/, '_load.js');
            const callbackName = '__examLoadCB_' + (++_fetchIdCounter) + '_' + Date.now();
            let resolved = false;

            window[callbackName] = function (examData) {
                if (resolved) return;
                resolved = true;
                delete window[callbackName];
                resolve(examData);
            };

            // Also support the legacy callback name for existing _load.js files
            window.__examLoadCallback = function (examData) {
                if (resolved) return;
                resolved = true;
                delete window[callbackName];
                resolve(examData);
            };

            const script = document.createElement('script');
            script.src = jsFile;
            script.onload = () => {
                try { document.head.removeChild(script); } catch (e) { }
                setTimeout(() => {
                    if (!resolved) {
                        resolved = true;
                        delete window[callbackName];
                        console.warn(`Timeout loading: ${jsFile}`);
                        resolve(null);
                    }
                }, 3000);
            };
            script.onerror = () => {
                if (!resolved) {
                    resolved = true;
                    delete window[callbackName];
                }
                try { document.head.removeChild(script); } catch (e) { }
                console.warn(`Failed to load script: ${jsFile}`);
                resolve(null);
            };
            document.head.appendChild(script);
        });
    }

    function generateMixedExamData(examsArray, totalRequested) {
        // Collect all questions from each exam
        const pools = examsArray.map(examObj => {
            let questions = [];
            examObj.data.sections.forEach(sec => {
                if (sec.questions) questions = questions.concat(sec.questions);
            });
            return {
                examName: examObj.name,
                questions: questions
            };
        });

        const selectedQuestions = [];
        const numExams = pools.length;

        // Shuffle each pool first
        pools.forEach(pool => {
            for (let i = pool.questions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool.questions[i], pool.questions[j]] = [pool.questions[j], pool.questions[i]];
            }
        });

        // Distribution with shortfall redistribution
        let remaining = totalRequested;
        let taken = pools.map(() => 0);
        let available = pools.map(p => p.questions.length);

        // Initial even distribution
        let targetPerExam = Math.floor(remaining / numExams);
        let extraRemainder = remaining % numExams;

        for (let i = 0; i < numExams; i++) {
            let quota = targetPerExam + (i < extraRemainder ? 1 : 0);
            taken[i] = Math.min(quota, available[i]);
        }

        // Redistribute shortfall: keep filling from pools that have spare capacity
        let totalTaken = taken.reduce((a, b) => a + b, 0);
        let shortfall = remaining - totalTaken;

        while (shortfall > 0) {
            let filled = false;
            for (let i = 0; i < numExams && shortfall > 0; i++) {
                if (taken[i] < available[i]) {
                    taken[i]++;
                    shortfall--;
                    filled = true;
                }
            }
            if (!filled) break; // No more questions available anywhere
        }

        let qCounter = 1;
        pools.forEach((pool, index) => {
            const slice = pool.questions.slice(0, taken[index]);
            slice.forEach(q => {
                q.id = `${qCounter++}`;
                selectedQuestions.push(q);
            });
        });
        selectedQuestions.sort(() => 0.5 - Math.random());

        // Generate a concise name
        const subjectMap = [
            { id: 'TOC', keys: ['TOC', 'THEORY OF COMPUTATION', 'AUTOMATA'] },
            { id: 'OS', keys: ['OS', 'OPERATING SYSTEM', 'OPERATING SYSTEMS'] },
            { id: 'DBMS', keys: ['DBMS', 'DATABASE', 'DATABASE MANAGEMENT SYSTEM'] },
            { id: 'CN', keys: ['CN', 'COMPUTER NETWORK', 'COMPUTER NETWORKS'] },
            { id: 'COA', keys: ['COA', 'COMPUTER ORGANIZATION', 'ARCHITECTURE'] },
            { id: 'CD', keys: ['CD', 'COMPILER DESIGN', 'COMPILER'] },
            { id: 'DL', keys: ['DL', 'DIGITAL LOGIC', 'DIGITAL'] },
            { id: 'DSA', keys: ['DSA', 'DATA STRUCTURES AND ALGORITHMS', 'DATA STRUCTURE', 'C AND DS', 'DATA STRUCTURES'] },
            { id: 'ALGO', keys: ['ALGO', 'ALGORITHM', 'ALGORITHMS', 'DA', 'DESIGN AND ANALYSIS'] },
            { id: 'C', keys: ['C PROGRAMMING', 'PROGRAMMING C', 'C LANGUAGE'] },
            { id: 'DM', keys: ['DM', 'DISCRETE MATH', 'DISCRETE MATHEMATICS'] },
            { id: 'EM', keys: ['EM', 'ENGINEERING MATH', 'ENGINEERING MATHEMATICS', 'MATHS'] },
            { id: 'GA', keys: ['GA', 'APTITUDE', 'GENERAL APTITUDE'] },
            { id: 'MOCK', keys: ['MOCK', 'MOCKS', 'FULL SYLLABUS', 'TEST SERIES'] }
        ];

        const abbreviations = examsArray.map(e => {
            const pathStr = decodeURIComponent(e.file).toUpperCase().replace(/[-_]/g, ' ');
            for (const sub of subjectMap) {
                for (const key of sub.keys) {
                    const regex = new RegExp(`(?:^|[^A-Z])(${key})(?:[^A-Z]|$)`);
                    if (regex.test(pathStr) || regex.test(e.name.toUpperCase())) {
                        return sub.id;
                    }
                }
            }

            // Fallback: use folder name from the file path
            const parts = e.file.split('/');
            if (parts.length >= 3) {
                // Determine the subject folder (usually parts.length - 3)
                let folder = parts[parts.length - 3];
                // If it's too high up the tree or invalid, fallback down
                if (!folder || folder.toLowerCase() === 'exams') folder = parts[parts.length - 2];
                if (folder) {
                    // Clean up folder name
                    folder = folder.replace(/[-_]/g, ' ').trim();
                    if (folder.length > 15) folder = folder.substring(0, 12) + '..';
                    return folder.toUpperCase();
                }
            }

            return 'MIX'; // absolute fallback
        }).slice(0, 3);

        // Deduplicate
        const uniqueAbbrevs = [...new Set(abbreviations)];
        const joinStr = uniqueAbbrevs.join(' + ');

        const finalName = `Custom Mix: ${joinStr}${examsArray.length > 3 ? '...' : ''} (${selectedQuestions.length} Qs)`;
        const durationMins = Math.ceil((selectedQuestions.length / 65) * 180); // ~2.7 minutes per question based on GATE

        // Construct standardized Exam Data
        return {
            title: finalName,
            duration: durationMins || 30, // Fallback 30 min
            sections: [
                {
                    name: "Mixed Section",
                    questions: selectedQuestions
                }
            ]
        };
    }

    // ====== Launch Exam ======
    window.launchExam = function (el) {
        if (isMultiSelectMode) {
             toggleExamCheckbox(el);
             return;
        }

        const jsonFile = el.dataset.file;
        if (!jsonFile) return;

        // Change appearance to show loading
        el.style.opacity = '0.5';
        el.style.pointerEvents = 'none';

        // Trigger fullscreen immediately on user interaction
        if (window.enterFullScreen) window.enterFullScreen();

        if (isHttpMode) {
            // Strictly fetch static JSON
            // Note: bypassing browser cache with a tiny query string
            fetch(jsonFile + '?t=' + Date.now())
                .then(r => {
                    if (!r.ok) throw new Error('Failed to load static exam');
                    return r.json();
                })
                .then(examData => {
                    examData.file = jsonFile;
                    startExamDirectly(examData, el);
                })
                .catch(e => {
                    alert('❌ Could not load exam: ' + e.message);
                    el.style.opacity = '1';
                    el.style.pointerEvents = 'auto';
                    const uploadSec = document.getElementById('uploadSection');
                    const examSec = document.getElementById('examSection');
                    if (uploadSec) uploadSec.style.display = 'block';
                    if (examSec) examSec.style.display = 'none';
                });
            return;
        }

        // File:// mode: JSONP-style <script> tag loading
        const jsFile = jsonFile.replace(/\.json$/, '_load.js');
        window.__examLoadCallback = function (examData) {
            delete window.__examLoadCallback;
            try {
                examData.file = jsonFile;
                startExamDirectly(examData, el);
            } catch (e) {
                alert('❌ Could not store exam data: ' + e.message);
                el.style.opacity = '1';
                el.style.pointerEvents = 'auto';
                const uploadSec = document.getElementById('uploadSection');
                if (uploadSec) uploadSec.style.display = 'block';
                const examSec = document.getElementById('examSection');
                if (examSec) examSec.style.display = 'none';
            }
        };

        const script = document.createElement('script');
        script.src = jsFile;
        script.onerror = function () {
            delete window.__examLoadCallback;
            alert('❌ Could not load exam file.\nRun: node server.js or node generate_exam_index.js');
            el.style.opacity = '1';
            el.style.pointerEvents = 'auto';
            const uploadSec = document.getElementById('uploadSection');
            if (uploadSec) uploadSec.style.display = 'block';
            const examSec = document.getElementById('examSection');
            if (examSec) examSec.style.display = 'none';
            document.head.removeChild(script);
        };
        document.head.appendChild(script);
    };

    // ====== Toggle Source Card ======
    window.toggleSource = function (headerEl) {
        headerEl.parentElement.classList.toggle('open');
    };

    // ====== Toggle Folder ======
    window.toggleFolder = function (headerEl) {
        headerEl.parentElement.classList.toggle('open');
    };

    // ====== Filters ======
    window.setFilter = function (category, btn) {
        activeFilter = category;
        document.querySelectorAll('.lib-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
    };

    // ====== Search ======
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            searchTerm = this.value.trim().toLowerCase();
            if (searchTerm.length === 0) {
                render(); // Reset
            } else {
                applySearch();
            }
        });
    }

    function applySearch() {
        if (!searchTerm) return;

        const allExams = document.querySelectorAll('.exam-item');
        const allFolders = document.querySelectorAll('.tree-folder');
        const allSources = document.querySelectorAll('.source-card');
        let matchCount = 0;

        // Hide everything first
        allExams.forEach(el => el.style.display = 'none');
        allFolders.forEach(el => { el.style.display = 'none'; el.classList.remove('open'); });
        allSources.forEach(el => { el.style.display = 'none'; el.classList.remove('open'); });

        // Show matching exams and their ancestors
        allExams.forEach(el => {
            const name = (el.dataset.name || '').toLowerCase();
            if (name.includes(searchTerm)) {
                el.style.display = '';
                matchCount++;

                // Open all parent folders/sources
                let parent = el.parentElement;
                while (parent && parent !== contentEl) {
                    if (parent.classList.contains('tree-folder')) {
                        parent.style.display = '';
                        parent.classList.add('open');
                    }
                    if (parent.classList.contains('source-body')) {
                        parent.style.display = '';
                    }
                    if (parent.classList.contains('source-card')) {
                        parent.style.display = '';
                        parent.classList.add('open');
                    }
                    if (parent.classList.contains('folder-children')) {
                        parent.style.display = '';
                    }
                    parent = parent.parentElement;
                }
            }
        });

        if (statsEl) statsEl.textContent = `${matchCount} result${matchCount !== 1 ? 's' : ''} found`;
    }

    // ====== Helpers ======
    function countExams(items) {
        let total = 0, attempted = 0;
        if (!items) return { total, attempted };
        items.forEach(item => {
            if (item.type === 'exam') {
                total++;
                if (attemptMap[item.file] || attemptMap[item.name]) attempted++;
            } else if (item.children) {
                const sub = countExams(item.children);
                total += sub.total;
                attempted += sub.attempted;
            }
        });
        return { total, attempted };
    }

    function updateStats(total, attempted) {
        if (statsEl) statsEl.textContent = `${total} tests · ${attempted} attempted`;
    }

    function updateIndexTimestamp() {
        const tsEl = document.getElementById('indexTimestamp');
        if (!tsEl || !indexData || !indexData.generated) return;
        try {
            if (indexData.dynamic) {
                tsEl.textContent = '🔄 Live — dynamic';
                tsEl.title = 'This index is loaded dynamically from the server.\nAdd/remove exam files and refresh to see changes.';
                tsEl.classList.remove('stale');
                tsEl.style.color = 'var(--green)';
                return;
            }
            const d = new Date(indexData.generated);
            const now = new Date();
            const diffMs = now - d;
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            let ageText;
            if (diffDays === 0) ageText = 'today';
            else if (diffDays === 1) ageText = 'yesterday';
            else ageText = `${diffDays} days ago`;
            tsEl.textContent = `Index updated ${ageText}`;
            tsEl.title = `Generated: ${d.toLocaleString()}\nRun "node generate_exam_index.js" to refresh after adding/removing exams.`;
            if (diffDays > 7) {
                tsEl.classList.add('stale');
            }
        } catch (e) {
            tsEl.textContent = '';
        }
    }

    function getCategoryIcon(cat) {
        const icons = { pyq: '📜', test_series: '📋', subject: '📚', practice: '🔄', other: '📦' };
        return icons[cat] || '📦';
    }

    function formatCategory(cat) {
        const names = { pyq: 'PYQ', test_series: 'Test Series', subject: 'Subject', practice: 'Practice', other: 'Other' };
        return names[cat] || cat;
    }

    function escapeAttr(str) {
        return (str || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ====== Scroll to Top ======
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.classList.toggle('visible', window.scrollY > 400);
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ====== Dark Mode ======
    const darkBtn = document.getElementById('darkToggle');
    if (darkBtn) {
        // Load saved theme
        const saved = localStorage.getItem('darkMode');
        if (saved === 'true') document.documentElement.setAttribute('data-theme', 'dark');

        darkBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
            localStorage.setItem('darkMode', !isDark);
        });
    }
})();
