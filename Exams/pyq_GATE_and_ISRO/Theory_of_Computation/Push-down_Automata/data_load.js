window.__examLoadCallback({
  "title": "Theory_of_Computation - Push-down_Automata",
  "duration": 39,
  "sections": [
    {
      "name": "Push-down_Automata",
      "questions": [
        {
          "id": 1,
          "question": "<p>Which ONE of the following languages is accepted by a deterministic pushdown automaton? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Any regular language.</p>",
            "<b>B.</b> <p>Any context-free language.</p>",
            "<b>C.</b> <p>Any language accepted by a non-deterministic pushdown automaton.</p>",
            "<b>D.</b> <p>Any decidable language.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Any regular language.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460821/gate-cse-2025-set-2-question-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the pushdown automaton (PDA) \\(P\\) below, which runs on the input alphabet \\(\\{a,b\\}\\), has stack alphabet \\( \\{ \\perp ,A\\}\\), and has three states \\( \\{s,p,q\\}\\), with \\(s\\)  being\nthe start state. A transition from state \\(u\\)  to state \\(v\\) , labelled \\(c/X/\\gamma \\) , where \\(c\\) is\nan input symbol or , \\(X\\) is a stack symbol, and \\(\\gamma \\) is a string of stack symbols,\nrepresents the fact that in state  \\(u\\), the PDA can read  \\(c\\) from the input, with  \\(X\\) on\nthe top of its stack, pop  \\(X\\) from the stack, push in the string  \\(\\gamma \\) on the stack, and\ngo to state \\(v\\). In the initial configuration, the stack has only the symbol  \\(\\perp \\) in it.\nThe PDA accepts by empty stack.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Push-down_Automata\\q30_cad321de.jpg\"><br>Which one of the following options correctly describes the language accepted by \\(P\\)? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\( \\{ a^mb^n |1\\leq m\\text{ and }n \\lt m \\}\\)</p>",
            "<b>B.</b> <p>\\( \\{ a^mb^n |0 \\leq n \\leq m \\}\\)</p>",
            "<b>C.</b> <p>\\( \\{ a^mb^n |0\\leq m\\text{ and } 0 \\lt n \\}\\)</p>",
            "<b>D.</b> <p>\\( \\{ a^m |0\\leq m \\} \\cup \\{b^n|0 \\leq n \\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\( \\{ a^mb^n |1\\leq m\\text{ and }n \\lt m \\}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399281/gate-cse-2023-question-30#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>In a  pushdown automaton \\(P=(Q, \\Sigma, \\Gamma, \\delta, q_0, F)\\), a transition of the form,\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Push-down_Automata\\q51a_7888028e.jpg\"><br>where \\(p,q \\in Q \\; a \\in \\sigma \\cup \\{ \\epsilon \\} ,\\;X,Y, \\in \\Gamma \\cup \\{ \\epsilon \\}\\), represents<br><br>\\((q,Y) \\in \\delta(p,a,X)\\)\n<br><br>\nConsider the following pushdown automaton over the input alphabet \\(\\Sigma = \\{a,b\\}\\) and stack alphabet \\(\\Gamma = \\{ \\#, A\\}\\). <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Push-down_Automata\\q51b_09056d3e.jpg\"><br>\nThe number of strings of length 100 accepted by the above pushdown automaton is ___________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357400/gate-cse-2021-set-1-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which one of the following is FALSE? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is a unique minimal DFA for every regular language</p>",
            "<b>B.</b> <p>Every NFA can be converted to an equivalent PDA.</p>",
            "<b>C.</b> <p>Complement of every context-free language is recursive.</p>",
            "<b>D.</b> <p>Every nondeterministic PDA can be converted to an equivalent deterministic PDA.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Every nondeterministic PDA can be converted to an equivalent deterministic PDA.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1308/gate2009-16-isro2017-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the transition diagram of a PDA given below with input alphabet \\(\\Sigma \\)={a,b} and stack alphabet \\(\\Gamma\\)={X,Z}. Z is the initial stack symbol. Let L denote the language accepted by the PDA. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Push-down_Automata\\q43_b54e1db2.jpg\"> <br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L=\\{a^{n}b^{n}|n\\geq 0\\}\\) is not accepted by any finite automata</p>",
            "<b>B.</b> <p>\\(L=\\{a^{n}|n\\geq 0\\}\\cup \\{a^{n}b^{n}|n\\geq 0\\}\\) is not accepted by any deterministic PDA</p>",
            "<b>C.</b> <p>L is not accepted by any Turing machine that halts one very input</p>",
            "<b>D.</b> <p>\\(L=\\{a^{n}|n\\geq 0\\}\\cup \\{a^{n}b^{n}|n\\geq 0\\}\\) is deterministic context-free</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(L=\\{a^{n}|n\\geq 0\\}\\cup \\{a^{n}b^{n}|n\\geq 0\\}\\) is deterministic context-free</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39732/gate2016-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the NPDA \\(\\langle Q=\\{q_{0},q_{1},q_{2}\\},\\) \\(\\Sigma  =\\{0,1\\},\\) \\(\\Gamma =\\{0,1,\\perp \\},\\delta ,q_{0},\\perp ,\\) \\(F=\\{q_{2}\\} \\rangle\\), where (as per usual convention) Q is the set of states,  \\(\\Sigma\\) is the input alphabet, \\(\\Gamma\\) is the stack alphabet, \\(\\delta\\) is the state transition function, \\(q_{0}\\)  is the initial state, \\(\\perp\\) is the initial stack symbol, and \\(F\\) is the set of accepting states. The state transition is as follows:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Push-down_Automata\\q40_d8080bd1.jpg\"><br> Which one of the following sequences must follow the string 101100 so that the overall string is accepted by the automaton? <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(10110\\)</p>",
            "<b>B.</b> <p>\\(10010\\)</p>",
            "<b>C.</b> <p>\\(01010\\)</p>",
            "<b>D.</b> <p>\\(01001\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(10010\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8357/gate2015-1-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the pushdown automaton (PDA) below which runs over the input alphabet (a, b, c). It has the stack alphabet \\(\\{Z_0, X\\}\\) where \\(Z_0\\) is the bottom-of-stack marker. The set of states of the PDA is (s, t, u, f} where s is the start state and f is the final state. The PDA accepts by final state. The transitions of the PDA given below are depicted in a standard manner. For example, the transition \\((s, b, X) \\rightarrow (t, XZ_0)\\) means that if the PDA is in state s and the symbol on the top of the stack is X, then it can read b from the input and move to state t after popping the top of stack and pushing the symbols \\(Z_0\\) and X (in that order) on the stack. <br>\n\\((s, a, Z_0) \\rightarrow (s, XXZ_0)\\)<br>\n\\((s, \\epsilon, Z_0) \\rightarrow (f, \\epsilon)\\)<br>\n\\((s, a, X) \\rightarrow (s, XXX)\\)<br>\n\\((s, b, X) \\rightarrow (t, \\epsilon)\\)<br>\n\\((t, b, X) \\rightarrow (t,\\epsilon)\\)<br>\n\\((t, c, X) \\rightarrow (u, \\epsilon)\\)<br>\n\\((u, c, X) \\rightarrow (u, \\epsilon)\\)<br>\n\\((u, \\epsilon, Z_0) \\rightarrow (f, \\epsilon)\\)<br>\nThe language accepted by the PDA is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{a^lb^mc^n \\mid l = m = n\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{a^l b^m c^n \\mid l = m\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{a^lb^mc^n \\mid 2l = m + n\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{a^lb^mc^n \\mid m = n\\}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\{a^lb^mc^n \\mid 2l = m + n\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3572/gate2006-it-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which of the following languages is accepted by a non-deterministic pushdown automaton (PDA) but NOT by a deterministic PDA? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{a^nb^nc^n \\mid n \\geq 0\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{a^lb^mc^n \\mid l \\neq m \\text{ or } m \\neq n\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{a^nb^n \\mid n \\geq 0\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{a^mb^n \\mid m, n \\geq 0\\}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\{a^lb^mc^n \\mid l \\neq m \\text{ or } m \\neq n\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3570/gate2006-it-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let P be a non-deterministic push-down automaton (NPDA) with exactly one state, q, and exactly one symbol, Z, in its stack alphabet. State q is both the starting as well as the accepting state of the PDA. The stack is initialized with one Z before the start of the operation of the PDA. Let the input alphabet of the PDA be \\(\\Sigma\\). Let L(P) be the language accepted by the PDA by reading a string and reaching its accepting state. Let N(P) be the language accepted by the PDA by reading a string and emptying its stack.\nWhich of the following statements is TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L(P) is necessarily \\(\\Sigma^{*}\\) but N(P) is not necessarily \\(\\Sigma^{*}\\).</p>",
            "<b>B.</b> <p>N(P) is necessarily \\(\\Sigma^{*}\\) but L(P) is not necessarily \\(\\Sigma^{*}\\).</p>",
            "<b>C.</b> <p>Both L(P) and N(P) are necessarily \\(\\Sigma^{*}\\).</p>",
            "<b>D.</b> <p>Neither L(P) nor N(P) are necessarily \\(\\Sigma^{*}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Neither L(P) nor N(P) are necessarily \\(\\Sigma^{*}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3785/gate2005-it-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Let \\(M=(K, \\Sigma, \\Gamma, \\Delta, s, F)\\) be a pushdown automaton, where<br>\n\\(K=(s, f), F=\\{f\\}, \\Sigma=\\{a, b\\}, \\Gamma=\\{a\\} \\text { and }\\)<br>\n\\(\\Delta=\\{((s, a, \\epsilon),(s, a)),((s, b, \\epsilon),(s, a)),((s, a, a),(f, \\epsilon)),((f, a, a),(f, \\epsilon)) ((f, b, a),(f, \\epsilon))\\}\\)<br>Which one of the following strings is not a member of L(M)? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>aaa</p>",
            "<b>B.</b> <p>aabab</p>",
            "<b>C.</b> <p>baaba</p>",
            "<b>D.</b> <p>bab</p>"
          ],
          "correct_answer": "<b>D.</b> <p>bab</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3683/gate2004-it-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
          "question": "<p>Let \\(L_1\\) be the set of all languages accepted by a PDA by final state and \\(L_2\\) the set of all languages accepted by empty stack. Which of the following is true? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_1 = L_2\\)</p>",
            "<b>B.</b> <p>\\(L_1 \\supset L_2\\)</p>",
            "<b>C.</b> <p>\\(L_1 \\subset L_2\\)</p>",
            "<b>D.</b> <p>None</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(L_1 = L_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/377/gate1999-1-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which of the following languages over \\(\\left\\{a,b,c\\right\\}\\) is accepted by a deterministic pushdown automata? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left\\{ wcw^R \\mid w \\in \\left\\{a,b\\right\\}^*\\right\\}\\)</p>",
            "<b>B.</b> <p>\\(\\left\\{ ww^R \\mid w \\in \\{a,b,c\\}^*\\right\\}\\)</p>",
            "<b>C.</b> <p>\\(\\left\\{ a^nb^nc^n \\mid n \\geq 0 \\right\\}\\)</p>",
            "<b>D.</b> <p>\\(\\left\\{w \\mid w \\text{ is a palindrome over } \\left\\{a,b,c\\right\\} \\right\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\left\\{ wcw^R \\mid w \\in \\left\\{a,b\\right\\}^*\\right\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2262/gate1997-6-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following conversions is not possible (algorithmically)? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Regular grammar to context free grammar</p>",
            "<b>B.</b> <p>Non-deterministic FSA to deterministic FSA</p>",
            "<b>C.</b> <p>Non-deterministic PDA to deterministic PDA</p>",
            "<b>D.</b> <p>Non-deterministic Turing machine to deterministic Turing machine</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Non-deterministic PDA to deterministic PDA</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2459/gate1994-1-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
