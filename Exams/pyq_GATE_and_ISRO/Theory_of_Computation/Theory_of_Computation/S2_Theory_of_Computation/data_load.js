window.__examLoadCallback({
  "title": "Theory_of_Computation - Theory_of_Computation - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Theory_of_Computation",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider a context-free grammar \\( G \\) with the following 3 rules.\n<br> \\(\nS \\rightarrow a S, S \\rightarrow a S b S, S \\rightarrow c\n\\) <br>\nLet \\( w \\in L(G) \\). Let \\( n_a(w), n_b(w), n_c(w) \\) denote the number of times \\( a, b, c \\) occur in \\( w \\), respectively. Which of the following statements is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(n_a(w)&gt;n_b(w)\\)</p>",
            "<b>B.</b> <p>\\(n_a(w)&gt;n_c(w)-2 \\)</p>",
            "<b>C.</b> <p>\\(n_c(w)=n_b(w)+1 \\)</p>",
            "<b>D.</b> <p>\\(n_c(w)=n_b(w) * 2\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(n_a(w)&gt;n_c(w)-2 \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422855/gate-cse-2024-set-2-question-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Let M be the 5-state NFA with \\(\\epsilon\\)-transitions shown in the diagram below:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q31_4d8bc041.webp\"><br>\nWhich one of the following regular expressions represents the language accepted\nby M ? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((00)^*  +  1(11)^*\\)</p>",
            "<b>B.</b> <p>\\(0^* + (1 + 0(00)^*)(11)^*\\)</p>",
            "<b>C.</b> <p>\\((00)^* + (1 + (00)^*)(11)^*\\)</p>",
            "<b>D.</b> <p>\\(0^+ + 1(11)^* + 0(11)^*\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(0^* + (1 + 0(00)^*)(11)^*\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422866/gate-cse-2024-set-2-question-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following context-free grammar where the start symbol is \\( S \\) and the set of terminals is \\( \\{a, b, c, d\\} \\).\n<br> <br> \\(\n\\begin{aligned}\n&amp; S \\rightarrow A a A b \\mid B b B a \\\\\n&amp; A \\rightarrow c S \\mid \\epsilon \\\\\n&amp; B \\rightarrow d S \\mid \\epsilon\n\\end{aligned}\n\\) <br><br>\nThe following is a partially-filled LL(1) parsing table.<br><br>\\(\n\\begin{array}{|c|c|c|c|c|c|}\n\\hline  &amp;   a   &amp;   b   &amp;   c   &amp;   d   &amp;   \\$   \\\\\n\\hline  S   &amp;   S \\rightarrow A a A b   &amp;   S \\rightarrow B b B a   &amp;   (1)   &amp;   (2)   &amp; \\\\\n\\hline  A   &amp;   A \\rightarrow \\epsilon   &amp;   (3)   &amp;   A \\rightarrow c S   &amp; &amp; \\\\\n\\hline  B   &amp;   (4)   &amp;   B \\rightarrow \\epsilon   &amp; &amp;   B \\rightarrow d S   &amp; \\\\\n\\hline\n\\end{array}\\)\n<br><br>Which one of the following options represents the CORRECT combination for the numbered cells in the parsing table?\n<br>\nNote: In the options, \"blank\" denotes that the corresponding cell is empty. <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(1) \\( S \\rightarrow A a A b \\) (2) \\( S \\rightarrow B b B a \\) (3) \\( A \\rightarrow \\epsilon \\) (4) \\( B \\rightarrow \\epsilon \\)</p>",
            "<b>B.</b> <p>(1) \\( S \\rightarrow B b B a \\) (2) \\( S \\rightarrow A a A b \\) (3) \\( A \\rightarrow \\epsilon \\) (4) \\( B \\rightarrow \\epsilon \\)</p>",
            "<b>C.</b> <p>(1) \\( S \\rightarrow A a A b \\) (2) \\( S \\rightarrow B b B a \\) (3) blank (4) blank</p>",
            "<b>D.</b> <p>(1) \\( S \\rightarrow B b B a \\) (2) \\( S \\rightarrow A a A b \\) (3) blank (4) blank</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(1) \\( S \\rightarrow A a A b \\) (2) \\( S \\rightarrow B b B a \\) (3) \\( A \\rightarrow \\epsilon \\) (4) \\( B \\rightarrow \\epsilon \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422867/gate-cse-2024-set-2-question-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which one of the following regular expressions is equivalent to the language\naccepted by the DFA given below?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q12_7b57ec64.webp\"><br> <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(0^*1(0+10^*1)^*\\)</p>",
            "<b>B.</b> <p>\\(0^*(10^*11)^*0^*\\)</p>",
            "<b>C.</b> <p>\\(0^*1(010^*1)^*0^*\\)</p>",
            "<b>D.</b> <p>\\(0(1+0^*10^*1)^*0^*\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(0^*1(0+10^*1)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422885/gate-cse-2024-set-2-question-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following two regular expressions over the alphabet \\( \\{0,1\\} \\) :<br><br>\n\\(\n\\begin{aligned}\n&amp; r=0^*+1^* \\\\\n&amp; s=01^*+10^*\n\\end{aligned}\n\\)\n<br><br>\nThe total number of strings of length less than or equal to 5 , which are neither in \\( r \\) nor in \\( s \\), is ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "44",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422791/gate-cse-2024-set-1-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Let \\( G=(V, \\Sigma, S, P) \\) be a context-free grammar in Chomsky Normal Form with \\( \\Sigma=\\{a, b, c\\} \\) and \\( V \\) containing 10 variable symbols including the start symbol \\( S \\). The string \\( w=a^{30} b^{30} c^{30} \\) is derivable from \\( S \\). The number of steps (application of rules) in the derivation \\( S \\rightarrow^* w \\) is _____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "179",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422793/gate-cse-2024-set-1-question-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the 5 -state DFA \\( M \\) accepting the language \\( L(M) \\subset(0+1)^* \\) shown below. For any string \\( w \\in(0+1)^* \\) let \\( n_0(w) \\) be the number of \\( 0^{\\prime} s \\) in \\( w \\) and \\( n_1(w) \\) be the number of 1 's in \\( w \\).\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q40_978712f8.webp\"><br>\nWhich of the following statements is/are FALSE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
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
          "id": 8,
          "question": "<p>Let \\(L_1, L_2 \\) be two regular languages and \\(L_3 \\) a language which is not regular. Which of the following statements is/are always TRUE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(L_1=L_2 \\) if and only if \\(L_1 \\cap \\overline{L_2}=\\phi \\)</p>",
            "<b>B.</b> <p>\\(L_1 \\cup L_3 \\) is not regular</p>",
            "<b>C.</b> <p>\\(\\overline{L_3} \\) is not regular</p>",
            "<b>D.</b> <p>\\(\\overline{L_1} \\cup \\overline{L_2} \\) is regular</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>\\(\\overline{L_3} \\) is not regular</p>",
            "<b>D.</b> <p>\\(\\overline{L_1} \\cup \\overline{L_2} \\) is regular</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422829/gate-cse-2024-set-1-question-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the language L over the alphabet {0, 1}, given below:<br><br>\\(L = \\{w \\in \\{0, 1\\}^* | w \\text{ does not contain three or more consecutive 1's} \\}.\\)<br>\nThe minimum number of states in a Deterministic Finite-State Automaton (DFA)\nfor L is _____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399258/gate-cse-2023-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the pushdown automaton (PDA) \\(P\\) below, which runs on the input alphabet \\(\\{a,b\\}\\), has stack alphabet \\( \\{ \\perp ,A\\}\\), and has three states \\( \\{s,p,q\\}\\), with \\(s\\)  being\nthe start state. A transition from state \\(u\\)  to state \\(v\\) , labelled \\(c/X/\\gamma \\) , where \\(c\\) is\nan input symbol or , \\(X\\) is a stack symbol, and \\(\\gamma \\) is a string of stack symbols,\nrepresents the fact that in state  \\(u\\), the PDA can read  \\(c\\) from the input, with  \\(X\\) on\nthe top of its stack, pop  \\(X\\) from the stack, push in the string  \\(\\gamma \\) on the stack, and\ngo to state \\(v\\). In the initial configuration, the stack has only the symbol  \\(\\perp \\) in it.\nThe PDA accepts by empty stack.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q30_cad321de.jpg\"><br>Which one of the following options correctly describes the language accepted by \\(P\\)? <br><br><strong>(GATE CSE 2023)</strong></p>",
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
          "id": 11,
          "question": "<p>Consider the context-free grammar \\(G\\) below<br>\\( S\\rightarrow aSb \\;| \\;X\\) <br>\n\\( X\\rightarrow aX \\;| \\;Xb \\;|\\; a\\;|\\; b\\)   <br>where \\(S\\) and \\(X\\) are non-terminals, and \\(a\\) and \\(b\\) are terminal symbols. The starting\nnon-terminal is \\(S\\).<br>\nWhich one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The language generated by \\( G \\text{ is }(a + b)^*\\)</p>",
            "<b>B.</b> <p>The language generated by \\( G \\text{ is } a^*(a + b)b^*\\)</p>",
            "<b>C.</b> <p>The language generated by \\( G \\text{ is }a^*b^*(a + b)\\)</p>",
            "<b>D.</b> <p>The language generated by \\( G\\) is not a regular language</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The language generated by \\( G \\text{ is } a^*(a + b)b^*\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399282/gate-cse-2023-question-29#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which of the following statements is/are CORRECT? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The intersection of two regular languages is regular.</p>",
            "<b>B.</b> <p>The intersection of two context-free languages is context-free.</p>",
            "<b>C.</b> <p>The intersection of two recursive languages is recursive.</p>",
            "<b>D.</b> <p>The intersection of two recursively enumerable languages is recursively enumerable.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>The intersection of two regular languages is regular.</p>",
            "<b>C.</b> <p>The intersection of two recursive languages is recursive.</p>",
            "<b>D.</b> <p>The intersection of two recursively enumerable languages is recursively enumerable.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399298/gate-cse-2023-question-14#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following definition of a lexical token \\(id\\) for an identifier in a programming language, using extended regular expressions:\n<br><br> \\( letter \\rightarrow  [A-Za-z]\\)<br>\\( digit \\rightarrow  [0-9]\\)<br>\\( id \\rightarrow letter (letter\\;| \\;digit)^*\\)<br>  <br><br>Which one of the following Non-deterministic Finite-state Automata with -\ntransitions accepts the set of valid identifiers? (A double-circle denotes a final\nstate)<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q9_ec1c38fc.jpg\"><br> <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399303/gate-cse-2023-question-9#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the Deterministic Finite-state Automaton (DFA) \\(A\\) shown below. The\nDFA runs on the alphabet {0, 1}, and has the set of states {s, p, q, r}, with s being\nthe start state and p being the only final state.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q4_8a98cf53.jpg\"><br>Which one of the following regular expressions correctly describes the language\naccepted by \\(A\\)? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(1(0^*11)^*\\)</p>",
            "<b>B.</b> <p>\\(0(0 + 1)^*\\)</p>",
            "<b>C.</b> <p>\\(1(0 + 11)^*\\)</p>",
            "<b>D.</b> <p>\\(1(110^*)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(1(0 + 11)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399308/gate-cse-2023-question-4#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following languages:<br><br>\\( \\begin{aligned}\nL_1&amp;= \\{ ww|w  \\in  \\{a,b \\}^* \\}   \\\\\nL_2&amp;= \\{a^nb^nc^m | m,n \\geq 0 \\}  \\\\\nL_3 &amp;= \\{a^mb^nc^n|m,n \\geq 0 \\}\n\\end{aligned}\\)<br><br>Which of the following statements is/are FALSE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(L_1\\) is not context-free but \\(L_2\\) and \\(L_3\\) are deterministic context-free.</p>",
            "<b>B.</b> <p>Neither \\(L_1\\) nor \\(L_2\\) is context-free.</p>",
            "<b>C.</b> <p>\\(L_2,L_3\\) and \\(L_2 \\cap L_3\\) all are context-free.</p>",
            "<b>D.</b> <p>Neither \\(L_1\\) nor its complement is context-free.</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>Neither \\(L_1\\) nor \\(L_2\\) is context-free.</p>",
            "<b>C.</b> <p>\\(L_2,L_3\\) and \\(L_2 \\cap L_3\\) all are context-free.</p>",
            "<b>D.</b> <p>Neither \\(L_1\\) nor its complement is context-free.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371898/Gate-cse-2022-question-38#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
