window.__examLoadCallback({
  "title": "Algorithms - Quick Sort",
  "duration": 39,
  "sections": [
    {
      "name": "Quick Sort",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"80366\"></a><div itemprop=\"text\"><p>Let \\( P \\) be a quicksort program to sort numbers in ascending order. Let \\( t_{1} \\) and \\( t_{2} \\) be the time taken by the program for the inputs \\( \\left[1 \\&nbsp;2 \\ 3 \\ 4\\right] \\) and \\( \\left[5 \\ 4 \\ 3 \\ 2 \\ 1\\right] \\), respectively. Which of the following holds?</p>\n\n</div><br><br><b>GATE CSE 1987 | Question: 1-xviii</b></p>",
          "type": "single",
          "options": [
            "<p>\\( t_{1} = t_{2} \\)</p>",
            "<p>\\( t_{1} &gt; t_{2} \\)</p>",
            "<p>\\( t_{1} &lt; t_{2} \\)</p>",
            "<p>\\( t_{1}=t_{2}+5 \\log 5 \\)&nbsp;</p>"
          ],
          "correct_answer": "<p>\\( t_{1} &lt; t_{2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/80366/gate-cse-1987-question-1-xviii\" target=\"_blank\">https://gateoverflow.in/80366/gate-cse-1987-question-1-xviii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"89083\"></a><div itemprop=\"text\"><p>An input files has \\( 10 \\) records with keys as given below:</p>\n\n<p>\\( 25\\quad 7\\quad&nbsp;34\\quad&nbsp; 2\\quad&nbsp; 70\\quad&nbsp; 9\\quad&nbsp; 61\\quad&nbsp; 16\\quad&nbsp; 49\\quad&nbsp; 19 \\)</p>\n\n<p>This is to be sorted in non-decreasing order.</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>Sort the input file using QUICKSORT by correctly positioning the first element of the file/subfile. Show the subfiles obtained at all intermediate steps. Use square brackets to demarcate subfiles.</li>\n\t<li>Sort the input file using \\( 2 \\)-way- MERGESORT showing all major intermediate steps. Use square brackets to demarcate subfiles.</li>\n</ol></div><br><br><b>GATE CSE 1989 | Question: 9</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/89083/gate-cse-1989-question-9\" target=\"_blank\">https://gateoverflow.in/89083/gate-cse-1989-question-9</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"581\"></a><div itemprop=\"text\">Assume that the last element of the set is used as partition element in Quicksort. If \\( n \\) distinct elements from the set \\( \\left[1\\dots n\\right] \\) are to be sorted, give an input for which Quicksort takes maximum time.</div><br><br><b>GATE CSE 1992 | Question: 03,iv</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/581/gate-cse-1992-question-03-iv\" target=\"_blank\">https://gateoverflow.in/581/gate-cse-1992-question-03-iv</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"2744\"></a><div itemprop=\"text\"><p>Quick-sort is run on two inputs shown below to sort in ascending order taking first element as pivot</p><ol style=\"list-style-type:lower-roman\"><li>\\( 1, 2, 3, \\dots n \\)</li><li>\\( n, n-1, n-2, \\dots, 2, 1 \\)</li></ol><p>Let \\( C_1 \\) and \\( C_2 \\) be the number of comparisons made for the inputs (i) and (ii) respectively. Then,&nbsp;</p></div><br><br><b>GATE CSE 1996 | Question: 2.15</b></p>",
          "type": "single",
          "options": [
            "<p>\\( C_1 &lt; C_2 \\)</p>",
            "<p>\\( C_1 &gt; C_2 \\)</p>",
            "<p>\\( C_1 = C_2 \\)</p>",
            "<p>we cannot say anything for arbitrary \\( n \\)</p>"
          ],
          "correct_answer": "<p>\\( C_1 = C_2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2744/gate-cse-1996-question-2-15\" target=\"_blank\">https://gateoverflow.in/2744/gate-cse-1996-question-2-15</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"707\"></a><div itemprop=\"text\"><p>Randomized quicksort is an extension of quicksort where the pivot is chosen randomly. What is the worst case complexity of sorting n numbers using Randomized quicksort?</p></div><br><br><b>GATE CSE 2001 | Question: 1.14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(n) \\)</p>",
            "<p>\\( O(n \\log n) \\)</p>",
            "<p>\\( O(n^2) \\)</p>",
            "<p>\\( O(n!) \\)</p>"
          ],
          "correct_answer": "<p>\\( O(n^2) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/707/gate-cse-2001-question-1-14\" target=\"_blank\">https://gateoverflow.in/707/gate-cse-2001-question-1-14</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1830\"></a><div itemprop=\"text\"><p>The median of \\( n \\) elements can be found in \\( O(n) \\) time. Which one of the following is correct about the complexity of quick sort, in which median is selected as pivot?</p></div><br><br><b>GATE CSE 2006 | Question: 52</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta (n) \\)</p>",
            "<p>\\( \\Theta (n \\log n) \\)</p>",
            "<p>\\( \\Theta (n^{2}) \\)</p>",
            "<p>\\( \\Theta (n^{3}) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta (n \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1830/gate-cse-2006-question-52\" target=\"_blank\">https://gateoverflow.in/1830/gate-cse-2006-question-52</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"455\"></a><div itemprop=\"text\"><p>Consider the Quicksort algorithm. Suppose there is a procedure for finding a pivot element which splits the list into two sub-lists each of which contains at least one-fifth of the elements. Let \\( T(n) \\) be the number of comparisons required to sort \\( n \\) elements. Then</p></div><br><br><b>GATE CSE 2008 | Question: 43</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) \\leq 2T(n/5) + n \\)</p>",
            "<p>\\( T(n) \\leq T(n/5) + T(4n/5) + n \\)</p>",
            "<p>\\( T(n) \\leq 2T(4n/5) + n \\)</p>",
            "<p>\\( T(n) \\leq 2T(n/2) + n \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n) \\leq T(n/5) + T(4n/5) + n \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/455/gate-cse-2008-question-43\" target=\"_blank\">https://gateoverflow.in/455/gate-cse-2008-question-43</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1325\"></a><div itemprop=\"text\"><p>In quick-sort, for sorting \\( n \\) elements, the \\( \\left(n/4\\right)^{th} \\) smallest element is selected as pivot using an \\( O(n) \\) time algorithm. What is the worst case time complexity of the quick sort?</p></div><br><br><b>GATE CSE 2009 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(n) \\)</p>",
            "<p>\\( \\Theta(n \\log &nbsp;n) \\)</p>",
            "<p>\\( \\Theta(n^2) \\)</p>",
            "<p>\\( \\Theta(n^2 \\log &nbsp;n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(n \\log &nbsp;n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1325/gate-cse-2009-question-39\" target=\"_blank\">https://gateoverflow.in/1325/gate-cse-2009-question-39</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"1780\"></a><div itemprop=\"text\"><p>Let \\( P \\) be quicksort program to sort numbers in ascending order using the first element as the pivot. Let \\( t_1 \\) and \\( t_2 \\) be the number of comparisons made by P for the inputs&nbsp; \\( [1 \\ 2 \\ 3 \\ 4 \\ 5] \\)&nbsp;and \\( [4 \\ 1 \\ 5 \\ 3 \\ 2] \\) respectively. Which one of the following holds?</p></div><br><br><b>GATE CSE 2014 Set 1 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( t_1 = 5 \\)</p>",
            "<p>\\( t_1 &lt; t_2 \\)</p>",
            "<p>\\( t_1&gt;t_2 \\)</p>",
            "<p>\\( t_1 = t_2 \\)</p>"
          ],
          "correct_answer": "<p>\\( t_1&gt;t_2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1780/gate-cse-2014-set-1-question-14\" target=\"_blank\">https://gateoverflow.in/1780/gate-cse-2014-set-1-question-14</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"2048\"></a><div itemprop=\"text\"><p>You have an array of \\( n \\) elements. Suppose you implement quicksort by always choosing the central element of the array as the pivot. Then the tightest upper bound for the worst case performance is</p></div><br><br><b>GATE CSE 2014 Set 3 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(n^2) \\)</p>",
            "<p>\\( O(n \\log n) \\)</p>",
            "<p>\\( \\Theta(n\\log n) \\)</p>",
            "<p>\\( O(n^3) \\)</p>"
          ],
          "correct_answer": "<p>\\( O(n^2) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2048/gate-cse-2014-set-3-question-14\" target=\"_blank\">https://gateoverflow.in/2048/gate-cse-2014-set-3-question-14</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"8017\"></a><div itemprop=\"text\"><p>Which one of the following is the recurrence equation for the worst case time complexity of the quick sort algorithm for sorting \\( n\\;( \\geq&nbsp;&nbsp;2) \\) numbers? In the recurrence equations given in the options below, \\( c \\) is a constant.</p></div><br><br><b>GATE CSE 2015 Set 1 | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) = 2 T (n/2) + cn \\)</p>",
            "<p>\\( T(n) = T ( n - 1) + T(1) + cn \\)</p>",
            "<p>\\( T(n) = 2T ( n - 1) + cn \\)</p>",
            "<p>\\( T(n) = T (n/2) + cn \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n) = T ( n - 1) + T(1) + cn \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8017/gate-cse-2015-set-1-question-2\" target=\"_blank\">https://gateoverflow.in/8017/gate-cse-2015-set-1-question-2</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"8243\"></a><div itemprop=\"text\"><p>Suppose you are provided with the following function declaration in the C programming language.</p><pre class=\"prettyprint lang-c_cpp\">int partition(int a[], int n);</pre><p>The function treats the first element of \\( a[\\:] \\) as a pivot and rearranges the array so that all elements less than or equal to the pivot is in the left part of the array, and all elements greater than the pivot is in the right part. In addition, it moves the pivot so that the pivot is the last element of the left part. The return value is the number of elements in the left part.</p><p>The following partially given function in the C programming language is used to find the \\( k^{th} \\) smallest element in an array \\( a[\\:] \\) of size \\( n \\) using the partition function. We assume \\( k \\leq n \\).</p><pre class=\"prettyprint lang-c_cpp\">int kth_smallest (int a[], int n, int k)\n{\n    int left_end = partition (a, n);\n    if (left_end+1==k) {\n        return a[left_end];\n    }\n    if (left_end+1 &gt; k) {\n        return kth_smallest (___________);\n    } else {\n        return kth_smallest (___________);   \n    }\n}</pre><p>The missing arguments lists are respectively</p></div><br><br><b>GATE CSE 2015 Set 2 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (a, \\) left_end\\( , k)  \\) and \\(  (a+ \\)left_end\\( +1, n- \\)left_end\\( -1, k- \\)left_end\\( -1) \\)</p>",
            "<p>\\( (a, \\) left_end\\( , k)  \\) and \\(  (a, n- \\)left_end\\( -1, k- \\)left_end\\( -1) \\)</p>",
            "<p>\\( (a+ \\)&nbsp;left_end\\( +1, n- \\)left_end\\( -1, k- \\)left_end\\( -1)  \\) and \\( (a,  \\) left_end\\( , k) \\)</p>",
            "<p>\\( (a, n- \\)left_end\\( -1, k- \\)left_end\\( -1) \\) and \\( (a,  \\)left_end\\( , k) \\)</p>"
          ],
          "correct_answer": "<p>\\( (a, \\) left_end\\( , k)  \\) and \\(  (a+ \\)left_end\\( +1, n- \\)left_end\\( -1, k- \\)left_end\\( -1) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8243/gate-cse-2015-set-2-question-45\" target=\"_blank\">https://gateoverflow.in/8243/gate-cse-2015-set-2-question-45</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"302828\"></a><div itemprop=\"text\">An array of \\( 25 \\) distinct elements is to be sorted using quicksort. Assume that the pivot element is chosen uniformly at random. The probability that the pivot element gets placed in the worst possible location in the first round of partitioning (rounded off to \\( 2 \\) decimal places) is ________</div><br><br><b>GATE CSE 2019 | Question: 20</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.08",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302828/gate-cse-2019-question-20\" target=\"_blank\">https://gateoverflow.in/302828/gate-cse-2019-question-20</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"422942\"></a><div itemprop=\"text\">Consider sorting the following array of integers in ascending order using an inplace Quicksort algorithm that uses the last element as the pivot.<br>\n\\begin{array}{|l|l|l|l|l|}<br>\n\\hline 60 &amp; 70 &amp; 80 &amp; 90 &amp; 100 \\\\<br>\n\\hline<br>\n\\end{array}<br>\n<br>\nThe minimum number of swaps performed during this Quicksort is \\( \\_\\_\\_\\_\\_\\_\\_\\_ \\).</div><br><br><b>GATE DS&AI 2024 | Question: 20</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422942/gate-ds&ai-2024-question-20\" target=\"_blank\">https://gateoverflow.in/422942/gate-ds&ai-2024-question-20</a></p>"
        }
      ]
    }
  ]
});
