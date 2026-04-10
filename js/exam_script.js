// Global variables
var examData = null;
let currentQuestionIndex = 0;
let currentSectionIndex = 0;
let questionStates = [];
let attemptSequence = []; // Tracks the order in which questions were attempted/visited
let timer = null;
let timeRemaining = 0;
let examEndTime = null; // New absolute timer logic
let questionStartTime = null; // Tracks when the current question was opened
let questionStartGlobalIndex = null; // Which question the timer is tracking
const AUTO_SAVE_KEY = 'gateExamAutoSave';
const EXAM_DATA_KEY = 'gateExamDataSave'; // Store heavy exam data separately

// Performance caches
let _sectionOffsets = []; // Precomputed cumulative question offsets per section
let _cachedQuestionPaperHTML = null; // Cached question paper HTML to avoid rebuilding

function saveExamDataOnce() {
    if (!examData) return;
    try {
        localStorage.setItem(EXAM_DATA_KEY, JSON.stringify(examData));
    } catch (e) {
        console.warn("Could not save initial exam data. LocalStorage may be full.", e);
    }
}

function handleBeforeUnload(e) {
    e.preventDefault();
    e.returnValue = ''; // Required for some browsers
}

function saveProgress() {
    if (!examData) return;

    // We create the snapshot immediately on the main thread so we capture the exact state
    const progressSnapshot = {
        questionStates: questionStates,
        attemptSequence: attemptSequence,
        timeRemaining: timeRemaining,
        currentSectionIndex: currentSectionIndex,
        currentQuestionIndex: currentQuestionIndex
    };

    // But defer the heavy JSON.stringify and localStorage.setItem writing to background idle periods
    const performSave = () => {
        try {
            localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(progressSnapshot));
        } catch (e) {
            console.warn("Could not auto-save. LocalStorage may be full or disabled.", e);
        }
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(performSave, { timeout: 2000 });
    } else {
        // Fallback for Safari/older browsers: execute at bottom of the event queue
        setTimeout(performSave, 1);
    }
}

function clearProgress() {
    localStorage.removeItem(AUTO_SAVE_KEY);
    localStorage.removeItem(EXAM_DATA_KEY);
}

function toggleHomeView(show) {
    const uploadSec = document.getElementById('uploadSection');
    if (uploadSec) {
        uploadSec.style.display = show ? 'block' : 'none';
    }
}

