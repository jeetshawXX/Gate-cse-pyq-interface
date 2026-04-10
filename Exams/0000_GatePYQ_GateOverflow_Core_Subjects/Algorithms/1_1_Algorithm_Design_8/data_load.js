window.__examLoadCallback({
  "title": "Algorithms - Algorithm Design",
  "duration": 22,
  "sections": [
    {
      "name": "Algorithm Design",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"587\"></a><div itemprop=\"text\">Let \\( T \\) be a Depth First Tree of a undirected graph \\( G \\). An array \\( P \\) indexed by the vertices of \\( G \\) is given. \\( P[V] \\) is the parent of vertex \\( V \\), in \\( T \\). Parent of the root is the root itself.<br>\n<br>\nGive a method for finding and printing the cycle formed if the edge \\( (u,v) \\) of \\( G \\) not in \\( T \\) (i.e., \\( e \\in G-T \\)) is now added to \\( T \\).<br>\n<br>\nTime taken by your method must be proportional to the length of the cycle.<br>\n<br>\nDescribe the algorithm in a PASCAL \\( (C) \\) – like language. Assume that the variables have been suitably declared.</div><br><br><b>GATE CSE 1992 | Question: 8</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/587/gate-cse-1992-question-8\" target=\"_blank\">https://gateoverflow.in/587/gate-cse-1992-question-8</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2503\"></a><div itemprop=\"text\"><p>An array \\( A \\) contains \\( n \\) integers in locations \\( A[0], A[1], \\dots A[n-1] \\). It is required to shift the elements of the array cyclically to the left by \\( K \\) places, where \\( 1\\leq K \\leq n-1 \\). An incomplete algorithm for doing this in linear time, without using another array is given below. Complete the algorithm by filling in the blanks. Assume all variables are suitably declared.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">min:=n;\ni=0;\nwhile _____ do\nbegin\n    temp:=A[i];\n    j:=i;\n    while ____ do\n    begin\n        A[j]:=____;\n        j:=(j+K) mod n;\n       if j&lt;min then\n        min:=j;\n    end;\n    A[(n+i-K)mod n]:=____;\n    i:=______;\nend;\n</pre></div><br><br><b>GATE CSE 1994 | Question: 7</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2503/gate-cse-1994-question-7\" target=\"_blank\">https://gateoverflow.in/2503/gate-cse-1994-question-7</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"978\"></a><div itemprop=\"text\"><p>An element in an array \\( X \\) is called a leader if it is greater than all elements to the&nbsp;right of it in \\( X \\). The best algorithm to find all leaders in an array&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 17</b></p>",
          "type": "single",
          "options": [
            "<p>solves it in linear time using a left to right pass of the array</p>",
            "<p>solves it in linear time using a right to left pass of the array</p>",
            "<p>solves it using divide and conquer in time \\( \\Theta (n\\log n) \\)</p>",
            "<p>solves it in time \\( \\Theta( n^2) \\)</p>"
          ],
          "correct_answer": "<p>solves it in linear time using a right to left pass of the array</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/978/gate-cse-2006-question-17\" target=\"_blank\">https://gateoverflow.in/978/gate-cse-2006-question-17</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1832\"></a><div itemprop=\"text\"><p>Given two arrays of numbers \\( a_{1},...,a_{n} \\) and \\( b_{1},...,b_{n} \\) where each number is \\( 0 \\) or \\( 1 \\), the fastest algorithm to find the largest span \\( (i, j) \\) such that \\(  a_{i}+a_{i+1}+\\dots+a_{j}=b_{i}+b_{i+1}+\\dots+b_{j} \\) or report that there is not such span,</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 54</b></p>",
          "type": "single",
          "options": [
            "<p>Takes&nbsp;\\(  O(3^{n}) \\) and \\( \\Omega(2^{n}) \\) time if hashing is permitted</p>",
            "<p>Takes \\(  O(n^{3}) \\) and \\( \\Omega(n^{2.5}) \\) time in the key comparison mode</p>",
            "<p>Takes \\( \\Theta (n) \\) time and space</p>",
            "<p>Takes \\( O(\\sqrt n) \\) time only if the sum of the \\( 2n \\) elements is an even number</p>"
          ],
          "correct_answer": "<p>Takes \\( \\Theta (n) \\) time and space</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1832/gate-cse-2006-question-54\" target=\"_blank\">https://gateoverflow.in/1832/gate-cse-2006-question-54</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1915\"></a><div itemprop=\"text\">There are \\( 5 \\) bags labeled \\( 1 \\) to \\( 5 \\). All the coins in a given bag have the same weight. Some bags have coins of weight \\( 10 \\) gm, others have coins of weight \\( 11 \\) gm. I pick \\( 1, 2, 4, 8, 16 \\) coins respectively from bags \\( 1 \\) to \\( 5 \\) Their total weight comes out to \\( 323 \\) gm. Then the product of the labels of the bags having \\( 11 \\) gm coins is ___.</div><br><br><b>GATE CSE 2014 Set 1 | Question: 37</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "12",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1915/gate-cse-2014-set-1-question-37\" target=\"_blank\">https://gateoverflow.in/1915/gate-cse-2014-set-1-question-37</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"302823\"></a><div itemprop=\"text\">Consider a sequence of \\( 14 \\) elements: \\( A=[-5, -10, 6, 3, -1, -2, 13, 4, -9, -1, 4, 12, -3, 0] \\). The sequence sum \\( S(i,j) = \\Sigma_{k=i}^j A[k] \\). Determine the maximum of \\( S(i,j) \\), where \\( 0 \\leq i \\leq j &lt;14 \\). (Divide and conquer approach may be used.)<br>\n<br>\nAnswer: ___________</div><br><br><b>GATE CSE 2019 | Question: 25</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "29",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302823/gate-cse-2019-question-25\" target=\"_blank\">https://gateoverflow.in/302823/gate-cse-2019-question-25</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"357411\"></a><div itemprop=\"text\"><p>Define \\( R_n \\) to be the maximum amount earned by cutting a rod of length \\( n \\) meters into one or more pieces of integer length and selling them. For \\( i&gt;0 \\), let \\( p[i] \\) denote the selling price of a rod whose length is \\( i \\) meters. Consider the array of prices:</p>\n\n<p>\\[ \\text{p}[1]=1,\\text{p}[2]=5,\\text{p}[3]=8,\\text{p}[4]=9,\\text{p}[5]=10,\\text{p}[6]=17,\\text{p}[7]=18 \\]Which of the following statements is/are correct about \\( R_7 \\)?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 40</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( R_7=18 \\)</p>",
            "<p>\\( R_7=19 \\)</p>",
            "<p>\\( R_7 \\) is achieved by three different solutions</p>",
            "<p>\\( R_7 \\) cannot be achieved by a solution consisting of three pieces</p>"
          ],
          "correct_answer": [
            "<p>\\( R_7=18 \\)</p>",
            "<p>\\( R_7 \\) is achieved by three different solutions</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357411/gate-cse-2021-set-1-question-40\" target=\"_blank\">https://gateoverflow.in/357411/gate-cse-2021-set-1-question-40</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"422865\"></a><div itemprop=\"text\"><p>​​​​Consider an array \\( \\mathrm{X} \\) that contains \\( \\mathrm{n} \\) positive integers. A subarray of \\( \\mathrm{X} \\) is defined to be a sequence of array locations with consecutive indices.<br><br>The \\( \\mathrm{C} \\) code snippet given below has been written to compute the length of the longest subarray of \\( \\mathrm{X} \\) that contains at most two distinct integers. The code has two missing expressions labelled \\( \\text{(P)} \\) and \\( \\text{(Q)} \\).</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">int first=0, second=0, len1=0, len2=0, maxlen=0;\nfor (int i=0; i &lt; n; i++) {\n    if (X[i] == first) {\n        len2++; len1++;\n    } else if (X[i] == second) {\n        len2++;\n        len1 = <span style=\"display: inline-block; width: 100px; border-bottom: 1px solid black; text-align: center;\">(P)</span>; \n\n        second = first;\n    } else {\n        len2 = <span style=\"display: inline-block; width: 100px; border-bottom: 1px solid black; text-align: center;\">(Q)</span>;\n        \n        len1 = 1; second = first;\n    }\n    if (len2 &gt; maxlen) {\n        maxlen = len2;\n    }\n    first = X[i];\n}</pre><p>Which one of the following options gives the CORRECT missing expressions?</p><p>(<strong>Hint:</strong> At the end of the \\( i \\)-th iteration, the value of \\( len 1 \\) is the length of the longest subarray ending with \\( \\mathrm{X}[i] \\) that contains all equal values, and \\( len 2 \\) is the length of the longest subarray ending with \\( \\mathrm{X}[i] \\) that contains at most two distinct values.)</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{(P) }&nbsp; \\text{len} 1+1 \\)&nbsp; &nbsp; &nbsp; &nbsp;\\( \\text{(Q) } \\text{len} 2+1 \\)</p>",
            "<p>\\( \\text {(P) } 1 \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\( \\text{(Q) } \\text{len} 1+1 \\)</p>",
            "<p>\\( \\text{(P) } 1 \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\( \\text{(Q) } &nbsp;\\text{len} 2+1 \\)</p>",
            "<p>\\( \\text{(P) } \\text{len} 2+1 \\)&nbsp; &nbsp; &nbsp; &nbsp;\\( \\text{(Q) } \\text{len} 1+1 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text {(P) } 1 \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\( \\text{(Q) } \\text{len} 1+1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422865/gate-cse-2024-set-2-question-32\" target=\"_blank\">https://gateoverflow.in/422865/gate-cse-2024-set-2-question-32</a></p>"
        }
      ]
    }
  ]
});
