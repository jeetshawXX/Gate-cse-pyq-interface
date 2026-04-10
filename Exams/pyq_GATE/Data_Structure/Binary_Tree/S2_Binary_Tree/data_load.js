window.__examLoadCallback({
  "title": "Binary_Tree - Binary_Tree - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Binary_Tree",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
