window.__examLoadCallback({
  "title": "Conditional_Statement - Conditional_Statement - Slot 1",
  "duration": 25,
  "sections": [
    {
      "name": "Conditional_Statement",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
        }
      ]
    }
  ]
});
