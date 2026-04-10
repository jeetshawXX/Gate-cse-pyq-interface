window.__examLoadCallback({
  "title": "Data Structures - Stack",
  "duration": 50,
  "sections": [
    {
      "name": "Stack",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"522\"></a><div itemprop=\"text\"><p>The following sequence of operations is performed on a stack:</p>\n\n<p>\\( PUSH &nbsp;(10), PUSH (20), POP, PUSH (10), PUSH (20), POP, POP, POP, PUSH (20), POP \\)</p>\n\n<p>The sequence of values popped out is</p>\n\n</div><br><br><b>GATE CSE 1991 | Question: 03,vii</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 20,10,20,10,20 \\)</p>",
            "<p>\\( 20,20,10,10,20 \\)</p>",
            "<p>\\( 10,20,20,10,20 \\)</p>",
            "<p>\\( 20,20,10,20,10 \\)</p>"
          ],
          "correct_answer": "<p>\\( 20,20,10,10,20 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/522/gate-cse-1991-question-03-vii\" target=\"_blank\">https://gateoverflow.in/522/gate-cse-1991-question-03-vii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2457\"></a><div itemprop=\"text\"><p>Which of the following permutations can be obtained in the output (in the same order) using a stack assuming that the input is the sequence \\( \\text{1, 2, 3, 4, 5} \\) in that order?</p>\n\n</div><br><br><b>GATE CSE 1994 | Question: 1.14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{3, 4, 5, 1, 2} \\)</p>",
            "<p>\\( \\text{3, 4, 5, 2, 1} \\)</p>",
            "<p>\\( \\text{1, 5, 2, 3, 4} \\)</p>",
            "<p>\\( \\text{5, 4, 3, 1, 2} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{3, 4, 5, 2, 1} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2457/gate-cse-1994-question-1-14\" target=\"_blank\">https://gateoverflow.in/2457/gate-cse-1994-question-1-14</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2633\"></a><div itemprop=\"text\"><p>The postfix expression for the infix expression \\( A+B*(C+D)/F+D*E \\) is:</p>\n\n\n\n</div><br><br><b>GATE CSE 1995 | Question: 2.21</b></p>",
          "type": "single",
          "options": [
            "<p>\\( AB + CD + *F/D +E* \\)</p>",
            "<p>\\( ABCD + *F/DE* ++ \\)</p>",
            "<p>\\( A * B + CD/F *DE ++ \\)</p>",
            "<p>\\( A + *BCD/F* DE ++ \\)</p>"
          ],
          "correct_answer": "<p>\\( ABCD + *F/DE* ++ \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2633/gate-cse-1995-question-2-21\" target=\"_blank\">https://gateoverflow.in/2633/gate-cse-1995-question-2-21</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"684\"></a><div itemprop=\"text\"><p>Suppose a stack implementation supports, in addition to PUSH and POP, an&nbsp;operation REVERSE, which reverses the order of the elements on the stack.</p>\n\n</div><br><br><b>GATE CSE 2000 | Question: 13</b></p>",
          "type": "numeric",
          "options": [
            "<p>To implement a queue using the above stack implementation, show how to&nbsp;implement&nbsp;ENQUEUE&nbsp;using a single operation and DEQUEUE&nbsp;using a&nbsp;sequence of \\( 3 \\) operations.</p>",
            "<p>The following post fix expression,&nbsp;containing&nbsp;single digit operands and&nbsp;arithmetic operators \\( + \\) and \\( * \\), is evaluated using a stack.&nbsp;<br>\n\t\\( 5 \\ 2 * 3 \\ 4 + 5 \\ 2 * * + \\)<br>\n\tShow the contents of the stack\n\t<ol style=\"list-style-type:lower-roman\">\n\t\t<li>After evaluating \\( 5 \\ 2 * 3 \\&nbsp;4 + \\)</li>\n\t\t<li>After evaluating \\( 5 \\ 2 * 3 \\ 4 + 5 \\ 2 \\)</li>\n\t\t<li>At the end of evaluation</li>\n\t</ol></p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/684/gate-cse-2000-question-13\" target=\"_blank\">https://gateoverflow.in/684/gate-cse-2000-question-13</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"951\"></a><div itemprop=\"text\"><p>Let <strong>S </strong>be a stack of size \\( n \\geq1 \\). Starting with the empty stack, suppose we push the first <em>n</em> natural numbers in sequence, and then perform \\( n \\)<em>&nbsp;</em>pop operations. Assume that Push and Pop operations take \\( X \\)&nbsp;seconds each, and \\( Y \\)&nbsp;seconds elapse between the end of one such stack operation and the start of the next operation. For \\( m&nbsp;\\geq1 \\), define the stack-life of <em>\\( m \\)&nbsp;</em>as the time elapsed from the end of \\( Push(m) \\) to the start of the pop operation that removes <em>\\( m \\)&nbsp;</em>from <strong>S</strong>. The average stack-life of an element of this stack is</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 64</b></p>",
          "type": "single",
          "options": [
            "<p>\\( n(X+Y) \\)</p>",
            "<p>\\( 3Y+2X \\)</p>",
            "<p>\\( n(X+Y)-X \\)</p>",
            "<p>\\( Y+2X \\)</p>"
          ],
          "correct_answer": "<p>\\( n(X+Y)-X \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/951/gate-cse-2003-question-64\" target=\"_blank\">https://gateoverflow.in/951/gate-cse-2003-question-64</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1000\"></a><div itemprop=\"text\"><p>A single array \\( A[1 \\ldots&nbsp;\\text{MAXSIZE}] \\) is used to implement two stacks. The two stacks grow from opposite ends of the array. Variables \\( top1 \\) and \\( top2 \\) \\( (top1 &lt; top 2) \\) point to the location of the topmost element in each of the stacks. If the space is to be used efficiently, the condition for \\( \\text{“}\\textsf{stack full}\\text{”} \\) is</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (top1 = \\text{MAXSIZE} / 2) \\) and \\( (top2 = \\text{MAXSIZE} / 2 + 1) \\)</p>",
            "<p>\\( top1 + top2 = \\text{MAXSIZE} \\)</p>",
            "<p>\\( (top1 = \\text{MAXSIZE} / 2) \\) or \\( (top2 = \\text{MAXSIZE}) \\)</p>",
            "<p>\\( top1 = top2 - 1 \\)</p>"
          ],
          "correct_answer": "<p>\\( top1 = top2 - 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1000/gate-cse-2004-question-3\" target=\"_blank\">https://gateoverflow.in/1000/gate-cse-2004-question-3</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1002\"></a><div itemprop=\"text\"><p>The best data structure to check whether an arithmetic expression has balanced parentheses is a</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>queue</p>",
            "<p>stack</p>",
            "<p>tree</p>",
            "<p>list</p>"
          ],
          "correct_answer": "<p>stack</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1002/gate-cse-2004-question-5\" target=\"_blank\">https://gateoverflow.in/1002/gate-cse-2004-question-5</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"2007\"></a><div itemprop=\"text\"><p>Suppose a stack implementation supports an instruction \\( \\text{REVERSE} \\), which reverses the order of elements on the stack, in addition to the \\( \\text{PUSH} \\) and \\( \\text{POP} \\) instructions. Which one of the following statements is \\( \\text{TRUE} \\) (<em>with respect to this modified stack</em>)?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 41</b></p>",
          "type": "single",
          "options": [
            "<p>A queue cannot be implemented using this stack.</p>",
            "<p>A queue can be implemented where \\( \\text{ENQUEUE} \\) takes a single instruction and \\( \\text{DEQUEUE} \\) takes a sequence of two instructions.</p>",
            "<p>A queue can be implemented where \\( \\text{ENQUEUE} \\) takes a sequence of three instructions and \\( \\text{DEQUEUE} \\) takes a single instruction.</p>",
            "<p>A queue can be implemented where both \\( \\text{ENQUEUE} \\) and \\( \\text{DEQUEUE} \\) take a single instruction each.</p>"
          ],
          "correct_answer": "<p>A queue can be implemented where \\( \\text{ENQUEUE} \\) takes a sequence of three instructions and \\( \\text{DEQUEUE} \\) takes a single instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2007/gate-cse-2014-set-2-question-41\" target=\"_blank\">https://gateoverflow.in/2007/gate-cse-2014-set-2-question-41</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"8164\"></a><div itemprop=\"text\">\n<p>Consider the C program below</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\nint *A, stkTop;\nint stkFunc (int opcode, int val)\n{\n    static int size=0, stkTop=0;\n    switch (opcode) {\n        case -1: size = val; break;\n        case 0: if (stkTop &lt; size ) A[stkTop++]=val; break;\n        default: if (stkTop) return A[--stkTop];\n    }\n    return -1;\n}\nint main()\n{\n    int B[20]; A=B; stkTop = -1;\n    stkFunc (-1, 10);\n    stkFunc (0, 5);\n    stkFunc (0, 10);\n    printf (\"%d\\n\", stkFunc(1, 0)+ stkFunc(1, 0));\n}</pre>\n\n<p>The value printed by the above program is ________.</p>\n</div><br><br><b>GATE CSE 2015 Set 2 | Question: 38</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8164/gate-cse-2015-set-2-question-38\" target=\"_blank\">https://gateoverflow.in/8164/gate-cse-2015-set-2-question-38</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"8408\"></a><div itemprop=\"text\"><p>The result evaluating the postfix expression \\( 10&nbsp; \\ 5 + 60 \\ 6 / &nbsp;* 8 - \\) is&nbsp;</p></div><br><br><b>GATE CSE 2015 Set 3 | Question: 12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 284 \\)</p>",
            "<p>\\( 213 \\)</p>",
            "<p>\\( 142 \\)</p>",
            "<p>\\( 71 \\)</p>"
          ],
          "correct_answer": "<p>\\( 142 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8408/gate-cse-2015-set-3-question-12\" target=\"_blank\">https://gateoverflow.in/8408/gate-cse-2015-set-3-question-12</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"357430\"></a><div itemprop=\"text\">Consider the following sequence of operations on an empty stack.\\[ \\textsf{push}(54);\\textsf{push}(52);\\textsf{pop}();\\textsf{push}(55);\\textsf{push}(62);\\textsf{s}=\\textsf{pop}(); \\]Consider the following sequence of operations on an empty queue.\\[ \\textsf{enqueue}(21);\\textsf{enqueue}(24);\\textsf{dequeue}();\\textsf{enqueue}(28);\\textsf{enqueue}(32);\\textsf{q}=\\textsf{dequeue}(); \\] The value of \\( \\textsf{s+q} \\) is ___________.</div><br><br><b>GATE CSE 2021 Set 1 | Question: 21</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "86:86",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/357430/gate-cse-2021-set-1-question-21\" target=\"_blank\">https://gateoverflow.in/357430/gate-cse-2021-set-1-question-21</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"399262\"></a><div itemprop=\"text\"><p>Consider a sequence \\( a \\) of elements \\( a_{0}=1, a_{1}=5, a_{2}=7, a_{3}=8, a_{4}=9 \\), and \\( a_{5}=2 \\). The following operations are performed on a stack \\( S \\) and a queue \\( Q, \\)&nbsp;both of which are initially empty.</p>\n\n<ol start=\"1\" style=\"list-style-type:upper-roman\">\n\t<li>\\( \\textsf{push} \\) the elements of \\( a \\) from \\( a_{0} \\) to \\( a_{5} \\) in that order into \\( S \\).</li>\n\t<li>\\( \\textsf{enqueue} \\) the elements of \\( a \\) from \\( a_{0} \\) to \\( a_{5} \\) in that order into \\( Q \\).</li>\n\t<li>\\( \\textsf{pop} \\) an element from \\( S \\).</li>\n\t<li>\\( \\textsf{dequeue} \\) an element from \\( Q \\).</li>\n\t<li>\\( \\textsf{pop} \\) an element from \\( S \\).</li>\n\t<li>\\( \\textsf{dequeue} \\) an element from \\( Q \\).</li>\n\t<li>\\( \\textsf{dequeue} \\) an element from \\( Q \\) and push the same element into \\( S \\).</li>\n\t<li>Repeat operation \\( \\text{VII} \\) three times.</li>\n\t<li>\\( \\textsf{pop} \\) an element from \\( S \\).</li>\n\t<li>\\( \\textsf{pop} \\) an element from \\( S \\).</li>\n</ol>\n\n<p>The top element of \\( S \\) after executing the above operations is ______________.</p></div><br><br><b>GATE CSE 2023 | Question: 49</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/399262/gate-cse-2023-question-49\" target=\"_blank\">https://gateoverflow.in/399262/gate-cse-2023-question-49</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"422859\"></a><div itemprop=\"text\"><p>​​​​​Let \\( \\mathrm{S} 1 \\) and \\( \\mathrm{S} 2 \\) be two stacks. \\( \\mathrm{S} 1 \\) has capacity of \\( 4 \\) elements. \\( \\mathrm{S} 2 \\) has capacity of \\( 2 \\) elements. \\( \\text{S1} \\) already has \\( 4 \\) elements: \\( 100,200,300 \\), and \\( 400 \\), whereas \\( \\text{S2} \\) is empty, as shown below.\\[ \\underset{\\Large{\\text{Stack S1}}}{\\begin{array}{|l|} \\hline 400\\text{(Top)} \\\\\\hline&nbsp; 300&nbsp; \\\\\\hline&nbsp; 200&nbsp; \\\\\\hline&nbsp; 100&nbsp; \\\\\\hline \\end{array}}\\quad \\qquad \\underset{\\Large{\\text{Stack S2}}}{\\begin{array}{|l|} \\hline &amp;&amp;&amp; \\\\\\hline &amp;&amp;&amp;&nbsp; \\\\\\hline \\end{array}} \\]</p><p>Only the following three operations are available:</p><ul><li><span style=\"font-family:Verdana,Geneva,sans-serif\">PushToS2:</span> Pop the top element from S1 and push it on S2.</li><li><span style=\"font-family:Verdana,Geneva,sans-serif\">PushToS1:</span> Pop the top element from S2 and push it on S1.</li><li><span style=\"font-family:Verdana,Geneva,sans-serif\">GenerateOutput</span>: Pop the top element from S1 and output it to the user.</li></ul><p><br>Note that the pop operation is not allowed on an empty stack and the push operation is not allowed on a full stack.<br><br>Which of the following output sequences can be generated by using the above operations?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 38</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( 100,200,400,300 \\)</p>",
            "<p>\\( 200,300,400,100 \\)</p>",
            "<p>\\( 400,200,100,300 \\)</p>",
            "<p>\\( 300,200,400,100 \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( 200,300,400,100 \\)</p>",
            "<p>\\( 400,200,100,300 \\)</p>",
            "<p>\\( 300,200,400,100 \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422859/gate-cse-2024-set-2-question-38\" target=\"_blank\">https://gateoverflow.in/422859/gate-cse-2024-set-2-question-38</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"460800\"></a><div itemprop=\"text\"><p>​​​Consider a stack data structure into which we can PUSH and POP records. Assume that each record pushed in the stack has a positive integer key and that all keys are distinct.<br><br>We wish to augment the stack data structure with an \\( O(1) \\) time MIN operation that returns a pointer to the record with smallest key present in the stack</p><ol><li>without deleting the corresponding record, and</li><li>without increasing the complexities of the standard stack operations.</li></ol><p><br>Which one or more of the following approach(es) can achieve it?</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>Keep with every record in the stack, a pointer to the record with the smallest key below it.</p>",
            "<p>Keep a pointer to the record with the smallest key in the stack.</p>",
            "<p>Keep an auxiliary array in which the key values of the records in the stack are maintained in sorted order.</p>",
            "<p>Keep a Min-Heap in which the key values of the records in the stack are maintained.</p>"
          ],
          "correct_answer": "<p>Keep with every record in the stack, a pointer to the record with the smallest key below it.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460800/gate-cse-2025-set-2-question-35\" target=\"_blank\">https://gateoverflow.in/460800/gate-cse-2025-set-2-question-35</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"460968\"></a><div itemprop=\"text\"><p>Consider the following pseudocode.</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">Create empty stack S\nSet x=0, flag=0, sum=0\nPush x onto S\nwhile (S is not empty){\n   if (flag equals 0){\n     Set x = x+1\n     Push x onto S}\n   if (x equals 8):\n     Set flag=1\n   if (flag equals 1){\n     x = Pop(S)\n     if (x is odd):\n       Pop (S)\n     Set sum = sum + x}\n}\nOutput sum\n</pre><p>The value of \\( \\text{sum} \\) output by a program executing the above pseudocode is __________ (Answer in integer)</p></div><br><br><b>GATE DA 2025 | Question: 54</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "24:24",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460968/gate-da-2025-question-54\" target=\"_blank\">https://gateoverflow.in/460968/gate-da-2025-question-54</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"3695\"></a><div itemprop=\"text\"><p>A program attempts to generate as many permutations as possible of the string, '\\( abcd \\)' by pushing the characters \\( a, b, c, d \\) in the same order onto a stack, but it may pop off the top character at any time. Which one of the following strings CANNOT be generated using this program?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 52</b></p>",
          "type": "single",
          "options": [
            "<p>\\( abcd \\)</p>",
            "<p>\\( dcba \\)</p>",
            "<p>\\( cbad \\)</p>",
            "<p>\\( cabd \\)</p>"
          ],
          "correct_answer": "<p>\\( cabd \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3695/gate-it-2004-question-52\" target=\"_blank\">https://gateoverflow.in/3695/gate-it-2004-question-52</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"3758\"></a><div itemprop=\"text\"><p>A function \\( f \\) defined on stacks of integers satisfies the following properties. \\( f(∅) = 0 \\) and \\( f (push (S, i)) = max (f(S), 0) + i \\) for all stacks \\( S \\) and integers \\( i \\).&nbsp;</p>\n\n<p>If a stack \\( S \\) contains the integers \\( 2, -3, 2, -1, 2 \\) in order from bottom to top, what is \\( f(S) \\)?</p>\n\n</div><br><br><b>GATE IT 2005 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 6 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 2 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3758/gate-it-2005-question-13\" target=\"_blank\">https://gateoverflow.in/3758/gate-it-2005-question-13</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"3465\"></a><div itemprop=\"text\"><p>Consider the following C program:&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">  #include &lt;stdio.h&gt;\n           #define EOF -1\n           void push (int); /* push the argument on the stack */\n           int pop  (void); /* pop the top of the stack */\n           void flagError ();\n           int main ()\n          {         int c, m, n, r;\n                     while ((c = getchar ()) != EOF)\n                    { if  (isdigit (c) )\n                               push (c);\n                     else if ((c == '+') || (c == '*'))\n                    {          m = pop ();\n                                n = pop ();\n                                r = (c == '+') ? n + m : n*m;\n                                push (r);\n                      }\n                      else if (c != ' ')\n                               flagError ();\n             }\n              printf(\"% c\", pop ());\n}</pre>\n\n<p><br>\nWhat is the output of the program for the following input?<br>\n\\( 5 \\ 2 \\ * \\ 3 \\ 3 \\ 2 \\ + * + \\)</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 15 \\)</p>",
            "<p>\\( 25 \\)</p>",
            "<p>\\( 30 \\)</p>",
            "<p>\\( 150 \\)</p>"
          ],
          "correct_answer": "<p>\\( 25 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3465/gate-it-2007-question-32\" target=\"_blank\">https://gateoverflow.in/3465/gate-it-2007-question-32</a></p>"
        }
      ]
    }
  ]
});
