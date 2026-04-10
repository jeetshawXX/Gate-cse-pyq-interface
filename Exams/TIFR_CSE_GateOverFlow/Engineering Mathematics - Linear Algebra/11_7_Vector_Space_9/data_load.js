window.__examLoadCallback({
  "title": "Engineering Mathematics - Linear Algebra - Vector Space",
  "duration": 25,
  "sections": [
    {
      "name": "Vector Space",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"18503\"></a><div itemprop=\"text\"><p>The length of a vector \\( X&nbsp;= (x_{1},\\ldots,x_{n}) \\) is defined as<br>\n<br>\n\\[ \\left \\|&nbsp; X\\right \\| = \\sqrt{\\sum \\limits^{n}_{i=1}x^{2}_{i}} \\]<br>\n<br>\nGiven two vectors \\( X=(x_{1},\\ldots, x_{n}) \\) and \\( Y=(y_{1},\\ldots, y_{n}) \\), which of the following measures of discrepancy between \\( X \\) and \\( Y \\) is insensitive to the length of the vectors?</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2010 | Part A | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\left \\| X&nbsp;- Y&nbsp;\\right \\| \\)</p>",
            "<p>\\( \\left \\| X - Y&nbsp;\\right \\|/\\left \\| x \\right \\|\\left \\| y \\right \\| \\)</p>",
            "<p>\\( \\left \\| X&nbsp;\\right \\|-\\left \\| Y&nbsp;\\right \\| \\)</p>",
            "<p>\\( \\left \\| \\frac{X}{\\left \\| X \\right \\|}-\\frac{Y}{\\left \\| Y \\right \\|} \\right \\| \\)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( \\left \\| \\frac{X}{\\left \\| X \\right \\|}-\\frac{Y}{\\left \\| Y \\right \\|} \\right \\| \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/18503/tifr-cse-2010-part-a-question-11\" target=\"_blank\">https://gateoverflow.in/18503/tifr-cse-2010-part-a-question-11</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"96828\"></a><div itemprop=\"text\"><p>Consider the following set of \\( 3n \\) linear equations in \\( 3n \\) variables:<br>\n<br>\n\\( \\begin{matrix} x_1-x_2=0 &amp; x_4-x_5 =0 &amp; \\dots &amp; x_{3n-2}-x_{3n-1}=0 \\\\ x_2-x_3=0 &amp; x_5-x_6=0 &amp; &amp; x_{3n-1}-x_{3n}=0 \\\\ x_1-x_3=0 &amp; x_4-x_6 =0 &amp; &amp; x_{3n-2}=x_{3n}=0 \\end{matrix} \\)</p>\n\n<p>Let \\( S \\subseteq \\mathbb{R}^{3n} \\) be the set of solutions to this set of equations. Then,</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2016 | Part A | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S \\) is empty</p>",
            "<p>\\( S \\) is a subspace of \\( \\mathbb{R}^{3n} \\) of dimension 1</p>",
            "<p>\\( S \\) is a subspace of \\( \\mathbb{R}^{3n} \\) of dimension n</p>",
            "<p>\\( S \\) is a subspace of \\( \\mathbb{R}^{3n} \\) of dimension \\( n-1 \\)</p>",
            "<p>\\( S \\) has exactly \\( n \\) elements</p>"
          ],
          "correct_answer": "<p>\\( S \\) is a subspace of \\( \\mathbb{R}^{3n} \\) of dimension n</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/96828/tifr-cse-2016-part-a-question-3\" target=\"_blank\">https://gateoverflow.in/96828/tifr-cse-2016-part-a-question-3</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"97646\"></a><div itemprop=\"text\"><p>A subset \\( X \\) of \\( \\mathbb{R}^n \\) is convex if for all \\( x, y \\in X \\) and all \\( \\lambda \\in (0, 1) \\), we have \\( \\lambda x + (1- \\lambda)y \\in X \\). If&nbsp;\\( X \\) is a convex set, which of the following statements is necessarily TRUE?</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2016 | Part B | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>For every \\(  x \\in X \\) there exist \\( y, z \\in X -\\{x\\} \\) and \\( \\lambda \\in (0, 1) \\) so that \\( x= \\lambda y+ (1-\\lambda ) z  \\)</p>",
            "<p>If \\( x, y \\in X \\) and \\( \\lambda \\geq 0 \\), then \\( \\lambda x + (1-\\lambda)y &nbsp;\\in X \\)</p>",
            "<p>If \\( x_1, \\dots , x_n \\in X (n \\geq 1) \\), then \\( (x_1+ \\dots + x_n)/n \\in X \\)</p>",
            "<p>If \\( x \\in X \\), then \\( \\lambda x \\in X \\) for all scalars \\( \\lambda \\)</p>",
            "<p>If \\( x, y \\in X \\), then \\( x-y \\in X \\)</p>"
          ],
          "correct_answer": "<p>If \\( x_1, \\dots , x_n \\in X (n \\geq 1) \\), then \\( (x_1+ \\dots + x_n)/n \\in X \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/97646/tifr-cse-2016-part-b-question-6\" target=\"_blank\">https://gateoverflow.in/97646/tifr-cse-2016-part-b-question-6</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"94938\"></a><div itemprop=\"text\"><p>For vectors \\( x, \\: y \\) in \\( \\mathbb{R}^n \\), define the inner product \\( \\langle x, y \\rangle = \\Sigma^n_{i=1} x_iy_i \\), and the length of \\( x \\) to be \\( \\| x \\| = \\sqrt{\\langle x, x \\rangle} \\). Let \\( a, \\: b \\) be two vectors in \\( \\mathbb{R} ^n \\) so that \\( \\| b \\| =1 \\). Consider the following statements:</p>\n\n<ol start=\"1\" style=\"list-style-type: lower-roman;\">\n\t<li>\\( \\langle a, b \\rangle \\leq \\| b \\| \\)</li>\n\t<li>\\( \\langle a, b \\rangle \\leq \\| a \\| \\)</li>\n\t<li>\\( \\langle a, b \\rangle = \\| a \\| \\| b \\| \\)</li>\n\t<li>\\( \\langle a, b \\rangle \\geq \\| b \\| \\)</li>\n\t<li>\\( \\langle a, b \\rangle \\geq \\| a \\| \\)</li>\n</ol>\n\n<p><br>\nWhich of the above statements must be TRUE of \\( a, \\: b \\)? Choose from the following options.</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2017 | Part A | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>ii only</p>",
            "<p>i and ii</p>",
            "<p>iii only</p>",
            "<p>iv only</p>",
            "<p>iv and v</p>"
          ],
          "correct_answer": "<p>ii only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/94938/tifr-cse-2017-part-a-question-2\" target=\"_blank\">https://gateoverflow.in/94938/tifr-cse-2017-part-a-question-2</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"333103\"></a><div itemprop=\"text\"><p>Let \\( d\\geq 4 \\) and fix \\( w\\in \\mathbb{R}. \\) Let&nbsp;\\[ S = \\{a = (a_{0},a_{1},\\dots ,a_{d})\\in \\mathbb{R}^{d+1}\\mid f_{a}(w) = 0\\: \\text{and}\\: f’_{a}(w) = 0\\}, \\]&nbsp;where the polynomial function \\( f_{a}(x) \\) is defined as \\( f_{a}(x):=\\displaystyle{}\\sum_{i = 0}^{d}a_{i}x^{i} \\) and \\( f’_{a}(w) \\) denotes the derivative of \\( f_{a}(x) \\) with respect to \\( x, \\) evaluated at \\( w. \\) Then,</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2020 | Part A | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S \\) is finite or infinite depending on the value of \\( \\alpha \\)</p>",
            "<p>\\( S \\) is a \\( 2 \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1} \\)</p>",
            "<p>\\( S \\) is a \\( d \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1} \\)</p>",
            "<p>\\( S \\) is a \\( (d-1) \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1} \\)</p>",
            "<p>None of the other options</p>"
          ],
          "correct_answer": "<p>\\( S \\) is a \\( (d-1) \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333103/tifr-cse-2020-part-a-question-3\" target=\"_blank\">https://gateoverflow.in/333103/tifr-cse-2020-part-a-question-3</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"381994\"></a><div itemprop=\"text\"><p>Let \\( \\mathbb{R} \\) denote the set of real numbers. Let \\( d \\geq 4 \\) and \\( \\alpha \\in \\mathbb{R} \\). Let</p>\n\n<p>\\[  S=\\left\\{\\left(a_0, a_1, \\ldots, a_d\\right) \\in \\mathbb{R}^{d+1}: \\sum_{i=0}^d a_i \\alpha^i=0 \\text { and } \\sum_{i=0}^d i a_i \\alpha^{i-1}=0\\right\\} \\text {. }  \\]</p>\n\n<p>Then,</p>\n\n\n\n<p>\\[  x \\mapsto \\sum_{i=0}^d a_i x^i  \\]</p>\n\n<p>has a local optimum at \\( \\alpha \\)</p></div><br><br><b>Linear Algebra: TIFR CSE 2022 | Part B | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S \\) is finite or infinite depending on the value of \\( \\alpha \\)</p>",
            "<p>\\( S \\) is a \\( 2 \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1} \\)</p>",
            "<p>\\( S \\) is a \\( d \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1} \\)</p>",
            "<p>\\( S \\) is a \\( (d-1) \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1}  \\)</p>",
            "<p>For each \\( \\left(a_0, a_1, \\ldots, a_d\\right) \\in S \\), the function</p>"
          ],
          "correct_answer": "<p>\\( S \\) is a \\( (d-1) \\)-dimensional vector subspace of \\( \\mathbb{R}^{d+1}  \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/381994/tifr-cse-2022-part-b-question-15\" target=\"_blank\">https://gateoverflow.in/381994/tifr-cse-2022-part-b-question-15</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"400142\"></a><div itemprop=\"text\"><p>Let \\( A \\) be a symmetric \\( 3 \\times 3 \\) matrix with real entries. Let \\( u \\) and \\( v \\) be non-zero vectors with real entries such that \\( A u=2 u \\) and \\( A v=3 v \\). From the set of values \\( \\{0,1,-1\\} \\), which values can the inner product \\( u^{T} v \\) take?</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2023 | Part A | Question: 1</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0 \\) only</p>",
            "<p>\\( 1 \\) only</p>",
            "<p>\\( -1 \\) only</p>",
            "<p>All of the values \\( 0,1 \\) and \\( -1 \\)</p>",
            "<p>None of the values \\( 0,1 \\) and \\( -1 \\)</p>"
          ],
          "correct_answer": "<p>\\( 0 \\) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/400142/tifr-cse-2023-part-a-question-1\" target=\"_blank\">https://gateoverflow.in/400142/tifr-cse-2023-part-a-question-1</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"400140\"></a><div itemprop=\"text\"><p>\\( A \\) is an \\( n \\times n \\) matrix with real-valued entries. Further, there exists a vector \\( x \\neq 0 \\) such that \\( A x=0 \\). Now consider a given vector \\( b \\) in \\( \\mathbb{R}^{n} \\). How many possible vectors \\( z \\) exist, so that \\( A z=b? \\)&nbsp;</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2023 | Part A | Question: 3</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( 0 \\)</p>",
            "<p>\\( 1 \\)</p>",
            "<p>\\( n-1 \\)</p>",
            "<p>\\( n \\)</p>",
            "<p>Either \\( 0 \\) or infinite</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/400140/tifr-cse-2023-part-a-question-3\" target=\"_blank\">https://gateoverflow.in/400140/tifr-cse-2023-part-a-question-3</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"400153\"></a><div itemprop=\"text\"><p>Consider <em>unit</em> vectors \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) in \\( \\mathbb{R}^{n} \\). Let \\( \\mathbf{w} \\) be an arbitrary vector in \\( \\mathbb{R}^{n} \\) and \\( \\eta \\) be a positive real number such that<br>\n\\[<br>\n\\mathbf{a}^{\\mathbf{T}} \\mathbf{b} \\geq \\eta&gt;0 \\geq \\mathbf{w}^{\\mathbf{T}} \\mathbf{b}.<br>\n\\]<br>\nDefine \\( \\mathbf{z}=\\mathbf{w}+\\mathbf{b} \\). Consider the following statements.</p>\n\n<p>\\( \\text{(S1)} \\) \\( \\mathbf{z}^{\\mathbf{T}} \\mathbf{a} \\geq \\mathbf{a}^{\\mathbf{T}} \\mathbf{w}+\\eta \\)<br>\n\\( \\text{(S2)} \\)&nbsp;\\( \\|\\mathbf{z}\\|^{2} \\leq\\|\\mathbf{w}\\|^{2}+1 \\)<br>\n\\( \\text{(S3)} \\) \\( \\mathbf{z}^{\\mathbf{T}} \\mathbf{b} \\geq 0 \\)</p>\n\n<p>Choose the correct option from those below.</p>\n\n</div><br><br><b>Linear Algebra: TIFR CSE 2023 | Part B | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>Statements \\( \\text{(S1), (S2)}, \\) and \\( \\text{(S3)} \\) are all true.</p>",
            "<p>Statements \\( \\text{(S1)} \\)&nbsp;and \\( \\text{(S2)} \\)&nbsp;must be true, but statement \\( \\text{(S3)} \\)&nbsp;must be false.</p>",
            "<p>Statements \\( \\text{(S1)} \\)&nbsp;and \\( \\text{(S2)} \\) must be true, but statement \\( \\text{(S3)} \\) may be either true or false.</p>",
            "<p>Statements \\( \\text{(S1)} \\) and \\( \\text{(S3)} \\) must be true, but statement \\( \\text{(S2)} \\) may be false.</p>",
            "<p>Statement \\( \\text{(S1)} \\) may be false.</p>"
          ],
          "correct_answer": "<p>Statements \\( \\text{(S1)} \\)&nbsp;and \\( \\text{(S2)} \\) must be true, but statement \\( \\text{(S3)} \\) may be either true or false.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/400153/tifr-cse-2023-part-b-question-5\" target=\"_blank\">https://gateoverflow.in/400153/tifr-cse-2023-part-b-question-5</a></p>"
        }
      ]
    }
  ]
});
