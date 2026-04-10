window.__examLoadCallback({
  "title": "Compiler_Design - Compiler_Design - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Compiler_Design",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following statements.<br><br>\nI. Symbol table is accessed only during lexical analysis and syntax analysis.<br>\nII. Compilers for programming languages that support recursion necessarily need heap storage for memory allocation in the run-time environment.<br>\nIII. Errors violating the condition 'any variable must be declared before its use' are detected during syntax analysis.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>None of I, II and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of I, II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333222/gate2020-cs-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the augmented grammar given below: <br>\\(S'\\rightarrow S\\) <br>\\(S \\rightarrow \\lt L \\gt |id\\) <br>\\(L \\rightarrow L,S|S\\) <br><br>Let \\(I_0=CLOSURE(\\{[S'\\rightarrow \\cdot S]\\}) \\). The number of items in the set \\(GOTO(I_0,\\lt)\\) is __________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302805/gate2019-cs-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following grammar and the semantic actions to support the inherited type declaration attributes. Let \\(X_1,X_2,X_3,X_4,X_5 \\; and \\; X_6\\) be the placeholders for the non-terminals D, T, L or \\(L_1\\) in the following table: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q36_b81fa569.jpg\"><br> Which one of the following are the appropriate choices for \\(X_1,X_2,X_3 \\; and \\; X_4\\)? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(X_1=L,X_2=T,X_3=L_1,X_4=L\\)</p>",
            "<b>B.</b> <p>\\(X_1=T,X_2=L,X_3=L_1,X_4=T\\)</p>",
            "<b>C.</b> <p>\\(X_1=L,X_2=L,X_3=L_1,X_4=T\\)</p>",
            "<b>D.</b> <p>\\(X_1=T,X_2=L,X_3=T,X_4=L_1\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(X_1=L,X_2=T,X_3=L_1,X_4=L\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302812/gate2019-cs-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following given grammar:<pre><code> \nS -&gt; Aa\nA -&gt; BD\nB -&gt; b| ε\nD -&gt; d| ε </code></pre> Let a, b, d and $ be indexed as follows:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q19_b9df82b8.jpg\"><br>Compute the FOLLOW set of the non-terminal B and write the index values for the symbols in the FOLLOW set in the descending order. (For example, if the FOLLOW set is {a, b, d, $}, then the answer should be 3210). <br> Answer:_____ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302829/gate2019-cs-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which one of the following kinds of derivation is used by LR parsers? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Leftmost</p>",
            "<b>B.</b> <p>Leftmost in reverse</p>",
            "<b>C.</b> <p>Rightmost</p>",
            "<b>D.</b> <p>Rightmost in reverse</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Rightmost in reverse</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302845/gate2019-cs-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>C onsider the following parse tree for the expression a#b$c$d#e#f, involving two binary operators $ and #. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q38_52f1a2a9.jpg\"> <br>  Which one of the following is correct for the given parse tree? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\$\\) has higher precedence and is left associative; # is right associative</p>",
            "<b>B.</b> <p># has higher precedence and is left associative; \\(\\$\\) is right associative</p>",
            "<b>C.</b> <p>\\(\\$\\) has higher precedence and is left associative; # is left associative</p>",
            "<b>D.</b> <p># has higher precedence and is right associative; \\(\\$\\) is left associative</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\$\\) has higher precedence and is left associative; # is right associative</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204112/gate2018-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A lexical analyzer uses the following patterns to recognize three tokens  \\(T_{1}, T_{2}, \\; and \\; T_{3} \\) over the alphabet {a,b,c}. <br><br>  \\(T_{1}:a?(b|c)^* a \\) <br> \\(T_{2}:b?(a|c)^* b \\) <br> \\( T_{3}:c?(b|a)^* c\\) <br> <br>Note that 'x?' means 0 or 1 occurrence of the symbol x. Note also that the analyzer outputs the token that matches the longest possible prefix.<br><br>\nIf the string <i>bbaacabc</i> is processed by the analyzer, which one of the following is the\nsequence of tokens it outputs? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T_{1}T_{2}T_{3}\\)</p>",
            "<b>B.</b> <p>\\(T_{1}T_{1}T_{3}\\)</p>",
            "<b>C.</b> <p>\\(T_{2}T_{1}T_{3}\\)</p>",
            "<b>D.</b> <p>\\(T_{3}T_{3}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(T_{3}T_{3}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204111/gate2018-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Context-free grammar can be used to specify both lexical and syntax rules.</p>",
            "<b>B.</b> <p>Type checking is done before parsing.</p>",
            "<b>C.</b> <p>High-level language programs can be translated to different Intermediate Representations.</p>",
            "<b>D.</b> <p>Arguments to a function can be passed using the program stack.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Type checking is done before parsing.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204082/gate2018-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Match the following according to input (from the left column) to the complier phase (in the\nright column) that processes it. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q17_4dc50d68.jpg\"> <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-(ii),Q-(iii), R-(iv), S-(i)</p>",
            "<b>B.</b> <p>P-(ii),Q-(i), R-(iii), S-(iv)</p>",
            "<b>C.</b> <p>P-(iii),Q-(iv), R-(i), S-(ii)</p>",
            "<b>D.</b> <p>P-(i),Q-(iv), R-(ii), S-(iii)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P-(iii),Q-(iv), R-(i), S-(ii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118592/gate2017-2-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the expression ( a-1)* (((b + c) / 3) + d)) . Let X be the minimum number of\nregisters required by an optimal code generation (without any register spill) algorithm for a\nload/store architecture in which (i) only loads and store instructions can have memory\noperands and (ii) arithmetic instructions can have only register or immediate operands. The\nvalue of X is _________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118746/gate2017-1-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following grammar:<br><br>\nstmt\\(\\rightarrow\\) if expr then expr else expr; stmt| \\(\\dot{O}\\)<br>\nexpr\\(\\rightarrow\\)term relop term|term<br>\nterm\\(\\rightarrow\\) id|number <br>\nif\\(\\rightarrow\\)a|b|c <br>\nnumber\\(\\rightarrow\\) [0-9] <br><br>\nwhere <b>relop</b> is a relational operate (e.g \\(\\lt ,\\gt\\),...), \\(\\dot{O}\\) refers to the empty statement, and if\n,then, else are terminals. <br><br>\nConsider a program P following the above grammar containing ten if terminals. The number\nof control flows paths in P is ____________. For example the program <br><br>\nif \\(e_1\\) then \\(e_2\\) else \\(e_3\\)<br><br>\nhas 2 controls flow paths  \\(e_{1} \\rightarrow e_{2}\\) and  \\(e_{1} \\rightarrow e_{3}\\). <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1024",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118326/gate2017-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following intermediate program in three address code<br>\np= a -b <br>\nq= p *c <br>\np= u * v <br>\nq= p + q <br>\nWhich one of the following corresponds to a static single assignment form of the above code? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(p_{1}=a-b\\)<br>\\( q_{1}=p_{1}*c \\)<br>\\(p_{1}=u*v \\)<br>\\(q_{1}=p_{1}+q_{1}\\)</p>",
            "<b>B.</b> <p>\\(p_{3}=a-b \\)<br>\\(q_{4}=p_{3}*c \\)<br>\\(p_{4}=u*v \\)<br>\\(q_{3}=p_{4}+q_{4}\\)</p>",
            "<b>C.</b> <p>\\(p_{1}=a-b \\)<br>\\(q_{1}=p_{2}*c \\)<br>\\(p_{3}=u*v \\)<br>\\(q_{2}=p_{4}+q_{3}\\)</p>",
            "<b>D.</b> <p>\\(p_{1}=a-b \\)<br>\\(q_{1}=p_{1}*c \\)<br>\\(p_{2}=u*v \\)<br>\\(q_{2}=p+q\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(p_{3}=a-b \\)<br>\\(q_{4}=p_{3}*c \\)<br>\\(p_{4}=u*v \\)<br>\\(q_{3}=p_{4}+q_{4}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118292/gate2017-1-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>A student wrote two context-free grammars G1 and G2 for generating a single C-like array declaration. The dimension of the array is at least one. For example, <br>\nint a[10][3]; <br>\nThe grammars use D as the start symbol,and use six terminal symbols <b>int ;id[]num.</b> <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q46_7b18643f.jpg\"> <br>\nWhich of the grammars correctly generate the declaration mentioned above? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both G1 and G2</p>",
            "<b>B.</b> <p>Only G1</p>",
            "<b>C.</b> <p>Only G2</p>",
            "<b>D.</b> <p>Neither G1 nor G2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Both G1 and G2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39598/gate2016-2-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Match thefollowing:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q19_26e5b72c.jpg\"> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P\\(\\leftrightarrow\\)i, Q \\(\\leftrightarrow\\) ii, R\\(\\leftrightarrow\\) iv,S\\(\\leftrightarrow\\) iii</p>",
            "<b>B.</b> <p>P\\(\\leftrightarrow\\) iii, Q\\(\\leftrightarrow\\)i, R\\(\\leftrightarrow\\) ii, S\\(\\leftrightarrow\\) iv</p>",
            "<b>C.</b> <p>P\\(\\leftrightarrow\\) ii, Q\\(\\leftrightarrow\\) iii, R\\(\\leftrightarrow\\) i, S\\(\\leftrightarrow\\) iv</p>",
            "<b>D.</b> <p>P\\(\\leftrightarrow\\) iv,Q\\(\\leftrightarrow\\) i, R\\(\\leftrightarrow\\) ii, S\\(\\leftrightarrow\\) iii</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P\\(\\leftrightarrow\\) iii, Q\\(\\leftrightarrow\\)i, R\\(\\leftrightarrow\\) ii, S\\(\\leftrightarrow\\) iv</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39548/gate2016-2-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following Syntax Directed Translation Scheme(SDTS),with non-terminals {S, A} and terminals {a, b}. <br>\nS \\(\\rightarrow\\) aA {print 1} <br>\nS \\(\\rightarrow\\) a { print 2} <br>\nA \\(\\rightarrow\\) Sb { print 3} <br>\nUsing the above SDTS, the output printed by a bottom-up parser, for the input aab is: <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>132</p>",
            "<b>B.</b> <p>223</p>",
            "<b>C.</b> <p>231</p>",
            "<b>D.</b> <p>syntax error</p>"
          ],
          "correct_answer": "<b>C.</b> <p>231</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39700/gate2016-1-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
