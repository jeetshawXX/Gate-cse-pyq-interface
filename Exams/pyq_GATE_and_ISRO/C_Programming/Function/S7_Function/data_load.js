window.__examLoadCallback({
  "title": "Function - Function - Slot 7",
  "duration": 42,
  "sections": [
    {
      "name": "Function",
      "questions": [
        {
          "id": 1,
          "question": "<p>The value of j at the end of the execution of the following C program:<br><pre><code> int incr (int i)\n{ \n    static int count = 0;\n    count = count + i;\n    return (count);\n} \nmain () { \n    int i, j; \n    for (i = 0; i &lt;= 4; i++)\n       j = incr (i);\n} </code></pre>\nis: <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>7</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/667/gate2000-2-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following C function definition<br><pre><code>int Trial (int a, int b, int c)\n{\n    if ((a&gt;=b) &amp;&amp; (c &lt; b)) return b;\n    else if (a &gt;= b) return Trial(a, c, b);\n    else return Trial(b, a, c);\n} </code></pre>The functional Trial: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finds the maximum of a, b, and c</p>",
            "<b>B.</b> <p>Finds the minimum of a, b, and c</p>",
            "<b>C.</b> <p>Finds the middle number of a, b, c</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1501/gate1999-2-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following program in a language that has dynamic scooping:<br><pre><code>var x: real;\nprocedure show:\n    begin print(x);end;\nprocedure small;\n    var x: real;\n        begin x: = 0.125; show; end;\nbegin x:=0.25\n    show; small\n    end. </code></pre>\nThen the output of the program is: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0.125 0.125</p>",
            "<b>B.</b> <p>0.25 0.25</p>",
            "<b>C.</b> <p>0.25 0.125</p>",
            "<b>D.</b> <p>0.125 0.25</p>"
          ],
          "correct_answer": "<b>C.</b> <p>0.25 0.125</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1491/gate1999-2-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>What is the result of the following program?<br><pre><code>    program side-effect (input, output);\n    var x, result: integer;\n    function f (var x:integer:integer;\n    begin\n        x:x+1;f:=x;\n    end\n    begin\n    x:=5;\n    result:=f(x)*f(x);\n    writeln(result);\n    end</code></pre> <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>36</p>",
            "<b>D.</b> <p>42</p>"
          ],
          "correct_answer": "<b>C.</b> <p>36</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1685/gate1998-2-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>What value would the following function return for the input x=95?<br><pre><code> Function fun (x:integer):integer;\nBegin\n    If x &gt; 100 then fun = x- 10\n    Else fun = fun(fun (x+11))\nEnd;</code></pre> <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>89</p>",
            "<b>B.</b> <p>90</p>",
            "<b>C.</b> <p>91</p>",
            "<b>D.</b> <p>92</p>"
          ],
          "correct_answer": "<b>C.</b> <p>91</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1684/gate1998-2-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following macros can put a macro assembler into an infinite loop?<br>I.<pre><code>.MACRO M1, X\n.IF EQ, X   ;if X=0 then\nM1 X + 1\n.ENDC\n.IF NE, X   ;if X \\(\\neq\\) O then\n.WORD X  ;address (X) is stored here\n.ENDC\n.ENDM</code></pre> <br> II.<pre><code>.MACRO M2, X\n.IF EQ, X\nM2 X\n.ENDC\n.IF NE, X\n.WORD X + 1\n.ENDC\n.ENDM </code></pre> <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II only</p>",
            "<b>B.</b> <p>I only</p>",
            "<b>C.</b> <p>both I and II</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>II only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2745/gate1996-2-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A language with string manipulation facilities uses the following operations<br><pre><code>head(s): first character of a string\ntail(s): all but exclude the first character of a string</code></pre><pre><code> concat(s1, s2): s1s2</code></pre>\nFor the string \"acbc\" what will be the output of<pre><code>concat(head(s), head(tail(tail(s)))) </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ac</p>",
            "<b>B.</b> <p>bc</p>",
            "<b>C.</b> <p>ab</p>",
            "<b>D.</b> <p>cc</p>"
          ],
          "correct_answer": "<b>C.</b> <p>ab</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2621/gate1995-2-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>What is the value of X printed by the following program?<br><pre><code>program COMPUTE (input, output);\nvar X:integer;\nprocedure FIND (X:real);\n    begin\n        X:=sqrt(X);\n    end;\nbegin\n    X:=2\n    FIND(X);\n    writeln(X);\nend.\n </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>\\(\\sqrt{2}\\)</p>",
            "<b>C.</b> <p>Run time error</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2616/gate1995-2-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>What are x and y in the following macro definition?<br><pre><code>macro\tAdd x, y\n        Load y\n        Mul x\n        Store y\nend macro\t </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Variables</p>",
            "<b>B.</b> <p>Identifiers</p>",
            "<b>C.</b> <p>Actual parameters</p>",
            "<b>D.</b> <p>Formal parameters</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Formal parameters</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2598/gate1995-1-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>In which of the following cases is it possible to obtain different results for call-by-reference and call-by-name parameter passing methods? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Passing a constant value as a parameter</p>",
            "<b>B.</b> <p>Passing the address of an array as a parameter</p>",
            "<b>C.</b> <p>Passing an array element as a parameter</p>",
            "<b>D.</b> <p>Passing an array</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Passing an array element as a parameter</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/305/gate1994-1-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Refer to the PASCAL program shown below.<br><pre><code>Program PARAM (input, output);\nvar m, n : integer;\nprocedure P (var, x, y : integer);\nvar m : integer;\nbegin\nm : = 1;\nx : = y + 1\nend;\nprocedure Q (x:integer; vary : integer);\nbegin\nx:=y+1;\nend;\nbegin\nm:=0; P(m,m); write (m);\nn:=0; Q(n*1,n); write (n)\nend</code></pre> <br>What is the scope of m declared in the main program? <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>PARAM, P, Q</p>",
            "<b>B.</b> <p>PARAM, P</p>",
            "<b>C.</b> <p>PARAM, Q</p>",
            "<b>D.</b> <p>P, Q (e)</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>PARAM, P, Q</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://drive.google.com/file/d/0B2D2Vl5_6vK1V0p0NnMydFMxWjQ/view\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Refer to the PASCAL program shown below.<br><pre><code>Program PARAM (input, output);\nvar m, n : integer;\nprocedure P (var, x, y : integer);\nvar m : integer;\nbegin\nm : = 1;\nx : = y + 1\nend;\nprocedure Q (x:integer; vary : integer);\nbegin\nx:=y+1;\nend;\nbegin\nm:=0; P(m,m); write (m);\nn:=0; Q(n*1,n); write (n)\nend</code></pre> <br>The value of n, output by the program PARAM is: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0, because n is the actual parameter corresponding to x in procedure Q.</p>",
            "<b>B.</b> <p>0, because n is the actual parameter to y in procedure Q.</p>",
            "<b>C.</b> <p>1, because n is the actual parameter corresponding to x in procedure Q.</p>",
            "<b>D.</b> <p>1, because n is the actual parameter corresponding to y in procedure Q.</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>E.</b> <p>none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://drive.google.com/file/d/0B2D2Vl5_6vK1V0p0NnMydFMxWjQ/view\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Refer to the PASCAL program shown below.<br><pre><code> Program PARAM (input, output);\nvar m, n : integer;\nprocedure P (var, x, y : integer);\nvar m : integer;\nbegin\nm : = 1;\nx : = y + 1\nend;\nprocedure Q (x:integer; vary : integer);\nbegin\nx:=y+1;\nend;\nbegin\nm:=0; P(m,m); write (m);\nn:=0; Q(n*1,n); write (n)\nend</code></pre> <br>The value of m, output by the program PARAM is: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, because m is a local variable in P</p>",
            "<b>B.</b> <p>0, because m is the actual parameter that corresponds to the formal parameter in p</p>",
            "<b>C.</b> <p>0, because both x and y are just reference to m, and y has the value 0</p>",
            "<b>D.</b> <p>1, because both x and y are just references to m which gets modified in procedure P</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>0, because m is the actual parameter that corresponds to the formal parameter in p</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2291/gate1993-7-1-2-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following program<pre><code> Program P2 \n    var n: int: \n     procedure W(var x: int) \n     begin \n         x=x+1; \n         print x;   \n     end \n\n     procedure D \n     begin  \n         var n: int; \n         n=3; \n         W(n);  \n     end \nbegin //beginP2 \n  n=10; \n  D; \nend </code></pre>\nIf the language has dynamic scooping and parameters are passed by reference,\nwhat will be printed by the program ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>11</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/737/gate2001-2-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following three functions :\n<br>[P1]<pre><code>  int * g (void) \n{ \n  int x= 10; \n  return (&amp;x); \n}</code></pre>\n[P2]<pre><code>   int * g (void) \n{ \n  int * px; \n  *px= 10; \n  return px; \n} </code></pre>\n[P3]<pre><code>  int *g (void) \n{ \n  int *px; \n  px = (int *) malloc (sizeof(int)); \n  *px= 10; \n  return px; \n} </code></pre>\nWhich of the above three functions are likely to cause problems with pointers ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only P3</p>",
            "<b>B.</b> <p>Only P1 and P3</p>",
            "<b>C.</b> <p>Only P1 and P2</p>",
            "<b>D.</b> <p>P1, P2 and P3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Only P1 and P2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/736/gate2001-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
