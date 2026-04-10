window.__examLoadCallback({
  "title": "Algorithms - Insertion Sort",
  "duration": 3,
  "sections": [
    {
      "name": "Insertion Sort",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"473086\"></a><div itemprop=\"text\"><p>Recall the insertion sort algorithm:&nbsp;</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint prettyprintlinenum linenums lang-c_cpp\"><strong>procedure</strong> INSERTIONSORT(A)    \n   <strong>for</strong> i ←  1 <strong>to</strong> A.length - 1 <strong>do</strong>\n       key ← A[i]\n&nbsp; &nbsp; &nbsp;  j ← i - 1\n&nbsp; &nbsp; &nbsp;  <strong>while</strong> j ≥ 0 <strong>and</strong> A[j] &gt; key <strong>do</strong>\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A[j + 1] ← A[j]\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;j ← j - 1\n &nbsp; &nbsp; &nbsp; <strong>end while</strong>\n &nbsp; &nbsp; &nbsp; A[j + 1] ← key\n &nbsp; <strong>end for</strong>\n<strong>end procedure</strong></pre><p>Suppose for some parameter \\( k \\)&nbsp;(possibly a function of the length of the array \\( n \\)), we are guaranteed that the array has \\( k \\) inversions, i.e., there are exactly \\( k \\)&nbsp;pairs \\( (i, j) \\)&nbsp;such that \\( A[i] &gt; A[j] \\) and \\( i &lt; j \\). Then, the running time of insertion sort for \\( A \\) is:</p></div><br><br><b>Algorithms: TIFR CSE 2025 | Part B | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(n+k) \\)</p>",
            "<p>\\( \\Theta(n \\log n+k) \\)</p>",
            "<p>\\( \\Theta\\left(n^{2}+k\\right) \\)</p>",
            "<p>\\( \\Theta(k \\log n) \\)</p>",
            "<p>\\( \\Theta(n \\log k) \\)<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>\\( \\Theta(n+k) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/473086/tifr-cse-2025-part-b-question-11\" target=\"_blank\">https://gateoverflow.in/473086/tifr-cse-2025-part-b-question-11</a></p>"
        }
      ]
    }
  ]
});
