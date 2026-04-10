// db.js — Native IndexedDB helper for GATE Exam Storage
const IDB_NAME = 'GateExamNativeStorage';
const DB_VERSION = 8; // Bumped version for custom_exam_tracker

let idbPromise = null;

function initDB() {
    if (idbPromise) return idbPromise;

    idbPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open(IDB_NAME, DB_VERSION);

        request.onupgradeneeded = event => {
            const db = event.target.result;

            // Exams table
            if (!db.objectStoreNames.contains('exams')) {
                const examStore = db.createObjectStore('exams', { keyPath: 'id', autoIncrement: true });
                examStore.createIndex('date', 'date', { unique: false });
            }

            // Exam details table
            if (!db.objectStoreNames.contains('exam_details')) {
                const detailsStore = db.createObjectStore('exam_details', { keyPath: 'id', autoIncrement: true });
                detailsStore.createIndex('exam_id', 'exam_id', { unique: false });
            }

            // Bookmarks table (v2)
            if (!db.objectStoreNames.contains('bookmarks')) {
                const bookmarkStore = db.createObjectStore('bookmarks', { keyPath: 'id', autoIncrement: true });
                bookmarkStore.createIndex('questionHash', 'questionHash', { unique: true });
                bookmarkStore.createIndex('examTitle', 'examTitle', { unique: false });
                bookmarkStore.createIndex('dateBookmarked', 'dateBookmarked', { unique: false });
            }

            // Silly Mistakes table (v3)
            if (!db.objectStoreNames.contains('silly_mistakes')) {
                const smStore = db.createObjectStore('silly_mistakes', { keyPath: 'id', autoIncrement: true });
                smStore.createIndex('questionHash', 'questionHash', { unique: true });
                smStore.createIndex('examTitle', 'examTitle', { unique: false });
                smStore.createIndex('dateMarked', 'dateMarked', { unique: false });
            }

            // Daily To-Dos table (v6 -> v7 with index)
            if (!db.objectStoreNames.contains('todos')) {
                const todoStore = db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
                todoStore.createIndex('dateCreated', 'dateCreated', { unique: false });
                todoStore.createIndex('targetDate', 'targetDate', { unique: false });
            } else {
                // If upgrading from v6 where todos already existed, safely add the new index
                const request = event.target.transaction.objectStore('todos');
                if (!request.indexNames.contains('targetDate')) {
                    request.createIndex('targetDate', 'targetDate', { unique: false });
                }
            }

            // Custom Exam Tracker table (v8)
            if (!db.objectStoreNames.contains('custom_exam_tracker')) {
                const trackerStore = db.createObjectStore('custom_exam_tracker', { keyPath: 'questionHash' });
                trackerStore.createIndex('type', 'type', { unique: false }); // 'bkq' or 'sm'
            }
        };

        request.onblocked = () => {
            console.warn('DB upgrade blocked — please close other tabs using this app and refresh.');
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => {
            idbPromise = null; // Reset so next call retries
            reject(request.error);
        };
    });

    return idbPromise;
}

// Save an exam result (summary + details array)
async function saveExamResult(summary, details) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['exams', 'exam_details'], 'readwrite');

        transaction.onerror = () => reject(transaction.error);

        const examsStore = transaction.objectStore('exams');
        const detailsStore = transaction.objectStore('exam_details');

        const examObj = {
            title: summary.title,
            file: summary.file || null,
            date: summary.timestamp,
            total_marks: parseFloat(summary.totalMarks),
            max_marks: parseFloat(summary.maxTotalMarks),
            correct: summary.correct,
            incorrect: summary.incorrect,
            unanswered: summary.unanswered,
            total_questions: summary.totalQuestions
        };

        const addExamReq = examsStore.add(examObj);

        addExamReq.onsuccess = event => {
            const examId = event.target.result;

            details.forEach(d => {
                const detailObj = {
                    exam_id: examId,
                    question_id: d.questionId,
                    question_text: d.questionText,
                    user_answer: d.userAnswer,
                    correct_answer: d.correctAnswer,
                    status: d.status,
                    options: d.options,
                    type: d.type || 'single',
                    explanation: d.explanation || '',
                    time_spent: d.timeSpent || 0,
                    marks_obtained: d.marksObtained || 0,
                    max_marks: d.maxMarks || 0,
                    negative_marks: d.negativeMarks || 0,
                    marked_for_review: d.markedForReview || false
                };
                detailsStore.add(detailObj);
            });
        };

        transaction.oncomplete = () => {
            resolve(addExamReq.result);
        };
    });
}

