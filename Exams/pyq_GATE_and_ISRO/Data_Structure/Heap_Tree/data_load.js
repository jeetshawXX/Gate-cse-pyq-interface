window.__examLoadCallback({
  "title": "Data_Structure - Heap_Tree",
  "duration": 94,
  "sections": [
    {
      "name": "Heap_Tree",
      "questions": [
        {
          "id": 1,
          "question": "<p>A meld operation on two instances of a data structure combines them into one single instance of the same data structure. Consider the following data structures:  <br><br>\nP: Unsorted doubly linked list with pointers to the head node and tail node of the list.<br>\nQ: Min-heap implemented using an array.<br>\nR: Binary Search Tree.<br><br>\nWhich ONE of the following options gives the worst-case time complexities for meld operation on instances of size \\(n \\) of these data structures? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P: \\(\\Theta(1) \\),  Q: \\(\\Theta(n) \\),  R: \\(\\Theta(n) \\)</p>",
            "<b>B.</b> <p>P: \\(\\Theta(1) \\),  Q: \\(\\Theta(n \\log n) \\),  R: \\(\\Theta(n) \\)</p>",
            "<b>C.</b> <p>P: \\(\\Theta(n) \\),  Q: \\(\\Theta(n \\log n) \\),  R: \\(\\Theta(n^2) \\)</p>",
            "<b>D.</b> <p>P: \\(\\Theta(1) \\),  Q: \\(\\Theta(n) \\),  R: \\(\\Theta(n \\log n) \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>P: \\(\\Theta(1) \\),  Q: \\(\\Theta(n) \\),  R: \\(\\Theta(n) \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460807/gate-cse-2025-set-2-question-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>The height of any rooted tree is defined as the maximum number of edges in the path from the root node to any leaf node. Suppose a Min-Heap \\(T\\) stores 32 keys. The height of \\(T\\) is _____________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460055/gate-cse-2025-set-1-question-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a binary min-heap containing 105 distinct elements. Let \\(k\\)  be the index (in the underlying array) of the maximum element stored in the heap. The number of possible values of \\(k\\) is <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>53</p>",
            "<b>B.</b> <p>52</p>",
            "<b>C.</b> <p>27</p>",
            "<b>D.</b> <p>1</p>"
          ],
          "correct_answer": "<b>A.</b> <p>53</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422809/gate-cse-2024-set-1-question-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>An array \\([82,101,90,11,111,75,33,131,44,93] \\) is heapified. Which one of the following options represents the first three elements in the heapified array? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(82,90,101 \\)</p>",
            "<b>B.</b> <p>\\(82,11,93 \\)</p>",
            "<b>C.</b> <p>\\(131,11,93 \\)</p>",
            "<b>D.</b> <p>\\(131,111,90 \\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(131,111,90 \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422811/gate-cse-2024-set-1-question-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Let A be a priority queue for maintaining a set of elements. Suppose A is\nimplemented using a max-heap data structure. The operation Extract-Max(A)\nextracts and deletes the maximum element from A. The operation Insert(A,key)\ninserts a new element key in A. The properties of a max-heap are preserved at the\nend of each of these operations.<br>\nWhen A contains n elements, which one of the following statements about the worst\ncase running time of these two operations is TRUE? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both Extract-Max(A) and Insert(A,key) run in O(1).</p>",
            "<b>B.</b> <p>Both Extract-Max(A) and Insert(A,key) run in O(log(n)).</p>",
            "<b>C.</b> <p>Extract-Max(A) runs in O(1) whereas Insert(A,key) runs in O(n).</p>",
            "<b>D.</b> <p>Extract-Max(A) runs in O(1) whereas Insert(A,key) runs in O(log(n)).</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Both Extract-Max(A) and Insert(A,key) run in O(log(n)).</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399275/gate-cse-2023-question-36#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which one of the following sequences when stored in an array at locations\nA[1], . . . , A[10] forms a max-heap? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>23, 17, 10, 6, 13, 14, 1, 5, 7, 12</p>",
            "<b>B.</b> <p>23, 17, 14, 7, 13, 10, 1, 5, 6, 12</p>",
            "<b>C.</b> <p>23, 17, 14, 6, 13, 10, 1, 5, 7, 15</p>",
            "<b>D.</b> <p>23, 14, 17, 1, 10, 13, 16, 12, 7, 5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>23, 17, 14, 7, 13, 10, 1, 5, 6, 12</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399310/gate-cse-2023-question-2#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Let H be a binary min-heap consisting of n elements implemented as an array. What is the worst case time complexity of an optimal algorithm to find the maximum element in H? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (1)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (\\log n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta ( n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n \\log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta ( n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357538/gate-cse-2021-set-2-question-2#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the array representation of a binary min-heap containing 1023 elements. The minimum number of comparisons required to find the maximum in the heap is ___________. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "511",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333184/gate2020-cs-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following statements:<br><br>\nI. The smallest element in a max-heap is always at a leaf node.<br>\nII. The second largest element in a max-heap is always a child of the root node.<br>\nIII. A max-heap can be constructed from a binary search tree in \\(\\Theta (n)\\) time.<br>\nIV. A binary search tree can be constructed from a max-heap in \\(\\Theta (n)\\) time.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II and III</p>",
            "<b>B.</b> <p>I, II and IV</p>",
            "<b>C.</b> <p>I, III and IV</p>",
            "<b>D.</b> <p>II, III and IV</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I, II and III</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302808/gate2019-cs-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Given a binary-max heap. The elements are stored in an arrays as 25,14,16,13,10,8,12. What is the content of the array after two delete operations? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>14,13,8,12,10</p>",
            "<b>B.</b> <p>14,12,13,10,8</p>",
            "<b>C.</b> <p>14,13,12,8,10</p>",
            "<b>D.</b> <p>14,13,12,10,8</p>"
          ],
          "correct_answer": "<b>C.</b> <p>14,13,12,8,10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213531/isro2018-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The number of possible min-heaps containing each value from {1, 2, 3, 4, 5, 6, 7} exactly once is _____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "80",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204121/gate2018-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A complete binary min-heap is made by including each integer in [1,1023] exactly once. The depth of a node in the heap is the length of the path from the root of the heap to that node. Thus, the root is at depth 0. The maximum depth at which integer 9 can appear is_____.\n. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39585/gate2016-2-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>An operator delete(i) for a binary heap data structure is to be designed to delete the item in the i-th node.Assume that the heap is implemented in an array and i refers to the i-th index of thearray.If the heap tree has depth d (number of edges on the path from the root to the farthest leaf),the n what is the time complexity to re-fix the heap efficiently after the removal of the element? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(1)</p>",
            "<b>B.</b> <p>O(d) but not O(1)</p>",
            "<b>C.</b> <p>O(\\(2^{d}\\)) but not O(d)</p>",
            "<b>D.</b> <p>O(d \\(2^{d}\\)) but not O(\\(2^{d}\\))</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(d) but not O(1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39706/gate2016-1-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following array of elements. <br>\n(89,19,50,17,12,15,2,5,7,11,6,9,100) <br>The minimum number of interchanges needed to convert it into a max-heap is <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8418/gate2015-3-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a complete binary tree where the left and the right subtrees of the root are max-heaps. The lower bound for the number of operations to convert the tree to a heap is <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Omega (log n)\\)</p>",
            "<b>B.</b> <p>\\((n)\\)</p>",
            "<b>C.</b> <p>\\(\\Omega (n \\; log n)\\)</p>",
            "<b>D.</b> <p>\\(\\Omega (n^{2})\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Omega (log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8091/gate2015-2-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Consider a max heap, represented by the array: 40, 30, 20, 10, 15, 16, 17, 8, 4. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Heap_Tree\\q27_b7722a29.jpg\"><br>  Now consider that a value 35 is inserted into this heap. After insertion, the new heap is <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>40, 30, 20, 10, 15, 16, 17, 8, 4, 35</p>",
            "<b>B.</b> <p>40, 35, 20, 10, 30, 16, 17, 8, 4, 15</p>",
            "<b>C.</b> <p>40, 30, 20, 10, 35, 16, 17, 8, 4, 15</p>",
            "<b>D.</b> <p>40, 35, 20, 10, 15, 16, 17, 8, 4, 30</p>"
          ],
          "correct_answer": "<b>B.</b> <p>40, 35, 20, 10, 30, 16, 17, 8, 4, 15</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8273/gate2015-1-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>A priority queue is implemented as a Max-Heap. Initially, it has 5 elements. The level-order\ntraversal of the heap is: 10, 8, 5, 3, 2. Two new elements 1 and 7 are inserted into the heap in\nthat order. The level-order traversal of the heap after the insertion of the elements is: <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10, 8, 7, 3, 2, 1, 5</p>",
            "<b>B.</b> <p>10, 8, 7, 2, 3, 1, 5</p>",
            "<b>C.</b> <p>10, 8, 7, 2, 3, 1, 5</p>",
            "<b>D.</b> <p>10, 8, 7, 5, 3, 2, 1</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10, 8, 7, 3, 2, 1, 5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1967/gate2014-2-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>A max-heap is a heap where the value of each parent is greater than or equal to\nthe value of its children. Which of the following is a max-heap? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Heap_Tree\\q11_df3f1168.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>B.</b> <p>B</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2125/gate2011-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>A data structure is required for storing a set of integers such that each of the following operations can be done in \\(O(\\log n)\\) time, where n is the number of elements in the set.<br><br>\n1. Deletion of the smallest element<br>\n2. Insertion of an element if it is not already present in the set<br><br>\nWhich of the following data structures can be used for this purpose? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A heap can be used but not a balanced binary search tree</p>",
            "<b>B.</b> <p>A balanced binary search tree can be used but not a heap</p>",
            "<b>C.</b> <p>Both balanced binary search tree and heap can be used</p>",
            "<b>D.</b> <p>Neither balanced search tree nor heap can be used</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A balanced binary search tree can be used but not a heap</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/950/gate2003-63-isro2009-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Consider a binary max-heap implemented using an array. <br><br>What is the content of the array after two delete operations on {25,14,16,13,10,8,12} <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{14,13,12,10,8}</p>",
            "<b>B.</b> <p>{14,12,13,8,10}</p>",
            "<b>C.</b> <p>{14,13,8,12,10}</p>",
            "<b>D.</b> <p>{14,13,12,8,10}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{14,13,12,8,10}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43466/gate2009-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Consider a binary max-heap implemented using an array. <br><br>\nWhich one of the following array represents a binary max-heap? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{25,12,16,13,10,8,14}</p>",
            "<b>B.</b> <p>{25,14,13,16,10,8,12}</p>",
            "<b>C.</b> <p>{25,14,16,13,10,8,12}</p>",
            "<b>D.</b> <p>{25,14,12,13,10,8,16}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{25,14,16,13,10,8,12}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1341/gate2009-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>We have a binary heap on n elements and wish to insert n more elements (not\nnecessarily one after another) into this heap. The total time required for this is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta\\) (logn)</p>",
            "<b>B.</b> <p>\\(\\Theta\\) (n)</p>",
            "<b>C.</b> <p>\\(\\Theta\\) (nlogn)</p>",
            "<b>D.</b> <p>\\(\\Theta (n^{2})\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta\\) (n)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/459/gate2008-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Consider the process of inserting an element into a Max Heap, where the Max\nHeap is represented by an array. Suppose we perform a binary search on the\npath from the new leaf to the root to find the position for the newly inserted\nelement, the number of comparisons performed is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (log n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (loglogn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n log_{2}n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta (loglogn)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1245/gate2007-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Which of the following sequences of array elements forms a heap? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{23,17,14,6,13,10,1,12,7,5}</p>",
            "<b>B.</b> <p>{23,17,14,6,13,10,1,5,7,12}</p>",
            "<b>C.</b> <p>{23,17,14,7,13,10,1,5,6,12}</p>",
            "<b>D.</b> <p>{23,17,14,7,13,10,1,12,5,7}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{23,17,14,7,13,10,1,5,6,12}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3587/gate2006-it-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>A 3-ary max heap is like a binary max heap, but instead of 2 children, nodes have 3 children. A 3-ary heap can be represented by an array as follows: The root is stored in the first location, a[0], nodes in the next level, from left to right, is stored from a[1] to a[3]. The nodes from the second level of the tree from left to right are stored from a[4] location onward. An item x can be inserted into a 3-ary heap containing n items by placing x in the location a[n] and pushing it up the tree to satisfy the heap property. <br><br>Suppose the elements 7, 2, 10 and 4 are inserted, in that order, into the valid 3-ary max heap found in the above question, Which one of the following is the sequence of items in the array representing the resultant heap? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10, 7, 9, 8, 3, 1, 5, 2, 6, 4</p>",
            "<b>B.</b> <p>10, 9, 8, 7, 6, 5, 4, 3, 2, 1</p>",
            "<b>C.</b> <p>10, 9, 4, 5, 7, 6, 8, 2, 1, 3</p>",
            "<b>D.</b> <p>10, 8, 6, 9, 7, 2, 3, 4, 1, 5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10, 7, 9, 8, 3, 1, 5, 2, 6, 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87191/gate2006-77#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>A 3-ary max heap is like a binary max heap, but instead of 2 children, nodes have 3 children. A 3-ary heap can be represented by an array as follows: The root is stored in the first location, a[0], nodes in the next level, from left to right, is stored from a[1] to a[3]. The nodes from the second level of the tree from left to right are stored from a[4] location onward. An item x can be inserted into a 3-ary heap containing n items by placing x in the location a[n] and pushing it up the tree to satisfy the heap property. <br><br> Which one of the following is a valid sequence of elements in an array representing 3-ary max heap? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 3, 5, 6, 8, 9</p>",
            "<b>B.</b> <p>9, 6, 3, 1, 8, 5</p>",
            "<b>C.</b> <p>9, 3, 6, 8, 5, 1</p>",
            "<b>D.</b> <p>9, 5, 6, 8, 3, 1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9, 5, 6, 8, 3, 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1852/gate2006-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>In a binary max heap containing n numbers, the smallest element can be found in time <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (logn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (log logn)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (1)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Theta (n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/889/gate2006-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>A Priority-Queue is implemented as a Max-Heap. Initially, it has 5 elements. The level-order traversal of the heap is given below: <br><br>\n10, 8, 5, 3, 2 <br><br>\nTwo new elements '1' and '7' are inserted in the heap in that order. The level-order traversal of the heap after the insertion of the elements is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10, 8, 7, 5, 3, 2, 1</p>",
            "<b>B.</b> <p>10, 8, 7, 2, 3, 1, 5</p>",
            "<b>C.</b> <p>10, 8, 7, 1, 2, 3, 5</p>",
            "<b>D.</b> <p>10, 8, 7, 3, 2, 1, 5</p>"
          ],
          "correct_answer": "<b>D.</b> <p>10, 8, 7, 3, 2, 1, 5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1370/gate2005-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>An array of integers of size n can be converted into a heap by adjusting the heaps rooted at each internal node of the complete binary tree starting at the node \\(\\left \\lfloor (n - 1) /2 \\right \\rfloor\\), and doing this adjustment up to the root node (root node is at index 0) in the order \\(\\left \\lfloor (n - 1) /2 \\right \\rfloor\\),\\(\\left \\lfloor (n - 3) /2 \\right \\rfloor\\), ....., 0. The time required to construct a heap in this manner is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(\\log n)\\)</p>",
            "<b>B.</b> <p>O(n)</p>",
            "<b>C.</b> <p>\\(O (n \\log \\log n)\\)</p>",
            "<b>D.</b> <p>\\(O(n \\log n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3696/gate2004-it-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>The elements 32, 15, 20, 30, 12, 25, 16, are inserted one by one in the given order into a MaxHeap.\nThe resultant MaxHeap is <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Heap_Tree\\q37_769a47b7.jpg\"> <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1034/gate2004-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>A data structure is required for storing a set of integers such that each of the following operations can be done in O(logn) time, where n is the number of elements\nin the set. <br><br>\n1. Delection of the smallest element. <br>\n2. Insertion of an element if it is not already present in the set. <br><br>\nWhich of the following data structures can be used for this purpose ? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A heap can be used but not a balanced binary search tree</p>",
            "<b>B.</b> <p>A balanced binary search tree can be used but not a heap</p>",
            "<b>C.</b> <p>Both balanced binary search tree and heap can be used</p>",
            "<b>D.</b> <p>Neither balanced binary search tree nor heap can be used</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A balanced binary search tree can be used but not a heap</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/950/gate2003-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>In a heap with n elements with the smallest element at the root, the \\(7^{th}\\) smallest\nelement ban be found in time <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (nlogn)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (logn)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (1)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta (1)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1110/gate2003-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>The minimum number of interchanges needed to convert the array into a max-heap is<br>\n89, 19, 40, 17, 12, 10, 2, 5, 7, 11, 6, 9, 70 <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2740/gate1996-2-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Consider any array representation of an n element binary heap where the elements\nare stored from index 1 to index n of the array. For the element stored at index\ni of the array (\\(i\\leq n\\) ) , the index of the parent is <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>i-1</p>",
            "<b>B.</b> <p>\\(\\left \\lfloor \\frac{i}{2} \\right \\rfloor\\)</p>",
            "<b>C.</b> <p>\\(\\frac{i}{2}\\)</p>",
            "<b>D.</b> <p>\\(\\frac{(i+1)}{2}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\left \\lfloor \\frac{i}{2} \\right \\rfloor\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/708/gate2001-1-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
