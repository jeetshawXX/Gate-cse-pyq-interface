window.__examLoadCallback({
  "title": "Finite_Automata - Finite_Automata - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Finite_Automata",
      "questions": [
        {
          "id": 1,
          "question": "<p>Let \\(\\Sigma = \\{1, 2, 3, 4\\}\\). For \\(x \\in \\Sigma^*\\), let \\(\\text{prod}(x)\\) be the product of symbols in \\(x\\) modulo 7. We take \\(\\text{prod}(\\epsilon) = 1\\), where \\(\\epsilon\\) is the null string. <br><br>For example, \\(\\text{prod}(124) = (1 \\times 2 \\times 4) \\mod 7 = 1\\). <br><br>Define\n\\( L = \\{x \\in \\Sigma^* \\mid \\text{prod}(x) = 2\\}. \\)<br><br>\nThe number of states in a minimum state DFA for \\(L\\) is ___________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460843/gate-cse-2025-set-2-question-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following deterministic finite automaton (DFA) defined over the alphabet, \\( \\Sigma = \\{ a, b \\} \\). Identify which of the following language(s) is/are accepted by the given DFA. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Finite_Automata\\q40_3b7ca53e.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The set of all strings containing an even number of \\( b \\)'s.</p>",
            "<b>B.</b> <p>The set of all strings containing the pattern \\( bab \\).</p>",
            "<b>C.</b> <p>The set of all strings ending with the pattern \\( bab \\).</p>",
            "<b>D.</b> <p>The set of all strings not containing the pattern \\( aba \\).</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The set of all strings ending with the pattern \\( bab \\).</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460040/gate-cse-2025-set-1-question-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A regular language \\(L\\) is accepted by a non-deterministic finite automaton (NFA) with \\(n\\) states. Which of the following statement(s) is/are FALSE? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L\\) may have an accepting NFA with &lt; \\(n\\) states.</p>",
            "<b>B.</b> <p>\\(L\\) may have an accepting DFA with &lt; \\(n\\) states.</p>",
            "<b>C.</b> <p>There exists a DFA with \\(\\leq 2^n\\) states that accepts \\(L\\).</p>",
            "<b>D.</b> <p>Every DFA that accepts \\(L\\) has \\(&gt; 2^n\\) states.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Every DFA that accepts \\(L\\) has \\(&gt; 2^n\\) states.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460062/gate-cse-2025-set-1-question-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the 5 -state DFA \\( M \\) accepting the language \\( L(M) \\subset(0+1)^* \\) shown below. For any string \\( w \\in(0+1)^* \\) let \\( n_0(w) \\) be the number of \\( 0^{\\prime} s \\) in \\( w \\) and \\( n_1(w) \\) be the number of 1 's in \\( w \\).\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Finite_Automata\\q40_978712f8.webp\"><br>\nWhich of the following statements is/are FALSE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>States 2 and 4 are distinguishable in \\( M \\)</p>",
            "<b>B.</b> <p>States 3 and 4 are distinguishable in \\( M \\)</p>",
            "<b>C.</b> <p>States 2 and 5 are distinguishable in \\( M \\)</p>",
            "<b>D.</b> <p>Any string \\( w \\) with \\( n_0(w)=n_1(w) \\) is in \\( L(M) \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>States 3 and 4 are distinguishable in \\( M \\)</p>",
            "<b>C.</b> <p>States 2 and 5 are distinguishable in \\( M \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422802/gate-cse-2024-set-1-question-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the language L over the alphabet {0, 1}, given below:<br><br>\\(L = \\{w \\in \\{0, 1\\}^* | w \\text{ does not contain three or more consecutive 1's} \\}.\\)<br>\nThe minimum number of states in a Deterministic Finite-State Automaton (DFA)\nfor L is _____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399258/gate-cse-2023-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which one of the following regular expressions correctly represents the language of the finite automaton given below? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Finite_Automata\\q2_1323799a.jpg\"><br> <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ab*bab* + ba*aba*</p>",
            "<b>B.</b> <p>(ab*b)*ab* + (ba*a)*ba*</p>",
            "<b>C.</b> <p>(ab*b + ba*a)*(a* + b*)</p>",
            "<b>D.</b> <p>(ba*a + ab*b)*(ab* + ba*)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(ba*a + ab*b)*(ab* + ba*)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371934/Gate-cse-2022-question-2#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Suppose we want to design a synchronous circuit that processes a string of 0's and 1's. Given a string, it produces another string by replacing the first 1 in any subsequence of consecutive 1's by a 0. Consider the following example.<br><br>\n\\(\\begin{array}{ll} \\text{Input sequence:} &amp; 00100011000011100 \\\\ \\text{Output sequence:} &amp; 00000001000001100 \\end{array}\\)<br><br>\nA Mealy Machine is a state machine where both the next state and the output are functions of the present state and the current input.<br>The above mentioned circuit can be designed as a two-state Mealy machine. The states in the Mealy machine can be represented using Boolean values 0 and 1. We denote the current state, the next state, the next incoming bit, and the output bit of the Mealy machine by the variables s, t, b and y respectively.\n<br>\nAssume the initial state of the Mealy machine is 0.\n<br><br>\nWhat are the Boolean expressions corresponding to t and y in terms of s and b? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>t=s+b<br>y=sb</p>",
            "<b>B.</b> <p>t=b<br>y=sb</p>",
            "<b>C.</b> <p>t=b<br>y=s\\(\\bar{b}\\)</p>",
            "<b>D.</b> <p>t=s+b<br>y=s\\(\\bar{b}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>t=b<br>y=sb</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357512/gate-cse-2021-set-2-question-28#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following deterministic finite automaton (DFA)<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Finite_Automata\\q17_652cadc0.jpg\"><br>The number of strings of length 8 accepted by the above automaton is  _________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "256",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357523/gate-cse-2021-set-2-question-17#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following language:<br>\n<br>\\(L= \\{ w \\in \\{0,1\\}^* \\mid w \\text{ ends with the substring } 011 \\}\\)\n<br><br>\nWhich one of the following deterministic finite automata accepts \\(L\\)?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Finite_Automata\\q38_cacc54fd.jpg\"><br> <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357413/gate-cse-2021-set-1-question-38#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following language.<br><br>\nL={\\(x \\in \\{a,b\\}^*|\\) number of a's in x divisible by 2 but not divisible by 3}<br><br>\nThe minimum number of states in DFA that accepts L is _______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333180/gate2020-cs-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Let \\(\\Sigma\\) be the set of all bijections from {1,...,5} to {1,...,5}, where \\(id\\) denotes the identity function, i.e. \\(id(j)=j,\\forall j\\). Let \\(\\circ\\) denote composition on functions. For a string \\(x = x_1x_2 ... x_n \\in \\Sigma ^n, n \\geq 0\\), let \\(\\pi(x) = x_1\\circ x_2\\circ ... \\circ x_n\\). Consider the language \\(L = \\{x \\in \\Sigma ^* | \\pi(x) = id\\}\\). The minimum number of states in any DFA accepting L is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "120",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302800/gate2019-cs-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Given a language L, define \\(L^{i}\\) as follows:<br> \\(L^{0}=\\{\\varepsilon \\} \\)<br>\\(L^{i}=L^{i-1} \\cdot L \\) for all \\( i \\gt 0\\)<br> The order of a language L is defined as the smallest k such that \\(L^{k}=L^{k+1}\\).\nConsider the language L1 (over alphabet 0) accepted by the following automaton. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Finite_Automata\\q52_22ba3777.jpg\"> <br> The order of  L1 is ______ <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204127/gate2018-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Let N be an NFA with n states. Let k be the number of states of a minimal DFA which is equivalent to N. Which one of the following is necessarily true? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(k\\geqslant 2^{n}\\)</p>",
            "<b>B.</b> <p>\\(k\\geqslant n\\)</p>",
            "<b>C.</b> <p>\\(k\\leqslant n^{2}\\)</p>",
            "<b>D.</b> <p>\\(k\\leqslant 2^{n}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(k\\leqslant 2^{n}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204080/gate2018-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Let \\(\\delta\\) denote that transition function and \\(\\hat{\\delta}\\) denote the extended transition function of the \\(\\epsilon\\)- NFA whose transition table is given below: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Finite_Automata\\q54_ebe8ef02.jpg\">  <br>Then \\(\\hat{\\delta}(q_{2},aba)\\) is ____ <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\varnothing\\)</p>",
            "<b>B.</b> <p>\\(\\{q_{0},q_{1},q_{3}\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{q_{0},q_{1},q_{2}\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{q_{0},q_{2},q_{3}\\}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\{q_{0},q_{1},q_{2}\\}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118384/gate2017-2-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>The minimum possible number of states of a deterministic automaton that accepts the regular language \\(L=\\{w_{1}aw_{2}|w_{1},w_{2}\\in \\{a,b\\}^{*},|w_{1}|=2,|w_{2}|\\geq 3\\}\\) is ____ <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118160/gate2017-2-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
