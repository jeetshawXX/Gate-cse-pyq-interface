window.__examLoadCallback({
  "title": "Programming - Programming in C - TIFR CSE 2011  Part B  Question",
  "duration": 3,
  "sections": [
    {
      "name": "TIFR CSE 2011  Part B  Question",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"20402\"></a><div itemprop=\"text\"><p>Consider the program</p>\n\n<pre class=\"prettyprint lang-c_cpp prettyprinted\">x:=0; y:=0; (r1:=x; r2:=x; y:= if r1 = r2 then 1 ∥ r3:= y; x:= r3)</pre>\n\n<p>Note that&nbsp;∥ denotes the parallel operator. In which of the following cases can the program possibly result in a final state with \\( r1 = 0; r2 = r3 = 1 \\).</p>\n\n</div><br><br><b>Programming in C: TIFR CSE 2011 | Part B | Question: 24</b></p>",
          "type": "single",
          "options": [
            "<p>Such a transformation is not possible in Java.</p>",
            "<p>Such a program transformation is possible in Java.</p>",
            "<p>Possible in Pascal when the compiler appropriately translates the&nbsp;∥ operator to interleaved pascal statements.</p>",
            "<p>Possible in all sequential programming languages when the compiler appropriately translates the&nbsp;∥ operator to interleaved statements in the sequential language.</p>",
            "<p>None of the above.</p>"
          ],
          "correct_answer": "<p>Such a program transformation is possible in Java.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/20402/tifr-cse-2011-part-b-question-24\" target=\"_blank\">https://gateoverflow.in/20402/tifr-cse-2011-part-b-question-24</a></p>"
        }
      ]
    }
  ]
});
