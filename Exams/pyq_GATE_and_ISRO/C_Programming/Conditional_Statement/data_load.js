window.__examLoadCallback({
  "title": "C_Programming - Conditional_Statement",
  "duration": 55,
  "sections": [
    {
      "name": "Conditional_Statement",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following ANSI C program.<pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    int i, j, count;\n    count=0;\n    i=0;\n    for (j=-3; j &lt; =3; j++)\n    {\n        if (( j &gt; = 0) &amp;&amp; (i++))\n        count = count + j;\n    }\n    count = count +i;\n    printf(\"%d\", count);\n    return 0;\n}</code></pre>Which one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The program will not compile successfully</p>",
            "<b>B.</b> <p>The program will compile successfully and output 10 when executed</p>",
            "<b>C.</b> <p>The program will compile successfully and output 8 when executed</p>",
            "<b>D.</b> <p>The program will compile successfully and output 13 when executed</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The program will compile successfully and output 10 when executed</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357414/gate-cse-2021-set-1-question-37#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>What is the output of tho following program?<br><pre><code> main(){\n    int x=2, y=5;\n    if(x &lt; y) return (x=x+y);\n    else printf(\"z1\");\n    printf(\"z2\");\n}</code></pre> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>z2</p>",
            "<b>B.</b> <p>z1z2</p>",
            "<b>C.</b> <p>Compilation error</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213528/isro2018-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Assume A and B are non-zero positive integers. The following code segment:<br><pre><code> while(A!=B){\n    if(A &gt; B)\n    A -= B;\n    else\n    B -= A;\n}\ncout &lt;&lt; A; // printing the value of A</code></pre> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Computes the LCM of two numbers</p>",
            "<b>B.</b> <p>Divides the larger number by the smaller number</p>",
            "<b>C.</b> <p>Computes the GCD of two numbers</p>",
            "<b>D.</b> <p>Finds the smaller of two numbers</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Computes the GCD of two numbers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213581/isro2018-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>What will be the output of the following C code?<br><pre><code> #include &lt; stdio.h &gt;\nmain()\n{\n    int i;\n    for(i=0;i&lt;5;i++)\n    {\n        int i=10;\n        printf(\"%d\" , i);\n        i++;\n    }\n    return 0;\n}</code></pre><br> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10 11 12 13 14</p>",
            "<b>B.</b> <p>10 10 10 10 10</p>",
            "<b>C.</b> <p>0 1 2 3 4</p>",
            "<b>D.</b> <p>Compilation error</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10 10 10 10 10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128751/isro2017-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following segment of C-code:<br><pre><code>int j, n;\nj = 1;\nwhile (j &lt;= n)\n    j = j * 2;</code></pre>The number of comparisons made in the execution of the loop for any n&gt;0 is: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\lceil \\log_2n \\rceil +1\\)</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>\\(\\lceil \\log_2n \\rceil\\)</p>",
            "<b>D.</b> <p>\\(\\lfloor \\log_2n \\rfloor +1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\lfloor \\log_2n \\rfloor +1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56129/gate2007-15-isro2016-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following program fragment<br><pre><code> if(a &gt; b)  if(b &gt; c)     s1;  else s2;</code></pre>s2 will be executed if <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a &lt;= b</p>",
            "<b>B.</b> <p>b &gt; c</p>",
            "<b>C.</b> <p>b &gt;= c and a &lt;= b</p>",
            "<b>D.</b> <p>a &gt; b and b &lt;= c</p>"
          ],
          "correct_answer": "<b>D.</b> <p>a &gt; b and b &lt;= c</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19445/isro2015-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following C program: <br><pre><code>#include &lt; stdio.h &gt;\nint main( )\n{\n    int i, j, k = 0;\n    j = 2 * 3 / 4 + 2.0 / 5 + 8 / 5;\n    k -=  --j;\n    for(i = 0; i &lt; 5; i++)\n    {\n         switch(i + k)\n        {\n          case 1:\n          case 2: printf(\"\\n%d\", i+k);\n          case 3: printf(\"\\n%d\", i+k);\n          default: printf(\"\\n%d\", i+k);\n        }\n   }\nreturn 0;\n}</code></pre> The number of times printf statement is executed is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8557/gate2015-3-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the C program below.<pre><code>\n#include &lt; stdio.h &gt;\nint *A, stkTop;\nint stkFunc(int opcode, int val)\n{\n    static int size=0, stkTop=0;\n    switch (opcode) {\n        case -1: size = val; break;\n        case 0: if (stkTop &lt; size) A[stkTop++] = val; break;\n        default: if (stkTop) return A[--stkTop];\n        }\n       return -1;\n}\nint main()\n{\n    int B[20]; A = B; stkTop = -1;\n    stkFunc (-1, 10);\n    stkFunc ( 0, 5);\n    stkFunc ( 0, 10);\n    printf (\"%d\\n\", stkFunc(1, 0) + stkFunc(1, 0));\n}</code></pre> The value printed by the above program is __________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8164/gate2015-2-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>What will be the output of the following C program segment?<pre><code> char inChar = 'A' ;\nswitch ( inChar ) {\ncase 'A' : printf (\"Choice A\\ n\") ;\ncase 'B' :\ncase 'C' : printf (\"Choice B\") ;\ncase 'D' :\ncase 'E' :\ndefault : printf ( \" No Choice\" ) ; } </code></pre> <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>No Choice</p>",
            "<b>B.</b> <p>Choice A</p>",
            "<b>C.</b> <p>Choice A <br>\nChoice B  No Choice</p>",
            "<b>D.</b> <p>Program gives no output as it is erroneous</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Choice A <br>\nChoice B  No Choice</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/35/gate2012-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>What is the output of the following C code?<br><pre><code>#include &lt; stdio.h &gt;\nint main()\n{\n    int index;\n    for(index=1; index&lt;=5; index++)\n    {\n        printf(\"%d\", index);\n        if (index==3)\n            continue;\n    }\n}\n </code></pre> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1245</p>",
            "<b>B.</b> <p>12345</p>",
            "<b>C.</b> <p>12245</p>",
            "<b>D.</b> <p>12354</p>"
          ],
          "correct_answer": "<b>B.</b> <p>12345</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52841/isro2011-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following pseudocode<br><pre><code>x:=1;\ni:=1;\nwhile (x \\leq 500)\nbegin\nx:=2^x;\ni:=i+1;\nend\n</code></pre> <br>What is the value of i at the end of the pseudocode? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>7</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52489/isro2011-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following code segment:<br><pre><code> for (int k=0; k&lt;20; k=k+2)\n{\n    if (k % 3 == 1)\n        system.out.print(k+ \" \");\n}</code></pre>\nWhat is printed as a result of executing the code segment? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4 16</p>",
            "<b>B.</b> <p>4 10 16</p>",
            "<b>C.</b> <p>0 6 12 18</p>",
            "<b>D.</b> <p>1 4 7 10 13 16 19</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4 10 16</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49973/isro2008-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following pseudo-code<br><pre><code>x:=1;\ni:=1;\nwhile (x &lt;= 1000)\nbegin\n    x:=2^x;\n    i:=i+1;\nend; </code></pre> <br>\nWhat is the value of i at the end of the pseudo-code? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>7</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49486/isro2007-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Let x be an integer which can take a value of 0 or 1. The statement<pre><code>if (x == 0) x = 1; else x = 0; </code></pre>\nis equivalent to which one of the following ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x = 1 + x;</p>",
            "<b>B.</b> <p>x  = 1 - x;</p>",
            "<b>C.</b> <p>x = x - 1;</p>",
            "<b>D.</b> <p>x = 1% x;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>x  = 1 - x;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3656/gate2004-it-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Given the programming constructs<br>\nI. assignment<br>\nII. for loops where the loop parameter cannot be changed within the loop<br>\nIII. if-then-else<br>\nIV. forward go to<br>\nV. arbitrary go to<br>\nVI. non-recursive procedure call<br>\nVII. recursive procedure/function call<br>\nVIII. repeat loop,<br>\nwhich constructs will you not include in a programming language such that it should be possible to program the terminates (i.e., halting) function in the same programming language <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(II), (III), (IV)</p>",
            "<b>B.</b> <p>(V), (VII), (VIII)</p>",
            "<b>C.</b> <p>(VI), (VII), (VIII)</p>",
            "<b>D.</b> <p>(III), (VII), (VIII)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(V), (VII), (VIII)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1483/gate1999-2-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>The conditional expansion facility of macro processor is provided to <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>test a condition during the execution of the expanded program</p>",
            "<b>B.</b> <p>to expand certain model statements depending upon the value of a condition during the execution of the expanded program</p>",
            "<b>C.</b> <p>to implement recursion</p>",
            "<b>D.</b> <p>to expand certain model statements depending upon the value of a condition during the process of macro expansion</p>"
          ],
          "correct_answer": "<b>D.</b> <p>to expand certain model statements depending upon the value of a condition during the process of macro expansion</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2225/gate1997-1-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Assume that X and Y are non-zero positive integers. What does the following Pascal program segment do?<br><pre><code>while X &lt;&gt; Y do\nif  X &gt; Y then\n    X := X - Y\nelse\n    Y := Y - X;\nwrite(X);\n </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Computes the LCM of two numbers</p>",
            "<b>B.</b> <p>Divides the larger number by the smaller number</p>",
            "<b>C.</b> <p>Computes the GCD of two numbers</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Computes the GCD of two numbers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2615/gate1995-2-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>In the following Pascal program segment, what is the value of X after the execution of the program segment?<br><pre><code>X := -10; Y := 20;\nIf X &gt; Y then if X &lt; 0 then X := abs(X) else X := 2*X; </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>-20</p>",
            "<b>C.</b> <p>-10</p>",
            "<b>D.</b> <p>None</p>"
          ],
          "correct_answer": "<b>C.</b> <p>-10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2591/gate1995-1-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>An unrestricted use of the \"goto\" statement is harmful because <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it makes it more difficult to verify programs</p>",
            "<b>B.</b> <p>it increases the running time of the programs</p>",
            "<b>C.</b> <p>it increases the memory required for the programs</p>",
            "<b>D.</b> <p>it results in the compiler generating longer machine code</p>"
          ],
          "correct_answer": "<b>A.</b> <p>it makes it more difficult to verify programs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2442/gate1994-1-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>An unrestricted use of the \"go to\" statement is harmful because of which of the following reason (s): <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It makes it more difficult to verify programs.</p>",
            "<b>B.</b> <p>It makes programs more inefficient.</p>",
            "<b>C.</b> <p>It makes it more difficult to modify existing programs.</p>",
            "<b>D.</b> <p>It results in the compiler generating longer machine code.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It makes it more difficult to verify programs.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87095/gate1989-3-i\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