function resumeSavedExam() {
    const savedState = localStorage.getItem(AUTO_SAVE_KEY);
    const savedData = localStorage.getItem(EXAM_DATA_KEY);
    if (!savedState || !savedData) return;
    try {
        const state = JSON.parse(savedState);
        examData = JSON.parse(savedData);
        questionStates = state.questionStates;
        attemptSequence = state.attemptSequence || [];
        timeRemaining = state.timeRemaining;
        currentSectionIndex = state.currentSectionIndex;
        currentQuestionIndex = state.currentQuestionIndex;

        toggleHomeView(false);
        document.getElementById('examSection').style.display = 'flex';

        document.getElementById('examTitle').textContent = examData.title;

        // Make sure we have an absolute time anchor
        examEndTime = Date.now() + (timeRemaining * 1000);

        questionStartTime = Date.now();
        questionStartGlobalIndex = getGlobalQuestionIndex();

        loadSectionTabs();
        loadQuestionPalette();
        loadQuestion();
        startTimer();

    } catch (e) {
        clearProgress();
        alert('Could not resume preserved exam session.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Check for auto-save
    if (localStorage.getItem(AUTO_SAVE_KEY) && localStorage.getItem(EXAM_DATA_KEY)) {
        const actionContainer = document.getElementById('unfinishedExamActions');
        const resumeBtn = document.getElementById('resumeExam');
        const discardBtn = document.getElementById('discardExam');

        if (actionContainer && resumeBtn && discardBtn) {
            actionContainer.style.display = 'block';

            resumeBtn.addEventListener('click', () => {
                if (window.enterFullScreen) window.enterFullScreen();
                resumeSavedExam();
            });

            discardBtn.addEventListener('click', () => {
                if (confirm("Are you sure you want to discard your unfinished exam? This cannot be undone.")) {
                    clearProgress();
                    actionContainer.style.display = 'none';
                }
            });
        }
    }

    // Global Fullscreen helper
    window.enterFullScreen = function () {
        try {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { // Firefox
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { // IE/Edge
                elem.msRequestFullscreen();
            }
        } catch (e) {
            console.warn("Fullscreen request failed:", e);
        }
    };

    // Check for retry exam data (from "Retry Mistakes" on result page)
    const retryData = sessionStorage.getItem('retryExamData');
    if (retryData) {
        try {
            examData = JSON.parse(retryData);
            sessionStorage.removeItem('retryExamData'); // Clear so it doesn't auto-load again
            shuffleExamData(); // Shuffle on retry!
            initializeQuestionStates();

            // Automatically start the exam instead of waiting for a button click
            if (window.enterFullScreen) window.enterFullScreen();
            toggleHomeView(false);
            document.getElementById('examSection').style.display = 'flex';
            startExam();
        } catch (e) {
            console.warn('Could not load retry exam data:', e);
            sessionStorage.removeItem('retryExamData');
        }
    }

    // Event listeners

    // Upload functionality
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                document.getElementById('fileName').textContent = file.name;
                const reader = new FileReader();
                reader.onload = function (event) {
                    try {
                        examData = JSON.parse(event.target.result);
                        document.getElementById('startExam').disabled = false;

                        // Validate and normalize data
                        if (!examData.sections) {
                            // Convert old format to new format
                            examData = {
                                title: examData.title || "Exam",
                                duration: examData.duration || 180,
                                sections: [{
                                    name: "Main Section",
                                    questions: examData.data.map((q, i) => ({
                                        id: i + 1,
                                        question: q.question,
                                        type: q.type || "single", // Default to single
                                        options: q.options,
                                        correct_answer: q.correct_answer,
                                        marks: q.marks || 1,
                                        negative_marks: q.negative_marks || 0.33
                                    }))
                                }]
                            };
                        }

                        shuffleExamData(); // Shuffle on new upload!
                        initializeQuestionStates();

                        // Automatically start the exam instead of waiting for a button click
                        if (window.enterFullScreen) window.enterFullScreen();
                        toggleHomeView(false);
                        document.getElementById('examSection').style.display = 'flex';
                        startExam();
                    } catch (error) {
                        alert('Invalid JSON file. Please check the format.');
                    }
                };
                reader.readAsText(file);
            }
        });
    }

    // Start button listener removed - exam starts automatically now

    document.getElementById('saveNext').addEventListener('click', function () {
        saveCurrentAnswer();
        questionStates[getGlobalQuestionIndex()].marked = false;
        moveToNextQuestion();
        loadQuestion();
    });

    document.getElementById('markReview').addEventListener('click', function () {
        saveCurrentAnswer();
        questionStates[getGlobalQuestionIndex()].marked = true;
        moveToNextQuestion();
        loadQuestion();
    });

    document.getElementById('clearResponse').addEventListener('click', function () {
        const globalIndex = getGlobalQuestionIndex();
        questionStates[globalIndex].selectedAnswer = null; // Clear answer
        questionStates[globalIndex].answered = false;
        document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        // Clear NAT keypad display if present
        const natDisplay = document.querySelector('.nat-display');
        if (natDisplay) natDisplay.value = '';
        updateQuestionPalette();
    });

    // Previous button
    document.getElementById('previousBtn').addEventListener('click', function () {
        moveToPreviousQuestion();
        loadQuestion();
    });

    // Keyboard shortcuts (fix #14)
    document.addEventListener('keydown', function (e) {
        // Skip shortcuts when exam is not active or when typing in NAT input
        if (!examData || document.getElementById('examSection').style.display === 'none') return;
        if (e.target.classList.contains('nat-input') || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            saveCurrentAnswer();
            questionStates[getGlobalQuestionIndex()].marked = false;
            moveToNextQuestion();
            loadQuestion();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            moveToPreviousQuestion();
            loadQuestion();
        } else if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveCurrentAnswer();
            questionStates[getGlobalQuestionIndex()].marked = false;
            moveToNextQuestion();
            loadQuestion();
        } else if (e.ctrlKey && e.key === 'm') {
            e.preventDefault();
            saveCurrentAnswer();
            questionStates[getGlobalQuestionIndex()].marked = true;
            moveToNextQuestion();
            loadQuestion();
        }
    });

    // Floating Calculator Logic — GATE interface calculator modal
    const calcOverlay = document.getElementById('calculator-modal');
    const calcHeader = document.getElementById('calc-header');
    const calcMinBtn = document.getElementById('calcMinimizeBtn');
    const calcCloseBtn2 = document.getElementById('calcCloseBtn');

    // Open calculator from icon
    document.getElementById('calculatorBtn').addEventListener('click', function () {
        if (calcOverlay) {
            calcOverlay.style.display = 'block';
            calcOverlay.classList.remove('minimized');
            if (calcMinBtn) { calcMinBtn.textContent = '—'; calcMinBtn.title = 'minimize'; }
        }
    });

    // Minimize / Maximize toggle
    if (calcMinBtn) {
        calcMinBtn.addEventListener('click', function () {
            if (calcOverlay.classList.contains('minimized')) {
                calcOverlay.classList.remove('minimized');
                calcMinBtn.textContent = '—';
                calcMinBtn.title = 'minimize';
            } else {
                calcOverlay.classList.add('minimized');
                calcMinBtn.textContent = '□';
                calcMinBtn.title = 'maximize';
            }
        });
    }

    // Close calculator
    if (calcCloseBtn2) {
        calcCloseBtn2.addEventListener('click', function () {
            calcOverlay.style.display = 'none';
            calcOverlay.classList.remove('minimized');
            if (calcMinBtn) { calcMinBtn.textContent = '—'; calcMinBtn.title = 'minimize'; }
        });
    }

    // Draggable calc logic
    if (calcHeader && calcOverlay) {
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        calcHeader.addEventListener('mousedown', function (e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;

            // Get initial computed style
            const style = window.getComputedStyle(calcOverlay);
            initialLeft = parseInt(style.left, 10) || 0;
            initialTop = parseInt(style.top, 10) || 0;

            // Prevent text selection during drag
            e.preventDefault();
        });

        document.addEventListener('mousemove', function (e) {
            if (!isDragging) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            calcOverlay.style.left = `${initialLeft + dx}px`;
            calcOverlay.style.top = `${initialTop + dy}px`;
            calcOverlay.style.right = 'auto'; // Disable right anchoring
            calcOverlay.style.bottom = 'auto';
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
        });
    }

    // Question Paper Modal Logic
    const qpModal = document.getElementById('questionPaperModal');
    const closeQpBtn = document.getElementById('closeQuestionPaperBtn');
    const qpContent = document.getElementById('questionPaperContent');
    const viewQpBtn = document.getElementById('viewQuestionPaperBtn');

    if (viewQpBtn) {
        viewQpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            renderQuestionPaper();
            qpModal.style.display = 'flex';
        });
    }

    if (closeQpBtn) {
        closeQpBtn.addEventListener('click', function () {
            qpModal.style.display = 'none';
        });
    }

    function renderQuestionPaper() {
        if (!examData || !examData.sections) return;

        // Use cached HTML if available (fix #6)
        if (!_cachedQuestionPaperHTML) {
            let html = '';

            let qNo = 1;
            examData.sections.forEach(section => {
                html += `<h3 class="qp-section-title">${section.name}</h3>`;

                section.questions.forEach((q, index) => {
                    let typeText = "MCQ";
                    if (q.type === "multiple") typeText = "MSQ";
                    else if (q.type === "nat" || q.type === "numerical" || q.type === "numeric") typeText = "NAT";

                    html += `
                        <div class="qp-question-block">
                            <div class="qp-question-header">
                                <span>Question No. ${qNo++}</span>
                                <span>Type: ${typeText} | Marks: ${q.marks} | Neg: ${q.negative_marks || 0}</span>
                            </div>
                            <div class="qp-question-text">${q.question || "Loading..."}</div>
                    `;

                    if (q.options && q.options.length > 0 && typeText !== "NAT") {
                        html += `<ol class="qp-options-list">`;
                        q.options.forEach(opt => {
                            html += `<li>${opt}</li>`;
                        });
                        html += `</ol>`;
                    }

                    html += `</div>`;
                });
            });

            _cachedQuestionPaperHTML = html;
        }

        qpContent.innerHTML = _cachedQuestionPaperHTML;

        if (window.MathJax && MathJax.typesetPromise) {
            if (MathJax.typesetClear) MathJax.typesetClear([qpContent]);
            MathJax.typesetPromise([qpContent]).catch(err => console.warn('MathJax typeset error:', err));
        } else {
            setTimeout(() => { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([qpContent]); }, 500);
        }
    }

    document.getElementById('submitBtn').addEventListener('click', function () {
        showSubmitModal();
    });

    document.getElementById('cancelSubmit').addEventListener('click', function () {
        document.getElementById('submitModal').classList.remove('active');
    });

    document.getElementById('confirmSubmit').addEventListener('click', function () {
        submitExam();
    });
});

