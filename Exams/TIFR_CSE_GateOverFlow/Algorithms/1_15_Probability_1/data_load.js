window.__examLoadCallback({
  "title": "Algorithms - Probability",
  "duration": 3,
  "sections": [
    {
      "name": "Probability",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"419339\"></a><div itemprop=\"text\"><p>In the following pseudocode, assume that for any pair of integers \\( x \\leq y \\), the function random ( \\( \\mathrm{x}, \\mathrm{y}) \\) produces an integer uniformly chosen from the set \\( \\{x, x+1, \\ldots, y\\} \\).</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">n=9\nfor (i=1 to n){\nA[i]=i\n}\nfor (i=1 to n){\nr= random (i, n)\ntemp =A[i]\nA [i]= A [r]\nA[r]=temp\nprint A[i]\n}</pre>\n\n<p><br>\nWhich of the following statements is<strong> TRUE</strong> of the output of the code?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2024 | Part B | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>It outputs all permutations of \\( 123456789 \\) with equal probability.</p>",
            "<p>It never outputs \\( 123456789 \\).</p>",
            "<p>It outputs all cyclic permutations of \\( 123456789 \\) with equal probability, and does not print any other output.</p>",
            "<p>The output is always \\( 987654321 \\).</p>",
            "<p>The output may not be a permutation of \\( 123456789 \\).\n\t<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>It outputs all permutations of \\( 123456789 \\) with equal probability.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/419339/tifr-cse-2024-part-b-question-8\" target=\"_blank\">https://gateoverflow.in/419339/tifr-cse-2024-part-b-question-8</a></p>"
        }
      ]
    }
  ]
});
