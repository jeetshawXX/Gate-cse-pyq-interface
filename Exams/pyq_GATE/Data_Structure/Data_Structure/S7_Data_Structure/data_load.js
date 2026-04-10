window.__examLoadCallback({
  "title": "Data_Structure - Data_Structure - Slot 7",
  "duration": 42,
  "sections": [
    {
      "name": "Data_Structure",
      "questions": [
        {
          "id": 1,
          "question": "<p>Suppose a circular queue of capacity (n-1) elements is implemented with an array of n elements.\nAssume that the insertion and deletion operations are carried out using REAR and FRONT as array\nindex variables, respectively. Initially, REAR = FRONT = 0. The conditions to detect queue full\nand queue empty are <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>full: (REAR+1) mod n == FRONT <br>\nempty: REAR == FRONT</p>",
            "<b>B.</b> <p>full: (REAR+1) mod n == FRONT <br>\nempty: (FRONT+1) mod n == REAR</p>",
            "<b>C.</b> <p>full: REAR == FRONT <br>\nempty: (REAR+1) mod n == FRONT</p>",
            "<b>D.</b> <p>full: (FRONT+1) mod n == REAR <br>\nempty: REAR == FRONT</p>"
          ],
          "correct_answer": "<b>A.</b> <p>full: (REAR+1) mod n == FRONT <br>\nempty: REAR == FRONT</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1756/gate2012-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>The worst case running time to search for an element in a balanced binary search tree with \\(n2^{n}\\) elements is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n log n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta n2^{n}\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37/gate2012-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>We are given a set of n distinct elements and an unlabeled binary tree with n\nnodes. In how many ways can we populate the tree with the given set so that it\nbecomes a binary search tree? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>n!</p>",
            "<b>D.</b> <p>\\( \\frac{1} {n+1} .^{2n}C_n\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2131/gate2011-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A max-heap is a heap where the value of each parent is greater than or equal to\nthe value of its children. Which of the following is a max-heap? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q11_df3f1168.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
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
          "id": 5,
          "question": "<p>A hash table of length 10 uses open addressing with hash function h(k)=k mod 10, and linear probing. After inserting 6 values into an empty hash table,\nthe table is as shown below<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q52_6208e194.jpg\"><br>How many different insertion sequences of the key values using the same hash\nfunction and linear probing will result in the hash table shown above? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>20</p>",
            "<b>C.</b> <p>30</p>",
            "<b>D.</b> <p>40</p>"
          ],
          "correct_answer": "<b>C.</b> <p>30</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43327/gate2010-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A hash table of length 10 uses open addressing with hash function h(k)=k mod 10, and linear probing. After inserting 6 values into an empty hash table,\nthe table is as shown below<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q52_6208e194.jpg\"><br>\nWhich one of the following choices gives a possible order in which the key values\ncould have been inserted in the table? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>46, 42, 34, 52, 23, 33</p>",
            "<b>B.</b> <p>34, 42, 23, 52, 33, 46</p>",
            "<b>C.</b> <p>46, 34, 42, 23, 52, 33</p>",
            "<b>D.</b> <p>42, 46, 33, 23, 34, 52</p>"
          ],
          "correct_answer": "<b>C.</b> <p>46, 34, 42, 23, 52, 33</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2360/gate2010-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider a B+-tree in which the maximum number of keys in a node is 5. What is\nthe minimum number of keys in any non-root node? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2191/gate2010-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>In a binary tree with n nodes, every node has an odd number of descendants.\nEvery node is considered to be its own descendant. What is the number of nodes\nin the tree that have exactly one child? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>(n-1)/2</p>",
            "<b>D.</b> <p>n-1</p>"
          ],
          "correct_answer": "<b>A.</b> <p>0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2183/gate2010-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
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
          "id": 11,
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
          "id": 12,
          "question": "<p>The following key values are inserted into a B+  tree in which order of the internal nodes is 3, and that of the leaf nodes is 2, in the sequence given below. The order of internal nodes is the maximum number of tree pointers in each node, and the order of leaf nodes is the maximum number of data items that can be stored in it. The B+ - tree is initially empty. <br><br>\n10, 3, 6, 8, 4, 2, 1 <br><br>\nThe maximum number of times leaf nodes would get split up as a result of these insertions is <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1330/gate2009-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>What is the maximum height of any AVL-tree with 7 nodes? Assume that the height of a tree with a single node is 0. <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1323/gate2009-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The keys 12, 18, 13, 2, 3, 23, 5 and 15 are inserted into an initially empty hash table of length 10 using open addressing with hash function h(k) = k mod 10 and linear probing. What is the resultant hash table?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q36_a0accceb.jpg\"> <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1322/gate2009-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A binary tree with n&gt;1 nodes has \\(n_{1}\\), \\(n_{2}\\) and \\(n_{3}\\) nodes of degree one, two and three respectively. The degree of a node is defined as the number of its neighbors.<br>Starting with the above tree, while there remains a node v of degree two in the tree, add an edge between the two neighbors of v and then remove v from the tree. How many edges will remain at the end of the process? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2 * n_{1}-3\\)</p>",
            "<b>B.</b> <p>\\(n_{2}+2 * n_{1}-2\\)</p>",
            "<b>C.</b> <p>\\(n_{3}-n_{2}\\)</p>",
            "<b>D.</b> <p>\\(n_{2}+n_{1}-2\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(2 * n_{1}-3\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3391/gate2008-it-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
