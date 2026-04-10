window.__examLoadCallback({
  "title": "Context_Free_Grammar - Context_Free_Grammar - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Context_Free_Grammar",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider two grammars \\(G1 \\) and \\(G2 \\) with the production rules given below:<br><br>\n\\(\nG1: S \\to \\text{if} E \\text{ then } S \\mid \\text{if} E \\text{ then } S \\text{ else } S \\mid a\n\\)<br>\n\\(\nE \\to b\n\\)<br><br>\n\\(\nG2: S \\to \\text{if} E \\text{ then } S \\mid M\n\\)<br>\n\\(\nM \\to \\text{if} E \\text{ then } M \\text{ else } S \\mid c\n\\)<br>\n\\(\nE \\to b\n\\)<br><br>where \\( if,then,else,a,b,c\\) are the terminals. <br><br>\nWhich of the following option(s) is/are CORRECT? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(G1 \\) is not LL(1) and \\(G2 \\) is LL(1).</p>",
            "<b>B.</b> <p>\\(G1 \\) is LL(1) and \\(G2 \\) is not LL(1).</p>",
            "<b>C.</b> <p>\\(G1 \\) and \\(G2 \\) are not LL(1).</p>",
            "<b>D.</b> <p>\\(G1 \\) and \\(G2 \\) are ambiguous.</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>\\(G1 \\) and \\(G2 \\) are not LL(1).</p>",
            "<b>D.</b> <p>\\(G1 \\) and \\(G2 \\) are ambiguous.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460852/gate-cse-2025-set-2-question-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Given a Context-Free Grammar \\(G \\) as follows:<br><br>\n\\(\nS \\to A a \\mid b A c \\mid d c \\mid b d a\n\\)<br>\n\\(\nA \\to d\n\\)<br><br>\nWhich ONE of the following statements is TRUE? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(G \\) is neither LALR(1) nor SLR(1)</p>",
            "<b>B.</b> <p>\\(G \\) is CLR(1), not LALR(1)</p>",
            "<b>C.</b> <p>\\(G \\) is LALR(1), not SLR(1)</p>",
            "<b>D.</b> <p>\\(G \\) is LALR(1), also SLR(1)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(G \\) is LALR(1), not SLR(1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460805/gate-cse-2025-set-2-question-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following augmented grammar, which is to be parsed with a SLR parser. The set of terminals is \\( \\{a, b, c, d, \\#, @\\} \\)\n<br> \\(\n\\begin{aligned}\n&amp; S^{\\prime} \\rightarrow S \\\\\n&amp; S \\rightarrow S S|A a| b A c|B c| b B a \\\\\n&amp; A \\rightarrow d \\# \\\\\n&amp; B \\rightarrow @\n\\end{aligned}\n\\) <br>\nLet \\( I_0=\\operatorname{CLOSURE}\\left(\\left\\{S^{\\prime} \\rightarrow \\bullet S\\right\\}\\right) \\). The number of items in the set \\( \\operatorname{GOTO}\\left(I_0, S\\right) \\) is ____ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422842/gate-cse-2024-set-2-question-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
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
          "id": 8,
          "question": "<p>Consider the following context-free grammar where the set of terminals is \\(\\{a,b,c,d,f\\}\\).<br><br>\\(\\begin{array}{lll} S &amp; \\rightarrow &amp; d \\: a \\: T \\mid R \\: f \\\\ T &amp; \\rightarrow &amp; a \\: S \\: \\mid \\: b \\: a \\: T \\: \\mid \\epsilon \\\\ R &amp; \\rightarrow &amp; c \\: a \\: T \\: R \\: \\mid \\epsilon \\end{array}\\)\n<br><br>\nThe following is a partially-filled LL(1) parsing table.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Context_Free_Grammar\\q31a_d2bcc2a7.jpg\"><br>\nWhich one of the following choices represents the correct combination for the numbered cells in the parsing table (\"blank\" denotes that the corresponding cell is empty)?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Context_Free_Grammar\\q31b_a479fb0a.jpg\"><br> <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357420/gate-cse-2021-set-1-question-31#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>The language which is generated by the grammar \\(S \\rightarrow a S a\\mid b S b\\mid a\\mid b\\) over the alphabet of {a,b} is the set of <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Strings that begin and end with the same symbol</p>",
            "<b>B.</b> <p>All odd and even length palindromes</p>",
            "<b>C.</b> <p>All odd length palindromes</p>",
            "<b>D.</b> <p>All even length palindromes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>All odd length palindromes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331445/isro2020-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Context free languages are closed under <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>union, intersection</p>",
            "<b>B.</b> <p>union, kleene closure</p>",
            "<b>C.</b> <p>intersection, complement</p>",
            "<b>D.</b> <p>complement, kleene closure</p>"
          ],
          "correct_answer": "<b>B.</b> <p>union, kleene closure</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331440/isro2020-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A CFG (Context Free Grammar) is said to be in Chomsky Normal Form (CNF), if all the productions are of the form \\(\\mathrm{A} \\rightarrow \\mathrm{BC}\\) or \\(\\mathrm{A} \\rightarrow \\mathrm{a}\\). Let G be a CFG in CNF. To derive a string of terminals of length x, the number of products to be used is: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2x-1</p>",
            "<b>B.</b> <p>2x</p>",
            "<b>C.</b> <p>2x+1</p>",
            "<b>D.</b> <p>\\(2^{x}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2x-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213561/isro2018-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>CFG  (Context Free Grammar) is not closed under: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Union</p>",
            "<b>B.</b> <p>Complementation</p>",
            "<b>C.</b> <p>Kleene star</p>",
            "<b>D.</b> <p>Product</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Complementation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213563/isro2018-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following expression grammar G:<br>\nE\\(\\rightarrow\\)E-T|T <br>\nT\\(\\rightarrow\\)T+F|F <br>\nF\\(\\rightarrow\\)(E)|id <br>\nWhich of the following grammars is not left recursive, but is equivalent to G? <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>E\\(\\rightarrow\\)E-T|T<br>\nT\\(\\rightarrow\\)T+F|F <br>\nF\\(\\rightarrow\\)(E)|id</p>",
            "<b>B.</b> <p>E\\(\\rightarrow\\)TE' <br>\nE'\\(\\rightarrow\\)TE'|\\(\\in\\)<br>\nT\\(\\rightarrow\\)T+F|F <br>\nF\\(\\rightarrow\\)(E)|id <br></p>",
            "<b>C.</b> <p>E\\(\\rightarrow\\)TX <br>\nX\\(\\rightarrow\\)-TX|\\(\\in\\)<br>\nT\\(\\rightarrow\\)FY <br>\nY\\(\\rightarrow\\)+FY|\\(\\in\\)<br>\nF\\(\\rightarrow\\)(E)|id</p>",
            "<b>D.</b> <p>E\\(\\rightarrow\\)TX|(TX)<br>\nX\\(\\rightarrow\\) -TX|+TX|\\(\\in\\)<br>\nT \\(\\rightarrow\\)id</p>"
          ],
          "correct_answer": "<b>C.</b> <p>E\\(\\rightarrow\\)TX <br>\nX\\(\\rightarrow\\)-TX|\\(\\in\\)<br>\nT\\(\\rightarrow\\)FY <br>\nY\\(\\rightarrow\\)+FY|\\(\\in\\)<br>\nF\\(\\rightarrow\\)(E)|id</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118374/gate2017-2-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Identify the language generated by the following grammar, where S is start variable. <br>\nS\\(\\rightarrow\\) XY <br>\nX\\(\\rightarrow\\) aX|a <br>\nY \\(\\rightarrow\\)aYb|\\(\\in\\) <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{a^{m}b^{n}|m\\geq n,n \\gt 0\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{a^{m}b^{n}|m\\geq n,n \\geq 0\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{a^{m}b^{n}|m\\gt n,n\\geq 0\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{a^{m}b^{n}|m\\gt n,n \\gt 0\\}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\{a^{m}b^{n}|m\\gt n,n\\geq 0\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118243/gate2017-2-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following statements about parser is/are CORRECT?<br>\nI. Canonical LR is more powerful than SLR. <br>\nII. SLR is more powerful than LALR <br>\nIII. SLR is more powerful than Canonical LR. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118343/gate2017-2-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