// Get all exams (history), newest first
async function getExamHistory() {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['exams'], 'readonly');
        const store = transaction.objectStore('exams');
        const index = store.index('date');

        const request = index.openCursor(null, 'prev'); // 'prev' for descending order 
        const exams = [];

        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                exams.push(cursor.value);
                cursor.continue();
            } else {
                resolve(exams);
            }
        };

        request.onerror = () => reject(request.error);
    });
}

// Get an exam by its ID
async function getExamById(examId) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['exams'], 'readonly');
        const store = transaction.objectStore('exams');

        const request = store.get(examId);

        request.onsuccess = event => {
            resolve(event.target.result);
        };

        request.onerror = () => reject(request.error);
    });
}

// Get detail rows for a specific exam
async function getExamDetails(examId) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['exam_details'], 'readonly');
        const store = transaction.objectStore('exam_details');
        const index = store.index('exam_id');

        const request = index.getAll(examId);

        request.onsuccess = event => {
            // Sort by question_id properly to mimic old ORDER BY question_id
            const details = event.target.result;
            details.sort((a, b) => a.question_id - b.question_id);
            resolve(details);
        };

        request.onerror = () => reject(request.error);
    });
}

// Delete an exam and its details
async function deleteExam(examId) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['exams', 'exam_details'], 'readwrite');
        const examsStore = transaction.objectStore('exams');
        const detailsStore = transaction.objectStore('exam_details');

        examsStore.delete(examId);

        // Delete all associated details
        const index = detailsStore.index('exam_id');
        const request = index.openKeyCursor(examId);

        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                detailsStore.delete(cursor.primaryKey);
                cursor.continue();
            }
        };

        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// =====================================================
// Bookmark Functions — IndexedDB-based
// =====================================================

// Generate a unique hash for a question (exam title + question ID)
function makeQuestionHash(examTitle, questionId) {
    return `${examTitle || 'unknown'}__Q${questionId}`;
}

// Save a bookmark with full question data
async function saveBookmarkToDB(bookmarkData) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['bookmarks'], 'readwrite');
        const store = transaction.objectStore('bookmarks');

        const obj = {
            questionHash: bookmarkData.questionHash,
            examTitle: bookmarkData.examTitle || 'Unknown Exam',
            questionId: bookmarkData.questionId,
            questionText: bookmarkData.questionText,
            options: bookmarkData.options || [],
            correctAnswer: bookmarkData.correctAnswer,
            correctAnswerDisplay: bookmarkData.correctAnswerDisplay || '',
            userAnswer: bookmarkData.userAnswer,
            userAnswerDisplay: bookmarkData.userAnswerDisplay || '',
            status: bookmarkData.status,
            type: bookmarkData.type || 'single',
            explanation: bookmarkData.explanation || '',
            maxMarks: bookmarkData.maxMarks || 0,
            negativeMarks: bookmarkData.negativeMarks || 0,
            marksObtained: bookmarkData.marksObtained || 0,
            notes: bookmarkData.notes || '',
            dateBookmarked: new Date().toISOString()
        };

        const request = store.add(obj);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Remove a bookmark by questionHash
async function removeBookmarkFromDB(questionHash) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['bookmarks'], 'readwrite');
        const store = transaction.objectStore('bookmarks');
        const index = store.index('questionHash');

        const request = index.openCursor(questionHash);
        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                store.delete(cursor.primaryKey);
            }
        };

        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// Get a specific bookmark by questionHash
