window.__examLoadCallback({
  "title": "Algorithms - Binary Search",
  "duration": 8,
  "sections": [
    {
      "name": "Binary Search",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"18752\"></a><div itemprop=\"text\"><p>Suppose you are given an array \\( A \\) with \\( 2n \\) numbers.</p>\n\n<p>The numbers in odd positions are sorted in ascending order, that is, \\( A[1] \\leq A[3] \\leq \\ldots \\leq A[2n - 1] \\).</p>\n\n<p>The numbers in even positions are sorted in descending order, that is, \\( A[2] \\geq A[4] \\geq \\ldots \\geq A[2n] \\).</p>\n\n<p>What is the method you would recommend for determining if a given number is in the array?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2010 | Part B | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p>Sort the array using quick-sort and then use binary search.</p>",
            "<p>Merge the sorted lists and perform binary search.</p>",
            "<p>Perform a single binary search on the entire array.</p>",
            "<p>Perform separate binary searches on the odd positions and the even positions.</p>",
            "<p>Search sequentially from the end of the array.</p>"
          ],
          "correct_answer": "<p>Perform separate binary searches on the odd positions and the even positions.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/18752/tifr-cse-2010-part-b-question-29\" target=\"_blank\">https://gateoverflow.in/18752/tifr-cse-2010-part-b-question-29</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"25140\"></a><div itemprop=\"text\"><p>Consider the following three version of the binary search program. Assume that the elements of type \\( T \\) can be compared with each other; also assume that the array is sorted.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">i, j, k : integer;  \na : array [1....N] of T;   \nx : T;                       \n\nProgram 1 :   i := 1; j := N;   \n             repeat   \n                   k := (i + j) div 2; \n                   if a[k] &lt; x then i := k else j := k  \n             until (a[k] = x) or (i &gt; j)                   \nProgram 2 :   i := 1; j := N;  \n              repeat  \n                   k := (i + j) div 2;   \n                  if x &lt; a[k] then j := k - 1; \n                  if a[k] &lt; x then i := k + 1;\n              until i &gt; j                              \nProgram 3 :=  i := 1; j := N  \n&nbsp;             repeat\n&nbsp;                  k := (i + j) div 2; \n&nbsp;                 if x &lt; a[k] then j := k else i := k + 1 \n&nbsp;             until i &gt; j</pre>\n\n<p>A binary search program is called correct provided it terminates with \\( a[k] = x \\) whenever such an element exists, or it terminates with \\( a\\left [ k \\right ]\\neq &nbsp;x \\) if there exists no array element with value \\( x \\). Which of the following statements is correct?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2012 | Part B | Question: 11</b></p>",
          "type": "numeric",
          "options": [
            "<p>Only Program \\( 1 \\) is correct</p>",
            "<p>Only Program \\( 2 \\) is correct</p>",
            "<p>Only Program \\( 1 \\) and \\( 2 \\) are correct.</p>",
            "<p>Both Program \\( 2 \\) and \\( 3 \\) are correct</p>",
            "<p>All the three programs are wrong</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/25140/tifr-cse-2012-part-b-question-11\" target=\"_blank\">https://gateoverflow.in/25140/tifr-cse-2012-part-b-question-11</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"280505\"></a><div itemprop=\"text\"><p>Asha and Lata play a game in which Lata&nbsp;first thinks of a natural number between \\( 1 \\) and \\( 1000 \\). Asha must find out that number by asking Lata questions, but Lata can only reply by saying “Yes” or “no”. Assume that Lata always tells the truth. What is the least number of questions that Asha needs to ask within which she can always find out the number Lata has thought of?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2019 | Part A | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 10 \\)</p>",
            "<p>\\( 32 \\)</p>",
            "<p>\\( 100 \\)</p>",
            "<p>\\( 999 \\)</p>",
            "<p>\\( \\text{None of the above} \\)</p>"
          ],
          "correct_answer": "<p>\\( 10 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/280505/tifr-cse-2019-part-a-question-5\" target=\"_blank\">https://gateoverflow.in/280505/tifr-cse-2019-part-a-question-5</a></p>"
        }
      ]
    }
  ]
});
