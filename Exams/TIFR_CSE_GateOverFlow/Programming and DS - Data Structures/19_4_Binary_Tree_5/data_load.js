window.__examLoadCallback({
  "title": "Programming and DS - Data Structures - Binary Tree",
  "duration": 14,
  "sections": [
    {
      "name": "Binary Tree",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"25214\"></a><div itemprop=\"text\"><p>Consider a complete binary tree of height \\( n \\), where each edge is one Ohm resistor. Suppose all the leaves of the tree are tied together. Approximately how much is the effective resistance from the root to this bunch of leaves for very large \\( n \\)?</p>\n\n</div><br><br><b>Data Structures: TIFR CSE 2012 | Part B | Question: 16</b></p>",
          "type": "single",
          "options": [
            "<p>Exponential in \\( n \\).</p>",
            "<p>Cubic in \\( n \\).</p>",
            "<p>Linear in \\( n \\).</p>",
            "<p>Logarithmic in \\( n \\).</p>",
            "<p>Of the order square root of \\( n \\).</p>"
          ],
          "correct_answer": "<p>Exponential in \\( n \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/25214/tifr-cse-2012-part-b-question-16\" target=\"_blank\">https://gateoverflow.in/25214/tifr-cse-2012-part-b-question-16</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"25775\"></a><div itemprop=\"text\"><p>Given a binary tree of the following form and having \\( n \\) nodes, the height of the tree is</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"287\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1119914084534144462\" width=\"388\"></p>\n\n</div><br><br><b>Data Structures: TIFR CSE 2013 | Part B | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta \\left(\\log n\\right) \\)</p>",
            "<p>\\( \\Theta \\left(n\\right) \\)</p>",
            "<p>\\( \\Theta \\left(\\sqrt{n}\\right) \\)</p>",
            "<p>\\( \\Theta \\left(n / \\log n\\right) \\)</p>",
            "<p>None of the above.</p>"
          ],
          "correct_answer": "<p>\\( \\Theta \\left(\\sqrt{n}\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/25775/tifr-cse-2013-part-b-question-13\" target=\"_blank\">https://gateoverflow.in/25775/tifr-cse-2013-part-b-question-13</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"27133\"></a><div itemprop=\"text\"><p>Let \\( T \\) be a rooted binary tree whose vertices are labelled with symbols \\( a, b, c, d, e, f, g, h, i, j, k \\).&nbsp;Suppose the in-order (visit left subtree, visit root, visit right subtree) and post-order (visit left subtree, visit&nbsp;right subtree, visit root) traversals of \\( T \\) produce the following sequences.</p>\n\n<p>in-order:\\( a, b, c, d, e, f, g, h, i, j, k \\)</p>\n\n<p>post-order:\\( a, c, b, e, f, h, j, k, i, g, d \\)</p>\n\n<p>How many leaves does the tree have?</p>\n\n</div><br><br><b>Data Structures: TIFR CSE 2014 | Part B | Question: 1</b></p>",
          "type": "single",
          "options": [
            "<p>THREE.</p>",
            "<p>FOUR.</p>",
            "<p>FIVE.</p>",
            "<p>SIX.</p>",
            "<p>Cannot be determined uniquely from the given information.</p>"
          ],
          "correct_answer": "<p>FIVE.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/27133/tifr-cse-2014-part-b-question-1\" target=\"_blank\">https://gateoverflow.in/27133/tifr-cse-2014-part-b-question-1</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"29849\"></a><div itemprop=\"text\"><p>First, consider the tree on the left.</p>\n\n<p><img alt=\"\" height=\"241\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=13876202898777946729\" style=\"float:left\" width=\"329\">&nbsp;&nbsp;<img alt=\"\" height=\"241\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=11736428699844256219\" width=\"324\"></p>\n\n<p>On the right, the nine nodes of the tree have been assigned numbers &nbsp;from the set \\( \\left\\{1, 2,\\ldots,9\\right\\} \\) so that for every node, the numbers in its left subtree and right subtree lie in disjoint intervals (that is, all numbers in one subtree are less than all numbers in the other subtree). How many such assignments are possible? Hint: Fix a value for the root and ask what values can then appear in its left and right subtrees.</p>\n\n</div><br><br><b>Data Structures: TIFR CSE 2015 | Part B | Question: 4</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2^{9}=512 \\)</p>",
            "<p>\\( 2^{4}.3^{2}.5.9=6480 \\)</p>",
            "<p>\\( 2^{3}.3.5.9=1080 \\)</p>",
            "<p>\\( 2^{4}=16 \\)</p>",
            "<p>\\( 2^{3}.3^{3}=216 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^{4}.3^{2}.5.9=6480 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/29849/tifr-cse-2015-part-b-question-4\" target=\"_blank\">https://gateoverflow.in/29849/tifr-cse-2015-part-b-question-4</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"179290\"></a><div itemprop=\"text\"><p>Consider the following implementation of a binary tree data strucrure. The operator \\( + \\) denotes list-concatenation.</p>\n\n<p>That is, \\( [a,b,c]+[d,e]=[a,b,c,d,e]. \\)</p>\n\n<pre class=\"prettyprint lang-c_cpp\">struct TreeNode:\n int value\n TreeNode leftChild\n TreeNode rightChild\n \nfunction preOrder(T):\n if T == null:\n  return []\n else:\n  return [T.value] + preOrder(T.leftChild) + preOrder(T.rightChild)\n  \nfunction inOrder(T):\n if T == null:\n  return []\n else:\n  return inOrder(T.leftChild) + [T.value] + inOrder(T.rightChild)\n  \nfunction postOrder(T):\n if T == null:\n  return []\n else:\n  return postOrder(T.leftChild) + postOrder(T.rightChild) + [T.value] \n</pre>\n\n<p>For some T the functions inOrder(T) and preOrder(T) return the following:</p>\n\n<p>\\( \\;\\text{inOrder(T)}:\\quad\\;&nbsp;[12,10,6,9,7,2,15,5,1,13,4,3,8,14,11] \\)</p>\n\n<p>\\( \\text{preOrder(T)}:\\quad [5,2,10,12,9,6,7,15,13,1,3,4,14,8,11] \\)</p>\n\n<p>What does postOrder(T) return ?</p>\n\n</div><br><br><b>Data Structures: TIFR CSE 2018 | Part B | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( [12,6,10,7,15,2,9,1,4,13,8,11,14,3,5] \\)</p>",
            "<p>\\( [11,8,14,4,3,1,13,15,7,6,9,12,10,2,5] \\)</p>",
            "<p>\\( [11,14,8,3,4,13,1,5,15,2,7,9,6,10,12] \\)</p>",
            "<p>\\( [12,6,7,9,10,15,2,1,4,8,11,14,3,13,5] \\)</p>",
            "<p>\\( \\text{Cannot be uniquely determined from given information.} \\)</p>"
          ],
          "correct_answer": "<p>\\( [12,6,7,9,10,15,2,1,4,8,11,14,3,13,5] \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/179290/tifr-cse-2018-part-b-question-6\" target=\"_blank\">https://gateoverflow.in/179290/tifr-cse-2018-part-b-question-6</a></p>"
        }
      ]
    }
  ]
});
