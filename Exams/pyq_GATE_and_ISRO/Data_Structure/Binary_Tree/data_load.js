window.__examLoadCallback({
  "title": "Data_Structure - Binary_Tree",
  "duration": 136,
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
        },
        {
          "id": 16,
          "question": "<p>Consider the expression tree shown. Each leaf represents a numerical value, which can either\nbe 0 or 1. Over all possible choices of the values at the leaves, the maximum possible value\nof the expression represented by the tree is ___. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Binary_Tree\\q39_dedc3211.jpg\"> <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1999/gate2014-2-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Consider rooted n node binary tree represented using pointers. The best upper bound on the\ntime required to determine the number of sub trees having exactly 4 nodes is \\(O(n^{a}lob^{b}n)\\) .\nThen the value of a+10b is_______ <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1776/gate2014-1-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Which of the following number of nodes can form a full binary tree? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>15</p>",
            "<b>C.</b> <p>14</p>",
            "<b>D.</b> <p>13</p>"
          ],
          "correct_answer": "<b>B.</b> <p>15</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43967/isro-2013-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>The height of a tree is defined as the number of edges on the longest path in the tree. The function\nshown in the pseudocode below is invoked as height(root) to compute the height of a binary\ntree rooted at the tree pointer root.<pre><code> int height (treeptr n)\n{ if (n == NULL) return -1;\n   if (n -&gt; left == NULL)\n            if (n -&gt; right == NULL) return 0;\n            else return    <b>B1</b>;\n   else { h1 = height (n -&gt; left);\n   if (n -&gt; right == NULL) return (1+h1);\n   else { h2 = height (n -&gt; right);\n   return   <b>B2</b>; \n    }\n  }   \n} </code></pre>\nThe appropriate expressions for the two boxes B1 and B2 are <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>B1: (1+height(n \\(\\rightarrow\\) right)) <br>\nB2: (1+max(h1, h2))</p>",
            "<b>B.</b> <p>B1: (height(n \\(\\rightarrow\\) right))<br>\nB2: (1+max(h1,h2))</p>",
            "<b>C.</b> <p>B1: height(n \\(\\rightarrow\\) right)<br>\nB2: max(h1, h2)</p>",
            "<b>D.</b> <p>B1: (1+ height(n \\(\\rightarrow\\) right))<br>\nB2: max(h1, h2)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>B1: (1+height(n \\(\\rightarrow\\) right)) <br>\nB2: (1+max(h1, h2))</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2163/gate2012-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>The in-order traversal of a tree resulted in FBGADCE. Then the pre-order traversal of that tree would result in <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>FGBDECA</p>",
            "<b>B.</b> <p>ABFGCDE</p>",
            "<b>C.</b> <p>BFGCDEA</p>",
            "<b>D.</b> <p>AFGBDEC</p>"
          ],
          "correct_answer": "<b>B.</b> <p>ABFGCDE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50619/isro2011-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
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
          "id": 22,
          "question": "<p>A full binary tree with n leaves contains <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n nodes</p>",
            "<b>B.</b> <p>\\(\\log_2\\) n nodes</p>",
            "<b>C.</b> <p>2n-1</p>",
            "<b>D.</b> <p>\\(2^n\\) nodes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2n-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50383/isro2009-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>A complete binary tree with the property that the value at each node is at least as large as the values at its children is known as <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>binary search tree</p>",
            "<b>B.</b> <p>AVL tree</p>",
            "<b>C.</b> <p>completely balanced tree</p>",
            "<b>D.</b> <p>Heap</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Heap</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50145/isro2008-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
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
        },
        {
          "id": 25,
          "question": "<p>A binary tree with n&gt;1 nodes has \\(n_{1}\\), \\(n_{2}\\) and \\(n_{3}\\) nodes of degree one, two and three respectively. The degree of a node is defined as the number of its neighbors.<br><br>\n\\(n_{3}\\) can be expressed as <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(n_{1}+n_{2}-1\\)</p>",
            "<b>B.</b> <p>\\(n_{1}-2\\)</p>",
            "<b>C.</b> <p>\\({\\left[\\left(\\left(n_{1}+n_{2}\\right) / 2\\right)\\right]}\\)</p>",
            "<b>D.</b> <p>\\(n_{2}-1\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(n_{1}-2\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3390/gate2008-it-76\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>The following three are known to be the preorder, inorder and postorder sequences of a binary tree. But it is not known which is which.<br>\nI.MBCAFHPYK<br>\nII.KAMCBYPFH<br>\nIII.MABCKYFPH<br>\nPick the true statement from the following. <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II are preorder and inorder sequences, respectively</p>",
            "<b>B.</b> <p>I and III are preorder and postorder sequences, respectively</p>",
            "<b>C.</b> <p>II is the inorder sequence, but nothing more can be said about the other two sequences</p>",
            "<b>D.</b> <p>II and III are the preorder and inorder sequences, respectively</p>"
          ],
          "correct_answer": "<b>D.</b> <p>II and III are the preorder and inorder sequences, respectively</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3356/gate2008-it-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Consider the following C program segment where CellNode represents a node in a\nbinary tree:<pre><code> struct CellNode \n{\n  struct CellNOde *leftChild;\n  int element;\n  struct CellNode *rightChild;\n};\n \nint GetValue(struct CellNode *ptr) \n{\n  int value = 0;\n  if (ptr != NULL) \n  {\n   if ((ptr-&gt;leftChild == NULL) &amp;&amp;\n        (ptr-&gt;rightChild == NULL))\n      value = 1;\n   else\n      value = value + GetValue(ptr-&gt;leftChild)\n                   + GetValue(ptr-&gt;rightChild);\n  }\n  return(value);\n}</code></pre>\nThe value returned by GetValue when a pointer to the root of a binary tree is\npassed as its argument is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the number of nodes in the tree</p>",
            "<b>B.</b> <p>the number of internal nodes in the tree</p>",
            "<b>C.</b> <p>the number of leaf nodes in the tree</p>",
            "<b>D.</b> <p>the height of the tree</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the number of leaf nodes in the tree</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1244/gate2007-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>The inorder and preorder traversal of a binary tree are\nd b e a f c g and a b d e c f g, respectively\nThe postorder traversal of the binary tree is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>d e b f g c a</p>",
            "<b>B.</b> <p>e d b g f c a</p>",
            "<b>C.</b> <p>e d b f g c a</p>",
            "<b>D.</b> <p>d e f g b c a</p>"
          ],
          "correct_answer": "<b>A.</b> <p>d e b f g c a</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1237/gate2007-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>The maximum number of binary trees that can be formed with three unlabeled nodes is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1211/gate2007-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>The height of a binary tree is the maximum number of edges in any root to leaf\npath. The maximum number of nodes in a binary tree of height h is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{h}-1\\)</p>",
            "<b>B.</b> <p>\\(2^{h-1}-1\\)</p>",
            "<b>C.</b> <p>\\(2^{h+1}-1\\)</p>",
            "<b>D.</b> <p>\\(2^{h+1}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(2^{h+1}-1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1210/gate2007-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>An array X of n distinct integers is interpreted as a complete binary tree. The index of the first element of the array is 0. If the root node is at level 0, the level of element \\(X[i], i \\neq 0\\), is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left \\lfloor \\log _2 i \\right \\rfloor\\)</p>",
            "<b>B.</b> <p>\\(\\left \\lceil \\log _2 (i+1)\\right \\rceil\\)</p>",
            "<b>C.</b> <p>\\(\\left \\lfloor \\log _2 (i+1) \\right \\rfloor\\)</p>",
            "<b>D.</b> <p>\\(\\left \\lceil \\log _2 i \\right \\rceil\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\left \\lfloor \\log _2 (i+1) \\right \\rfloor\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3617/gate2006-it-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>An array X of n distinct integers is interpreted as a complete binary tree. The index of the first element of the array is 0. If only the root node does not satisfy the heap property, the algorithm to convert the complete binary tree into a heap has the best asymptotic time complexity of <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O (n)\\)</p>",
            "<b>B.</b> <p>\\(O (\\log n)\\)</p>",
            "<b>C.</b> <p>\\(O (n \\log n)\\)</p>",
            "<b>D.</b> <p>\\(O (n \\log \\log n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(O (\\log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3616/gate2006-it-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>An array X of n distinct integers is interpreted as a complete binary tree. The index of the first element of the array is 0. The index of the parent of element\\(X[i], i \\neq 0\\), is? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left \\lfloor \\dfrac i 2 \\right \\rfloor\\)</p>",
            "<b>B.</b> <p>\\(\\left \\lceil \\dfrac{i-1}{2} \\right \\rceil\\)</p>",
            "<b>C.</b> <p>\\(\\left \\lceil \\dfrac i 2 \\right \\rceil\\)</p>",
            "<b>D.</b> <p>\\(\\left \\lceil \\dfrac i 2 \\right \\rceil - 1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\left \\lceil \\dfrac i 2 \\right \\rceil - 1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3615/gate2006-it-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>In a binary tree, the number of internal nodes of degree 1 is 5, and the number of internal nodes of degree 2 is 10. The number of leaf nodes in the binary tree is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>11</p>",
            "<b>C.</b> <p>12</p>",
            "<b>D.</b> <p>15</p>"
          ],
          "correct_answer": "<b>B.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3548/gate2006-it-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>A scheme for storing binary trees in an array X is as follows. Indexing of X starts\nat 1 instead of 0. The roots is stored at X[1]. For a node stored at X[i], the left\nchild, if any, is stored in X[2i] and the right child, if any, in X[2i + 1]. To be able\nto store any binary tree on n vertices, the minimum size of X should be <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>log n</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>2n+1</p>",
            "<b>D.</b> <p>\\(2^{n}-1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(2^{n}-1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/974/gate2006-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>In a binary tree, for every node the difference between the number of nodes in the left and right subtrees is at most 2. If the height of the tree is h &gt; 0, then the minimum number of nodes in the tree is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{h-1}\\)</p>",
            "<b>B.</b> <p>\\(2^{h-1} + 1\\)</p>",
            "<b>C.</b> <p>\\(2^h - 1\\)</p>",
            "<b>D.</b> <p>\\(2^h\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(2^{h-1} + 1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3811/gate2005-it-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>Which one of the following binary trees has its inorder and preorder traversals as BCAD  and ABCD, respectively?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Binary_Tree\\q54_8a5ee516.jpg\"><br> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3697/gate2004-it-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>Consider the following C program segment<pre><code>struct CellNode\n{\n  struct CelINode *leftchild;\n  int element;\n  struct CelINode *rightChild;\n}\n \nint Dosomething(struct CelINode *ptr)\n{\n    int value = 0;\n    if (ptr != NULL)\n    {\n      if (ptr-&gt;leftChild != NULL)\n        value = 1 + DoSomething(ptr-&gt;leftChild);\n      if (ptr-&gt;rightChild != NULL)\n        value = max(value, 1 + DoSomething(ptr-&gt;rightChild));\n    }\n    return (value);\n} </code></pre>\nThe value returned by the function DoSomething when a pointer to the root of a non-empty tree is\npassed as argument is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The number of leaf nodes in the tree</p>",
            "<b>B.</b> <p>The number of nodes in the tree</p>",
            "<b>C.</b> <p>The number of internal nodes in the tree</p>",
            "<b>D.</b> <p>The height of the tree</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The height of the tree</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1040/gate2004-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>Consider the label sequences obtained by the following pairs of traversals on a labeled binary tree.\nWhich of these pairs identify a tree uniquely? <br><br>\n(i) preorder and postorder <br> (ii) inorder and postorder <br>\n(iii) preorder and inorder <br> (iv) level order and postorder <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) only</p>",
            "<b>B.</b> <p>(iii) only</p>",
            "<b>C.</b> <p>(iv) only</p>",
            "<b>D.</b> <p>(ii), (iii)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(ii), (iii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1032/gate2004-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Level order traversal of a rooted tree can be done by starting from the root and performing <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>preorder traversal</p>",
            "<b>B.</b> <p>in-order traversal</p>",
            "<b>C.</b> <p>depth first search</p>",
            "<b>D.</b> <p>breadth first search</p>"
          ],
          "correct_answer": "<b>D.</b> <p>breadth first search</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1003/gate2004-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>Let LASTPOST, LASTIN and LASTPRE denote the last vertex visited `in a postorder, inorder and preorder traversal respectively, of a complete binary tree. Which of the following is always true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LASTIN = LASTPOST</p>",
            "<b>B.</b> <p>LASTIN = LASTPRE</p>",
            "<b>C.</b> <p>LASTPRE = LASTPOST</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/663/gate2000-2-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>Consider the following nested representation of binary trees: (X Y Z) indicates Y and Z are the left and right subtrees, respectively, of node X. Note that Y and Z may be NULL, or further nested. Which of the following represents a valid binary tree? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(1 2 (4 5 6 7))</p>",
            "<b>B.</b> <p>(1 (2 3 4) 5 6) 7)</p>",
            "<b>C.</b> <p>(1 (2 3 4) (5 6 7))</p>",
            "<b>D.</b> <p>(1 (2 3 NULL) (4 5))</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(1 (2 3 4) (5 6 7))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/637/gate2000-1-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
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
          "id": 44,
          "question": "<p>Which of the following sequences denotes the post order traversal sequence of the below tree?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Binary_Tree\\q1.15_70f4e3da.jpg\"><br> <br><br><strong>(GATE CSE 1996)</strong></p>",
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
          "id": 45,
          "question": "<p>A binary tree T has n leaf nodes. The number of nodes of degree 2 in T is <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\log_2 n\\)</p>",
            "<b>B.</b> <p>n-1</p>",
            "<b>C.</b> <p>n</p>",
            "<b>D.</b> <p>\\(2^n\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2604/gate1995-1-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>Which of the following statements is false? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Optimal binary search tree construction can be performed efficiently using dynamic programming</p>",
            "<b>B.</b> <p>Breadth-first search cannot be used to find connected components of a graph</p>",
            "<b>C.</b> <p>Given the prefix and postfix walks over a binary tree, the binary tree cannot be uniquely constructed.</p>",
            "<b>D.</b> <p>Depth-first search can be used to find connected components of a graph</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Breadth-first search cannot be used to find connected components of a graph</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2465/gate1994-1-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>The total external path length, EPL, of a binary tree with n external nodes is, \\(\\Sigma _w=Iw\\), where \\(I_{w}\\) is the path length of external node w), <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\leq n^{2}\\) always.</p>",
            "<b>B.</b> <p>\\(\\geq n \\log_{2}\\) n always.</p>",
            "<b>C.</b> <p>Equal to \\(n^{2}\\) always.</p>",
            "<b>D.</b> <p>O(n) for some special trees.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\geq n \\log_{2}\\) n always.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84828/gate1990-3-iv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>The number of rooted binary trees with n nodes is, <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Equal to the number of ways of multiplying (n+1) matrices.</p>",
            "<b>B.</b> <p>Equal to the number of ways of arranging n out of 2 n distinct elements.</p>",
            "<b>C.</b> <p>Equal to \\(\\frac{1}{(n+1)}\\binom{2n}{n}\\).</p>",
            "<b>D.</b> <p>Equal to n!.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Equal to the number of ways of multiplying (n+1) matrices.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84060/gate1990-3-iii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>Answer the following:<br>Which one of the following statements (s) is/are FALSE? <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Overlaying is used to run a program, which is longer than the address space of the computer.</p>",
            "<b>B.</b> <p>Optimal binary search tree construction can be performed efficiently by using dynamic programming.</p>",
            "<b>C.</b> <p>Depth first search cannot be used to find connected components of a graph.</p>",
            "<b>D.</b> <p>Given the prefix and postfix walls over a binary tree, the binary tree can be uniquely constructed.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Overlaying is used to run a program, which is longer than the address space of the computer.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87143/gate1989-3-ixa\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
