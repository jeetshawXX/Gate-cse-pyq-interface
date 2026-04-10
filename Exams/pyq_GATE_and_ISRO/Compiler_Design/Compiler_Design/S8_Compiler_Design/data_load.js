window.__examLoadCallback({
  "title": "Compiler_Design - Compiler_Design - Slot 8",
  "duration": 42,
  "sections": [
    {
      "name": "Compiler_Design",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider evaluating the following expression tree on a machine with load-store\narchitecture in which memory can be accessed only through load and store\ninstructions. The variables a, b, c, d and e are initially stored in memory. The\nbinary operators used in this expression tree can be evaluated by the machine\nonly when the operands are in registers. The instructions produce result only in a\nregister. If no intermediate results can be stored in memory, what is the\nminimum number of registers needed to evaluate this expression?  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q47_a8b512f3.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2138/gate2011-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider two binary operators  '\\(\\uparrow\\)\n'and '\\(\\downarrow\\)' with the precedence of operator \\(\\downarrow\\)\nbeing lower than that of the operator \\(\\uparrow\\) . Operator \\(\\uparrow\\) is right associative while\noperator \\(\\downarrow\\) is left associative. Which one of the following represents the parse\ntree for expression (7 \\(\\downarrow\\) 3 \\(\\uparrow\\)4 \\(\\uparrow\\) 3 \\(\\downarrow\\)2)? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q37_199e567a.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>B.</b> <p>B</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2129/gate2011-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The lexical analysis for a modern computer language such as Java needs the\npower of which one of the following machine models in a necessary and sufficient\nsense? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finite state automata</p>",
            "<b>B.</b> <p>Deterministic pushdown automata</p>",
            "<b>C.</b> <p>Non-Deterministic pushdown automata</p>",
            "<b>D.</b> <p>Turing machine</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Finite state automata</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2121/gate2011-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>In a compiler, keywords of a language are recognized during <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>parsing of the program</p>",
            "<b>B.</b> <p>the code generation</p>",
            "<b>C.</b> <p>the lexical analysis of the program</p>",
            "<b>D.</b> <p>dataflow analysis</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the lexical analysis of the program</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2103/gate2011-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The grammar S\\(\\rightarrow\\)aSa|bS|c is <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LL(1) but not LR(1)</p>",
            "<b>B.</b> <p>LR(1) but not LR(1)</p>",
            "<b>C.</b> <p>Both LL(1) and LR(1)</p>",
            "<b>D.</b> <p>Neither LL(1) nor LR(1)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both LL(1) and LR(1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2339/gate2010-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>The program below uses six temporary variables a, b, c, d, e, f. <br><br>\na =1 <br>\nb= 10<br>\nc =20<br>\nd= a +b<br>\ne= c +d<br>\nf =c +e<br>\nb= c+ e<br>\ne =b +f<br>\nd =5 +e<br>\nreturn d +f<br><br>\nAssuming that all operations take their operands from registers, what is the\nminimum number of registers needed to execute this program without spilling? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2338/gate2010-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which languages necessarily need heap allocation in the runtime environment? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Those that support recursion</p>",
            "<b>B.</b> <p>Those that use dynamic scoping</p>",
            "<b>C.</b> <p>Those that allow dynamic data structures</p>",
            "<b>D.</b> <p>Those that use global variables</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Those that allow dynamic data structures</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2187/gate2010-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which data structure in a compiler is used for managing information about\nvariables and their attributes? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Abstract syntax tree</p>",
            "<b>B.</b> <p>Symbol table</p>",
            "<b>C.</b> <p>Semantic stack</p>",
            "<b>D.</b> <p>Parse table</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Symbol table</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2186/gate2010-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Which of the following statements are TRUE? <br><br>\nI There exist parsing algorithms for some programming languages whose\ncomplexities are less than \\(\\theta (n^{3})\\). <br>\nII A programming language which allows recursion can be implemented with static storage allocation. <br>\nIII No L-attributed definition can be evaluated in the framework of bottom-up parsing.<br>\nIV Code improving transformations can be performed at both source language and intermediate code level. <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II</p>",
            "<b>B.</b> <p>I and IV</p>",
            "<b>C.</b> <p>III and IV</p>",
            "<b>D.</b> <p>I, III and IV</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and IV</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1328/gate2009-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Match all items in Group 1 with correct options from those given in Group 2. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q17_042f5f0c.jpg\"> <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-4. Q-1, R-2, S-3</p>",
            "<b>B.</b> <p>P-3, Q-1, R-4, S-2</p>",
            "<b>C.</b> <p>P-3, Q-4, R-1, S-2</p>",
            "<b>D.</b> <p>P-2, Q-1, R-4, S-3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P-3, Q-1, R-4, S-2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1309/gate2009-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following class of statement usually produces no executable code when compiled? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>declaration</p>",
            "<b>B.</b> <p>assignment statements</p>",
            "<b>C.</b> <p>input and output statements</p>",
            "<b>D.</b> <p>structural statements</p>"
          ],
          "correct_answer": "<b>D.</b> <p>structural statements</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17249/isro2008-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>In a resident - OS computer, which of the following systems must reside in the main memory under all situations? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Assembler</p>",
            "<b>B.</b> <p>Linker</p>",
            "<b>C.</b> <p>Loader</p>",
            "<b>D.</b> <p>Compiler</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Loader</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1662/gate1998-1-25-isro2008-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Relative to the program translated by a compiler, the same program when interpreted runs <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Faster</p>",
            "<b>B.</b> <p>Slower</p>",
            "<b>C.</b> <p>At the same speed</p>",
            "<b>D.</b> <p>May be faster or slower</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Slower</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18495/isro2008-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the grammar<br>\n\\(S \\rightarrow ABCc \\mid bc\\)<br>\n\\(BA \\rightarrow AB\\)<br>\n\\(Bb \\rightarrow bb\\)<br>\n\\(Ab \\rightarrow ab\\)<br>\n\\(Aa \\rightarrow aa\\)<br>\nWhich of the following sentences can be derived by this grammar? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>abc</p>",
            "<b>B.</b> <p>aab</p>",
            "<b>C.</b> <p>abcc</p>",
            "<b>D.</b> <p>abbc</p>"
          ],
          "correct_answer": "<b>A.</b> <p>abc</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49668/isro2008-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>An LALR(1) parser for a grammar G can have shift-reduce (S-R) conflicts if and\nonly if <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The SLR(1) parser for G has S-R conflicts</p>",
            "<b>B.</b> <p>The LR(1) parser for G has S-R conflicts</p>",
            "<b>C.</b> <p>The LR(0) parser for G has S-R conflicts</p>",
            "<b>D.</b> <p>The LALR(1) parser for G has reduce-reduce conflicts</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The LR(1) parser for G has S-R conflicts</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/478/gate2008-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
