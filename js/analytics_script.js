// ============================================================
// Main Analytics Dashboard
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initDB();
        const allExams = await getExamHistory();
        const allSillyMistakes = await getAllSillyMistakes();

        if (allExams.length === 0) {
            document.querySelector('.dashboard-content').innerHTML = `
                <div style="text-align:center; padding: 50px; color: var(--text-color);">
                    <h3>No Exam History Found</h3>
                    <p>Take some exams to see your analytics dashboard!</p>
                    <a href="index.html" class="nav-btn" style="display:inline-block; margin-top:20px; background:var(--primary-color);">Start an Exam</a>
                </div>
            `;
            return;
        }

        // --- Calculate Stats (from summary data only — no details needed) ---
        let totalQuestionsAttempted = 0;
        let totalCorrect = 0;
        let totalMaxMarks = 0;
        let totalMarksObtained = 0;

        allExams.forEach(e => {
            totalQuestionsAttempted += (e.correct + e.incorrect);
            totalCorrect += e.correct;
            totalMaxMarks += e.max_marks;
            totalMarksObtained += Math.max(0, e.total_marks);
        });

        const avgScore = totalMaxMarks > 0 ? (totalMarksObtained / totalMaxMarks) * 100 : 0;
        const avgAccuracy = totalQuestionsAttempted > 0 ? (totalCorrect / totalQuestionsAttempted) * 100 : 0;

        // Only load details for recent exams (used by charts), not all 10K+
        const sortedExams = [...allExams].sort((a, b) => new Date(a.date) - new Date(b.date));
        const recentExams = sortedExams;
        const recentExamIds = recentExams.map(e => e.id);

        let allDetails = [];
        if (typeof getExamDetailsForIds === 'function') {
            allDetails = await getExamDetailsForIds(recentExamIds);
        } else {
            for (const exam of recentExams) {
                const details = await getExamDetails(exam.id);
                allDetails = allDetails.concat(details);
            }
        }

        // Also load all details for weak areas analysis (uses ALL exams)
        let allDetailsForWeakAreas = [];
        if (typeof getAllExamDetails === 'function') {
            allDetailsForWeakAreas = await getAllExamDetails();
        } else {
            allDetailsForWeakAreas = allDetails;
        }

        // Refine total time from all details
        const totalTimeSecs = allDetailsForWeakAreas.reduce((sum, d) => sum + (d.time_spent || 0), 0);
        const hours = Math.floor(totalTimeSecs / 3600);
        const minutes = Math.floor((totalTimeSecs % 3600) / 60);

        // Update Top Cards
        document.getElementById('totalTestsVal').textContent = allExams.length;
        document.getElementById('avgScoreVal').textContent = avgScore.toFixed(1) + '%';
        document.getElementById('avgAccuracyVal').textContent = avgAccuracy.toFixed(1) + '%';
        document.getElementById('totalTimeVal').textContent = `${hours}h ${minutes}m`;

        // --- Prepare Chart Configuration ---
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#e0e0e0' : '#333';
        const gridColor = isDark ? '#333' : '#ddd';

        Chart.defaults.color = textColor;
        Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { color: gridColor }, ticks: { color: textColor } },
                y: { grid: { color: gridColor }, ticks: { color: textColor } }
            },
            plugins: { legend: { labels: { color: textColor } } }
        };

        // --- 1. Progress Over Time (Line Chart) ---
        const progressLabels = recentExams.map(e => new Date(e.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }));
        const progressData = recentExams.map(e => e.max_marks > 0 ? ((e.total_marks / e.max_marks) * 100).toFixed(1) : 0);

        new Chart(document.getElementById('progressChart'), {
            type: 'line',
            data: {
                labels: progressLabels,
                datasets: [{
                    label: 'Score Percentage',
                    data: progressData,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    pointBackgroundColor: '#2980b9',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                onHover: (event, elements) => {
                    event.native.target.style.cursor = elements && elements.length ? 'pointer' : 'default';
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const idx = elements[0].index;
                        const examId = recentExams[idx].id;
                        window.location.href = `result.html?id=${examId}`;
                    }
                },
                scales: { y: { min: 0, max: 100, ...commonOptions.scales.y } }
            }
        });

        // --- 2. Concept Weak Areas (Bar Chart) ---
        const wrongTypes = { 'MCQ': 0, 'MSQ': 0, 'NAT': 0 };
        allDetailsForWeakAreas.forEach(d => {
            if (d.status === 'incorrect') {
                let typeName = 'MCQ';
                if (d.type === 'multiple') typeName = 'MSQ';
                else if (d.type === 'nat' || d.type === 'numerical' || d.type === 'numeric') typeName = 'NAT';
                wrongTypes[typeName]++;
            }
        });

        new Chart(document.getElementById('weakAreasChart'), {
            type: 'bar',
            data: {
                labels: Object.keys(wrongTypes),
                datasets: [{
                    label: 'Total Incorrect Answers',
                    data: Object.values(wrongTypes),
                    backgroundColor: ['#e74c3c', '#9b59b6', '#f39c12'],
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                ...commonOptions,
                plugins: { ...commonOptions.plugins, legend: { display: false } },
                scales: {
                    x: { ...commonOptions.scales.x, grid: { display: false } },
                    y: { ...commonOptions.scales.y, beginAtZero: true }
                }
            }
        });

        // --- 3. Negative Marks Trend (Line/Area Chart) ---
        const negativeData = recentExams.map(e => {
            const examDetails = allDetails.filter(d => d.exam_id === e.id);
            let negSum = 0;
            examDetails.forEach(d => {
                if ((d.marks_obtained || 0) < 0) {
                    negSum += Math.abs(d.marks_obtained);
                }
            });
            return negSum.toFixed(2);
        });

        new Chart(document.getElementById('negativeMarksChart'), {
            type: 'line',
            data: {
                labels: progressLabels,
                datasets: [{
                    label: 'Negative Marks Lost',
                    data: negativeData,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: true,
                    stepped: true
                }]
            },
            options: {
                ...commonOptions,
                onHover: (event, elements) => {
                    event.native.target.style.cursor = elements && elements.length ? 'pointer' : 'default';
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const idx = elements[0].index;
                        const examId = recentExams[idx].id;
                        window.location.href = `result.html?id=${examId}`;
                    }
                },
                scales: { y: { beginAtZero: true, ...commonOptions.scales.y } }
            }
        });
        // --- 4. Time Efficiency (Bar Chart) ---
        let correctTimeSum = 0, correctCount = 0;
        let incorrectTimeSum = 0, incorrectCount = 0;
        let unansweredTimeSum = 0, unansweredCount = 0;

        // Data for Question Mastery
        const qMastery = {
            'MCQ': { attempted: 0, correct: 0 },
            'MSQ': { attempted: 0, correct: 0 },
            'NAT': { attempted: 0, correct: 0 }
        };

        allDetailsForWeakAreas.forEach(d => {
            const t = d.time_spent || 0;

            // Time Tracking
            if (d.status === 'correct') {
                correctTimeSum += t; correctCount++;
            } else if (d.status === 'incorrect') {
                incorrectTimeSum += t; incorrectCount++;
            } else if (d.status === 'unanswered') {
                unansweredTimeSum += t; unansweredCount++;
            }

            // Question mastery tracking
            let typeName = 'MCQ';
            if (d.type === 'multiple') typeName = 'MSQ';
            else if (d.type === 'nat' || d.type === 'numerical' || d.type === 'numeric') typeName = 'NAT';

            // only calculate attempted questions for mastery
            if (d.status === 'correct' || d.status === 'incorrect') {
                qMastery[typeName].attempted++;
                if (d.status === 'correct') {
                    qMastery[typeName].correct++;
                }
            }
        });

        const timeAvgData = [
            correctCount > 0 ? (correctTimeSum / correctCount).toFixed(0) : 0,
            incorrectCount > 0 ? (incorrectTimeSum / incorrectCount).toFixed(0) : 0,
            unansweredCount > 0 ? (unansweredTimeSum / unansweredCount).toFixed(0) : 0
        ];

        new Chart(document.getElementById('timeEfficiencyChart'), {
            type: 'bar',
            data: {
                labels: ['Correct', 'Incorrect', 'Unanswered'],
                datasets: [{
                    label: 'Avg Time (seconds)',
                    data: timeAvgData,
                    backgroundColor: ['rgba(46, 204, 113, 0.8)', 'rgba(231, 76, 60, 0.8)', 'rgba(149, 165, 166, 0.8)'],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                ...commonOptions,
                plugins: { ...commonOptions.plugins, legend: { display: false } },
                scales: {
                    x: { ...commonOptions.scales.x, grid: { display: false } },
                    y: { ...commonOptions.scales.y, beginAtZero: true, title: { display: true, text: 'Seconds', color: textColor } }
                }
            }
        });

        // --- 5. Question Type Mastery Chart ---
        const masteryLabels = ['MCQ', 'MSQ', 'NAT'];
        const masteryAccuracy = masteryLabels.map(t => {
            const data = qMastery[t];
            return data.attempted > 0 ? ((data.correct / data.attempted) * 100).toFixed(1) : 0;
        });

        new Chart(document.getElementById('questionMasteryChart'), {
            type: 'bar',
            data: {
                labels: masteryLabels,
                datasets: [{
                    label: 'Accuracy %',
                    data: masteryAccuracy,
                    backgroundColor: ['rgba(52, 152, 219, 0.8)', 'rgba(155, 89, 182, 0.8)', 'rgba(241, 196, 15, 0.8)'],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            afterLabel: (ctx) => {
                                const t = masteryLabels[ctx.dataIndex];
                                const d = qMastery[t];
                                return `Attempted: ${d.attempted} | Correct: ${d.correct}`;
                            }
                        }
                    }
                },
                scales: {
                    x: { ...commonOptions.scales.x, grid: { display: false } },
                    y: { ...commonOptions.scales.y, min: 0, max: 100, ticks: { ...commonOptions.scales.y.ticks, callback: v => v + '%' } }
                }
            }
        });

        // ============================================================
        // 6. SUBJECT-WISE ANALYTICS
        // ============================================================
        buildSubjectAnalytics(allExams, allDetailsForWeakAreas, commonOptions, textColor, gridColor, isDark);

        // --- Generate AI Insights ---
        generateInsights(avgScore, avgAccuracy, wrongTypes, negativeData, allExams, timeAvgData, qMastery);

    } catch (e) {
        console.error("Error loading analytics:", e);
        document.querySelector('.dashboard-content').innerHTML = `<p style="color:red">Error loading data: ${e.message}</p>`;
    }
});


