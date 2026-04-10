window.__examLoadCallback({
  "title": "Arithmetic_Operation - Arithmetic_Operation - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Arithmetic_Operation",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following C program:<br><pre><code> main()\n{\nfloat sum= 0.0, j=1.0,i=2.0;\nwhile(i/j&gt;0.001){\n    j=j+1;\n    sum=sum+i/j;\n    printf(\"%f/n\", sum);\n  }\n}</code></pre> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0  - 9 lines of output</p>",
            "<b>B.</b> <p>10 - 19 lines out output</p>",
            "<b>C.</b> <p>20  - 29 lines of output</p>",
            "<b>D.</b> <p>More than 29 lines of output</p>"
          ],
          "correct_answer": "<b>D.</b> <p>More than 29 lines of output</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213518/isro2018-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following C code segment:<br><pre><code> #include &lt; stdio.h &gt;\nmain()\n{\n    int i, j, x;\n    scanf(\"%d\", &amp;x);\n    i=1; j=1;\n    while (i&lt;10) {\n            j =j*i;\n            i= i+1;\n            if(i==x) break;\n        }\n}</code></pre>For the program fragment above, which of the following statements about the variables i and j must be true after execution of this program? [ !(exclamation) sign denotes factorial in the answer] <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((j=(x-1) !) \\wedge(i \\geq x)\\)</p>",
            "<b>B.</b> <p>\\((j=9 !) \\wedge(j=10)\\)</p>",
            "<b>C.</b> <p>\\(((j=10 !) \\wedge(i=10)) \\vee((j=(x-1) !) \\wedge(i=x))\\)</p>",
            "<b>D.</b> <p>\\((j=9 !) \\wedge(i \\geqslant 10)) \\vee((j=(x-1) !) \\wedge(i=x))\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\((j=9 !) \\wedge(i \\geqslant 10)) \\vee((j=(x-1) !) \\wedge(i=x))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213570/isro2018-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>What does the following program do when the input is unsigned 16 bit integer?<br><pre><code> #include &lt; stdio.h &gt;\nmain(){\n  unsigned int num;\n  int i;\n  scanf(\"%u\", &amp;num);\n  for(i=0;i&lt;16;i++){\n    printf(\"%d\", (num &lt; &lt; i&amp;1 &lt; &lt; 15)?1:0);\n  }\n}</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It prints all even bits from num</p>",
            "<b>B.</b> <p>It prints all odd bits from num</p>",
            "<b>C.</b> <p>It prints binary equivalent of num</p>",
            "<b>D.</b> <p>None of above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>It prints binary equivalent of num</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128753/isro2017-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following statements<br><pre><code> #define hypotenuse (a, b) sqrt (a*a+b*b);</code></pre>The macro call hypotenuse(a+2,b+3); <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finds the hypotenuse of a triangle with sides a+2 and b+3</p>",
            "<b>B.</b> <p>Finds the square root of \\((a+2)^{2}\\) and \\((b+3)^{2}\\)</p>",
            "<b>C.</b> <p>Is invalid</p>",
            "<b>D.</b> <p>Find the square root of 3*a+4*b+5</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Find the square root of 3*a+4*b+5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37955/isro2015-76\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The for loop<br><pre><code> for (i=0; i&lt;10; ++i)\nprintf(\"%d\", i&amp;1);</code></pre>prints <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(0101010101\\)</p>",
            "<b>B.</b> <p>\\(0111111111\\)</p>",
            "<b>C.</b> <p>\\(0000000000\\)</p>",
            "<b>D.</b> <p>\\(1111111111\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(0101010101\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52141/isro2015-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following program fragment<br><pre><code> i=6720; j=4;\nwhile (i%j)==0\n{\n    i=i/j;\n    j=j+1;\n}</code></pre>On termination j will have the value <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>6720</p>"
          ],
          "correct_answer": "<b>C.</b> <p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52135/isro2015-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>If n has  3, then the statement a[++n]=n++; <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>assigns 3 to a[5]</p>",
            "<b>B.</b> <p>assigns 4 to a[5]</p>",
            "<b>C.</b> <p>assigns 4 to a[4]</p>",
            "<b>D.</b> <p>what is assigned is compiler dependent</p>"
          ],
          "correct_answer": "<b>D.</b> <p>what is assigned is compiler dependent</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50408/isro2015-69\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The following three 'C' language statements is equivalent to which single statement?<br><pre><code>y=y+1;\nz=x+y;\nx=x+1</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>z = x + y + 2;</p>",
            "<b>B.</b> <p>z = (x++) + (++y);</p>",
            "<b>C.</b> <p>z = (x++) + (y++);</p>",
            "<b>D.</b> <p>z = (x++) + (++y) + 1;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>z = (x++) + (++y);</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/53362/isro2014-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>How many lines of output does the following C code produce?<br><pre><code> #include &lt; stdio.h &gt;\nfloat i=2.0;\nfloat j=1.0;\nfloat sum = 0.0;\nmain()\n{\n    while (i/j &gt; 0.001)\n    {\n        j+=j;\n        sum=sum+(i/j);\n        printf(\"%f\\n\", sum);\n    }\n}</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>11</p>"
          ],
          "correct_answer": "<b>D.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52437/isro2014-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>What is the output of the following C program?<br><pre><code> #include &lt; stdio.h &gt;    \nvoid main(void){\n    int shifty;\n    shifty=0570;\n    shifty=shifty&gt;&gt;4;\n    shifty=shifty&lt;&lt;6;\n    printf(\"The value  of shifty is %o \\n\",shifty);  \n}</code></pre><br> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The value of shifty is 15c0</p>",
            "<b>B.</b> <p>The value of shifty is 4300</p>",
            "<b>C.</b> <p>The value of shifty is 5700</p>",
            "<b>D.</b> <p>The value of shifty is 2700</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The value of shifty is 2700</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/15906/isro2014-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>What is the output of the following C program? <br><pre><code> #include &lt; stdio.h &gt;\n#define SQR(x) (x*x)  \n\nint main()\n{\n    int a;\n    int b=4;\n    a=SQR(b+2);\n    printf(\"%d\\n\",a); \n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>14</p>",
            "<b>B.</b> <p>36</p>",
            "<b>C.</b> <p>18</p>",
            "<b>D.</b> <p>20</p>"
          ],
          "correct_answer": "<b>A.</b> <p>14</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52570/isro2014-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>What is the output of the following program?<br><pre><code> Class Test\n{ \n    public static void main (String [] args) \n    {  \n        int x = 0; \n        int y = 0 \n        for (int z = 0; z &lt; 5; z++)\n        { \n            if((++x &gt;2)||(++y  &gt; 2)) \n            {\n                x++;\n            }\n        }\n    System.out.printIn (x+ \"\" + y); \n    }\n}</code></pre> <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8 2</p>",
            "<b>B.</b> <p>8 5</p>",
            "<b>C.</b> <p>8 3</p>",
            "<b>D.</b> <p>5 3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>8 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44842/isro-2013-64\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following C code.<br><pre><code> #include &lt; stdio.h &gt; \n#include &lt; math.h &gt; \nvoid main ()  \n{  \n      double pi = 3.1415926535;   \n      int a = 1;  \n      int i;    \n      for (i=0; i &lt; 3; i++) \n            if (a = cos(pi * i/2)) \n                  printf(\"% d\", 1);  \n            else printf(\"%d\", 0); \n}</code></pre> <br>\nWhat would the program print? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>000</p>",
            "<b>B.</b> <p>010</p>",
            "<b>C.</b> <p>101</p>",
            "<b>D.</b> <p>111</p>"
          ],
          "correct_answer": "<b>C.</b> <p>101</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44833/isro-2013-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Find the output of the following Java code line <br><pre><code>System.out.printIn(math.floor(-7.4)) </code></pre> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>-7</p>",
            "<b>B.</b> <p>-8</p>",
            "<b>C.</b> <p>-7.4</p>",
            "<b>D.</b> <p>-7</p>"
          ],
          "correct_answer": "<b>B.</b> <p>-8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52870/isro2011-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>In Java, after executing the following code what are the values of x, y and z?<br>\nint x, y=10; z=12;<br>\nx=y++ + z++;<br> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x=22, y=10, z=12</p>",
            "<b>B.</b> <p>x=24, y=10, z=12</p>",
            "<b>C.</b> <p>x=24, y=11, z=13</p>",
            "<b>D.</b> <p>x=22, y=11, z=13</p>"
          ],
          "correct_answer": "<b>D.</b> <p>x=22, y=11, z=13</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52501/isro2011-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
