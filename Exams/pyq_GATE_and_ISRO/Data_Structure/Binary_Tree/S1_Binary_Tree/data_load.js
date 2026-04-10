window.__examLoadCallback({
  "title": "Binary_Tree - Binary_Tree - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Binary_Tree",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider the C function foo and the binary tree shown.<br><pre><code>\ntypedef struct node {\n   int val;\n   struct node *left, *right;\n} node;\n\nint foo(node *p) {\n   int retval;\n   if (p == NULL)\n       return 0;\nelse {\n     retval = p-&gt;val + foo(p-&gt;left) + foo(p-&gt;right);\n     printf(\"%d \", retval);\n     return retval;\n     }\n}\n</code></pre><br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Binary_Tree\\q37_50aef616.jpg\"><br>When foo is called with a pointer to the root node of the given binary tree, what\nwill it print? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 8 5 13 11 10</p>",
            "<b>B.</b> <p>3 5 8 10 11 13</p>",
            "<b>C.</b> <p>3 8 16 13 24 50</p>",
            "<b>D.</b> <p>3 16 8 50 24 13</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3 8 16 13 24 50</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399274/gate-cse-2023-question-37#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a complete binary tree with 7 nodes. Let A denote the set of first 3 elements obtained by performing Breadth-First Search (BFS) starting from the root. Let B denote the set of first 3 elements obtained by performing Depth-First Search (DFS) starting from the root.<br><br>\nThe value of |A-B| is _____________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357524/gate-cse-2021-set-2-question-16#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
          "question": "<p>Let T be a full binary tree with 8 leaves. (A full binary tree has every level full.) Suppose two leaves a and b of T are chosen uniformly and independently at random. The expected value of the distance between a and b in T (i.e., the number of edges in the unique path between a and b) is (rounded off to 2 decimal places) ___________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4.25",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302802/gate2019-cs-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Binary_Tree\\q80_ad0455a8.jpg\"><br>Which traversals of Tree-1 and Tree-2, respectively, will produce the same sequence? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Preorder, postorder</p>",
            "<b>B.</b> <p>Postorder, inorder</p>",
            "<b>C.</b> <p>Postorder, preorder</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213508/isro2018-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The postorder traversal of a binary tree is 8,9,6,7,4,5,2,3,1. The inorder traversal of the same tree is 8,6,9,4,7,2,5,1,3. The height of a tree is the length of the longest path from the root to any leaf. The height of the binary tree above is ______. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204094/gate2018-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Binary_Tree\\q50_0b35423d.jpg\"><br>If the post order traversal gives ab -cd * + then the label of the nodes 1,2,3.. will be <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>+ , -, *, a,b,c,d</p>",
            "<b>B.</b> <p>a, -,b,+,c,*,d</p>",
            "<b>C.</b> <p>a,b,c,d,-,*,+</p>",
            "<b>D.</b> <p>-,a,b,+,*,c,d</p>"
          ],
          "correct_answer": "<b>A.</b> <p>+ , -, *, a,b,c,d</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128696/isro2017-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A complete binary tree with n non-leaf nodes contains <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\log_{2}n\\) nodes</p>",
            "<b>B.</b> <p>n+1  nodes</p>",
            "<b>C.</b> <p>2n nodes</p>",
            "<b>D.</b> <p>2n+1 nodes</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2n+1 nodes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55672/isro2016-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following New-order strategy for traversing a binary tree: <br>\nVisit the root; <br>\nVisit the right sub tree using New-order; <br>\nVisit the left sub tree using New-order; <br>\nThe New-order traversal of the expression tree corresponding to the reverse polish expression <br> 3  4 * 5 - 2 ^ 6 7 * 1 + - is given by: <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>+ - 1 6 7 * 2 ^ 5 - 3 4 *</p>",
            "<b>B.</b> <p>- + 1 * 7 6 ^ 2 - 5 * 4 3</p>",
            "<b>C.</b> <p>- + 1 * 6 7 ^ 2 - 5 * 3 4</p>",
            "<b>D.</b> <p>1 7 6 * + 2 5 4 3 * - ^ -</p>"
          ],
          "correct_answer": "<b>B.</b> <p>- + 1 * 7 6 ^ 2 - 5 * 4 3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39597/gate2016-2-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a binary tree T that has 200 leaf nodes. Then, the number of nodes in T that have exactly two children are ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "199",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8428/gate2015-3-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A binary tree T has 20 leaves. The number of nodes in T having two children is _______. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8059/gate2015-2-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The height of a tree is the length of the longest root-to-leaf path in it. The maximum and minimum number of nodes in a binary tree of height 5 are <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>63 and 6, respectively</p>",
            "<b>B.</b> <p>64 and 5, respectively</p>",
            "<b>C.</b> <p>32 and 6, respectively</p>",
            "<b>D.</b> <p>31 and 5, respectively</p>"
          ],
          "correct_answer": "<b>A.</b> <p>63 and 6, respectively</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8223/gate2015-1-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>How many different trees are there with four nodes A,B,C and D? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>30</p>",
            "<b>B.</b> <p>60</p>",
            "<b>C.</b> <p>90</p>",
            "<b>D.</b> <p>120</p>"
          ],
          "correct_answer": "<b>D.</b> <p>120</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17447/isro2014-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the pseudocode given below. The function Dosomething () takes as argument a pointer to the root of an arbitrary tree represented by the leftMostChild-rightSibling representation. Each node of the tree is of type treeNode.<pre><code>  typedef struct treeNode*  treeptr;\nstruct treeNode\n{\n        treeptr leftMostChild, rightSibling;\n};\nint DoSomething (treeptr tree)\n{\n     int value=0;\n     if (tree != NULL) {\n          if (tree-&gt;leftMostChild == NULL)\n               value = 1;\n          else\n               value = DoSomething(tree-&gt;leftMostChild);\n         value = value + DoSomething(tree-&gt;rightSibling);\n     }\n     return(value);\n}</code></pre>\nWhen the pointer to the root of a tree is passed as the argument to DoSomething, the value returned by the function corresponds to the <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>number of internal nodes in the tree</p>",
            "<b>B.</b> <p>height of the tree</p>",
            "<b>C.</b> <p>number of nodes without a right sibling in the tree.</p>",
            "<b>D.</b> <p>number of leaf nodes in the tree.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>number of leaf nodes in the tree.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2075/gate2014-3-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
