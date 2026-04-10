window.__examLoadCallback({
  "title": "Data_Structure - Data_Structure - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Data_Structure",
      "questions": [
        {
          "id": 1,
          "question": "<p>In a \\(B^+\\) -tree where each node can hold at most four key values, a root to leaf path consists of the following nodes: <br><br>\n\\( A = (49, 77, 83, -), \\, B = (7, 19, 33, 44), \\, C = (20*, 22*, 25*, 26*) \\)<br><br>\nThe *-marked keys signify that these are data entries in a leaf. <br><br>Assume that a pointer between keys \\(k_1\\) and \\(k_2\\) points to a subtree containing keys in \\([k_1, k_2)\\), and that when a leaf is created, the smallest key in it is copied up into its parent. <br><br>A record with key value 23 is inserted into the \\(B^+\\) -tree. <br><br>The smallest key value in the parent of the leaf that contains 25* is __________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "33",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460846/gate-cse-2025-set-2-question-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider a stack data structure into which we can PUSH and POP records. Assume that each record pushed in the stack has a positive integer key and that all keys are distinct.  <br>\nWe wish to augment the stack data structure with an \\(O(1) \\) time MIN operation that returns a pointer to the record with the smallest key present in the stack  <br><br>\n1) without deleting the corresponding record, and  <br>\n2) without increasing the complexities of the standard stack operations.  <br><br>\nWhich one or more of the following approach(es) can achieve it? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Keep with every record in the stack, a pointer to the record with the smallest key below it.</p>",
            "<b>B.</b> <p>Keep a pointer to the record with the smallest key in the stack.</p>",
            "<b>C.</b> <p>Keep an auxiliary array in which the key values of the records in the stack are maintained in sorted order.</p>",
            "<b>D.</b> <p>Keep a Min-Heap in which the key values of the records in the stack are maintained.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Keep with every record in the stack, a pointer to the record with the smallest key below it.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460800/gate-cse-2025-set-2-question-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>An array \\(A \\) of length \\(n \\) with distinct elements is said to be bitonic if there is an index \\(1 \\leq i \\leq n \\) such that \\(A[1..i] \\) is sorted in the non-decreasing order and \\(A[i+1..n] \\) is sorted in the non-increasing order.  <br>\nWhich ONE of the following represents the best possible asymptotic bound for the worst-case number of comparisons by an algorithm that searches for an element in a bitonic array \\(A \\)? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta(n) \\)</p>",
            "<b>B.</b> <p>\\(\\Theta(1) \\)</p>",
            "<b>C.</b> <p>\\(\\Theta(\\log ^2 n) \\)</p>",
            "<b>D.</b> <p>\\(\\Theta(\\log n) \\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta(\\log n) \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460804/gate-cse-2025-set-2-question-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
          "question": "<p>Suppose the values 10, -4, 15, 30, 20, 5, 60, 19 are inserted in that order into an initially empty binary search tree. Let \\(T \\) be the resulting binary search tree.\nThe number of edges in the path from the node containing 19 to the root node of \\(T \\) is ___________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460810/gate-cse-2025-set-2-question-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider an unordered list of \\(N \\) distinct integers.<br>\nWhat is the minimum number of element comparisons required to find an integer in the list that is NOT the largest in the list? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>\\(N - 1 \\)</p>",
            "<b>C.</b> <p>\\(N \\)</p>",
            "<b>D.</b> <p>\\(2N - 1 \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460825/gate-cse-2025-set-2-question-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider a binary tree \\(T \\) in which every node has either zero or two children. Let \\(n &gt; 0 \\) be the number of nodes in \\(T \\). <br>Which ONE of the following is the number of nodes in \\(T \\) that have exactly two children? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\frac{n -2}{2} \\)</p>",
            "<b>B.</b> <p>\\(\\frac{n - 1}{2} \\)</p>",
            "<b>C.</b> <p>\\(\\frac{n}{2} \\)</p>",
            "<b>D.</b> <p>\\(\\frac{n + 1}{2} \\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\frac{n - 1}{2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460832/gate-cse-2025-set-2-question-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>In a double hashing scheme, \\( h_1(k) = k \\mod 11 \\) and \\( h_2(k) = 1 + (k \\mod 7) \\) are the auxiliary hash functions. The size \\( m \\) of the hash table is 11. The hash function for the \\( i \\)-th probe in the open address table is  \\(\n[h_1(k) + i h_2(k)] \\mod m \\)\nThe following keys are inserted in the given order: 63, 50, 25, 79, 67, 24.\n<br><br>\nThe slot at which key 24 gets stored is _________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460025/gate-cse-2025-set-1-question-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let LIST be a datatype for an implementation of linked list defined as follows:<pre><code>\ntypedef struct list {  \n    int data;  \n    struct list *next;  \n} LIST;  \n</code></pre>\nSuppose the program has created two linked lists, L1 and L2,  whose contents are given\nin the figure below (code for creating L1 and L2 is not provided here). L1 contains 9\nnodes, and L2 contains 7 nodes.<br><br>\nConsider the following C program segment that modifies the list L1. The number of nodes in L1 after the execution of the code segment is _________. (Answer in integer) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q52_f6797a26.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460028/gate-cse-2025-set-1-question-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>The height of any rooted tree is defined as the maximum number of edges in the path from the root node to any leaf node. Suppose a Min-Heap \\(T\\) stores 32 keys. The height of \\(T\\) is _____________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460055/gate-cse-2025-set-1-question-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following statement(s) is/are TRUE for any binary search tree (BST) having \\(n\\) distinct integers? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The maximum length of a path from the root node to any other node is \\((n - 1)\\).</p>",
            "<b>B.</b> <p>An inorder traversal will always produce a sorted sequence of elements.</p>",
            "<b>C.</b> <p>Finding an element takes \\(O(\\log_2 n)\\) time in the worst case.</p>",
            "<b>D.</b> <p>Every BST is also a Min-Heap.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>The maximum length of a path from the root node to any other node is \\((n - 1)\\).</p>",
            "<b>B.</b> <p>An inorder traversal will always produce a sorted sequence of elements.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460064/gate-cse-2025-set-1-question-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following \\(B^+\\) tree with 5 nodes, in which a node can store at most 3 key values. The value 23 is now inserted in the \\(B^+\\) tree. Which of the following options(s) is/are CORRECT? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q11_d7479bce.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>None of the nodes will split.</p>",
            "<b>B.</b> <p>At least one node will split and redistribute.</p>",
            "<b>C.</b> <p>The total number of nodes will remain same.</p>",
            "<b>D.</b> <p>The height of the tree will increase.</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>At least one node will split and redistribute.</p>",
            "<b>D.</b> <p>The height of the tree will increase.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460069/gate-cse-2025-set-1-question-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Let S1 and S2 be two stacks. S1 has capacity of 4 elements. S2 has capacity of\n2 elements. S1 already has 4 elements: 100, 200, 300, and 400, whereas S2 is\nempty, as shown below.<br><br>\n\\(\n\\begin{array}{|c|}\n\\hline  400 (Top)  \\\\\n\\hline  300 \\\\\n\\hline  200\\\\\n\\hline  100 \\\\\n\\hline\n\\end{array}\\)<br>Stack S1\n<br>\n<br>\n\\(\n\\begin{array}{|c|}\n\\hline    \\\\\n\\hline    \\\\\n\\hline\n\\end{array}\\)<br>Stack S2\n<br><br>\nOnly the following three operations are available:<br>\n<br>PushToS2: Pop the top element from S1 and push it on S2.\n<br>PushToS1: Pop the top element from S2 and push it on S1.\n<br>GenerateOutput: Pop the top element from S1 and output it to the\nuser.<br><br>\nNote that the pop operation is not allowed on an empty stack and the push operation\nis not allowed on a full stack.\n<br><br>Which of the following output sequences can be generated by using the above\noperations? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100, 200, 400, 300</p>",
            "<b>B.</b> <p>200, 300, 400, 100</p>",
            "<b>C.</b> <p>400, 200, 100, 300</p>",
            "<b>D.</b> <p>300, 200, 400, 100</p>"
          ],
          "correct_answer": "<b>B.</b> <p>200, 300, 400, 100</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422859/gate-cse-2024-set-2-question-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>You are given a set \\(V\\) of distinct integers. A binary search tree \\(T\\) is created by\ninserting all elements of \\(V\\) one by one, starting with an empty tree. The tree \\(T\\)\nfollows the convention that, at each node, all values stored in the left subtree of the\nnode are smaller than the value stored at the node. You are not aware of the sequence\nin which these values were inserted into \\(T\\), and you do not have access to \\(T\\).<br>\nWhich one of the following statements is TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Inorder traversal of \\(T\\) can be determined from \\(V\\)</p>",
            "<b>B.</b> <p>Root node of \\(T\\) can be determined from \\(V\\)</p>",
            "<b>C.</b> <p>Preorder traversal of \\(T\\) can be determined from \\(V\\)</p>",
            "<b>D.</b> <p>Postorder traversal of \\(T\\) can be determined from \\(V\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Inorder traversal of \\(T\\) can be determined from \\(V\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422868/gate-cse-2024-set-2-question-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Let \\( A \\) be an array containing integer values. The distance of \\( A \\) is defined as the minimum number of elements in \\( A \\) that must be replaced with another integer so that the resulting array is sorted in non-decreasing order. The distance of the array \\( [2,5,3,1,4,2,6] \\) is _____ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422872/gate-cse-2024-set-2-question-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
