window.__examLoadCallback({
  "title": "Array_and_Pointer - Array_and_Pointer - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Array_and_Pointer",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint main( )\n{\nstatic int a[ ] = {10, 20, 30, 40, 50};\nstatic int *p[ ] = {a, a+3, a+4, a+1, a+2};\nint **ptr = p;\nptr++;\nprintf(\"%d%d\", ptr-p,**ptr);\n}</code></pre>The output of the program is ______________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "140",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8478/gate2015-3-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following C program segment.<pre><code> #include &lt; stdio.h &gt;\nint main()\n{\nchar s1[7] = \"1234\", *p;\np = s1 + 2;\n*p = '0';\nprintf(\"%s\", s1);\n} </code></pre>  What will be printed by the program? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>12</p>",
            "<b>B.</b> <p>120400</p>",
            "<b>C.</b> <p>1204</p>",
            "<b>D.</b> <p>1034</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1204</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8401/gate2015-3-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>What is the output of the following C code? Assume that the address of x is 2000 (in decimal) and an integer requires four bytes of memory.<pre><code>int main () {\nunsigned int x[4][3] ={{1,2,3},{4,5,6},{7,8,9},{10,11,12}};\nprintf(\"%u, %u, %u\", x+3, *(x+3), *(x+2)+3);\n}</code></pre> <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2036, 2036, 2036</p>",
            "<b>B.</b> <p>2012, 4, 2204</p>",
            "<b>C.</b> <p>2036, 10, 10</p>",
            "<b>D.</b> <p>2012, 4, 6</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2036, 2036, 2036</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8283/gate2015-1-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the C function given below. Assume that the array listA contains n (&gt; 0) elements,\nsorted in ascending order.<pre><code>int ProcessArray(int *listA, int x, int n)\n{\n   int i, j, k;\n   i = 0;\n   j = n-1;\n   do {\n          k = (i+j)/2;\n          if (x &lt;= listA[k])\n               j = k-1;\n          if (listA[k] &lt;= x)\n              i = k+1;\n       }while (i &lt;= j);\nif (listA[k] == x)\n     return(k);\nelse\n    return -1;\n} </code></pre>\nWhich one of the following statements about the function ProcessArray is CORRECT? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It will run into an infinite loop when x is not in listA</p>",
            "<b>B.</b> <p>It is an implementation of binary search</p>",
            "<b>C.</b> <p>It will always find the maximum element in listA.</p>",
            "<b>D.</b> <p>It will return ? 1 even when x is present in listA.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It is an implementation of binary search</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2076/gate2014-3-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following program in C language:<pre><code># include &lt; stdio.h &gt;\nmain()\n{\n  int i;\n  int * pi = &amp;i;\n  scanf( \"%d\", pi) ;\n  printf (\"%d \\ n\", i+5) ;\n}</code></pre>\nWhich one of the following statements is TRUE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Compilation fails.</p>",
            "<b>B.</b> <p>Execution results in a run-time error.</p>",
            "<b>C.</b> <p>On execution, the value printed is 5 more than the address of variable i.</p>",
            "<b>D.</b> <p>On execution, the value printed is 5 more than the integer value entered</p>"
          ],
          "correct_answer": "<b>D.</b> <p>On execution, the value printed is 5 more than the integer value entered</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1770/gate2014-1-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>What does the following fragment of C-program print? <br>\nchar c []=\"GATE2011\"; <br>\nchar *p =c; <br>\nprintf (\"%s\", p + p[3]- p[ 1 ]); <br> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>GATE2011</p>",
            "<b>B.</b> <p>E2011</p>",
            "<b>C.</b> <p>2011</p>",
            "<b>D.</b> <p>11</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2011</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2124/gate2011-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which of the following is an illegal array definition? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Type COLONGE : (LIME, PINE, MUSK, MENTHOL); <br> var a : array [COLONGE] of REAL;</p>",
            "<b>B.</b> <p>var a : array [REAL] of REAL;</p>",
            "<b>C.</b> <p>var a : array ['A'..'Z'] of REAL;</p>",
            "<b>D.</b> <p>var a : array [BOOLEAN] of REAL;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>var a : array [REAL] of REAL;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18461/isro2008-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>C program is given below:<pre><code> #include &lt; stdio.h &gt;\nint main ()\n{\n        int i, j;\n        char a [2] [3] = {{'a', 'b', 'c'}, {'d', 'e', 'f'}};\n        char b [3] [2];\n        char *p = *b;\n        for (i = 0; i &lt; 2; i++) {\n              for (j = 0; j &lt; 3; j++) {\n              *(p + 2*j + i) = a [i] [j];\n              }\n        }\n}</code></pre> <br>What should be the contents of the array b at the end of the program? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{b} \\\\ \\mathrm{c} &amp; \\mathrm{d} \\\\ \\mathrm{e} &amp; \\mathrm{f} \\end{array}\\)</p>",
            "<b>B.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{d} \\\\ \\mathrm{b} &amp; \\mathrm{e} \\\\ \\mathrm{c} &amp; \\mathrm{f} \\end{array}\\)</p>",
            "<b>C.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{c} \\\\ \\mathrm{e} &amp; \\mathrm{b} \\\\ \\mathrm{d} &amp; \\mathrm{f} \\end{array}\\)</p>",
            "<b>D.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{e} \\\\ \\mathrm{d} &amp; \\mathrm{c} \\\\ \\mathrm{b} &amp; \\mathrm{f} \\end{array}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{d} \\\\ \\mathrm{b} &amp; \\mathrm{e} \\\\ \\mathrm{c} &amp; \\mathrm{f} \\end{array}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3362/gate2008-it-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the C program given below. What does it print?<pre><code> #include &lt; stdio.h &gt;\nint main ()\n{\n        int i, j;\n        int a [8] = {1, 2, 3, 4, 5, 6, 7, 8};\n        for(i = 0; i &lt; 3; i++) {\n             a[i] = a[i] + 1;\n             i++;\n        }\n        i--;\n        for (j = 7; j &gt; 4; j--) {\n              int i = j/2;\n              a[i] = a[i] - 1;\n        }\n        printf (\"%d, %d\", i, a[i]);</code></pre> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,3</p>",
            "<b>B.</b> <p>2,4</p>",
            "<b>C.</b> <p>3,2</p>",
            "<b>D.</b> <p>3,3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3,2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3361/gate2008-it-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>What is the output printed by the following C code?<br><pre><code> #include &lt; stdio.h &gt;\nint main ()\n{\n    char a [6] = \"world\";\n    int i, j;\n    for (i = 0, j = 5; i &lt; j; a [i++] = a [j--]);\n    printf (\"%s\\n\", a);\n}</code></pre> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A. dlrow</p>",
            "<b>B.</b> <p>B. Null string</p>",
            "<b>C.</b> <p>C. dlrld</p>",
            "<b>D.</b> <p>D. worow</p>"
          ],
          "correct_answer": "<b>B.</b> <p>B. Null string</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3359/gate2008-it-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following C program that attempts to locate an element x in an array Y[] using binary search. The program is erroneous.<pre><code> 1.   f(int Y[10], int x) {\n2.     int i, j, k;\n3.     i = 0; j = 9;\n4.     do {\n5.             k =  (i + j) /2;\n6.             if( Y[k] &lt; x)  i = k; else j = k;\n7.         } while(Y[k] != x &amp;&amp; i &lt; j);\n8.     if(Y[k] == x) printf (\"x is in the array \") ;\n9.     else printf (\" x is not in the array \") ;\n10. }</code></pre> The correction needed in the program to make it work properly is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Change line 6 to: if (Y[k] \\(\\lt\\)x)   i=k+1; else j=k-1;</p>",
            "<b>B.</b> <p>Change line 6 to: if (Y[k]\\(\\lt\\)x) i=k-1; else j=k+1;</p>",
            "<b>C.</b> <p>Change line 6 to: if (Y[k] \\(\\leq\\)x) i=k; else j=k;</p>",
            "<b>D.</b> <p>Change line 7 to: } while ((Y[k]==x) &amp;&amp; (i\\(\\lt\\)j));</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Change line 6 to: if (Y[k] \\(\\lt\\)x)   i=k+1; else j=k-1;</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43508/gate2008-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following C program that attempts to locate an element x in an array Y[] using binary search. The program is erroneous.<pre><code> 1.   f(int Y[10], int x) {\n2.     int i, j, k;\n3.     i = 0; j = 9;\n4.     do {\n5.             k =  (i + j) /2;\n6.             if( Y[k] &lt; x)  i = k; else j = k;\n7.         } while(Y[k] != x &amp;&amp; i &lt; j);\n8.     if(Y[k] == x) printf (\"x is in the array \") ;\n9.     else printf (\" x is not in the array \") ;\n10. }</code></pre> On which of the following contents of Y and x does the program fail? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Y is [1 2 3 4 5 6 7 8 9 10] and x \\(\\lt\\) 10</p>",
            "<b>B.</b> <p>Y is [1 3 5 7 9 11 13 15 17 19] and x \\(\\lt\\) 1</p>",
            "<b>C.</b> <p>Y is [2 2 2 2 2 2 2 2 2 2] and x\\(\\gt\\) 2</p>",
            "<b>D.</b> <p>Y is [2 4 6 8 10 12 14 16 18 20] and 2 \\(\\lt\\)x \\(\\lt\\) 20 and x is even</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Y is [2 2 2 2 2 2 2 2 2 2] and x\\(\\gt\\) 2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/394/gate2008-84#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the C program given below : <br><pre><code> #include &lt; stdio.h &gt;\n\nint main ()    {\n    int sum = 0, maxsum = 0,  i,  n = 6;\n    int a [] = {2, -2, -1, 3, 4, 2};\n    for (i = 0; i &lt; n; i++)    {\n            if (i == 0 || a [i]  &lt; 0  || a [i] &lt; a [i - 1])  {\n                     if (sum &gt; maxsum) maxsum = sum;\n                     sum = (a [i] &gt; 0) ? a [i] : 0;\n            }\n            else sum += a [i];\n    }\n    if (sum &gt; maxsum) maxsum = sum ;\n    printf (\"%d\\n\", maxsum);\n\n}</code></pre> <br>What is the value printed out when this program is executed? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3464/gate2007-it-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which one of the choices given below would be printed when the following program is executed?<br><pre><code> #include &lt; stdio.h &gt;\nint a1[] = {6, 7, 8, 18, 34, 67};\nint a2[] = {23, 56, 28, 29};\nint a3[] = {-12, 27, -31};\nint *x[] = {a1, a2, a3};\nvoid print(int *a[])\n{\n    printf(\"%d,\", a[0][2]);\n    printf(\"%d,\", *a[2]);\n    printf(\"%d,\", *++a[0]);\n    printf(\"%d,\", *(++a)[0]);\n    printf(\"%d\\n\", a[-1][+1]);\n}\nmain()\n{\n     print(x);\n}</code></pre> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8, -12, 7, 23, 8</p>",
            "<b>B.</b> <p>8, 8, 7, 23, 7</p>",
            "<b>C.</b> <p>-12, -12, 27, -31, 23</p>",
            "<b>D.</b> <p>-12, -12, 27, -31, 56</p>"
          ],
          "correct_answer": "<b>A.</b> <p>8, -12, 7, 23, 8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3594/gate2006-it-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which one of the choices given below would be printed when the following program is executed ?<br><pre><code> #include &lt; stdio.h &gt;\nstruct test {\n               int i;\n               char *c;\n}st[] = {5, \"become\", 4, \"better\", 6, \"jungle\", 8, \"ancestor\", 7, \"brother\"};\nmain ()\n{ \n    struct test *p = st;\n    p += 1;\n    ++p -&gt; c;\n    printf(\"%s,\", p++ -&gt; c);\n    printf(\"%c,\", *++p -&gt; c);\n    printf(\"%d,\", p[0].i);\n    printf(\"%s \\n\", p -&gt; c);\n}</code></pre> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>jungle, n, 8, nclastor</p>",
            "<b>B.</b> <p>etter, u, 6, ungle</p>",
            "<b>C.</b> <p>cetter, k, 6, jungle</p>",
            "<b>D.</b> <p>etter, u, 8, ncestor</p>"
          ],
          "correct_answer": "<b>B.</b> <p>etter, u, 6, ungle</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3592/gate2006-it-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
