window.__examLoadCallback({
  "title": "Sorting - Sorting - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Sorting",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following array.<br><br>\\(\\begin{array}{|l|l|l|l|l|l|l|l|}  \\hline 23&amp;32&amp;45&amp;69&amp;72&amp;73&amp;89&amp;97 \\\\ \\hline\\end{array}\\)<br><br>\nWhich algorithm out of the following options uses the least number of comparisons (among the array elements) to sort the above array in ascending order? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Selection sort</p>",
            "<b>B.</b> <p>Mergesort</p>",
            "<b>C.</b> <p>Insertion sort</p>",
            "<b>D.</b> <p>Quicksort using the last element as pivot</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Insertion sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357443/gate-cse-2021-set-1-question-9#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>An array of 25 distinct elements is to be sorted using quicksort. Assume that the pivot element is chosen uniformly at random. The probability that the pivot element gets placed in the worst possible location in the first round of partitioning (rounded off to 2 decimal places) is _________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.08",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302828/gate2019-cs-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in ascending order, which of the following are TRUE? <br>\nI. Quicksort runs in \\(\\Theta (n^{2})\\) time  <br>\nII. Bubblesort runs in \\(\\Theta (n^{2})\\) time <br>\nIII. Merge sort runs in \\(\\Theta (n)\\) time <br>\nIV. Insertion sort runs in \\(\\Theta (n)\\) time <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and IV only</p>",
            "<b>D.</b> <p>I and IV only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39561/gate2016-2-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The worst case running times of Insertion sort, Mergesort and Quicksort, respectively, are: <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta\\)(n logn), \\(\\Theta\\)(n logn), and \\(\\Theta(n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n^{2}),\\Theta(n^{2}), and \\Theta (n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^{2}),\\Theta(n logn), and \\Theta (n logn)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n^{2}),\\Theta(n logn), and \\Theta (n^{2})\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta (n^{2}),\\Theta(n logn), and \\Theta (n^{2})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39660/gate2016-1-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Assume that a mergesort algorithm in the worst case takes 30 seconds for an input of size 64. Which of the following most closely approximates the maximum input size of a problem that can be solved in 6 minutes? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>256</p>",
            "<b>B.</b> <p>512</p>",
            "<b>C.</b> <p>1024</p>",
            "<b>D.</b> <p>2048</p>"
          ],
          "correct_answer": "<b>B.</b> <p>512</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8480/gate2015-3-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Suppose you are provided with the following function declaration in the C programming language.<br><br> int partition(int a[ ], int n); <br><br> The function treats the first element of a[] as a pivot, and rearranges the array so that all elements less than or equal to the pivot is in the left part of the array, and all elements greater than the pivot is in the right part. In addition, it moves the pivot so that the pivot is the last element of the left part. The return value is the number of elements in the left part. <br>\nThe following partially given function in the C programming language is used to find the \\( k^{th}\\) smallest element in an array a[ ] of size n using the partition function. We assume \\( k \\leq n\\)<pre><code>  int kth_smallest(int a[], int n, int k)\n{\n    int left_end = partition(a,n);\n    if ( left_end+1 == k ){\n         return a[left_end];\n    }\n    if ( left_end+1 &gt; k ){\n         return kth_smallest( ________ );\n    } else {\n         return kth_smallest( ________ );\n    }\n} </code></pre><br> The missing argument lists are respectively <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(a, left_end, k) and (a+left_end+1, n-left_end-1, k-left_end-1)</p>",
            "<b>B.</b> <p>(a, left_end, k) and (a, n-left_end-1, k-left_end-1)</p>",
            "<b>C.</b> <p>(a+left_end+1, n-left_end-1, k-left_end-1) and (a, left_end, k)</p>",
            "<b>D.</b> <p>(a, n-left_end-1, k-left_end-1) and (a, left_end, k)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(a, left_end, k) and (a+left_end+1, n-left_end-1, k-left_end-1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8243/gate2015-2-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which one of the following is the recurrence equation for the worst case time complexity of the Quicksort algorithm for sorting n ( \\(\\geq\\)2) numbers? In the recurrence equations given in the options below, c is a constant. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(n)=2T(n/2)+cn</p>",
            "<b>B.</b> <p>T(n)=T(n-1)+T(1)+cn</p>",
            "<b>C.</b> <p>T(n)=2T(n-1)+cn</p>",
            "<b>D.</b> <p>T(n)=T(n/2)+cn</p>"
          ],
          "correct_answer": "<b>B.</b> <p>T(n)=T(n-1)+T(1)+cn</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8017/gate2015-1-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>You have an array of n elements. Suppose you implement quick sort by always choosing the central element of the array as the pivot. Then the tightest upper bound for the worst case performance is <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n^{2})\\)</p>",
            "<b>B.</b> <p>\\(O(n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>D.</b> <p>\\(O(n^{3})\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(O(n^{2})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2048/gate2014-3-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let P be a quick sort program to sort numbers in ascending order using the first element as\nthe pivot. Let t1 and t2 be the number of comparisons made by P for the inputs [1 2 3 4\n5] and [4 1 5 3 2] respectively. Which one of the following holds? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(t_{1}=5\\)</p>",
            "<b>B.</b> <p>\\(t_{1} \\lt t_{2}\\)</p>",
            "<b>C.</b> <p>\\(t_{1} \\gt t_{2}\\)</p>",
            "<b>D.</b> <p>\\(t_{1}=t_{2}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(t_{1} \\gt t_{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1780/gate2014-1-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>The number of elements that can be sorted in \\(\\Theta (log n)\\) time using heap sort is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (1)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (\\sqrt{logn})\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (\\frac{log n}{log log n})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (\\frac{log n}{log log n})\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1541/gate2013-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which one of the following is the tightest upper bound that represents the number of swaps\nrequired to sort n numbers using selection sort? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(log n)</p>",
            "<b>B.</b> <p>O(n)</p>",
            "<b>C.</b> <p>O(n log n)</p>",
            "<b>D.</b> <p>\\(O(n^{2})\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1415/gate2013-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A list of n strings, each of length n, is sorted into lexicographic order using the merge-sort\nalgorithm. The worst case running time of this computation is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O (n log n)</p>",
            "<b>B.</b> <p>O (\\(n^{2} log n\\))</p>",
            "<b>C.</b> <p>O (\\(n^{2}+ log n\\))</p>",
            "<b>D.</b> <p>O (\\(n^{2}\\))</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O (\\(n^{2} log n\\))</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1762/gate2012-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>In quick sort, for sorting n elements, the (n/4)th smallest element is selected as\npivot using an O(n) time algorithm. What is the worst case time complexity of the quick sort? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\theta (n^{2} logn)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\theta (n logn)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1325/gate2009-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>What is the number of swaps required to sort n elements using selection sort, in the worst case? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\theta (n^{2} logn)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1303/gate2009-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>If we use Radix Sort to sort n integers in the range \\(\\left (n^{k/2}, n^k \\right )\\), for some k&gt;0 which is independent of n, the time taken would be? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta(n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta(kn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta(n \\log n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta(n^2)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta(n \\log n)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3353/gate2008-it-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
