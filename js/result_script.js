// result_script.js — Renders exam results and saves to SQLite DB
document.addEventListener('DOMContentLoaded', async () => {
    let resultData = null;

    const urlParams = new URLSearchParams(window.location.search);
    const urlExamId = urlParams.get('id');

    if (urlExamId) {
        try {
            const id = parseInt(urlExamId);
            await initDB();
            const summary = await getExamById(id);
            if (summary) {
                const details = await getExamDetails(id);

                // Regenerate display strings dynamically for older histories loaded from DB
                const computeDisplay = (ans, opts, type) => {
                    if (ans === undefined || ans === null || ans === '' || (Array.isArray(ans) && ans.length === 0)) return 'Not Attempted';
                    if (type === 'nat' || type === 'numerical' || type === 'numeric') {
                        return Array.isArray(ans) ? ans.join(' or ') : String(ans);
                    }
                    if (Array.isArray(ans)) {
                        return ans.map(a => (typeof a === 'number' && opts && opts[a]) ? opts[a] : a).join(', ');
                    }
                    if (typeof ans === 'number' && opts && opts[ans]) {
                        return opts[ans];
                    }
                    return String(ans);
                };

                resultData = {
                    fromHistory: true,
                    summary: {
                        id: summary.id,
                        title: summary.title,
                        file: summary.file,
                        timestamp: summary.date,
                        totalMarks: summary.total_marks,
                        maxTotalMarks: summary.max_marks,
                        correct: summary.correct,
                        incorrect: summary.incorrect,
                        unanswered: summary.unanswered,
                        totalQuestions: summary.total_questions
                    },
                    details: details.map(d => ({
                        questionId: d.question_id,
                        questionText: d.question_text,
                        userAnswer: d.user_answer,
                        userAnswerDisplay: computeDisplay(d.user_answer, d.options, d.type),
                        correctAnswer: d.correct_answer,
                        correctAnswerDisplay: computeDisplay(d.correct_answer, d.options, d.type),
                        status: d.status,
                        options: d.options,
                        type: d.type,
                        explanation: d.explanation,
                        timeSpent: d.time_spent,
                        marksObtained: d.marks_obtained,
                        maxMarks: d.max_marks,
                        negativeMarks: d.negative_marks,
                        markedForReview: d.marked_for_review
                    }))
                };
            }
        } catch (e) {
            console.warn('Could not load exam from DB:', e);
        }
    }

    if (!resultData) {
        resultData = JSON.parse(sessionStorage.getItem('gateExamResults') || localStorage.getItem('gateExamResults'));
    }

    if (!resultData) {
        document.getElementById('scoreCard').innerHTML = '<p>No results found.</p>';
        return;
    }

    const { summary, details } = resultData;

    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.innerText = `📊 ${summary.title || 'Exam'} Result`;
    }

    if (!resultData.fromHistory) {
        try {
            await initDB();
            await saveExamResult(summary, details);

            // --- Update Daily Streak Logic ---
            const today = new Date().toISOString().split('T')[0];
            const lastExamDate = localStorage.getItem('lastExamDate');
            let currentStreak = parseInt(localStorage.getItem('dailyStreakCount') || '0');

            if (lastExamDate !== today) {
                if (lastExamDate) {
                    const lastDate = new Date(lastExamDate);
                    const todayDate = new Date(today);
                    const diffTime = Math.abs(todayDate - lastDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) {
                        currentStreak++; // Consecutive day
                    } else if (diffDays > 1) {
                        currentStreak = 1; // Streak broken, restart
                    }
                } else {
                    currentStreak = 1; // First exam ever
                }

                localStorage.setItem('dailyStreakCount', currentStreak.toString());
                localStorage.setItem('lastExamDate', today);
                window.GateCloudSync?.scheduleSync('exam-completed');
            }
            // ----------------------------------

        } catch (e) {
            console.warn('Could not save to SQLite or Firebase:', e);
        }

    } else {
        try { await initDB(); } catch (e) { console.warn('Could not init DB:', e); }
    }

    // Load bookmarked hashes into cache for fast sync lookup
    try {
        window._bookmarkedHashes = await getBookmarkedHashesSet();
    } catch (e) {
        console.warn('Could not load bookmarks:', e);
        window._bookmarkedHashes = new Set();
    }

    // Load silly mistake hashes into cache for fast sync lookup
    try {
        window._sillyMistakeHashes = await getSillyMistakeHashesSet();
    } catch (e) {
        console.warn('Could not load silly mistakes:', e);
        window._sillyMistakeHashes = new Set();
    }

    // Render score card
    renderScoreCard(summary);

    // Render Time Analytics
    renderTimeAnalytics(details);

    // Render new analytics sections
    renderStrategyMetrics(summary, details);
    renderQuestionTypePerformance(details);
    renderMarksBreakdown(summary, details);

    // New Feature renderers
    // renderBadges(summary, details); // Function not defined, commented out to prevent crash
    renderAttemptOrder(summary, details);

    renderSpeedAccuracyQuadrant(details);
    renderConfidenceCalibration(details);
    renderStrategySuggestions(summary, details);

    // Render questions
    renderQuestions(summary, details);

    // Filter functionality
    document.getElementById('filterSelect').addEventListener('change', function () {
        renderQuestions(summary, details, this.value);
    });

    // Retry Mistakes
    const retryBtn = document.getElementById('retryMistakesBtn');
    if (retryBtn) retryBtn.addEventListener('click', () => retryMistakes(summary, details));

    // Retry Unattempted
    const retryUnattemptedBtn = document.getElementById('retryUnattemptedBtn');
    if (retryUnattemptedBtn) retryUnattemptedBtn.addEventListener('click', () => retryUnattempted(summary, details));

    // Export Wrong Questions
    const exportBtn = document.getElementById('exportWrongBtn');
    if (exportBtn) exportBtn.addEventListener('click', () => exportWrongQuestions(summary, details));

    // Download CSV
    const dlBtn = document.getElementById('downloadBtn');
    if (dlBtn) dlBtn.addEventListener('click', () => downloadCSV(summary, details));

    // Download PDF
    const pdfBtn = document.getElementById('downloadPdfBtn');
    if (pdfBtn) {
        pdfBtn.addEventListener('click', () => {
            const container = document.querySelector('.result-container');
            const btns = document.querySelector('.header-buttons');
            const originalDisplay = btns.style.display;

            // Hide buttons for PDF
            btns.style.display = 'none';

            // Temporarily turn off dark mode for a printer-friendly PDF
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                if (window.perfChart) {
                    window.perfChart.options.plugins.legend.labels.color = '#333';
                    window.perfChart.update('none'); // Update without animation
                }
            }

            const opt = {
                margin: [10, 10, 10, 10],
                filename: `${summary.title || 'GATE_Exam'}_Results.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, windowWidth: 1000 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(container).save().then(() => {
                // Restore UI
                btns.style.display = originalDisplay;
                if (isDark) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    if (window.perfChart) {
                        window.perfChart.options.plugins.legend.labels.color = '#d8d8e4';
                        window.perfChart.update('none');
                    }
                }
            });
        });
    }
    // Setup notes modal removed in favor of inline notes
});

function formatTime(seconds) {
    if (!seconds && seconds !== 0) return '—';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
}

function renderScoreCard(summary) {
    const scoreCard = document.getElementById('scoreCard');

    const totalMarks = summary.totalMarks ? parseFloat(summary.totalMarks).toFixed(2) : '0.00';
    const maxMarks = summary.maxTotalMarks || '0';

    let percentage = 0;
    let percentageClass = 'percentage-low';

    if (parseFloat(maxMarks) > 0) {
        percentage = ((parseFloat(totalMarks) / parseFloat(maxMarks)) * 100).toFixed(2);
        // Ensure it doesn't show negative if total marks went negative due to penalties
        if (percentage < 0) percentage = 0;

        if (percentage >= 90) {
            percentageClass = 'percentage-high';
        }
    }

    let oneLiner = "Keep practicing to improve your score!";
    if (percentage >= 90) {
        oneLiner = "Outstanding performance! You are on the right track.";
    } else if (percentage >= 75) {
        oneLiner = "Great effort! A little more practice will make you perfect.";
    } else if (percentage >= 50) {
        oneLiner = "Good try! Focus on your weak areas to boost your score.";
    } else if (parseFloat(maxMarks) > 0) {
        oneLiner = "Don't give up! Keep practicing and reviewing the concepts.";
    }

    scoreCard.innerHTML = `
        <div class="score-item">
            <div class="score-value color-total">${totalMarks} / ${maxMarks}</div>
            <div class="score-label">Total Marks</div>
        </div>
        <div class="score-item ${percentageClass}">
            <div class="score-value color-percentage">${percentage}%</div>
            <div class="score-label">Score Percentage</div>
        </div>
        <div class="score-item">
            <div class="score-value color-correct">${summary.correct}</div>
            <div class="score-label">Correct</div>
        </div>
        <div class="score-item">
            <div class="score-value color-incorrect">${summary.incorrect}</div>
            <div class="score-label">Incorrect</div>
        </div>
        <div class="score-item">
            <div class="score-value color-unanswered">${summary.unanswered}</div>
            <div class="score-label">Unanswered</div>
        </div>
    `;

    // Add motivational banner below score card
    const summarySection = scoreCard.closest('.summary-section');
    let banner = summarySection.parentElement.querySelector('.motivation-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.className = 'motivation-banner';
        summarySection.after(banner);
    }
    banner.textContent = oneLiner;

    renderChart(summary);
}

function renderChart(summary) {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    if (window.perfChart) {
        window.perfChart.destroy();
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#d8d8e4' : '#333';

    // Fallbacks if stats are missing
    const correct = summary.correct || 0;
    const incorrect = summary.incorrect || 0;
    const unanswered = summary.unanswered || 0;

    const data = {
        labels: ['Correct', 'Incorrect', 'Unanswered'],
        datasets: [{
            data: [correct, incorrect, unanswered],
            backgroundColor: ['#5cb85c', '#d9534f', '#f0ad4e'],
            borderWidth: 0,
            hoverOffset: 6
        }]
    };

    window.perfChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: textColor,
                        font: { family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return ' ' + context.label + ': ' + context.parsed + ' Qs';
                        }
                    }
                }
            }
        }
    });
}

function renderTimeAnalytics(details) {
    const analyticsSection = document.getElementById('analyticsSection');
    if (!analyticsSection) return;

    let correctTime = 0, correctCount = 0;
    let incorrectTime = 0, incorrectCount = 0;

    details.forEach(d => {
        if (d.status === 'correct') {
            correctTime += (d.timeSpent || 0);
            correctCount++;
        } else if (d.status === 'incorrect') {
            incorrectTime += (d.timeSpent || 0);
            incorrectCount++;
        }
    });

    const avgCorrect = correctCount > 0 ? Math.round(correctTime / correctCount) : 0;
    const avgIncorrect = incorrectCount > 0 ? Math.round(incorrectTime / incorrectCount) : 0;

    let timeOneLiner = "Keep practicing to evaluate your time management!";
    if (avgCorrect > 0 && avgIncorrect > 0) {
        if (avgCorrect < avgIncorrect) {
            timeOneLiner = "Excellent time management! You're answering correctly faster than incorrectly.";
        } else if (avgCorrect > avgIncorrect) {
            timeOneLiner = "You're spending more time on your correct answers. Focus on building speed without losing accuracy.";
        } else {
            timeOneLiner = "Consistent timing! Try to identify difficult questions earlier to save time.";
        }
    } else if (avgCorrect > 0) {
        timeOneLiner = "Great accuracy! Keep practicing to maintain and improve your speed.";
    } else if (avgIncorrect > 0) {
        timeOneLiner = "Focus on the concepts first to improve accuracy, then build up your answering speed.";
    }

    analyticsSection.innerHTML = `
        <h3 style="margin-top:0; color:#3b5998; margin-bottom: 15px;">⏱️ Time vs. Accuracy</h3>
        <div class="analytics-cards">
            <div class="analytics-card correct-time">
                <div class="analytics-label">Avg. Time (Correct)</div>
                <div class="analytics-value">${formatTime(avgCorrect)}</div>
            </div>
            <div class="analytics-card incorrect-time">
                <div class="analytics-label">Avg. Time (Incorrect)</div>
                <div class="analytics-value">${formatTime(avgIncorrect)}</div>
            </div>
        </div>
        <div class="analytics-card" style="margin-top: 15px; padding: 12px;">
            <div style="font-size: 15px; font-weight: bold;" class="color-total">${timeOneLiner}</div>
        </div>
    `;
}

function renderStrategyMetrics(summary, details) {
    const section = document.getElementById('strategyMetrics');
    if (!section) return;

    const total = summary.totalQuestions || details.length;
    const attempted = summary.correct + summary.incorrect;
    const attemptRate = total > 0 ? ((attempted / total) * 100).toFixed(1) : 0;
    const accuracy = attempted > 0 ? ((summary.correct / attempted) * 100).toFixed(1) : 0;

    const maxMarks = parseFloat(summary.maxTotalMarks) || 0;
    const totalMarks = parseFloat(summary.totalMarks) || 0;
    const efficiency = maxMarks > 0 ? ((totalMarks / maxMarks) * 100).toFixed(1) : 0;

    // Total time spent
    const totalTimeSecs = details.reduce((sum, d) => sum + (d.timeSpent || 0), 0);
    const totalMins = Math.floor(totalTimeSecs / 60);
    const totalSecs = totalTimeSecs % 60;
    const avgTimePerQ = total > 0 ? Math.round(totalTimeSecs / total) : 0;

    // Determine color classes
    const attemptColor = attemptRate >= 80 ? '#4caf50' : (attemptRate >= 50 ? '#ff9800' : '#e53935');
    const accColor = accuracy >= 80 ? '#4caf50' : (accuracy >= 50 ? '#ff9800' : '#e53935');
    const effColor = efficiency >= 60 ? '#4caf50' : (efficiency >= 30 ? '#ff9800' : '#e53935');

    section.innerHTML = `
        <h3 style="margin-top:0; color:#3b5998; margin-bottom: 15px;">📊 Strategy Metrics</h3>
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Attempt Rate</div>
                <div class="metric-value" style="color:${attemptColor}">${attemptRate}%</div>
                <div class="metric-bar"><div class="metric-bar-fill" style="width:${attemptRate}%; background:${attemptColor}"></div></div>
                <div class="metric-detail">${attempted} of ${total} questions</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Accuracy Rate</div>
                <div class="metric-value" style="color:${accColor}">${accuracy}%</div>
                <div class="metric-bar"><div class="metric-bar-fill" style="width:${accuracy}%; background:${accColor}"></div></div>
                <div class="metric-detail">${summary.correct} correct of ${attempted} attempted</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Net Score Efficiency</div>
                <div class="metric-value" style="color:${effColor}">${efficiency}%</div>
                <div class="metric-bar"><div class="metric-bar-fill" style="width:${Math.max(0, efficiency)}%; background:${effColor}"></div></div>
                <div class="metric-detail">${totalMarks} of ${maxMarks} marks</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Total Time Used</div>
                <div class="metric-value" style="color:#3b5998">${totalMins}m ${totalSecs}s</div>
                <div class="metric-detail">Avg. ${formatTime(avgTimePerQ)} per question</div>
            </div>
        </div>
    `;
}

function renderQuestionTypePerformance(details) {
    const section = document.getElementById('questionTypeSection');
    if (!section) return;

    // Group by question type
    const types = {};
    details.forEach(d => {
        let typeName = 'MCQ';
        if (d.type === 'multiple') typeName = 'MSQ';
        else if (d.type === 'nat' || d.type === 'numerical' || d.type === 'numeric') typeName = 'NAT';

        if (!types[typeName]) types[typeName] = { total: 0, correct: 0, incorrect: 0, unanswered: 0, time: 0, marksObtained: 0, maxMarks: 0 };
        types[typeName].total++;
        types[typeName][d.status]++;
        types[typeName].time += (d.timeSpent || 0);
        types[typeName].marksObtained += (d.marksObtained || 0);
        types[typeName].maxMarks += (d.maxMarks || 0);
    });

    const typeOrder = ['MCQ', 'MSQ', 'NAT'];
    const typeColors = { 'MCQ': '#337ab7', 'MSQ': '#8e44ad', 'NAT': '#e67e22' };
    const typeIcons = { 'MCQ': '🔘', 'MSQ': '☑️', 'NAT': '🔢' };

    let rows = '';
    typeOrder.forEach(typeName => {
        if (!types[typeName]) return;
        const t = types[typeName];
        const accuracy = (t.correct + t.incorrect) > 0 ? ((t.correct / (t.correct + t.incorrect)) * 100).toFixed(1) : '—';
        const avgTime = t.total > 0 ? Math.round(t.time / t.total) : 0;

        rows += `
            <tr>
                <td><span class="type-badge" style="background:${typeColors[typeName]}">${typeIcons[typeName]} ${typeName}</span></td>
                <td>${t.total}</td>
                <td style="color:#4caf50; font-weight:bold">${t.correct}</td>
                <td style="color:#e53935; font-weight:bold">${t.incorrect}</td>
                <td style="color:#ff9800">${t.unanswered}</td>
                <td><strong>${accuracy}${accuracy !== '—' ? '%' : ''}</strong></td>
                <td>${formatTime(avgTime)}</td>
                <td><strong>${t.marksObtained.toFixed(2)}</strong> / ${t.maxMarks.toFixed(0)}</td>
            </tr>
        `;
    });

    if (!rows) { section.style.display = 'none'; return; }

    section.innerHTML = `
        <h3 style="margin-top:0; color:#3b5998; margin-bottom: 15px;">📋 Question Type Performance</h3>
        <div class="type-table-wrapper">
            <table class="type-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Total</th>
                        <th>✔ Correct</th>
                        <th>✘ Wrong</th>
                        <th>— Skipped</th>
                        <th>Accuracy</th>
                        <th>Avg. Time</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    `;
}

function renderMarksBreakdown(summary, details) {
    const section = document.getElementById('marksBreakdown');
    if (!section) return;

    let positiveMarks = 0;
    let negativeMarks = 0;
    let maxMarks = parseFloat(summary.maxTotalMarks) || 0;

    details.forEach(d => {
        const mo = d.marksObtained || 0;
        if (mo > 0) positiveMarks += mo;
        else if (mo < 0) negativeMarks += Math.abs(mo);
    });

    const netScore = positiveMarks - negativeMarks;
    const marksLeftOnTable = maxMarks - positiveMarks;
    const positivePct = maxMarks > 0 ? ((positiveMarks / maxMarks) * 100).toFixed(1) : 0;
    const negativePct = maxMarks > 0 ? ((negativeMarks / maxMarks) * 100).toFixed(1) : 0;
    const leftPct = maxMarks > 0 ? ((marksLeftOnTable / maxMarks) * 100).toFixed(1) : 0;

    section.innerHTML = `
        <h3 style="margin-top:0; color:#3b5998; margin-bottom: 15px;">💰 Marks Breakdown</h3>
        <div class="marks-breakdown-grid">
            <div class="marks-bd-card marks-bd-positive">
                <div class="marks-bd-icon">+</div>
                <div class="marks-bd-info">
                    <div class="marks-bd-value">+${positiveMarks.toFixed(2)}</div>
                    <div class="marks-bd-label">Marks Earned</div>
                </div>
            </div>
            <div class="marks-bd-card marks-bd-negative">
                <div class="marks-bd-icon">−</div>
                <div class="marks-bd-info">
                    <div class="marks-bd-value">−${negativeMarks.toFixed(2)}</div>
                    <div class="marks-bd-label">Negative Marks</div>
                </div>
            </div>
            <div class="marks-bd-card marks-bd-net">
                <div class="marks-bd-icon">=</div>
                <div class="marks-bd-info">
                    <div class="marks-bd-value">${netScore.toFixed(2)}</div>
                    <div class="marks-bd-label">Net Score (of ${maxMarks.toFixed(0)})</div>
                </div>
            </div>
            <div class="marks-bd-card marks-bd-left">
                <div class="marks-bd-icon">📉</div>
                <div class="marks-bd-info">
                    <div class="marks-bd-value">${marksLeftOnTable.toFixed(2)}</div>
                    <div class="marks-bd-label">Marks Left on Table</div>
                </div>
            </div>
        </div>
        <div class="marks-visual-bar">
            <div class="marks-bar-positive" style="width:${positivePct}%" title="Earned: +${positiveMarks.toFixed(2)}"></div>
            <div class="marks-bar-negative" style="width:${negativePct}%" title="Lost: −${negativeMarks.toFixed(2)}"></div>
            <div class="marks-bar-left" style="width:${leftPct}%" title="Left: ${marksLeftOnTable.toFixed(2)}"></div>
        </div>
        <div class="marks-bar-legend">
            <span><span class="legend-dot" style="background:#4caf50"></span> Earned (${positivePct}%)</span>
            <span><span class="legend-dot" style="background:#e53935"></span> Lost to Negatives (${negativePct}%)</span>
            <span><span class="legend-dot" style="background:#e0e0e0"></span> Not Captured (${leftPct}%)</span>
        </div>
    `;
}

// Render the Speed vs Accuracy Scatter Plot
function renderSpeedAccuracyQuadrant(details) {
    const ctx = document.getElementById('speedAccuracyChart');
    if (!ctx) return;

    if (window.speedAccChart) {
        window.speedAccChart.destroy();
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#d8d8e4' : '#333';
    const gridColor = isDark ? '#333' : '#ddd';

    // Prepare datasets
    const correctData = [];
    const incorrectData = [];
    const unansweredData = [];

    // Scale point radius based on number of questions to reduce clustering
    const totalQuestions = details.length;
    const pointRadius = totalQuestions > 40 ? 3 : totalQuestions > 25 ? 4 : totalQuestions > 15 ? 5 : 6;
    const hoverRadius = pointRadius + 2;

    details.forEach(d => {
        const timeSpent = d.timeSpent || 0;
        const qId = d.questionId || '?';

        // Add deterministic jitter to x and y axes to prevent overlapping points
        const yJitter = ((d.questionId * 17) % 60) - 30; // wider Y jitter
        const xJitter = ((d.questionId * 23) % 20) - 10; // X jitter

        let yValue = 0; // default for unanswered
        if (d.status === 'correct') yValue = 100 + yJitter;
        else if (d.status === 'incorrect') yValue = -100 + yJitter;
        else yValue = 0 + yJitter;

        let xValue = timeSpent + xJitter;
        // spread near-zero times into the positive space explicitly
        if (xValue < 0) {
            xValue = Math.abs((d.questionId * 31) % 15);
        }

        const point = { x: xValue, y: yValue, qId: qId, type: d.type || 'MCQ', origStatus: d.status, origTime: timeSpent };

        if (d.status === 'correct') correctData.push(point);
        else if (d.status === 'incorrect') incorrectData.push(point);
        else unansweredData.push(point);
    });

    // Calculate the max x value across all data points to position labels dynamically
    const allPoints = [...correctData, ...incorrectData, ...unansweredData];
    const maxTime = allPoints.length > 0 ? Math.max(...allPoints.map(p => p.x)) : 200;
    // Ensure axis extends beyond 180 (the threshold line) with padding for labels
    const xAxisMax = Math.max(maxTime + 40, 240);
    // Position the "Time Traps" label centered in the time-traps quadrant
    const timeTrapLabelX = Math.max(210, 180 + (xAxisMax - 180) / 2);

    window.speedAccChart = new Chart(ctx.getContext('2d'), {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: '✔ Correct',
                    data: correctData,
                    backgroundColor: 'rgba(76, 175, 80, 0.7)',
                    borderColor: '#4caf50',
                    pointRadius: pointRadius,
                    pointHoverRadius: hoverRadius
                },
                {
                    label: '✘ Incorrect',
                    data: incorrectData,
                    backgroundColor: 'rgba(229, 57, 53, 0.7)',
                    borderColor: '#e53935',
                    pointRadius: pointRadius,
                    pointHoverRadius: hoverRadius
                },
                {
                    label: '— Unanswered',
                    data: unansweredData,
                    backgroundColor: 'rgba(255, 152, 0, 0.7)',
                    borderColor: '#ff9800',
                    pointRadius: Math.max(pointRadius - 1, 3),
                    pointHoverRadius: hoverRadius
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { right: 15, top: 5 }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Time Spent (Seconds)', color: textColor, font: { weight: 'bold' } },
                    grid: { color: gridColor },
                    ticks: { color: textColor },
                    max: xAxisMax,
                    min: -5
                },
                y: {
                    title: { display: true, text: 'Accuracy Result', color: textColor, font: { weight: 'bold' } },
                    grid: { color: gridColor },
                    ticks: {
                        color: textColor,
                        callback: function (value) {
                            if (value === 100) return 'Correct';
                            if (value === 0) return 'Omitted';
                            if (value === -100) return 'Wrong';
                            return '';
                        },
                        stepSize: 100,
                        max: 150,
                        min: -150
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: textColor }
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: 0,
                            yMax: 0,
                            borderColor: gridColor,
                            borderWidth: 2,
                            borderDash: [5, 5]
                        },
                        line2: {
                            type: 'line',
                            xMin: 180, // 3 minutes threshold
                            xMax: 180,
                            borderColor: gridColor,
                            borderWidth: 2,
                            borderDash: [5, 5]
                        },
                        box1: {
                            type: 'box',
                            xMin: 0, xMax: 180, yMin: 0, yMax: 150,
                            backgroundColor: 'rgba(76, 175, 80, 0.05)',
                            drawTime: 'beforeDraw'
                        },
                        box2: {
                            type: 'box',
                            xMin: 180, xMax: xAxisMax, yMin: -150, yMax: 0,
                            backgroundColor: 'rgba(229, 57, 53, 0.05)',
                            drawTime: 'beforeDraw'
                        },
                        label1: {
                            type: 'label',
                            xValue: 90,
                            yValue: 135,
                            backgroundColor: 'rgba(76, 175, 80, 0.9)',
                            content: ['⚡ Quick Wins'],
                            font: { size: 12, weight: 'bold' },
                            color: '#fff',
                            borderRadius: 4,
                            padding: 4
                        },
                        label2: {
                            type: 'label',
                            xValue: timeTrapLabelX,
                            yValue: -135,
                            backgroundColor: 'rgba(229, 57, 53, 0.9)',
                            content: ['🐢 Time Traps'],
                            font: { size: 12, weight: 'bold' },
                            color: '#fff',
                            borderRadius: 4,
                            padding: 4
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const d = ctx.raw;
                            const timeStr = typeof formatTime === 'function' ? formatTime(d.origTime) : Math.round(d.origTime) + 's';
                            return `Q${d.qId} (${d.type}): ${d.origStatus} | Time: ${timeStr} (Click to View)`;
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                intersect: true
            },
            onClick: (event, elements, chart) => {
                if (elements && elements.length > 0) {
                    const firstElement = elements[0];
                    const datasetIndex = firstElement.datasetIndex;
                    const index = firstElement.index;
                    const dataPoint = chart.data.datasets[datasetIndex].data[index];

                    if (dataPoint && dataPoint.qId) {
                        const questionHeader = Array.from(document.querySelectorAll('.rq-header')).find(el => el.textContent.includes(`Question ${dataPoint.qId} (`));

                        if (questionHeader) {
                            const questionCard = questionHeader.closest('.result-question-card');
                            if (questionCard) {
                                // Scroll into view smoothly
                                questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

                                // Add a temporary highlight effect
                                const originalBg = questionCard.style.backgroundColor;
                                questionCard.style.transition = 'background-color 0.5s ease';
                                questionCard.style.backgroundColor = 'rgba(255, 235, 59, 0.4)'; // Yellowish highlight

                                setTimeout(() => {
                                    questionCard.style.backgroundColor = originalBg;
                                    setTimeout(() => {
                                        questionCard.style.transition = ''; // reset transition
                                    }, 500);
                                }, 1500);
                            }
                        } else {
                            // If the question is filtered out, alert the user or change the filter
                            alert(`Question ${dataPoint.qId} is currently hidden by filters. Select 'All Questions' to view it.`);
                        }
                    }
                }
            }
        }
    });
}

function renderAttemptOrder(summary, details) {
    const section = document.getElementById('attemptOrderSection');
    if (!section || !summary.attemptSequence || summary.attemptSequence.length === 0) {
        if (section) section.style.display = 'none';
        return;
    }

    section.style.display = 'block';

    // Build timeline UI
    let timelineHtml = summary.attemptSequence.map((qId, index) => {
        // Find if they got it right/wrong to color code
        const d = details.find(x => x.questionId === qId);
        let statusClass = 'neutral';
        if (d) {
            if (d.status === 'correct') statusClass = 'correct';
            else if (d.status === 'incorrect') statusClass = 'incorrect';
            else statusClass = 'unanswered';
        }

        return `
            <div class="timeline-item status-${statusClass}" title="Attempt #${index + 1}: Question ${qId}">
                Q${qId}
            </div>
            ${index < summary.attemptSequence.length - 1 ? '<div class="timeline-connector">➔</div>' : ''}
        `;
    }).join('');

    section.innerHTML = `
        <h3 style="margin-top:0; color:#3b5998; margin-bottom: 5px;">🛤️ Attempt Order Replay</h3>
        <p style="font-size: 13px; color: var(--text-color); opacity: 0.8; margin-bottom: 15px;">
            The exact sequence in which you visited and attempted the questions.
        </p>
        <div class="attempt-timeline">
            ${timelineHtml}
        </div>
    `;
}

function renderStrategySuggestions(summary, details) {
    const section = document.getElementById('strategySuggestions');
    if (!section) return;

    const total = summary.totalQuestions || details.length;
    const attempted = summary.correct + summary.incorrect;
    const accuracy = attempted > 0 ? (summary.correct / attempted) * 100 : 0;
    const attemptRate = total > 0 ? (attempted / total) * 100 : 0;
    const maxMarks = parseFloat(summary.maxTotalMarks) || 0;
    const totalMarks = parseFloat(summary.totalMarks) || 0;

    // Compute negative marks
    let negativeMarks = 0;
    details.forEach(d => { if ((d.marksObtained || 0) < 0) negativeMarks += Math.abs(d.marksObtained); });

    // Time analysis
    const totalTimeSecs = details.reduce((sum, d) => sum + (d.timeSpent || 0), 0);
    let correctTime = 0, incorrectTime = 0, correctCount = 0, incorrectCount = 0;
    details.forEach(d => {
        if (d.status === 'correct') { correctTime += (d.timeSpent || 0); correctCount++; }
        else if (d.status === 'incorrect') { incorrectTime += (d.timeSpent || 0); incorrectCount++; }
    });
    const avgCorrectTime = correctCount > 0 ? correctTime / correctCount : 0;
    const avgIncorrectTime = incorrectCount > 0 ? incorrectTime / incorrectCount : 0;

    // Quick questions (< 30s) and slow questions (> 180s) analysis
    const quickCorrect = details.filter(d => d.status === 'correct' && (d.timeSpent || 0) < 30).length;
    const slowIncorrect = details.filter(d => d.status === 'incorrect' && (d.timeSpent || 0) > 180).length;

    // Build suggestions
    const suggestions = [];

    // 1. Negative marking analysis
    if (negativeMarks > 0) {
        const negPct = maxMarks > 0 ? ((negativeMarks / maxMarks) * 100).toFixed(1) : 0;
        if (negativeMarks > totalMarks * 0.2) {
            suggestions.push({
                icon: '🚨',
                title: 'High Negative Marks Impact',
                text: `You lost <strong>${negativeMarks.toFixed(2)} marks</strong> (${negPct}% of total) to negative marking. In GATE, eliminate at least 2 options before guessing. If unsure, it's better to skip MCQs.`,
                type: 'danger'
            });
        } else {
            suggestions.push({
                icon: '⚠️',
                title: 'Negative Marks Management',
                text: `You lost <strong>${negativeMarks.toFixed(2)} marks</strong> to penalties. Use the elimination technique — if you can confidently rule out 2 options, it's worth attempting.`,
                type: 'warning'
            });
        }
    } else if (summary.incorrect === 0 && attempted > 0) {
        suggestions.push({
            icon: '🎯',
            title: 'Perfect Accuracy!',
            text: `Zero negative marks! Your selection strategy is excellent. Now focus on attempting more questions to maximize your score.`,
            type: 'success'
        });
    }

    // 2. Attempt rate analysis
    if (attemptRate < 50) {
        suggestions.push({
            icon: '📝',
            title: 'Low Attempt Rate',
            text: `You attempted only <strong>${attemptRate.toFixed(0)}%</strong> of questions. In GATE, aim for 70-85% attempt rate. Practice more mock tests to build speed and confidence across topics.`,
            type: 'danger'
        });
    } else if (attemptRate < 70) {
        suggestions.push({
            icon: '📈',
            title: 'Increase Your Attempts',
            text: `You attempted <strong>${attemptRate.toFixed(0)}%</strong> of questions. Top rankers typically attempt 75-90%. Focus on identifying easy questions first and attempt them early.`,
            type: 'warning'
        });
    } else {
        suggestions.push({
            icon: '✅',
            title: 'Good Attempt Rate',
            text: `You attempted <strong>${attemptRate.toFixed(0)}%</strong> of questions — a solid rate. Now focus on maintaining or improving accuracy.`,
            type: 'success'
        });
    }

    // 3. Accuracy analysis
    if (accuracy < 50 && attempted > 0) {
        suggestions.push({
            icon: '🎯',
            title: 'Focus on Accuracy',
            text: `Your accuracy is <strong>${accuracy.toFixed(0)}%</strong>. Prioritize concept clarity over speed. Revise fundamentals for topics where you made errors, and practice with subject-wise tests.`,
            type: 'danger'
        });
    } else if (accuracy >= 50 && accuracy < 75) {
        suggestions.push({
            icon: '🔍',
            title: 'Improve Answer Precision',
            text: `Accuracy at <strong>${accuracy.toFixed(0)}%</strong> — good but needs improvement. Carefully re-read questions before answering. Many GATE errors come from misreading the problem, not lack of knowledge.`,
            type: 'warning'
        });
    } else if (accuracy >= 75) {
        suggestions.push({
            icon: '⭐',
            title: 'Excellent Accuracy',
            text: `<strong>${accuracy.toFixed(0)}%</strong> accuracy is outstanding! You clearly know your concepts. Focus on time management and attempting a few more questions.`,
            type: 'success'
        });
    }

    // 4. Time management
    if (avgCorrectTime > 0 && avgIncorrectTime > 0) {
        if (avgIncorrectTime > avgCorrectTime * 1.5) {
            suggestions.push({
                icon: '⏱️',
                title: 'Time Wasted on Wrong Answers',
                text: `You spent an avg of <strong>${formatTime(Math.round(avgIncorrectTime))}</strong> on wrong answers vs <strong>${formatTime(Math.round(avgCorrectTime))}</strong> on correct ones. Set a mental time-limit: if you can't solve a question in 3 minutes, mark it for review and move on.`,
                type: 'warning'
            });
        }
    }

    if (slowIncorrect >= 2) {
        suggestions.push({
            icon: '🐢',
            title: 'Avoid Time Traps',
            text: `<strong>${slowIncorrect} questions</strong> took over 3 minutes and were still wrong. These are "time traps" — learn to identify them early, mark for review, and revisit only if time permits.`,
            type: 'warning'
        });
    }

    // 5. Unanswered questions
    if (summary.unanswered > 0) {
        const unansweredMarks = details.filter(d => d.status === 'unanswered').reduce((sum, d) => sum + (d.maxMarks || 0), 0);
        suggestions.push({
            icon: '💡',
            title: `${summary.unanswered} Questions Left Unanswered`,
            text: `Those unanswered questions had <strong>${unansweredMarks} marks</strong> at stake. For MSQ/NAT questions (no negative marking), always attempt — even a partial answer in MSQ is better than skipping.`,
            type: 'info'
        });
    }

    // 6. Quick wins analysis
    if (quickCorrect >= 3) {
        suggestions.push({
            icon: '⚡',
            title: 'Great Quick Solving!',
            text: `You correctly answered <strong>${quickCorrect} questions in under 30 seconds</strong>. This speed on easy questions saves time for harder problems — keep it up!`,
            type: 'success'
        });
    }

    // 7. Overall strategy tip (always show)
    const efficiency = maxMarks > 0 ? (totalMarks / maxMarks) * 100 : 0;
    if (efficiency >= 60) {
        suggestions.push({
            icon: '🏆',
            title: 'GATE Strategy Summary',
            text: `Strong performance! Score efficiency at <strong>${efficiency.toFixed(0)}%</strong>. For further improvement: revise your weak questions from this test, solve previous year papers from the same topics, and take timed full-length mocks regularly.`,
            type: 'success'
        });
    } else if (efficiency >= 30) {
        suggestions.push({
            icon: '📚',
            title: 'GATE Strategy Summary',
            text: `Score efficiency at <strong>${efficiency.toFixed(0)}%</strong>. Focus areas: (1) Revise the ${summary.incorrect} incorrect questions thoroughly, (2) Practice topic-wise previous year questions, (3) Take 1 full-length mock weekly to build exam stamina.`,
            type: 'info'
        });
    } else {
        suggestions.push({
            icon: '🔄',
            title: 'GATE Strategy Summary',
            text: `Score efficiency at <strong>${efficiency.toFixed(0)}%</strong>. Don't be discouraged! Start with: (1) Focus on 3-4 high-weightage subjects, (2) Solve 10 PYQs daily per topic, (3) Gradually take subject-wise tests before full mocks. Consistency beats intensity.`,
            type: 'info'
        });
    }

    // Render
    section.innerHTML = `
        <h3 style="margin-top:0; color:#3b5998; margin-bottom: 15px;">🎯 GATE Strategy Suggestions</h3>
        <div class="suggestions-list">
            ${suggestions.map(s => `
                <div class="suggestion-card suggestion-${s.type}">
                    <div class="suggestion-icon">${s.icon}</div>
                    <div class="suggestion-body">
                        <div class="suggestion-title">${s.title}</div>
                        <div class="suggestion-text">${s.text}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderQuestions(summary, details, filter = 'all') {
    const list = document.getElementById('questionsList');

    // Helper for NAT type check
    const isNAT = (type) => type === 'nat' || type === 'numerical' || type === 'numeric';

    let filtered;

    switch (filter) {
        // --- Sorting filters ---
        case 'most_time':
            filtered = [...details].sort((a, b) => (b.timeSpent || 0) - (a.timeSpent || 0));
            break;
        case 'least_time':
            filtered = [...details].sort((a, b) => (a.timeSpent || 0) - (b.timeSpent || 0));
            break;

        // --- Status filters ---
        case 'correct':
        case 'incorrect':
        case 'unanswered':
            filtered = details.filter(d => d.status === filter);
            break;

        // --- Time-based strategy filters ---
        case 'time_traps':
            filtered = details.filter(d => d.status === 'incorrect' && (d.timeSpent || 0) > 180);
            break;
        case 'quick_wins':
            filtered = details.filter(d => d.status === 'correct' && (d.timeSpent || 0) < 30);
            break;
        case 'slow_correct':
            filtered = details.filter(d => d.status === 'correct' && (d.timeSpent || 0) > 180);
            break;

        // --- Marks weight filters ---
        case 'marks_1':
            filtered = details.filter(d => (d.maxMarks || 0) === 1);
            break;
        case 'marks_2':
            filtered = details.filter(d => (d.maxMarks || 0) === 2);
            break;

        // --- Question type filters ---
        case 'type_mcq':
            filtered = details.filter(d => !d.type || d.type === 'single');
            break;
        case 'type_msq':
            filtered = details.filter(d => d.type === 'multiple');
            break;
        case 'type_nat':
            filtered = details.filter(d => isNAT(d.type));
            break;

        // --- Strategy filters ---
        case 'negative_only':
            filtered = details.filter(d => (d.marksObtained || 0) < 0);
            break;
        case 'marked_review':
            filtered = details.filter(d => d.markedForReview === true);
            break;
        case 'easy_unattempted':
            filtered = details.filter(d => d.status === 'unanswered' && (d.maxMarks || 0) <= 1);
            break;

        // --- Explanation filters ---
        case 'has_explanation':
            filtered = details.filter(d => d.explanation && d.explanation.trim() !== '');
            break;
        case 'no_explanation':
            filtered = details.filter(d => !d.explanation || d.explanation.trim() === '');
            break;

        // --- Bookmark filter ---
        case 'bookmarked':
            const bkHashes = window._bookmarkedHashes || new Set();
            filtered = details.filter(d => bkHashes.has(makeQuestionHash(summary.title, d.questionId)));
            break;

        // --- Silly Mistake filter ---
        case 'silly_mistake':
            const smHashes = window._sillyMistakeHashes || new Set();
            filtered = details.filter(d => smHashes.has(makeQuestionHash(summary.title, d.questionId)));
            break;

        // --- Default: all ---
        default:
            filtered = details;
            break;
    }

    document.getElementById('questionCount').textContent = `Showing: ${filtered.length} of ${details.length}`;

    list.innerHTML = filtered.map(d => {
        const statusClass = `status-${d.status}`;

        // Build options HTML
        let optionsHTML = '';
        if (d.options && d.options.length > 0) {
            optionsHTML = '<div class="rq-options">';

            // Support newly saved correct indices from exam_script, and fallback for older results
            let correctIndices = d.correctAnswerIndices;
            if (!correctIndices) {
                correctIndices = [];
                const rawCorrect = d.correctAnswer;
                const correctList = Array.isArray(rawCorrect) ? rawCorrect : [rawCorrect];
                correctList.forEach(val => {
                    if (val === undefined || val === null) return;
                    const strVal = String(val).trim();
                    const exactMatchIdx = d.options.findIndex(opt => String(opt).trim() === strVal);
                    if (exactMatchIdx !== -1) { correctIndices.push(exactMatchIdx); return; }
                    if (/^[a-zA-Z]$/.test(strVal)) {
                        const idx = strVal.toUpperCase().charCodeAt(0) - 65;
                        if (idx >= 0 && idx < d.options.length) { correctIndices.push(idx); return; }
                    }
                    const cleanText = strVal.replace(/<\/?[^>]+(>|$)/g, "").trim();
                    const labelMatch = cleanText.match(/^([A-Z])[\.)]/i);
                    if (labelMatch) {
                        const letter = labelMatch[1].toUpperCase();
                        const idx = letter.charCodeAt(0) - 65;
                        if (idx >= 0 && idx < d.options.length) { correctIndices.push(idx); return; }
                    }
                });
            }

            d.options.forEach((opt, index) => {
                let optClass = '';
                const isCorrect = correctIndices.includes(index);

                // userAnswer stores indices, so compare with index
                const isUserChoice = Array.isArray(d.userAnswer)
                    ? d.userAnswer.includes(index)
                    : d.userAnswer === index;

                if (isCorrect) optClass = 'correct-opt';
                if (isUserChoice && !isCorrect) optClass = 'wrong-opt';

                const icon = isCorrect ? '✔' : (isUserChoice ? '✘' : '○');
                optionsHTML += `<div class="rq-option ${optClass}"><span>${icon}</span> <span>${opt}</span></div>`;
            });
            optionsHTML += '</div>';
        }

        const qHash = makeQuestionHash(summary.title, d.questionId);
        const isBookmarked = (window._bookmarkedHashes || new Set()).has(qHash);
        const isSillyMistake = (window._sillyMistakeHashes || new Set()).has(qHash);

        return `
            <div class="result-question-card ${d.status}">
                <div class="rq-header">
                    <span>
                        <button class="bookmark-star ${isBookmarked ? 'bookmarked' : ''}" data-qid="${d.questionId}" data-qhash="${qHash}" title="${isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}">${isBookmarked ? '★' : '☆'}</button>
                        <button class="silly-mistake-btn ${isSillyMistake ? 'marked' : ''}" data-qid="${d.questionId}" data-qhash="${qHash}" title="${isSillyMistake ? 'Remove silly mistake' : 'Mark as silly mistake'}">🤦</button>
                        Question ${d.questionId} (${d.type === 'multiple' ? 'MSQ' : (d.type === 'nat' || d.type === 'numerical' || d.type === 'numeric' ? 'NAT' : 'MCQ')})
                        <button class="notes-btn" data-qid="${d.questionId}" data-qhash="${qHash}" title="Add/View notes for this question">📝 Notes</button>
                    </span>
                    <div class="rq-header-right">
                        <span class="rq-time" title="Time spent on this question">⏱ ${formatTime(d.timeSpent)}</span>
                        <span class="rq-marks ${d.marksObtained > 0 ? 'marks-positive' : (d.marksObtained < 0 ? 'marks-negative' : 'marks-neutral')}">
                            ${d.marksObtained > 0 ? '+' : ''}${parseFloat(d.marksObtained || 0).toFixed(2)} Marks
                        </span>
                        <span class="rq-scheme marks-scheme">
                            (+${parseFloat(d.maxMarks || 1).toFixed(2)} / -${parseFloat(d.negativeMarks || 0).toFixed(2)})
                        </span>
                        <span class="rq-status ${statusClass}">${d.status}</span>
                    </div>
                </div>
                <div class="rq-text">${d.questionText}</div>
                ${optionsHTML}
                <div class="rq-answer-info">
                    <span class="ans-label">Your Answer: <span class="${d.status === 'correct' ? 'ans-correct' : 'ans-wrong'}">${d.userAnswerDisplay || 'Not Attempted'}</span></span>
                    <span class="ans-label">Correct Answer: <span class="ans-correct">${d.correctAnswerDisplay}</span></span>
                </div>
                ${d.explanation ? `
                <details class="rq-explanation">
                    <summary>📖 View Explanation</summary>
                    <div class="rq-explanation-content">${d.explanation}</div>
                </details>
                ` : ''}

                <div class="inline-notes-container" id="notes-container-${qHash}" style="display: none;">
                    <div class="inline-notes-header">📝 Your Notes</div>
                    <textarea class="inline-notes-textarea" id="notes-textarea-${qHash}" placeholder="Type your notes here... (Saves automatically to bookmarks)"></textarea>
                    <div class="inline-notes-actions">
                        <span class="inline-notes-status" id="notes-status-${qHash}"></span>
                        <button class="btn-pill btn-save-inline-note" data-qhash="${qHash}" data-qid="${d.questionId}">Save Notes</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Trigger MathJax re-render (v3 API, scoped to questions list)
    function typesetList() {
        if (window.MathJax && MathJax.typesetPromise) {
            if (MathJax.typesetClear) MathJax.typesetClear([list]);
            MathJax.typesetPromise([list]).catch(err => console.warn('MathJax typeset error:', err));
        } else {
            setTimeout(typesetList, 300);
        }
    }
    typesetList();

    // Attach bookmark click handlers after rendering
    list.querySelectorAll('.bookmark-star').forEach(btn => {
        btn.addEventListener('click', async function (e) {
            e.stopPropagation();
            const qid = parseInt(this.dataset.qid);
            const qHash = this.dataset.qhash;
            const isCurrentlyBookmarked = (window._bookmarkedHashes || new Set()).has(qHash);

            try {
                if (isCurrentlyBookmarked) {
                    await removeBookmarkFromDB(qHash);
                    window._bookmarkedHashes.delete(qHash);
                } else {
                    const questionData = details.find(dd => dd.questionId === qid);
                    if (questionData) {
                        await saveBookmarkToDB({
                            questionHash: qHash,
                            examTitle: summary.title,
                            questionId: questionData.questionId,
                            questionText: questionData.questionText,
                            options: questionData.options,
                            correctAnswer: questionData.correctAnswer,
                            correctAnswerDisplay: questionData.correctAnswerDisplay,
                            userAnswer: questionData.userAnswer,
                            userAnswerDisplay: questionData.userAnswerDisplay,
                            status: questionData.status,
                            type: questionData.type,
                            explanation: questionData.explanation,
                            maxMarks: questionData.maxMarks,
                            negativeMarks: questionData.negativeMarks,
                            marksObtained: questionData.marksObtained
                        });
                        window._bookmarkedHashes.add(qHash);
                    }
                }
            } catch (err) {
                console.warn('Bookmark toggle error:', err);
            }

            const isNowBookmarked = window._bookmarkedHashes.has(qHash);
            this.classList.toggle('bookmarked', isNowBookmarked);
            this.textContent = isNowBookmarked ? '★' : '☆';
            this.title = isNowBookmarked ? 'Remove bookmark' : 'Bookmark this question';
        });
    });

    // Attach silly mistake click handlers after rendering
    list.querySelectorAll('.silly-mistake-btn').forEach(btn => {
        btn.addEventListener('click', async function (e) {
            e.stopPropagation();
            const qid = parseInt(this.dataset.qid);
            const qHash = this.dataset.qhash;
            const isCurrentlyMarked = (window._sillyMistakeHashes || new Set()).has(qHash);

            try {
                if (isCurrentlyMarked) {
                    await removeSillyMistakeFromDB(qHash);
                    window._sillyMistakeHashes.delete(qHash);
                } else {
                    const questionData = details.find(dd => dd.questionId === qid);
                    if (questionData) {
                        await saveSillyMistakeToDB({
                            questionHash: qHash,
                            examTitle: summary.title,
                            questionId: questionData.questionId,
                            questionText: questionData.questionText,
                            options: questionData.options,
                            correctAnswer: questionData.correctAnswer,
                            correctAnswerDisplay: questionData.correctAnswerDisplay,
                            userAnswer: questionData.userAnswer,
                            userAnswerDisplay: questionData.userAnswerDisplay,
                            status: questionData.status,
                            type: questionData.type,
                            explanation: questionData.explanation,
                            maxMarks: questionData.maxMarks,
                            negativeMarks: questionData.negativeMarks,
                            marksObtained: questionData.marksObtained
                        });
                        window._sillyMistakeHashes.add(qHash);
                    }
                }
            } catch (err) {
                console.warn('Silly mistake toggle error:', err);
            }

            const isNowMarked = window._sillyMistakeHashes.has(qHash);
            this.classList.toggle('marked', isNowMarked);
            this.title = isNowMarked ? 'Remove silly mistake' : 'Mark as silly mistake';
        });
    });

    // Attach notes click handlers after rendering (inline toggle)
    list.querySelectorAll('.notes-btn').forEach(btn => {
        btn.addEventListener('click', async function (e) {
            e.stopPropagation();
            const qHash = this.dataset.qhash;
            const container = document.getElementById(`notes-container-${qHash}`);
            const textarea = document.getElementById(`notes-textarea-${qHash}`);

            if (container.style.display === 'none') {
                container.style.display = 'block';
                const originalPlaceholder = textarea.placeholder;
                textarea.placeholder = "Loading...";

                try {
                    const existing = await getBookmarkByHash(qHash);
                    if (existing && existing.notes) {
                        textarea.value = existing.notes;
                    }
                } catch (err) {
                    console.warn('Failed to load notes', err);
                }
                textarea.placeholder = originalPlaceholder;
                textarea.focus();
            } else {
                container.style.display = 'none';
            }
        });
    });

    // Attach inline save handlers
    list.querySelectorAll('.btn-save-inline-note').forEach(btn => {
        btn.addEventListener('click', async function (e) {
            e.stopPropagation();
            const qid = parseInt(this.dataset.qid);
            const qHash = this.dataset.qhash;

            const textarea = document.getElementById(`notes-textarea-${qHash}`);
            const statusSpan = document.getElementById(`notes-status-${qHash}`);
            const notes = textarea.value;

            const isCurrentlyBookmarked = (window._bookmarkedHashes || new Set()).has(qHash);

            this.textContent = 'Saving...';
            this.disabled = true;
            statusSpan.textContent = '';

            try {
                if (isCurrentlyBookmarked) {
                    await updateBookmarkNoteInDB(qHash, notes);
                } else {
                    const questionData = details.find(dd => dd.questionId === qid);
                    if (questionData) {
                        await saveBookmarkToDB({
                            questionHash: qHash,
                            examTitle: summary.title,
                            questionId: questionData.questionId,
                            questionText: questionData.questionText,
                            options: questionData.options,
                            correctAnswer: questionData.correctAnswer,
                            correctAnswerDisplay: questionData.correctAnswerDisplay,
                            userAnswer: questionData.userAnswer,
                            userAnswerDisplay: questionData.userAnswerDisplay,
                            status: questionData.status,
                            type: questionData.type,
                            explanation: questionData.explanation,
                            maxMarks: questionData.maxMarks,
                            negativeMarks: questionData.negativeMarks,
                            marksObtained: questionData.marksObtained,
                            notes: notes
                        });
                        window._bookmarkedHashes.add(qHash);

                        // Update UI star manually
                        const starBtn = document.querySelector(`.bookmark-star[data-qhash="${qHash}"]`);
                        if (starBtn) {
                            starBtn.classList.add('bookmarked');
                            starBtn.textContent = '★';
                            starBtn.title = 'Remove bookmark';
                        }
                    }
                }
                statusSpan.textContent = '✅ Saved';
                statusSpan.style.color = '#5cb85c';
                setTimeout(() => { if (statusSpan) statusSpan.textContent = ''; }, 3000);
            } catch (err) {
                console.error("Failed to save note", err);
                statusSpan.textContent = '❌ Error saving';
                statusSpan.style.color = '#d9534f';
            } finally {
                this.textContent = 'Save Notes';
                this.disabled = false;
            }
        });
    });
}

function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function downloadCSV(summary, details) {
    let csv = 'Question,Status,Your Answer,Correct Answer,Time Spent\n';
    details.forEach(d => {
        const userAns = stripHtml(d.userAnswerDisplay || 'Not Attempted').replace(/,/g, ';');
        const correctAns = stripHtml(d.correctAnswerDisplay || '').replace(/,/g, ';');
        const qText = `Q${d.questionId}`;
        csv += `${qText},${d.status},${userAns},${correctAns},${formatTime(d.timeSpent)}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${summary.title || 'exam'}_results.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

// Old localStorage bookmarks removed — now using IndexedDB via db.js

// =====================================================
// Confidence Calibration
// =====================================================
function renderConfidenceCalibration(details) {
    const section = document.getElementById('confidenceCalibration');
    if (!section) return;

    const markedQuestions = details.filter(d => d.markedForReview === true);
    if (markedQuestions.length === 0) {
        section.style.display = 'none';
        return;
    }

    const markedCorrect = markedQuestions.filter(d => d.status === 'correct').length;
    const markedIncorrect = markedQuestions.filter(d => d.status === 'incorrect').length;
    const markedUnanswered = markedQuestions.filter(d => d.status === 'unanswered').length;
    const totalMarked = markedQuestions.length;
    const calibrationAccuracy = totalMarked > 0 ? ((markedCorrect / totalMarked) * 100).toFixed(1) : 0;

    // Unmarked questions analysis
    const unmarkedQuestions = details.filter(d => !d.markedForReview);
    const unmarkedCorrect = unmarkedQuestions.filter(d => d.status === 'correct').length;
    const unmarkedIncorrect = unmarkedQuestions.filter(d => d.status === 'incorrect').length;
    const unmarkedAccuracy = (unmarkedCorrect + unmarkedIncorrect) > 0
        ? ((unmarkedCorrect / (unmarkedCorrect + unmarkedIncorrect)) * 100).toFixed(1) : 0;

    // Insight
    let insight = '';
    if (parseFloat(calibrationAccuracy) >= 70) {
        insight = `<div class="suggestion-card suggestion-success" style="margin-top:12px"><div class="suggestion-icon">🎯</div><div class="suggestion-body"><div class="suggestion-title">Great Self-Awareness!</div><div class="suggestion-text">You marked ${totalMarked} questions for review and got <strong>${calibrationAccuracy}%</strong> of them right. Your gut feeling is reliable — trust it more during the exam!</div></div></div>`;
    } else if (parseFloat(calibrationAccuracy) >= 40) {
        insight = `<div class="suggestion-card suggestion-warning" style="margin-top:12px"><div class="suggestion-icon">🤔</div><div class="suggestion-body"><div class="suggestion-title">Mixed Confidence</div><div class="suggestion-text">You marked ${totalMarked} questions for review but only got <strong>${calibrationAccuracy}%</strong> right. You're uncertain on questions you actually know — try to identify what makes you doubt yourself.</div></div></div>`;
    } else {
        insight = `<div class="suggestion-card suggestion-danger" style="margin-top:12px"><div class="suggestion-icon">⚠️</div><div class="suggestion-body"><div class="suggestion-title">Low Confidence Accuracy</div><div class="suggestion-text">Only <strong>${calibrationAccuracy}%</strong> of your marked-for-review questions were correct. Focus on strengthening concepts in these topics so you can answer with more confidence.</div></div></div>`;
    }

    section.innerHTML = `
        <h3 style="margin-top:0; color:#3b5998; margin-bottom: 15px;">🧭 Confidence Calibration</h3>
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Marked for Review</div>
                <div class="metric-value" style="color:#9C27B0">${totalMarked}</div>
                <div class="metric-detail">of ${details.length} total questions</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Marked → Correct</div>
                <div class="metric-value" style="color:#4caf50">${markedCorrect}</div>
                <div class="metric-detail">You knew it but doubted yourself</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Marked → Wrong</div>
                <div class="metric-value" style="color:#e53935">${markedIncorrect}</div>
                <div class="metric-detail">Rightly uncertain</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Marked → Skipped</div>
                <div class="metric-value" style="color:#ff9800">${markedUnanswered}</div>
                <div class="metric-detail">Flagged but didn't attempt</div>
            </div>
        </div>
        <div class="metrics-grid" style="margin-top:10px">
            <div class="metric-card">
                <div class="metric-label">Confidence Accuracy</div>
                <div class="metric-value" style="color:${parseFloat(calibrationAccuracy) >= 60 ? '#4caf50' : '#e53935'}">${calibrationAccuracy}%</div>
                <div class="metric-bar"><div class="metric-bar-fill" style="width:${calibrationAccuracy}%; background:${parseFloat(calibrationAccuracy) >= 60 ? '#4caf50' : '#e53935'}"></div></div>
                <div class="metric-detail">of marked questions answered correctly</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Unmarked Accuracy</div>
                <div class="metric-value" style="color:#3b5998">${unmarkedAccuracy}%</div>
                <div class="metric-bar"><div class="metric-bar-fill" style="width:${unmarkedAccuracy}%; background:#3b5998"></div></div>
                <div class="metric-detail">${unmarkedCorrect} correct of ${unmarkedCorrect + unmarkedIncorrect} confident attempts</div>
            </div>
        </div>
        ${insight}
    `;
}

// =====================================================
// Retry Mistakes — Build new exam from wrong/unanswered
// =====================================================
function retryMistakes(summary, details) {
    const wrongQuestions = details.filter(d => d.status === 'incorrect' || d.status === 'unanswered');

    if (wrongQuestions.length === 0) {
        alert('🎉 No wrong or unanswered questions to retry! Perfect score!');
        return;
    }

    // Build exam JSON in the expected format
    const retryExam = {
        title: `Retry: ${summary.title || 'Exam'} (${wrongQuestions.length} Qs)`,
        duration: Math.max(30, Math.ceil(wrongQuestions.length * 3)), // 3 min per question
        sections: [{
            name: 'Retry — Wrong & Unanswered',
            questions: wrongQuestions.map((d, index) => ({
                id: index + 1,
                question: d.questionText,
                type: d.type || 'single',
                options: d.options || [],
                correct_answer: d.correctAnswer,
                marks: d.maxMarks || 1,
                negative_marks: d.negativeMarks || 0,
                explanation: d.explanation || ''
            }))
        }]
    };

    // Store in sessionStorage for the exam page to pick up
    sessionStorage.setItem('retryExamData', JSON.stringify(retryExam));
    window.location.href = 'index.html';
}

// =====================================================
// Export Wrong Questions as .json
// =====================================================
function exportWrongQuestions(summary, details) {
    const wrongQuestions = details.filter(d => d.status === 'incorrect' || d.status === 'unanswered');

    if (wrongQuestions.length === 0) {
        alert('🎉 No wrong or unanswered questions to export! Perfect score!');
        return;
    }

    const exportExam = {
        title: `Wrong Qs: ${summary.title || 'Exam'}`,
        duration: Math.max(30, Math.ceil(wrongQuestions.length * 3)),
        sections: [{
            name: 'Wrong & Unanswered Questions',
            questions: wrongQuestions.map((d, index) => ({
                id: index + 1,
                question: d.questionText,
                type: d.type || 'single',
                options: d.options || [],
                correct_answer: d.correctAnswer,
                marks: d.maxMarks || 1,
                negative_marks: d.negativeMarks || 0,
                explanation: d.explanation || ''
            }))
        }]
    };

    const jsonStr = JSON.stringify(exportExam, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safeTitle = (summary.title || 'exam').replace(/[^a-zA-Z0-9_-]/g, '_');
    a.download = `${safeTitle}_wrong_questions.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// =====================================================
// Retry Unattempted — Build new exam from unanswered only
// =====================================================
function retryUnattempted(summary, details) {
    const unattempted = details.filter(d => d.status === 'unanswered');

    if (unattempted.length === 0) {
        alert('🎉 No unattempted questions! You attempted everything!');
        return;
    }

    const retryExam = {
        title: `Retry Unattempted: ${summary.title || 'Exam'} (${unattempted.length} Qs)`,
        duration: Math.max(30, Math.ceil(unattempted.length * 3)),
        sections: [{
            name: 'Retry — Unattempted Questions',
            questions: unattempted.map((d, index) => ({
                id: index + 1,
                question: d.questionText,
                type: d.type || 'single',
                options: d.options || [],
                correct_answer: d.correctAnswer,
                marks: d.maxMarks || 1,
                negative_marks: d.negativeMarks || 0,
                explanation: d.explanation || ''
            }))
        }]
    };

    sessionStorage.setItem('retryExamData', JSON.stringify(retryExam));
    window.location.href = 'index.html';
}


