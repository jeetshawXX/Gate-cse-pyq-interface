window.__examLoadCallback({
  "title": "Stack - Stack - Slot 2",
  "duration": 50,
  "sections": [
    {
      "name": "Stack",
      "questions": [
        {
          "id": 1,
          "question": "<p>The five items: A, B, C, D, and E are pushed in a stack, one after other starting from A. The stack is popped four items and each element is inserted in a queue. The two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49487/isro2007-16-isro2009-30-isro2014-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>The infix expression \\(A+(B-C)^*D\\) is correctly represented in prefix notation as <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(A+B-C*D\\)</p>",
            "<b>B.</b> <p>\\(+A*-BCD\\)</p>",
            "<b>C.</b> <p>\\(ABC-D*+\\)</p>",
            "<b>D.</b> <p>\\(A+BC-D*\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(+A*-BCD\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50380/isro2009-28\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Assume that the operators \\(+, -, \\times\\) are left associative and \\(\\hat{}\\) is right associative. The order of precedence (from highest to lowest) is \\(\\hat{}, \\times, +, -\\). The postfix expression corresponding to the infix expression \\(a+ b \\times c-d \\;\\;  \\hat{} e \\; \\; \\hat{} \\; \\; f\\) is <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(abc\\times+def\\;\\hat{}\\;\\;\\hat{}-\\)</p>",
            "<b>B.</b> <p>\\(abc\\times + de \\;\\; \\hat{} f \\;\\; \\hat{}\\)</p>",
            "<b>C.</b> <p>\\( ab+c\\times d-e\\;\\; \\hat{} f \\;\\; \\hat{}\\)</p>",
            "<b>D.</b> <p>\\(-+a\\times bc\\;\\;\\hat{}\\;\\;\\hat{}def\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(abc\\times+def\\;\\hat{}\\;\\;\\hat{}-\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1035/gate2004-38-isro2009-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Stack A has the entries a, b, c (with a on top). Stack B is empty. An entry popped out of stack A can be printed immediately or pushed to stack B. An entry popped out of the stack B can be only be printed. In this arrangement, which of the following permutations of a, b, c are not possible? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>b a c</p>",
            "<b>B.</b> <p>b c a</p>",
            "<b>C.</b> <p>c a b</p>",
            "<b>D.</b> <p>a b c</p>"
          ],
          "correct_answer": "<b>C.</b> <p>c a b</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50138/isro2008-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The five items: A, B, C, D, and E are pushed in a stack, one after other starting from A. The stack is popped four items and each element is inserted in a queue. The two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49487/isro2007-16-isro2009-30-isro2014-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following C program: <br><pre><code> #include &lt; stdio.h &gt;\n\n           #define EOF -1\n           void push (int); /* push the argument on the stack */\n           int pop  (void); /* pop the top of the stack */\n           void flagError ();\n           int main ()\n          {         int c, m, n, r;\n                     while ((c = getchar ()) != EOF)\n                    { if  (isdigit (c) )\n                               push (c);\n                     else if ((c == '+') || (c == '*'))\n                    {          m = pop ();\n                                n = pop ();\n                                r = (c == '+') ? n + m : n*m;\n                                push (r);\n                      }\n                      else if (c != ' ')\n                               flagError ();\n             }\n              printf(\"% c\", pop ());\n}</code></pre> <br>What is the output of the program for the following input?<br>5 2 * 3 3 2 + * + <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>30</p>",
            "<b>D.</b> <p>150</p>"
          ],
          "correct_answer": "<b>B.</b> <p>25</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3465/gate2007-it-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The following postfix expression with single digit operands is evaluated using a\nstack:<pre><code>\n8 2 3 ^ / 2 3 * + 5 1 * -  </code></pre>\nNote that ^ is the exponentiation operator. The top two elements of the stack\nafter the first * is evaluated are: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6,1</p>",
            "<b>B.</b> <p>5, 7</p>",
            "<b>C.</b> <p>3, 2</p>",
            "<b>D.</b> <p>1, 5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>6,1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1236/gate2007-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A function \\(f\\) defined on stacks of integers satisfies the following properties. \\(f(\\emptyset) = 0\\) and \\(f (push (S, i)) = max (f(S), 0) + i\\) for all stacks \\(S\\) and integers \\(i\\).If a stack \\(S\\) contains the integers 2, -3, 2, -1, 2 in order from bottom to top, what is \\(f(S)\\)? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3758/gate2005-it-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A program attempts to generate as many permutations as possible of the string, 'abcd' by pushing the characters a,b,c,d in the same order onto a stack, but it may pop off the top character at any time. Which one of the following strings CANNOT be generated using this program? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>abcd</p>",
            "<b>B.</b> <p>dcba</p>",
            "<b>C.</b> <p>cbad</p>",
            "<b>D.</b> <p>cabd</p>"
          ],
          "correct_answer": "<b>D.</b> <p>cabd</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3695/gate2004-it-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Assume that the operators +, -, x , are left associative and ^ is right associative. the order of\nprecedence (from highest to lowest) is ^, x , +, -. The postfix expression corresponding to the infix\nexpression a + b x c-d^e^f is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>abcx+def^^-</p>",
            "<b>B.</b> <p>abcx+de^f^-</p>",
            "<b>C.</b> <p>ab+cxd-e^f^</p>",
            "<b>D.</b> <p>axbc^^def</p>"
          ],
          "correct_answer": "<b>A.</b> <p>abcx+def^^-</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1035/gate2004-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The best data structure to check whether an arithmetic expression has balanced parentheses is a <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>queue</p>",
            "<b>B.</b> <p>stack</p>",
            "<b>C.</b> <p>tree</p>",
            "<b>D.</b> <p>list</p>"
          ],
          "correct_answer": "<b>B.</b> <p>stack</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1002/gate2004-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A single array A[1...MAXSIZE] is used to implement two stacks. The two stacks grow from opposite\nends of the array. Variables top1 and top 2 (top1 \\(\\lt\\) top 2) point to the location of the topmost\nelement in each of the stacks. If the space is to be used efficiently, the condition for \"stack full\" is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(top1 = MAXSIZE/2) and (top2 = MAXSIZE/2+1)</p>",
            "<b>B.</b> <p>(top1 + top2 = MAXSIZE</p>",
            "<b>C.</b> <p>(top1 = MAXSIZE/2) or (top2 = MAXSIZE)</p>",
            "<b>D.</b> <p>top1 = top2 -1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>top1 = top2 -1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1000/gate2004-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Let S be a stack of size n \\(\\geq\\) 1. Starting with the empty stack, suppose we push the first n natural numbers in sequence, and then perform n pop operations. Assume\nthat Push and Pop operation take X seconds each , and Y seconds elapse between\nthe end of the one such stack operation and the start of the next operation. For\nm \\(\\geq\\) 1, define the stack-life of m as the time elapsed from the end or Push (m) to the start of the pop operation that removes m from S . The average stack-life of\nan element of this stack is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n(X+Y)</p>",
            "<b>B.</b> <p>3Y+2X</p>",
            "<b>C.</b> <p>n(X+Y)-X</p>",
            "<b>D.</b> <p>Y+2X</p>"
          ],
          "correct_answer": "<b>C.</b> <p>n(X+Y)-X</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/951/gate2003-64#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>To evaluate an expression without any embedded function calls <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>One stack is enough</p>",
            "<b>B.</b> <p>Two stack are needed</p>",
            "<b>C.</b> <p>As many stacks as the height of the expression tree are needed</p>",
            "<b>D.</b> <p>A Turning machine is needed in the general case</p>"
          ],
          "correct_answer": "<b>A.</b> <p>One stack is enough</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/849/gate2002-2-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following is essential for converting an infix expression to the postfix form efficiently? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An operator stack</p>",
            "<b>B.</b> <p>An operand stack</p>",
            "<b>C.</b> <p>An operand stack and an operator stack</p>",
            "<b>D.</b> <p>A parse tree</p>"
          ],
          "correct_answer": "<b>A.</b> <p>An operator stack</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2223/gate1997-1-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>The postfix expression for the infix expression A+B*(C+D)/F+D*E is: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>AB + CD + *F/D +E*</p>",
            "<b>B.</b> <p>ABCD + *F/DE* ++</p>",
            "<b>C.</b> <p>A * B + CD/F *DE ++</p>",
            "<b>D.</b> <p>A + *BCD/F* DE ++</p>"
          ],
          "correct_answer": "<b>B.</b> <p>ABCD + *F/DE* ++</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2633/gate1995-2-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Which of the following permutations can be obtained in the output (in the same order) using a stack assuming that the input is the sequence 1, 2, 3, 4, 5 in that order? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3, 4, 5, 1, 2</p>",
            "<b>B.</b> <p>3, 4, 5, 2, 1</p>",
            "<b>C.</b> <p>1, 5, 2, 3, 4</p>",
            "<b>D.</b> <p>5, 4, 3, 1, 2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3, 4, 5, 2, 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2457/gate1994-1-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:\n<br>The following sequence of operations is performed on a stack:<br>\nPUSH  (10), PUSH (20), POP, PUSH (10), PUSH (20), POP, POP, POP, PUSH (20), POP<br>\nThe sequence of values popped out is<br> <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20,10,20,10,20</p>",
            "<b>B.</b> <p>20,20,10,10,20</p>",
            "<b>C.</b> <p>10,20,20,10,20</p>",
            "<b>D.</b> <p>20,20,10,20,10</p>"
          ],
          "correct_answer": "<b>B.</b> <p>20,20,10,10,20</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/522/gate1991-03-vii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
