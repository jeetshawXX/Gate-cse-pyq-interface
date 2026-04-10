window.__examLoadCallback({
  "title": "Databases - Query",
  "duration": 3,
  "sections": [
    {
      "name": "Query",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"203570\"></a><div itemprop=\"text\"><p>Consider the following relational database schema:</p><ul><li>EMP (eno name, age)</li><li>PROJ (pno name)</li><li>INVOLVED (eno, pno)</li></ul><p>EMP contains information about employees. PROJ about projects and involved about which employees involved in which projects. The underlined attributes are the primary keys for the respective relations.&nbsp;</p><p>State in English (in not more than 15 words)&nbsp;</p><p>What the following relational algebra expressions are designed to determine&nbsp;</p><ol style=\"list-style-type:lower-roman\"><li><p>\\( \\Pi_{eno}(\\text{INVOLVED}) - \\Pi_{eno} ((\\Pi_{eno}(\\text{INVOLVED}) \\times \\Pi_{pno}(\\text{PROJ}))-\\text{INVOLVED}) \\)</p></li><li><p>\\( \\Pi_{age}(\\text{EMP})-\\Pi_{age} (\\sigma _{ E.age&lt;Emp.age}( (\\rho E(\\text{EMP}) \\times \\text{EMP}))  \\)</p></li></ol><p>(Note: \\( \\rho E(\\text{EMP})  \\) conceptually makes a copy of \\( \\text{EMP} \\) and names it \\( E \\) (\\( \\rho \\) is called the rename operator))</p><ol></ol></div><br><br><b>GATE CSE 1997 | Question: 76-b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/203570/gate-cse-1997-question-76-b\" target=\"_blank\">https://gateoverflow.in/203570/gate-cse-1997-question-76-b</a></p>"
        }
      ]
    }
  ]
});