// ============================================================
// Subject-Wise Analytics Builder
// ============================================================
function buildSubjectAnalytics(allExams, allDetailsForWeakAreas, commonOptions, textColor, gridColor, isDark) {
    // Classify each exam by subject
    const subjectExams = {}; // subjectId -> { subject, exams: [] }
    const sources = new Set();

    allExams.forEach(exam => {
        const subject = detectSubject(exam.title);
        if (!subject) return; // skip mixed/unidentifiable exams

        const source = detectSource(exam.title);
        sources.add(source);

        if (!subjectExams[subject.id]) {
            subjectExams[subject.id] = { subject, exams: [], source: new Set() };
        }
        subjectExams[subject.id].exams.push({ ...exam, _source: source });
        subjectExams[subject.id].source.add(source);
    });

    const subjectIds = Object.keys(subjectExams);

    if (subjectIds.length === 0) {
        document.getElementById('subjectNoData').style.display = 'block';
        document.getElementById('subjectChartsArea').style.display = 'none';
        return;
    }

    // Populate source filter dropdown
    const sourceFilter = document.getElementById('subjectSourceFilter');
    sources.forEach(src => {
        const opt = document.createElement('option');
        opt.value = src;
        opt.textContent = src;
        sourceFilter.appendChild(opt);
    });

    // Compute per-subject stats
    function computeSubjectStats(filterSource) {
        const stats = {};
        for (const id of subjectIds) {
            const { subject, exams } = subjectExams[id];
            const filtered = filterSource === 'all'
                ? exams
                : exams.filter(e => e._source === filterSource);

            if (filtered.length === 0) continue;

            let totalCorrect = 0, totalIncorrect = 0, totalUnanswered = 0;
            let totalMarks = 0, totalMaxMarks = 0;
            let totalNegative = 0;

            filtered.forEach(e => {
                totalCorrect += (e.correct || 0);
                totalIncorrect += (e.incorrect || 0);
                totalUnanswered += (e.unanswered || 0);
                totalMarks += e.total_marks || 0;
                totalMaxMarks += e.max_marks || 0;

                // Exact negative marks calculation
                const eDetails = allDetailsForWeakAreas.filter(d => d.exam_id === e.id);
                let exactNeg = 0;
                eDetails.forEach(d => {
                    if ((d.marks_obtained || 0) < 0) {
                        exactNeg += Math.abs(d.marks_obtained);
                    }
                });
                totalNegative += exactNeg;
            });

            const attempted = totalCorrect + totalIncorrect;
            const accuracy = attempted > 0 ? (totalCorrect / attempted) * 100 : 0;
            const avgScorePct = totalMaxMarks > 0 ? (totalMarks / totalMaxMarks) * 100 : 0;

            stats[id] = {
                subject,
                tests: filtered.length,
                accuracy: accuracy,
                avgScore: avgScorePct,
                correct: totalCorrect,
                incorrect: totalIncorrect,
                unanswered: totalUnanswered,
                negativeMarks: totalNegative.toFixed(1),
                exams: filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
            };
        }
        return stats;
    }

    // Chart instances for updating
    let radarChart = null;
    let barChart = null;
    let trendChart = null;

    function renderSubjectCharts(filterSource) {
        const stats = computeSubjectStats(filterSource);
        const statEntries = Object.values(stats).sort((a, b) => b.accuracy - a.accuracy);

        if (statEntries.length === 0) {
            document.getElementById('subjectNoData').style.display = 'block';
            document.getElementById('subjectChartsArea').style.display = 'none';
            return;
        }
        document.getElementById('subjectNoData').style.display = 'none';
        document.getElementById('subjectChartsArea').style.display = 'block';

        const labels = statEntries.map(s => s.subject.icon + ' ' + s.subject.name);
        const accuracyData = statEntries.map(s => parseFloat(s.accuracy.toFixed(1)));
        const scoreData = statEntries.map(s => parseFloat(s.avgScore.toFixed(1)));
        const colors = statEntries.map(s => s.subject.color);
        const bgColors = colors.map(c => c + '33'); // 20% opacity

        // -- Radar Chart Replacement (Bar Comparison) --
        const radarCanvas = document.getElementById('subjectRadarChart');
        if (radarChart) radarChart.destroy();
        radarChart = new Chart(radarCanvas, {
            type: 'bar',
            data: {
                labels: statEntries.map(s => s.subject.name),
                datasets: [
                    {
                        label: 'Accuracy %',
                        data: accuracyData,
                        backgroundColor: '#3498db',
                        borderRadius: 4
                    },
                    {
                        label: 'Avg Score %',
                        data: scoreData,
                        backgroundColor: '#2ecc71',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { grid: { display: false }, ticks: { color: textColor } },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: gridColor },
                        ticks: { color: textColor, callback: v => v + '%' }
                    }
                },
                plugins: {
                    legend: { labels: { color: textColor } },
                    tooltip: {
                        callbacks: {
                            label: (context) => context.dataset.label + ': ' + context.parsed.y + '%'
                        }
                    }
                }
            }
        });

        // -- Horizontal Bar Chart --
        const barCanvas = document.getElementById('subjectBarChart');
        if (barChart) barChart.destroy();
        barChart = new Chart(barCanvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Accuracy %',
                    data: accuracyData,
                    backgroundColor: colors.map(c => c + 'cc'),
                    borderColor: colors,
                    borderWidth: 1,
                    borderRadius: 6,
                    barThickness: 22
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: gridColor },
                        ticks: { color: textColor, callback: v => v + '%' }
                    },
                    y: {
                        grid: { display: false },
                        ticks: { color: textColor, font: { size: 12 } }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            afterLabel: (ctx) => {
                                const s = statEntries[ctx.dataIndex];
                                return `Tests: ${s.tests} | Score: ${s.avgScore.toFixed(1)}%\nCorrect: ${s.correct} | Incorrect: ${s.incorrect}`;
                            }
                        }
                    }
                }
            }
        });

        // -- Populate Subject Trend Dropdown --
        const trendSelect = document.getElementById('subjectTrendSelect');
        trendSelect.innerHTML = '<option value="">-- Select Subject --</option>';
        statEntries.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.subject.id;
            opt.textContent = s.subject.icon + ' ' + s.subject.name + ` (${s.tests} tests)`;
            trendSelect.appendChild(opt);
        });

        // -- Subject Table --
        const tbody = document.getElementById('subjectTableBody');
        tbody.innerHTML = '';
        statEntries.forEach(s => {
            const strengthPct = s.accuracy;
            let strengthLabel, strengthClass;
            if (strengthPct >= 75) { strengthLabel = '💪 Strong'; strengthClass = 'strength-strong'; }
            else if (strengthPct >= 50) { strengthLabel = '📈 Moderate'; strengthClass = 'strength-moderate'; }
            else if (strengthPct >= 25) { strengthLabel = '⚠️ Weak'; strengthClass = 'strength-weak'; }
            else { strengthLabel = '🔴 Critical'; strengthClass = 'strength-critical'; }

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><span class="subject-dot" style="background:${s.subject.color};"></span>${s.subject.icon} ${s.subject.name}</td>
                <td>${s.tests}</td>
                <td>${s.avgScore.toFixed(1)}%</td>
                <td>${s.accuracy.toFixed(1)}%</td>
                <td class="val-correct">${s.correct}</td>
                <td class="val-incorrect">${s.incorrect}</td>
                <td>${s.unanswered}</td>
                <td class="val-negative">${s.negativeMarks}</td>
                <td><span class="strength-badge ${strengthClass}">${strengthLabel}</span></td>
            `;
            tbody.appendChild(row);
        });

        // -- Subject Trend Chart (default empty) --
        renderSubjectTrend(null, stats);
    }

    // Subject Trend Chart
    function renderSubjectTrend(subjectId, stats) {
        const canvas = document.getElementById('subjectTrendChart');
        if (trendChart) trendChart.destroy();

        if (!subjectId || !stats[subjectId]) {
            trendChart = new Chart(canvas, {
                type: 'line',
                data: { labels: [], datasets: [] },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: 'Select a subject above to view its score trend',
                            color: textColor,
                            font: { size: 14 }
                        }
                    }
                }
            });
            return;
        }

        const s = stats[subjectId];
        const trendLabels = s.exams.map(e =>
            new Date(e.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
        );
        const trendData = s.exams.map(e =>
            e.max_marks > 0 ? parseFloat(((e.total_marks / e.max_marks) * 100).toFixed(1)) : 0
        );

        trendChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: trendLabels,
                datasets: [{
                    label: s.subject.name + ' Score %',
                    data: trendData,
                    borderColor: s.subject.color,
                    backgroundColor: s.subject.color + '22',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    pointBackgroundColor: s.subject.color,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                ...commonOptions,
                onHover: (event, elements) => {
                    event.native.target.style.cursor = elements && elements.length ? 'pointer' : 'default';
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const idx = elements[0].index;
                        const examId = s.exams[idx].id;
                        window.location.href = `result.html?id=${examId}`;
                    }
                },
                scales: {
                    x: { ...commonOptions.scales.x },
                    y: { ...commonOptions.scales.y, min: 0, max: 100, ticks: { ...commonOptions.scales.y.ticks, callback: v => v + '%' } }
                },
                plugins: {
                    ...commonOptions.plugins,
                    tooltip: {
                        callbacks: {
                            title: (items) => {
                                const idx = items[0].dataIndex;
                                return s.exams[idx].title;
                            }
                        }
                    }
                }
            }
        });
    }

    // Initial render
    renderSubjectCharts('all');

    // Source filter event
    document.getElementById('subjectSourceFilter').addEventListener('change', (e) => {
        renderSubjectCharts(e.target.value);
    });

    // Subject trend dropdown event
    document.getElementById('subjectTrendSelect').addEventListener('change', (e) => {
        const currentFilter = document.getElementById('subjectSourceFilter').value;
        const stats = computeSubjectStats(currentFilter);
        renderSubjectTrend(e.target.value, stats);
    });
}


// ============================================================
// AI Insights Generator (Enhanced with subject analysis & advanced metrics)
// ============================================================
function generateInsights(avgScore, avgAccuracy, wrongTypes, negativeData, allExams, timeAvgData, qMastery) {
    const container = document.getElementById('aiInsightsContent');
    const insights = [];

    // General Performance
    if (avgScore > 75) {
        insights.push({ icon: '🌟', text: `Your average score of <strong>${avgScore.toFixed(1)}%</strong> is excellent. Focus on full-length mock tests to build stamina.` });
    } else if (avgScore > 50) {
        insights.push({ icon: '📈', text: `You are consistently scoring around <strong>${avgScore.toFixed(1)}%</strong>. To break the plateau, spend more time reviewing your unattempted questions.` });
    } else {
        insights.push({ icon: '📚', text: `Focus on mastering foundational concepts first rather than attempting difficult questions.` });
    }

    // Accuracy
    if (avgAccuracy < 60) {
        insights.push({ icon: '🎯', text: `Your accuracy is <strong>${avgAccuracy.toFixed(1)}%</strong>. Slow down and read questions carefully. Quality of attempts matters more than quantity.` });
    }

    // Weak Areas (Question Types)
    const maxWrongType = Object.keys(wrongTypes).reduce((a, b) => wrongTypes[a] > wrongTypes[b] ? a : b);
    if (wrongTypes[maxWrongType] > 5) {
        let hint = "";
        if (maxWrongType === 'MSQ') hint = "MSQs require complete conceptual clarity as there is no partial marking. Verify all options independently.";
        else if (maxWrongType === 'NAT') hint = "NATs require high numerical precision. Avoid calculator round-off errors and double check units.";
        else if (maxWrongType === 'MCQ') hint = "Use elimination techniques for MCQs to avoid careless mistakes and trap options.";

        insights.push({ icon: '🔍', text: `You lose the most marks in <strong>${maxWrongType}</strong> questions (${wrongTypes[maxWrongType]} errors). ${hint}` });
    }

    // Time Management
    if (timeAvgData && timeAvgData.length >= 2) {
        const timeIncorrect = parseFloat(timeAvgData[1]);
        const timeCorrect = parseFloat(timeAvgData[0]);
        if (timeIncorrect > timeCorrect && timeIncorrect > 90) { // If spending > 1.5 mins on average on wrong questions
            insights.push({ icon: '⏳', text: `You are spending an average of <strong>${(timeIncorrect / 60).toFixed(1)} mins</strong> on questions you ultimately get wrong. Learn the art of skipping! If you don't see a path within 1 minute, mark for review and move on.` });
        }
    }

    // Question Mastery
    if (qMastery) {
        const msqAcc = qMastery['MSQ'].attempted > 0 ? (qMastery['MSQ'].correct / qMastery['MSQ'].attempted) * 100 : null;
        if (msqAcc !== null && msqAcc < 50 && qMastery['MSQ'].attempted >= 5) {
            insights.push({ icon: '⚠️', text: `Your MSQ accuracy is low at <strong>${msqAcc.toFixed(1)}%</strong>. Practice multi-statement conceptual questions.` });
        }
    }

    // Negative Trend
    if (negativeData.length > 2) {
        const last = parseFloat(negativeData[negativeData.length - 1]);
        const prev = parseFloat(negativeData[negativeData.length - 2]);
        if (last > prev && last > 2) {
            insights.push({ icon: '🚨', text: `Warning: Your negative marks increased to <strong>${last}</strong> in recent tests. Avoid blind guessing!` });
        } else if (last < prev && last < 1) {
            insights.push({ icon: '✅', text: `Great job controlling negative marks recently. Excellent risk management.` });
        }
    }

    // --- Subject-Wise Insights ---
    const subjectStats = {};
    allExams.forEach(e => {
        const subject = detectSubject(e.title);
        if (!subject) return;
        if (!subjectStats[subject.id]) {
            subjectStats[subject.id] = { name: subject.name, icon: subject.icon, correct: 0, incorrect: 0, tests: 0 };
        }
        subjectStats[subject.id].correct += (e.correct || 0);
        subjectStats[subject.id].incorrect += (e.incorrect || 0);
        subjectStats[subject.id].tests++;
    });

    const subjectEntries = Object.values(subjectStats).filter(s => s.tests >= 2);
    if (subjectEntries.length > 0) {
        // Find weakest subject
        const withAccuracy = subjectEntries.map(s => ({
            ...s,
            accuracy: (s.correct + s.incorrect) > 0 ? (s.correct / (s.correct + s.incorrect)) * 100 : 0
        }));
        withAccuracy.sort((a, b) => a.accuracy - b.accuracy);

        const weakest = withAccuracy[0];
        const strongest = withAccuracy[withAccuracy.length - 1];

        if (weakest.accuracy < 60) {
            insights.push({
                icon: weakest.icon,
                text: `<strong>${weakest.name}</strong> is your weakest subject with <strong>${weakest.accuracy.toFixed(1)}%</strong> accuracy across ${weakest.tests} tests. Prioritize this for improvement.`
            });
        }

        if (strongest.accuracy > 70 && strongest.tests >= 3) {
            insights.push({
                icon: strongest.icon,
                text: `<strong>${strongest.name}</strong> is your strongest subject at <strong>${strongest.accuracy.toFixed(1)}%</strong> accuracy. Maintain this edge and focus revision on weaker areas.`
            });
        }

        // Coverage check
        const coveredCount = subjectEntries.length;
        const totalSubjects = GATE_SUBJECTS.filter(s => s.id !== 'general_aptitude').length;
        if (coveredCount < totalSubjects * 0.6) {
            const uncovered = GATE_SUBJECTS.filter(s =>
                s.id !== 'general_aptitude' && !subjectStats[s.id]
            ).map(s => s.name);
            if (uncovered.length > 0) {
                insights.push({
                    icon: '📋',
                    text: `You haven't practiced: <strong>${uncovered.slice(0, 4).join(', ')}</strong>${uncovered.length > 4 ? ` and ${uncovered.length - 4} more` : ''}. Try to cover all subjects before the exam.`
                });
            }
        }
    }

    container.innerHTML = insights.map(i => `
        <div class="insight-point">
            <div class="insight-icon">${i.icon}</div>
            <div>${i.text}</div>
        </div>
    `).join('');
}