function initializeQuestionStates() {
    questionStates = [];
    attemptSequence = [];
    _cachedQuestionPaperHTML = null; // Reset cache for new exam

    // Precompute section offsets for O(1) global index lookups (fix #5)
    _sectionOffsets = [];
    let offset = 0;
    examData.sections.forEach(section => {
        _sectionOffsets.push(offset);
        section.questions.forEach(question => {
            questionStates.push({
                visited: false,
                answered: false,
                marked: false,
                selectedAnswer: null,
                timeSpent: 0
            });
        });
        offset += section.questions.length;
    });
}

function shuffleExamData() {
    if (!examData || !examData.sections) return;

    // Fisher-Yates shuffle array in place
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    examData.sections.forEach(section => {
        if (section.questions && section.questions.length > 0) {
            // 1. Shuffle Questions inside this section
            shuffleArray(section.questions);

            // Note: Option shuffling was explicitly removed by user request
        }
    });
}

function startExam() {
    document.getElementById('examTitle').textContent = examData.title;
    timeRemaining = (examData.duration || 180) * 60; // Convert to seconds
    examEndTime = Date.now() + (timeRemaining * 1000);

    loadSectionTabs();
    loadQuestionPalette();
    loadQuestion();
    startTimer();
    saveExamDataOnce();
    saveProgress();
}

function loadSectionTabs() {
    const tabsContainer = document.getElementById('sectionTabs');
    tabsContainer.innerHTML = '';

    examData.sections.forEach((section, index) => {
        const tab = document.createElement('div');
        tab.className = 'section-tab';
        tab.dataset.index = index;

        // Section name text (truncated)
        const nameSpan = document.createElement('span');
        nameSpan.className = 'gate-section-tab-name';
        nameSpan.textContent = section.name;
        tab.appendChild(nameSpan);

        // (i) info icon wrapper with hover dropdown
        const infoWrapper = document.createElement('div');
        infoWrapper.className = 'gate-info-icon-wrapper gate-section-tab-info';
        infoWrapper.addEventListener('click', (e) => { e.stopPropagation(); });

        const infoIcon = document.createElement('div');
        infoIcon.className = 'gate-info-icon-sprite gate-tab-icon';
        infoWrapper.appendChild(infoIcon);

        // Dropdown for per-section stats
        const dropdown = document.createElement('div');
        dropdown.className = 'gate-info-dropdown gate-section-info-dropdown';
        dropdown.dataset.sectionIndex = index;
        dropdown.innerHTML = `
            <div class="gate-info-title">${section.name}</div>
            <div class="gate-info-row"><div class="gate-sprite-shape gate-status-answered-small gate-sec-answered">0</div> Answered</div>
            <div class="gate-info-row"><div class="gate-sprite-shape gate-status-not-answered-small gate-sec-not-answered">0</div> Not Answered</div>
            <div class="gate-info-row"><div class="gate-sprite-shape gate-status-not-visited-small gate-sec-not-visited">0</div> Not Visited</div>
            <div class="gate-info-row"><div class="gate-sprite-shape gate-status-review-small gate-sec-marked">0</div> Marked for Review</div>
            <div class="gate-info-row"><div class="gate-sprite-shape gate-status-answered-review-small gate-sec-marked-answered">0</div> Answered & Marked for Review</div>
        `;
        infoWrapper.appendChild(dropdown);
        tab.appendChild(infoWrapper);

        tab.addEventListener('click', () => {
            currentSectionIndex = index;
            currentQuestionIndex = 0;
            loadQuestion();
        });

        tabsContainer.appendChild(tab);
    });
}

