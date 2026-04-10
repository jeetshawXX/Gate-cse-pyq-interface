window.__examLoadCallback({
  "title": "Algorithms - Recursion",
  "duration": 3,
  "sections": [
    {
      "name": "Recursion",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"351359\"></a><div itemprop=\"text\"><p>What is the time complexity of the following recursive function?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int ComputFun(int n)\n{\n    if(n&lt;=2)\n       return 1;\n    else\n        return (ComputFun(floor(sqrt(n)))+n);\n}</pre>\n\n</div><br><br><b>Algorithms: NIELIT Scientific Assistant A 2020 November: 101</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(n) \\)</p>",
            "<p>\\( \\Theta(\\log n) \\)</p>",
            "<p>\\( \\Theta(n\\log n) \\)</p>",
            "<p>\\( \\Theta(\\log \\log n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(\\log \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/351359/nielit-scientific-assistant-a-2020-november-101\" target=\"_blank\">https://gateoverflow.in/351359/nielit-scientific-assistant-a-2020-november-101</a></p>"
        }
      ]
    }
  ]
});
