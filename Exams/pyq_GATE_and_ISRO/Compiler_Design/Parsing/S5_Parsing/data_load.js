window.__examLoadCallback({
  "title": "Parsing - Parsing - Slot 5",
  "duration": 42,
  "sections": [
    {
      "name": "Parsing",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q84_bef15a5a.jpg\"> <br>  Assume the conflicts of this question are resolved usinf yacc tool and an LALR(1) parser is generated for parsing arithmetic expressions as per the given grammar. Consider an expression 3 x 2 + 1. What precedence and associativity properties does the generated parser realize? <br><br><strong>(GATE CSE 2005)</strong></p>",
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
          "id": 4,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q84_bef15a5a.jpg\"> <br> The above grammar and the semantic rules are fed to a yacc tool (which is an LALR (1) parser generator) for parsing and evaluating arithmetic expressions. Which one of the following is true about the action of yacc for the given grammar? <br><br><strong>(GATE CSE 2005)</strong></p>",
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider the grammar with the following translation rules and E as the start symbol.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q45_57f67ac9.jpg\"><br>\nCompute E.value for the root of the parse tree for the expression:2 # 3 &amp; 5 # 6 &amp; 4. <br><br><strong>(GATE CSE 2004)</strong></p>",
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
          "id": 9,
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
          "id": 10,
          "question": "<p>Consider the syntax directed definition shown below <br><br>\\(\\begin{array}{ll}\nS \\rightarrow \\mathbf{ id :=} E&amp;\\qquad \\{gen(\\mathbf{ id}.place = E.place;);\\}\\\\\nE \\rightarrow E_1 + E_2 &amp;\\qquad \\{t = newtemp();\\\\\n&amp;\\qquad gen(t = E_1.place + E_2.place;);\\\\\n&amp;\\qquad E.place = t;\\}\\\\\nE \\rightarrow id&amp;\\qquad \\{E.place = \\mathbf{id}.place;\\}\n\\end{array}\n\\)<br><br>\nHere, gen is a function that generates the output code, and newtemp is a function\nthat returns the name of a new temporary variable on every call. Assume that ti's are the temporary variable names generated by newtemp.\nFor the statement 'X:= Y + Z', the 3-address code sequence generated by this\ndefinition is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X = Y + Z</p>",
            "<b>B.</b> <p>t1 = Y + Z;  X=t1</p>",
            "<b>C.</b> <p>t1 = Y; t2 = t1+ Z;  X = t2</p>",
            "<b>D.</b> <p>t1 = Y; t2 = Z; t3=t1+t2; X = t3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>t1 = Y + Z;  X=t1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/947/gate2003-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the translation scheme shown below <br>\nS \\(\\rightarrow\\) TR <br>\nR \\(\\rightarrow\\)+ T {print ('+');}R | \\(\\epsilon \\) <br>\nT \\(\\rightarrow\\) num {print (num.val);}<br>\nHere num is a token that represents an integer and num. val represents the corresponding integer value. For an input string '9 + 5+ 2', this translation scheme will print <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9+5+2</p>",
            "<b>B.</b> <p>95+2+</p>",
            "<b>C.</b> <p>952++</p>",
            "<b>D.</b> <p>++ 9 5 2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>95+2+</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/946/gate2003-58#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the grammar shown below  <br>\\(S\\rightarrow iEtSS'|a \\) <br>\\(S'\\rightarrow eS|\\epsilon \\) <br>\\( E\\rightarrow b\\) <br> In the predictive parse table. M, of this grammar, the entries M[S',e] and M[S',$] respectively are <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{\\(S'\\rightarrow eS\\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>",
            "<b>B.</b> <p>{\\(S'\\rightarrow eS\\)} and {}</p>",
            "<b>C.</b> <p>{\\(S' \\rightarrow   \\varepsilon \\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>",
            "<b>D.</b> <p>{\\(S'\\rightarrow eS,S'\\rightarrow \\varepsilon \\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{\\(S'\\rightarrow eS,S'\\rightarrow \\varepsilon \\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/944/gate2003-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Assume that the SLR parser for a grammar G has n1 states and the LALR parser\nfor G has n2 states. The relationship between n1 and n2 is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n1 is necessarily less than n2</p>",
            "<b>B.</b> <p>n1 is necessarily equal to n2</p>",
            "<b>C.</b> <p>n1 is necessarily greater than n2</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n1 is necessarily equal to n2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/907/gate2003-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Given the following expression grammar:<br><br>\n\\(\\begin{array}{l} E \\to E * F \\mid F + E \\mid F \\\\ F \\to F - F \\mid id \\end{array}\\)<br><br>Which of the following is true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>* has higher precedence than +</p>",
            "<b>B.</b> <p>- has higher precedence than *</p>",
            "<b>C.</b> <p>\\(+\\) and - have same precedence</p>",
            "<b>D.</b> <p>+ has higher precedence than *</p>"
          ],
          "correct_answer": "<b>B.</b> <p>- has higher precedence than *</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/668/gate2000-2-21-isro2015-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following derivations does a top-down parser use while parsing an input string? The input is scanned from left to right. <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Leftmost derivation</p>",
            "<b>B.</b> <p>Leftmost derivation traced out in reverse</p>",
            "<b>C.</b> <p>Rightmost derivation</p>",
            "<b>D.</b> <p>Rightmost derivation traced out in reverse</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Leftmost derivation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/642/gate2000-1-19-ugcnet-dec2013-ii-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
