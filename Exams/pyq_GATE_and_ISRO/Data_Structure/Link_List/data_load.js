window.__examLoadCallback({
  "title": "Data_Structure - Link_List",
  "duration": 91,
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
        },
        {
          "id": 16,
          "question": "<p>The following steps in a linked list<br><pre><code>p = getnode() \ninfo(p) = 10 \nnext (p) = list \nlist = p</code></pre>\nresult in which type of operation? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Pop operation in stack</p>",
            "<b>B.</b> <p>Removal of a node</p>",
            "<b>C.</b> <p>Inserting a node</p>",
            "<b>D.</b> <p>Modifying an existing node</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Inserting a node</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43754/isro-2013-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>The following C function takes a simply-linked list as input argument. It modifies\nthe list by moving the last element to the front of the list and returns the\nmodified list. Some part of the code is left blank.<pre><code> typedef struct node {\n     int value;\n     struct node *next;\n} Node;\nNode *move_to_front(Node *head) { \n       Node *p, *q;\n       if ((head = = NULL: || (head-&gt;next = = NULL)) return head;\n       q = NULL; p = head;\n       while (p-&gt; next !=NULL) {\n                         q=P; \n                         p=p-&gt;next;\n}\n_______________________________\nreturn head;\n} </code></pre>\nChoose the correct alternative to replace the blank line. <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>q = NULL; p\\(\\rightarrow\\)next = head; head = p;</p>",
            "<b>B.</b> <p>q\\(\\rightarrow\\)next = NULL; head = p; p\\(\\rightarrow\\)next = head;</p>",
            "<b>C.</b> <p>head = p; p\\(\\rightarrow\\)next = q; q\\(\\rightarrow\\)next = NULL;</p>",
            "<b>D.</b> <p>q\\(\\rightarrow\\)next = NULL; p\\(\\rightarrow\\)next = head; head = p;</p>"
          ],
          "correct_answer": "<b>D.</b> <p>q\\(\\rightarrow\\)next = NULL; p\\(\\rightarrow\\)next = head; head = p;</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2337/gate2010-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>The minimum number of fields with each node of doubly linked list is <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17245/isro2008-76\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Which of the following operations is performed more efficiently by doubly linked list than by linear linked list? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Deleting a node whose location is given</p>",
            "<b>B.</b> <p>Searching an unsorted list for a given item</p>",
            "<b>C.</b> <p>Inserting a node after the node with a given location</p>",
            "<b>D.</b> <p>Traversing the list to process each node</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Deleting a node whose location is given</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50141/isro2008-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>The time required to search an element in a linked list of length n is <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(\\log_2 n)\\)</p>",
            "<b>B.</b> <p>O(n)</p>",
            "<b>C.</b> <p>O(1)</p>",
            "<b>D.</b> <p>\\(O(n^2)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50139/isro2008-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>The following C function takes a single-linked list of integers as a parameter and\nrearranges the elements of the list. The function is called with the list containing\nthe integers 1,2,3,4,5,6,7 in the given order. What will be the contents of the list\nafter the function completes execution?<pre><code> struct node {\n   int value;\n   struct node *next;\n};\nVoid rearrange(struct node *list) {\n   struct node *p, * q;\n   int temp;\n   if(!list|| !list-&gt; next) return;\n   p=list; q=list-&gt;next;\n   while(q)\n  {\n     temp = p-&gt;value;\n     p-&gt;value = q-&gt;value;\n     q-&gt;value = temp;\n     p = q-&gt;next;\n     q = p?p-&gt;next:0;\n  }\n}  </code></pre> <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1,2,3,4,5,6,7</p>",
            "<b>B.</b> <p>2,1,4,3,6,5,7</p>",
            "<b>C.</b> <p>1,3,2,5,4,7,6</p>",
            "<b>D.</b> <p>2,3,4,5,6,7,1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2,1,4,3,6,5,7</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/485/gate2008-62#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>The following C function takes a singly-linked list of integers as a parameter and rearranges the elements of the list. The list is represented as pointer to a structure. The function is called with the list containing the integers 1,2,3,4,5,6,7 in the given order. What will be the contents of the list after the function completes execution? <br><pre><code> struct node {int value; struct node *next;);\nvoid rearrange (struct node *list) {\n    struct node *p, *q;\n    int temp;\n    if (!list || !list -&gt; next) return;\n    p = list; q = list -&gt; next;\n    while (q) {\n        temp = p -&gt; value;\n        p -&gt; value = q -&gt; value;\n        q -&gt; value = temp;\n        p = q -&gt; next;\n        q = p ? p -&gt; next : 0;\n      }\n}</code></pre> <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1,2,3,4,5,6,7</p>",
            "<b>B.</b> <p>2,1,4,3,6,5,7</p>",
            "<b>C.</b> <p>1,3,2,5,4,7,6</p>",
            "<b>D.</b> <p>2,3,4,5,6,7,1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2,1,4,3,6,5,7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3815/gate2005-it-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Suppose there are \\(\\left \\lceil log n \\right \\rceil\\) sorted lists of \\(\\left \\lfloor n/log n \\right \\rfloor\\) elements each. The time complexity of producing a\nsorted list of all these elements is: (Hint: Use a heap data structure) <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n log log n)</p>",
            "<b>B.</b> <p>\\(\\theta\\) (n log n)</p>",
            "<b>C.</b> <p>\\(\\Omega\\) (n log n)</p>",
            "<b>D.</b> <p>\\(\\Omega (n^{\\frac{3}{2}})\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>O(n log log n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/784/gate2005-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Let P be a singly linked list. Let Q be the pointer to an intermediate node x in the list. What is the worst-case time complexity of the best-known algorithm to delete the node x from the list ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n)\\)</p>",
            "<b>B.</b> <p>\\(O(\\log^2 n)\\)</p>",
            "<b>C.</b> <p>\\(O(\\log n)\\)</p>",
            "<b>D.</b> <p>\\(O(1)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(O(n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3654/gate2004-it-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Suppose each set is represented as a linked list with elements in arbitray order. Which of the\noperations among union, intersection, membership, cardinality will be the slowest? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>union only</p>",
            "<b>B.</b> <p>intersection, membership</p>",
            "<b>C.</b> <p>membership, cardinality</p>",
            "<b>D.</b> <p>union, intersection</p>"
          ],
          "correct_answer": "<b>D.</b> <p>union, intersection</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1037/gate2004-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>A circularly linked list is used to represent a Queue. A single variable p is used to access the Queue.\nTo which node should p point such that both the operations enQueue and deQueue can be performed\nin constant time? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Link_List\\q36_67f03162.jpg\"> <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>rear node</p>",
            "<b>B.</b> <p>not possible with a single pointer</p>",
            "<b>C.</b> <p>front node</p>",
            "<b>D.</b> <p>node next to front</p>"
          ],
          "correct_answer": "<b>A.</b> <p>rear node</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1033/gate2004-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Consider the function f defined below.<pre><code>\nstruct item\n{\n    int data;\n    struct item * next;\n};\nint f(struct item *p)\n{\n    return ((p == NULL) || (p-&gt;next == NULL) ||\n            ((P-&gt;data &lt;= p-&gt;next-&gt;data) &amp;&amp;\n            f(p-&gt;next)));\n}</code></pre>\nFor a given linked list p, the function f returns 1 if and only if <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the list is empty or has exactly one element</p>",
            "<b>B.</b> <p>the elements in the list are sorted in non-decreasing order of data value</p>",
            "<b>C.</b> <p>the elements in the list are sorted in non-increasing order of data value</p>",
            "<b>D.</b> <p>not all elements in the list have the same data value</p>"
          ],
          "correct_answer": "<b>B.</b> <p>the elements in the list are sorted in non-decreasing order of data value</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/973/gate2003-90#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>In the worst case, the number of comparisons needed to search a single linked list\nof length n for a given element is <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>log n</p>",
            "<b>B.</b> <p>n/2</p>",
            "<b>C.</b> <p>\\(log_{2}^{n}-1\\)</p>",
            "<b>D.</b> <p>n</p>"
          ],
          "correct_answer": "<b>D.</b> <p>n</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/809/gate2002-1-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>The concatenation of two lists is to be performed on O(1) time. Which of the following implementations of a list should be used? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Singly linked list</p>",
            "<b>B.</b> <p>Doubly linked list</p>",
            "<b>C.</b> <p>Circular doubly linked list</p>",
            "<b>D.</b> <p>Array implementation of list</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Circular doubly linked list</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2220/gate1997-1-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>Which of the following statements is true?<br>\nI. As the number of entries in a hash table increases, the number of collisions increases.<br>\nII. Recursive programs are efficient<br>\nIII. The worst case complexity for Quicksort is \\(O(n^2)\\)<br>\nIV. Binary search using a linear linked list is efficient<br> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II</p>",
            "<b>B.</b> <p>II and III</p>",
            "<b>C.</b> <p>I and IV</p>",
            "<b>D.</b> <p>I and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2634/gate1995-2-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>For merging two sorted lists of sizes \\(m\\) and \\(n\\) into a sorted list of size \\(m+n\\), we require comparisons of <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(m)\\)</p>",
            "<b>B.</b> <p>\\(O(n)\\)</p>",
            "<b>C.</b> <p>\\(O(m+n)\\)</p>",
            "<b>D.</b> <p>\\(O(\\log m + \\log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(O(m+n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2603/gate1995-1-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Linked lists are not suitable data structures for which one of the following problems? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Insertion sort</p>",
            "<b>B.</b> <p>Binary search</p>",
            "<b>C.</b> <p>Radix sort</p>",
            "<b>D.</b> <p>Polynomial manipulation</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Binary search</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2460/gate1994-1-17-ugcnet-sep2013-ii-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>In a circular linked list oraganisation, insertion of a record involves modification of <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>One pointer.</p>",
            "<b>B.</b> <p>Two pointers.</p>",
            "<b>C.</b> <p>Multiple pointers.</p>",
            "<b>D.</b> <p>No pointer.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Two pointers.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80298/gate1987-1-xv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