async function getBookmarkByHash(questionHash) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['bookmarks'], 'readonly');
        const store = transaction.objectStore('bookmarks');
        const index = store.index('questionHash');

        const request = index.get(questionHash);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Update the note for a bookmark
async function updateBookmarkNoteInDB(questionHash, notes) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['bookmarks'], 'readwrite');
        const store = transaction.objectStore('bookmarks');
        const index = store.index('questionHash');
        const request = index.get(questionHash);

        request.onsuccess = () => {
            const data = request.result;
            if (data) {
                data.notes = notes;
                const updateReq = store.put(data);
                updateReq.onsuccess = () => resolve(true);
                updateReq.onerror = () => reject(updateReq.error);
            } else {
                resolve(false);
            }
        };
        request.onerror = () => reject(request.error);
    });
}

// Get all bookmarks, newest first
async function getAllBookmarks() {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['bookmarks'], 'readonly');
        const store = transaction.objectStore('bookmarks');
        const index = store.index('dateBookmarked');

        const request = index.openCursor(null, 'prev');
        const bookmarks = [];

        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                bookmarks.push(cursor.value);
                cursor.continue();
            } else {
                resolve(bookmarks);
            }
        };

        request.onerror = () => reject(request.error);
    });
}

// Check if a question is bookmarked
async function isBookmarkedInDB(questionHash) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['bookmarks'], 'readonly');
        const store = transaction.objectStore('bookmarks');
        const index = store.index('questionHash');

        const request = index.count(questionHash);
        request.onsuccess = () => resolve(request.result > 0);
        request.onerror = () => reject(request.error);
    });
}

// Get all bookmarked questionHashes as a Set (for fast lookup)
async function getBookmarkedHashesSet() {
    const bookmarks = await getAllBookmarks();
    return new Set(bookmarks.map(b => b.questionHash));
}

// Clear all bookmarks
async function clearAllBookmarks() {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['bookmarks'], 'readwrite');
        const store = transaction.objectStore('bookmarks');
        store.clear();
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// =====================================================
// Silly Mistake Functions — IndexedDB-based
// =====================================================

// Save a silly mistake with full question data
async function saveSillyMistakeToDB(data) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['silly_mistakes'], 'readwrite');
        const store = transaction.objectStore('silly_mistakes');

        const obj = {
            questionHash: data.questionHash,
            examTitle: data.examTitle || 'Unknown Exam',
            questionId: data.questionId,
            questionText: data.questionText,
            options: data.options || [],
            correctAnswer: data.correctAnswer,
            correctAnswerDisplay: data.correctAnswerDisplay || '',
            userAnswer: data.userAnswer,
            userAnswerDisplay: data.userAnswerDisplay || '',
            status: data.status,
            type: data.type || 'single',
            explanation: data.explanation || '',
            maxMarks: data.maxMarks || 0,
            negativeMarks: data.negativeMarks || 0,
            marksObtained: data.marksObtained || 0,
            dateMarked: new Date().toISOString()
        };

        const request = store.add(obj);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Remove a silly mistake by questionHash
async function removeSillyMistakeFromDB(questionHash) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['silly_mistakes'], 'readwrite');
        const store = transaction.objectStore('silly_mistakes');
        const index = store.index('questionHash');

        const request = index.openCursor(questionHash);
        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                store.delete(cursor.primaryKey);
            }
        };

        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// Update the note for a silly mistake
async function updateSillyMistakeNoteInDB(questionHash, notes) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['silly_mistakes'], 'readwrite');
        const store = transaction.objectStore('silly_mistakes');
        const index = store.index('questionHash');
        const request = index.get(questionHash);

        request.onsuccess = () => {
            const data = request.result;
            if (data) {
                data.notes = notes;
                const updateReq = store.put(data);
                updateReq.onsuccess = () => resolve(true);
                updateReq.onerror = () => reject(updateReq.error);
            } else {
                resolve(false);
            }
        };
        request.onerror = () => reject(request.error);
    });
}

