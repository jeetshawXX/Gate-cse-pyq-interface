window.__examLoadCallback({
  "title": "Data_Structure - Data_Structure - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Data_Structure",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider a complete binary tree with 7 nodes. Let A denote the set of first 3 elements obtained by performing Breadth-First Search (BFS) starting from the root. Let B denote the set of first 3 elements obtained by performing Depth-First Search (DFS) starting from the root.<br><br>\nThe value of |A-B| is _____________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357524/gate-cse-2021-set-2-question-16#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>What is the worst-case number of arithmetic operations performed by recursive binary search on a sorted array of size n? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (\\sqrt{n})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta ( \\log _2 (n))\\)</p>",
            "<b>C.</b> <p>\\(\\Theta ( n^2)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta ( n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta ( \\log _2 (n))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357532/gate-cse-2021-set-2-question-8#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
          "question": "<p>Consider a dynamic hashing approach for 4-bit integer keys:\n<br><br>\n1. There is a main hash table of size 4.<br>\n2. The 2 least significant bits of a key is used to index into the main hash table.<br>\n3. Initially, the main hash table entries are empty.<br>\n4. Thereafter, when more keys are hashed into it, to resolve collisions, the set of all keys corresponding to a main hash table. entry is organized as a binary tree that grows on demand.<br>\n5. First, the 3rd least significant bit is used to divide the keys into left and right subtrees.<br>\n6. To resolve more collisions, each node of the binary tree is further sub-divided into left and right subtrees based on the 4th least significant bit.<br>\n7. A split is done only if it is needed, i.e., only when there is a collision.<br><br>\nConsider the following state of the hash table.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q47_ec8a2570.jpg\"><br>\nWhich of the following sequences of key insertions can cause the above state of the hash table (assume the keys are in decimal notation)? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>5,9,4,13,10,7</p>",
            "<b>B.</b> <p>9,5,10,6,7,1</p>",
            "<b>C.</b> <p>10,9,6,7,5,13</p>",
            "<b>D.</b> <p>9,5,13,6,10,14</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>10,9,6,7,5,13</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357404/gate-cse-2021-set-1-question-47#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following sequence of operations on an empty stack.<br><br>push(54); push(52); pop(); push(55); push(62); s=pop();<br><br>\nConsider the following sequence of operations on an empty queue.\n<br><br>\nenqueue(21); enqueue(24); dequeue(); enqueue(28); enqueue(32); q=dequeue();<br><br>\nThe value of s+q is ___________. <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "86",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357430/gate-cse-2021-set-1-question-21#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A binary search tree T contains n distinct elements. What is the time complexity of picking an element in T that is smaller than the maximum element in T? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta(n\\log n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta(n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta(\\log n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta(1)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta(1)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357442/gate-cse-2021-set-1-question-10#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Let P be an array containing n integers. Let t be the lowest upper bound on the number of comparisons of the array elements, required to find the minimum and maximum values in an arbitrary array of n elements. Which one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(t \\gt 2n-2\\)</p>",
            "<b>B.</b> <p>\\(t \\gt 3\\lceil \\frac{n}{2}\\rceil \\text{ and } t\\leq 2n-2\\)</p>",
            "<b>C.</b> <p>\\(t \\gt n \\text{ and } t\\leq 3\\lceil \\frac{n}{2}\\rceil\\)</p>",
            "<b>D.</b> <p>\\(t \\gt \\lceil \\log_2(n)\\rceil \\text{ and } t\\leq n\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(t \\gt n \\text{ and } t\\leq 3\\lceil \\frac{n}{2}\\rceil\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357450/gate-cse-2021-set-1-question-2#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
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
          "question": "<p>In a balanced binary search tree with n elements, what is the worst case time complexity of reporting all elements in range [a,b]? Assume that the number of reported elements is k. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (\\log n )\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (\\log n +k)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (k \\log n )\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n \\log k )\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta (\\log n +k)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333190/gate2020-cs-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a double hashing scheme in which the primary hash function is \\(h_1(k)=k\\; mod \\; 23\\), and the secondary hash function is \\(h_2(k)=1+(k\\; mod \\; 19)\\). Assume that the table size is 23. Then the address returned by probe 1 in the probe sequence (assume that the probe sequence begins at probe 0) for key value k=90 is_____________. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "13",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333208/gate2020-cs-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n \\log n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^2)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (1)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (n^2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333215/gate2020-cs-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>What is the worst case time complexity of inserting \\(n^2\\) elements into an AVL-tree with n elements initially? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n^4)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n^2)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^2 \\log n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n^3)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (n^2 \\log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333225/gate2020-cs-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The preorder traversal of a binary search tree is 15,10,12,11,20,18,16,19. Which one of the following is the postorder traversal of the tree? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10,11,12,15,16,18,19,20</p>",
            "<b>B.</b> <p>11,12,10,16,19,18,20,15</p>",
            "<b>C.</b> <p>20,19,18,16,15,12,11,10</p>",
            "<b>D.</b> <p>19,16,18,20,11,12,10,15</p>"
          ],
          "correct_answer": "<b>B.</b> <p>11,12,10,16,19,18,20,15</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333226/gate2020-cs-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Let T be a full binary tree with 8 leaves. (A full binary tree has every level full.) Suppose two leaves a and b of T are chosen uniformly and independently at random. The expected value of the distance between a and b in T (i.e., the number of edges in the unique path between a and b) is (rounded off to 2 decimal places) ___________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4.25",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302802/gate2019-cs-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
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
        }
      ]
    }
  ]
});
