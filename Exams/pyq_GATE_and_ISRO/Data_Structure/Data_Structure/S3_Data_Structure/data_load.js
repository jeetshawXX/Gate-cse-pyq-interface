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
          "question": "<p>A stack is implemented with an array of \\({ }^{\\prime} A[0 \\ldots N-1]^{\\prime}\\) and a variable \\(\\text { 'pos'. }\\) The push and pop operations are defined by the following code.<br><pre><code> push (x)\n    A[pos] &lt;- x\n    pos &lt;- pos -1\nend push\npop()\n    pos &lt;- pos+1\n    return A[pos]\nend pop</code></pre><br>Which of the following will initialize an empty stack with capacity N for the above implementation? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\text { pos } \\leftarrow-1\\)</p>",
            "<b>B.</b> <p>\\(\\text { pos } \\leftarrow 0\\)</p>",
            "<b>C.</b> <p>\\(\\text { pos } \\leftarrow 1\\)</p>",
            "<b>D.</b> <p>\\(\\text { pos } \\leftarrow N-1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\text { pos } \\leftarrow N-1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331311/isro2020-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Of the following, which best approximates the ratio of the number of nonterminal nodes in the total number of nodes in a complete K-ary tree of depth N ? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1/N</p>",
            "<b>B.</b> <p>N-1/N</p>",
            "<b>C.</b> <p>1/K</p>",
            "<b>D.</b> <p>K-1/K</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1/K</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331348/isro2020-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>If an array A contains the items 10, 4, 7, 23, 67, 12 and 5 in that order, what will be the resultant array A after third pass of insertion sort? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>67,12,10,5,4,7,23</p>",
            "<b>B.</b> <p>4,7,10,23,67,12,5</p>",
            "<b>C.</b> <p>4,5,7,67,10,12,23</p>",
            "<b>D.</b> <p>10,7,4,67,23,12,5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4,7,10,23,67,12,5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331354/isro2020-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>In linear hashing, if blocking factor bfr, loading factor i and file buckets N are known, the number of records will be <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>r=i+bfr+N</p>",
            "<b>B.</b> <p>r=i-bfr-N</p>",
            "<b>C.</b> <p>r=i+bfr-N</p>",
            "<b>D.</b> <p>r=i*bfr*N</p>"
          ],
          "correct_answer": "<b>D.</b> <p>r=i*bfr*N</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331276/isro2020-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The post-order traversal of binary tree is ACEDBHIGF. The pre-order traversal is <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A B C D E F G H I</p>",
            "<b>B.</b> <p>F B A D C E G I H</p>",
            "<b>C.</b> <p>F A B C D E G H I</p>",
            "<b>D.</b> <p>A B D C E F G I H</p>"
          ],
          "correct_answer": "<b>B.</b> <p>F B A D C E G I H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331270/isro2020-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The minimum height of an AVL tree with n nodes is <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\text{Ceil } (\\log_2(n+1))\\)</p>",
            "<b>B.</b> <p>\\(1.44\\ \\log_2n\\)</p>",
            "<b>C.</b> <p>\\(\\text{Floor } (\\log_2(n+1))\\)</p>",
            "<b>D.</b> <p>\\(1.64\\ \\log_2n\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\text{Floor } (\\log_2(n+1))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331324/isro2020-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>What is the in-order successor of 15 in the given binary search tree?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Structure\\q19_f889341b.jpg\"><br> <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>18</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>17</p>",
            "<b>D.</b> <p>20</p>"
          ],
          "correct_answer": "<b>C.</b> <p>17</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331322/isro2020-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a 2-dimensional array x with 10 rows and 4 columns, with each element storing a value equivalent to the product of row number and column number. The array is stored in row-major format. If the first element x[0][0] occupies the memory location with address 1000 and each element occupies only one memory location, which all locations (in decimal) will be holding a value of 10? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(1018,1019\\)</p>",
            "<b>B.</b> <p>\\(1022,1041\\)</p>",
            "<b>C.</b> <p>\\(1017,1036\\)</p>",
            "<b>D.</b> <p>\\(1000,1399\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(1017,1036\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "Originally all Options are wrong. We have modified one option.<br><a href=\"https://gateoverflow.in/331475/isro2020-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
