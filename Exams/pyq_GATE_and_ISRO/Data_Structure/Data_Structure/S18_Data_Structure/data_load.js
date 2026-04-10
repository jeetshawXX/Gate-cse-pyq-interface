window.__examLoadCallback({
  "title": "Data_Structure - Data_Structure - Slot 18",
  "duration": 42,
  "sections": [
    {
      "name": "Data_Structure",
      "questions": [
        {
          "id": 1,
          "question": "<p>Which of the following is correct? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>B-trees are for storing data on disk and \\(B^+\\) trees are for main memory.</p>",
            "<b>B.</b> <p>Range queries are faster on \\(B^+\\) trees.</p>",
            "<b>C.</b> <p>B-trees are for primary indexes and \\(B^+\\) trees are for secondary indexes.</p>",
            "<b>D.</b> <p>The height of a \\(B^+\\) tree is independent of the number of records.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Range queries are faster on \\(B^+\\) trees.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1478/gate1999-1-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Suppose we want to arrange the n numbers stored in any array such that all negative values occur before all positive ones. Minimum number of exchanges required in the worst case is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n-1</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>n+1</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1466/gate1999-1-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let A be a two dimensional array declared as follows:<br><pre><code> A: array [1 ... 10] [1 ... 15] of integer;</code></pre>\nAssuming that each integer takes one memory location, the array is stored in row-major order and the first element of the array is stored at location 100, what is the address of the element A[i][j]? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15i+j+84</p>",
            "<b>B.</b> <p>15j+i+84</p>",
            "<b>C.</b> <p>10i+j+89</p>",
            "<b>D.</b> <p>10j+i+89</p>"
          ],
          "correct_answer": "<b>A.</b> <p>15i+j+84</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1686/gate1998-2-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A complete n-ary tree is one in which every node has 0 or n sons. If x is the number of internal nodes of a complete n-ary tree, the number of leaves in it is given by <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x(n-1)+1</p>",
            "<b>B.</b> <p>xn-1</p>",
            "<b>C.</b> <p>xn+1</p>",
            "<b>D.</b> <p>x(n+1)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>x(n-1)+1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1683/gate1998-2-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which of the following statements is false? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A tree with a n nodes has (n- 1) edges</p>",
            "<b>B.</b> <p>A labeled rooted binary tree can be uniquely constructed given its postorder and preorder traversal results.</p>",
            "<b>C.</b> <p>A complete binary tree with n internal nodes has (n + 1) leaves.</p>",
            "<b>D.</b> <p>The maximum number of nodes in a binary tree of height h is \\(2^{h+1} - 1\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A labeled rooted binary tree can be uniquely constructed given its postorder and preorder traversal results.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1661/gate1998-1-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A priority queue Q is used to implement a stack that stores characters. PUSH (C) is implemented as INSERT\n(Q,C,K) where K is an appropriate integer key chosen by the implementation. POP is implemented as DELETEMIN (Q). For a sequence of operations, the keys chosen are in <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>non-increasing order</p>",
            "<b>B.</b> <p>non-decreasing order</p>",
            "<b>C.</b> <p>strictly increasing order</p>",
            "<b>D.</b> <p>strictly decreasing order</p>"
          ],
          "correct_answer": "<b>D.</b> <p>strictly decreasing order</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2248/gate1997-4-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A binary search tree contains the value 1,2,3,4,5,6,7,8. The tree is traversed in pre-order and the values are printed out. Which of the following sequences is a valid output? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5 3 1 2 4 7 8 6</p>",
            "<b>B.</b> <p>5 3 1 2 6 4 8 7</p>",
            "<b>C.</b> <p>5 3 2 4 1 6 7 8</p>",
            "<b>D.</b> <p>5 3 1 2 4 7 6 8</p>"
          ],
          "correct_answer": "<b>D.</b> <p>5 3 1 2 4 7 6 8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2246/gate1997-4-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which of the following is essential for converting an infix expression to the postfix form efficiently? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An operator stack</p>",
            "<b>B.</b> <p>An operand stack</p>",
            "<b>C.</b> <p>An operand stack and an operator stack</p>",
            "<b>D.</b> <p>A parse tree</p>"
          ],
          "correct_answer": "<b>A.</b> <p>An operator stack</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2223/gate1997-1-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>A binary search tree is generated by inserting in order the following integers: <br>\n50,15,62,5,20,58,91,3,8,37,60,24<br>\nThe number of nodes in the left subtree and right subtree of the root respectively is <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(4,7)</p>",
            "<b>B.</b> <p>(7,4)</p>",
            "<b>C.</b> <p>(8,3)</p>",
            "<b>D.</b> <p>(3,8)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(7,4)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2743/gate1996-2-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The average number of key comparisons required for a successful search for sequential search on n items is <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\frac{n}{2}\\)</p>",
            "<b>B.</b> <p>\\(\\frac{n-1}{2}\\)</p>",
            "<b>C.</b> <p>\\(\\frac{n+1}{2}\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\frac{n+1}{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2742/gate1996-2-13-isro2016-28\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
          "question": "<p>Which of the following sequences denotes the post order traversal sequence of the below tree?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q1.15_70f4e3da.jpg\"><br> <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>fegcdba</p>",
            "<b>B.</b> <p>gcbdafe</p>",
            "<b>C.</b> <p>gcdbfea</p>",
            "<b>D.</b> <p>fedgcba</p>"
          ],
          "correct_answer": "<b>C.</b> <p>gcdbfea</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2719/gate1996-1-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>In the balanced binary tree in the below figure, how many nodes will become unbalanced when a node is inserted as a child of the node g?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q1.14_1d946d1f.jpg\"><br> <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2718/gate1996-1-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>An advantage of chained hash table (external hashing) over the open addressing scheme is <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Worst case complexity of search operations is less</p>",
            "<b>B.</b> <p>Space used is less</p>",
            "<b>C.</b> <p>Deletion is easier</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Deletion is easier</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2717/gate1996-1-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
