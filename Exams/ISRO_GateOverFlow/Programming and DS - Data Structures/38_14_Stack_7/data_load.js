window.__examLoadCallback({
  "title": "Programming and DS - Data Structures - Stack",
  "duration": 19,
  "sections": [
    {
      "name": "Stack",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"49487\"></a><div itemprop=\"text\">\n<p>The five items: A, B, C, D, and E are pushed in a stack, one after other starting from A. The stack is popped four items and each element is inserted in a queue. The two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is</p>\n\n\n</div><br><br><b>Data Structures: ISRO CSE 2007 | Question: 16, ISRO CSE 2009 | Question: 30, ISRO CSE 2014 | Question: 43</b></p>",
          "type": "single",
          "options": [
            "<p>A</p>",
            "<p>B</p>",
            "<p>C</p>",
            "<p>D</p>"
          ],
          "correct_answer": "<p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/49487/isro-cse-2007-question-16-isro-cse-2009-question-30-isro-cse-2014-question-43\" target=\"_blank\">https://gateoverflow.in/49487/isro-cse-2007-question-16-isro-cse-2009-question-30-isro-cse-2014-question-43</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"50138\"></a><div itemprop=\"text\">\n<p>Stack A has the entries a, b, c (with a on top). Stack B is empty. An entry popped out of stack A can be printed immediately or pushed to stack B. An entry popped out of the stack B can be only be printed. In this arrangement, which of the following permutations of a, b, c are not possible?</p>\n\n\n</div><br><br><b>Data Structures: ISRO CSE 2008 | Question: 70</b></p>",
          "type": "single",
          "options": [
            "<p>b a c</p>",
            "<p>b c a</p>",
            "<p>c a b</p>",
            "<p>a b c</p>"
          ],
          "correct_answer": "<p>c a b</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/50138/isro-cse-2008-question-70\" target=\"_blank\">https://gateoverflow.in/50138/isro-cse-2008-question-70</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"128743\"></a><div itemprop=\"text\"><p>The best data structure to check whether an arithmetic expression has &nbsp;balanced parenthesis is &nbsp;a:</p>\n\n</div><br><br><b>Data Structures: ISRO CSE 2017 | Question: 59</b></p>",
          "type": "single",
          "options": [
            "<p>Queue</p>",
            "<p>Stack</p>",
            "<p>Tree</p>",
            "<p>List</p>"
          ],
          "correct_answer": "<p>Stack</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128743/isro-cse-2017-question-59\" target=\"_blank\">https://gateoverflow.in/128743/isro-cse-2017-question-59</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"331311\"></a><div itemprop=\"text\"><p>A stack is implemented with an array of \\( ’A[0...N-1]’ \\)&nbsp;and a variable ‘\\( pos \\)’. The push and pop operations are defined by the following code.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">push (x)\n    A[pos] &lt;- x\n    pos &lt;- pos -1\nend push\npop()\n    pos &lt;- pos+1\n    return A[pos]\nend pop</pre>\n\n<p>Which of the following will initialize an empty stack with capacity \\( N \\) for the above implementation​​​</p>\n\n</div><br><br><b>Data Structures: ISRO CSE 2020 | Question: 72</b></p>",
          "type": "single",
          "options": [
            "<p>\\( pos \\leftarrow -1 \\)</p>",
            "<p>\\( pos\\leftarrow 0 \\)</p>",
            "<p>\\( pos\\leftarrow 1 \\)</p>",
            "<p>\\( pos\\leftarrow N-1 \\)</p>"
          ],
          "correct_answer": "<p>\\( pos\\leftarrow N-1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331311/isro-cse-2020-question-72\" target=\"_blank\">https://gateoverflow.in/331311/isro-cse-2020-question-72</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"182097\"></a><div itemprop=\"text\"><p>Which of the following permutation can be obtained in the same order using a stack assuming that<br>\ninput is the sequence \\( 5,6,7,8,9 \\) in that order?</p>\n\n</div><br><br><b>Data Structures: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 7,8,9,5,6 \\)</p>",
            "<p>\\( 5,9,6,7,8 \\)</p>",
            "<p>\\( 7,8,9,6,5 \\)</p>",
            "<p>\\( 9,8,7,5,6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 7,8,9,6,5 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/182097/isro-dec2017-47\" target=\"_blank\">https://gateoverflow.in/182097/isro-dec2017-47</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"51080\"></a><div itemprop=\"text\"><p>If the sequence of operations - push (1), push (2), pop, push (1), push (2), pop, pop, pop, push (2), pop are performed on a stack, the sequence of popped out values</p>\n\n</div><br><br><b>Data Structures: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>2,2,1,1,2</p>",
            "<p>2,2,1,2,2</p>",
            "<p>2,1,2,2,1</p>",
            "<p>2,1,2,2,2</p>"
          ],
          "correct_answer": "<p>2,2,1,1,2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/51080/isro2015-11\" target=\"_blank\">https://gateoverflow.in/51080/isro2015-11</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"51086\"></a><div itemprop=\"text\">\n<p>The queue data structure is to be realized by using stack. The number of stacks needed would be</p>\n\n\n</div><br><br><b>Data Structures: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>It cannot be implemented</p>",
            "<p>2 stacks</p>",
            "<p>4 stacks</p>",
            "<p>1 stack</p>"
          ],
          "correct_answer": "<p>2 stacks</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/51086/isro2015-15\" target=\"_blank\">https://gateoverflow.in/51086/isro2015-15</a></p>"
        }
      ]
    }
  ]
});