function startTimer() {
    updateTimerDisplay();
    updateQuestionTimerDisplay();

    // Prevent accidental leave
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Initial save tracking
    let lastSaveTime = Date.now();

    timer = setInterval(() => {
        // Calculate the absolute time left rather than ticking down. Throttling-proof.
        const now = Date.now();
        const secondsLeft = Math.max(0, Math.floor((examEndTime - now) / 1000));

        // Did it tick a full second in UI terms? Update remaining memory value
        if (secondsLeft !== timeRemaining) {
            timeRemaining = secondsLeft;
            updateTimerDisplay();
            updateQuestionTimerDisplay();
        }

        // Check if 10 full seconds passed since last save for robust auto-saving
        if (now - lastSaveTime >= 10000) {
            saveProgress();
            lastSaveTime = now;
        }

        if (timeRemaining <= 300) { // 5 minutes warning
            const timerEl = document.getElementById('timeDisplay');
            if (timerEl) timerEl.classList.add('warning');
        }

        if (timeRemaining <= 0) {
            clearInterval(timer);
            autoSubmit();
        }
    }, 500); // 500ms intervals ensures we don't skip a 1s beat due to minor thread delays
}

function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    document.getElementById('timeDisplay').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateQuestionTimerDisplay() {
    const el = document.getElementById('questionTimerDisplay');
    if (!el) return;

    const accumulated = (questionStartGlobalIndex !== null && questionStartGlobalIndex < questionStates.length)
        ? questionStates[questionStartGlobalIndex].timeSpent
        : 0;

    // Add live elapsed time to accumulated time
    let totalSecs;
    if (questionStartTime === null) {
        totalSecs = Math.floor(accumulated);
    } else {
        const currentElapsed = (Date.now() - questionStartTime) / 1000;
        totalSecs = Math.floor(accumulated + currentElapsed);
    }

    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function getGlobalQuestionIndex() {
    // O(1) lookup using precomputed section offsets (fix #5)
    if (_sectionOffsets.length > 0) {
        return _sectionOffsets[currentSectionIndex] + currentQuestionIndex;
    }
    // Fallback for when offsets aren't computed yet
    let index = 0;
    for (let i = 0; i < currentSectionIndex; i++) {
        index += examData.sections[i].questions.length;
    }
    return index + currentQuestionIndex;
}

function getQuestionIdByGlobalIndex(globalIdx) {
    let count = 0;
    for (const section of examData.sections) {
        for (const question of section.questions) {
            if (count === globalIdx) return question.id;
            count++;
        }
    }
    return globalIdx + 1; // Fallback
}

function loadQuestion() {
    // Record time spent on previous question before switching
    recordCurrentQuestionTime();

    // Update Tabs
    document.querySelectorAll('.section-tab').forEach(tab => {
        tab.classList.remove('active');
        if (parseInt(tab.dataset.index) === currentSectionIndex) {
            tab.classList.add('active');
        }
    });

    const globalIndex = getGlobalQuestionIndex();
    const section = examData.sections[currentSectionIndex];
    const question = section.questions[currentQuestionIndex];

    // Mark as visited logic can stay here or move to next/prev
    questionStates[globalIndex].visited = true;

    // Start per-question timer for the new question
    questionStartTime = Date.now();
    questionStartGlobalIndex = globalIndex;

    // Update question info
    document.getElementById('questionNumber').textContent = (globalIndex + 1);

    let typeText = "MCQ";
    if (question.type === "multiple") typeText = "MSQ";
    else if (question.type === "nat" || question.type === "numerical" || question.type === "numeric") typeText = "NAT";

    // Update question type display
    const qTypeEl = document.getElementById('questionType');
    if (qTypeEl) qTypeEl.textContent = typeText;

    // Update marks display — new GATE interface has separate spans
    const qMarksEl = document.getElementById('questionMarks');
    const qNegMarksEl = document.getElementById('questionNegMarks');
    if (qMarksEl) qMarksEl.textContent = question.marks;
    if (qNegMarksEl) qNegMarksEl.textContent = question.negative_marks || 0;

    // Update section pill — show exam title (like GATE interface)
    const sectionPill = document.getElementById('currentSectionPill');
    if (sectionPill) sectionPill.textContent = examData.title;

    // Update the info dropdown title for overall stats
    const infoDropdownTitle = document.getElementById('gateInfoDropdownTitle');
    if (infoDropdownTitle) infoDropdownTitle.textContent = examData.title;

    // Reload Palette if section changed
    const firstBtn = document.querySelector('.p-btn');
    if (!firstBtn || parseInt(firstBtn.dataset.section) !== currentSectionIndex) {
        loadQuestionPalette();
    }

    // Update palette header
    const paletteHeader = document.getElementById('paletteHeader');
    if (paletteHeader) paletteHeader.textContent = section.name + ' ...';

    // Update question text
    document.getElementById('questionText').innerHTML = question.question;

    // Lazy-load images in question text (fix #13)
    document.getElementById('questionText').querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Load options or NAT Input
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';



    if (question.type === 'nat' || question.type === 'numerical' || question.type === 'numeric') {

    const keypadContainer = document.createElement('div');
    keypadContainer.className = 'nat-keypad-container';

    const display = document.createElement('input');
    display.type = 'text';
    display.className = 'nat-display nat-input';
    display.placeholder = '';

    if (questionStates[globalIndex].selectedAnswer !== null) {
        display.value = questionStates[globalIndex].selectedAnswer;
    }

    keypadContainer.appendChild(display);

    const grid = document.createElement('div');
    grid.className = 'nat-keypad-grid';

    const rows = [
        [{ label: 'Backspace', action: 'backspace', cls: 'nat-key-backspace' }],
        [{ label: '7' }, { label: '8' }, { label: '9' }],
        [{ label: '4' }, { label: '5' }, { label: '6' }],
        [{ label: '1' }, { label: '2' }, { label: '3' }],
        [{ label: '0' }, { label: '.' }, { label: '-' }],
        [{ label: '\u2190', action: 'left', cls: 'nat-key-arrow' }, { label: '\u2192', action: 'right', cls: 'nat-key-arrow' }],
        [{ label: 'Clear All', action: 'clear', cls: 'nat-key-clear' }]
    ];

    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'nat-keypad-row';

        row.forEach(key => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'nat-key' + (key.cls ? ' ' + key.cls : '');
            btn.textContent = key.label;

            btn.addEventListener('click', function () {
                const cursorPos = display.selectionStart || display.value.length;
                const val = display.value;

                if (key.action === 'backspace') {
                    if (cursorPos > 0) {
                        display.value = val.slice(0, cursorPos - 1) + val.slice(cursorPos);
                        display.setSelectionRange(cursorPos - 1, cursorPos - 1);
                    }
                } else if (key.action === 'clear') {
                    display.value = '';
                } else if (key.action === 'left') {
                    if (cursorPos > 0) {
                        display.focus();
                        display.setSelectionRange(cursorPos - 1, cursorPos - 1);
                    }
                    return;
                } else if (key.action === 'right') {
                    if (cursorPos < val.length) {
                        display.focus();
                        display.setSelectionRange(cursorPos + 1, cursorPos + 1);
                    }
                    return;
                } else {
                    const char = key.label;
                    if (char === '.' && val.includes('.')) return;
                    if (char === '-') {
                        if (val.startsWith('-')) {
                            display.value = val.slice(1);
                        } else {
                            display.value = '-' + val;
                        }
                        display.focus();
                        return;
                    }
                    display.value = val.slice(0, cursorPos) + char + val.slice(cursorPos);
                    display.setSelectionRange(cursorPos + 1, cursorPos + 1);
                }

                display.focus();
            });
            rowDiv.appendChild(btn);
        });
        grid.appendChild(rowDiv);
    });

    keypadContainer.appendChild(grid);
    optionsContainer.appendChild(keypadContainer);
    } else {
        // MCQ / MSQ Logic
        const isMultiple = question.type === 'multiple';
        const inputType = isMultiple ? 'checkbox' : 'radio';

        (question.options || []).forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';

            // Check if selected
            let isChecked = false;
            // stored answer is now INDEX (int) or Array of INDICES
            const stored = questionStates[globalIndex].selectedAnswer;

            if (isMultiple) {
                if (Array.isArray(stored) && stored.includes(index)) {
                    isChecked = true;
                    optionDiv.classList.add('selected');
                }
            } else {
                if (stored === index) {
                    isChecked = true;
                    optionDiv.classList.add('selected');
                }
            }

            // Using index as value is safer for HTML
            optionDiv.innerHTML = `
                <input type="${inputType}" name="answer" value="${index}" 
                       ${isChecked ? 'checked' : ''}>
                <span class="option-text">${option}</span>
            `;

            optionDiv.addEventListener('click', function (e) {
                if (e.target.tagName === 'INPUT') return;

                const input = this.querySelector('input');
                if (isMultiple) {
                    input.checked = !input.checked;
                    if (input.checked) {
                        this.classList.add('selected');
                    } else {
                        this.classList.remove('selected');
                    }
                } else {
                    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    input.checked = true;
                }
            });

            optionDiv.querySelector('input').addEventListener('change', function () {
                if (isMultiple) {
                    if (this.checked) {
                        optionDiv.classList.add('selected');
                    } else {
                        optionDiv.classList.remove('selected');
                    }
                } else {
                    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                    if (this.checked) {
                        optionDiv.classList.add('selected');
                    }
                }
            });

            optionsContainer.appendChild(optionDiv);
        });
    }

    updateQuestionPalette();

    // MathJax v3 typesetting with robust retry
    function typesetQuestion(retries) {
        retries = retries || 0;
        if (window.MathJax && MathJax.typesetPromise) {
            const els = [document.getElementById('questionText'), document.getElementById('optionsContainer')].filter(Boolean);
            if (MathJax.typesetClear) MathJax.typesetClear(els);
            MathJax.typesetPromise(els).catch(err => console.warn('MathJax typeset error:', err));
        } else if (retries < 10) {
            setTimeout(() => typesetQuestion(retries + 1), 200);
        }
    }
    typesetQuestion();

    // Check scroll arrows after question content loads
    if (typeof gateCheckScroll === 'function') setTimeout(gateCheckScroll, 100);
}