// Get all silly mistakes, newest first
async function getAllSillyMistakes() {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['silly_mistakes'], 'readonly');
        const store = transaction.objectStore('silly_mistakes');
        const index = store.index('dateMarked');

        const request = index.openCursor(null, 'prev');
        const items = [];

        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                items.push(cursor.value);
                cursor.continue();
            } else {
                resolve(items);
            }
        };

        request.onerror = () => reject(request.error);
    });
}

// Get all silly mistake questionHashes as a Set (for fast lookup)
async function getSillyMistakeHashesSet() {
    const items = await getAllSillyMistakes();
    return new Set(items.map(s => s.questionHash));
}

// Clear all silly mistakes
async function clearAllSillyMistakes() {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['silly_mistakes'], 'readwrite');
        const store = transaction.objectStore('silly_mistakes');
        store.clear();
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// =====================================================
// Daily To-Do Functions — IndexedDB-based
// =====================================================

// Save a new to-do
async function saveTodoToDB(text, targetDateStr, type = 'todo') {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['todos'], 'readwrite');
        const store = transaction.objectStore('todos');

        // targetDateStr format: 'YYYY-MM-DD'
        const obj = {
            text: text,
            completed: false,
            type: type, // 'todo' or 'note'
            targetDate: targetDateStr, // Used for displaying on specific days
            dateCreated: new Date().toISOString()
        };

        const request = store.add(obj);
        request.onsuccess = () => resolve(request.result); // returns the auto-incremented id
        request.onerror = () => reject(request.error);
    });
}

// Get all to-dos for a specific date string ('YYYY-MM-DD')
async function getTodosByDate(targetDateStr) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['todos'], 'readonly');
        const store = transaction.objectStore('todos');

        // Use index if it exists, otherwise fallback to filter
        if (store.indexNames.contains('targetDate')) {
            const index = store.index('targetDate');
            const request = index.getAll(targetDateStr);

            request.onsuccess = event => {
                resolve(event.target.result || []);
            };
            request.onerror = () => reject(request.error);
        } else {
            // Fallback for safety if index wasn't created yet during upgrade glitch
            const request = store.getAll();
            request.onsuccess = event => {
                const all = event.target.result || [];
                resolve(all.filter(t => t.targetDate === targetDateStr));
            };
            request.onerror = () => reject(request.error);
        }
    });
}

// Get all to-dos
async function getAllTodos() {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['todos'], 'readonly');
        const store = transaction.objectStore('todos');

        const request = store.getAll();

        request.onsuccess = event => {
            resolve(event.target.result || []);
        };
        request.onerror = () => reject(request.error);
    });
}

// Toggle to-do completed status
async function toggleTodoInDB(id, completed) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['todos'], 'readwrite');
        const store = transaction.objectStore('todos');
        const request = store.get(id);

        request.onsuccess = () => {
            const data = request.result;
            if (data) {
                data.completed = completed;
                const updateReq = store.put(data);
                updateReq.onsuccess = () => resolve(true);
                updateReq.onerror = () => reject(updateReq.error);
            } else {
                resolve(false);
            }
        };
        request.onerror = () => reject(request.error);
    });
}

// Remove a to-do by id
async function removeTodoFromDB(id) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['todos'], 'readwrite');
        const store = transaction.objectStore('todos');

        const request = store.delete(id);

        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// Update to-do text by id
async function updateTodoTextInDB(id, newText) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['todos'], 'readwrite');
        const store = transaction.objectStore('todos');
        const request = store.get(id);

        // updateTodoTextInDB function ending...
        request.onerror = () => reject(request.error);
    });
}

// =====================================================
// Custom Exam Tracking Functions — IndexedDB-based
// =====================================================

// Get all used hashes for a specific type ('bkq' or 'sm')
async function getUsedCustomExamHashes(type) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['custom_exam_tracker'], 'readonly');
        const store = transaction.objectStore('custom_exam_tracker');
        const index = store.index('type');

        const request = index.getAll(type);

        request.onsuccess = event => {
            const results = event.target.result || [];
            resolve(new Set(results.map(r => r.questionHash)));
        };
        request.onerror = () => reject(request.error);
    });
}

