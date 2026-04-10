window.__examLoadCallback({
  "title": "Theory_of_Computation - Theory_of_Computation - Slot 15",
  "duration": 42,
  "sections": [
    {
      "name": "Theory_of_Computation",
      "questions": [
        {
          "id": 1,
          "question": "<p>A single tape Turing Machine M has two states q0 and q1, of which q0 is the starting state. The tape alphabet of M is {0, 1, B} and its input alphabet is {0, 1}. The symbol B is the blank symbol used to indicate end of an input string. The transition function of M is described in the following table   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q53_abd93de7.jpg\"><br> The table is interpreted as illustrated below. The entry (q1, 1, R) in row q0 and column 1 signifies that if M is in state q0 and reads 1 on the current tape square, then it writes 1 on the same tape square, moves its tape head one position to the right and transitions to state q1. Which of the following statements is true about M ? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>M does not halt on any string in (0 + 1)+</p>",
            "<b>B.</b> <p>M does not halt on any string in (00 + 1)*</p>",
            "<b>C.</b> <p>M halts on all string ending in a 0</p>",
            "<b>D.</b> <p>M halts on all string ending in a 1</p>"
          ],
          "correct_answer": "<b>A.</b> <p>M does not halt on any string in (0 + 1)+</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/941/gate2003-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider two languages L1 and L2 each on the alphabet \\(\\Sigma\\). Let \\(f:\\Sigma \\rightarrow \\Sigma\\) be a polynomial time computable bijection such that \\((\\forall x)[x \\in L1 \\; \\; if \\; \\; f(x) \\in L2]\\). Further, let \\(f^{-1}\\) be also polynomial time computable. Which of the following CANNOT be true? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 \\(\\in\\) P and L2 is finite</p>",
            "<b>B.</b> <p>L1 \\(\\in\\)\nNP and L2 \\(\\in\\) P</p>",
            "<b>C.</b> <p>L1 is undecidable and L2 is decidable</p>",
            "<b>D.</b> <p>L1 is recursively enumerable and L2 is recursive</p>"
          ],
          "correct_answer": "<b>C.</b> <p>L1 is undecidable and L2 is decidable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/356/gate2003-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let G = ({S}, {a, b} R, S) be a context free grammar where the rule set R is \\(S\\rightarrow aSb|SS|\\epsilon\\)<br>\nWhich of the following statements is true? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>G is not ambiguous</p>",
            "<b>B.</b> <p>There exist x, y, \\(\\in\\) L (G) such that xy \\(\\notin\\) L(G)</p>",
            "<b>C.</b> <p>There is a deterministic pushdown automaton that accepts L(G)</p>",
            "<b>D.</b> <p>We can find a deterministic finite state automaton that accepts L(G)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>There is a deterministic pushdown automaton that accepts L(G)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/940/gate2003-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following deterministic finite state automaton M. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q50_fa81a7bc.jpg\"><br>  Let S denote the set of seven bit binary strings in which the first, the fourth, and\nthe last bits are 1. <br>The number of strings in S that are accepted by M is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/939/gate2003-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which of the following suffices to convert an arbitrary CFG to an LL(1) grammar? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Removing left recursion alone</p>",
            "<b>B.</b> <p>Factoring the grammar alone</p>",
            "<b>C.</b> <p>Removing left recursion and factoring the grammar</p>",
            "<b>D.</b> <p>None of this</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of this</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/906/gate2003-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>If the strings of a language L can be effectively enumerated in lexicographic (i.e.\nalphabetic) order, which of the following statements is true? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L is necessarily finite</p>",
            "<b>B.</b> <p>L is regular but not necessarily finite</p>",
            "<b>C.</b> <p>L is context free but not necessarily regular</p>",
            "<b>D.</b> <p>L is recursive but not necessarily context free</p>"
          ],
          "correct_answer": "<b>D.</b> <p>L is recursive but not necessarily context free</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/120/gate2003-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The regular expression 0*(10*)* denotes the same set as <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(1*0)*1*</p>",
            "<b>B.</b> <p>0 + (0 + 10) *</p>",
            "<b>C.</b> <p>(0 + 1)* 10(0 + 1)*</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(1*0)*1*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/905/gate2003-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Nobody knows yet if P = NP. Consider the language L defined as follows : \\(L=\\left\\{\\begin{matrix} (0+1)^{*}\\; \\; \\; if P=NP\\\\ \\Phi \\; \\; otherwise \\end{matrix}\\right.\\)\n<br> Which of the following statements is true ? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L is recursive</p>",
            "<b>B.</b> <p>L is recursively enumerable but not recursive</p>",
            "<b>C.</b> <p>L is not recursively enumerable</p>",
            "<b>D.</b> <p>Whether L is recursive or not will be known after we find out if P = NP</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L is recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/904/gate2003-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>The C language is : <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A context free language</p>",
            "<b>B.</b> <p>A context sensitive language</p>",
            "<b>C.</b> <p>A regular language</p>",
            "<b>D.</b> <p>Parsable fully only by a Turing machine</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A context sensitive language</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/848/gate2002-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which of the following is true ? <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The complement of a recursive language is recursive.</p>",
            "<b>B.</b> <p>The complement of a recursively enumerable language is recursively\nenumerable.</p>",
            "<b>C.</b> <p>The complement of a recursive language is either recursive or recursively\nenumerable.</p>",
            "<b>D.</b> <p>The complement of a context-free language is context-free.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The complement of a recursive language is recursive.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/844/gate2002-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The smallest finite automaton which accepts the language {x length of x is\ndivisible by 3} has <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 states</p>",
            "<b>B.</b> <p>3 states</p>",
            "<b>C.</b> <p>4 states</p>",
            "<b>D.</b> <p>5 states</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3 states</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/843/gate2002-2-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The finite state machine described by the following state diagram with A as\nstarting state, where an arc label is x/y and x stands for 1-bit input and y stands\nfor 2-bit output. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q30_efb2d498.jpg\"> <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Outputs the sum of the present and the previous bits of the input.</p>",
            "<b>B.</b> <p>(Outputs 01 whenever the input sequence contains 11</p>",
            "<b>C.</b> <p>Outputs 00 whenever the input sequence contains 10</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Outputs the sum of the present and the previous bits of the input.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/835/gate2002-2-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The language accepted by a Pushdown Automaton in which the stack is limited\nto 10 items is best described as <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Context free</p>",
            "<b>B.</b> <p>Regular</p>",
            "<b>C.</b> <p>Deterministic context</p>",
            "<b>D.</b> <p>Recursive</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/811/gate2002-1-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following decision problems:\n<br><br>\n(P1): Does a given finite state machine accept a given string?<br>(P2): Does a given context free grammar generate an infinite number of strings?<br><br>Which of the following statements is true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both(P1) and (P2) are decidable</p>",
            "<b>B.</b> <p>Neither (P1) nor (P2) is decidable</p>",
            "<b>C.</b> <p>Only (P1) is decidable</p>",
            "<b>D.</b> <p>Only (P2) is decidable</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Both(P1) and (P2) are decidable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/656/gate2000-2-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>What can be said about a regular language L over {a} whose minimal finite state automaton has two states? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L must be \\(\\{a^n \\mid n \\ \\text{ is odd}\\}\\)</p>",
            "<b>B.</b> <p>L must be \\(\\{a^n \\mid n \\ \\text{ is even}\\}\\)</p>",
            "<b>C.</b> <p>L must be \\(\\{a^n \\mid n \\geq 0\\}\\)</p>",
            "<b>D.</b> <p>Either L must be\\(\\{a^n \\mid n \\text{ is odd}\\}\\), or L must be \\(\\{a^n \\mid n \\text{ is even}\\}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Either L must be\\(\\{a^n \\mid n \\text{ is odd}\\}\\), or L must be \\(\\{a^n \\mid n \\text{ is even}\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/655/gate2000-2-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