function loadQuestionPalette() {
    const paletteContainer = document.getElementById('questionPalette');
    paletteContainer.innerHTML = '';

    const section = examData.sections[currentSectionIndex];
    let globalIndex = 0;
    for (let i = 0; i < currentSectionIndex; i++) {
        globalIndex += examData.sections[i].questions.length;
    }

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section-block';

    const paletteGrid = document.createElement('div');
    paletteGrid.className = 'palette-grid';

    section.questions.forEach((question, qIdx) => {
        const btn = document.createElement('button');
        btn.className = 'p-btn not-visited';
        btn.textContent = (globalIndex + 1);
        btn.dataset.section = currentSectionIndex;
        btn.dataset.question = qIdx;
        btn.dataset.globalIndex = globalIndex;

        btn.addEventListener('click', function () {
            currentQuestionIndex = parseInt(this.dataset.question);
            loadQuestion();
        });

        paletteGrid.appendChild(btn);
        globalIndex++;
    });

    sectionDiv.appendChild(paletteGrid);
    paletteContainer.appendChild(sectionDiv);
}

function updateQuestionPalette() {
    let answeredCount = 0, notAnsweredCount = 0, notVisitedCount = 0, markedCount = 0, markedAnsweredCount = 0;
    const currentGlobalIdx = getGlobalQuestionIndex(); // Cache once (fix #5)

    questionStates.forEach(state => {
        if (state.marked && state.answered) markedAnsweredCount++;
        else if (state.marked) markedCount++;
        else if (state.answered) answeredCount++;
        else if (state.visited) notAnsweredCount++;
        else notVisitedCount++;
    });

    const buttons = document.querySelectorAll('.p-btn');
    buttons.forEach((btn) => {
        const globalIdx = parseInt(btn.dataset.globalIndex);
        const state = questionStates[globalIdx];

        btn.className = 'p-btn';
        // Use sequential 1-based index instead of the raw scrambled ID
        const displayQId = globalIdx + 1;
        btn.innerHTML = `<span>${displayQId}</span>`;

        if (globalIdx === currentGlobalIdx) {
            btn.classList.add('current');
        }

        if (state.marked && state.answered) {
            btn.classList.add('marked-answered');
            btn.innerHTML = `<span>${displayQId}</span>`;
        } else if (state.marked) {
            btn.classList.add('marked');
        } else if (state.answered) {
            btn.classList.add('answered');
        } else if (state.visited) {
            btn.classList.add('not-answered');
        } else {
            btn.classList.add('not-visited');
        }
    });

    const el = (id) => document.getElementById(id);
    if (el('legendAnswered')) el('legendAnswered').textContent = answeredCount;
    if (el('legendNotAnswered')) el('legendNotAnswered').textContent = notAnsweredCount;
    if (el('legendNotVisited')) el('legendNotVisited').textContent = notVisitedCount;
    if (el('legendMarked')) el('legendMarked').textContent = markedCount;
    if (el('legendMarkedAnswered')) el('legendMarkedAnswered').textContent = markedAnsweredCount;
    // Also sync right-panel legend counters
    if (el('legendAnsweredPanel')) el('legendAnsweredPanel').textContent = answeredCount;
    if (el('legendNotAnsweredPanel')) el('legendNotAnsweredPanel').textContent = notAnsweredCount;
    if (el('legendNotVisitedPanel')) el('legendNotVisitedPanel').textContent = notVisitedCount;
    if (el('legendMarkedPanel')) el('legendMarkedPanel').textContent = markedCount;
    if (el('legendMarkedAnsweredPanel')) el('legendMarkedAnsweredPanel').textContent = markedAnsweredCount;

    // Update per-section stat dropdowns
    const sectionDropdowns = document.querySelectorAll('.gate-section-info-dropdown');
    sectionDropdowns.forEach(dropdown => {
        const secIdx = parseInt(dropdown.dataset.sectionIndex);
        if (isNaN(secIdx) || secIdx >= examData.sections.length) return;

        // Calculate section offset and count
        let offset = 0;
        for (let i = 0; i < secIdx; i++) {
            offset += examData.sections[i].questions.length;
        }
        const secLen = examData.sections[secIdx].questions.length;

        let sAns = 0, sNotAns = 0, sNotVis = 0, sMark = 0, sMarkAns = 0;
        for (let i = offset; i < offset + secLen; i++) {
            const s = questionStates[i];
            if (s.marked && s.answered) sMarkAns++;
            else if (s.marked) sMark++;
            else if (s.answered) sAns++;
            else if (s.visited) sNotAns++;
            else sNotVis++;
        }

        const secEl = (cls) => dropdown.querySelector('.' + cls);
        if (secEl('gate-sec-answered')) secEl('gate-sec-answered').textContent = sAns;
        if (secEl('gate-sec-not-answered')) secEl('gate-sec-not-answered').textContent = sNotAns;
        if (secEl('gate-sec-not-visited')) secEl('gate-sec-not-visited').textContent = sNotVis;
        if (secEl('gate-sec-marked')) secEl('gate-sec-marked').textContent = sMark;
        if (secEl('gate-sec-marked-answered')) secEl('gate-sec-marked-answered').textContent = sMarkAns;
    });
}

