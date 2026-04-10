window.__examLoadCallback({
  "title": "Programming and DS - Programming - Recursion",
  "duration": 3,
  "sections": [
    {
      "name": "Recursion",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"373761\"></a><div itemprop=\"text\"><p>Consider the following two functions.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void fun1(int n) {\n    if(n == 0) return;\n    printf(\"%d\", n);\n    fun2(n - 2);\n    printf(\"%d\", n);\n}\nvoid fun2(int n) {\n    if(n == 0) return;\n    printf(\"%d\", n);\n    fun1(++n);\n    printf(\"%d\", n);\n}\n</pre>\n\n<p>The output printed when \\( \\text{fun1}(5) \\) is called is</p>\n\n</div><br><br><b>Programming: NIELIT 2022 April Scientist B | Section B | Question: 77</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 53423122233445 \\) &nbsp;</p>",
            "<p>\\( 53423120112233 \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>",
            "<p>\\( 53423122132435 \\) &nbsp;</p>",
            "<p>\\( 53423120213243 \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>"
          ],
          "correct_answer": "<p>\\( 53423122132435 \\) &nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/373761/nielit-2022-april-scientist-b-section-b-question-77\" target=\"_blank\">https://gateoverflow.in/373761/nielit-2022-april-scientist-b-section-b-question-77</a></p>"
        }
      ]
    }
  ]
});
