window.__examLoadCallback({
  "title": "Algorithms - Asymptotic Notations",
  "duration": 39,
  "sections": [
    {
      "name": "Asymptotic Notations",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2466\"></a><div itemprop=\"text\"><p>Consider the following two functions:</p>\n\n<p>\\( g_1(n) = \\begin{cases} n^3 \\text{ for } 0 \\leq n \\leq 10,000 \\\\ n^2 \\text{ for } n &gt;&nbsp;10,000 \\end{cases} \\)</p>\n\n<p>\\( g_2(n) = \\begin{cases} n \\text{ for } 0 \\leq n \\leq 100 \\\\ n^3 \\text{ for } n &gt; 100 \\end{cases} \\)</p>\n\n<p>Which of the following is true?</p>\n\n</div><br><br><b>GATE CSE 1994 | Question: 1.23</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( g_1(n) \\text{ is } O(g_2(n)) \\)</p>",
            "<p>\\( g_1(n) \\text{ is } O(n^3) \\)</p>",
            "<p>\\( g_2(n) \\text{ is } O(g_1(n)) \\)</p>",
            "<p>\\( g_2(n) \\text{ is } O(n) \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( g_1(n) \\text{ is } O(g_2(n)) \\)</p>",
            "<p>\\( g_1(n) \\text{ is } O(n^3) \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2466/gate-cse-1994-question-1-23\" target=\"_blank\">https://gateoverflow.in/2466/gate-cse-1994-question-1-23</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2715\"></a><div itemprop=\"text\"><p>Which of the following is false?</p>\n\n</div><br><br><b>GATE CSE 1996 | Question: 1.11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 100n \\log n=O(\\frac{n\\log n}{100}) \\)</p>",
            "<p>\\( \\sqrt{\\log n} = O(\\log\\log n) \\)</p>",
            "<p>If \\( 0 &lt; x &lt; y \\text{ then } n^x = O\\left(n^y\\right) \\)</p>",
            "<p>\\( 2^n \\neq O\\left(nk\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\sqrt{\\log n} = O(\\log\\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2715/gate-cse-1996-question-1-11\" target=\"_blank\">https://gateoverflow.in/2715/gate-cse-1996-question-1-11</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"664\"></a><div itemprop=\"text\"><p>Consider the following functions</p>\n\n<ul>\n\t<li>\\( f(n) = 3n^{\\sqrt{n}} \\)</li>\n\t<li>\\( g(n) = 2^{\\sqrt{n}{\\log_{2}n}} \\)</li>\n\t<li>\\( h(n) = n! \\)</li>\n</ul>\n\n<p>Which of the following is true?</p>\n\n\n\n\n\n</div><br><br><b>GATE CSE 2000 | Question: 2.17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( h(n) \\) is \\( O(f(n)) \\)</p>",
            "<p>\\( h(n) \\) is \\( O(g(n)) \\)</p>",
            "<p>\\( g(n) \\) is not \\( O(f(n)) \\)</p>",
            "<p>\\( f(n) \\) is \\( O(g(n)) \\)</p>"
          ],
          "correct_answer": "<p>\\( f(n) \\) is \\( O(g(n)) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/664/gate-cse-2000-question-2-17\" target=\"_blank\">https://gateoverflow.in/664/gate-cse-2000-question-2-17</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"709\"></a><div itemprop=\"text\"><p>Let \\( f(n) = n^2 \\log n \\) and \\( g(n) = n(\\log n)^{10} \\) be two positive functions of \\( n \\). Which of the following statements is correct?</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 1.16</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f(n) = O(g(n)) \\text{ and } g(n) \\neq O(f(n)) \\)</p>",
            "<p>\\( g(n) = O(f(n)) \\text{ and } f(n) \\neq O(g(n)) \\)</p>",
            "<p>\\( f(n) \\neq O(g(n)) \\text{ and } g(n) \\neq O(f(n)) \\)</p>",
            "<p>\\( f(n) =O(g(n)) \\text{ and } g(n) = O(f(n)) \\)</p>"
          ],
          "correct_answer": "<p>\\( g(n) = O(f(n)) \\text{ and } f(n) \\neq O(g(n)) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/709/gate-cse-2001-question-1-16\" target=\"_blank\">https://gateoverflow.in/709/gate-cse-2001-question-1-16</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"910\"></a><div itemprop=\"text\"><p>Consider the following three claims:</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\\( (n+k)^m = \\Theta(n^m) \\) where \\( k \\) and \\( m \\) are constants</li>\n\t<li>\\( 2^{n+1} = O(2^n) \\)</li>\n\t<li>\\( 2^{2n+1} = O(2^n) \\)</li>\n</ol>\n\n<p>Which of the following claims are correct?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 20</b></p>",
          "type": "single",
          "options": [
            "<p>I and II</p>",
            "<p>I and III</p>",
            "<p>II and III</p>",
            "<p>I, II, and III</p>"
          ],
          "correct_answer": "<p>I and II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/910/gate-cse-2003-question-20\" target=\"_blank\">https://gateoverflow.in/910/gate-cse-2003-question-20</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1026\"></a><div itemprop=\"text\"><p>The tightest lower bound on the number of comparisons, in the worst case, for comparison-based sorting is of the order of</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p>\\( n \\)</p>",
            "<p>\\( n^2 \\)</p>",
            "<p>\\( n \\log n \\)</p>",
            "<p>\\( n \\log^2n \\)</p>"
          ],
          "correct_answer": "<p>\\( n \\log n \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1026/gate-cse-2004-question-29\" target=\"_blank\">https://gateoverflow.in/1026/gate-cse-2004-question-29</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1373\"></a><div itemprop=\"text\"><p>Suppose \\( T(n) =2T (\\frac{n}{2}) + n \\), \\( T(0) = T(1) =1 \\)</p>\n\n<p>Which one of the following is FALSE?</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 37</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n)=O(n^2) \\)</p>",
            "<p>\\( T(n)=\\Theta(n \\log n) \\)</p>",
            "<p>\\( T(n)=\\Omega(n^2) \\)</p>",
            "<p>\\( T(n)=O(n \\log n) \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n)=\\Omega(n^2) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1373/gate-cse-2005-question-37\" target=\"_blank\">https://gateoverflow.in/1373/gate-cse-2005-question-37</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"450\"></a><div itemprop=\"text\"><p>Consider the following functions:</p>\n\n<ul>\n\t<li>\\( f(n) = 2^n \\)</li>\n\t<li>\\( g(n) = n! \\)</li>\n\t<li>\\( h(n) = n^{\\log n} \\)</li>\n</ul>\n\n<p>Which of the following statements about the asymptotic behavior of \\( f(n) \\), \\( g(n) \\) and \\( h(n) \\) is true?</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f\\left(n\\right)=O\\left(g\\left(n\\right)\\right); g\\left(n\\right)=O\\left(h\\left(n\\right)\\right) \\)</p>",
            "<p>\\( f\\left(n\\right) = \\Omega\\left(g\\left(n\\right)\\right); g(n) = O\\left(h\\left(n\\right)\\right) \\)</p>",
            "<p>\\( g\\left(n\\right) = O\\left(f\\left(n\\right)\\right); h\\left(n\\right)=O\\left(f\\left(n\\right)\\right) \\)</p>",
            "<p>\\( h\\left(n\\right)=O\\left(f\\left(n\\right)\\right); g\\left(n\\right) = \\Omega\\left(f\\left(n\\right)\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( h\\left(n\\right)=O\\left(f\\left(n\\right)\\right); g\\left(n\\right) = \\Omega\\left(f\\left(n\\right)\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/450/gate-cse-2008-question-39\" target=\"_blank\">https://gateoverflow.in/450/gate-cse-2008-question-39</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"2139\"></a><div itemprop=\"text\"><p>Which of the given options provides the increasing order of asymptotic complexity of functions \\( f_1, f_2, f_3 \\) and \\( f_4 \\)?</p>\n\n<ul>\n\t<li>\\( f_1(n) = 2^n \\)</li>\n\t<li>\\( f_2(n) = n^{3/2} \\)</li>\n\t<li>\\( f_3(n) = n \\log_2 n \\)</li>\n\t<li>\\( f_4(n) = n^{\\log_2 n} \\)</li>\n</ul>\n\n</div><br><br><b>GATE CSE 2011 | Question: 37</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f_3, &nbsp;f_2, f_4, f_1 \\)&nbsp;</p>",
            "<p>\\( f_3, f_2, f_1, f_4 \\)</p>",
            "<p>\\( f_2, f_3, f_1, f_4 \\)</p>",
            "<p>\\( f_2, f_3, f_4, f_1 \\)</p>"
          ],
          "correct_answer": "<p>\\( f_3, &nbsp;f_2, f_4, f_1 \\)&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2139/gate-cse-2011-question-37\" target=\"_blank\">https://gateoverflow.in/2139/gate-cse-2011-question-37</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"50\"></a><div itemprop=\"text\"><p>Let \\( W(n)  \\) and \\( A(n) \\) denote respectively, the worst case and average case running time of an algorithm executed on an input of size \\( n \\). &nbsp;Which of the following is <strong>ALWAYS TRUE</strong>?</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 18</b></p>",
          "type": "single",
          "options": [
            "<p>\\( A(n) = \\Omega (W(n)) \\)</p>",
            "<p>\\( A(n) = \\Theta (W(n)) \\)</p>",
            "<p>\\( A(n) = \\text{O} (W(n)) \\)</p>",
            "<p>\\( A(n) = \\text{o} (W(n)) \\)</p>"
          ],
          "correct_answer": "<p>\\( A(n) = \\text{O} (W(n)) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/50/gate-cse-2012-question-18\" target=\"_blank\">https://gateoverflow.in/50/gate-cse-2012-question-18</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"8398\"></a><div itemprop=\"text\"><p>Consider the equality \\( \\displaystyle{\\sum_{i=0}^n} i^3 = X \\) and the following choices for \\( X \\):</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\\( \\Theta(n^4) \\)</li>\n\t<li>\\( \\Theta(n^5) \\)</li>\n\t<li>\\( O(n^5) \\)</li>\n\t<li>\\( \\Omega(n^3) \\)</li>\n</ol>\n\n<p>The equality above remains correct if \\( X \\) is replaced by</p>\n\n</div><br><br><b>GATE CSE 2015 Set 3 | Question: 4</b></p>",
          "type": "single",
          "options": [
            "<p>Only I</p>",
            "<p>Only II</p>",
            "<p>I or III or IV but not II</p>",
            "<p>II or III or IV but not I</p>"
          ],
          "correct_answer": "<p>I or III or IV but not II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8398/gate-cse-2015-set-3-question-4\" target=\"_blank\">https://gateoverflow.in/8398/gate-cse-2015-set-3-question-4</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"8501\"></a><div itemprop=\"text\"><p>Let \\( f(n) = n \\) and \\( g(n) = n^{(1 + \\sin \\: n)} \\), where \\( n \\) is a positive integer. Which of the following statements is/are correct?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\\( f(n) = O(g(n)) \\)</li>\n\t<li>\\( f(n) = \\Omega(g(n)) \\)</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2015 Set 3 | Question: 42</b></p>",
          "type": "single",
          "options": [
            "<p>Only I</p>",
            "<p>Only II</p>",
            "<p>Both I and II</p>",
            "<p>Neither I nor II</p>"
          ],
          "correct_answer": "<p>Neither I nor II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8501/gate-cse-2015-set-3-question-42\" target=\"_blank\">https://gateoverflow.in/8501/gate-cse-2015-set-3-question-42</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"3698\"></a><div itemprop=\"text\"><p>Let \\( f(n) \\), \\( g(n) \\) and \\( h(n) \\) be functions defined for positive integers such that&nbsp;<br>\n\\( f(n) = O(g(n)) \\), \\( g(n)&nbsp;\\neq&nbsp;O(f(n)) \\), \\( g(n) = O(h(n)) \\), and \\( h(n) = O(g(n)) \\).</p>\n\n<p>Which one of the following statements is FALSE?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 55</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f(n) + g(n) = O(h(n)&nbsp;+ h(n)) \\)</p>",
            "<p>\\( f(n) = O(h(n)) \\)</p>",
            "<p>\\( h(n) \\neq&nbsp;O(f(n)) \\)</p>",
            "<p>\\( f(n)h(n) \\neq&nbsp;O(g(n)h(n)) \\)</p>"
          ],
          "correct_answer": "<p>\\( f(n)h(n) \\neq&nbsp;O(g(n)h(n)) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3698/gate-it-2004-question-55\" target=\"_blank\">https://gateoverflow.in/3698/gate-it-2004-question-55</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"3270\"></a><div itemprop=\"text\"><p>Arrange the following functions in increasing asymptotic order:</p>\n\n<ol class=\"no-shrink-inline-options\" start=\"1\" style=\"list-style-type:lower-alpha\">\n\t<li>\\( n^{1/3} \\)</li>\n\t<li>\\( e^n \\)</li>\n\t<li>\\( n^{7/4} \\)</li>\n\t<li>\\( n \\log^9n \\)</li>\n\t<li>\\( 1.0000001^n \\)</li>\n</ol>\n\n</div><br><br><b>GATE IT 2008 | Question: 10</b></p>",
          "type": "single",
          "options": [
            "<p>a, d, c, e, b</p>",
            "<p>d, a, c, e, b</p>",
            "<p>a, c, d, e, b</p>",
            "<p>a, c, d, b, e</p>"
          ],
          "correct_answer": "<p>a, d, c, e, b</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3270/gate-it-2008-question-10\" target=\"_blank\">https://gateoverflow.in/3270/gate-it-2008-question-10</a></p>"
        }
      ]
    }
  ]
});