function saveCurrentAnswer() {
    const globalIndex = getGlobalQuestionIndex();
    const section = examData.sections[currentSectionIndex];
    const question = section.questions[currentQuestionIndex];

    // Track attempt sequence (only add if it's the first time they are answering/saving it)
    if (!attemptSequence.includes(question.id)) {
        attemptSequence.push(question.id);
    }

    if (question.type === 'multiple') {
        const selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
            .map(cb => parseInt(cb.value)); // Store integer indices

        if (selectedOptions.length > 0) {
            questionStates[globalIndex].selectedAnswer = selectedOptions;
            questionStates[globalIndex].answered = true;
        } else {
            questionStates[globalIndex].selectedAnswer = null;
            questionStates[globalIndex].answered = false;
        }
    } else if (question.type === 'nat' || question.type === 'numerical' || question.type === 'numeric') {
        const input = document.querySelector('.nat-input');
        if (input && input.value.trim() !== "") {
            questionStates[globalIndex].selectedAnswer = input.value.trim();
            questionStates[globalIndex].answered = true;
        } else {
            questionStates[globalIndex].selectedAnswer = null;
            questionStates[globalIndex].answered = false;
        }
    } else {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            questionStates[globalIndex].selectedAnswer = parseInt(selectedOption.value); // Store integer index
            questionStates[globalIndex].answered = true;
        }
    }
    saveProgress();
}

