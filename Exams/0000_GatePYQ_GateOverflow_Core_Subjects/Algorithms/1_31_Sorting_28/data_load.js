window.__examLoadCallback({
  "title": "Algorithms - Sorting",
  "duration": 78,
  "sections": [
    {
      "name": "Sorting",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"91338\"></a><div itemprop=\"text\">Quicksort is ________ efficient than heapsort in the worst case.</div><br><br><b>GATE CSE 1988 | Question: 1iii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/91338/gate-cse-1988-question-1iii\" target=\"_blank\">https://gateoverflow.in/91338/gate-cse-1988-question-1iii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"84830\"></a><div itemprop=\"text\"><p>The complexity of comparison based sorting algorithms is:</p>\n\n</div><br><br><b>GATE CSE 1990 | Question: 3-v</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta (n \\log n) \\)</p>",
            "<p>\\( \\Theta (n) \\)</p>",
            "<p>\\( \\Theta \\left(n^2\\right) \\)</p>",
            "<p>\\( \\Theta (n\\sqrt n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta (n \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/84830/gate-cse-1990-question-3-v\" target=\"_blank\">https://gateoverflow.in/84830/gate-cse-1990-question-3-v</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"505\"></a><div itemprop=\"text\">The minimum number of comparisons required to sort \\( 5 \\) elements is ______</div><br><br><b>GATE CSE 1991 | Question: 01,vii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/505/gate-cse-1991-question-01-vii\" target=\"_blank\">https://gateoverflow.in/505/gate-cse-1991-question-01-vii</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"540\"></a><div itemprop=\"text\">Give an optimal algorithm in pseudo-code for sorting a sequence of \\( n \\) numbers which has only \\( k \\) distinct numbers (\\( k \\) is not known a Priori). Give a brief analysis for the time-complexity of your algorithm.</div><br><br><b>GATE CSE 1991 | Question: 13</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/540/gate-cse-1991-question-13\" target=\"_blank\">https://gateoverflow.in/540/gate-cse-1991-question-13</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"559\"></a><div itemprop=\"text\"><p>Following algorithm(s) can be used to sort \\( n \\) in the range \\( [1\\ldots n^3] \\) in \\( O(n) \\) time</p>\n\n</div><br><br><b>GATE CSE 1992 | Question: 02,ix</b></p>",
          "type": "single",
          "options": [
            "<p>Heap sort</p>",
            "<p>Quick sort</p>",
            "<p>Merge sort</p>",
            "<p>Radix sort</p>"
          ],
          "correct_answer": "<p>Radix sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/559/gate-cse-1992-question-02-ix\" target=\"_blank\">https://gateoverflow.in/559/gate-cse-1992-question-02-ix</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"2648\"></a><div itemprop=\"text\">Consider the following sequence of numbers:\\[ 92, 37, 52, 12, 11, 25 \\] Use Bubble sort to arrange the sequence in ascending order. Give the sequence at the end of each of the first five passes.</div><br><br><b>GATE CSE 1995 | Question: 12</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2648/gate-cse-1995-question-12\" target=\"_blank\">https://gateoverflow.in/2648/gate-cse-1995-question-12</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"2766\"></a><div itemprop=\"text\"><p>A two dimensional array \\( A[1..n][1..n] \\) of integers is partially sorted if \\( \\forall i, j\\in [1..n-1], A[i][j] &lt; A[i][j+1] \\text{ and } A[i][j] &lt; A[i+1][j] \\)</p>\n\n<ol style=\"list-style-type:lower-alpha\">\n\t<li>\n\t<p>The smallest item in the array is at \\( A[i][j] \\) where \\( i=\\_\\_ \\) and \\( j=\\_\\_ \\).</p>\n\t</li>\n\t<li>The smallest item is deleted. Complete the following \\( O(n) \\) procedure to insert item \\( x \\) (which is guaranteed to be smaller than any item in the last row or column) still keeping \\( A \\) partially sorted.</li>\n</ol>\n\n<pre class=\"prettyprint lang-c_cpp\">procedure insert (x: integer);\nvar i,j: integer;\nbegin\n    i:=1; j:=1, A[i][j]:=x;\n    while (x &gt; __ or x &gt; __) do\n        if A[i+1][j] &lt; A[i][j] ___ then begin\n            A[i][j]:=A[i+1][j]; i:=i+1;\n        end\n        else begin\n            _____\n        end\n    A[i][j]:= ____\nend\n\n</pre></div><br><br><b>GATE CSE 1996 | Question: 14</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2766/gate-cse-1996-question-14\" target=\"_blank\">https://gateoverflow.in/2766/gate-cse-1996-question-14</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1659\"></a><div itemprop=\"text\"><p>Give the correct matching for the following pairs:&nbsp;\\[ \\begin{array}{|ll|ll|}\\hline \\text{(A)} &amp; \\text{\\( O (\\log n) \\)} &amp; \\text{(P)} &amp; \\text{Selection} \\\\\\hline &nbsp;\\text{(B)} &amp; \\text{\\( O (n) \\)} &amp; \\text{(Q)}&amp; \\text{Insertion sort} \\\\\\hline &nbsp;&nbsp;\\text{(C)}&amp; \\text{\\( O (n \\log n) \\)}&nbsp;&amp; \\text{(R)} &nbsp;&amp; \\text{Binary search} \\\\\\hline &nbsp;\\text{(D)} &amp; \\text{\\( O (n^2) \\)} &amp;\\text{(S)} &nbsp;&amp; \\text{Merge sort} &nbsp;\\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 1998 | Question: 1.22</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{A-R&nbsp;&nbsp;B-P &nbsp;C-Q &nbsp;D-S} \\)</p>",
            "<p>\\( \\text{A-R &nbsp;B-P &nbsp;C-S &nbsp;D-Q} \\)</p>",
            "<p>\\( \\text{A-P &nbsp;B-R &nbsp;C-S &nbsp;D-Q} \\)</p>",
            "<p>\\( \\text{A-P &nbsp;B-S &nbsp;C-R &nbsp;D-Q} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{A-R &nbsp;B-P &nbsp;C-S &nbsp;D-Q} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1659/gate-cse-1998-question-1-22\" target=\"_blank\">https://gateoverflow.in/1659/gate-cse-1998-question-1-22</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"1465\"></a><div itemprop=\"text\"><p>A sorting technique is called stable if</p>\n\n\n\n</div><br><br><b>GATE CSE 1999 | Question: 1.12</b></p>",
          "type": "single",
          "options": [
            "<p>it takes \\( O (n \\log n) \\) time</p>",
            "<p>it maintains the relative order of occurrence of non-distinct elements</p>",
            "<p>it uses divide and conquer paradigm</p>",
            "<p>it takes \\( O(n) \\) space</p>"
          ],
          "correct_answer": "<p>it maintains the relative order of occurrence of non-distinct elements</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1465/gate-cse-1999-question-1-12\" target=\"_blank\">https://gateoverflow.in/1465/gate-cse-1999-question-1-12</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"1507\"></a><div itemprop=\"text\"><p>Let \\( A \\) be an \\( n \\times n \\) matrix such that the elements in each row and each column are arranged in ascending order. Draw a decision tree, which finds \\( 1 \\)<sup>st</sup>, \\( 2 \\)<sup>nd</sup> and \\( 3 \\)<sup>rd</sup> smallest elements in minimum number of comparisons.</p></div><br><br><b>GATE CSE 1999 | Question: 8</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1507/gate-cse-1999-question-8\" target=\"_blank\">https://gateoverflow.in/1507/gate-cse-1999-question-8</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"688\"></a><div itemprop=\"text\"><p>An array contains four occurrences of \\( 0 \\), five occurrences of \\( 1 \\), and three&nbsp;occurrences of \\( 2 \\) in any order. The array is to be sorted using swap operations&nbsp;(elements that are swapped need to be adjacent).</p>\n\n<ol style=\"list-style-type:lower-alpha\">\n\t<li>&nbsp;What is the minimum number of swaps needed to sort such an array in the&nbsp;worst case?</li>\n\t<li>&nbsp;Give an ordering of &nbsp;elements in the above array so that the minimum&nbsp;number of swaps needed to sort the array is maximum.</li>\n</ol></div><br><br><b>GATE CSE 2000 | Question: 17</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/688/gate-cse-2000-question-17\" target=\"_blank\">https://gateoverflow.in/688/gate-cse-2000-question-17</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"949\"></a><div itemprop=\"text\"><p>In a permutation \\(a_1 ... a_n\\), of n distinct integers, an inversion is a pair \\((a_i, a_j)\\) such that \\(i &lt; j\\) and \\(a_i &gt; a_j\\).</p><p>If all permutations are equally likely, what is the expected number of inversions in a randomly chosen permutation of \\(1. . . n\\)?</p></div><br><br><b>GATE CSE 2003 | Question: 61</b></p>",
          "type": "single",
          "options": [
            "<p>\\(\\dfrac{n(n-1)}{2}\\)</p>",
            "<p>\\(\\dfrac{n(n-1)}{4}\\)</p>",
            "<p>\\(\\dfrac{n(n+1)}{4}\\)</p>",
            "<p>\\(2n[\\log_2n]\\)</p>"
          ],
          "correct_answer": "<p>\\(\\dfrac{n(n-1)}{4}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/949/gate-cse-2003-question-61\" target=\"_blank\">https://gateoverflow.in/949/gate-cse-2003-question-61</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"784\"></a><div itemprop=\"text\"><p>Suppose there are \\( \\lceil \\log n \\rceil \\) sorted lists of \\( \\lfloor n /\\log n \\rfloor \\) elements each. The time complexity of producing a sorted list of all these elements is: (Hint:Use a heap data structure)</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(n \\log \\log n) \\)</p>",
            "<p>\\( \\Theta(n \\log n) \\)</p>",
            "<p>\\( \\Omega(n \\log n) \\)</p>",
            "<p>\\( \\Omega\\left(n^{3/2}\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( O(n \\log \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/784/gate-cse-2005-question-39\" target=\"_blank\">https://gateoverflow.in/784/gate-cse-2005-question-39</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"975\"></a><div itemprop=\"text\">\n<p>Which one of the following in place sorting algorithms needs the minimum number of swaps?</p>\n\n\n</div><br><br><b>GATE CSE 2006 | Question: 14, ISRO2011-14</b></p>",
          "type": "single",
          "options": [
            "<p>Quick sort</p>",
            "<p>Insertion sort</p>",
            "<p>Selection sort</p>",
            "<p>Heap sort</p>"
          ],
          "correct_answer": "<p>Selection sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/975/gate-cse-2006-question-14-isro2011-14\" target=\"_blank\">https://gateoverflow.in/975/gate-cse-2006-question-14-isro2011-14</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"1212\"></a><div itemprop=\"text\"><p>Which of the following sorting algorithms has the lowest worse-case complexity?</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>Merge sort</p>",
            "<p>Bubble sort</p>",
            "<p>Quick sort</p>",
            "<p>Selection sort</p>"
          ],
          "correct_answer": "<p>Merge sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1212/gate-cse-2007-question-14\" target=\"_blank\">https://gateoverflow.in/1212/gate-cse-2007-question-14</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"1303\"></a><div itemprop=\"text\"><p>What is the number of swaps required to sort \\( n \\) elements using selection sort, in the worst case?</p></div><br><br><b>GATE CSE 2009 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(n) \\)</p>",
            "<p>\\( \\Theta(n \\log &nbsp;n) \\)</p>",
            "<p>\\( \\Theta(n^2) \\)</p>",
            "<p>\\( \\Theta(n^2 \\log &nbsp;n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1303/gate-cse-2009-question-11\" target=\"_blank\">https://gateoverflow.in/1303/gate-cse-2009-question-11</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"1541\"></a><div itemprop=\"text\"><p>The number of elements that can be sorted in \\( \\Theta(\\log n) \\) time using heap sort is</p>\n\n</div><br><br><b>GATE CSE 2013 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(1) \\)</p>",
            "<p>\\( \\Theta(\\sqrt{\\log} n) \\)</p>",
            "<p>\\( \\Theta(\\frac{\\log n}{\\log \\log n}) \\)</p>",
            "<p>\\( \\Theta(\\log n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(\\frac{\\log n}{\\log \\log n}) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1541/gate-cse-2013-question-30\" target=\"_blank\">https://gateoverflow.in/1541/gate-cse-2013-question-30</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"1415\"></a><div itemprop=\"text\"><p>Which one of the following is the tightest upper bound that represents the number of swaps required to sort \\( n \\) numbers using selection sort?</p></div><br><br><b>GATE CSE 2013 | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(\\log n \\))</p>",
            "<p>\\( O(n \\))</p>",
            "<p>\\( O(n \\log n \\))</p>",
            "<p>\\( O(n^{2} \\))</p>"
          ],
          "correct_answer": "<p>\\( O(n \\))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1415/gate-cse-2013-question-6\" target=\"_blank\">https://gateoverflow.in/1415/gate-cse-2013-question-6</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"1917\"></a><div itemprop=\"text\">The minimum number of comparisons required to find the minimum and the maximum of \\( 100 \\) numbers is ________</div><br><br><b>GATE CSE 2014 Set 1 | Question: 39</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "147.1:148.1",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1917/gate-cse-2014-set-1-question-39\" target=\"_blank\">https://gateoverflow.in/1917/gate-cse-2014-set-1-question-39</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"39660\"></a><div itemprop=\"text\"><p>The worst case running times of <em>Insertion sort</em> , <em>Merge sort</em> and <em>Quick sort</em>, respectively are:</p>\n\n</div><br><br><b>GATE CSE 2016 Set 1 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta (n \\log n) \\), \\( \\Theta (n \\log n) \\) and \\( \\Theta(n^2) \\)</p>",
            "<p>\\( \\Theta (n^2) \\), \\( \\Theta (n^2) \\) and \\( \\Theta(n \\log n) \\)</p>",
            "<p>\\( \\Theta (n^2) \\), \\( \\Theta (n \\log n) \\) and \\( \\Theta (n \\log n) \\)</p>",
            "<p>\\( \\Theta (n^2) \\), \\( \\Theta (n \\log n) \\) and \\( \\Theta (n^2) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta (n^2) \\), \\( \\Theta (n \\log n) \\) and \\( \\Theta (n^2) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39660/gate-cse-2016-set-1-question-13\" target=\"_blank\">https://gateoverflow.in/39660/gate-cse-2016-set-1-question-13</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"39561\"></a><div itemprop=\"text\"><p>Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in the ascending order, which of the following are <strong>TRUE</strong>?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>Quicksort runs in&nbsp;\\( \\Theta (n^2) \\) time</li>\n\t<li>Bubblesort runs in&nbsp;\\( \\Theta (n^2) \\) time</li>\n\t<li>Mergesort runs in&nbsp;\\( \\Theta (n) \\) time</li>\n\t<li>Insertion sort runs in&nbsp;\\( \\Theta (n) \\) time</li>\n</ol>\n\n\n\n\n\n</div><br><br><b>GATE CSE 2016 Set 2 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>I and II only</p>",
            "<p>I and III only</p>",
            "<p>II and IV only</p>",
            "<p>I and IV only</p>"
          ],
          "correct_answer": "<p>I and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39561/gate-cse-2016-set-2-question-13\" target=\"_blank\">https://gateoverflow.in/39561/gate-cse-2016-set-2-question-13</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"357443\"></a><div itemprop=\"text\"><p>Consider the following array.\\[ \\begin{array}{|l|l|l|l|l|l|} \\hline 23&amp;32&amp;45&amp;69&amp;72&amp;73&amp;89&amp;97&nbsp;\\\\ \\hline\\end{array} \\] Which algorithm out of the following options uses the least number of comparisons (among the array elements) to sort the above array in ascending order?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 9</b></p>",
          "type": "single",
          "options": [
            "<p>Selection sort</p>",
            "<p>Mergesort</p>",
            "<p>Insertion sort</p>",
            "<p>Quicksort using the last element as pivot</p>"
          ],
          "correct_answer": "<p>Insertion sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357443/gate-cse-2021-set-1-question-9\" target=\"_blank\">https://gateoverflow.in/357443/gate-cse-2021-set-1-question-9</a></p>"
        },
        {
          "id": 23,
          "question": "<p><a name=\"422811\"></a><div itemprop=\"text\"><p>​​​​​An array \\( [82,101,90,11,111,75,33,131,44,93] \\) is heapified. Which one of the following options represents the first three elements in the heapified array?</p></div><br><br><b>GATE CSE 2024 | Set 1 | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 82,90,101 \\)</p>",
            "<p>\\( 82,11,93 \\)</p>",
            "<p>\\( 131,11,93 \\)</p>",
            "<p>\\( 131,111,90 \\)</p>"
          ],
          "correct_answer": "<p>\\( 131,111,90 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422811/gate-cse-2024-set-1-question-31\" target=\"_blank\">https://gateoverflow.in/422811/gate-cse-2024-set-1-question-31</a></p>"
        },
        {
          "id": 24,
          "question": "<p><a name=\"422872\"></a><div itemprop=\"text\">Let \\( \\text{A} \\) be an array containing integer values. The distance of \\( \\text{A} \\) is defined as the minimum number of elements in \\( \\text{A} \\) that must be replaced with another integer so that the resulting array is sorted in non-decreasing order. The distance of the array \\( [2,5,3,1,4,2,6] \\) is ___________.</div><br><br><b>GATE CSE 2024 | Set 2 | Question: 25</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422872/gate-cse-2024-set-2-question-25\" target=\"_blank\">https://gateoverflow.in/422872/gate-cse-2024-set-2-question-25</a></p>"
        },
        {
          "id": 25,
          "question": "<p><a name=\"460825\"></a><div itemprop=\"text\"><p>​​​​Consider an unorders list of \\( N \\) distinct integers.</p><div>What is the minimum number of element comaparisons required to find an integer in the list that is NOT the largest in the list?</div><p>&nbsp;</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 10</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1 \\)</p>",
            "<p>\\( N-1 \\)</p>",
            "<p>\\( N \\)</p>",
            "<p>\\( 2N-1 \\)</p>"
          ],
          "correct_answer": "<p>\\( 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460825/gate-cse-2025-set-2-question-10\" target=\"_blank\">https://gateoverflow.in/460825/gate-cse-2025-set-2-question-10</a></p>"
        },
        {
          "id": 26,
          "question": "<p><a name=\"422927\"></a><div itemprop=\"text\"><p>Consider the following sorting algorithms:</p><ol start=\"1\" style=\"list-style-type:lower-roman\"><li>Bubble sort</li><li>Insertion sort</li><li>Selection sort</li></ol><p><br>Which ONE among the following choices of sorting algorithms sorts the numbers in the array \\( [4,3,2,1,5] \\) in increasing order after exactly two passes over the array?</p><p></p></div><br><br><b>GATE DS&AI 2024 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{(i)} \\) only</p>",
            "<p>\\( \\text{(iii)} \\) only</p>",
            "<p>\\( \\text{(i)} \\) and \\( \\text{(iii)} \\) only</p>",
            "<p>\\( \\text{(ii)} \\) and \\( \\text{(iii)} \\) only</p>"
          ],
          "correct_answer": "<p>\\( \\text{(iii)} \\) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422927/gate-ds&ai-2024-question-35\" target=\"_blank\">https://gateoverflow.in/422927/gate-ds&ai-2024-question-35</a></p>"
        },
        {
          "id": 27,
          "question": "<p><a name=\"3820\"></a><div itemprop=\"text\"><p>Let \\( a \\) and \\( b \\) be two sorted arrays containing \\( n \\) integers each, in non-decreasing order. Let \\( c \\) be a sorted array containing \\( 2n \\) integers obtained by merging the two arrays \\( a \\) and \\( b \\). Assuming the arrays are indexed starting from \\( 0 \\), consider the following four statements</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\\( a[i] \\geq&nbsp;b [i] \\Rightarrow c[2i] \\geq&nbsp;a [i] \\)</li>\n\t<li>\\( a[i] \\geq b [i] \\Rightarrow c[2i] \\geq b [i] \\)</li>\n\t<li>\\( a[i] \\geq b [i] \\Rightarrow c[2i] \\leq&nbsp;a [i] \\)</li>\n\t<li>\\( a[i] \\geq b [i] \\Rightarrow c[2i] \\leq b [i] \\)</li>\n</ol>\n\n<p>Which of the following is TRUE?</p>\n\n</div><br><br><b>GATE IT 2005 | Question: 59</b></p>",
          "type": "single",
          "options": [
            "<p>only I and II</p>",
            "<p>only I and IV</p>",
            "<p>only II and III</p>",
            "<p>only III and IV</p>"
          ],
          "correct_answer": "<p>only II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3820/gate-it-2005-question-59\" target=\"_blank\">https://gateoverflow.in/3820/gate-it-2005-question-59</a></p>"
        },
        {
          "id": 28,
          "question": "<p><a name=\"3353\"></a><div itemprop=\"text\"><p>If we use Radix Sort to sort \\( n \\) integers in the range \\( \\left (n^{k/2}, n^k \\right&nbsp;] \\), for some \\( k &gt; 0 \\) which is independent of \\( n \\), the time taken would be?</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 43</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(n) \\)</p>",
            "<p>\\( \\Theta(kn) \\)</p>",
            "<p>\\( \\Theta(n \\log n) \\)</p>",
            "<p>\\( \\Theta(n^2) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(n \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3353/gate-it-2008-question-43\" target=\"_blank\">https://gateoverflow.in/3353/gate-it-2008-question-43</a></p>"
        }
      ]
    }
  ]
});
