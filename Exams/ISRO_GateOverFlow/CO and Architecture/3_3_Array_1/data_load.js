window.__examLoadCallback({
  "title": "CO and Architecture - Array",
  "duration": 3,
  "sections": [
    {
      "name": "Array",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"182088\"></a><div itemprop=\"text\"><p>A CPU has a \\( 32\\,&nbsp;KB \\) direct mapped cache with \\( 128-byte \\) block size.Suppose A is a \\( 2 \\)-\\( d \\)<br>\narray of size \\( 512\\times 512 \\) with elements that&nbsp;occupy \\( 8\\, bytes \\) each.Consider the code segment</p>\n\n<pre class=\"prettyprint lang-c_cpp\">for(i=0;i&lt;512;i++)\n{\n    for(j=0;j&lt;512;j++)\n    {\n        x +=A[i][j];\n    }\n}</pre>\n\n<p>Assuming that array is stored in order \\( A[0][0], A[0][1],A[0][2]\\ldots, \\) the number of cache misses is</p>\n\n</div><br><br><b>CO & Architecture: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 16384 \\)</p>",
            "<p>\\( 512 \\)</p>",
            "<p>\\( 2048 \\)</p>",
            "<p>\\( 1024 \\)</p>"
          ],
          "correct_answer": "<p>\\( 16384 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/182088/isro-dec2017-38\" target=\"_blank\">https://gateoverflow.in/182088/isro-dec2017-38</a></p>"
        }
      ]
    }
  ]
});