function moveToNextQuestion() {
    const currentSection = examData.sections[currentSectionIndex];

    if (currentQuestionIndex < currentSection.questions.length - 1) {
        currentQuestionIndex++;
    } else if (currentSectionIndex < examData.sections.length - 1) {
        currentSectionIndex++;
        currentQuestionIndex = 0;
    } else {
        currentSectionIndex = 0;
        currentQuestionIndex = 0;
    }
}

function moveToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
    } else if (currentSectionIndex > 0) {
        currentSectionIndex--;
        currentQuestionIndex = examData.sections[currentSectionIndex].questions.length - 1;
    }
}

function showSubmitModal() {
    const answered = questionStates.filter(q => q.answered).length;
    const notAnswered = questionStates.filter(q => q.visited && !q.answered && !q.marked).length;
    const marked = questionStates.filter(q => q.marked).length;
    const notVisited = questionStates.filter(q => !q.visited).length;

    const summaryGrid = document.getElementById('summaryGrid');
    summaryGrid.innerHTML = `
        <div class="summary-item">
            <div class="summary-number" style="color: #4CAF50;">${answered}</div>
            <div class="summary-label">Answered</div>
        </div>
        <div class="summary-item">
            <div class="summary-number" style="color: #f44336;">${notAnswered}</div>
            <div class="summary-label">Not Answered</div>
        </div>
        <div class="summary-item">
            <div class="summary-number" style="color: #9C27B0;">${marked}</div>
            <div class="summary-label">Marked for Review</div>
        </div>
        <div class="summary-item">
            <div class="summary-number" style="color: #9e9e9e;">${notVisited}</div>
            <div class="summary-label">Not Visited</div>
        </div>
    `;

    document.getElementById('submitModal').classList.add('active');
}

function recordCurrentQuestionTime() {
    if (questionStartTime !== null && questionStartGlobalIndex !== null) {
        const elapsed = (Date.now() - questionStartTime) / 1000;
        if (questionStartGlobalIndex < questionStates.length) {
            questionStates[questionStartGlobalIndex].timeSpent += elapsed;
        }
        questionStartTime = null;
        questionStartGlobalIndex = null;
    }
}

// Helper: Resolve correct answers to integer indices
function getCorrectIndices(question) {
    if (!question.options) return [];

    // Normalize correct_answer to array
    const rawCorrect = question.correct_answer;
    const correctList = Array.isArray(rawCorrect) ? rawCorrect : [rawCorrect];

    const correctIndices = [];

    correctList.forEach(val => {
        if (val === undefined || val === null) return;
        const strVal = String(val).trim();

        // 1. Check for Exact text match (in options)
        const exactMatchIdx = question.options.findIndex(opt => String(opt).trim() === strVal);
        if (exactMatchIdx !== -1) {
            correctIndices.push(exactMatchIdx);
            return;
        }

        // 2. Check if it's a simple index label like "A", "B", "C", "D"
        if (/^[a-zA-Z]$/.test(strVal)) {
            const idx = strVal.toUpperCase().charCodeAt(0) - 65; // A=0, B=1...
            if (idx >= 0 && idx < question.options.length) {
                correctIndices.push(idx);
                return;
            }
        }

        // 3. Fallback: Parse label from HTML string (e.g. "<b>D.</b> ...")
        // Remove simple tags and look for starting Letter followed by dot/paren
        const cleanText = strVal.replace(/<\/?[^>]+(>|$)/g, "").trim();
        const labelMatch = cleanText.match(/^([A-Z])[\.)]/i);
        if (labelMatch) {
            const letter = labelMatch[1].toUpperCase();
            const idx = letter.charCodeAt(0) - 65;
            if (idx >= 0 && idx < question.options.length) {
                correctIndices.push(idx);
                return;
            }
        }
    });

    // Remove duplicates
    return [...new Set(correctIndices)];
}

