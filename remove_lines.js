const fs = require('fs');
let content = fs.readFileSync('D:/1_GATE/00_Quiz_Generator/js/analytics_script.js', 'utf8');
let lines = content.split('\n');
lines = lines.slice(327);
fs.writeFileSync('D:/1_GATE/00_Quiz_Generator/js/analytics_script.js', lines.join('\n'));
console.log('Done');
