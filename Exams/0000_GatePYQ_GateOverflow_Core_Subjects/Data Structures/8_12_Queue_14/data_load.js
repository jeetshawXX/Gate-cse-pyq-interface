window.__examLoadCallback({
  "title": "Data Structures - Queue",
  "duration": 39,
  "sections": [
    {
      "name": "Queue",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"588\"></a><div itemprop=\"text\">Suggest a data structure for representing a subset \\( S \\) of integers from \\( 1 \\) to \\( n \\). Following operations on the set \\( S \\) are to be performed in constant time (independent of cardinality of \\( S \\)).\\[ \\begin{array}{cll} \\text{i.}&amp; \\text{MEMBER \\( (X): \\)} &nbsp;&amp; &nbsp;\\text{Check whether \\( X \\) is in the set \\( S \\) or not} \\\\ \\text{ii.} &amp;<br>\n\\text{FIND-ONE \\( (S): \\)} &amp; \\text{If \\( S \\) is not empty, return one element of the set \\( S \\)}\\\\ &amp; &amp; \\quad\\text{(any arbitrary element will do)} \\\\ \\text{iii.} &amp; \\text{ADD \\( (X): \\)} &amp; \\text{Add integer \\( X \\) to set \\( S \\)} \\\\ &nbsp;\\text{ii.} &amp; &nbsp;\\text{DELETE \\( (X): \\)} &amp; \\text{Delete integer \\( X \\) from \\( S \\)} &nbsp;\\end{array} \\]Give pictorial examples of your data structure. Give routines for these operations in an English like language. You may assume that the data structure has been suitable initialized. Clearly state your assumptions regarding initialization.</div><br><br><b>GATE CSE 1992 | Question: 09</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/588/gate-cse-1992-question-09\" target=\"_blank\">https://gateoverflow.in/588/gate-cse-1992-question-09</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2522\"></a><div itemprop=\"text\">A queue \\( Q \\) containing \\( n \\) items and an empty stack \\( S \\) are given. It is required to transfer all the items from the queue to the stack, so that the item at the front of queue is on the TOP of the stack, and the order of all other items are preserved. Show how this can be done in \\( O(n) \\) time using only a constant amount of additional storage. Note that the only operations which can be performed on the queue and stack are Delete, Insert, Push and Pop. Do not assume any implementation of the queue or stack.</div><br><br><b>GATE CSE 1994 | Question: 26</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2522/gate-cse-1994-question-26\" target=\"_blank\">https://gateoverflow.in/2522/gate-cse-1994-question-26</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2716\"></a><div itemprop=\"text\"><p>Consider the following statements:</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>\n\t<p>First-in-first out types of computations are efficiently supported by STACKS.</p>\n\t</li>\n\t<li>\n\t<p>Implementing LISTS on linked lists is more efficient than implementing LISTS on an array for almost all the basic LIST operations.</p>\n\t</li>\n\t<li>\n\t<p>Implementing QUEUES on a circular array is more efficient than implementing QUEUES on a linear array with two indices.</p>\n\t</li>\n\t<li>\n\t<p>Last-in-first-out type of computations are efficiently supported by QUEUES.</p>\n\t</li>\n</ol>\n\n</div><br><br><b>GATE CSE 1996 | Question: 1.12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (ii) \\) and \\( (iii) \\)&nbsp;are true</p>",
            "<p>\\( (i) \\) and \\( (ii) \\)&nbsp;are true</p>",
            "<p>\\( (iii) \\) and \\( (iv) \\) are true</p>",
            "<p>\\( (ii) \\) and \\( (iv) \\) are true</p>"
          ],
          "correct_answer": "<p>\\( (ii) \\) and \\( (iii) \\)&nbsp;are true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2716/gate-cse-1996-question-1-12\" target=\"_blank\">https://gateoverflow.in/2716/gate-cse-1996-question-1-12</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"734\"></a><div itemprop=\"text\"><p>What is the minimum number of stacks of size \\( n \\) required to implement a queue of size \\( n \\)?</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 2.16</b></p>",
          "type": "single",
          "options": [
            "<p>One</p>",
            "<p>Two</p>",
            "<p>Three</p>",
            "<p>Four</p>"
          ],
          "correct_answer": "<p>Two</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/734/gate-cse-2001-question-2-16\" target=\"_blank\">https://gateoverflow.in/734/gate-cse-2001-question-2-16</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1826\"></a><div itemprop=\"text\"><p>An implementation of a queue \\( Q \\), using two stacks \\( S1 \\) and \\( S2 \\), is given below:&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">void insert (Q, x) { \n    push (S1, x); \n} \nvoid delete (Q) { \n    if (stack-empty(S2)) then \n        if (stack-empty(S1)) then { \n            print(“Q is empty”); \n            return; \n        } \n        else while (!(stack-empty(S1))){ \n            x=pop(S1); \n            push(S2,x); \n        } \n    x=pop(S2);\n}</pre>\n\n<p>Let \\( n \\) <em>insert</em>&nbsp;and&nbsp;\\(  m(\\leq n) \\) <em>delete</em>&nbsp;operations be performed in an arbitrary order on an empty queue \\( Q \\). Let \\( x \\)&nbsp;and \\( y \\)&nbsp;&nbsp;be the number of <em>push</em>&nbsp;and <em>pop</em>&nbsp;operations&nbsp;&nbsp;performed respectively in the process. Which one of the following is true for all \\( m \\)&nbsp;and \\( n \\)?</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 49</b></p>",
          "type": "single",
          "options": [
            "<p>\\(  n+m\\leq x&lt;2n  \\)&nbsp;and&nbsp;\\( 2m\\leq y\\leq n+m  \\)</p>",
            "<p>\\(  n+m\\leq x&lt;2n  \\)&nbsp;and&nbsp;\\( 2m\\leq y\\leq 2n  \\)</p>",
            "<p>\\(  2m\\leq x&lt;2n  \\)&nbsp;and&nbsp;\\( 2m\\leq y\\leq n+m  \\)</p>",
            "<p>\\(  2m\\leq x&lt;2n  \\)&nbsp;and&nbsp;\\( 2m\\leq y\\leq 2n  \\)</p>"
          ],
          "correct_answer": "<p>\\(  n+m\\leq x&lt;2n  \\)&nbsp;and&nbsp;\\( 2m\\leq y\\leq n+m  \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1826/gate-cse-2006-question-49\" target=\"_blank\">https://gateoverflow.in/1826/gate-cse-2006-question-49</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1756\"></a><div itemprop=\"text\"><p>Suppose a circular queue of capacity \\( (n −1) \\) elements is implemented with an array of \\( n \\) elements. Assume that the insertion and deletion operations are carried out using \\( \\textsf{REAR} \\) and \\( \\textsf{FRONT} \\) as array index variables, respectively. Initially, \\( \\textsf{REAR} = \\textsf{FRONT} = 0 \\). The conditions to detect queue full and queue empty are:</p></div><br><br><b>GATE CSE 2012 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{full}: (\\textsf{REAR}+1) \\mod n == \\textsf{FRONT} \\)<br>\\( \\text{empty}: \\textsf{REAR} == \\textsf{FRONT} \\)</p>",
            "<p>\\( \\text{full}: (\\textsf{REAR}+1) \\mod n == \\textsf{FRONT} \\)<br>\\( \\text{empty}: (\\textsf{FRONT}+1) \\mod n == \\textsf{REAR} \\)</p>",
            "<p>\\( \\text{full}: \\textsf{REAR} == \\textsf{FRONT} \\)<br>\\( \\text{empty}: (\\textsf{REAR}+1) \\mod n == \\textsf{FRONT} \\)</p>",
            "<p>\\( \\text{full}: (\\textsf{FRONT}+1) \\mod n == \\textsf{REAR} \\)<br>\\( \\text{empty}: \\textsf{REAR} == \\textsf{FRONT} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{full}: (\\textsf{REAR}+1) \\mod n == \\textsf{FRONT} \\)<br>\\( \\text{empty}: \\textsf{REAR} == \\textsf{FRONT} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1756/gate-cse-2012-question-35\" target=\"_blank\">https://gateoverflow.in/1756/gate-cse-2012-question-35</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"61\"></a><div itemprop=\"text\"><p>Consider the following operation along with Enqueue and Dequeue operations on queues, where \\( k \\) is a global parameter.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">MultiDequeue(Q){\n    m = k\n    while (Q is not empty) and (m &gt; 0) {\n        Dequeue(Q)\n        m = m – 1\n    }\n}\n</pre>\n\n<p>What is the worst case time complexity of a sequence of \\( n \\) queue operations on an initially empty<br>\nqueue?</p>\n\n</div><br><br><b>GATE CSE 2013 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>\\( Θ(n) \\)</p>",
            "<p>\\( Θ(n + k) \\)</p>",
            "<p>\\( Θ(nk) \\)</p>",
            "<p>\\( Θ(n^2) \\)</p>"
          ],
          "correct_answer": "<p>\\( Θ(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/61/gate-cse-2013-question-44\" target=\"_blank\">https://gateoverflow.in/61/gate-cse-2013-question-44</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"39667\"></a><div itemprop=\"text\"><p>A queue is implemented using an array such that ENQUEUE and DEQUEUE operations are performed efficiently. Which one of the following statements is <strong>CORRECT</strong> (\\( n \\) refers to the number of items in the queue) ?</p>\n\n</div><br><br><b>GATE CSE 2016 Set 1 | Question: 10</b></p>",
          "type": "single",
          "options": [
            "<p>Both operations can be performed in \\( O(1) \\) time.</p>",
            "<p>At most one operation can be performed in \\( O(1) \\) time but the worst case time for the operation will be \\( \\Omega (n) \\).</p>",
            "<p>The worst case time complexity for both operations will be \\( \\Omega (n) \\).</p>",
            "<p>Worst case time complexity for both operations will be \\( \\Omega (\\log n) \\)</p>"
          ],
          "correct_answer": "<p>Both operations can be performed in \\( O(1) \\) time.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39667/gate-cse-2016-set-1-question-10\" target=\"_blank\">https://gateoverflow.in/39667/gate-cse-2016-set-1-question-10</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"39684\"></a><div itemprop=\"text\"><p>Let \\( Q \\) denote a queue containing sixteen numbers and \\( S \\) be an empty stack. \\( Head(Q) \\) returns the element at the head of the queue \\( Q \\) without removing it from \\( Q \\). Similarly \\( Top(S) \\) returns the element at the top of \\( S \\) without removing it from \\( S \\). Consider the algorithm given below.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">while Q is not Empty do \n  if S is Empty OR Top(S) ≤ Head (Q) then \n&nbsp;    x:= Dequeue (Q); \n&nbsp;    Push (S, x); \n  else  \n&nbsp;    x:= Pop(S); \n&nbsp;    Enqueue (Q, x);\n  end\n end</pre>\n\n<p>The maximum possible number of iterations of the <strong>while</strong> loop in the algorithm is _______.</p>\n\n\n\n</div><br><br><b>GATE CSE 2016 Set 1 | Question: 41</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "256",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39684/gate-cse-2016-set-1-question-41\" target=\"_blank\">https://gateoverflow.in/39684/gate-cse-2016-set-1-question-41</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"118253\"></a><div itemprop=\"text\"><p>A circular queue has been implemented using a singly linked list where each node consists of a value and a single pointer pointing to the next node. We maintain exactly two external pointers FRONT and REAR pointing to the front node and the rear node of the queue, respectively. Which of the following statements is/are CORRECT for such a circular queue, so that insertion and deletion operations can be performed in \\( O(1) \\) time?</p>\n\n<ol style=\"list-style-type: upper-roman;\">\n\t<li>Next pointer of front node points to the rear node.</li>\n\t<li>Next pointer of rear node points to the front node.</li>\n</ol>\n\n\n\n</div><br><br><b>GATE CSE 2017 Set 2 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>(I) only.</p>",
            "<p>(II) only.</p>",
            "<p>Both (I) and (II).</p>",
            "<p>Neither (I) nor (II).</p>"
          ],
          "correct_answer": "<p>(II) only.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118253/gate-cse-2017-set-2-question-13\" target=\"_blank\">https://gateoverflow.in/118253/gate-cse-2017-set-2-question-13</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"204077\"></a><div itemprop=\"text\"><p>A queue is implemented&nbsp;using a non-circular singly linked list. The queue has a head pointer and a tail pointer, as shown in the figure. Let \\( n \\) denote the number of nodes in the queue. Let 'enqueue' be implemented by inserting a new node at the head, and 'dequeue' be implemented by deletion of a node from the tail.</p>\n\n<p><img alt=\"\" height=\"152\" src=\"images/gateOverflow_pyq_images/data_structures___queue/aa49195a4a29d309ccfed2d7a6ff2374.png\" width=\"600\"></p>\n\n<p>Which one of the following is the time complexity of the most time-efficient implementation of 'enqueue' and 'dequeue, respectively, for this data structure?</p>\n\n</div><br><br><b>GATE CSE 2018 | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(1), \\Theta(1) \\)</p>",
            "<p>\\( \\Theta(1), \\Theta(n) \\)</p>",
            "<p>\\( \\Theta(n), \\Theta(1) \\)</p>",
            "<p>\\( \\Theta(n), \\Theta(n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(1), \\Theta(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/204077/gate-cse-2018-question-3\" target=\"_blank\">https://gateoverflow.in/204077/gate-cse-2018-question-3</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"371884\"></a><div itemprop=\"text\"><p>Consider the queues \\( Q_{1} \\) containing four elements and \\( Q_{2} \\) containing none (shown as the \\( \\textsf{Initial State} \\) in the figure). The only operations allowed on these two queues are \\( \\textsf{Enqueue (Q, element)} \\) and \\( \\textsf{Dequeue (Q)}. \\) The minimum number of \\( \\textsf{Enqueue} \\) operations on \\( Q_{1} \\) required to place the elements of \\( Q_{1} \\) in \\( Q_{2} \\) in reverse order (shown as the \\( \\textsf{Final State} \\) in the figure) without using any additional storage is________________.</p>\n\n<p style=\"text-align:center\"><img alt=\"\" src=\"images/gateOverflow_pyq_images/data_structures___queue/682b23e5cf1127993f04f899155f27fd.png\" width=\"450\"></p>\n\n<p>&nbsp;</p></div><br><br><b>GATE CSE 2022 | Question: 52</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/371884/gate-cse-2022-question-52\" target=\"_blank\">https://gateoverflow.in/371884/gate-cse-2022-question-52</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"422940\"></a><div itemprop=\"text\"><p>The fundamental operations in a double-ended queue \\( D \\) are:&nbsp;</p><p>insertFirst (e) - Insert a new element \\( e \\) at the beginning of \\( D \\).&nbsp;</p><p>insertLast (e) - Insert a new element \\( e \\) at the end of D.&nbsp;</p><p>removeFirst () - Remove and return the first element of \\( D \\).&nbsp;</p><p>removeLast () - Remove and return the last element of \\( D \\).<br><br>In an empty double-ended queue, the following operations are performed:&nbsp;</p><p>insertFirst (10)<br>insertLast (32)<br><strong>a</strong> \\( \\leftarrow \\) removeFirst ()<br>insertLast (28)<br>insertLast (17)<br><strong>a</strong> \\( \\leftarrow \\) removeFirst ()<br>\\( \\mathbf{a} \\leftarrow \\) removeLast ()<br><br>The value of \\( \\mathbf{a} \\) is \\( \\_\\_\\_\\_\\_\\_\\_\\_ \\).</p><p>&nbsp;</p></div><br><br><b>GATE DS&AI 2024 | Question: 22</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "17",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422940/gate-ds&ai-2024-question-22\" target=\"_blank\">https://gateoverflow.in/422940/gate-ds&ai-2024-question-22</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"3463\"></a><div itemprop=\"text\"><p>Suppose you are given an implementation of a queue of integers. The operations that can be performed on the queue are:</p><ol style=\"list-style-type:lower-roman\"><li>\\( \\text{isEmpty (Q)} \\) — returns true if the queue is empty, false otherwise.</li><li>\\( \\text{delete (Q)} \\) — deletes the element at the front of the queue and returns its value.</li><li>\\( \\text{insert (Q, i)} \\) — inserts the integer i at the rear of the queue.</li></ol><p>Consider the following function:</p><pre class=\"prettyprint lang-c_cpp\">void f (queue Q) {\nint i ;\nif (!isEmpty(Q)) {\n   i = delete(Q);\n   f(Q);\n   insert(Q, i);\n  }\n}</pre><p>What operation is performed by the above function \\( f \\) ?</p></div><br><br><b>GATE IT 2007 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>Leaves the queue \\( Q \\) unchanged</p>",
            "<p>Reverses the order of the elements in the queue \\( Q \\)</p>",
            "<p>Deletes the element at the front of the queue&nbsp;\\( Q \\) and inserts it at the rear keeping the other elements in the same order</p>",
            "<p>Empties the queue \\( Q \\)</p>"
          ],
          "correct_answer": "<p>Reverses the order of the elements in the queue \\( Q \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3463/gate-it-2007-question-30\" target=\"_blank\">https://gateoverflow.in/3463/gate-it-2007-question-30</a></p>"
        }
      ]
    }
  ]
});
