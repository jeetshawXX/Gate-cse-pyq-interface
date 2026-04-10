window.__examLoadCallback({
  "title": "Programming in C - Output",
  "duration": 28,
  "sections": [
    {
      "name": "Output",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"357530\"></a><div itemprop=\"text\"><p>Consider the following \\( \\text{ANSI C} \\) program.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint main() \n{\n    int arr[4][5];\n    int  i, j;\n    for (i=0; i&lt;4; i++) \n    ​​​​​​{\n        for (j=0; j&lt;5; j++) \n        {\n            arr[i][j] = 10 * i + j;\n        }\n    }\n    printf(“%d”, *(arr[1]+9));\n    return 0;\n}</pre>\n\n<p>What is the output of the above program?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 2 | Question: 10</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 14 \\)</p>",
            "<p>\\( 20 \\)</p>",
            "<p>\\( 24 \\)</p>",
            "<p>\\( 30 \\)</p>"
          ],
          "correct_answer": "<p>\\( 24 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357530/gate-cse-2021-set-2-question-10\" target=\"_blank\">https://gateoverflow.in/357530/gate-cse-2021-set-2-question-10</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"371903\"></a><div itemprop=\"text\"><p>What is printed by the following \\( \\text{ANSI C} \\) program?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\n\nint main (int argc, char *argv[])\n\n{\n\n        int a[3][3][3] =\n\n        {{1, 2, 3, 4, 5, 6, 7, 8, 9}, \n         {10, 11, 12, 13, 14, 15, 16, 17, 18},\n         {19, 20, 21, 22, 23, 24, 25, 26, 27}};\n\n    int i = 0, j = 0, k = 0;\n\n    for ( i = 0; i &lt; 3; i ++) {\n\n        for ( k = 0; k &lt; 3; k++)\n\n            printf(“%d”, a[i][j][k]);\n\n        printf (“\\n”);\n\n    }\n\n    return 0;\n\n}\n\n</pre>\n\n</div><br><br><b>GATE CSE 2022 | Question: 33</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\begin {array}{} 1 &amp; 2 &amp; 3 \\\\ 10 &amp; 11 &amp; 12 \\\\ 19 &amp; 20 &amp; 21 \\end{array} \\)</p>",
            "<p>\\( \\begin {array}{} 1 &amp; 4 &amp; 7 \\\\ 10 &amp; 13 &amp; 16 \\\\ 19 &amp; 22 &amp; 25 \\end{array} \\)</p>",
            "<p>\\( \\begin {array}{} 1 &amp; 2 &amp; 3 \\\\ 4 &amp; 5 &amp; 6 \\\\ 7 &amp; 8 &amp; 9 \\end{array} \\)</p>",
            "<p>\\( \\begin {array}{} 1 &amp; 2 &amp; 3 \\\\ 13 &amp; 14 &amp; 15 \\\\ 25 &amp; 26 &amp; 27 \\end{array} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\begin {array}{} 1 &amp; 2 &amp; 3 \\\\ 10 &amp; 11 &amp; 12 \\\\ 19 &amp; 20 &amp; 21 \\end{array} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371903/gate-cse-2022-question-33\" target=\"_blank\">https://gateoverflow.in/371903/gate-cse-2022-question-33</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"371902\"></a><div itemprop=\"text\"><p>What is printed by the following \\( \\text{ANSI C} \\) program?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\n\nint main(int argc, char *argv[]) {\n\n    char a = ‘P’;\n\n    char b = ‘x’;\n\n    char c = (a&amp;b) + ‘*’;\n\n    char d = (a|b) – ‘-’;\n\n    char e = (a^b) + ‘+’;\n\n    printf(“%c %c %c\\n”, c, d, e);\n\n    return 0;\n\n}</pre>\n\n<p>\\( \\text{ASCII} \\) encoding for relevant characters is given below</p>\n\n<p>\\( \\begin {array}{|c|c|c|c|c|} \\hline \\text{A} &amp; \\text{B} &amp; \\text{C} &amp; \\dots &amp; \\text{Z} \\\\\\hline 65 &amp; 66 &amp; 67 &amp; \\dots &amp; 90 \\\\\\hline&nbsp; \\end{array} \\qquad&nbsp;\\begin {array}{|c|c|c|c|c|} \\hline \\text{a} &amp; \\text{b} &amp; \\text{c} &amp; \\dots &amp; \\text{z} \\\\\\hline 97 &amp; 98 &amp; 99 &amp; \\dots &amp; 122 \\\\\\hline&nbsp; \\end{array} \\\\ \\qquad \\qquad \\qquad \\quad \\begin {array}{|c|c|c|} \\hline&nbsp; *&nbsp; &amp; + &amp; – &nbsp; \\\\\\hline 42 &amp; 43 &amp; 45 \\\\\\hline&nbsp; \\end{array}  \\)</p>\n\n</div><br><br><b>GATE CSE 2022 | Question: 34</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{z K S} \\)</p>",
            "<p>\\( 122 \\; 75 \\; 83 \\)</p>",
            "<p>\\(  * \\; – \\; +  \\)</p>",
            "<p>\\( \\text{P x +} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{z K S} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371902/gate-cse-2022-question-34\" target=\"_blank\">https://gateoverflow.in/371902/gate-cse-2022-question-34</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"399286\"></a><div itemprop=\"text\"><p>The integer value printed by the \\( \\textsf{ANSI-C} \\) program given below is _______________</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\n\nint funcp(){\n    static int x = 1;\n    x++;\n    return x;\n}\n\nint main(){\n    int x,y;\n    x = funcp();\n    y = funcp()+x;\n    printf(\"%d\\n\", (x+y));\n    return 0;\n}\n</pre></div><br><br><b>GATE CSE 2023 | Question: 25</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/399286/gate-cse-2023-question-25\" target=\"_blank\">https://gateoverflow.in/399286/gate-cse-2023-question-25</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"422834\"></a><div itemprop=\"text\"><p>Consider the following \\( \\mathrm{C} \\) program:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\n\nint main() {\n\nint a=6;\n\nint b = 0;\n\nwhile (a&lt;10)&nbsp; &nbsp;{\n\na = a / 12+1 ;\n\na += b ;}\n\nprintf (\"%d\", a);\n\nreturn 0 ; }</pre>\n\n<p>Which one of the following statements is CORRECT?</p>\n\n</div><br><br><b>GATE CSE 2024 | Set 1 | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>The program prints \\( 9 \\) as output</p>",
            "<p>The program prints \\( 10 \\) as output</p>",
            "<p>The program gets stuck in an infinite loop</p>",
            "<p>The program prints \\( 6 \\) as output</p>"
          ],
          "correct_answer": "<p>The program gets stuck in an infinite loop</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422834/gate-cse-2024-set-1-question-8\" target=\"_blank\">https://gateoverflow.in/422834/gate-cse-2024-set-1-question-8</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"422833\"></a><div itemprop=\"text\"><p>&nbsp;</p>\n\n<p>​​​Consider the following \\( \\mathrm{C} \\) program:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nvoid fX ();&nbsp;\nint main(){\nfX();\nreturn 0 }; </pre>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void fX () {&nbsp; \nchar a; \nif ((a=g e t c h a r())&nbsp; ! = '\\n')\nfX(); \nif (a ! = '\\n')\nputchar (a); }\n</pre>\n\n<p>Assume that the input to the program from the command line is \\( 1234 \\) followed by a newline character. Which one of the following statements is CORRECT?</p>\n\n</div><br><br><b>GATE CSE 2024 | Set 1 | Question: 9</b></p>",
          "type": "single",
          "options": [
            "<p>The program will not terminate</p>",
            "<p>The program will terminate with no output</p>",
            "<p>The program will terminate with \\( 4321 \\) as output</p>",
            "<p>The program will terminate with \\( 1234 \\) as output&nbsp;</p>"
          ],
          "correct_answer": "<p>The program will terminate with \\( 4321 \\) as output</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422833/gate-cse-2024-set-1-question-9\" target=\"_blank\">https://gateoverflow.in/422833/gate-cse-2024-set-1-question-9</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"422874\"></a><div itemprop=\"text\"><p>​​​Consider the following \\( \\mathrm{C} \\) function definition.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int fX(char *a) {\n\nchar *b =  a;\n\nwhile (*b)\n\nb++;\n\nreturn b - a; }\n\n</pre><p>Which of the following statements is/are TRUE?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 23</b></p>",
          "type": "multiple",
          "options": [
            "<p>The function call \\( \\text{fX(\"a b c d''} \\)) will always return a value</p>",
            "<p>Assuming a character array \\( c \\) is declared as char \\( c[&nbsp;]= \\) \"abcd\" in main ( ), the function call \\( fX \\) (c) will always return a value</p>",
            "<p>The code of the function will not compile</p>",
            "<p>Assuming a character pointer \\( \\mathrm{c} \\) is declared as char \\( { }^{*} \\mathrm{c}= \\) \"abcd\" in main (), the function call \\( \\mathrm{fX}(\\mathrm{c}) \\) will always return a value</p>"
          ],
          "correct_answer": [
            "<p>The function call \\( \\text{fX(\"a b c d''} \\)) will always return a value</p>",
            "<p>Assuming a character array \\( c \\) is declared as char \\( c[&nbsp;]= \\) \"abcd\" in main ( ), the function call \\( fX \\) (c) will always return a value</p>",
            "<p>Assuming a character pointer \\( \\mathrm{c} \\) is declared as char \\( { }^{*} \\mathrm{c}= \\) \"abcd\" in main (), the function call \\( \\mathrm{fX}(\\mathrm{c}) \\) will always return a value</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422874/gate-cse-2024-set-2-question-23\" target=\"_blank\">https://gateoverflow.in/422874/gate-cse-2024-set-2-question-23</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"460027\"></a><div itemprop=\"text\"><p>Consider the following C program:</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">#include &lt;stdio.h&gt;\nint gate (int n) {\nint d, t, newnum, turn;\nnewnum = turn = 0; t=1;\nwhile (n&gt;=t) t *= 10;\nt /=10;\nwhile (t&gt;0) {\nd = n/t;\nn = n%t;\nt /= 10;\nif (turn) newnum = 10*newnum + d;\nturn = (turn + 1) % 2;\n}\nreturn newnum;\n}\nint main () {\nprintf (\"%d\", gate(14362));\nreturn 0;\n}</pre><p>The value printed by the given \\( C \\) program is ________. (Answer in integer)</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 53</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "46:46",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460027/gate-cse-2025-set-1-question-53\" target=\"_blank\">https://gateoverflow.in/460027/gate-cse-2025-set-1-question-53</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"460812\"></a><div itemprop=\"text\"><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">int x=126,y=105;\ndo {\n    if(x&gt;y) x=x-y;\n    else y=y-x;\n} while(x!=y);\nprintf(\"%d\",x);</pre><p>The output of the given C code segment is _________. (Answer in integer)</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 23</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "21:21",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460812/gate-cse-2025-set-2-question-23\" target=\"_blank\">https://gateoverflow.in/460812/gate-cse-2025-set-2-question-23</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"460840\"></a><div itemprop=\"text\"><p>Consider the following C program:</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">#include &lt;stdio.h&gt;\n\nint g(int n) {\n    return (n+10);\n}\n\nint f(int n) {\n    return g(n*2);\n}\n\nint main() {\n    int sum, n;\n    sum=0;\n    for (n=1; n&lt;3; n++)\n         sum += g(f(n));\n    printf (\"%d\", sum);\n    return 0;\n}</pre><p>The output of the given C program is ___________. (Answer in integer)</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 53</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "46:46",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460840/gate-cse-2025-set-2-question-53\" target=\"_blank\">https://gateoverflow.in/460840/gate-cse-2025-set-2-question-53</a></p>"
        }
      ]
    }
  ]
});
