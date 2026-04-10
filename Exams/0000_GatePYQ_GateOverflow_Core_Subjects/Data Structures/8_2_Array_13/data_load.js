window.__examLoadCallback({
  "title": "Data Structures - Array",
  "duration": 36,
  "sections": [
    {
      "name": "Array",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2309\"></a><div itemprop=\"text\"><p>The following Pascal program segments finds the largest number in a two-dimensional integer array \\( A[0\\dots n-1, 0\\dots n-1] \\) using a single loop. Fill up the boxes to complete the program and write against \\( \\fbox{A}, \\fbox{B}, \\fbox{C} \\text{ and } \\fbox{D} \\) in your answer book Assume that max is a variable to store the largest value and \\( i, j \\) are the indices to the array.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">begin\n    max:=|A|, i:=0, j:=0;\n    while |B| do\n    begin\n        if A[i, j]&gt;max then max:=A[i, j];\n        if |C| then j:=j+1;\n        else begin\n            j:=0;\n            i:=|D|\n        end\n    end\nend\n</pre></div><br><br><b>GATE CSE 1993 | Question: 12</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2309/gate-cse-1993-question-12\" target=\"_blank\">https://gateoverflow.in/2309/gate-cse-1993-question-12</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2452\"></a><div itemprop=\"text\"><p>In a compact single dimensional array representation for lower triangular matrices (i.e all the elements above the diagonal are zero) of size \\( n \\times n \\), non-zero elements, (i.e elements of lower triangle) of each row are stored one after another, starting from the first row, the index of the \\( (i, j)^{th} \\) element of the lower triangular matrix in this new representation is:</p>\n\n</div><br><br><b>GATE CSE 1994 | Question: 1.11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( i+j \\)</p>",
            "<p>\\( i+j-1 \\)</p>",
            "<p>\\( (j-1)+\\frac{i(i-1)}{2} \\)</p>",
            "<p>\\( i+\\frac{j(j-1)}{2} \\)</p>"
          ],
          "correct_answer": "<p>\\( (j-1)+\\frac{i(i-1)}{2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2452/gate-cse-1994-question-1-11\" target=\"_blank\">https://gateoverflow.in/2452/gate-cse-1994-question-1-11</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2521\"></a><div itemprop=\"text\">An array \\( A \\) contains \\( n \\) integers in non-decreasing order, \\( A[1] \\leq A[2] \\leq \\cdots \\leq A[n] \\). Describe, using Pascal like pseudo code, a linear time algorithm to find \\( i, j, \\) such that \\( A[i]+A[j]=a \\) given integer \\( M \\), if such \\( i, j \\) exist.</div><br><br><b>GATE CSE 1994 | Question: 25</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2521/gate-cse-1994-question-25\" target=\"_blank\">https://gateoverflow.in/2521/gate-cse-1994-question-25</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"2277\"></a><div itemprop=\"text\"><p>An array \\( A \\) contains \\( n \\geq 1 \\) positive integers in the locations \\( A[1], A[2], \\dots A[n] \\). The following program fragment prints the length of a shortest sequence of consecutive elements of \\( A \\), \\( A[i], A[i+1], \\dots,A[j] \\) such that the sum of their values is \\( \\geq M \\), a given positive number. It prints ‘\\( n+1 \\)’ if no such sequence exists. Complete the program by filling in the boxes. In each case use the simplest possible expression. Write only the line number and the contents of the box.&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">begin\ni:=1;j:=1;\nsum := ◻\nmin:=n; finish:=false;\nwhile not finish do\n    if ◻ then\n        if j=n then finish:=true\n        else\n        begin\n            j:=j+1;\n            sum:= ◻\n        end\n    else\n    begin\n        if(j-i) &lt; min then min:=j-i;\n        sum:=sum –A[i];\n        i:=i+1;\n    end\n    writeln (min +1);\nend.\n</pre></div><br><br><b>GATE CSE 1997 | Question: 17</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2277/gate-cse-1997-question-17\" target=\"_blank\">https://gateoverflow.in/2277/gate-cse-1997-question-17</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1686\"></a><div itemprop=\"text\"><p>Let \\( A \\) be a two dimensional array declared as follows:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">A: array [1 …. 10] [1 ….. 15] of integer;</pre>\n\n<p>Assuming that each integer takes one memory location, the array is stored in row-major order and the first element of the array is stored at location \\( 100 \\), what is the address of the element \\( A[i][j] \\)?</p>\n\n\n\n</div><br><br><b>GATE CSE 1998 | Question: 2.14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 15i+j+84 \\)</p>",
            "<p>\\( 15j+i+84 \\)</p>",
            "<p>\\( 10i+j+89 \\)</p>",
            "<p>\\( 10j+i+89 \\)</p>"
          ],
          "correct_answer": "<p>\\( 15i+j+84 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1686/gate-cse-1998-question-2-14\" target=\"_blank\">https://gateoverflow.in/1686/gate-cse-1998-question-2-14</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"625\"></a><div itemprop=\"text\"><p>An \\( n \\times n \\) array \\( v \\) is defined as follows:</p>\n\n<p>\\( v\\left[i,j\\right] = i - j \\) for all \\( i, j, i \\leq n, 1 \\leq j \\leq n \\)</p>\n\n<p>The sum of the elements of the array \\( v \\) is</p>\n\n\n\n</div><br><br><b>GATE CSE 2000 | Question: 1.2</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0 \\)</p>",
            "<p>\\( n-1 \\)</p>",
            "<p>\\( n^2 - 3n +2 \\)</p>",
            "<p>\\( n^2 \\frac{\\left(n+1\\right)}{2} \\)</p>"
          ],
          "correct_answer": "<p>\\( 0 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/625/gate-cse-2000-question-1-2\" target=\"_blank\">https://gateoverflow.in/625/gate-cse-2000-question-1-2</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"686\"></a><div itemprop=\"text\"><p>Suppose you are given arrays \\( p [1......N] \\)&nbsp; and \\( q [1......N] \\) both uninitialized, that is,&nbsp;each location may contain an arbitrary value), and a variable count,&nbsp;initialized to \\( 0 \\). Consider the following procedures \\( set \\) and \\( is\\_set \\):</p>\n\n<pre class=\"prettyprint lang-c_cpp\">set(i) { \n    count = count + 1; \n    q[count] = i; \n    p[i] = count; \n} \nis_set(i) {\n    if (p[i] ≤ 0 or p[i] &gt; count)\n        return false; \n    if (q[p[i]] ≠ i)\n        return false;\n    return true;\n}\n</pre>\n\n</div><br><br><b>GATE CSE 2000 | Question: 15</b></p>",
          "type": "numeric",
          "options": [
            "<p>Suppose we make the following sequence of calls:&nbsp;<br>\n\t\\( set(7) \\); \\( set(3) \\); \\( set(9) \\);&nbsp;<br>\n\tAfter these&nbsp;sequence&nbsp;of calls, what is the&nbsp;value of count, and what do \\( q[1],&nbsp;q[2] ,q[3], p[7], p[3] \\) and \\( p[9] \\) contain?</p>",
            "<p>Complete the following statement \"The first count elements of __________contain values i such that set (_________________) has been called\".</p>",
            "<p>Show that if \\( set(i) \\) has not been called for some \\( i \\), then regardless of what \\( p[i] \\) contains, \\( is\\_set(i) \\) will return false.</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/686/gate-cse-2000-question-15\" target=\"_blank\">https://gateoverflow.in/686/gate-cse-2000-question-15</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1347\"></a><div itemprop=\"text\"><p>A program \\( P \\) reads in \\( 500 \\) integers in the range \\( [0, 100] \\) representing the scores of \\( 500 \\) students. It then&nbsp;prints the frequency of each score above \\( 50 \\). What would be the best way for \\( P \\) to store the frequencies?</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>An array of \\( 50 \\) numbers</p>",
            "<p>An array of \\( 100 \\) numbers</p>",
            "<p>An array of \\( 500 \\) numbers</p>",
            "<p>A dynamically allocated array of \\( 550 \\) numbers</p>"
          ],
          "correct_answer": "<p>An array of \\( 50 \\) numbers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1347/gate-cse-2005-question-5\" target=\"_blank\">https://gateoverflow.in/1347/gate-cse-2005-question-5</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"1557\"></a><div itemprop=\"text\"><p>The procedure given below is required to find and replace certain characters inside an input character string supplied in array \\( A \\). The characters to be replaced are supplied in array \\( oldc \\), while their respective replacement characters are supplied in array \\( newc \\). Array \\( A \\) has a fixed length of five characters, while arrays \\( oldc \\) and \\( newc \\) contain three characters each. However, the procedure is flawed.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">void find_and_replace (char *A, char *oldc, char *newc) {\n    for (int i=0; i&lt;5; i++)\n        for (int j=0; j&lt;3; j++)\n            if (A[i] == oldc[j])\n                A[i] = newc[j];\n} </pre>\n\n<p>The procedure is tested with the following four test cases.</p>\n\n<ol>\n\t<li>\\( oldc = “abc”, newc = “dab” \\)&nbsp; &nbsp;</li>\n\t<li>\\( oldc = “cde”, newc = “bcd” \\)</li>\n\t<li>\\( oldc = “bca”, newc = “cda” \\)&nbsp; &nbsp;&nbsp;</li>\n\t<li>\\( oldc = “abc”, newc = “bac” \\)</li>\n</ol>\n\n<p>The tester now tests the program on all input strings of length five consisting of characters ‘\\( a \\)’, ‘\\( b \\)’, ‘\\( c \\)’, ‘\\( d \\)’&nbsp;and ‘\\( e \\)’&nbsp;with duplicates allowed. If the tester carries out this testing with the four test cases given above, how many test cases will be able to capture the flaw?</p>\n\n</div><br><br><b>GATE CSE 2013 | Question: 50</b></p>",
          "type": "single",
          "options": [
            "<p>Only one</p>",
            "<p>Only two</p>",
            "<p>Only three</p>",
            "<p>All four</p>"
          ],
          "correct_answer": "<p>Only two</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1557/gate-cse-2013-question-50\" target=\"_blank\">https://gateoverflow.in/1557/gate-cse-2013-question-50</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"43291\"></a><div itemprop=\"text\"><p>The procedure given below is required to find and replace certain characters inside an input character string supplied in array&nbsp;\\( A \\). The characters to be replaced are supplied in array \\( oldc \\), while their respective replacement characters are supplied in array \\( newc \\). Array \\( A \\) has a fixed length of five characters, while arrays \\( oldc \\) and \\( newc \\) contain three characters each. However, the procedure is flawed.</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void find_and_replace (char *A, char *oldc, char *newc) {\n    for (int i=0; i&lt;5; i++)\n        for (int j=0; j&lt;3; j++)\n            if (A[i] == oldc[j])\n                A[i] = newc[j];\n}</pre>\n\n<p><br>\nThe procedure is tested with the following four test cases.</p>\n\n<ol>\n\t<li>\\( oldc = “abc”, newc = “dab” \\)&nbsp; &nbsp; &nbsp;</li>\n\t<li>\\( oldc = “cde”, newc = “bcd” \\)</li>\n\t<li>\\( oldc = “bca”, newc = “cda” \\)&nbsp; &nbsp; &nbsp;</li>\n\t<li>\\( oldc = “abc”, newc = “bac” \\)</li>\n</ol>\n\n<p>If array \\( A \\) is made to hold the string “\\( abcde \\)”, which of the above four test cases will be successful in exposing the flaw in this procedure?</p>\n\n</div><br><br><b>GATE CSE 2013 | Question: 51</b></p>",
          "type": "single",
          "options": [
            "<p>None</p>",
            "<p>\\( 2 \\) only</p>",
            "<p>\\( 3 \\) and \\( 4 \\) only</p>",
            "<p>\\( 4 \\) only</p>"
          ],
          "correct_answer": "<p>\\( 3 \\) and \\( 4 \\) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43291/gate-cse-2013-question-51\" target=\"_blank\">https://gateoverflow.in/43291/gate-cse-2013-question-51</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"2076\"></a><div itemprop=\"text\"><p>Consider the C function given below. Assume that the array \\( listA \\) contains \\( n (&gt;0) \\) elements, sorted in ascending order.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int ProcessArray(int *listA, int x, int n)   \n{     \n&nbsp;       int i, j, k;     \n&nbsp;       i = 0;     j = n-1;     \n&nbsp;        do { \n&nbsp;              k = (i+j)/2;         \n&nbsp;              if (x &lt;= listA[k]) j = k-1;         \n&nbsp;              if (listA[k] &lt;= x) i = k+1; \n&nbsp;            }\n&nbsp;       while (i &lt;= j);     \n&nbsp;       if (listA[k] == x) return(k);     \n&nbsp;       else   return -1;   \n}     </pre>\n\n<p>Which one of the following statements about the function \\( ProcessArray \\) is&nbsp;<strong>CORRECT</strong>?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 3 | Question: 42</b></p>",
          "type": "single",
          "options": [
            "<p>It will run into an infinite loop when \\( x \\) is not in \\( listA \\).</p>",
            "<p>It is an implementation of binary search.</p>",
            "<p>It will always find the maximum element in \\( listA \\).</p>",
            "<p>It will return −\\( 1 \\) even when \\( x \\) is present in \\( listA \\).</p>"
          ],
          "correct_answer": "<p>It is an implementation of binary search.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2076/gate-cse-2014-set-3-question-42\" target=\"_blank\">https://gateoverflow.in/2076/gate-cse-2014-set-3-question-42</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"8148\"></a><div itemprop=\"text\">A Young tableau is a \\( 2D \\) array of integers increasing from left to right and from top to bottom. Any unfilled entries are marked with \\( \\infty \\), and hence there cannot be any entry to the right of, or below a \\( \\infty \\). The following Young tableau consists of unique entries.<br>\n\\[ \\begin{array}{|l|l|l|l|}\\hline \\textbf{1} &nbsp;&amp; &nbsp;\\text{2}&amp; &nbsp;\\text{5} &amp; &nbsp;\\text{14} &nbsp;\\\\\\hline &nbsp;\\text{3} &amp; \\text{4} &amp; &nbsp;\\text{6} &amp; &nbsp;\\text{23} &nbsp;\\\\\\hline &nbsp;\\text{10} &amp; \\text{12} &amp; &nbsp;\\text{18} &amp; &nbsp;\\text{25} &nbsp;\\\\\\hline &nbsp;\\text{31} &amp; \\text{\\( \\infty \\)} &amp; &nbsp;\\text{\\( \\infty \\)} &amp; &nbsp;\\text{\\( \\infty \\)} &nbsp;\\\\\\hline \\end{array} \\]<br>\nWhen an element is removed from a Young tableau, other elements should be moved into its place so that the resulting table is still a Young tableau (unfilled entries may be filled with a \\( \\infty \\)). The minimum number of entries (other than \\( 1 \\)) to be shifted, to remove \\( 1 \\) from the given Young tableau is _____.</div><br><br><b>GATE CSE 2015 Set 2 | Question: 31</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8148/gate-cse-2015-set-2-question-31\" target=\"_blank\">https://gateoverflow.in/8148/gate-cse-2015-set-2-question-31</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"357450\"></a><div itemprop=\"text\"><p>​​​​​Let \\( P \\) be an array containing \\( n \\) integers. Let \\( t \\) be the lowest upper bound on the number of comparisons of the array elements, required to find the minimum and maximum values in an arbitrary array of \\( n \\) elements. Which one of the&nbsp;following choices is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>\\( t&gt;2n-2 \\)</p>",
            "<p>\\( t&gt;3\\lceil \\frac{n}{2}\\rceil \\text{ and } t\\leq 2n-2 \\)</p>",
            "<p>\\( t&gt;n \\text{ and } t\\leq 3\\lceil \\frac{n}{2}\\rceil \\)</p>",
            "<p>\\( t&gt;\\lceil \\log_2(n)\\rceil \\text{ and } t\\leq n \\)</p>"
          ],
          "correct_answer": "<p>\\( t&gt;n \\text{ and } t\\leq 3\\lceil \\frac{n}{2}\\rceil \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357450/gate-cse-2021-set-1-question-2\" target=\"_blank\">https://gateoverflow.in/357450/gate-cse-2021-set-1-question-2</a></p>"
        }
      ]
    }
  ]
});
