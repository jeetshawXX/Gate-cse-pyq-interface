window.__examLoadCallback({
  "title": "Compiler_Design - Compiler_Design - Slot 10",
  "duration": 42,
  "sections": [
    {
      "name": "Compiler_Design",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following C code segment.<pre><code>\nfor (i = 0, &lt; i  n; i++) \n{ \n    for (j=0; j&lt; n; j++) \n    { \n        if (i%2) \n        { \n            x += (4*j + 5*i); \n            y += (7 + 4*j); \n        } \n    } \n} \n</code></pre>\nWhich one to the following false? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The code contains loop-in variant computation</p>",
            "<b>B.</b> <p>There is scope of common sub-expression elimination in this code</p>",
            "<b>C.</b> <p>There is scope strength reduction in this code</p>",
            "<b>D.</b> <p>There is scope of dead code elimination in this code</p>"
          ],
          "correct_answer": "<b>D.</b> <p>There is scope of dead code elimination in this code</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1838/gate2006-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following translation scheme. <br>\nS \\(\\rightarrow\\) ER <br>\nR  \\(\\rightarrow\\)* E{print('*');}R|\\(\\varepsilon\\) <br>\nE\\(\\rightarrow\\)F+E{print('+');}|F <br>\nF\\(\\rightarrow\\)(S)|id{print(id.value);} <br>\nHere id is a taken that represents an integer and id.value represents the\ncorresponding integer value. For an input '2*3+4', this translation scheme prints <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2*3+4</p>",
            "<b>B.</b> <p>2*+34</p>",
            "<b>C.</b> <p>23*4+</p>",
            "<b>D.</b> <p>234+*</p>"
          ],
          "correct_answer": "<b>D.</b> <p>234+*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1837/gate2006-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following grammar <br>\nS \\(\\rightarrow\\) FR <br>\nR \\(\\rightarrow\\)* S | \\(\\varepsilon\\) <br>\nF \\(\\rightarrow\\) id <br>\nIn the predictive parser table, M, of the grammar the entries M[S, id] and M[R,$]\nrespectively <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{S \\(\\rightarrow\\) FR} and {R \\(\\rightarrow \\varepsilon\\) }</p>",
            "<b>B.</b> <p>{S \\(\\rightarrow\\) FR} and {}</p>",
            "<b>C.</b> <p>{S \\(\\rightarrow\\) FR} and {R \\(\\rightarrow\\) * S}</p>",
            "<b>D.</b> <p>{F \\(\\rightarrow\\) id} and {R \\(\\rightarrow \\varepsilon\\) }</p>"
          ],
          "correct_answer": "<b>A.</b> <p>{S \\(\\rightarrow\\) FR} and {R \\(\\rightarrow \\varepsilon\\) }</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1836/gate2006-58#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following grammar. <br>\nS \\(\\rightarrow\\) S * E <br>\nS \\(\\rightarrow\\) E <br>\nE \\(\\rightarrow\\) F + E <br>\nE \\(\\rightarrow\\) F   <br>                                                                                                F F \\(\\rightarrow\\) id <br>\nConsider the following LR(0) items corresponding to the grammar above. <br>\n(i) S \\(\\rightarrow\\) S * .E<br>\n(ii) E \\(\\rightarrow\\) F. + E<br>\n(iii) E \\(\\rightarrow\\) F + .E<br>\nGiven the items above, which two of them will appear in the same set in the\ncanonical sets-of-items for the grammar? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) and (ii)</p>",
            "<b>B.</b> <p>(ii) and (iii)</p>",
            "<b>C.</b> <p>(i) and (iii)</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/886/gate2006-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the context-free grammar <br>\n\\(E\\rightarrow E+E\\)<br>\n\\(E\\rightarrow (E *E)\\)<br>\n\\(E\\rightarrow \\text{id}\\)<br>\nwhere E is the starting symbol, the set of terminals is {id, (,+,),*}, and the set of non-terminals is {E}.<br>For the terminal string id + id + id + id, how many parse trees are possible? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3850/gate2005-it-83b\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the context-free grammar <br>\n\\(E\\rightarrow E+E\\)<br>\n\\(E\\rightarrow (E *E)\\)<br>\n\\(E\\rightarrow \\text{id}\\)<br>\nwhere E is the starting symbol, the set of terminals is \\(\\{id, (,+,),*\\}\\), and the set of nonterminals is {E}.\nWhich of the following terminal strings has more than one parse tree when parsed according to the above grammar? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>id+id+id+id</p>",
            "<b>B.</b> <p>id+(id*(id*id))</p>",
            "<b>C.</b> <p>(id*(id*id))+id</p>",
            "<b>D.</b> <p>((id*id+id)*id)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>id+id+id+id</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3849/gate2005-it-83a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q84_bef15a5a.jpg\"> <br>  Assume the conflicts of this question are resolved usinf yacc tool and an LALR(1) parser is generated for parsing arithmetic expressions as per the given grammar. Consider an expression 3 x 2 + 1. What precedence and associativity properties does the generated parser realize? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Equal precedence and left associativity; ex?pression is evaluated to 7</p>",
            "<b>B.</b> <p>Equal precedence and right associativity; ex?pression is evaluated to 9</p>",
            "<b>C.</b> <p>Precedence of 'x' is higher than that of '+', and both operators are left associative; expression is evaluated to 7</p>",
            "<b>D.</b> <p>Precedence of '+' is higher than that of 'x', and both operators are left associative; expression is evaluated to 9</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Equal precedence and right associativity; ex?pression is evaluated to 9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87037/gate2005-86#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q84_bef15a5a.jpg\"> <br> The above grammar and the semantic rules are fed to a yacc tool (which is an LALR (1) parser generator) for parsing and evaluating arithmetic expressions. Which one of the following is true about the action of yacc for the given grammar? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It detects recursion and eliminates recursion</p>",
            "<b>B.</b> <p>It detects reduce-reduce conflict, and resolves</p>",
            "<b>C.</b> <p>It detects shift-reduce conflict, and resolves the conflict in favor of a shift over a reduce action</p>",
            "<b>D.</b> <p>It detects shift-reduce conflict, and resolves the conflict in favor of a reduce over a shift action</p>"
          ],
          "correct_answer": "<b>C.</b> <p>It detects shift-reduce conflict, and resolves the conflict in favor of a shift over a reduce action</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1405/gate2005-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the grammar:<br><br>\nS \\(\\rightarrow\\) (S) | a <br><br>\nLet the number of states in SLR (1), LR(1) and LALR(1) parsers for the grammar be n1, n2 and n3\nrespectively. The following relationship holds good: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n1 \\(\\lt\\) n2 \\(\\lt\\) n3</p>",
            "<b>B.</b> <p>n1 = n3 \\(\\lt\\) n2</p>",
            "<b>C.</b> <p>n1 = n2 = n3</p>",
            "<b>D.</b> <p>n1 \\(\\geq\\) n3 \\(\\geq\\) n2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n1 = n3 \\(\\lt\\) n2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1383/gate2005-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the grammar:<br><br>\nE \\(\\rightarrow\\) E + n | E * n | n <br><br>\nFor a sentence n + n *  n, the handles in the right-sentential form of the reduction are: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n, E + n and E + n * n</p>",
            "<b>B.</b> <p>n, E + n and E + E * n</p>",
            "<b>C.</b> <p>n, n + n and n + n * n</p>",
            "<b>D.</b> <p>n, E + n and E * n</p>"
          ],
          "correct_answer": "<b>D.</b> <p>n, E + n and E * n</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1382/gate2005-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The grammar \\(A\\rightarrow AA|(A)|\\varepsilon\\) is not suitable for predictive-parsing because the grammar is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ambiguous</p>",
            "<b>B.</b> <p>left-recursive</p>",
            "<b>C.</b> <p>right-recursive</p>",
            "<b>D.</b> <p>operator-grammar</p>"
          ],
          "correct_answer": "<b>A.</b> <p>ambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1350/gate2005-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the grammar with the following translation rules and E as the start symbol.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q45_57f67ac9.jpg\"><br>\nCompute E.value for the root of the parse tree for the expression:2 # 3 &amp; 5 # 6 &amp; 4. <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>200</p>",
            "<b>B.</b> <p>180</p>",
            "<b>C.</b> <p>160</p>",
            "<b>D.</b> <p>40</p>"
          ],
          "correct_answer": "<b>C.</b> <p>160</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1042/gate2004-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the grammar rule  \\(E \\rightarrow E1 - E2 \\) for arithmetic expressions. The code generated is targeted to a CPU having a single user register. The subtraction operation requires the first operand to be in the register. If E1 and E2 do not have nay-common sub-expression, in order to get the shortest possible code <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>E1 should be evaluated first</p>",
            "<b>B.</b> <p>E2 should be evaluated first</p>",
            "<b>C.</b> <p>Evaluation of E1 and E2 should necessarily be interleaved</p>",
            "<b>D.</b> <p>Order to evaluation of E1 and E2 is of no consequence</p>"
          ],
          "correct_answer": "<b>B.</b> <p>E2 should be evaluated first</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/4069/gate2004-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a program P that consists of two source modules M1 and M2 contained in two different files. If M1 contains a reference to a function defined in M2 the reference will be resolved at <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Edit time</p>",
            "<b>B.</b> <p>Compile time</p>",
            "<b>C.</b> <p>Link time</p>",
            "<b>D.</b> <p>Load time</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Link time</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1006/gate2004-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following is NOT an advantage of using shared, dynamically linked\nlibraries as opposed to using statically linked libraries? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Smaller sizes of executable</p>",
            "<b>B.</b> <p>Lesser overall page fault rate in the system</p>",
            "<b>C.</b> <p>Faster program startup</p>",
            "<b>D.</b> <p>Existing programs need not be re-linked to take advantage of newer\nversions of libraries</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Lesser overall page fault rate in the system</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/962/gate2003-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
