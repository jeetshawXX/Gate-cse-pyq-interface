// dark_mode.js — Shared dark mode toggle logic
(function () {
    // Apply saved preference on load
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Attach click to ALL toggle buttons on the page
    document.querySelectorAll('.dark-mode-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('darkMode', 'false');
                window.GateCloudSync?.scheduleSync('theme-change');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('darkMode', 'true');
                window.GateCloudSync?.scheduleSync('theme-change');
            }

            // Update Chart.js label colors if chart exists (result page)
            if (window.perfChart) {
                const newColor = isDark ? '#333' : '#d8d8e4';
                window.perfChart.options.plugins.legend.labels.color = newColor;
                window.perfChart.update();
            }
        });
    });
})();
