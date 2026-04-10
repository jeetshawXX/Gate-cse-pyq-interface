window.__examLoadCallback({
  "title": "Compiler Design - Code Optimization",
  "duration": 25,
  "sections": [
    {
      "name": "Code Optimization",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"336271\"></a><div itemprop=\"text\"><p>The optimization phase in a compiler generally</p>\n\n</div><br><br><b>Compiler Design: NIELIT 2017 DEC Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>Reduces the space of the code</p>",
            "<p>Optimizes the code to reduce execution time</p>",
            "<p>Both (A) and (B)</p>",
            "<p>Neither (A) nor (B)</p>"
          ],
          "correct_answer": "<p>Both (A) and (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336271/nielit-2017-dec-scientist-b-section-b-42\" target=\"_blank\">https://gateoverflow.in/336271/nielit-2017-dec-scientist-b-section-b-42</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"336308\"></a><div itemprop=\"text\"><p>Which of the following is machine independent optimization?</p>\n\n</div><br><br><b>Compiler Design: NIELIT 2017 DEC Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>Loop optimization</p>",
            "<p>Redundancy Elimination</p>",
            "<p>Folding</p>",
            "<p>All of the option</p>"
          ],
          "correct_answer": "<p>All of the option</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336308/nielit-2017-dec-scientist-b-section-b-5\" target=\"_blank\">https://gateoverflow.in/336308/nielit-2017-dec-scientist-b-section-b-5</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"275500\"></a><div itemprop=\"text\"><p>Which of the following code replacements is an example of operator strength reduction?</p>\n\n</div><br><br><b>Compiler Design: NIELIT 2018</b></p>",
          "type": "single",
          "options": [
            "<p>Replace \\( &nbsp;\\text{P^2}  \\) by \\( P^*P \\)</p>",
            "<p>Replace \\(  P^*16 \\) by \\( P&lt;&lt;4 \\)</p>",
            "<p>Replace \\( &nbsp;\\text{pow}(P,3)  \\) by \\( P^*P^*P \\)</p>",
            "<p>Replace \\(  (P &lt;&lt;5)&nbsp;-P  \\) by \\( P^*3 \\)</p>"
          ],
          "correct_answer": "<p>Replace \\(  P^*16 \\) by \\( P&lt;&lt;4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/275500/nielit-2018-64\" target=\"_blank\">https://gateoverflow.in/275500/nielit-2018-64</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"275487\"></a><div itemprop=\"text\"><p>_____ merges the bodies of two loops</p></div><br><br><b>Compiler Design: NIELIT 2018</b></p>",
          "type": "single",
          "options": [
            "<p>loop rolling</p>",
            "<p>loop folding</p>",
            "<p>loop&nbsp; merge</p>",
            "<p>loop&nbsp; jamming</p>"
          ],
          "correct_answer": "<p>loop&nbsp; jamming</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/275487/nielit-2018-77\" target=\"_blank\">https://gateoverflow.in/275487/nielit-2018-77</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"373786\"></a><div itemprop=\"text\"><p>Consider the expression&nbsp;\\( (a-1) * (((b+c) / 3)) + d)) \\). Let \\( \\text{X} \\) be the minimum number of registers required by an&nbsp;optimal<em>&nbsp;</em>code generation (without any register spill) algorithm for a load/store architecture, in which&nbsp;</p>\n\n<ol start=\"1\" style=\"list-style-type:lower-roman\">\n\t<li>&nbsp;only load and store instructions can have memory operands&nbsp;and&nbsp;</li>\n\t<li>&nbsp;arithmetic instructions can have only register or immediate operands.<em>&nbsp;</em></li>\n</ol>\n\n<p>The value of \\( \\text{X} \\) is _____________ .</p>\n\n</div><br><br><b>Compiler Design: NIELIT 2022 April Scientist B | Section B | Question: 52</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( 2 \\)</p>",
            "<p>\\( 1 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 3 \\)</p>"
          ],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/373786/nielit-2022-april-scientist-b-section-b-question-52\" target=\"_blank\">https://gateoverflow.in/373786/nielit-2022-april-scientist-b-section-b-question-52</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"373782\"></a><div itemprop=\"text\"><p>Consider these two functions and two statements \\( \\text{S1} \\) and \\( \\text{S2} \\) about them.&nbsp;</p>\n\n<table border=\"1\" cellpadding=\"1\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int work1(int *a, int i, int j)\n{\nint x = a[i+2];\na[j] = x+1;\nreturn a[i+2] - 3;\n}</pre>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int work2(int *a, int i, int j)\n{\nint t1 = i+2;\nint t2 = a[t1];\na[j] = t2+1;\nreturn t2 - 3;\n}</pre>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>\\( \\text{S1:} \\) The transformation form work\\( 1 \\) to work\\( 2 \\) is valid, i.e., for any program state&nbsp;and input arguments, work\\( 2 \\) will compute the same output and have the same&nbsp;effect on program state as work\\( 1 \\)</p>\n\n<p>\\( \\text{S2:} \\) All the transformations applied to work\\( 1 \\) to get work\\( 2 \\) will always improve the&nbsp;performance (i.e reduce \\( \\text{CPU} \\) time) of work\\( 2 \\) compared to work\\( 1 \\)</p>\n\n</div><br><br><b>Compiler Design: NIELIT 2022 April Scientist B | Section B | Question: 56</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{S1} \\) is false and \\( \\text{S2} \\) is false</p>",
            "<p>\\( \\text{S1} \\)&nbsp;is false and \\( \\text{S2} \\) is true</p>",
            "<p>\\( \\text{S1} \\) is true and \\( \\text{S2} \\) is false</p>",
            "<p>\\( \\text{S1} \\) is true and \\( \\text{S2} \\) is true</p>"
          ],
          "correct_answer": "<p>\\( \\text{S1} \\) is false and \\( \\text{S2} \\) is false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/373782/nielit-2022-april-scientist-b-section-b-question-56\" target=\"_blank\">https://gateoverflow.in/373782/nielit-2022-april-scientist-b-section-b-question-56</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"351411\"></a><div itemprop=\"text\"><p>Some code optimizations are carried out on the intermediate code because:</p>\n\n</div><br><br><b>Compiler Design: NIELIT Scientific Assistant A 2020 November: 50</b></p>",
          "type": "single",
          "options": [
            "<p>they enhance the portability of the compiler to other target processors</p>",
            "<p>program analysis is more accurate on intermediate code than on machine code</p>",
            "<p>the information from data flow analysis cannot otherwise be used for optimization</p>",
            "<p>the information from the front end cannot otherwise be used for optimization</p>"
          ],
          "correct_answer": "<p>they enhance the portability of the compiler to other target processors</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/351411/nielit-scientific-assistant-a-2020-november-50\" target=\"_blank\">https://gateoverflow.in/351411/nielit-scientific-assistant-a-2020-november-50</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"351408\"></a><div itemprop=\"text\"><p>Which of the following is not true for tree and graph?</p></div><br><br><b>Compiler Design: NIELIT Scientific Assistant A 2020 November: 53</b></p>",
          "type": "single",
          "options": [
            "<p>A tree is a graph</p>",
            "<p>A graph is a tree</p>",
            "<p>Tree can have a cycle</p>",
            "<p>Tree is a \\( \\text{DAG} \\)</p>"
          ],
          "correct_answer": "<p>Tree can have a cycle</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/351408/nielit-scientific-assistant-a-2020-november-53\" target=\"_blank\">https://gateoverflow.in/351408/nielit-scientific-assistant-a-2020-november-53</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"351394\"></a><div itemprop=\"text\"><p>Peephole optimization is a :</p></div><br><br><b>Compiler Design: NIELIT Scientific Assistant A 2020 November: 66</b></p>",
          "type": "single",
          "options": [
            "<p>Loop optimization</p>",
            "<p>Local optimization</p>",
            "<p>Constant folding</p>",
            "<p>Data flow analysis</p>"
          ],
          "correct_answer": "<p>Local optimization</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/351394/nielit-scientific-assistant-a-2020-november-66\" target=\"_blank\">https://gateoverflow.in/351394/nielit-scientific-assistant-a-2020-november-66</a></p>"
        }
      ]
    }
  ]
});
