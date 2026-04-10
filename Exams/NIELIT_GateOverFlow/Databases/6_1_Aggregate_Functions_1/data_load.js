window.__examLoadCallback({
  "title": "Databases - Aggregate Functions",
  "duration": 3,
  "sections": [
    {
      "name": "Aggregate Functions",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"373723\"></a><div itemprop=\"text\"><p>The employee information in a company is stored in the relation</p><p>Employee (name, sex, salary, deptName)</p><p>Consider the following \\( \\text{SQL} \\) query</p><pre data-pbcklang=\"sql\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-sql\">Select deptName\n    From Employee\n    Where sex = ‘M’\n    Group by deptName\n    Having avg(salary) &gt;\n        (select avg (salary) from Employee)\n</pre><p>It returns the names of the department in which</p></div><br><br><b>Databases: NIELIT 2022 April Scientist B | Section B | Question: 115</b></p>",
          "type": "single",
          "options": [
            "<p>the average salary is more than the average salary in the company</p>",
            "<p>the average salary of male employees is more than the average salary of all male employees in the company</p>",
            "<p>the average salary of male employees is more than the average salary of&nbsp;employees in same the department</p>",
            "<p>the average salary of male employees is more than the average salary in the company</p>"
          ],
          "correct_answer": "<p>the average salary of male employees is more than the average salary in the company</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/373723/nielit-2022-april-scientist-b-section-b-question-115\" target=\"_blank\">https://gateoverflow.in/373723/nielit-2022-april-scientist-b-section-b-question-115</a></p>"
        }
      ]
    }
  ]
});