function submitExam() {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    clearProgress();
    clearInterval(timer);
    recordCurrentQuestionTime();

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let totalMarks = 0;
    let maxTotalMarks = 0;

    const detailedResults = [];

    let globalIndex = 0;
    examData.sections.forEach(section => {
        section.questions.forEach(question => {
            maxTotalMarks += (question.marks || 0);
            const state = questionStates[globalIndex];
            let status = 'unanswered';
            let isCorrect = false;

            // Resolve correct answers to indices for robust comparison
            const correctIndices = getCorrectIndices(question);

            if (state.answered) {
                if (question.type === 'multiple') {
                    // MSQ: selectedAnswer is array of INDICES
                    const userIndices = state.selectedAnswer || [];

                    const setU = new Set(userIndices);
                    const setC = new Set(correctIndices);

                    if (setU.size === setC.size && [...setU].every(x => setC.has(x))) {
                        correct++;
                        totalMarks += question.marks;
                        status = 'correct';
                        isCorrect = true;
                    } else {
                        incorrect++;
                        totalMarks -= (question.negative_marks || 0);
                        status = 'incorrect';
                    }

                } else if (question.type === 'nat' || question.type === 'numerical' || question.type === 'numeric') {
                    // NAT Logic (remains text/number check)
                    const userVal = parseFloat(state.selectedAnswer);
                    const correctValRaw = String(question.correct_answer);
                    let isMatch = false;

                    if (correctValRaw.includes(':')) {
                        const parts = correctValRaw.split(':').map(s => s.trim());
                        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                            const min = parseFloat(parts[0]);
                            const max = parseFloat(parts[1]);
                            if (userVal >= min && userVal <= max) isMatch = true;
                        }
                    } else if (correctValRaw.includes('-') && !correctValRaw.startsWith('-')) {
                        const parts = correctValRaw.split('-').map(s => s.trim());
                        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                            const min = parseFloat(parts[0]);
                            const max = parseFloat(parts[1]);
                            if (userVal >= min && userVal <= max) isMatch = true;
                        }
                    } else {
                        const correctVal = parseFloat(correctValRaw);
                        if (Math.abs(userVal - correctVal) < 0.001) isMatch = true;
                    }

                    if (isMatch) {
                        correct++;
                        totalMarks += question.marks;
                        status = 'correct';
                        isCorrect = true;
                    } else {
                        incorrect++;
                        totalMarks -= (question.negative_marks || 0);
                        status = 'incorrect';
                    }

                } else {
                    // MCQ (Single) - selectedAnswer is single INDEX
                    const userIdx = state.selectedAnswer;

                    if (correctIndices.includes(userIdx)) {
                        correct++;
                        totalMarks += question.marks;
                        status = 'correct';
                        isCorrect = true;
                    } else {
                        incorrect++;
                        totalMarks -= (question.negative_marks || 0);
                        status = 'incorrect';
                    }
                }
            } else {
                unanswered++;
            }

            // Restore display strings for results page
            let userAnsDisplay = '';
            if (question.type === 'nat' || question.type === 'numerical' || question.type === 'numeric') {
                userAnsDisplay = state.selectedAnswer || 'Not Attempted';
            } else {
                // Map indices back to option content
                const userIndices = Array.isArray(state.selectedAnswer)
                    ? state.selectedAnswer
                    : (state.selectedAnswer !== null ? [state.selectedAnswer] : []);

                if (userIndices.length > 0) {
                    userAnsDisplay = userIndices.map(idx => (question.options && question.options[idx] !== undefined) ? question.options[idx] : idx).join(', ');
                } else {
                    userAnsDisplay = 'Not Attempted';
                }
            }

            // Map correct indices back to option content for display
            let correctAnsDisplay = '';
            if (question.type === 'nat' || question.type === 'numerical' || question.type === 'numeric') {
                correctAnsDisplay = question.correct_answer;
            } else {
                correctAnsDisplay = correctIndices.map(idx => (question.options && question.options[idx] !== undefined) ? question.options[idx] : idx).join(', ');
            }

            detailedResults.push({
                questionId: question.id,
                questionText: question.question,
                userAnswer: state.selectedAnswer, // Stores indices/NAT value
                userAnswerDisplay: userAnsDisplay, // Text/HTML for display
                correctAnswer: question.correct_answer,
                correctAnswerIndices: correctIndices,
                correctAnswerDisplay: correctAnsDisplay, // Text/HTML for display
                status: status,
                options: question.options,
                type: question.type,
                timeSpent: Math.round(state.timeSpent),
                explanation: question.explanation || null,
                marksObtained: (status === 'correct' ? question.marks : (status === 'incorrect' ? -(question.negative_marks || 0) : 0)),
                maxMarks: question.marks,
                negativeMarks: question.negative_marks || 0,
                markedForReview: state.marked || false
            });

            globalIndex++;
        });
    });

    const summary = {
        correct,
        incorrect,
        unanswered,
        totalMarks: totalMarks.toFixed(2),
        maxTotalMarks: maxTotalMarks.toFixed(2),
        totalQuestions: questionStates.length,
        attemptSequence: attemptSequence, // Save sequence for results page replay
        timestamp: new Date().toISOString(),
        title: examData.title,
        file: examData.file
    };

    sessionStorage.setItem('gateExamResults', JSON.stringify({
        summary,
        details: detailedResults
    }));

    window.location.href = 'result.html';
}

function autoSubmit() {
    alert('Time is up! The exam will be auto-submitted.');
    submitExam();
}

// Scroll to Top Button Logic
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return;

    // Monitor both window and .question-area for scroll
    const questionArea = document.querySelector('.question-area');

    function toggleBtnVisibility() {
        const windowScrollTop = window.scrollY || document.documentElement.scrollTop;
        const areaScrollTop = questionArea ? questionArea.scrollTop : 0;

        if (windowScrollTop > 200 || areaScrollTop > 200) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    window.addEventListener('scroll', toggleBtnVisibility);
    if (questionArea) {
        questionArea.addEventListener('scroll', toggleBtnVisibility);
    }

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (questionArea) {
            questionArea.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
