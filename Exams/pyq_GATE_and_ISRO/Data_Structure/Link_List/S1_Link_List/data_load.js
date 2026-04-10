window.__examLoadCallback({
  "title": "Link_List - Link_List - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Link_List",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Let LIST be a datatype for an implementation of linked list defined as follows:<pre><code>\ntypedef struct list {  \n    int data;  \n    struct list *next;  \n} LIST;  \n</code></pre>\nSuppose the program has created two linked lists, L1 and L2,  whose contents are given\nin the figure below (code for creating L1 and L2 is not provided here). L1 contains 9\nnodes, and L2 contains 7 nodes.<br><br>\nConsider the following C program segment that modifies the list L1. The number of nodes in L1 after the execution of the code segment is _________. (Answer in integer) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Link_List\\q52_f6797a26.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460028/gate-cse-2025-set-1-question-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let SLLdel be a function that deletes a node in a singly-linked list given a pointer\nto the node and a pointer to the head of the list. Similarly, let DLLdel be another\nfunction that deletes a node in a doubly-linked list given a pointer to the node and\na pointer to the head of the list.<br>\nLet n denote the number of nodes in each of the linked lists. Which one of the\nfollowing choices is TRUE about the worst-case time complexity of SLLdel and\nDLLdel? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SLLdel is O(1) and DLLdel is O(n)</p>",
            "<b>B.</b> <p>Both SLLdel and DLLdel are O(log(n))</p>",
            "<b>C.</b> <p>Both SLLdel and DLLdel are O(1)</p>",
            "<b>D.</b> <p>SLLdel is O(n) and DLLdel is O(1)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>SLLdel is O(n) and DLLdel is O(1)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399309/gate-cse-2023-question-3#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the problem of reversing a singly linked list. To take an example, given the linked list below,<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Link_List\\q5a_ceb02b72.jpg\"><br>the reversed linked list should look like   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Link_List\\q5b_221e4ca2.jpg\"><br>   Which one of the following statements is TRUE about the time complexity of algorithms that solve the above problem in O(1) space? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The best algorithm for the problem takes \\(\\theta(n)\\) time in the worst case.</p>",
            "<b>B.</b> <p>The best algorithm for the problem takes \\(\\theta(n \\log n)\\) time in the worst case.</p>",
            "<b>C.</b> <p>The best algorithm for the problem takes \\(\\theta(n^2)\\) time in the worst case.</p>",
            "<b>D.</b> <p>It is not possible to reverse a singly linked list in O(1) space.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The best algorithm for the problem takes \\(\\theta(n)\\) time in the worst case.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371931/Gate-cse-2022-question-5#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following ANSI C program:<pre><code>#include &lt; stdio.h &gt;\n\n#include &lt; stdlib.h &gt;\n\nstruct Node{\n        int value;\n        struct Node *next;};\nint main( ) {\n    struct Node *boxE, *head, *boxN; int index=0;\n    boxE=head= (struct Node *) malloc(sizeof(struct Node));\n    head -&gt; value = index;\n    for (index =1; index &lt; = 3; index++){\n        boxN = (struct Node *) malloc (sizeof(struct Node));\n        boxE -&gt; next = boxN;\n        boxN -&gt; value = index;\n        boxE = boxN; }\nfor (index=0; index &lt; = 3; index++) {\n    printf(\"Value at index %d is %d\\n\", index, head -&gt; value);\n    head = head -&gt; next;\n    printf(\"Value at index %d is %d\\n\", index+1, head -&gt; value); } } </code></pre>Which one of the following statements below is correct about the program? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Upon execution, the program creates a linked-list of five nodes</p>",
            "<b>B.</b> <p>Upon execution, the program goes into an infinite loop</p>",
            "<b>C.</b> <p>It has a missing returnreturn which will be reported as an error by the compiler</p>",
            "<b>D.</b> <p>It dereferences an uninitialized pointer that may result in a run-time error</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It dereferences an uninitialized pointer that may result in a run-time error</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357505/gate-cse-2021-set-2-question-35#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
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
          "id": 7,
          "question": "<p>A doubly linked list is declared as:<br><pre><code> struct Node {\n    int Value;\n    struct Node *Fwd;\n    struct Node *Bwd;\n};</code></pre>Where Fwd and Bwd represent forward and backward link to the adjacent elements of the list. Which of the following segment of code deletes the node pointed to by X from the doubly linked list, if it is assumed that X points to neither the first nor the last node of the list? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(X \\rightarrow \\text { Bwd } \\rightarrow \\text { Fwd }=X \\rightarrow \\text { Fwd; } X \\rightarrow F w d \\rightarrow { Bwd }=X \\rightarrow { Bwd; }\\)</p>",
            "<b>B.</b> <p>\\(X \\rightarrow \\text { Bwd.Fwd }=X \\rightarrow \\text { Fwd; } X . \\text { Fwd } \\rightarrow \\text { Bwd }=X \\rightarrow \\text { Bwd; }\\)</p>",
            "<b>C.</b> <p>\\(X . \\text { Bwd } \\rightarrow \\text { Fwd }=X . \\text { Bwd; } x \\rightarrow { Fwd.Bwd }=X . B w d\\)</p>",
            "<b>D.</b> <p>\\(X \\rightarrow \\text { Bwd } \\rightarrow \\text { Fwd }=X \\rightarrow \\text { Bwd; } X \\rightarrow \\text{ Fwd } \\rightarrow \\text { Bwd }=X \\rightarrow \\text { Fwd; }\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(X \\rightarrow \\text { Bwd } \\rightarrow \\text { Fwd }=X \\rightarrow \\text { Fwd; } X \\rightarrow F w d \\rightarrow { Bwd }=X \\rightarrow { Bwd; }\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213509/isro2018-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider a singly linked list of the form where F is a pointer to the first element in the linked list and L is the pointer to the last element in the list. The time of which of the following operations depends on the length of the list?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Link_List\\q63_6b78c2e6.jpg\"><br> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Delete the last element of the list</p>",
            "<b>B.</b> <p>Delete the first element of the list</p>",
            "<b>C.</b> <p>Add an element after the last element of the list</p>",
            "<b>D.</b> <p>Interchange the first two elements of the list</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Delete the last element of the list</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213525/isro2018-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>In a doubly linked list the number of pointers affected for an insertion operation will be <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>0</p>",
            "<b>C.</b> <p>1</p>",
            "<b>D.</b> <p>Depends on the nodes of doubly linked list</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Depends on the nodes of doubly linked list</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128485/isro2017-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Given two statements<br>Insertion of an element should be done at the last node of the circular list<br>Deletion of an element should be done at the last node of the circular list <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both are true</p>",
            "<b>B.</b> <p>Both are false</p>",
            "<b>C.</b> <p>First is false and second is true</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Both are false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128489/isro2017-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the C code fragment given below.<pre><code>\ntypedef struct node {\nint data;\nnode* next ;\n} node;\nvoid join (node* m, node* n) {\nnode* p=n ;\nwhile (p-&gt;next ! =NULL){\np = p -&gt; next ;\n}\np-&gt; next = m;\n}</code></pre>\nAssuming that m and n point to valid NULL- terminated linked lists, invocation of join will <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>append list m to the end of list n for all inputs.</p>",
            "<b>B.</b> <p>either cause a null pointer dereference or append list m to the end of list n.</p>",
            "<b>C.</b> <p>cause a null pointer dereference for all inputs.</p>",
            "<b>D.</b> <p>append list n to the end of list m for all inputs.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>either cause a null pointer dereference or append list m to the end of list n.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118711/gate2017-1-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>N items are stored in a sorted doubly linked list. For a delete operation, a pointer is provided to the record to be deleted. For a decrease-key operation, a pointer is provided to the record on which the operation is to be performed. <br> An algorithm performs the following operations on the list in this order: \\(\\Theta(N) \\; delete \\) , \\(  O(logN) \\;  insert \\), \\( O(logN) \\; find \\),  and \\( \\Theta(N) \\; decrease-key\\). What is the time complexity of all these operations put together? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(log^{2}N)\\)</p>",
            "<b>B.</b> <p>O(N)</p>",
            "<b>C.</b> <p>\\(O(N^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (N^{2} logN)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(O(N^{2})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39557/gate2016-2-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>An unordered list contains n distinct elements. The number of comparisons to find an element in this list that is neither maximum nor minimum is <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n log n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (log n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (1)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta (1)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8113/gate2015-2-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>An algorithm performs \\((log N)^{1/2}\\) find operations, \\(N\\)  insert operations, \\((log N)^{1/2}\\) delete operations, and \\((log N)^{1/2}\\) decrease-key operations on a set of data items with keys drawn from a linearly ordered set. For a delete operation, a pointer is provided to the record that must be deleted. For the decrease-key operation, a pointer is provided to the record that has its key decreased. Which one of the following data structures is the most suited for the algorithm to use, if the goal is to achieve the best total asymptotic complexity considering all the operations? <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Unsorted array</p>",
            "<b>B.</b> <p>Min-heap</p>",
            "<b>C.</b> <p>Sorted array</p>",
            "<b>D.</b> <p>Sorted doubly linked list</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Unsorted array</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8299/gate2015-1-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a single linked list where F and L are pointers to the first and last elements respectively of the linked list. The time for performing which of the given operations depends on the length of the linked list?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Link_List\\q49_5ae2437e.jpg\"><br> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Delete the first element of the list</p>",
            "<b>B.</b> <p>Interchange the first two elements of the list</p>",
            "<b>C.</b> <p>Delete the last element of the list</p>",
            "<b>D.</b> <p>Add an element at the end of the list</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Delete the last element of the list</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/54985/isro2014-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
