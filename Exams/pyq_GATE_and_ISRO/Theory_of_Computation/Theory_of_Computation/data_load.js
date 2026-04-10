window.__examLoadCallback({
  "title": "Theory_of_Computation - Theory_of_Computation",
  "duration": 831,
  "sections": [
    {
      "name": "Theory_of_Computation",
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
          "question": "<p>Let \\(\\Sigma = \\{a, b, c\\} \\). For \\(x \\in \\Sigma^* \\), and \\(\\alpha \\in \\Sigma \\), let \\(\\# _\\alpha (x) \\) denote the number of occurrences of \\(\\alpha \\) in \\(x \\).  <br><br>\nWhich one or more of the following option(s) define(s) regular language(s)? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(\\{ a^m b^n \\mid m, n \\geq 0 \\} \\)</p>",
            "<b>B.</b> <p>\\(\\{ a, b \\}^* \\cap \\{ a^m b^n c^{m-n} \\mid m \\geq n \\geq 0 \\} \\)</p>",
            "<b>C.</b> <p>\\(\\{ w \\mid w \\in \\{ a, b \\}^*, \\#_a(w) \\equiv 2 \\ (\\text{mod}\\ 7), \\#_b(w) \\equiv 3 \\ (\\text{mod}\\ 9) \\} \\)</p>",
            "<b>D.</b> <p>\\(\\{ w \\mid w \\in \\{ a, b \\}^*, \\#_a(w) \\equiv 2 \\ (\\text{mod}\\ 7), \\#_a(w) = \\#_b(w) \\} \\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(\\{ a^m b^n \\mid m, n \\geq 0 \\} \\)</p>",
            "<b>C.</b> <p>\\(\\{ w \\mid w \\in \\{ a, b \\}^*, \\#_a(w) \\equiv 2 \\ (\\text{mod}\\ 7), \\#_b(w) \\equiv 3 \\ (\\text{mod}\\ 9) \\} \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460851/gate-cse-2025-set-2-question-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
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
          "id": 5,
          "question": "<p>Consider the two lists List I and List II given below:<br>\\(\n\\begin{array}{|c l|c l|}\n\\hline\n\\textbf{List I} &amp; &amp; \\textbf{List II} &amp; \\\\\n\\hline\n\\text{(i)} &amp; \\text{Context free languages} &amp; \\text{(a)} &amp; \\text{Closed under union} \\\\\n\\hline\n\\text{(ii)} &amp; \\text{Recursive languages} &amp; \\text{(b)} &amp; \\text{Not closed under complementation} \\\\\n\\hline\n\\text{(iii)} &amp; \\text{Regular languages} &amp; \\text{(c)} &amp; \\text{Closed under intersection} \\\\\n\\hline\n\\end{array}\\)<br>\nFor matching of items in List I with those in List II, which of the following option(s) is/are CORRECT? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>(i) - (a), (ii) - (b), and (iii) - (c)</p>",
            "<b>B.</b> <p>(i) - (b), (ii) - (a), and (iii) - (c)</p>",
            "<b>C.</b> <p>(i) - (b), (ii) - (c), and (iii) - (a)</p>",
            "<b>D.</b> <p>(i) - (a), (ii) - (c), and (iii) - (b)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>(i) - (b), (ii) - (a), and (iii) - (c)</p>",
            "<b>C.</b> <p>(i) - (b), (ii) - (c), and (iii) - (a)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460815/gate-cse-2025-set-2-question-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Let \\(G_1, G_2 \\) be Context-Free Grammars (CFGs) and \\(R \\) be a regular expression. For a grammar \\(G \\), let \\(L(G) \\) denote the language generated by \\(G \\).\n<br>\nWhich ONE among the following questions is decidable? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Is \\(L(G_1) = L(G_2) \\)?</p>",
            "<b>B.</b> <p>Is \\(L(G_1) \\cap L(G_2) = \\emptyset \\)?</p>",
            "<b>C.</b> <p>Is \\(L(G_1) = L(R) \\)?</p>",
            "<b>D.</b> <p>Is \\(L(G_1) = \\emptyset \\)?</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Is \\(L(G_1) = \\emptyset \\)?</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460820/gate-cse-2025-set-2-question-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider a finite state machine (FSM) with one input \\( X \\) and one output \\( f \\), represented by the given state transition table. The minimum number of states required to realize this FSM is _________. (Answer in integer)\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q49_cb7ac266.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460031/gate-cse-2025-set-1-question-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following deterministic finite automaton (DFA) defined over the alphabet, \\( \\Sigma = \\{ a, b \\} \\). Identify which of the following language(s) is/are accepted by the given DFA. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q40_3b7ca53e.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
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
          "id": 10,
          "question": "<p>Consider the following two languages over the alphabet \\(\\{a, b, c\\}\\), where \\(m\\) and \\(n\\) are natural numbers:\n<br><br>\n\\(L_1 = \\{ a^m b^m c^{m+n} \\mid m, n \\geq 1 \\}\\)<br>\n\\(L_2 = \\{ a^m b^n c^{m+n} \\mid m, n \\geq 1 \\}\\)\n<br><br>\nWhich ONE of the following statements is CORRECT? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both \\(L_1\\) and \\(L_2\\) are context-free languages.</p>",
            "<b>B.</b> <p>\\(L_1\\) is a context-free language but \\(L_2\\) is not a context-free language.</p>",
            "<b>C.</b> <p>\\(L_1\\) is not a context-free language but \\(L_2\\) is a context-free language.</p>",
            "<b>D.</b> <p>Neither \\(L_1\\) nor \\(L_2\\) are context-free languages.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(L_1\\) is not a context-free language but \\(L_2\\) is a context-free language.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460045/gate-cse-2025-set-1-question-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following two languages over the alphabet \\(\\{a, b\\}\\):\n<br><br>\n\\(L_1 = \\{ \\alpha \\beta \\alpha \\mid \\alpha \\in \\{a, b\\}^+ \\text{ and } \\beta \\in \\{a, b\\}^+ \\}\\)<br>\n\\(L_2 = \\{ \\alpha \\beta \\alpha \\mid \\alpha \\in \\{a\\}^+ \\text{ and } \\beta \\in \\{a, b\\}^+ \\}\\)\n<br><br>\nWhich ONE of the following statements is CORRECT? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both \\(L_1\\) and \\(L_2\\) are regular languages.</p>",
            "<b>B.</b> <p>\\(L_1\\) is a regular language but \\(L_2\\) is not a regular language.</p>",
            "<b>C.</b> <p>\\(L_1\\) is not a regular language but \\(L_2\\) is a regular language.</p>",
            "<b>D.</b> <p>Neither \\(L_1\\) nor \\(L_2\\) is a regular language.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(L_1\\) is not a regular language but \\(L_2\\) is a regular language.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460046/gate-cse-2025-set-1-question-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
          "question": "<p>Consider the following context-free grammar \\(G\\), where \\(S\\), \\(A\\), and \\(B\\) are the variables (non-terminals), \\(a\\) and \\(b\\) are the terminal symbols, \\(S\\) is the start variable, and the rules of \\(G\\) are described as:\n<br><br>\n\\(S \\to aaB \\mid Abb\\)<br>\n\\(A \\to a \\mid aA\\)<br>\n\\(B \\to b \\mid bB\\)\n<br><br>\nWhich ONE of the languages \\(L(G)\\) is accepted by \\(G\\)? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L(G) = \\{ a^2b^n \\mid n \\geq 1 \\} \\cup \\{ a^n b^2 \\mid n \\geq 1 \\}\\)</p>",
            "<b>B.</b> <p>\\(L(G) = \\{ a^n b^{2n} \\mid n \\geq 1 \\} \\cup \\{ a^{2n} b^n \\mid n \\geq 1 \\}\\)</p>",
            "<b>C.</b> <p>\\(L(G) = \\{ a^n b^n \\mid n \\geq 1 \\}\\)</p>",
            "<b>D.</b> <p>\\(L(G) = \\{ a^{2n} b^{2n} \\mid n \\geq 1 \\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(L(G) = \\{ a^2b^n \\mid n \\geq 1 \\} \\cup \\{ a^n b^2 \\mid n \\geq 1 \\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460071/gate-cse-2025-set-1-question-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following augmented grammar, which is to be parsed with a SLR parser. The set of terminals is \\( \\{a, b, c, d, \\#, @\\} \\)\n<br> \\(\n\\begin{aligned}\n&amp; S^{\\prime} \\rightarrow S \\\\\n&amp; S \\rightarrow S S|A a| b A c|B c| b B a \\\\\n&amp; A \\rightarrow d \\# \\\\\n&amp; B \\rightarrow @\n\\end{aligned}\n\\) <br>\nLet \\( I_0=\\operatorname{CLOSURE}\\left(\\left\\{S^{\\prime} \\rightarrow \\bullet S\\right\\}\\right) \\). The number of items in the set \\( \\operatorname{GOTO}\\left(I_0, S\\right) \\) is ____ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422842/gate-cse-2024-set-2-question-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Let \\( L_1 \\) be the language represented by the regular expression \\( b^* a b^*\\left(a b^* a b^*\\right)^* \\) and \\( L_2=\\left\\{w \\in(a+b)^*|| w \\mid \\leq 4\\right\\} \\), where \\( |w| \\) denotes the length of string \\( w \\). The number of strings in \\( L_2 \\) which are also in \\( L_1 \\) is ___ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422845/gate-cse-2024-set-2-question-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
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
          "id": 17,
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
          "id": 18,
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
          "id": 19,
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
          "id": 20,
          "question": "<p>Consider the following two regular expressions over the alphabet \\( \\{0,1\\} \\) :<br><br>\n\\(\n\\begin{aligned}\n&amp; r=0^*+1^* \\\\\n&amp; s=01^*+10^*\n\\end{aligned}\n\\)\n<br><br>\nThe total number of strings of length less than or equal to 5 , which are neither in \\( r \\) nor in \\( s \\), is ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "44",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422791/gate-cse-2024-set-1-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Let \\( G=(V, \\Sigma, S, P) \\) be a context-free grammar in Chomsky Normal Form with \\( \\Sigma=\\{a, b, c\\} \\) and \\( V \\) containing 10 variable symbols including the start symbol \\( S \\). The string \\( w=a^{30} b^{30} c^{30} \\) is derivable from \\( S \\). The number of steps (application of rules) in the derivation \\( S \\rightarrow^* w \\) is _____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "179",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422793/gate-cse-2024-set-1-question-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
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
          "id": 23,
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
          "id": 24,
          "question": "<p>Consider the language L over the alphabet {0, 1}, given below:<br><br>\\(L = \\{w \\in \\{0, 1\\}^* | w \\text{ does not contain three or more consecutive 1's} \\}.\\)<br>\nThe minimum number of states in a Deterministic Finite-State Automaton (DFA)\nfor L is _____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399258/gate-cse-2023-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
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
          "id": 26,
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
          "id": 27,
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
          "id": 28,
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
          "id": 29,
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
          "id": 30,
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
        },
        {
          "id": 31,
          "question": "<p>Consider the following languages:<br><br>\\( \\begin{aligned}\nL_1&amp;= \\{a^n wa^n|w  \\in  \\{a,b \\}^* \\}   \\\\\nL_2&amp;= \\{wxw^R | w,x  \\in   \\{a,b \\}^*, |w|,|x|  \\gt 0  \\}\n\\end{aligned}\\)<br><br>Note that \\(w^R\\) is the reversal of the string \\(w\\). Which of the following is/are TRUE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(L_1\\) and \\(L_2\\) are regular.</p>",
            "<b>B.</b> <p>\\(L_1\\) and \\(L_2\\)  are context-free.</p>",
            "<b>C.</b> <p>\\(L_1\\) is regular and \\(L_2\\) is context-free.</p>",
            "<b>D.</b> <p>\\(L_1\\) and \\(L_2\\)  are context-free but not regular.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(L_1\\) and \\(L_2\\) are regular.</p>",
            "<b>B.</b> <p>\\(L_1\\) and \\(L_2\\)  are context-free.</p>",
            "<b>C.</b> <p>\\(L_1\\) is regular and \\(L_2\\) is context-free.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371899/Gate-cse-2022-question-37#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Which of the following is/are undecidable? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Given two Turing machines M1 and M2 , decide if L(M1 ) = L(M2 ).</p>",
            "<b>B.</b> <p>Given a Turing machine M , decide if L(M ) is regular.</p>",
            "<b>C.</b> <p>Given a Turing machine M , decide if M accepts all strings.</p>",
            "<b>D.</b> <p>Given a Turing machine M , decide if M takes more than 1073 steps on every string.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Given two Turing machines M1 and M2 , decide if L(M1 ) = L(M2 ).</p>",
            "<b>B.</b> <p>Given a Turing machine M , decide if L(M ) is regular.</p>",
            "<b>C.</b> <p>Given a Turing machine M , decide if M accepts all strings.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371900/Gate-cse-2022-question-36#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>Which of the following statements is/are TRUE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Every subset of a recursively enumerable language is recursive.</p>",
            "<b>B.</b> <p>If a language \\(L\\) and its complement \\(\\bar{L}\\) are both recursively enumerable, then \\(L\\) must be recursive.</p>",
            "<b>C.</b> <p>Complement of a context-free language must be recursive.</p>",
            "<b>D.</b> <p>If \\(L_1\\) and \\(L_2\\) are regular, then \\(L_1 \\cap L_2 \\)must be deterministic context-free.</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>If a language \\(L\\) and its complement \\(\\bar{L}\\) are both recursively enumerable, then \\(L\\) must be recursive.</p>",
            "<b>C.</b> <p>Complement of a context-free language must be recursive.</p>",
            "<b>D.</b> <p>If \\(L_1\\) and \\(L_2\\) are regular, then \\(L_1 \\cap L_2 \\)must be deterministic context-free.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371923/Gate-cse-2022-question-13#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Which one of the following regular expressions correctly represents the language of the finite automaton given below? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q2_1323799a.jpg\"><br> <br><br><strong>(GATE CSE 2022)</strong></p>",
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
          "id": 35,
          "question": "<p>Which of the following regular expressions represent(s) the set of all binary numbers that are divisible by three? Assume that the string \\(\\epsilon\\) is divisible by three. <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\((0+1(01^*0)^*1)^*\\)</p>",
            "<b>B.</b> <p>\\((0+11+10(1+00)^*01)^*\\)</p>",
            "<b>C.</b> <p>\\((0^*(1(01^*0)^*1)^*)^*\\)</p>",
            "<b>D.</b> <p>\\((0+11+11(1+00)^*00)^*\\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\((0+1(01^*0)^*1)^*\\)</p>",
            "<b>B.</b> <p>\\((0+11+10(1+00)^*01)^*\\)</p>",
            "<b>C.</b> <p>\\((0^*(1(01^*0)^*1)^*)^*\\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357493/gate-cse-2021-set-2-question-47#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>For a string \\(w\\), we define \\(w^R\\) to be the reverse of \\(w\\). For example, if \\(w=01101\\) then \\(w^R=10110\\).\n<br>\nWhich of the following languages is/are context-free? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(\\{ wxw^Rx^R \\mid w,x \\in \\{0,1\\} ^* \\}\\)</p>",
            "<b>B.</b> <p>\\(\\{ ww^Rxx^R \\mid w,x \\in \\{0,1\\} ^* \\}\\)</p>",
            "<b>C.</b> <p>\\(\\{ wxw^R \\mid w,x \\in \\{0,1\\} ^* \\}\\)</p>",
            "<b>D.</b> <p>\\(\\{ wxx^Rw^R \\mid w,x \\in \\{0,1\\} ^* \\}\\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\(\\{ ww^Rxx^R \\mid w,x \\in \\{0,1\\} ^* \\}\\)</p>",
            "<b>C.</b> <p>\\(\\{ wxw^R \\mid w,x \\in \\{0,1\\} ^* \\}\\)</p>",
            "<b>D.</b> <p>\\(\\{ wxx^Rw^R \\mid w,x \\in \\{0,1\\} ^* \\}\\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357499/gate-cse-2021-set-2-question-41#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>Consider the following two statements about regular languages:<br><br>\nS1: Every infinite regular language contains an undecidable language as a subset.<br>\nS2: Every finite language is regular.<br><br>\nWhich one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is true</p>",
            "<b>B.</b> <p>Only S2 is true</p>",
            "<b>C.</b> <p>Both S1 and S2 are true</p>",
            "<b>D.</b> <p>Neither S1 nor S2 is true</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both S1 and S2 are true</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357504/gate-cse-2021-set-2-question-36#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
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
          "id": 39,
          "question": "<p>Consider the following deterministic finite automaton (DFA)<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q17_652cadc0.jpg\"><br>The number of strings of length 8 accepted by the above automaton is  _________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "256",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357523/gate-cse-2021-set-2-question-17#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Let \\(L_1\\) be a regular language and \\(L_2\\) be a context-free language. Which of the following languages is/are context-free? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(L_1 \\cap \\overline{L_2}\\)</p>",
            "<b>B.</b> <p>\\(\\overline{\\overline{L_1} \\cup \\overline{L_2}}\\)</p>",
            "<b>C.</b> <p>\\(L_1 \\cup (L_2 \\cup \\overline{L_2})\\)</p>",
            "<b>D.</b> <p>\\((L_1 \\cap L_2) \\cup (\\overline{L_1} \\cap L_2)\\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\(\\overline{\\overline{L_1} \\cup \\overline{L_2}}\\)</p>",
            "<b>C.</b> <p>\\(L_1 \\cup (L_2 \\cup \\overline{L_2})\\)</p>",
            "<b>D.</b> <p>\\((L_1 \\cap L_2) \\cup (\\overline{L_1} \\cap L_2)\\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357528/gate-cse-2021-set-2-question-12#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>Let \\(L \\subseteq \\{0,1\\}^*\\) be an arbitrary regular language accepted by a minimal DFA with k states. Which one of the following languages must necessarily be accepted by a minimal DFA with k states? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L - \\{01\\}\\)</p>",
            "<b>B.</b> <p>\\(L \\cup \\{01\\}\\)</p>",
            "<b>C.</b> <p>\\( \\{0,1\\}^* -L\\)</p>",
            "<b>D.</b> <p>\\(L  \\cdot L\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\( \\{0,1\\}^* -L\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357531/gate-cse-2021-set-2-question-9#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>In a  pushdown automaton \\(P=(Q, \\Sigma, \\Gamma, \\delta, q_0, F)\\), a transition of the form,\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q51a_7888028e.jpg\"><br>where \\(p,q \\in Q \\; a \\in \\sigma \\cup \\{ \\epsilon \\} ,\\;X,Y, \\in \\Gamma \\cup \\{ \\epsilon \\}\\), represents<br><br>\\((q,Y) \\in \\delta(p,a,X)\\)\n<br><br>\nConsider the following pushdown automaton over the input alphabet \\(\\Sigma = \\{a,b\\}\\) and stack alphabet \\(\\Gamma = \\{ \\#, A\\}\\). <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q51b_09056d3e.jpg\"><br>\nThe number of strings of length 100 accepted by the above pushdown automaton is ___________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357400/gate-cse-2021-set-1-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
          "question": "<p>For a Turing machine M, &lt; M &gt; denotes an encoding of M. Consider the following two languages.<br><br>\n\\(\\begin{array}{ll} L1 = \\{ \\langle M \\rangle \\mid M \\text{ takes more than } 2021 \\text{ steps on all inputs} \\} \\\\ L2 = \\{ \\langle M \\rangle \\mid M\\text{ takes more than } 2021 \\text{ steps on some input} \\} \\end{array}\\)<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both L1 and L2 are decidable.</p>",
            "<b>B.</b> <p>L1 is decidable  and L2 is undecidable.</p>",
            "<b>C.</b> <p>L1 is undecidable  and L2 is decidable.</p>",
            "<b>D.</b> <p>Both L1 and L2 are undecidable.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Both L1 and L2 are decidable.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357412/gate-cse-2021-set-1-question-39#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
          "question": "<p>Consider the following language:<br>\n<br>\\(L= \\{ w \\in \\{0,1\\}^* \\mid w \\text{ ends with the substring } 011 \\}\\)\n<br><br>\nWhich one of the following deterministic finite automata accepts \\(L\\)?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q38_cacc54fd.jpg\"><br> <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
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
          "id": 45,
          "question": "<p>Consider the following context-free grammar where the set of terminals is \\(\\{a,b,c,d,f\\}\\).<br><br>\\(\\begin{array}{lll} S &amp; \\rightarrow &amp; d \\: a \\: T \\mid R \\: f \\\\ T &amp; \\rightarrow &amp; a \\: S \\: \\mid \\: b \\: a \\: T \\: \\mid \\epsilon \\\\ R &amp; \\rightarrow &amp; c \\: a \\: T \\: R \\: \\mid \\epsilon \\end{array}\\)\n<br><br>\nThe following is a partially-filled LL(1) parsing table.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q31a_d2bcc2a7.jpg\"><br>\nWhich one of the following choices represents the correct combination for the numbered cells in the parsing table (\"blank\" denotes that the corresponding cell is empty)?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q31b_a479fb0a.jpg\"><br> <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
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
          "id": 46,
          "question": "<p>Let &lt; M &gt; denote an encoding of an automaton M. Suppose that \\(\\Sigma =\\{0,1\\}\\). Which of the following languages is/are NOT recursive? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(L= \\{ \\langle M \\rangle \\mid M \\text{ is a DFA such that } L(M)=\\emptyset \\}\\)</p>",
            "<b>B.</b> <p>\\(L= \\{ \\langle M \\rangle \\mid M \\text{ is a DFA such that } L(M)=\\Sigma ^ * \\}\\)</p>",
            "<b>C.</b> <p>\\(L= \\{ \\langle M \\rangle \\mid M \\text{ is a PDA such that } L(M)=\\emptyset \\}\\)</p>",
            "<b>D.</b> <p>\\(L= \\{ \\langle M \\rangle \\mid M \\text{ is a PDA such that } L(M)=\\Sigma ^ * \\}\\)</p>"
          ],
          "correct_answer": [
            "<b>D.</b> <p>\\(L= \\{ \\langle M \\rangle \\mid M \\text{ is a PDA such that } L(M)=\\Sigma ^ * \\}\\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357440/gate-cse-2021-set-1-question-12#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
          "question": "<p>Suppose that \\(L_1\\) is a regular language and \\(L_2\\) is a context-free language. Which one of the following languages is NOT necessarily context-free? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_1\\cap L_2\\)</p>",
            "<b>B.</b> <p>\\(L_1\\cdot L_2\\)</p>",
            "<b>C.</b> <p>\\(L_1 - L_2\\)</p>",
            "<b>D.</b> <p>\\(L_1\\cup L_2\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(L_1 - L_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357451/gate-cse-2021-set-1-question-1#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>Minimum number of states required in DFA accepting binary strings not ending in \"101\" is <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331452/isro2020-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
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
          "id": 50,
          "question": "<p>Which of the following is true? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every subset of a regular set is regular</p>",
            "<b>B.</b> <p>Every finite subset of non-regular set is regular</p>",
            "<b>C.</b> <p>The union of two non regular set is not regular</p>",
            "<b>D.</b> <p>Infinite union of finite set is regular</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Every finite subset of non-regular set is regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331442/isro2020-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
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
          "id": 52,
          "question": "<p>Consider the following language.<br><br>\nL={\\(x \\in \\{a,b\\}^*|\\) number of a's in x divisible by 2 but not divisible by 3}<br><br>\nThe minimum number of states in DFA that accepts L is _______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333180/gate2020-cs-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>Consider the following languages. <br>\\(L_1=\\{wxyx|w,x,y \\in (0+1)^+\\}\\) <br>\\(L_2=\\{xy|x,y \\in (a+b)^*,|x|=|y|,x\\neq y\\}\\) <br> <br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_1\\) is regular and \\(L_2\\) is context- free.</p>",
            "<b>B.</b> <p>\\(L_1\\) context- free but not regular and \\(L_2\\) is context-free.</p>",
            "<b>C.</b> <p>Neither \\(L_1\\) nor \\(L_2\\) is context- free.</p>",
            "<b>D.</b> <p>\\(L_1\\) context- free but  \\(L_2\\) is not context-free.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(L_1\\) is regular and \\(L_2\\) is context- free.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333199/gate2020-cs-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>Which of the following languages are undecidable? Note that \\(\\left \\langle M \\right \\rangle\\) indicates encoding of the Turing machine \\(M\\). <br><br> \\(L_1=\\{\\left \\langle M \\right \\rangle|L(M)=\\varnothing \\}\\)<br> \\(L_2=\\){\\(\\left \\langle M,w,q \\right \\rangle|M\\) on input w reaches state q in exactly 100 steps} <br>\\(L_3=\\{\\left \\langle M \\right \\rangle|L(M) \\;is \\; not \\; recursive\\}\\) <br> \\(L_4=\\{\\left \\langle M \\right \\rangle|L(M) \\;contains \\; at \\; least\\; 21 \\; members\\}\\) <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_1,L_3 \\; and \\; L_4 \\; only\\)</p>",
            "<b>B.</b> <p>\\(L_1 \\; and \\; L_3 \\; only\\)</p>",
            "<b>C.</b> <p>\\(L_2 \\; and \\; L_3 \\; only\\)</p>",
            "<b>D.</b> <p>\\(L_2,L_3 \\; and \\; L_4 \\; only\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(L_1,L_3 \\; and \\; L_4 \\; only\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333205/gate2020-cs-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
          "question": "<p>Consider the language \\(L=\\{a^n|n\\geq 0\\}\\cup \\{a^nb^n|n\\geq 0\\}\\) and the following statements. <br><br>\nI. L is deterministic context-free.<br>\nII. L is context-free but not deterministic context-free.<br>\nIII. L is not LL(k) for any k.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>I and III only</p>",
            "<b>D.</b> <p>III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333221/gate2020-cs-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 56,
          "question": "<p>Consider the following statements.<br><br>\nI.  If \\(L_1\\cup L_2\\) is regular, then both \\(L_1 \\; and \\; L_2\\) must be regular.<br>\nII. The class of regular languages is closed under infinite union.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Neither I nor II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333223/gate2020-cs-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 57,
          "question": "<p>Which one of the following regular expressions represents the set of all binary strings with an odd number of 1's? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(((0+1)^* 1(0+1)^*1)^*10^*\\)</p>",
            "<b>B.</b> <p>\\((0^*10^*10^*)^*0^*1\\)</p>",
            "<b>C.</b> <p>\\(10^*(0^*10^*10^*)^*\\)</p>",
            "<b>D.</b> <p>\\((0^*10^*10^*)^*10^*\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\((0^*10^*10^*)^*10^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "As per Official GATE CSE 2020 Answer key _MTA (Marks to All)<br><a href=\"https://gateoverflow.in/333224/gate2020-cs-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 58,
          "question": "<p>Let \\(\\Sigma\\) be the set of all bijections from {1,...,5} to {1,...,5}, where \\(id\\) denotes the identity function, i.e. \\(id(j)=j,\\forall j\\). Let \\(\\circ\\) denote composition on functions. For a string \\(x = x_1x_2 ... x_n \\in \\Sigma ^n, n \\geq 0\\), let \\(\\pi(x) = x_1\\circ x_2\\circ ... \\circ x_n\\). Consider the language \\(L = \\{x \\in \\Sigma ^* | \\pi(x) = id\\}\\). The minimum number of states in any DFA accepting L is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "120",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302800/gate2019-cs-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 59,
          "question": "<p>Consider the following sets:<br><br>\nS1: Set of all recursively enumerable languages over the alphabet {0, 1}.<br>\nS2: Set of all syntactically valid C programs.<br>\nS3: Set of all languages over the alphabet {0, 1}.<br>\nS4: Set of all non-regular languages over the alphabet {0, 1}.\n<br><br>\nWhich of the above sets are uncountable? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 and S2</p>",
            "<b>B.</b> <p>S3 and S4</p>",
            "<b>C.</b> <p>S2 and S3</p>",
            "<b>D.</b> <p>S1 and S4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S3 and S4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302814/gate2019-cs-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 60,
          "question": "<p>Which one of the following languages over \\(\\Sigma =\\{a,b\\}\\) is NOT context-free? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{ww^R|w \\in \\{a,b\\}^*\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{wa^nb^nw^R|w \\in \\{a,b\\}^*,n\\geq 0\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{wa^nw^Rb^n|w \\in \\{a,b\\}^*,n\\geq 0\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{a^nb^i|i \\in \\{n,3n,5n\\},n\\geq 0\\}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\{wa^nw^Rb^n|w \\in \\{a,b\\}^*,n\\geq 0\\}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302817/gate2019-cs-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 61,
          "question": "<p>For \\(\\Sigma =\\{a,b\\}\\), let us consider the regular language <br>\\(L=\\{x|x=a^{2+3k} \\; or \\; x=b^{10+12k}, k\\geq 0\\}\\).<br>\nWhich one of the following can be a pumping length (the constant guaranteed by the pumping lemma) for L? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>24</p>"
          ],
          "correct_answer": "<b>D.</b> <p>24</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302833/gate2019-cs-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 62,
          "question": "<p>If L is a regular language over \\(\\Sigma =\\{a,b\\}\\), which one of the following languages is NOT regular ? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L\\cdot L^R=\\{xy|x \\in L,y^R \\in L\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{ww^R|w \\in L\\}\\)</p>",
            "<b>C.</b> <p>Prifix(L)={\\(x \\in \\Sigma ^*|\\exists y \\in \\Sigma ^*\\) such that \\(xy \\in L\\)}</p>",
            "<b>D.</b> <p>Suffix(L)={\\(y \\in \\Sigma ^*|\\exists x \\in \\Sigma ^*\\) such that \\(xy \\in L\\)}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\{ww^R|w \\in L\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302841/gate2019-cs-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 63,
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
          "id": 64,
          "question": "<p><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q26_91f4cce6.jpg\"><br>  The FSM (Finite State Machine) machine pictured in the figure above <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Complements a given bit pattern</p>",
            "<b>B.</b> <p>Finds \\(2^{\\prime} s\\) complement of a given bit pattern</p>",
            "<b>C.</b> <p>Increments a given bit pattern by 1</p>",
            "<b>D.</b> <p>Changes the sign bit</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Increments a given bit pattern by 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213562/isro2018-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 65,
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
          "id": 66,
          "question": "<p>Choose the correct statement - <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(A=\\left\\{a^{n} b^{n} \\mid n=1,2,3, \\ldots\\right\\}\\)  is a regular language</p>",
            "<b>B.</b> <p>The set B, consisting of all strings made up of only \\(a^{\\prime} s\\) and \\(b^{\\prime} s\\) having equal number of \\(a^{\\prime} s\\) and bs defines a regular language</p>",
            "<b>C.</b> <p>\\(L\\left(A^{*} B\\right) \\cap B\\) gives the set A</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213564/isro2018-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 67,
          "question": "<p>Given a language L, define \\(L^{i}\\) as follows:<br> \\(L^{0}=\\{\\varepsilon \\} \\)<br>\\(L^{i}=L^{i-1} \\cdot L \\) for all \\( i \\gt 0\\)<br> The order of a language L is defined as the smallest k such that \\(L^{k}=L^{k+1}\\).\nConsider the language L1 (over alphabet 0) accepted by the following automaton. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q52_22ba3777.jpg\"> <br> The order of  L1 is ______ <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204127/gate2018-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 68,
          "question": "<p>Consider the following problems. L(G) denotes the language generated by a grammar G. L(M) denotes the language accepted by a machine M. <br><br>\n(I) For an unrestricted grammar G and a string w, whether w\\(\\in \\)L(G) <br>\n(II) Given a Turing machine M, whether L(M) is regular <br>\n(III) Given two grammars G1 and G2, whether L(G1) = L(G2) <br>\n(IV) Given an NFA N, whether there is a deterministic PDA P such that N and P\naccept the same language. <br><br>\nWhich one of the following statements is correct? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only I and II are undecidable</p>",
            "<b>B.</b> <p>Only III is undecidable</p>",
            "<b>C.</b> <p>Only II and IV are undecidable</p>",
            "<b>D.</b> <p>Only I, II and III are undecidable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Only I, II and III are undecidable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204110/gate2018-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 69,
          "question": "<p>Consider the following languages: <br><br>I. \\( \\{a^{m}b^{n}c^{p}d^{q}|m+p=n+q, \\; where \\;  m,n,p,q \\geq 0 \\}\\)    <br>  II. \\(\\{a^{m}b^{n}c^{p}d^{q}|m=n \\; and \\; p=q, \\; where \\;  m,n,p,q\\geq 0 \\}  \\) <br> III. \\( \\{a^{m}b^{n}c^{p}d^{q}|m=n=p \\; and \\; p\\neq q, \\; where \\; m,n,p,q\\geq 0 \\} \\) <br>  IV. \\(\\{a^{m}b^{n}c^{p}d^{q}|mn=p+q, \\; where\\;  m,n,p,q\\geq 0\\}\\) <br><br>Which of the languages above are context-free? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and IV only</p>",
            "<b>B.</b> <p>I and II only</p>",
            "<b>C.</b> <p>II and III only</p>",
            "<b>D.</b> <p>II and IV only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and II only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204109/gate2018-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 70,
          "question": "<p>The set of all recursively enumerable languages is <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>closed under complementation</p>",
            "<b>B.</b> <p>closed under intersection.</p>",
            "<b>C.</b> <p>a subset of the set of all recursive languages.</p>",
            "<b>D.</b> <p>an uncountable set</p>"
          ],
          "correct_answer": "<b>B.</b> <p>closed under intersection.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204081/gate2018-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 71,
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
          "id": 72,
          "question": "<p>If L and P are two recursively enumerable languages then they are not closed under <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Kleene star \\(L^{*}\\) of L</p>",
            "<b>B.</b> <p>Intersection \\(L \\cap P\\)</p>",
            "<b>C.</b> <p>Union \\(L \\cup P\\)</p>",
            "<b>D.</b> <p>Set difference</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Set difference</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128779/isro2017-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 73,
          "question": "<p>In some programming language, an identifier is permitted to be a letter followed by any number of letters or digits. If \\(L\\) and \\(D\\) denote the sets of letters and digits respectively, which of the following expressions defines an identifier? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((L+D)^{+}\\)</p>",
            "<b>B.</b> <p>\\(\\text { (L.D)* }\\)</p>",
            "<b>C.</b> <p>\\(L(L+D)^{*}\\)</p>",
            "<b>D.</b> <p>\\(L(L . D)^{*}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(L(L+D)^{*}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2596/gate1995-1-9-isro2017-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 74,
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
          "id": 75,
          "question": "<p>Given the following statements<br>S1 : Every context-sensitive language L is recursive<br>S2 : There exists a recursive language that is not context-sensitive<br>Which statements are true? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is correct</p>",
            "<b>B.</b> <p>Only S2 is correct</p>",
            "<b>C.</b> <p>Both S1 and S2 are not correct</p>",
            "<b>D.</b> <p>Both S1 and S2 are correct</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both S1 and S2 are correct</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128535/isro2017-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 76,
          "question": "<p>Let L(R) be the language represented by regular expression R. Let L(G) be the language\ngenerated by a context free grammar G. Let L (M) be the language accepted by a Turning\nmachine M. Which of the following decision problems are undecidable ?<br><br>\nI. Given a regular expression R and a string w, is w\\(\\in \\)L(R)?<br>\nII. Given a context-free grammar G, L(G)=\\(\\phi\\)?<br>\nIII. Given a context-free grammar G, is L(G)=\\(\\Sigma\\)*  for some alphabet \\(\\Sigma\\)?<br>\nIV. Given a Turning machine M and a string w, is w\\(\\in\\)L(M)? <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and IV only</p>",
            "<b>B.</b> <p>II and III only</p>",
            "<b>C.</b> <p>II, III and IV only</p>",
            "<b>D.</b> <p>III and IV only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>III and IV only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118605/gate2017-2-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 77,
          "question": "<p>Consider the following languages<br><br> \\(L_{1}=\\{a^{p}|p\\) is a prime number} <br>\\(L_{2}=\\{a^{n}b^{m}c^{2m}|n\\geq 0,m\\geq 0\\} \\)<br> \\(L_{3}=\\{a^{n}b^{n}c^{2n}|n\\geq 0\\}\\)<br>\\( L_{4}=\\{a^{n}b^{n}|n\\geq 1\\}\\)<br><br> Which of the following are CORRECT ?<br><br>\nI.\\(L_{1}\\) is context-free but not regular. <br>\nII. \\(L_{2}\\) is not context-free. <br>\nIII. \\(L_{3}\\) is not context-free but recursive. <br>\nIV. \\(L_{4}\\) is deterministic context-free. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I ,II and IV only</p>",
            "<b>B.</b> <p>II and III only</p>",
            "<b>C.</b> <p>I and IV only</p>",
            "<b>D.</b> <p>III and IV only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>III and IV only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118615/gate2017-2-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 78,
          "question": "<p>Let \\(\\delta\\) denote that transition function and \\(\\hat{\\delta}\\) denote the extended transition function of the \\(\\epsilon\\)- NFA whose transition table is given below: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q54_ebe8ef02.jpg\">  <br>Then \\(\\hat{\\delta}(q_{2},aba)\\) is ____ <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
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
          "id": 79,
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
          "id": 80,
          "question": "<p>The minimum possible number of states of a deterministic automaton that accepts the regular language \\(L=\\{w_{1}aw_{2}|w_{1},w_{2}\\in \\{a,b\\}^{*},|w_{1}|=2,|w_{2}|\\geq 3\\}\\) is ____ <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118160/gate2017-2-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 81,
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
          "id": 82,
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
        },
        {
          "id": 83,
          "question": "<p>Let \\(L_{1},L_{2}\\) be any two context free languages and R be any regular language. Then which of\nthe following is/are CORRECT ?<br> I. \\(L_{1}\\cup L_{2}\\) is context - free <br>II. \\(\\bar{L_{1}}\\)  is context - free <br>III. \\(L_{1} - R\\) is context - free <br> IV. \\(L_{1}\\cap L_{2} \\) is context - free <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II and IV only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and IV only</p>",
            "<b>D.</b> <p>I only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118143/gate2017-2-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 84,
          "question": "<p>Let A and B be infinite alphabets and let # be a symbol outside both A and B. Let f be a total\nfunctional from A* to B*. We say f is computable if there exists a Turning machine M which\ngiven an input x in A*, always halts with f(x) on its tape. Let \\(L_{f}\\) denote the language\n{x#f(x)|x\\(\\in\\)A*}. Which of the following statements is true: <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>f is computable if and only if  \\(L_{f}\\)  is recursive.</p>",
            "<b>B.</b> <p>f is computable if and only  \\(L_{f}\\)  recursively enumerable.</p>",
            "<b>C.</b> <p>If f is computable then  \\(L_{f}\\)  is recursive, but not conversely.</p>",
            "<b>D.</b> <p>If f is computable then  \\(L_{f}\\)  is recursively enumerable, but not conversely.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>f is computable if and only if  \\(L_{f}\\)  is recursive.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118322/gate2017-1-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 85,
          "question": "<p>Consider the following languages over the alphabet \\(\\Sigma = \\{a, b,c\\}\\). <br>Let \\(L_{1}=\\{a^{n}b^{n}c^{m}|m,n\\geq 0\\}\\) and \\(L_{2}=\\{a^{m}b^{n}c^{n}|m,n\\geq 0\\}\\)<br><br> Which of the following are context-free languages ?  <br>   I. \\(L_{1}\\cup L_{2}\\)  <br>       II. \\(L_{1}\\cap L_{2}\\) <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118321/gate2017-1-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 86,
          "question": "<p>Consider the context-free grammars over the alphabet {a,b,c} given below. S and T are non-terminals <br><br>\\(G_{1}:S\\rightarrow aSb|T, T\\rightarrow cT|\\epsilon\\) \\(G_{2}:S\\rightarrow bSa|T,T\\rightarrow cT|\\epsilon\\) <br><br>The language \\(L(G_{1})\\cap L(G_{2})\\) is <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finite.</p>",
            "<b>B.</b> <p>Not finite but regular.</p>",
            "<b>C.</b> <p>Context-free but not regular.</p>",
            "<b>D.</b> <p>Recursive but not context-free.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Not finite but regular.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118320/gate2017-1-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 87,
          "question": "<p>If G is grammar with productions <br>\n\\(S\\rightarrow SaS|aSb|bSa|SS|\\epsilon\\)<br>\nwhere S is the start variable, then which one of the following is not generated by G? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>abab</p>",
            "<b>B.</b> <p>aaab</p>",
            "<b>C.</b> <p>abbaa</p>",
            "<b>D.</b> <p>babba</p>"
          ],
          "correct_answer": "<b>D.</b> <p>babba</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118316/gate2017-1-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 88,
          "question": "<p>Consider the language L given by the regular expression (a+b )* b (a+b )  over the alphabet {a, b}. The smallest number of states needed in a deterministic finite-state automation (DFA) accepting L is ___________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118302/gate2017-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 89,
          "question": "<p>Consider the following grammar.<br><br>\nP\\(\\rightarrow\\)xQRS <br>\nQ\\(\\rightarrow\\)yz|z<br>R\\(\\rightarrow\\)w|\\(\\varepsilon\\) <br>S\\(\\rightarrow\\)y<br><br>What is FOLLOW (Q) ? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{R}</p>",
            "<b>B.</b> <p>{w}</p>",
            "<b>C.</b> <p>{w, y}</p>",
            "<b>D.</b> <p>{w, $}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{w, y}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118297/gate2017-1-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 90,
          "question": "<p>Consider the following context-free grammar over the alphabet  \\(\\sum\\) = {a,b,c} with S as the start\nsymbol. <br><br>\nS\\(\\rightarrow\\)abScT|abcT <br>\nT\\(\\rightarrow\\)bT|b<br><br>\nWhich one of the following represents the language generated by the above grammar ? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{\\((ab)^{n}(cb)^{n}|n\\geq 1\\)}</p>",
            "<b>B.</b> <p>{\\((ab)^{n}cb^{m_{1}}cb^{m_{2}}...cb^{m_{n}}|n,m_{1},m_{2},...,m_{n}\\geq 1\\)}</p>",
            "<b>C.</b> <p>\\((ab)^{n}(cb^{m})^{n}|n,m\\geq 1\\)</p>",
            "<b>D.</b> <p>\\((ab)^{n}(cb^{n})^{m}|n,m\\geq 1\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{\\((ab)^{n}cb^{m_{1}}cb^{m_{2}}...cb^{m_{n}}|n,m_{1},m_{2},...,m_{n}\\geq 1\\)}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118290/gate2017-1-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 91,
          "question": "<p>What is the highest type number that can be assigned to the following grammar?<br>\\(S \\rightarrow A a, A \\rightarrow B a, B \\rightarrow a b c\\) <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Type 0</p>",
            "<b>B.</b> <p>Type 1</p>",
            "<b>C.</b> <p>Type 2</p>",
            "<b>D.</b> <p>Type 3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Type 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55683/isro2016-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 92,
          "question": "<p>\\(S \\rightarrow a S a|b S b| a \\mid b\\)<br>The language generated by the above grammar over the alphabet {a,b} is the set of: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>all palindromes</p>",
            "<b>B.</b> <p>all odd length palindromes</p>",
            "<b>C.</b> <p>strings that begin and end with the same symbol</p>",
            "<b>D.</b> <p>all even length palindromes</p>"
          ],
          "correct_answer": "<b>B.</b> <p>all odd length palindromes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1304/gate2009-12-isro2016-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 93,
          "question": "<p>If \\(L\\) and \\(\\bar L\\) are recursively enumerable then \\(L\\) is <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>regular</p>",
            "<b>B.</b> <p>context-free</p>",
            "<b>C.</b> <p>context-sensitive</p>",
            "<b>D.</b> <p>recursive</p>"
          ],
          "correct_answer": "<b>D.</b> <p>recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/411/gate2008-13-isro2016-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 94,
          "question": "<p>Consider the following statements about the context free grammar<br>\\(G=\\{S \\rightarrow S S, S \\rightarrow a b, S \\rightarrow b a, S \\rightarrow \\epsilon\\}\\)<br><br>I.   G is ambiguous<br>\nII.  G produces all strings with equal number of a's and b's<br>\nIII. G can be accepted by a deterministic PDA.<br><br>\nWhich combination below expresses all the true statements about G? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/995/gate2006-32-isro2016-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 95,
          "question": "<p>Let \\(L=\\left\\{w \\in(0+1)^{*} \\mid w \\text { has even number of } 1 \\text { 's }\\right\\}\\), i.e. \\(L\\) is the set of all bit strings with even number of 1's. Which one of the regular expression below represents \\(L\\)? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((0^*10^*1)^*\\)</p>",
            "<b>B.</b> <p>\\(0^*(10^*10^*)^*\\)</p>",
            "<b>C.</b> <p>\\(0^*(10^*1^*)^*0^*\\)</p>",
            "<b>D.</b> <p>\\(0^*1(10^*1)^*10^*\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(0^*(10^*10^*)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55547/isro2016-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 96,
          "question": "<p>An FSM(finite state machine) can be considered to be a turing machine of finite tape length <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>without rewinding capability and unidirectional tape movement</p>",
            "<b>B.</b> <p>rewinding capability and unidirectional tape movement</p>",
            "<b>C.</b> <p>without rewinding capability and bidirectional tape movement</p>",
            "<b>D.</b> <p>rewinding capability and bidirectional tape movement</p>"
          ],
          "correct_answer": "<b>A.</b> <p>without rewinding capability and unidirectional tape movement</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55546/isro2016-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 97,
          "question": "<p>Which one of the following grammars is free from left recursion? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S\\rightarrow AB \\) <br> \\(A\\rightarrow Aa|b\\)<br> \\(B\\rightarrow c\\)</p>",
            "<b>B.</b> <p>\\(S\\rightarrow Ab|Bb|c \\) <br> \\( A\\rightarrow Bb|\\varepsilon \\) <br> \\(B\\rightarrow e\\)</p>",
            "<b>C.</b> <p>\\(S\\rightarrow Aa|B \\) <br> \\(A\\rightarrow Bb|Sc|\\varepsilon \\) <br> \\(B\\rightarrow d\\)</p>",
            "<b>D.</b> <p>\\(S\\rightarrow Aa|Bb|c \\) <br> \\(A\\rightarrow Bd|\\varepsilon \\) <br> \\(B\\rightarrow Ae|\\varepsilon\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(S\\rightarrow Ab|Bb|c \\) <br> \\( A\\rightarrow Bb|\\varepsilon \\) <br> \\(B\\rightarrow e\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39594/gate2016-2-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 98,
          "question": "<p>Consider the following languages.<br>\nL1 = {\\(\\lt\\)M\\(\\gt\\) |M takes at least 2016 steps on some input},<br>\nL2 = {\\(\\lt\\)M\\(\\gt\\)| M takes at least 2016 steps on all inputs} and <br>\nL3 = {\\(\\lt\\)M|M accepts \\(\\varepsilon\\)},<br>\nwhere for each Turing machine M, \\(\\lt\\)M\\(\\gt\\) denotes a specific encoding of M. Which one of the following is TRUE? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 is recursive and L2,L3 are notrecursive</p>",
            "<b>B.</b> <p>L2 is recursiveand L1,L3 are notrecursive</p>",
            "<b>C.</b> <p>L1,L2 are recursiveand L3 is notrecursive</p>",
            "<b>D.</b> <p>L1,L2,L3 are recursive</p>"
          ],
          "correct_answer": "<b>C.</b> <p>L1,L2 are recursiveand L3 is notrecursive</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39596/gate2016-2-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 99,
          "question": "<p>Consider the following languages: <br>\\(L_{1}=\\{a^{n}b^{m}c^{n+m}:m,n\\geq 1\\}\\)<br> \\(L_{2}=\\{a^{n}b^{n}c^{2n}:n\\geq 1\\}\\) <br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both L1 and L2 are context-free.</p>",
            "<b>B.</b> <p>L1 is context-free while L2 is not context-free.</p>",
            "<b>C.</b> <p>L2 is context-free while L1 is not context-free.</p>",
            "<b>D.</b> <p>Neither L1 nor L2 is context-free.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>L1 is context-free while L2 is not context-free.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39605/gate2016-2-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 100,
          "question": "<p>Consider the following two statements:<br>\nI. If all states of an NFA are accepting states then the language accepted by the NFA is \\(\\sum ^{*}\\) .<br>\nII. There exists a regular language A such that for all languages B, A\\(\\cap\\)B is regular. <br>\nWhich one of the following is CORRECT? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only I is true</p>",
            "<b>B.</b> <p>Only II is true</p>",
            "<b>C.</b> <p>Both I and II are true</p>",
            "<b>D.</b> <p>Both I and II are false</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Only II is true</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39591/gate2016-2-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 101,
          "question": "<p>Consider the following types of languages: \\(L_{1}\\):Regular, \\(L_{2}\\):Context-free, \\(L_{3}\\):Recursive, \\(L_{4}\\):Recursively enumerable. <br>Which of the following is/are TRUE? <br>\nI. \\(\\bar{L}_{3}\\cup L_{4}\\) is recursivelyenumerable<br>\nII. \\(\\bar{L}_{2}\\cup L_{3}\\) is recursive <br>\nIII. \\(L_{1}^{*}\\cup L_{2}\\) is context-free <br>\nIV. \\(L_{1}\\cup \\bar{L}_{2}\\) is context-free <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>I and IV only</p>",
            "<b>D.</b> <p>I, II and III only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I, II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39574/gate2016-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 102,
          "question": "<p>Language L1 is defined by the grammar: \\(S_{1}\\rightarrow aS_{1}b|\\varepsilon \\)<br>\nLanguage L2 is defined by the grammar: \\(S_{2}\\rightarrow abS_{2}|\\varepsilon\\)<br>\nConsider the following statements:<br>\nP: L1 is regular <br>\nQ: L2 is regular<br>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both P and Q are true</p>",
            "<b>B.</b> <p>P is true and Q is false</p>",
            "<b>C.</b> <p>P is false and Q is true</p>",
            "<b>D.</b> <p>Both P and Q are false</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P is false and Q is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39542/gate2016-2-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 103,
          "question": "<p>The number of states in the minimum sized DFA that accepts the language defined by the regular expression <br>(0+1)* (0+1)(0+1)* <br> is _______. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39562/gate2016-2-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 104,
          "question": "<p>Let X be a recursive language and Y be a recursively enumerable but not recursive language. Let W and Z be two languages such that \\(\\bar{Y}\\)  reduces to W, and Z reduces to \\(\\bar{X}\\) (reduction means the standard many-one-reduction). Which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>W can be recursively enumerable and Z is recursive.</p>",
            "<b>B.</b> <p>W can be recursive and Z is recursively enumerable</p>",
            "<b>C.</b> <p>W is not recursively enumerable and Z is recursive</p>",
            "<b>D.</b> <p>W is not recursively enumerable and Z is not recursive.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>W is not recursively enumerable and Z is recursive</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39721/gate2016-1-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 105,
          "question": "<p>Consider the transition diagram of a PDA given below with input alphabet \\(\\Sigma \\)={a,b} and stack alphabet \\(\\Gamma\\)={X,Z}. Z is the initial stack symbol. Let L denote the language accepted by the PDA. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q43_b54e1db2.jpg\"> <br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
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
          "id": 106,
          "question": "<p>Consider the following context-free grammars:<br><br>\nG1: S\\(\\rightarrow\\)aS|B,<br> B\\(\\rightarrow\\)b|bB <br>\nG2: S\\(\\rightarrow\\)aA|bB, <br> A\\(\\rightarrow\\)aA|B|\\(\\varepsilon\\), <br>  B\\(\\rightarrow\\)bB|\\(\\varepsilon\\) <br><br> Which one of the following pair of languages is generated by G1 and G2, respectively? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{a^{m}b^{n}|m \\gt 0 \\; or \\;  n \\gt 0\\} \\) and \\(\\{a^{m}b^{n}|m\\gt 0  \\;  and  \\;  n\\gt 0\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{a^{m}b^{n}|m\\gt 0  \\; or \\;  n\\gt 0\\}\\) and  \\(\\{a^{m}b^{n}|m\\gt 0  \\; and  \\; n \\geq  0\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{a^{m}b^{n}|m\\geq 0  \\;  or   \\; n\\gt 0\\} \\) and \\(\\{a^{m}b^{n}|m\\gt 0  \\;  and  \\;  n\\gt  0\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{a^{m}b^{n}|m\\geq 0  \\; and  \\;  n\\gt 0\\} \\) and \\(\\{a^{m}b^{n}|m\\gt 0  \\;  or  \\;  n\\gt 0\\}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\{a^{m}b^{n}|m\\geq 0  \\; and  \\;  n\\gt 0\\} \\) and \\(\\{a^{m}b^{n}|m\\gt 0  \\;  or  \\;  n\\gt 0\\}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39705/gate2016-1-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 107,
          "question": "<p>Which one of the following regular expressions represents the language: the set of all binary strings having two consecutive 0s and two consecutive 1s? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(0+1)*0011(0+1)*+(0+1)*1100(0+1)*</p>",
            "<b>B.</b> <p>(0+1)*(00(0+1)*11+11(0+1)*00)(0+1)*</p>",
            "<b>C.</b> <p>(0+1)*00(0+1)*+(0+1)*11(0+1)*</p>",
            "<b>D.</b> <p>00(0+1)*11+11(0+1)*00</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(0+1)*(00(0+1)*11+11(0+1)*00)(0+1)*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39647/gate2016-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 108,
          "question": "<p>Which  of the following decision problems are undecidable?<br>\nI. Given NFAs N1 and N2, is L(N1)\\(\\cap\\)L(N2) = \\(\\phi\\)?<br>\nII. Given a CFG G = (N,\\(\\Sigma \\),P,S)  and a string  \\(x \\in\\Sigma ^*\\), does  \\(x \\in\\) L(G)?<br>\nIII. Given CFGs G1 and G2, is L(G1) = L(G2)?<br>\nIV. Given a TM M, is L(M) = \\(\\phi\\)? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and IV only</p>",
            "<b>B.</b> <p>II and III only</p>",
            "<b>C.</b> <p>III and IV only</p>",
            "<b>D.</b> <p>II and IV only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39651/gate2016-1-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 109,
          "question": "<p>Which of the following languages is generated by the given grammar?<br> \\(S\\rightarrow aS|bS|\\varepsilon\\) <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{a^{n}b^{m}|n,m\\geq 0 \\}\\)</p>",
            "<b>B.</b> <p>{\\(\\{w\\in \\{a,b\\}^*| w \\) has equal number of a's and b's}</p>",
            "<b>C.</b> <p>\\(\\{a^{n}|n\\geq 0\\}\\cup \\{b^{n}|n\\geq 0\\}\\cup \\{a^{n}b^{n}\\geq 0\\}\\)</p>",
            "<b>D.</b> <p>{a,b}*</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{a,b}*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39640/gate2016-1-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 110,
          "question": "<p>Let \\(R_{1}\\) and \\(R_{2}\\) be regular sets defined over the alphabet, then <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(R_{1} \\cap R_{2}\\)  is not regular</p>",
            "<b>B.</b> <p>\\(R_{1} \\cup R_{2}\\)  is not regular</p>",
            "<b>C.</b> <p>\\(\\Sigma^{*}-R_{1}\\)  is regular</p>",
            "<b>D.</b> <p>\\(R_{1}^{*}\\)  is not regular</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Sigma^{*}-R_{1}\\)  is regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51701/isro2015-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 111,
          "question": "<p>Which of the following languages are context-free? <br>\\(L_{1}=\\{a^{m}b^{n}a^{n}b^{m}|m,n\\geq 1\\}\\) <br>   \\(L_{2}=\\{a^{m}b^{n}a^{m}b^{n}|m,n\\geq 1\\}\\) <br>  \\(L_{3}=\\{a^{m}b^{n}|m=2n+1\\}\\) <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 and L2 only</p>",
            "<b>B.</b> <p>L1 and L3 only</p>",
            "<b>C.</b> <p>L2 and L3 only</p>",
            "<b>D.</b> <p>L3 only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>L1 and L3 only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8489/gate2015-3-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 112,
          "question": "<p>Let L be the language represented by the regular expression \\(\\Sigma ^{*}0011\\Sigma ^{*}\\) where \\(\\Sigma\\)={0,1}. What is the minimum number of states in a DFA that recognizes \\(\\bar{L}\\) (complement of L)? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8415/gate2015-3-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 113,
          "question": "<p>Consider the alphabet \\(\\Sigma\\)={0, 1}, the null/empty string  \\(\\lambda\\) and the sets of strings \\(X_{0}, X_{1}, \\; and \\; X_{2}\\) generated by the corresponding non-terminals of a regular grammar. \\(X_{0}, X_{1}, \\; and \\; X_{2}\\)  are related as follows. <br>   \\(X_{0}=1X_{1}\\) <br> \\(X_{1},=0X_{1}+1 X_{2}\\) <br> \\(X_{2}=0X_{1}+  \\{\\lambda\\}\\)<br>   Which one of the following choices precisely represents the strings in \\(X_{0}\\)? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10(0* + (10)*)1</p>",
            "<b>B.</b> <p>10(0* + (10)*)*1</p>",
            "<b>C.</b> <p>1(0 + 10)*1</p>",
            "<b>D.</b> <p>10(0 + 10)*1 + 110(0 + 10)*1</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1(0 + 10)*1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8159/gate2015-2-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 114,
          "question": "<p>Which of the following languages is/are regular? <br> \\(L_{1}:\\{wxw^{R}|w,x \\in  \\{a,b\\}^{*} \\; and \\; |w|,|x| \\gt 0 \\}, w^{R}\\) is the reverse of string w <br>\\(L_{2}:\\{a^{n}b^{m}|m\\neq n \\; and \\; m,n\\geq 0\\}\\)<br> \\(L_{3}:\\{a^{p}b^{q}c^{r}|p,q,r\\geq 0\\}\\) <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 and L3 only</p>",
            "<b>B.</b> <p>L2 only</p>",
            "<b>C.</b> <p>L2 and L3 only</p>",
            "<b>D.</b> <p>L3 only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L1 and L3 only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8254/gate2015-2-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 115,
          "question": "<p>The number of states in the minimal deterministic finite automaton corresponding to the regular expression (0+1)*(10) is __________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8256/gate2015-2-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 116,
          "question": "<p>Consider the following statements.<br>\nI. The complement of every Turing decidable language is Turing decidable <br>\nII. There exists some language which is in NP but is not Turing decidable <br>\nIII. If L is a language in NP, L is Turing decidable <br><br>\nWhich of the above statements is/are true? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only II</p>",
            "<b>B.</b> <p>Only III</p>",
            "<b>C.</b> <p>Only I and II</p>",
            "<b>D.</b> <p>Only I and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Only I and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8111/gate2015-2-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 117,
          "question": "<p>Consider the NPDA \\(\\langle Q=\\{q_{0},q_{1},q_{2}\\},\\) \\(\\Sigma  =\\{0,1\\},\\) \\(\\Gamma =\\{0,1,\\perp \\},\\delta ,q_{0},\\perp ,\\) \\(F=\\{q_{2}\\} \\rangle\\), where (as per usual convention) Q is the set of states,  \\(\\Sigma\\) is the input alphabet, \\(\\Gamma\\) is the stack alphabet, \\(\\delta\\) is the state transition function, \\(q_{0}\\)  is the initial state, \\(\\perp\\) is the initial stack symbol, and \\(F\\) is the set of accepting states. The state transition is as follows:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q40_d8080bd1.jpg\"><br> Which one of the following sequences must follow the string 101100 so that the overall string is accepted by the automaton? <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
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
          "id": 118,
          "question": "<p><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q39_1ab3952a.jpg\"> <br>Consider the DFAs M and N given above. The number of states in a minimal DFA that accepts the language L(M)\\(\\cap\\) L(N) is___________ <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8362/gate2015-1-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 119,
          "question": "<p>For any two languages L1 and L2 such that L1 is context-free and L2 is recursively enumerable but not recursive, which of the following is/are necessarily true?<br>\nI. \\(\\bar{L_{1}}\\) (complement of L1) is recursive <br>\nII. \\( \\bar{L_{2}}\\) (complement of L2) is recursive <br>\nIII. \\(\\bar{L_{1}}\\) is context-free <br>\nIV. \\(\\bar{L_{1}} \\cup L_{2}\\) is recursively enumerable <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>III only</p>",
            "<b>C.</b> <p>III and IV only</p>",
            "<b>D.</b> <p>I and IV only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8019/gate2015-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 120,
          "question": "<p>Consider the following Deterministic Finite Automaton M.<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q79_655f330d.jpg\"><br>Let S denote the set of eight bit strings whose second, third, sixth and seventh bits are 1. The number of strings in S that are accepted by M is <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55100/isro2014-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 121,
          "question": "<p>Which of the following is FALSE with respect to possible outcomes of executing a Turing Machine over a given input? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it may halt and accept the input</p>",
            "<b>B.</b> <p>it may halt by changing the input</p>",
            "<b>C.</b> <p>it may halt and reject the input</p>",
            "<b>D.</b> <p>it may never halt</p>"
          ],
          "correct_answer": "<b>B.</b> <p>it may halt by changing the input</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17445/isro2014-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 122,
          "question": "<p>The following Finite Automaton recognizes which of the given languages?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q33_84a6e545.jpg\"><br> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{1,0\\}^{*}\\{01\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{1,0\\}^{*}\\{1\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{1\\}\\{1,0\\}^{*}\\{1\\}\\)</p>",
            "<b>D.</b> <p>\\(1^{*} 0^{*}\\{0,1\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\{1,0\\}^{*}\\{01\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50203/isro2014-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 123,
          "question": "<p>How many states are there in a minimum state deterministic finite automaton accepting the language \\(L=\\left\\{w \\mid w \\in\\{0,1\\}^{*}\\right.\\), number of 0's is divisible by 2 and number of 1's is divisible by 5, respectively }? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>11</p>"
          ],
          "correct_answer": "<b>C.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/54688/isro2014-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 124,
          "question": "<p>The number of states required by a Finite State Machine,to simulate the behavior of a computer with a memory capable of storing 'm' words, each of length 'n' bits is? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(m \\times 2^{n}\\)</p>",
            "<b>B.</b> <p>\\(2^{m+n}\\)</p>",
            "<b>C.</b> <p>\\(2^{m n}\\)</p>",
            "<b>D.</b> <p>m+n</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(2^{m n}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3411/isro2014-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 125,
          "question": "<p>Consider the following languages over the alphabet \\(\\sum =\\{0,1,c\\}:  \\)<br> \\(L_{1}=\\{0^{n}|1^{n}|n\\geq 0\\}\\)<br> \\(L_{2}=\\{wcw^{r}|w\\in \\{0,1\\}^{*}\\}\\) <br> \\(  L_{3}=\\{ww^{r}|w\\in \\{0,1\\}^{*}\\}\\) <br>Here \\(w^{r}\\) is the reverse of the string w. Which of these languages are deterministic Contextfree languages? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>None of the languages</p>",
            "<b>B.</b> <p>Only L1</p>",
            "<b>C.</b> <p>Only L1 and L2</p>",
            "<b>D.</b> <p>All the three languages</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Only L1 and L2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2070/gate2014-3-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 126,
          "question": "<p>Which one of the following problems is undecidable? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Deciding if a given context-free grammar is ambiguous</p>",
            "<b>B.</b> <p>Deciding if a given string is generated by a given context-free grammar</p>",
            "<b>C.</b> <p>Deciding if the language generated by a given context-free grammar is empty</p>",
            "<b>D.</b> <p>Deciding if the language generated by a given context-free grammar is finite.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Deciding if a given context-free grammar is ambiguous</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2069/gate2014-3-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 127,
          "question": "<p>Let \\(\\Sigma\\) be a finite non-empty alphabet and let \\(2^{\\Sigma^{*}}\\) be the power set of \\(\\Sigma^{*}\\) . Which one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both \\(2^{\\Sigma^{*}}\\) and \\(\\Sigma^{*}\\) are countable</p>",
            "<b>B.</b> <p>\\(2^{\\Sigma^{*}}\\) is countable \\(\\Sigma^{*}\\) is uncountable</p>",
            "<b>C.</b> <p>\\(2^{\\Sigma^{*}}\\)  is uncountable and \\(\\Sigma^{*}\\) is countable</p>",
            "<b>D.</b> <p>Both \\(2^{\\Sigma^{*}}\\)  and \\(\\Sigma^{*}\\) are uncountable</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(2^{\\Sigma^{*}}\\)  is uncountable and \\(\\Sigma^{*}\\) is countable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2050/gate2014-3-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 128,
          "question": "<p>The length of the shortest string NOT in the language (over  \\(\\Sigma\\)={a,b}) of the following regular expression is _________.  <br>a*b* (ba)* a* <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2049/gate2014-3-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 129,
          "question": "<p>Let \\(L_{1}=\\{w \\in \\{0,1\\}*|w\\) has at least as many occurrences of (110)'s as (011)'s}. <br>Let \\(L_{2}=\\{w \\in \\{0,1\\}*|w\\) has at least as many occurrence of (000)'s as (111)'s}. <br><br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 is regular but not L2</p>",
            "<b>B.</b> <p>L2 is regular but not L1</p>",
            "<b>C.</b> <p>Both L1 and L2 are regular</p>",
            "<b>D.</b> <p>Neither L1 nor L2 are regular</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L1 is regular but not L2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1995/gate2014-2-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 130,
          "question": "<p>Let \\(\\lt M \\gt\\) be the encoding of a Turing machine as a string over \\(\\Sigma\\)={0,1}. <br>Let L = { \\(\\lt M \\gt\\) |M is a Turning machine that accepts a string of length 2014}. <br>Then, L is <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>decidable and recursively enumerable</p>",
            "<b>B.</b> <p>undecidable but recursively enumerable</p>",
            "<b>C.</b> <p>undecidable and not recursively enumerable</p>",
            "<b>D.</b> <p>decidable but not recursively enumerable</p>"
          ],
          "correct_answer": "<b>B.</b> <p>undecidable but recursively enumerable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1994/gate2014-2-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 131,
          "question": "<p>Let \\(A \\leq _{m}B\\) denotes that language A is mapping reducible (also known as many-to-one reducible) to language B. Which one of the following is FALSE? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>If \\(A\\leq _{m}B\\) and B is recursive then A is recursive</p>",
            "<b>B.</b> <p>If \\(A\\leq _{m}B\\) and A is undecidable then B is undecidable</p>",
            "<b>C.</b> <p>If \\(A\\leq _{m}B\\) and B is recursively enumerable then A is recursively enumerable.</p>",
            "<b>D.</b> <p>If \\(A\\leq _{m}B\\) and B is not recursively enumerable then A is not recursively enumerable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>If \\(A\\leq _{m}B\\) and B is not recursively enumerable then A is not recursively enumerable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1972/gate2014-2-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 132,
          "question": "<p>If \\(L_{1}=\\{a^{n}|n\\geq 0\\}\\) and \\(L_{2}=\\{b^{n}|n\\geq 0 \\}\\), Consider <br>(I) \\(  L_{1}\\cdot L_{2}\\)  is a regular language <br> (II) \\( L_{1} \\cdot L_{2}= \\{a^{n}b^{n}|n \\geq 0\\}\\)<br> Which one of the following is CORRECT? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only (I)</p>",
            "<b>B.</b> <p>Only (II)</p>",
            "<b>C.</b> <p>Both (I) and (II)</p>",
            "<b>D.</b> <p>Neither (I) nor (II)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Only (I)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1971/gate2014-2-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 133,
          "question": "<p>Which of the regular expressions given below represent the following DFA? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q36_eb254c40.jpg\">   <br>                                                 I) 0*1(1+00*1)* <br>\nII) 0*1*1+11*0*1 <br>\nIII) (0+1)*1 <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and III only</p>",
            "<b>D.</b> <p>I, II, and III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and III only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1914/gate2014-1-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 134,
          "question": "<p>Let L be a language and \\(\\bar{L}\\) be its complement. Which of the following is NOT a viable possibility? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Neither L nor \\(\\bar{L}\\) is recursively enumerable (r.e.).</p>",
            "<b>B.</b> <p>One of L and \\(\\bar{L}\\) is r.e. but not recursive; the other is not r.e.</p>",
            "<b>C.</b> <p>Both L and \\(\\bar{L}\\) are r.e. but not recursive</p>",
            "<b>D.</b> <p>Both L and \\(\\bar{L}\\) are recursive.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both L and \\(\\bar{L}\\) are r.e. but not recursive</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1810/gate2014-1-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 135,
          "question": "<p>Consider the finite automaton in the following figure. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q16_6458e73d.jpg\"> <br> What is the set of reachable states for the input string 0011? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{q_{0},q_{1},q_{2}\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{q_{0},q_{1}\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{q_{0},q_{1},q_{2},q_{3}\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{q_{3}\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\{q_{0},q_{1},q_{2}\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1782/gate2014-1-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 136,
          "question": "<p>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The language L = {\\(a^{n}b^{n}\\geq 0\\)} is regular</p>",
            "<b>B.</b> <p>The language L = {\\(a^{n}\\)| n is prime} is regular</p>",
            "<b>C.</b> <p>The language L={ w | w has 3k +1    b's for some k \\(\\in\\) N with \\(\\Sigma\\) = {a,b} } is regular.</p>",
            "<b>D.</b> <p>The language L = { ww| w\\(\\in \\Sigma^{*}\\) with \\(\\Sigma\\)={0,1}} is regular.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The language L={ w | w has 3k +1    b's for some k \\(\\in\\) N with \\(\\Sigma\\) = {a,b} } is regular.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1781/gate2014-1-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 137,
          "question": "<p>What are the final states of the DFA generated from the following NFA?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q73_a73a9f88.jpg\"><br> <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(q_{0}, q_{1}, q_{2}\\)</p>",
            "<b>B.</b> <p>\\([q_{0}, q_{1}], [q_{0}, q_{2}], [ ]\\)</p>",
            "<b>C.</b> <p>\\(q_{0}, [q_{1}, q_{2}]\\)</p>",
            "<b>D.</b> <p>\\([q_{0}, q_{1}], q_{2}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(q_{0}, q_{1}, q_{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/45665/isro-2013-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 138,
          "question": "<p>Which of the following is/are undecidable? <br>\n1. G is a CFG. Is L(G) = \\(\\Phi\\)? <br>\n2. G is a CFG. Is L(G) = \\(\\Sigma ^{*}\\) ? <br>\n3. M is a Turing machine. Is L(M) regular? <br>\n4. A is a DFA and N is an NFA. Is L(A) = L(N)? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 only</p>",
            "<b>B.</b> <p>3 and 4 only</p>",
            "<b>C.</b> <p>1, 2 and 3 only</p>",
            "<b>D.</b> <p>2 and 3 only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2 and 3 only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1553/gate2013-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 139,
          "question": "<p>Consider the DFA A given below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q33_77a7d1ad.jpg\"> <br> Which of the following are FALSE? <br>\n1. Complement of L(A) is context-free. <br>\n2. L(A) = L((11*0+0) (0+1)*0*1*) <br>\n3. For the language accepted by A, A is the minimal DFA. <br>\n4. A accepts all strings over {0, 1} of length at least 2. <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 and 3 only</p>",
            "<b>B.</b> <p>2 and 4 only</p>",
            "<b>C.</b> <p>2 and 3 only</p>",
            "<b>D.</b> <p>3 and 4 only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>3 and 4 only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1544/gate2013-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 140,
          "question": "<p>Consider the following languages. \\(L_{1}=\\{0^{p}1^{q}0^{r}|p,q,r\\geq 0\\}\\) <br> \\( L_{2}=\\{0^{p}1^{q}0^{r} | p,q,r \\geq  0, p \\neq  r \\}\\)<br> Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L2 is context-free</p>",
            "<b>B.</b> <p>L1 \\(\\cap\\) L2 is context-free</p>",
            "<b>C.</b> <p>Complement of L2 is recursive.</p>",
            "<b>D.</b> <p>Complement of L1 is context-free but not regular</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Complement of L1 is context-free but not regular</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1543/gate2013-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 141,
          "question": "<p>Which of the following statements is/are FALSE? <br>\n1. For every non-deterministic Turing machine, there exists an equivalent deterministic\nTuring machine. <br>\n2. Turing recognizable languages are closed under union and complementation. <br>\n3. Turing decidable languages are closed under intersection and complementation. <br>\n4. Turing recognizable languages are closed under union and intersection. <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 and 4 only</p>",
            "<b>B.</b> <p>1 and 3 only</p>",
            "<b>C.</b> <p>2 only</p>",
            "<b>D.</b> <p>3 only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2 only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1439/gate2013-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 142,
          "question": "<p>Consider the languages \\(L_{1}=\\phi \\) abd \\(L_{2}=\\{a\\}\\). Which one of the following represents \\(L_{1} L_{2}^{*} \\cup L_{1}^{*}\\)? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{ \\epsilon \\}\\)</p>",
            "<b>B.</b> <p>\\(\\phi\\)</p>",
            "<b>C.</b> <p>\\(a^{*}\\)</p>",
            "<b>D.</b> <p>\\(\\{ \\epsilon ,a \\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\{ \\epsilon \\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1417/gate2013-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 143,
          "question": "<p>Consider the set of strings on {0,1} in which, every substring of 3 symbols has at most two zeros.\nFor example, 001110 and 011001 are in the language, but 100010 is not. All strings of length less\nthan 3 are also in the language. A partially completed DFA that accepts this language is shown below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q46_bca893f8.jpg\"> <br> The missing arcs in the DFA are <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q46a_ce7a32ca.jpg\"> <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/2159/gate2012-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 144,
          "question": "<p>Given the language L = {ab, aa, baa}, which of the following strings are in L*? <br>\n1) abaabaaabaa <br>\n2) aaaabaaaa <br>\n3) baaaaabaaaab <br>\n4) baaaaabaa <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 2 and 3</p>",
            "<b>B.</b> <p>2, 3 and 4</p>",
            "<b>C.</b> <p>1, 3 and 4</p>",
            "<b>D.</b> <p>1, 2 and 4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1, 2 and 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1609/gate2012-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 145,
          "question": "<p>Which of the following problems are decidable?<br>\n1) Does a given program ever produce an output? <br>\n2) If L is a context-free language, then, is \\(\\bar{L}\\) also context-free?<br>\n3) If L is a regular language, then, is \\(\\bar{L}\\) also regular? <br>\n4) If L is a recursive language, then, is \\(\\bar{L}\\) also recursive? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 2, 3, 4</p>",
            "<b>B.</b> <p>1,2</p>",
            "<b>C.</b> <p>2,3,4</p>",
            "<b>D.</b> <p>3,4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>3,4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1608/gate2012-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 146,
          "question": "<p>What is the complement of the language accepted by the NFA shown below?\nAssume \\(\\sum\\)={a} and \\(\\varepsilon\\) is the empty string. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q12_32353a34.jpg\"> <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\phi\\)</p>",
            "<b>B.</b> <p>\\(\\{\\varepsilon \\}\\)</p>",
            "<b>C.</b> <p>\\(a^{*}\\)</p>",
            "<b>D.</b> <p>\\(\\{a, \\varepsilon \\}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\{\\varepsilon \\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44/gate2012-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 147,
          "question": "<p>A problem whose language is recursion is called? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Unified problem</p>",
            "<b>B.</b> <p>Boolean function</p>",
            "<b>C.</b> <p>Recursive problem</p>",
            "<b>D.</b> <p>Decidable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Decidable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/53154/isro2011-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 148,
          "question": "<p>A deterministic finite automation (DFA)D with alphabet  \\(\\Sigma\\)= {a,b} is given below <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q34_72f0673b.jpg\"> <br>Which of the following finite state machines is a valid minimal DFA which accepts the same language as D? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q34a_dea49aa5.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/2147/gate2011-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 149,
          "question": "<p>Definition of a language L with alphabet {a} is given as following\nL={\\(a^{nk}\\) |k &gt; 0, and n is a positive integer constant} <br>\nWhat is the minimum number of states needed in a DFA to recognize L? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>k+1</p>",
            "<b>B.</b> <p>n+1</p>",
            "<b>C.</b> <p>\\(2^{n+1}\\)</p>",
            "<b>D.</b> <p>\\(2^{k+1}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n+1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2144/gate2011-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 150,
          "question": "<p>Consider the languages L1, L2 and L3 as given below <br>\n\\(L1=\\{0^{p}1^{q}|p,q\\in N\\}\\) <br> \\( L2=\\{0^{p}1^{q}|p,q\\in N and p=q\\} \\) and<br> \\(L3=\\{0^{p}1^{q}0^{r}|p,q,r\\in N \\; and \\; p=q=r\\}\\) <br>Which of the following statements is NOT TRUE? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Push Down Automata (PDA) can be used to recognize L1 and L2</p>",
            "<b>B.</b> <p>L1 is a regular language</p>",
            "<b>C.</b> <p>All the three languages are context free</p>",
            "<b>D.</b> <p>Turing machines can be used to recognize all the languages</p>"
          ],
          "correct_answer": "<b>C.</b> <p>All the three languages are context free</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2128/gate2011-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 151,
          "question": "<p>Let P be a regular language and Q be a context free language such that Q \\(\\subseteq\\)\nP.\n(For example, let P be the language represented by the regular expression p*q*\nand Q be \\(\\{p^{n}q^{n}|n\\in N\\}\\) Then which of the following is ALWAYS regular? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(P\\cap Q\\)</p>",
            "<b>B.</b> <p>P-Q</p>",
            "<b>C.</b> <p>\\(\\sum *-P\\)</p>",
            "<b>D.</b> <p>\\(\\sum *-Q\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\sum *-P\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3429/gate2011-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 152,
          "question": "<p>Which of the following pairs have DIFFERENT expressive power? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Deterministic finite automata (DFA) and Non-deterministic finite automata (NFA)</p>",
            "<b>B.</b> <p>Deterministic push down automata (DPDA) and Non-deterministic push down\nautomata (NPDA)</p>",
            "<b>C.</b> <p>Deterministic single-tape Turing machine and Non-deterministic single tape\nTuring machine</p>",
            "<b>D.</b> <p>Single-tape Turing machine and multi-tape Turing machine</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Deterministic push down automata (DPDA) and Non-deterministic push down\nautomata (NPDA)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2110/gate2011-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 153,
          "question": "<p>Let w be any string of length n in {0, 1}*. Let L be the set of all substrings of w. What is the minimum number of states in a non-deterministic finite automaton that accepts L? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n-1</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>n+1</p>",
            "<b>D.</b> <p>\\(2^{n-1}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>n+1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2342/gate2010-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 154,
          "question": "<p>Consider the languages <br>\\(L1=\\{0^{i}1^{j}\\;| \\; i\\neq j\\}\\). <br>\\(L2=\\{0^{i}1^{j}\\;| \\; i=j\\}\\). <br>\\(L3=\\{0^{i}1^{j}\\;| \\; i=2j+1\\}\\).<br> \\(L4=\\{0^{i}1^{j}\\;| \\; i \\neq 2j\\}\\)<br> Which one of the following statements is true? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only L2 is context free</p>",
            "<b>B.</b> <p>Only L2 and L3 are context free</p>",
            "<b>C.</b> <p>Only L1 and L3 are context free</p>",
            "<b>D.</b> <p>All are context free</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All are context free</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2341/gate2010-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 155,
          "question": "<p>Let L = {w \\(\\in\\) (0 + 1)*|w has even number of 1s}, i.e. L is the set of all bit strings\nwith even number of 1s. Which one of the regular expressions below represents L? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(0 *10 *1) *</p>",
            "<b>B.</b> <p>0 * (10 *10 *) *</p>",
            "<b>C.</b> <p>0 * (10 *1) * 0 *</p>",
            "<b>D.</b> <p>0 *1(10 *1) *10 *</p>"
          ],
          "correct_answer": "<b>B.</b> <p>0 * (10 *10 *) *</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2340/gate2010-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 156,
          "question": "<p>Let L1 be a recursive language. Let L2 and L3 be languages that are recursively enumerable but not recursive. Which of the following statements is not necessarily true? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L2 - L1 is recursively enumerable</p>",
            "<b>B.</b> <p>L1 - L3 is recursively enumerable</p>",
            "<b>C.</b> <p>L2 \\(\\cup\\) L1 is recursively enumerable</p>",
            "<b>D.</b> <p>L2 \\(\\cap\\) L1 is recursively enumerable</p>"
          ],
          "correct_answer": "<b>B.</b> <p>L1 - L3 is recursively enumerable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2190/gate2010-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 157,
          "question": "<p><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q41_9ac32b02.jpg\"> <br> The above DFA accepts the set of all strings over {0,1} that <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>begin either with 0 or 1</p>",
            "<b>B.</b> <p>end with 0</p>",
            "<b>C.</b> <p>end with 00</p>",
            "<b>D.</b> <p>contain the substring 00.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>end with 00</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1327/gate2009-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 158,
          "question": "<p>Let \\(L=L_{1}\\cap L_{2}\\) , where \\(L_{1}\\) and \\(L_{2}\\) are languages as defined below: <br> \\(L_{1}= \\{a^{m}b^{m} c a^{n} b^{n}|m,n\\geq 0 \\}\\) <br> \\(L_{2}=\\{a^{i}b^{j}c^{k}|i,j,k\\geq 0 \\}\\)  <br><br> Then L is <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Not recursive</p>",
            "<b>B.</b> <p>Regular</p>",
            "<b>C.</b> <p>Context free but not regular</p>",
            "<b>D.</b> <p>Recursively enumerable but not context free</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Context free but not regular</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1326/gate2009-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 159,
          "question": "<p>Given the following state table of an FSM with two states A and B, one input and\none output: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q27_3a17281d.jpg\"> <br> If the initial state is A = 0, B=0, what is the minimum length of an input string\nwhich will take the machine to the state A=0, B=1 with Output=1? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1313/gate2009-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 160,
          "question": "<p>Which one of the following is FALSE? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is unique minimal DFA for every regular language</p>",
            "<b>B.</b> <p>Every NFA can be converted to an equivalent PDA.</p>",
            "<b>C.</b> <p>Complement of every context-free language is recursive.</p>",
            "<b>D.</b> <p>Every nondeterministic PDA can be converted to an equivalent deterministic PDA.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Every nondeterministic PDA can be converted to an equivalent deterministic PDA.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1308/gate2009-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 161,
          "question": "<p>Which one of the following languages over the alphabet {0,1} is described by the regular expression: (0+1)*0(0+1)*0(0+1)*? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The set of all strings containing the substring 00.</p>",
            "<b>B.</b> <p>The set of all strings containing at most two 0's.</p>",
            "<b>C.</b> <p>The set of all strings containing at least two 0's.</p>",
            "<b>D.</b> <p>The set of all strings that begin and end with either 0 or 1</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The set of all strings containing at least two 0's.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1307/gate2009-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 162,
          "question": "<p>S\\(\\rightarrow\\)aSa|bSb|a|b;  The language generated by the above grammar over the alphabet {a,b} is the set of <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All palindromes.</p>",
            "<b>B.</b> <p>All odd length palindromes.</p>",
            "<b>C.</b> <p>Strings that begin and end with the same symbol</p>",
            "<b>D.</b> <p>All even length palindromes.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>All odd length palindromes.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1304/gate2009-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 163,
          "question": "<p>A CFG G is given with the following productions where S is the start symbol, A is a non-terminal and a and b are terminals.<br><br>\\(\\begin{array}{l} S \\rightarrow a S \\mid A \\\\ A \\rightarrow a A b|b A a| \\epsilon \\end{array}\\)<br><br>For the string \"aabbaab\" how many steps are required to derive the string and how many parse trees are there? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6 and 1</p>",
            "<b>B.</b> <p>6 and 2</p>",
            "<b>C.</b> <p>7 and 2</p>",
            "<b>D.</b> <p>4 and 2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>6 and 1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3393/gate2008-it-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 164,
          "question": "<p>A CFG G is given with the following productions where S is the start symbol, A is a non-terminal and a and b are terminals.<br><br>\\(\\begin{array}{l} S \\rightarrow a S \\mid A \\\\ A \\rightarrow a A b|b A a| \\epsilon \\end{array}\\)<br><br>Which of the following strings is generated by the grammar above? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>aabbaba</p>",
            "<b>B.</b> <p>aabaaba</p>",
            "<b>C.</b> <p>abababb</p>",
            "<b>D.</b> <p>aabbaab</p>"
          ],
          "correct_answer": "<b>D.</b> <p>aabbaab</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3392/gate2008-it-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 165,
          "question": "<p>Consider the following two finite automata. \\(M_1\\) accepts \\(L_1\\) and \\(M_2\\) accepts \\(L_2\\). <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q36_9f601624.jpg\"><br><br>Which one of the following is TRUE? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_1 = L_2\\)</p>",
            "<b>B.</b> <p>\\(L_1 \\subset L_2\\)</p>",
            "<b>C.</b> <p>\\(L_1 \\cap L_{2}^{C} = \\varnothing\\)</p>",
            "<b>D.</b> <p>\\(L_1 \\cup L_2 \\neq L_1\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(L_1 = L_2\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3346/gate2008-it-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 166,
          "question": "<p>Which of the following languages is (are) non-regular?<br>\n\\(L_1 = \\{0^m1^n \\mid 0 \\leq m \\leq n \\leq 10000\\}\\)<br>\n\\(L_2 = \\{w \\mid w\\) reads the same forward and backward\\(\\}\\)<br>\n\\(L_3 = \\{w \\in \\{0, 1\\} ^* \\mid w\\) contains an even number of 0's and an even number of 1's\\(\\}\\)<br> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_2\\) and \\(L_3\\) only</p>",
            "<b>B.</b> <p>\\(L_1\\) and \\(L_2\\) only</p>",
            "<b>C.</b> <p>\\(L_3\\) only</p>",
            "<b>D.</b> <p>\\(L_2\\) only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(L_2\\) only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3345/gate2008-it-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 167,
          "question": "<p>Consider a CFG with the following productions.<br><br>\n\\(S \\to AA \\mid B\\)<br>\n\\(A \\to 0A \\mid A0 \\mid 1\\)<br>\n\\(B \\to 0B00 \\mid 1\\)<br><br>\nS is the start symbol, A and B are non-terminals and 0 and 1 are the terminals. The language generated by this grammar is: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left\\{0^n 10^{2n} \\mid n \\geq 1\\right\\}\\)</p>",
            "<b>B.</b> <p>\\(\\left\\{0^i 10^j 10^k \\mid i, j, k \\geq 0\\right\\} \\cup \\left\\{0^n 10^{2n}\\mid n \\geq 0\\right\\}\\)</p>",
            "<b>C.</b> <p>\\(\\left\\{0^i 10^j \\mid i, j \\geq 0\\right\\} \\cup \\left\\{0^n 10^{2n}\\mid n \\geq 0\\right\\}\\)</p>",
            "<b>D.</b> <p>The set of all strings over \\(\\{0, 1\\}\\) containing at least two 0's</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\left\\{0^i 10^j 10^k \\mid i, j, k \\geq 0\\right\\} \\cup \\left\\{0^n 10^{2n}\\mid n \\geq 0\\right\\}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3344/gate2008-it-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 168,
          "question": "<p>Consider the following languages.<br>\n\\(L_1 = \\{a^i b^j c^k \\mid i = j, k \\geq 1\\}\\)<br>\n\\(L_2 = \\{a^i b^j \\mid j = 2i, i \\geq 0\\}\\)<br>\nWhich of the following is true? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_1\\) is not a CFL but \\(L_2\\) is</p>",
            "<b>B.</b> <p>\\(L_1 \\cap L_2 = \\varnothing\\) and \\(L_1\\) is non-regular</p>",
            "<b>C.</b> <p>\\(L_1 \\cup L_2\\) is not a CFL but \\(L_2\\) is</p>",
            "<b>D.</b> <p>There is a 4-state PDA that accepts \\(L_1\\), but there is no DPDA that accepts \\(L_2\\).</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(L_1 \\cap L_2 = \\varnothing\\) and \\(L_1\\) is non-regular</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3343/gate2008-it-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 169,
          "question": "<p>If the final states and non-final states in the DFA below are interchanged, then which of the following languages over the alphabet {a,b} will be accepted by the new DFA? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q32_07b3cb36.jpg\"><br> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Set of all strings that do not end with ab</p>",
            "<b>B.</b> <p>Set of all strings that begin with either a or ab</p>",
            "<b>C.</b> <p>Set of all strings that do not contain the substring ab,</p>",
            "<b>D.</b> <p>The set described by the regular expression b*aa*(ba)*b*</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Set of all strings that do not end with ab</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3342/gate2008-it-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 170,
          "question": "<p>Let N be an NFA with n states and let M be the minimized DFA with m states recognizing the same language. Which of the following in NECESSARILY true? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(m \\leq 2^n\\)</p>",
            "<b>B.</b> <p>\\(n \\leq m\\)</p>",
            "<b>C.</b> <p>M has one accept state</p>",
            "<b>D.</b> <p>\\(m = 2^n\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(m \\leq 2^n\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3266/gate2008-it-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 171,
          "question": "<p>Which of the following regular expressions describes the language over\\(\\{0, 1\\}\\) consisting of strings that contain exactly two 1's? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((0 + 1)^ * \\ 11(0 + 1) ^*\\)</p>",
            "<b>B.</b> <p>\\(0 ^* \\ 110 ^*\\)</p>",
            "<b>C.</b> <p>\\(0 ^* 10 ^* 10 ^*\\)</p>",
            "<b>D.</b> <p>\\((0 + 1) ^* 1(0 + 1) ^* 1 (0 + 1) ^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(0 ^* 10 ^* 10 ^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3265/gate2008-it-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 172,
          "question": "<p>Which of the following are regular sets? <br><br> \\(I.  \\{a^{n}b^{2m}|n\\geq 0,m\\geq 0\\}  \\)<br> II. \\( \\{a^{n}b^{m}|n=2m\\}  \\)<br> III.  \\(\\{a^{n}b^{m}|n\\neq m\\}  \\)<br> IV. \\(\\{xcy|x,y,\\in  \\{a,b\\}^*\\}\\) <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and IV only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>I only</p>",
            "<b>D.</b> <p>IV only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I and IV only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/476/gate2008-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 173,
          "question": "<p>Match the following NFAs with the regular expressions they correspond to <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q52_abcd3d90.jpg\"> <br>  1. \\(\\epsilon\\)\n+ 0(01*1 + 00) * 01* <br>\n2. \\(\\epsilon\\) + 0(10 *1 + 00) * 0 <br>\n3. \\(\\epsilon\\) + 0(10 *1 + 10) *1 <br>\n4. \\(\\epsilon\\) + 0(10 *1 + 10) *10 * <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P - 2, Q - 1, R - 3, S - 4</p>",
            "<b>B.</b> <p>P - 1, Q - 3, R - 2, S - 4</p>",
            "<b>C.</b> <p>P - 1, Q - 2, R - 3, S - 4</p>",
            "<b>D.</b> <p>P - 3, Q - 2, R - 1, S - 4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P - 1, Q - 2, R - 3, S - 4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/464/gate2008-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 174,
          "question": "<p>Which of the following statements are true? <br><br>\nI. Every left-recursive grammar can be converted to a right-recursive grammar\nand vice-versa <br><br>\nII. All \\(\\varepsilon\\)-productions can be removed from any context-free grammar by suitable transformations<br><br>\nIII. The language generated by a context-free grammar all of whose productions\nare of the form x \\(\\rightarrow\\) w or x \\(\\rightarrow\\) wY (where, w is a string of terminals and Y is a non-terminal), is always regular <br><br>\nIV. The derivation trees of strings generated by a context-free grammar in\nChomsky Normal Form are always binary trees <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II, III and IV</p>",
            "<b>B.</b> <p>II, III and IV only</p>",
            "<b>C.</b> <p>I, III and IV only</p>",
            "<b>D.</b> <p>I, II and IV only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>I, III and IV only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/395/gate2008-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 175,
          "question": "<p>Given below are two finite state automata (\\(\\rightarrow\\) indicates the start state and F indicates a final state) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q49a_47d407d6.jpg\">  <br> Which of the following represents the product automaton ZxY?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q49b_02ea6677.jpg\"> <br><br><strong>(GATE CSE 2008)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/462/gate2008-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 176,
          "question": "<p>Which of the following statements is false? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every NFA can be converted to an equivalent DFA</p>",
            "<b>B.</b> <p>Every non-deterministic Turing machine can be converted to an equivalent\ndeterministic Turing machine</p>",
            "<b>C.</b> <p>Every regular language is also a context-free language</p>",
            "<b>D.</b> <p>Every subset of a recursively enumerable set is recursive</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Every subset of a recursively enumerable set is recursive</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/461/gate2008-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 177,
          "question": "<p>If L and \\(\\bar{L}\\) are recursively enumerable then L is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>regular</p>",
            "<b>B.</b> <p>context-free</p>",
            "<b>C.</b> <p>context-sensitive</p>",
            "<b>D.</b> <p>recursive</p>"
          ],
          "correct_answer": "<b>D.</b> <p>recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/411/gate2008-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 178,
          "question": "<p>Which of the following are decidable? <br><br>\nI. Whether the intersection of two regular languages is infinite <br>\nII. Whether a given context-free language is regular <br>\nIII. Whether two push-down automata accept the same language <br>\nIV. Whether a given grammar is context-free <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II</p>",
            "<b>B.</b> <p>I and IV</p>",
            "<b>C.</b> <p>II and III</p>",
            "<b>D.</b> <p>II and IV</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and IV</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/408/gate2008-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 179,
          "question": "<p>Which of the following is true for the language{ \\(a^{p}\\)|p is a prime} ? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is not accepted by a Turing Machine</p>",
            "<b>B.</b> <p>It is regular but not context-free</p>",
            "<b>C.</b> <p>It is context-free but not regular</p>",
            "<b>D.</b> <p>It is neither regular nor context-free, but accepted by a Turing machine</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It is neither regular nor context-free, but accepted by a Turing machine</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/407/gate2008-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 180,
          "question": "<p>Consider the regular expression \\(R = (a + b)^* \\ (aa + bb) \\ (a + b)^*\\)<br>\nWhich one of the regular expressions given below defines the same language as defined by the regular expression R ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((a(ba)^* + b(ab)^*)(a + b)^+\\)</p>",
            "<b>B.</b> <p>\\((a(ba)^* + b(ab)^*)^*(a + b)^*\\)</p>",
            "<b>C.</b> <p>\\((a(ba)^* (a + bb) + b(ab)^*(b + aa))(a + b)^*\\)</p>",
            "<b>D.</b> <p>\\((a(ba)^* (a + bb) + b(ab)^*(b + aa))(a + b)^+\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\((a(ba)^* (a + bb) + b(ab)^*(b + aa))(a + b)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3525/gate2007-it-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 181,
          "question": "<p>Consider the regular expression \\(R = (a + b)^* (aa + bb) (a + b)^*\\)<br>\nWhich deterministic finite automaton accepts the language represented by the regular expression R?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q72_68fd615c.jpg\"><br> <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3524/gate2007-it-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 182,
          "question": "<p>Consider the regular expression \\(R = (a + b)^* (aa + bb) (a + b)^*\\) <br>\nWhich of the following non-deterministic finite automata recognizes the language defined by the regular expression R? Edges labeled \\(\\lambda\\) denote transitions on the empty string.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q71_f699dc08.jpg\"><br> <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3523/gate2007-it-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 183,
          "question": "<p>Consider the following finite automata P and Q over the alphabet {a, b, c}. The start states are indicated by a double arrow and final states are indicated by a double circle. Let the languages recognized by them be denoted by L(P) and L(Q) respectively.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q50a_f7605ab2.jpg\"><br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q50b_a17fcd95.jpg\"><br>The automation which recognizes the language L(P)\\(\\cap\\)L(Q) is :<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q50_5ee91b7a.jpg\"><br> <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3492/gate2007-it-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 184,
          "question": "<p>Consider the following DFA in which \\(S_0\\) is the start state and \\(S_1\\), \\(S_3\\) are the final states<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q47_b4851ece.jpg\"><br>What language does this DFA recognize? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All strings of x and y</p>",
            "<b>B.</b> <p>All strings of x and y which have either even number of x and even number of y or odd number of x and odd number of y</p>",
            "<b>C.</b> <p>All strings of x and y which have equal number of x and y</p>",
            "<b>D.</b> <p>All strings of x and y with either even number of x and odd number of y or odd number of x and even number of y</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All strings of x and y with either even number of x and odd number of y or odd number of x and even number of y</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3489/gate2007-it-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 185,
          "question": "<p>The two grammars given below generate a language over the alphabet \\(\\{x, y, z\\}\\)<br>\nG1 :         \\(S \\rightarrow x \\mid z \\mid x \\ S \\mid z \\ S \\mid y \\ B\\) <br>\n\\(B \\rightarrow y \\mid z \\mid y \\ B \\mid z \\ B\\)<br>\nG2 :         \\(S \\rightarrow y \\mid z \\mid y \\ S \\mid z \\ S \\mid x \\ B\\)<br>\n\\(B \\rightarrow y \\mid y \\ S\\)<br>\nWhich one of the following choices describes the properties satisfied by the strings in these languages? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>G1 : No y appears before any x<br>\nG2 : Every x is followed by at least one y</p>",
            "<b>B.</b> <p>G1 : No y appears before any x<br>\nG2 : No x appears before any y</p>",
            "<b>C.</b> <p>G1 : No y appears after any x<br>\nG2 : Every x is followed by at least one y</p>",
            "<b>D.</b> <p>G1 : No y appears after any x<br>\nG2 : Every y is followed by at least one x</p>"
          ],
          "correct_answer": "<b>A.</b> <p>G1 : No y appears before any x<br>\nG2 : Every x is followed by at least one y</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3481/gate2007-it-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 186,
          "question": "<p>Consider the following Finite State Automaton: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q74_2189d193.jpg\"><br>The minimum state automaton equivalent to the above FSA has the following\nnumber of states <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43514/gate2007-75#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 187,
          "question": "<p>Consider the following Finite State Automaton: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q74_2189d193.jpg\"><br> The language accepted by this automaton is given by the regular expression <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>b*ab*ab*ab*</p>",
            "<b>B.</b> <p>(a+b)*</p>",
            "<b>C.</b> <p>b*a(a+b)*</p>",
            "<b>D.</b> <p>b*ab*ab*</p>"
          ],
          "correct_answer": "<b>C.</b> <p>b*a(a+b)*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1270/gate2007-74#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 188,
          "question": "<p>Consider the following two statements: <br><br>\nP: Every regular grammar is LL(1) <br>\nQ: Every regular set has a LR(1) grammar <br><br>\nWhich of the following is TRUE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both P and Q are true</p>",
            "<b>B.</b> <p>P is true and Q is false</p>",
            "<b>C.</b> <p>P is false and Q is true</p>",
            "<b>D.</b> <p>Both P and Q are false</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P is false and Q is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1251/gate2007-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 189,
          "question": "<p>Which of the following languages is regular? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{\\({ww^{R}|w \\in \\{0,1\\}^{+}}\\)}</p>",
            "<b>B.</b> <p>{\\({ww^{R}x|x,w \\in \\{0,1\\}^{+}}\\)}</p>",
            "<b>C.</b> <p>{\\({wxw^{R}|x,w\\in \\{0,1\\}^{+}}\\)}</p>",
            "<b>D.</b> <p>{\\({xww^{R}|x,w\\in \\{0,1\\}^{+}}\\)}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{\\({wxw^{R}|x,w\\in \\{0,1\\}^{+}}\\)}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1229/gate2007-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 190,
          "question": "<p>The language \\(L=\\{0^{i}21^{i}|i\\geq 0\\}\\) over the alphabet {0,1,2} is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>not recursive</p>",
            "<b>B.</b> <p>is recursive and is a deterministic CFL.</p>",
            "<b>C.</b> <p>is a regular language.</p>",
            "<b>D.</b> <p>is not a deterministic CFL but a CFL.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>is recursive and is a deterministic CFL.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1228/gate2007-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 191,
          "question": "<p>A minimum state deterministic finite automaton accepting the language L={w|w\\(\\in\\) {0,1}*} , number of 0s and 1s in w are divisible by 3 and 5, respectively has <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15 states</p>",
            "<b>B.</b> <p>11 states</p>",
            "<b>C.</b> <p>10 states</p>",
            "<b>D.</b> <p>9 states</p>"
          ],
          "correct_answer": "<b>A.</b> <p>15 states</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1227/gate2007-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 192,
          "question": "<p>Which of the following problems is undecidable? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Membership problem for CFGs.</p>",
            "<b>B.</b> <p>Ambiguity problem for CFGs.</p>",
            "<b>C.</b> <p>Finiteness problem for FSAs.</p>",
            "<b>D.</b> <p>Equivalence problem for FSAs.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Ambiguity problem for CFGs.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1204/gate2007-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 193,
          "question": "<p>Let L be a regular language. Consider the constructions on L below:<br>\nI. \\(\\text{repeat} (L) = \\{ww \\mid w \\in L\\}\\)<br>\nII. \\(\\text{prefix} (L) = \\{u \\mid \\exists v : uv \\in L\\}\\)<br>\nIII. \\(\\text{suffix} (L) = \\{v \\mid \\exists u: uv \\in L\\}\\)<br>\nIV. \\(\\text{half} (L) = \\{u \\mid \\exists v: | v | = | u | \\text{ and } uv \\in L\\}\\)<br>Which choice of L is best suited to support your answer above? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((a + b)^*\\)</p>",
            "<b>B.</b> <p>\\(\\{\\epsilon, a, ab, bab\\}\\)</p>",
            "<b>C.</b> <p>\\((ab)^*\\)</p>",
            "<b>D.</b> <p>\\(\\{a^nb^n \\mid n \\geq 0\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((a + b)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3637/gate2006-it-81\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 194,
          "question": "<p>Let L be a regular language. Consider the constructions on L below:<br>\nI. \\(\\text{repeat} (L) = \\{ww \\mid w \\in L\\}\\)<br>\nII. \\(\\text{prefix} (L) = \\{u \\mid \\exists v : uv \\in L\\}\\)<br>\nIII. \\(\\text{suffix} (L) = \\{v \\mid \\exists u: uv \\in L\\}\\)<br>\nIV. \\(\\text{half} (L) = \\{u \\mid \\exists v: | v | = | u | \\text{ and } uv \\in L\\}\\)<br>Which of the constructions could lead to a non-regular language?<br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both I and IV</p>",
            "<b>B.</b> <p>Only 1</p>",
            "<b>C.</b> <p>Only IV</p>",
            "<b>D.</b> <p>Both II and III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Only 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3624/gate2006-it-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 195,
          "question": "<p>For a state machine with the following state diagram the expression for the next state \\(S^+\\) in terms of the current state S and the input variables x and y is <br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q37_9146a2c1.jpg\"><br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S^+ = S' . y' + S . x\\)</p>",
            "<b>B.</b> <p>\\(S^+ = S. x . y' + S' . y . x'\\)</p>",
            "<b>C.</b> <p>\\(S^+ = x . y'\\)</p>",
            "<b>D.</b> <p>\\(S^+ = S' . y + S . x'\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(S^+ = S' . y' + S . x\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3576/gate2006-it-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 196,
          "question": "<p>In the context-free grammar below, S is the start symbol, a and b are terminals, and \\(\\epsilon\\) denotes the empty string.<br>\n\\(S \\to aSAb \\mid \\epsilon\\)<br>\n\\(A \\to bA \\mid \\epsilon\\)<br>\nThe grammar generates the language <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(((a + b)^* b)\\)</p>",
            "<b>B.</b> <p>\\(\\{a^mb^n \\mid m \\leq n\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{a^mb^n \\mid m = n)\\)</p>",
            "<b>D.</b> <p>\\(a^* b^*\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\{a^mb^n \\mid m \\leq n\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3573/gate2006-it-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 197,
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
          "id": 198,
          "question": "<p>Let L be a context-free language and M a regular language. Then the language \\(L \\cap M\\) is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>always regular</p>",
            "<b>B.</b> <p>never regular</p>",
            "<b>C.</b> <p>always a deterministic context-free language</p>",
            "<b>D.</b> <p>always a context-free language</p>"
          ],
          "correct_answer": "<b>D.</b> <p>always a context-free language</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3571/gate2006-it-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 199,
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
          "id": 200,
          "question": "<p>Which of the following statements about regular languages is NOT true ? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every language has a regular superset</p>",
            "<b>B.</b> <p>Every language has a regular subset</p>",
            "<b>C.</b> <p>Every subset of a regular language is regular</p>",
            "<b>D.</b> <p>Every subset of a finite language is regular</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Every subset of a regular language is regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3569/gate2006-it-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 201,
          "question": "<p>Consider the regular grammar below <br>\n\\(S \\rightarrow bS \\mid aA \\mid \\epsilon\\)<br>\n\\(A \\rightarrow aS \\mid bA\\)<br>\nThe Myhill-Nerode equivalence classes for the language generated by the grammar are <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{w \\in (a + b)^* \\mid \\#a(w) \\text{ is even) and} \\{w \\in (a + b)^* \\mid \\#a(w) \\text{ is odd}\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{w \\in (a + b)^* \\mid \\#a(w) \\text{ is even) and} \\{w \\in (a + b)^* \\mid \\#b(w) \\text{ is odd}\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{w \\in (a + b)^* \\mid \\#a(w) = \\#b(w) \\text{and }\\{w \\in (a + b)^* \\mid \\#a(w) \\neq \\#b(w)\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{\\epsilon\\},\\{wa \\mid w \\in (a + b)^* \\text{and} \\{wb \\mid w \\in (a + b)^*\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\{w \\in (a + b)^* \\mid \\#a(w) \\text{ is even) and} \\{w \\in (a + b)^* \\mid \\#a(w) \\text{ is odd}\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3568/gate2006-it-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 202,
          "question": "<p>Which regular expression best describes the language accepted by the non-deterministic automaton below?\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q5_1a0e53b1.jpg\"><br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((a + b)^* \\ a(a + b)b\\)</p>",
            "<b>B.</b> <p>\\((abb)^*\\)</p>",
            "<b>C.</b> <p>\\((a + b)^* \\ a(a + b)^* \\ b(a + b)^*\\)</p>",
            "<b>D.</b> <p>\\((a + b)^*\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((a + b)^* \\ a(a + b)b\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3544/gate2006-it-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 203,
          "question": "<p>In the context-free grammar below, S is the start symbol, a and b are terminals, and\\(\\epsilon\\) denotes the empty string <br>\n\\(S \\rightarrow aSa \\mid bSb \\mid a \\mid b \\mid \\epsilon\\)<br>\nWhich of the following strings is NOT generated by the grammar? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>aaaa</p>",
            "<b>B.</b> <p>baba</p>",
            "<b>C.</b> <p>abba</p>",
            "<b>D.</b> <p>babaaabab</p>"
          ],
          "correct_answer": "<b>B.</b> <p>baba</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3543/gate2006-it-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 204,
          "question": "<p>In the automaton below, s is the start state and t is the only final state.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q3_da00c87d.jpg\"><br>\nConsider the strings \\(u = abbaba, v = bab, \\text{ and } w = aabb\\). Which of the following statements is true? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The automaton accepts u and v but not w</p>",
            "<b>B.</b> <p>The automaton accepts each of u, v, and w</p>",
            "<b>C.</b> <p>The automaton rejects each of u, v, and w</p>",
            "<b>D.</b> <p>The automaton accepts u but rejects v and w</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The automaton accepts u but rejects v and w</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3542/gate2006-it-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 205,
          "question": "<p>Consider the regular language L = (111 + 11111)* . The minimum number of\nstates in any DFA accepting this languages is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>9</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1291/gate2006-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 206,
          "question": "<p>Let L1 be regular language, L2 be a deterministic context-free language and L3 a\nrecursively enumerable, but not recursive, language. Which one of the following\nstatements is false? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_{1}\\cap L_{2}\\) is a deterministic CFL</p>",
            "<b>B.</b> <p>\\(L_{3}\\cap L_{1}\\) is recursive</p>",
            "<b>C.</b> <p>\\(L_{1}\\cup L_{2}\\) is context-free</p>",
            "<b>D.</b> <p>\\(L_{1}\\cap L_{2}\\cap L_{3}\\) is recursively enumerable</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(L_{3}\\cap L_{1}\\) is recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/996/gate2006-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 207,
          "question": "<p>Consider the following statements about the context-free grammer <br> \\(G=\\{S\\rightarrow SS, S\\rightarrow ab, S\\rightarrow ba, S\\rightarrow \\varepsilon  \\}\\) <br> 1. G is ambiguous <br>\n2. G produces all strings with equal number of a's  and b's <br> 3.\nG can be accepted by a deterministic PDA. <br>\nWhich combination below expresses all the true statements about G? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I Only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and III only</p>",
            "<b>D.</b> <p>I,II and III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/995/gate2006-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 208,
          "question": "<p>For \\(S \\in (0+1)^{*}\\),  let d(s) denote the decimal value of s (e.g.   d(101)=5).<br>   Let L={s \\(\\in\\) (0+1)*| d(s) mod 5=2 and d(s) mod 7\\(\\neq\\)4}<br> Which one of the following statements is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L is recursively enumerable, but not recursive</p>",
            "<b>B.</b> <p>L is recursive, but not context-free</p>",
            "<b>C.</b> <p>L is context-free, but not regular</p>",
            "<b>D.</b> <p>Lis regular</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Lis regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/993/gate2006-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 209,
          "question": "<p>If s is a string over (0+1)*, then let \\(n_0 (s)\\) denote the number of 0's in s and \\(n_1 (s)\\)\nthe number of 1's in s. Which one of the following languages is not regular? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L = {s \\(\\in\\) (0+1)* | \\(n_0 (s)\\) is a 3-digit prime}</p>",
            "<b>B.</b> <p>L = {s \\(\\in\\) (0+1)* | for every prefix s' of s,  |\\(n_0 (s') - n_1 (s')\\)| \\(\\leq\\) 2}</p>",
            "<b>C.</b> <p>L = {s \\(\\in\\) (0+1)* |\\(n_0 (s) - n_1 (s)\\)| \\(\\leq\\) 4}</p>",
            "<b>D.</b> <p>L = {s \\(\\in\\) (0+1)* | \\(n_0(s)\\) mod 7 = \\(n_1(s)\\) mod 5 = 0}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>L = {s \\(\\in\\) (0+1)* |\\(n_0 (s) - n_1 (s)\\)| \\(\\leq\\) 4}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/992/gate2006-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 210,
          "question": "<p>Let  \\(L_{1}=\\{0^{n+m}1^{n}0^{m}|n,m\\geq 0\\}\\) <br> \\(L_{2}=\\{0^{n+m}1^{n+m}0^{m}|n,m\\geq 0\\}\\) <br> \\(L_{3}=\\{0^{n+m}1^{n+m}0^{n+m}|n,m\\geq 0\\}\\)<br> <br>Which of these languages are NOT context free? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 only</p>",
            "<b>B.</b> <p>L3 only</p>",
            "<b>C.</b> <p>L1 and L2</p>",
            "<b>D.</b> <p>L2 and L3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>L2 and L3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/980/gate2006-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 211,
          "question": "<p>A language L satisfies the Pumping Lemma for regular languages, and also the Pumping Lemma for context-free languages. Which of the following statements about L is TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L is necessarily a regular language.</p>",
            "<b>B.</b> <p>L is necessarily a context-free language, but not necessarily a regular language.</p>",
            "<b>C.</b> <p>L is necessarily a non-regular language.</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3787/gate2005-it-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 212,
          "question": "<p>Consider the regular grammar: <br>\n\\(S \\rightarrow Xa \\mid Ya\\)<br>\n\\(X \\rightarrow Za\\)<br>\n\\(Z \\rightarrow Sa \\mid \\epsilon\\)<br>\n\\(Y \\rightarrow Wa\\)<br>\n\\(W \\rightarrow Sa\\)<br>\nwhere S is the starting symbol, the set of terminals is {a} and the set of non-terminals is {S, W, X, Y, Z}.<br>\nWe wish to construct a deterministic finite automaton (DFA) to recognize the same language. What is the minimum number of states required for the DFA? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3786/gate2005-it-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 213,
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
          "id": 214,
          "question": "<p>Consider the non-deterministic finite automaton (NFA) shown in the figure.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q37_2cc385ad.jpg\"><br>State X is the starting state of the automaton. Let the language accepted by the NFA with Y as the only accepting state be L1. Similarly, let the language accepted by the NFA with Z as the only accepting state be L2. Which of the following statements about L1 and L2 is TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 = L2</p>",
            "<b>B.</b> <p>\\(L1 \\subset L2\\)</p>",
            "<b>C.</b> <p>\\(L2 \\subset L1\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L1 = L2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3784/gate2005-it-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 215,
          "question": "<p>The language \\(\\{0^n 1^n 2^n \\mid 1 \\leq n \\leq 10^6\\}\\) is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>regular</p>",
            "<b>B.</b> <p>context-free but not regular</p>",
            "<b>C.</b> <p>context-free but its complement is not context-free</p>",
            "<b>D.</b> <p>not context-free</p>"
          ],
          "correct_answer": "<b>A.</b> <p>regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3751/gate2005-it-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 216,
          "question": "<p>Which of the following statements is TRUE about the regular expression 01*0? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It represents a finite set of finite strings.</p>",
            "<b>B.</b> <p>It represents an infinite set of finite strings.</p>",
            "<b>C.</b> <p>It represents a finite set of infinite strings.</p>",
            "<b>D.</b> <p>It represents an infinite set of infinite strings.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It represents an infinite set of finite strings.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3749/gate2005-it-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 217,
          "question": "<p>Let L be a regular language and M be a context-free language, both over the alphabet \\(\\Sigma\\). Let \\(L^c\\) and \\(M^c\\) denote the complements of L and M respectively. Which of the following statements about the language  \\(L^c\\cup M^c\\) is TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is necessarily regular but not necessarily context-free.</p>",
            "<b>B.</b> <p>It is necessarily context-free.</p>",
            "<b>C.</b> <p>It is necessarily non-regular.</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3748/gate2005-it-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 218,
          "question": "<p>The following diagram represents a finite state machine which takes as input a binary number from\nthe least significant bit. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q63_5d9c1d2c.jpg\"> <br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It computes 1's complement of the input number</p>",
            "<b>B.</b> <p>It computes 2's complement of the input number</p>",
            "<b>C.</b> <p>It increments the input number</p>",
            "<b>D.</b> <p>It decrements the input number</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It computes 2's complement of the input number</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1386/gate2005-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 219,
          "question": "<p>Consider the languages: <br><br>\\(L_{1}=\\{ww^{R}|w\\in \\{0,1\\}*\\} \\) <br>\\( L_{2}=\\{w\\#w^{R}|w\\in \\{0,1\\}*\\}\\),where # is a special symbol  <br>\\(  L_{3}=\\{ww|w\\in \\{0,1\\}*\\}\\)<br> <br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 is a deterministic CFL</p>",
            "<b>B.</b> <p>L2 is a deterministic CFL</p>",
            "<b>C.</b> <p>L3 is a CFL, but not a deterministic CFL</p>",
            "<b>D.</b> <p>L3 is a deterministic CFL</p>"
          ],
          "correct_answer": "<b>B.</b> <p>L2 is a deterministic CFL</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1380/gate2005-57#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 220,
          "question": "<p>Let L1 be a recursive language, and let L2 be a recursively enumerable but not a recursive language.\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\bar{L_{1}}\\) is recursive and \\(\\bar{L_{2}}\\) is recursively enumerable</p>",
            "<b>B.</b> <p>\\(\\bar{L_{1}}\\) is recursive and \\(\\bar{L_{2}}\\) is not recursively enumerable</p>",
            "<b>C.</b> <p>\\(\\bar{L_{1}}\\) and \\(\\bar{L_{2}}\\) are recursively enumerable</p>",
            "<b>D.</b> <p>\\(\\bar{L_{1}}\\) is recursively enumerable and \\(\\bar{L_{2}}\\) is recursive</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\bar{L_{1}}\\) is recursive and \\(\\bar{L_{2}}\\) is not recursively enumerable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1379/gate2005-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 221,
          "question": "<p>Consider the languages: <br> \\(L_{1}=\\{a^{n}b^{n}c^{m}|n,m \\gt 0\\} \\) and \\(L_{2}=\\{a^{n}b^{m}c^{m}|n,m \\gt 0\\}\\)<br> Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 \\(\\cap\\) L2 is a context-free language</p>",
            "<b>B.</b> <p>L1 \\(\\cup\\) L2 is a context-free language</p>",
            "<b>C.</b> <p>L1 and L2 are context-free language</p>",
            "<b>D.</b> <p>L1 \\(\\cap\\) L2 is a context sensitive language</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L1 \\(\\cap\\) L2 is a context-free language</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1378/gate2005-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 222,
          "question": "<p>Let \\(N_{f}\\) and \\(N_{p}\\) denote the classes of languages accepted by non-deterministic finite automata and non- deterministic push-down automata, respectively. Let \\(D_{f}\\) and \\(D_{p}\\) denote the classes of languages\naccepted by deterministic finite automata and deterministic push-down automata respectively. Which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(D_{f }\\subset N_{f}\\) and \\(D_{p }\\subset N_{p}\\)</p>",
            "<b>B.</b> <p>\\(D_{f }\\subset N_{f}\\)  and \\(D_{p }= N_{p}\\)</p>",
            "<b>C.</b> <p>\\(D_{f }= N_{f}\\)  and \\(D_{p }= N_{p}\\)</p>",
            "<b>D.</b> <p>\\(D_{f }= N_{f}\\)  and \\(D_{p }\\subset N_{p}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(D_{f }= N_{f}\\)  and \\(D_{p }\\subset N_{p}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1377/gate2005-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 223,
          "question": "<p>Consider the machine M: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q53_b2cf6cf5.jpg\"> <br> The language recognized by M is : <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{w \\(\\in\\) {a, b} * | every a in w is followed by exactly two b's}</p>",
            "<b>B.</b> <p>{w \\(\\in\\) {a,b} * | every a in w is followed by at least two b's}</p>",
            "<b>C.</b> <p>{w \\(\\in\\) {a,b} * | w contains the substring 'abb'}</p>",
            "<b>D.</b> <p>{w \\(\\in\\) {a,b} * | w does not contain 'aa' as a substring</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{w \\(\\in\\) {a,b} * | every a in w is followed by at least two b's}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1376/gate2005-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 224,
          "question": "<p>Consider three decision problems P1, P2 and P3. It is known that P1 is decidable and P2 is undecidable. Which one of the following is true? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P3 is decidable if P1 is reducible to P3</p>",
            "<b>B.</b> <p>P3 is undecidable if P3 is reducible to P2</p>",
            "<b>C.</b> <p>P3 is undecidable if P2 is reducible to P3</p>",
            "<b>D.</b> <p>P3 is decidable if P3 is reducible to P2's complement</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P3 is undecidable if P2 is reducible to P3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1375/gate2005-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 225,
          "question": "<p>Let \\(M=(K, \\Sigma,\\sigma ,s, F)\\) be a finite state automaton, where<br>\\(K=\\{A, B\\}, \\Sigma=\\{a, b\\}, s=A, F=\\{B\\}\\)<br>\n\\(\\sigma(A, a)=A, \\sigma(A, b)=B, \\sigma(B, a)=B \\text { and } \\sigma(B, b)=A\\)<br>\nA grammar to generate the language accepted by M can be specified as <br>\n\\(G=(V, \\Sigma, R, S), \\text { where } V=K \\cup \\Sigma, \\text { and } S=A\\)<br>\nWhich one of the following set of rules will make L(G) = L(M) ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{A \\rightarrow a B, A \\rightarrow b A, B \\rightarrow b A, B \\rightarrow a A, B \\rightarrow \\epsilon)\\)</p>",
            "<b>B.</b> <p>\\(\\{A \\rightarrow a A, A \\rightarrow b B, B \\rightarrow a B, B \\rightarrow b A, B \\rightarrow \\epsilon)\\)</p>",
            "<b>C.</b> <p>\\(\\{A \\rightarrow b B, A \\rightarrow a B, B \\rightarrow a A, B \\rightarrow b A, B \\rightarrow \\epsilon)\\)</p>",
            "<b>D.</b> <p>\\(\\{A \\rightarrow a A, A \\rightarrow b A, B \\rightarrow a B, B \\rightarrow b A, A \\rightarrow \\epsilon)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\{A \\rightarrow a A, A \\rightarrow b B, B \\rightarrow a B, B \\rightarrow b A, B \\rightarrow \\epsilon)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3684/gate2004-it-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 226,
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
          "id": 227,
          "question": "<p>Which one of the following statements is FALSE? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There exist context-free languages such that all the context-free grammars generating them are ambiguous</p>",
            "<b>B.</b> <p>An unambiguous context-free grammar always has a unique parse tree for each string of the language generated by it</p>",
            "<b>C.</b> <p>Both deterministic and non-deterministic pushdown automata always accept the same set of languages</p>",
            "<b>D.</b> <p>A finite set of string from some alphabet is always a regular language</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both deterministic and non-deterministic pushdown automata always accept the same set of languages</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3650/gate2004-it-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 228,
          "question": "<p>Which one of the following regular expressions is NOT equivalent to the regular expression \\((a + b + c)^*?\\) <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((a^* + b^* + c^*)^*\\)</p>",
            "<b>B.</b> <p>\\((a^*b^*c^*)^*\\)</p>",
            "<b>C.</b> <p>\\(((ab)^* + c^*)^*\\)</p>",
            "<b>D.</b> <p>\\((a^*b^* + c^*)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(((ab)^* + c^*)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3648/gate2004-it-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 229,
          "question": "<p>L1 is a recursively enumerable language over \\(\\Sigma\\). An algorithm A effectively enumerates its words as w1, w2, w3, ... define another language L2 over \\(\\Sigma\\)U{#} as <br> {wi # wj : wi, wj \\(\\in\\) L1, i \\(\\lt\\) j}.<br>  Here # is a new symbol. Consider the following assertions.<pre><code> S1 :  L1 is recursive implies L2 is recursive\nS2 : L2 is recursive implies L1 is recursive </code></pre> Which of the following statements is true ? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are true</p>",
            "<b>B.</b> <p>S1 is true but S2 is not necessarily true</p>",
            "<b>C.</b> <p>S2 is true but S1 is not necessarily true</p>",
            "<b>D.</b> <p>Neither is necessarily true</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Both S1 and S2 are true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1083/gate2004-89#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 230,
          "question": "<p>Consider the following grammar G: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q88_01955160.jpg\"><br> Let Na(w) and Nb(w) denote the number of a's and b's in a string w respectively. <br>The language \\(L(G)\\subseteq \\{a,b\\}^{+}\\) generated by G is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{ w | Na(w) \\(\\gt\\) 3Nb(w)}</p>",
            "<b>B.</b> <p>{ w | Nb(w) \\(\\gt\\) 3Na(w)}</p>",
            "<b>C.</b> <p>{ w | Na(w) = 3k, k \\(\\in\\) {0, 1, 2, ...}}</p>",
            "<b>D.</b> <p>{ w | Nb(w) = 3k, k \\(\\in\\) {0, 1, 2, ...}}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{ w | Na(w) = 3k, k \\(\\in\\) {0, 1, 2, ...}}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1082/gate2004-88#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 231,
          "question": "<p>The language {\\(a^{m}b^{n}c^{m+n}|m,n\\geq 1\\)} is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>regular</p>",
            "<b>B.</b> <p>context-free but not regular</p>",
            "<b>C.</b> <p>context sensitive but not context free</p>",
            "<b>D.</b> <p>type-0 but not context sensitive</p>"
          ],
          "correct_answer": "<b>B.</b> <p>context-free but not regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1081/gate2004-87#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 232,
          "question": "<p>The following finite state machine accepts all those binary strings in which the number of 1's and 0's are respectively.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q86_69a22ade.jpg\"> <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>divisible by 3 and 2</p>",
            "<b>B.</b> <p>odd and even</p>",
            "<b>C.</b> <p>even and odd</p>",
            "<b>D.</b> <p>divisible by 2 and 3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>divisible by 3 and 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1080/gate2004-86#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 233,
          "question": "<p>Which of the following grammar rules violate the requirements of an operator grammar? P, Q, R are\nnonterminals, and r,s,t are terminals.  <br> \\((i)P\\rightarrow QR \\)  <br> \\( (ii)P\\rightarrow QsR \\)  <br> \\( (iii)P\\rightarrow \\varepsilon \\)  <br> \\( (iv)P\\rightarrow QtRr \\) <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) only</p>",
            "<b>B.</b> <p>(i) and (iii) only</p>",
            "<b>C.</b> <p>(ii) and (iii) only</p>",
            "<b>D.</b> <p>(iii) and (iv) only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(i) and (iii) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1005/gate2004-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 234,
          "question": "<p>Consider the grammar shown below. <br>\nS \\(\\rightarrow\\) C C <br>\nC \\(\\rightarrow\\) cC | d <br>\nThe grammar is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LL(1)</p>",
            "<b>B.</b> <p>LALR (1) but not SLR (1)</p>",
            "<b>C.</b> <p>SLR (1) but not LL (1)</p>",
            "<b>D.</b> <p>LR (1) but not LALR (1)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>LL(1)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/945/gate2003-57#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 235,
          "question": "<p>Consider the NFA M shown below.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Theory_of_Computation\\q55_99884634.jpg\"><br>   Let the language accepted by M be L. Let L1 be the language accepted by the NFA M1, obtained by changing the accepting state of M to a non-accepting state and by changing the non-accepting state of M to accepting states. Which of the following statements is true ? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1 = {0, 1}* - L</p>",
            "<b>B.</b> <p>L1 = {0, 1}*</p>",
            "<b>C.</b> <p>\\(L1\\subseteq L\\)</p>",
            "<b>D.</b> <p>L1 = L</p>"
          ],
          "correct_answer": "<b>B.</b> <p>L1 = {0, 1}*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/943/gate2003-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 236,
          "question": "<p>Define languages L0 and L1 as follows :<pre><code>  L0 = {&lt; M, w, 0 &gt; | M halts on w}\nL1 = {&lt; M, w, 1 &gt; | M does not halts on w}   </code></pre>  Here  \\(&lt; M, w, i &gt;\\)\nis a triplet, whose first component. M is an encoding of a Turing Machine, second component, w, is a  string, and third component, i, is a bit. Let \\(L=L0 \\cup L1\\). Which of the following is true ? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L is recursively enumerable, but L' is not</p>",
            "<b>B.</b> <p>L' is recursively enumerable, but L is not</p>",
            "<b>C.</b> <p>Both L and L' are recursive</p>",
            "<b>D.</b> <p>Neither L nor L' is recursively enumerable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Neither L nor L' is recursively enumerable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/355/gate2003-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 237,
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
          "id": 238,
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
          "id": 239,
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
          "id": 240,
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
          "id": 241,
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
          "id": 242,
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
          "id": 243,
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
          "id": 244,
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
          "id": 245,
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
          "id": 246,
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
          "id": 247,
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
          "id": 248,
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
          "id": 249,
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
          "id": 250,
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
          "id": 251,
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
        },
        {
          "id": 252,
          "question": "<p>Let L denote the languages generated by the grammar \\(S \\to 0S0 \\mid 00\\).\nWhich of the following is TRUE? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L = 0^+\\)</p>",
            "<b>B.</b> <p>L is regular but not \\(0^+\\)</p>",
            "<b>C.</b> <p>L is context free but not regular</p>",
            "<b>D.</b> <p>L is not context free</p>"
          ],
          "correct_answer": "<b>B.</b> <p>L is regular but not \\(0^+\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/628/gate2000-1-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 253,
          "question": "<p>Let S and T be languages over \\(\\Sigma=\\{a.b\\}\\) represented by the regular expressions \\((a+b^*)^* \\text{ and } (a+b)^*\\), respectively. Which of the following is true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S \\subset T\\)</p>",
            "<b>B.</b> <p>\\(T \\subset S\\)</p>",
            "<b>C.</b> <p>S = T</p>",
            "<b>D.</b> <p>\\(S \\cap T = \\phi\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S = T</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/627/gate2000-1-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 254,
          "question": "<p>If L1 is context free language and L2 is a regular language which of the following is/are false? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L1-L2 is not context free</p>",
            "<b>B.</b> <p>\\(L1 \\cap L2\\) is context free</p>",
            "<b>C.</b> <p>\\(\\sim L1\\) is context free</p>",
            "<b>D.</b> <p>\\(\\sim L2\\) is regular</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L1-L2 is not context free</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1482/gate1999-2-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 255,
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
          "id": 256,
          "question": "<p>Context-free languages are closed under: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Union, intersection</p>",
            "<b>B.</b> <p>Union, Kleene closure</p>",
            "<b>C.</b> <p>Intersection, complement</p>",
            "<b>D.</b> <p>Complement, Kleene closure</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Union, Kleene closure</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1459/gate1999-1-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 257,
          "question": "<p>Consider the regular expression (0 + 1) (0+1) ... n times. The minimum state finite automaton that recognizes the language represented by this regular expression contains <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n states</p>",
            "<b>B.</b> <p>n+1 states</p>",
            "<b>C.</b> <p>n+2 states</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n+1 states</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1458/gate1999-1-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 258,
          "question": "<p>Which of the following statements is false? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every finite subset of a non-regular set is regular</p>",
            "<b>B.</b> <p>Every subset of a regular set is regular</p>",
            "<b>C.</b> <p>Every finite subset of a regular set is regular</p>",
            "<b>D.</b> <p>The intersection of two regular sets is regular</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Every subset of a regular set is regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1678/gate1998-2-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 259,
          "question": "<p>Let L be the set of all binary strings whose last two symbols are the same. The number of states in the minimal state deterministic finite state automaton accepting L is <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1677/gate1998-2-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 260,
          "question": "<p>The string 1101 does not belong to the set represented by <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(110^*(0 + 1)\\)</p>",
            "<b>B.</b> <p>\\(1(0 + 1)^*101\\)</p>",
            "<b>C.</b> <p>\\((10)^*(01)^*(00 + 11)^*\\)</p>",
            "<b>D.</b> <p>\\((00 + (11)^*0)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\((10)^*(01)^*(00 + 11)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1649/gate1998-1-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 261,
          "question": "<p>Regarding the power of recognition of languages, which of the following statements is false? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The non-deterministic finite-state automata are equivalent to deterministic finite-state automata.</p>",
            "<b>B.</b> <p>Non-deterministic Push-down automata are equivalent to deterministic Push-down automata.</p>",
            "<b>C.</b> <p>Non-deterministic Turing machines are equivalent to deterministic Turing machines.</p>",
            "<b>D.</b> <p>Multi-tape Turing machines are available are equivalent to Single-tape Turing machines</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Non-deterministic Push-down automata are equivalent to deterministic Push-down automata.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1648/gate1998-1-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 262,
          "question": "<p>Which of the following set can be recognized by a Deterministic Finite state Automaton? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The numbers \\(1, 2, 4, 8, \\dots 2^n, \\dots\\) written in binary</p>",
            "<b>B.</b> <p>The numbers \\(1, 2, 4, 8,\\dots 2^n, \\dots\\)  written in unary</p>",
            "<b>C.</b> <p>The set of binary string in which the number of zeros is the same as the number of ones.</p>",
            "<b>D.</b> <p>The set \\(\\{1, 101, 11011, 1110111, \\dots\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The numbers \\(1, 2, 4, 8, \\dots 2^n, \\dots\\) written in binary</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1647/gate1998-1-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 263,
          "question": "<p>If the regular set \\(A\\) is represented by \\(A = (01 + 1)^*\\) and the regular set \\(B\\) is represented by \\(B = \\left(\\left(01\\right)^*1^*\\right)^*\\), which of the following is true? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(A \\subset B\\)</p>",
            "<b>B.</b> <p>\\(B \\subset A\\)</p>",
            "<b>C.</b> <p>\\(A\\) and \\(B\\) are incomparable</p>",
            "<b>D.</b> <p>\\(A=B\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(A=B\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1646/gate1998-1-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 264,
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
          "id": 265,
          "question": "<p>Which one of the following is not decidable? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Given a Turing machine M, a string s and an integer k, M accepts s within k steps</p>",
            "<b>B.</b> <p>Equivalence of two given Turing machines</p>",
            "<b>C.</b> <p>Language accepted by a given finite state machine is not empty</p>",
            "<b>D.</b> <p>Language generated by a context free grammar is non-empty</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Equivalence of two given Turing machines</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2261/gate1997-6-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 266,
          "question": "<p>Which one of the following regular expressions over {0,1} denotes the set of all strings not containing 100 as substring? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(0^*(1+0)^*\\)</p>",
            "<b>B.</b> <p>\\(0^*1010^*\\)</p>",
            "<b>C.</b> <p>\\(0^*1^*01^*\\)</p>",
            "<b>D.</b> <p>\\(0^*(10+1)^*\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(0^*(10+1)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2260/gate1997-6-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 267,
          "question": "<p>Consider the following state table shown in figure for a sequential machine. The number of states in the minimized machine will be<br><br> \\(\\begin{array}{|l|l|ll|}\\hline \\text{} &amp; \\text{} &amp; \\textbf{Input}\\\\\\hline &amp;&amp; \\text{0} &amp; \\text{1} \\\\\\hline  \\textbf{Present State} &amp; \\textbf{A} &amp; \\text{D,0} &amp; \\text{B,1} \\\\   \\text{} &amp; \\textbf{B} &amp; \\text{A,0} &amp; \\text{C,1}\\\\   &amp; \\textbf{C} &amp; \\text{A,0} &amp; \\text{B,1} \\\\  \\text{} &amp; \\textbf{D} &amp; \\text{A,1} &amp; \\text{C,1} \\\\\\hline \\text{} &amp; \\text{} &amp; \\textbf{Next state, Output}\\\\\\hline \\end{array}\\) <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2752/gate1996-2-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 268,
          "question": "<p>Define a context free languages \\(L \\in \\{0, 1\\}^*, \\text{init} (L) = \\{u \\mid uv \\in L\\) for some v in \\(\\{0, 1\\}^*\\}\\) ( in other words, \\(\\text{init}(L)\\) is the set of prefixes of L)<br>\nLet  \\(L = \\{w \\mid w \\text{ is nonempty and has an equal number of $0$'s and $1$'s}\\}\\)\nThen \\(\\text{init}(L)\\) is: <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the set of all binary strings with unequal number of 0's and 1's</p>",
            "<b>B.</b> <p>the set of all binary strings including null string</p>",
            "<b>C.</b> <p>the set of all binary strings with exactly one more 0 than the number of 1's or one more 1 than the number of 0's</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>the set of all binary strings including null string</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2738/gate1996-2-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 269,
          "question": "<p>If \\(L_1\\) and \\(L_2\\) are context free languages and R a regular set, one of the languages below is not necessarily a context free language. Which one? <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L_1.L_2\\)</p>",
            "<b>B.</b> <p>\\(L_1 \\cap L_2\\)</p>",
            "<b>C.</b> <p>\\(L_1 \\cap R\\)</p>",
            "<b>D.</b> <p>\\(L_1 \\cup L_2\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(L_1 \\cap L_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2737/gate1996-2-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 270,
          "question": "<p>Let \\(L \\subseteq \\Sigma^*\\) where \\(\\Sigma = \\left\\{a,b \\right\\}\\). Which of the following is true? <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L = \\left\\{x \\mid x \\text{ has an equal number of } a\\text{'s and }b\\text{'s}\\right \\}\\) is regular</p>",
            "<b>B.</b> <p>\\(L = \\left\\{a^nb^n \\mid n \\geq 1\\right \\}\\) is regular</p>",
            "<b>C.</b> <p>\\(L = \\left\\{x \\mid x \\text{ has more number of }a\\text{'s than }b\\text{'s}\\right \\}\\) is regular</p>",
            "<b>D.</b> <p>\\(L = \\left\\{a^mb^n \\mid m \\geq 1, n \\geq 1 \\right \\}\\) is regular</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(L = \\left\\{a^mb^n \\mid m \\geq 1, n \\geq 1 \\right \\}\\) is regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2714/gate1996-1-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 271,
          "question": "<p>Which of the following statements is false? <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The Halting Problem of Turing machines is undecidable</p>",
            "<b>B.</b> <p>Determining whether a context-free grammar is ambiguous is undecidable</p>",
            "<b>C.</b> <p>Given two arbitrary context-free grammars \\(G_1\\) and \\(G_2\\)it is undecidable whether \\(L(G_1) = L(G_2)\\)</p>",
            "<b>D.</b> <p>Given two regular grammars \\(G_1\\) and \\(G_2\\) it is undecidable whether \\(L(G_1) = L(G_2)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Given two regular grammars \\(G_1\\) and \\(G_2\\) it is undecidable whether \\(L(G_1) = L(G_2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2713/gate1996-1-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 272,
          "question": "<p>Which two of the following four regular expressions are equivalent? (\\(\\varepsilon\\) is the empty string).<br>\n(i).   \\((00)^ * (\\varepsilon +0)\\)<br>\n(ii).  \\((00)^*\\)<br>\n(iii). \\(0^*\\)<br>\n(iv).  \\(0(00)^*\\)<br> <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) and (ii)</p>",
            "<b>B.</b> <p>(ii) and (iii)</p>",
            "<b>C.</b> <p>(i) and (iii)</p>",
            "<b>D.</b> <p>(iii) and (iv)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(i) and (iii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2712/gate1996-1-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 273,
          "question": "<p>Let \\(\\Sigma=\\left\\{0,1\\right\\}, L = \\Sigma^* \\text{ and } R=\\left\\{0^n1^n \\mid n \\gt 0\\right\\}\\) then the languages \\(L \\cup R\\) and R are respectively <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>regular, regular</p>",
            "<b>B.</b> <p>not regular, regular</p>",
            "<b>C.</b> <p>regular, not regular</p>",
            "<b>D.</b> <p>not regular, not regular</p>"
          ],
          "correct_answer": "<b>C.</b> <p>regular, not regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2637/gate1995-2-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 274,
          "question": "<p>A finite state machine with the following state table has a single input x and a single out z.<br>\n\\(\\begin{array}{|c|ll|}\\hline \\textbf{present state} &amp;\\textbf{next state, z} \\\\ &amp; \\text{x=1} &amp; \\text{x=0} \\\\\\hline \\text{A} &amp; \\text{D,0} &amp; \\text{B,0} \\\\\\hline \\text{B} &amp; \\text{B,1} &amp; \\text{C,1} \\\\\\hline \\text{C} &amp; \\text{B,0} &amp; \\text{D,1} \\\\\\hline \\text{D} &amp; \\text{B,1} &amp; \\text{C,0} \\\\\\hline \\end{array}\\)<br>If the initial state is unknown, then the shortest input sequence to reach the final state C is: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>01</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>101</p>",
            "<b>D.</b> <p>110</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2636/gate1995-2-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 275,
          "question": "<p>Which of the following definitions below generate the same language as \\(L\\), where \\(L=\\{x^ny^n \\text{ such that } n\\geq 1 \\}\\)?<br>\nI.   \\(E \\rightarrow xEy\\mid xy\\)<br>\nII.  \\(x y \\mid (x^+xyy^+)\\)<br>\nIII. \\(x^+y^+\\)<br> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and II</p>",
            "<b>C.</b> <p>II and III</p>",
            "<b>D.</b> <p>II only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2632/gate1995-2-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 276,
          "question": "<p>Consider a grammar with the following productions<br>\n\\(S \\rightarrow a \\alpha b \\mid b \\alpha c \\mid aB\\)<br>\n\\(S \\rightarrow \\alpha S\\mid b\\)<br>\n\\(S \\rightarrow \\alpha b b\\mid ab\\)<br>\n\\(S \\alpha \\rightarrow bd b\\mid b\\)<br>\nThe above grammar is: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Context free</p>",
            "<b>B.</b> <p>Regular</p>",
            "<b>C.</b> <p>Context sensitive</p>",
            "<b>D.</b> <p>LR(k)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>LR(k)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2597/gate1995-1-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 277,
          "question": "<p>In some programming language, an identifier is permitted to be a letter followed by any number of letters or digits. If L and D denote the sets of letters and digits respectively, which of the following expressions defines an identifier? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((L + D)^+\\)</p>",
            "<b>B.</b> <p>\\((L.D)^*\\)</p>",
            "<b>C.</b> <p>\\(L(L + D)^*\\)</p>",
            "<b>D.</b> <p>\\(L(L.D)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(L(L + D)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2596/gate1995-1-9-isro2017-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 278,
          "question": "<p>Which of the following features cannot be captured by context-free grammars? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Syntax of if-then-else statements</p>",
            "<b>B.</b> <p>Syntax of recursive procedures</p>",
            "<b>C.</b> <p>Whether a variable has been declared before its use</p>",
            "<b>D.</b> <p>Variable names of arbitrary length</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Whether a variable has been declared before its use</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2461/gate1994-1-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 279,
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
        },
        {
          "id": 280,
          "question": "<p>Consider the following problem x . <br>\nGiven a Turing machine M over the input alphabet \\(\\Sigma\\), any state q of M.\nAnd a word w \\(\\in \\Sigma *\\)) does the computation of M on w visit the state q ?<br>\nWhich of the following statements about x is correct ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x is decidable</p>",
            "<b>B.</b> <p>x is undecidable but partially decidable</p>",
            "<b>C.</b> <p>x is undecidable and not even partially decidable</p>",
            "<b>D.</b> <p>x is not a decision problem</p>"
          ],
          "correct_answer": "<b>B.</b> <p>x is undecidable but partially decidable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/725/gate2001-2-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 281,
          "question": "<p>Consider the following languages :<br>\nL1 = {ww| w\\(\\in\\) {a,b}*}<br>\nL2 = {w\\(w^{R}| \\) w\\(\\in\\) {a,b} *, \\(w^{R}\\) is the reverse of w} <br>\nL3 = {\\(0^{2i}\\)|  i is an integer}<br>\nL4 ={\\(0^{{i}^{2}}\\) | i is an integer} <br>\nWhich of the languages are regular ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only L1 and L2</p>",
            "<b>B.</b> <p>Only L2, L3 and L4</p>",
            "<b>C.</b> <p>Only L3 and L4</p>",
            "<b>D.</b> <p>Only L3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Only L3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/724/gate2001-2-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 282,
          "question": "<p>Consider a DFA over \\(\\Sigma\\)= {a,b} accepting all strings which have number of a's divisible by 6 and number of b's divisible by 8. What is the minimum number of\nstates that the DFA will have ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>14</p>",
            "<b>C.</b> <p>15</p>",
            "<b>D.</b> <p>48</p>"
          ],
          "correct_answer": "<b>D.</b> <p>48</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/723/gate2001-2-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 283,
          "question": "<p>Given an arbitary non-deterministic finite automaton (NFA) with N states, the\nmaximum number of states in an equivalent minimized DFA is at least. <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(N^{2}\\)</p>",
            "<b>B.</b> <p>\\(2^{N}\\)</p>",
            "<b>C.</b> <p>2N</p>",
            "<b>D.</b> <p>N!</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(2^{N}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/699/gate2001-1-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 284,
          "question": "<p>Which of the following statements true ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>If a language is context free it can be always be accepted by a deterministic\npush-down automaton.</p>",
            "<b>B.</b> <p>The union of two context free language is context free.</p>",
            "<b>C.</b> <p>The intersection of two context free language is context free</p>",
            "<b>D.</b> <p>The complement of a context free language is context free</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The union of two context free language is context free.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/698/gate2001-1-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 285,
          "question": "<p>Consider the following two statements : <br>\nS1: {\\(0^{2n}|n\\geq 1|\\)} is a regular language <br>\nS2 : {\\(0^{m}1^{n}0^{m+n}|m\\geq 1 and n\\geq 1|\\)} is a regular language <br>\nWhich of the following statements is correct? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is correct</p>",
            "<b>B.</b> <p>Only S2 is correct</p>",
            "<b>C.</b> <p>Both S1 and S2 are correct</p>",
            "<b>D.</b> <p>None of S1 and S2 is correct</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Only S1 is correct</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/697/gate2001-1-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 286,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only: <br>\nIn which of the cases stated below is the following statement true?<br>\n\"For every non-deterministic machine \\(M_{1}\\) there exists an equivalent deterministic machine \\(M_{2}\\)recognizing the same language\". <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(M_{1}\\) is non-deterministic finite automaton.</p>",
            "<b>B.</b> <p>\\(M_{1}\\) is non-deterministic PDA.</p>",
            "<b>C.</b> <p>\\(M_{1}\\) is a non-deterministic Turing machine.</p>",
            "<b>D.</b> <p>For no machines \\(M_{1}\\) and \\(M_{2}\\),  the above statement true.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(M_{1}\\) is non-deterministic finite automaton.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/577/gate1992-02-xx\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 287,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only: <br>\nIf G is a context free grammar and w is a string of length l in L(G), how long is a derivation of w in G, if G is in Chomsky normal form? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2l</p>",
            "<b>B.</b> <p>2l+1</p>",
            "<b>C.</b> <p>2l-1</p>",
            "<b>D.</b> <p>l</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2l-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/576/gate1992-02-xviii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 288,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Which of the following regular expression identities is/are TRUE? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(r^{(^*)} =r^*\\)</p>",
            "<b>B.</b> <p>\\((r^*s^*)=(r+s)^*\\)</p>",
            "<b>C.</b> <p>\\((r+s)^* = r^* + s^*\\)</p>",
            "<b>D.</b> <p>\\(r^*s^* = r^*+s^*\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(r^{(^*)} =r^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/575/gate1992-02-xvii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 289,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>\nContext-free languages are: <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>closed under union</p>",
            "<b>B.</b> <p>closed under complementation</p>",
            "<b>C.</b> <p>closed under intersection</p>",
            "<b>D.</b> <p>closed under Kleene closure</p>"
          ],
          "correct_answer": "<b>A.</b> <p>closed under union</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/572/gate1992-02-xix\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 290,
          "question": "<p>Choose the correct alternatives (more than one may be correct ) and write the corresponding letters only:<br>\nConsider the SLR(1) and LALR (1)  parsing tables for a context free grammar. Which of the following statement is/are true? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The goto part of both tables may be different.</p>",
            "<b>B.</b> <p>The shift entries are identical in both the tables.</p>",
            "<b>C.</b> <p>The reduce entries in the tables may be different.</p>",
            "<b>D.</b> <p>The error entries in tables may be different</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The shift entries are identical in both the tables.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/571/gate1992-02-xiv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 291,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>For a context free grammar, FOLLOW(A) is the set of terminals that can appear immediately to the right of non-terminal A in some \"sentential\" form. We define two sets LFOLLOW(A) and RFOLLOW(A) by replacing the word \"sentential\" by \"left sentential\" and \"right most sentential\" respectively in the definition of FOLLOW (A). <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>FOLLOW(A) and LFOLLOW(A) may be different.</p>",
            "<b>B.</b> <p>FOLLOW(A) and RFOLLOW(A) are always the same.</p>",
            "<b>C.</b> <p>All the three sets are identical.</p>",
            "<b>D.</b> <p>All the three sets are different.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>FOLLOW(A) and LFOLLOW(A) may be different.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/570/gate1992-02-xiii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 292,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only.<br>Let \\(r=1(1+0)^*, s=11^*0 \\text{ and } t=1^*0\\) be three regular expressions. Which one of the following is true? <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L(s) \\subseteq L(r) \\text{ and } L(s) \\subseteq L(t)\\)</p>",
            "<b>B.</b> <p>\\(L(r) \\subseteq L(s) \\text{ and }  L(s) \\subseteq L(t)\\)</p>",
            "<b>C.</b> <p>\\(L(s) \\subseteq L(t) \\text{ and }  L(s) \\subseteq L(r)\\)</p>",
            "<b>D.</b> <p>\\(L(t) \\subseteq L(s)\\text{ and }  L(s) \\subseteq L(r)\\)</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(L(s) \\subseteq L(r) \\text{ and } L(s) \\subseteq L(t)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/527/gate1991-03-xiii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 293,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Which of the following is the strongest correct statement about a finite language over some finite alphabet \\(\\Sigma\\)? <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It could be undecidable</p>",
            "<b>B.</b> <p>It is Turing-machine recognizable</p>",
            "<b>C.</b> <p>It is a context sensitive language.</p>",
            "<b>D.</b> <p>It is a regular language.</p>",
            "<b>E.</b> <p>None of the above,</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It is Turing-machine recognizable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/528/gate1991-03-xiv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 294,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>Let \\(R_{1}\\) and \\(R_{2}\\) be regular sets defined over the alphabet \\(\\Sigma\\) Then: <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(R_{1} \\cap R_{2}\\) is not regular.</p>",
            "<b>B.</b> <p>\\(R_{1} \\cup R_{2}\\) is regular.</p>",
            "<b>C.</b> <p>\\(\\Sigma^{*}-R_{1}\\) is regular.</p>",
            "<b>D.</b> <p>\\(R_{1}^{*}\\) is not regular.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(R_{1} \\cup R_{2}\\) is regular.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84837/gate1990-3-viii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 295,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>It is undecidable whether: <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An arbitrary Turing machine halts after 100 steps.</p>",
            "<b>B.</b> <p>A Turing machine prints a specific letter.</p>",
            "<b>C.</b> <p>A Turing machine computes the products of two numbers</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A Turing machine prints a specific letter.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84835/gate1990-3-vii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 296,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>Recursive languages are: <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A proper superset of context free languages.</p>",
            "<b>B.</b> <p>Always recognizable by pushdown automata.</p>",
            "<b>C.</b> <p>Also called type 0 languages.</p>",
            "<b>D.</b> <p>Recognizable by Turing machines.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A proper superset of context free languages.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84833/gate1990-3-vi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 297,
          "question": "<p>Answer the following questions:<br>Which of the following problems are undecidable? <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Membership problem in context-free languages.</p>",
            "<b>B.</b> <p>Whether a given context-free language is regular.</p>",
            "<b>C.</b> <p>Whether a finite state automation halts on all inputs.</p>",
            "<b>D.</b> <p>Membership problem for type 0 languages.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Whether a given context-free language is regular.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87123/gate1989-3-iii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 298,
          "question": "<p>Context-free languages and regular languages are both closed under the operation (s) of : <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Union</p>",
            "<b>B.</b> <p>Intersection</p>",
            "<b>C.</b> <p>Concatenation</p>",
            "<b>D.</b> <p>Complementation</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Union</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87117/gate1989-3-ii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 299,
          "question": "<p>Which of the following problems are un-decidable?<br>[MSQ] <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Membership problem in context-free languages.</p>",
            "<b>B.</b> <p>Whether a given context-free language is regular.</p>",
            "<b>C.</b> <p>Whether a finite state automation halts on all inputs.</p>",
            "<b>D.</b> <p>Membership problem for type 0 languages.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Whether a given context-free language is regular.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87123/gate1989-3-iii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 300,
          "question": "<p>A context-free grammar is ambiguous if: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The grammar contains useless non-terminals.</p>",
            "<b>B.</b> <p>It produces more than one parse tree for some sentence.</p>",
            "<b>C.</b> <p>Some production has two non terminals side by side on the right-hand side.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It produces more than one parse tree for some sentence.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80291/gate1987-1-xii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
