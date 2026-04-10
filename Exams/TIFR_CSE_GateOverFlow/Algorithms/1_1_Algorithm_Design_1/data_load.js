window.__examLoadCallback({
  "title": "Algorithms - Algorithm Design",
  "duration": 3,
  "sections": [
    {
      "name": "Algorithm Design",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"419340\"></a><div itemprop=\"text\"><p>Consider the following algorithm that takes as input a positive integer \\( n \\).</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">if (n == 1) {\nreturn \"Neither prime nor composite.\"\n}\nm=2\nwhile (m &lt; n) {\nif (m divides n ){\nreturn \"Composite.\"\n}\nm=m+1\n}\nreturn \"Prime.\"</pre>\n\n<p><br>\nIf \\( n \\) is a number of the form \\( n=p^{2} q^{3} r^{4} \\) where \\( p, q, r \\) are natural numbers greater than 1 , how many times does the while loop in the algorithm run?<br>\nIn the options below, for any real number \\( m,\\lceil m\\rceil \\) denotes the least integer greater than or equal to \\( m \\).</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2024 | Part B | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>The while loop runs at most \\( \\left\\lceil n^{1 / 9}\\right\\rceil \\) times for all natural numbers \\( p, q, r \\) greater than one.</p>",
            "<p>The while loop runs at most \\( \\left\\lceil n^{1 / 9}\\right\\rceil \\) times only if \\( p, q, r \\) are all distinct.</p>",
            "<p>The while loop runs at most \\( \\left\\lceil n^{1 / 9}\\right\\rceil \\) times only if at least two of \\( p, q, r \\) are distinct.</p>",
            "<p>The while loop runs at most \\( \\left\\lceil n^{1 / 9}\\right\\rceil \\) times only if \\( p, q, r \\) are distinct primes.</p>",
            "<p>The while loop runs at most \\( \\left\\lceil n^{1 / 9}\\right\\rceil \\) times only if \\( p, q, r \\) are distinct primes or distinct prime powers.\n\t<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>The while loop runs at most \\( \\left\\lceil n^{1 / 9}\\right\\rceil \\) times for all natural numbers \\( p, q, r \\) greater than one.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/419340/tifr-cse-2024-part-b-question-7\" target=\"_blank\">https://gateoverflow.in/419340/tifr-cse-2024-part-b-question-7</a></p>"
        }
      ]
    }
  ]
});
