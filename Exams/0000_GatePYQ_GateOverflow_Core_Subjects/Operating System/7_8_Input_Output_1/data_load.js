window.__examLoadCallback({
  "title": "Operating System - Input Output",
  "duration": 3,
  "sections": [
    {
      "name": "Input Output",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"460061\"></a><div itemprop=\"text\"><p>Suppose in a multiprogramming environment, the following C program segment is executed. A process goes into I/O queue whenever an I/O related operation is performed. Assume that there will always be a context switch whenever a process requests for an I/O, and also whenever the process returns from an I/O. The number of times the process will enter the ready queue during its lifetime (not counting the time the process enters the ready queue when it is run initially) is ___________ . Answer in integer)</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">int main()\n{\nint x=0,i=0;\nscanf(\"%d\",&amp;x);\nfor(i=0; i&lt;20; i++)\n{\nx = x+20;\nprintf(\"%d\\n\",x);\n}\nreturn 0;\n}\n</pre></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 19</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "21:21",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460061/gate-cse-2025-set-1-question-19\" target=\"_blank\">https://gateoverflow.in/460061/gate-cse-2025-set-1-question-19</a></p>"
        }
      ]
    }
  ]
});