// Save used hashes to the tracker
async function saveUsedCustomExamHashes(hashes, type) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['custom_exam_tracker'], 'readwrite');
        const store = transaction.objectStore('custom_exam_tracker');

        hashes.forEach(hash => {
            store.put({ questionHash: hash, type: type, dateUsed: new Date().toISOString() });
        });

        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error);
    });
}

// Clear the tracking history for a specific type
async function clearCustomExamTracker(type) {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['custom_exam_tracker'], 'readwrite');
        const store = transaction.objectStore('custom_exam_tracker');
        const index = store.index('type');

        const request = index.openKeyCursor(type);

        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                store.delete(cursor.primaryKey);
                cursor.continue();
            }
        };

        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () => reject(transaction.error);
    });
}

// =====================================================
// Bulk Detail Retrieval (for analytics)
// =====================================================

// Get ALL exam details in a single cursor pass (avoids N+1 queries)
async function getAllExamDetails() {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['exam_details'], 'readonly');
        const store = transaction.objectStore('exam_details');
        const request = store.getAll();

        request.onsuccess = event => {
            resolve(event.target.result || []);
        };
        request.onerror = () => reject(request.error);
    });
}

// Get exam details for a specific set of exam IDs (for targeted loading)
async function getExamDetailsForIds(examIds) {
    const db = await initDB();
    const idSet = new Set(examIds);

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['exam_details'], 'readonly');
        const store = transaction.objectStore('exam_details');
        const index = store.index('exam_id');
        const results = [];

        const request = index.openCursor();
        request.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
                if (idSet.has(cursor.value.exam_id)) {
                    results.push(cursor.value);
                }
                cursor.continue();
            } else {
                resolve(results);
            }
        };
        request.onerror = () => reject(request.error);
    });
}

// =====================================================
// Storage Usage Estimation
// =====================================================

// Get storage usage in bytes (matches the exported snapshot size)
async function getStorageUsage() {
    try {
        const data = await exportAllData();
        const jsonStr = JSON.stringify(data);
        const bytes = new Blob([jsonStr]).size;
        return { used: bytes, quota: 0 };
    } catch (e) {
        console.warn('Storage calculation failed:', e);
        return { used: 0, quota: 0 };
    }
}

// Format bytes to human-readable string
function formatStorageSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}



// =====================================================
// Cloud Sync + Export/Import Helpers
// =====================================================

function scheduleCloudSync(reason = 'local-change') {
    if (window.__GATE_SYNC_SUSPENDED) return;
    if (window.GateCloudSync && typeof window.GateCloudSync.scheduleSync === 'function') {
        window.GateCloudSync.scheduleSync(reason);
    }
}

async function getAllFromStore(storeName) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error);
    });
}

async function clearStoreData(storeName) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        store.clear();
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

async function putManyInStore(storeName, rows) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        (rows || []).forEach(row => store.put(row));
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

async function exportAllData() {
    const [exams, exam_details, bookmarks, silly_mistakes, todos, custom_exam_tracker] = await Promise.all([
        getAllFromStore('exams'),
        getAllFromStore('exam_details'),
        getAllFromStore('bookmarks'),
        getAllFromStore('silly_mistakes'),
        getAllFromStore('todos'),
        getAllFromStore('custom_exam_tracker')
    ]);

    return {
        version: DB_VERSION,
        exportedAt: new Date().toISOString(),
        localStorage: {
            dailyStreakCount: localStorage.getItem('dailyStreakCount') || '0',
            lastExamDate: localStorage.getItem('lastExamDate') || '',
            darkMode: localStorage.getItem('darkMode') || 'false'
        },
        stores: {
            exams,
            exam_details,
            bookmarks,
            silly_mistakes,
            todos,
            custom_exam_tracker
        }
    };
}

