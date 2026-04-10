window.__examLoadCallback({
  "title": "Discrete_Mathematics - Discrete_Mathematics - Slot 21",
  "duration": 42,
  "sections": [
    {
      "name": "Discrete_Mathematics",
      "questions": [
        {
          "id": 1,
          "question": "<p>A relation R is defined on ordered pairs of integers as follows:<br>\n(x,y)R(u,v) if x\\(\\lt\\)u and y\\(\\gt\\)v. Then R is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Neither a Partial Order nor an Equivalence Relation</p>",
            "<b>B.</b> <p>A Partial Order but not a Total Order</p>",
            "<b>C.</b> <p>A Total Order</p>",
            "<b>D.</b> <p>An Equivalence Relation</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Neither a Partial Order nor an Equivalence Relation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/883/gate2006-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>The set {1, 2, 3, 5, 7, 8, 9} under multiplication modulo 10 is not a group. Given\nbelow are four plausible reasons. Which one of them is false? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is not closed</p>",
            "<b>B.</b> <p>2 does not have an inverse</p>",
            "<b>C.</b> <p>3 does not have an inverse</p>",
            "<b>D.</b> <p>8 does not have an inverse</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3 does not have an inverse</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/882/gate2006-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let X, Y, Z be sets of sizes x, y and z respectively. Let W=X\\(\\times\\)Y and E be the\nset of all subsets of W. The number of functions from Z to E is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(Z^{2xy}\\)</p>",
            "<b>B.</b> <p>\\(Z*2^{xy}\\)</p>",
            "<b>C.</b> <p>\\(Z^{2x+y}\\)</p>",
            "<b>D.</b> <p>\\(2^{xyz}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(2^{xyz}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/881/gate2006-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A sink in a directed graph is a vertex i such that there is an edge from every vertex \\(j \\neq i\\) to i and there is no edge from i to any other vertex. A directed graph G with n vertices is represented by its adjacency matrix A, where A[i] [j] = 1 if there is an edge directed from vertex i to j and 0 otherwise. The following algorithm determines whether there is a sink in the graph G.<br><pre><code> i = 0;\ndo {\n    j = i + 1;\n    while ((j &lt; n) &amp;&amp; E1) j++;\n    if (j &lt; n) E2;\n} while (j &lt; n);\nflag = 1;\nfor (j = 0; j &lt; n; j++)\n    if ((j! = i) &amp;&amp; E3) flag = 0;\nif (flag) printf(\"Sink exists\") ;\nelse printf (\"Sink does not exist\");</code></pre> <br>\nChoose the correct expression for \\(E_3\\). <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((A[i][j] \\ \\&amp;\\&amp; \\ !A[j][i])\\)</p>",
            "<b>B.</b> <p>\\((!A[i][j] \\ \\&amp;\\&amp; \\ A[j][i])\\)</p>",
            "<b>C.</b> <p>\\((!A[i][j] \\ \\left | \\right | A[j][i])\\)</p>",
            "<b>D.</b> <p>\\((A[i][j] \\ \\left | \\right | \\ !A[j][i])\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\((A[i][j] \\ \\left | \\right | \\ !A[j][i])\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3857/gate2005-it-84b\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A sink in a directed graph is a vertex i such that there is an edge from every vertex \\(j \\neq i\\) to i and there is no edge from i to any other vertex. A directed graph G with n vertices is represented by its adjacency matrix A, where A[i] [j] = 1 if there is an edge directed from vertex i to j and 0 otherwise. The following algorithm determines whether there is a sink in the graph G.<br><pre><code> i = 0;\ndo {\n    j = i + 1;\n    while ((j &lt; n) &amp;&amp; E1) j++;\n    if (j &lt; n) E2;\n} while (j &lt; n);\nflag = 1;\nfor (j = 0; j &lt; n; j++)\n    if ((j! = i) &amp;&amp; E3) flag = 0;\nif (flag) printf(\"Sink exists\") ;\nelse printf (\"Sink does not exist\");</code></pre> <br>\nChoose the correct expression for \\(E_3\\) and \\(E_2\\). <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(E_1 : A[i][j]\\) and \\(E_2 : i = j;\\)</p>",
            "<b>B.</b> <p>\\(E_1 :\\ !A[i][j]\\) and \\(E_2 : i = j + 1;\\)</p>",
            "<b>C.</b> <p>\\(E_1:\\ !A[i][j]\\) and \\(E_2 : i = j;\\)</p>",
            "<b>D.</b> <p>\\(E_1 : A[i][j]\\) and \\(E_2 : i = j + 1;\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(E_1:\\ !A[i][j]\\) and \\(E_2 : i = j;\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3856/gate2005-it-84a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>In a communication network, a packet of length L bits takes link \\(L_1\\) with a probability of \\(p_1\\) or link \\(L_2\\) with a probability of \\(p_2\\). Link \\(L_1\\) and \\(L_2\\) have bit error probability of \\(b_1\\) and \\(b_2\\) respectively. The probability that the packet will be received without error via either \\(L_1\\) or \\(L_2\\) is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((1 - b_1)^Lp_1 + (1 - b_2)^Lp_2\\)</p>",
            "<b>B.</b> <p>\\([1 - (b_1 + b_2)^L]p_1p_2\\)</p>",
            "<b>C.</b> <p>\\((1 - b_1)^L (1 - b_2)^Lp_1p_2\\)</p>",
            "<b>D.</b> <p>\\(1 - (b_1^Lp_1 + b_2^Lp_2)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((1 - b_1)^Lp_1 + (1 - b_2)^Lp_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3837/gate2005-it-74\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A line L in a circuit is said to have a stuck-at-0 fault if the line permanently has a logic value 0. Similarly a line L in a circuit is said to have a stuck-at-1 fault if the line permanently has a logic value 1. A circuit is said to have a multiple stuck-at fault if one or more lines have stuck at faults. The total number of distinct multiple stuck-at faults possible in a circuit with N lines is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(3^N\\)</p>",
            "<b>B.</b> <p>\\(3^N - 1\\)</p>",
            "<b>C.</b> <p>\\(2^N - 1\\)</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(3^N - 1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3807/gate2005-it-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Let P(x) and Q(x) be arbitrary predicates. Which of the following statements is always TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left(\\left(\\forall x \\left(P\\left(x\\right) \\vee Q\\left(x\\right)\\right)\\right)\\right) \\implies \\left(\\left(\\forall x P\\left(x\\right)\\right) \\vee \\left(\\forall xQ\\left(x\\right)\\right)\\right)\\)</p>",
            "<b>B.</b> <p>\\(\\left(\\forall x \\left(P\\left(x\\right) \\implies Q\\left(x\\right)\\right)\\right) \\implies \\left(\\left(\\forall x P\\left(x\\right)\\right) \\implies \\left(\\forall xQ\\left(x\\right)\\right)\\right)\\)</p>",
            "<b>C.</b> <p>\\(\\left(\\forall x\\left(P\\left(x\\right) \\right) \\implies \\forall x \\left( Q\\left(x\\right)\\right)\\right) \\implies \\left(\\forall x \\left( P\\left(x\\right) \\implies Q\\left(x\\right)\\right)\\right)\\)</p>",
            "<b>D.</b> <p>\\(\\left(\\forall x \\left( P\\left(x\\right)\\right) \\Leftrightarrow \\left(\\forall x \\left( Q\\left(x\\right)\\right)\\right) \\right) \\implies \\left(\\forall x \\left (P\\left(x\\right) \\Leftrightarrow Q\\left(x\\right)\\right)\\right)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\left(\\forall x \\left(P\\left(x\\right) \\implies Q\\left(x\\right)\\right)\\right) \\implies \\left(\\left(\\forall x P\\left(x\\right)\\right) \\implies \\left(\\forall xQ\\left(x\\right)\\right)\\right)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3783/gate2005-it-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let \\(n = p^{2}q\\), where p and q are distinct prime numbers. How many numbers m satisfy \\(1 \\leq m \\leq n\\) and gcd(m,n)=1? <br>Note that gcd(m,n) is the greatest common divisor of m and n. <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(p(q - 1)\\)</p>",
            "<b>B.</b> <p>\\(pq\\)</p>",
            "<b>C.</b> <p>\\(\\left ( p^{2}-1 \\right ) (q - 1)\\)</p>",
            "<b>D.</b> <p>\\(p(p - 1) (q - 1)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(p(p - 1) (q - 1)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3780/gate2005-it-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Let A be a set with n elements. Let C be a collection of distinct subsets of A such that for any two subsets \\(S_1\\) and \\(S_2\\) in C, either \\(S_1 \\subset S_2\\) or \\(S_2\\subset S_1\\). What is the maximum cardinality of C? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n</p>",
            "<b>B.</b> <p>n+1</p>",
            "<b>C.</b> <p>\\(2^{n-1} + 1\\)</p>",
            "<b>D.</b> <p>n!</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n+1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3779/gate2005-it-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>An unbiased coin is tossed repeatedly until the outcome of two successive tosses is the same. Assuming that the trials are independent, the expected number of tosses is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3778/gate2005-it-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Let \\(f\\) be a function from a set A to a set B,  \\(g\\) a function from B to C, and \\(h\\) a function from A to C, such that \\(h(a) = g(f(a))\\) for all \\(a \\in A\\). Which of the following statements is always true for all such functions \\(f\\) and \\(g\\)? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>g is onto \\(\\implies h\\) is onto</p>",
            "<b>B.</b> <p>h is onto \\(\\implies f\\) is onto</p>",
            "<b>C.</b> <p>h is onto \\(\\implies g\\) is onto</p>",
            "<b>D.</b> <p>h is onto \\(\\implies f\\) and g are onto</p>"
          ],
          "correct_answer": "<b>C.</b> <p>h is onto \\(\\implies g\\) is onto</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3777/gate2005-it-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>In a depth-first traversal of a graph G with n vertices, k edges are marked as tree edges. The number of connected components in G is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>k</p>",
            "<b>B.</b> <p>k+1</p>",
            "<b>C.</b> <p>n-k-1</p>",
            "<b>D.</b> <p>n-k</p>"
          ],
          "correct_answer": "<b>D.</b> <p>n-k</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3759/gate2005-it-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>A bag contains 10 blue marbles, 20 green marbles and 30 red marbles. A marble is drawn from the bag, its colour recorded and it is put back in the bag. This process is repeated 3 times. The probability that no two of the marbles drawn have the same colour is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left(\\dfrac{1}{36}\\right)\\)</p>",
            "<b>B.</b> <p>\\(\\left(\\dfrac{1}{6}\\right)\\)</p>",
            "<b>C.</b> <p>\\(\\left(\\dfrac{1}{4}\\right)\\)</p>",
            "<b>D.</b> <p>\\(\\left(\\dfrac{1}{3}\\right)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\left(\\dfrac{1}{6}\\right)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3745/gate2005-it-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A random bit string of length n is constructed by tossing a fair coin n times and setting a bit to 0 or 1\ndepending on outcomes head and tail, respectively. The probability that two such randomly\ngenerated strings are not identical is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(1/2^{n}\\)</p>",
            "<b>B.</b> <p>1-1/n</p>",
            "<b>C.</b> <p>1/n!</p>",
            "<b>D.</b> <p>\\(1-(1/2^{n})\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(1-(1/2^{n})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1177/gate2005-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