async function importAllData(data, options = {}) {
    const replace = options.replace !== false;
    const stores = data?.stores || {};
    window.__GATE_SYNC_SUSPENDED = true;
    try {
        if (replace) {
            await Promise.all([
                clearStoreData('exams'),
                clearStoreData('exam_details'),
                clearStoreData('bookmarks'),
                clearStoreData('silly_mistakes'),
                clearStoreData('todos'),
                clearStoreData('custom_exam_tracker')
            ]);
        }

        await Promise.all([
            putManyInStore('exams', stores.exams || []),
            putManyInStore('exam_details', stores.exam_details || []),
            putManyInStore('bookmarks', stores.bookmarks || []),
            putManyInStore('silly_mistakes', stores.silly_mistakes || []),
            putManyInStore('todos', stores.todos || []),
            putManyInStore('custom_exam_tracker', stores.custom_exam_tracker || [])
        ]);

        const ls = data?.localStorage || {};
        if (ls.dailyStreakCount !== undefined) localStorage.setItem('dailyStreakCount', String(ls.dailyStreakCount));
        if (ls.lastExamDate !== undefined) localStorage.setItem('lastExamDate', String(ls.lastExamDate));
        if (ls.darkMode !== undefined) localStorage.setItem('darkMode', String(ls.darkMode));
    } finally {
        window.__GATE_SYNC_SUSPENDED = false;
    }
}

function wrapGlobal(name, after) {
    const original = window[name];
    if (typeof original !== 'function' || original.__gateWrapped) return;
    const wrapped = async function (...args) {
        const result = await original.apply(this, args);
        if (after) after(name, args, result);
        return result;
    };
    wrapped.__gateWrapped = true;
    window[name] = wrapped;
}

function installCloudWrappers() {
    [
        'saveExamResult',
        'deleteExam',
        'saveBookmarkToDB',
        'removeBookmarkFromDB',
        'updateBookmarkNoteInDB',
        'clearAllBookmarks',
        'saveSillyMistakeToDB',
        'removeSillyMistakeFromDB',
        'updateSillyMistakeNoteInDB',
        'saveTodoToDB',
        'toggleTodoInDB',
        'removeTodoFromDB',
        'updateTodoTextInDB',
        'saveUsedCustomExamHashes',
        'clearCustomExamTracker'
    ].forEach(name => wrapGlobal(name, () => scheduleCloudSync(name)));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installCloudWrappers, { once: true });
} else {
    installCloudWrappers();
}

// Redefine the broken to-do text updater with a working version.
window.updateTodoTextInDB = async function (id, newText) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['todos'], 'readwrite');
        const store = transaction.objectStore('todos');
        const request = store.get(id);

        request.onsuccess = () => {
            const data = request.result;
            if (!data) {
                resolve(false);
                return;
            }
            data.text = newText;
            const updateReq = store.put(data);
            updateReq.onsuccess = () => {
                resolve(true);
                scheduleCloudSync('updateTodoText');
            };
            updateReq.onerror = () => reject(updateReq.error);
        };
        request.onerror = () => reject(request.error);
    });
};

window.GateStorage = {
    exportAllData,
    importAllData,
    getAllFromStore,
    clearStoreData,
    putManyInStore,
    getAllBookmarks,
    getAllSillyMistakes,
    getAllTodos,
    getExamHistory,
    getExamDetails,
    getExamById,
    deleteExam,
    saveExamResult,
    saveBookmarkToDB,
    removeBookmarkFromDB,
    getBookmarkByHash,
    updateBookmarkNoteInDB,
    getBookmarkedHashesSet,
    clearAllBookmarks,
    saveSillyMistakeToDB,
    removeSillyMistakeFromDB,
    updateSillyMistakeNoteInDB,
    getSillyMistakeHashesSet,
    clearAllSillyMistakes,
    saveTodoToDB,
    getTodosByDate,
    toggleTodoInDB,
    removeTodoFromDB,
    updateTodoTextInDB: window.updateTodoTextInDB,
    getUsedCustomExamHashes,
    saveUsedCustomExamHashes,
    clearCustomExamTracker,
    getAllExamDetails,
    getExamDetailsForIds,
    getStorageUsage,
    formatStorageSize,
    makeQuestionHash
};
