window.__examLoadCallback({
  "title": "Compiler_Design - Compiler_Design - Slot 5",
  "duration": 42,
  "sections": [
    {
      "name": "Compiler_Design",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the grammar defined by the following production rules, with two operators * and + <br>\nS \\(\\rightarrow\\)T *P <br>\nT \\(\\rightarrow\\)U| T*U <br>\nP \\(\\rightarrow\\) Q +P |Q <br>\nQ \\(\\rightarrow\\) Id <br>\nU \\(\\rightarrow\\) Id <br>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(+\\) is left associative, while * is right associative</p>",
            "<b>B.</b> <p>\\(+\\) is right associative, while * is left associative</p>",
            "<b>C.</b> <p>Both + and * are right associative</p>",
            "<b>D.</b> <p>Both + and * are left associative</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(+\\) is right associative, while * is left associative</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1973/gate2014-2-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A canonical set of items is given below <br>\nS\\(\\rightarrow L.  \\gt R\\) <br>\nQ\\(\\rightarrow\\)R. <br>\nOn input symbol \\(\\lt \\) the set has <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a shift-reduce conflict and a reduce-reduce conflict.</p>",
            "<b>B.</b> <p>a shift-reduce conflict but not a reduce-reduce conflict</p>",
            "<b>C.</b> <p>a reduce-reduce conflict but not a shift-reduce conflict.</p>",
            "<b>D.</b> <p>neither a shift-reduce nor a reduce-reduce conflict</p>"
          ],
          "correct_answer": "<b>D.</b> <p>neither a shift-reduce nor a reduce-reduce conflict</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1807/gate2014-1-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which one of the following is FALSE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A basic block is a sequence of instructions where control enters the sequence at the\nbeginning and exits at the end.</p>",
            "<b>B.</b> <p>Available expression analysis can be used for common subexpression elimination.</p>",
            "<b>C.</b> <p>Live variable analysis can be used for dead code elimination</p>",
            "<b>D.</b> <p>x=4*5 \\(\\Rightarrow\\)x=20 is an example of common subexpression elimination</p>"
          ],
          "correct_answer": "<b>D.</b> <p>x=4*5 \\(\\Rightarrow\\)x=20 is an example of common subexpression elimination</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1784/gate2014-1-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The following code segment is executed on a processor which allows only register operands in its\ninstructions. Each instruction can have atmost two source operands and one destination operand. Assume\nthat all variables are dead after this code segment.<pre><code>c = a + b;\nd = c * a;\ne = c + a;\nx = c * c;\nif (x &gt; a) {\n   y = a * a;\n}\nelse {\n   d = d * d;\n   e = e * e;\n} </code></pre> What is the minimum number of registers needed in the instruction set architecture of the processor\nto compile this code segment without any spill to memory? Do not apply any optimization other\nthan optimizing register allocation <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43293/gate2013-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The following code segment is executed on a processor which allows only register operands in its\ninstructions. Each instruction can have atmost two source operands and one destination operand. Assume\nthat all variables are dead after this code segment.<pre><code>c = a + b;\nd = c * a;\ne = c + a;\nx = c * c;\nif (x &gt; a) {\n   y = a * a;\n}\nelse {\n   d = d * d;\n   e = e * e;\n} </code></pre>  Suppose the instruction set architecture of the processor has only two registers. The only allowed\ncompiler optimization is code motion, which moves statements from one place to another while\npreserving correctness. What is the minimum number of spills to memory in the compiled code? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1556/gate2013-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following two sets of LR(1) items of an LR(1) grammar.\n<br><br>\\(\\begin{array}{l|l}\nX \\rightarrow c.X, c∕d &amp;X → c.X, \\$\\\\\nX \\rightarrow .cX, c∕&nbsp;&nbsp;d&amp;&nbsp;X → .cX, \\$\\\\\nX \\rightarrow .d, c∕&nbsp;d &amp;&nbsp;X → .d, \\$\n\\end{array}\\)  <br><br>\nWhich of the following statements related to merging of the two sets in the corresponding LALR parser is/are FALSE? <br>\n1. Cannot be merged since look aheads are different. <br>\n2. Can be merged but will result in S-R conflict. <br>\n3. Can be merged but will result in R-R conflict. <br>\n4. Cannot be merged since goto on c will lead to two different sets. <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 only</p>",
            "<b>B.</b> <p>2 only</p>",
            "<b>C.</b> <p>1 and 4 only</p>",
            "<b>D.</b> <p>1, 2, 3 and 4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1, 2, 3 and 4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1551/gate2013-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>What is the maximum number of reduce moves that can be taken by a bottom-up parser for a\ngrammar with no epsilon- and unit-production (i.e., of type \\(A\\rightarrow \\epsilon\\) and \\(A \\rightarrow a \\)) to parse a string\nwith n tokens? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n/2</p>",
            "<b>B.</b> <p>n-1</p>",
            "<b>C.</b> <p>2n-1</p>",
            "<b>D.</b> <p>\\(2^{n}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1418/gate2013-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>For the grammar below, a partial LL(1) parsing table is also presented along with the grammar. Entries that\nneed to be filled are indicated as E1, E2, and E3. \\(\\varepsilon\\) is the empty string, $ indicates end of input, and, | separates alternate right hand sides of productions.<br>\\(S\\rightarrow aAbB|bAaB|\\varepsilon\\)<br>  \\(A\\rightarrow S\\) <br>\\(B\\rightarrow S\\)  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q52_d25c144f.jpg\"> <br>The appropriate entries for E1, E2, and E3 are <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>E1: S\\(\\rightarrow\\)aAbB, A\\(\\rightarrow\\)S <br>\nE2: S\\(\\rightarrow\\)bAaB, B\\(\\rightarrow\\)S <br>\nE3: B\\(\\rightarrow\\)S</p>",
            "<b>B.</b> <p>E1: S\\(\\rightarrow\\) aAbB, S \\(\\rightarrow \\varepsilon  \\)  <br>\nE2: S\\(\\rightarrow\\) bAaB, S \\(\\rightarrow \\varepsilon \\)  <br>\nE3: B\\(\\rightarrow \\varepsilon\\)S</p>",
            "<b>C.</b> <p>E1: S \\(\\rightarrow\\) aAbB, S \\(\\rightarrow \\varepsilon\\)<br>\nE2: S \\(\\rightarrow\\) bAaB, S \\(\\rightarrow \\varepsilon\\) <br>\nE3: B \\(\\rightarrow\\) S</p>",
            "<b>D.</b> <p>E1: A\\(\\rightarrow\\)S, S \\(\\rightarrow \\varepsilon\\)  <br>\nE2: B\\(\\rightarrow\\)S, S \\(\\rightarrow \\varepsilon\\)  <br>\nE3: B\\(\\rightarrow\\)S</p>"
          ],
          "correct_answer": "<b>C.</b> <p>E1: S \\(\\rightarrow\\) aAbB, S \\(\\rightarrow \\varepsilon\\)<br>\nE2: S \\(\\rightarrow\\) bAaB, S \\(\\rightarrow \\varepsilon\\) <br>\nE3: B \\(\\rightarrow\\) S</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43312/gate2012-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>For the grammar below, a partial LL(1) parsing table is also presented along with the grammar. Entries that\nneed to be filled are indicated as E1, E2, and E3. \\(\\varepsilon\\) is the empty string, $ indicates end of input, and, | separates alternate right hand sides of productions.<br>\\(S\\rightarrow aAbB|bAaB|\\varepsilon\\)<br>  \\(A\\rightarrow S\\) <br>\\(B\\rightarrow S\\)  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q52_d25c144f.jpg\"> <br>The FIRST and FOLLOW sets for the non-terminals A and B are <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>FIRST(A) = {a, b, \\(\\varepsilon\\)} = FIRST(B)<br>\nFOLLOW(A) = {a, b}<br>\nFOLLOW(B) = {a, b, $}</p>",
            "<b>B.</b> <p>FIRST(A) = {a, b, $}<br>\nFIRST(B) = {a, b, \\(\\varepsilon\\)}<br>\nFOLLOW(A) = {a, b}<br>\nFOLLOW(B) = {$}</p>",
            "<b>C.</b> <p>FIRST(A) = {a, b, \\(\\varepsilon\\)} = FIRST(B)<br>\nFOLLOW(A) = {a, b} <br>\nFOLLOW(B) = \\(\\phi\\)</p>",
            "<b>D.</b> <p>FIRST(A) = {a, b} = FIRST(B) <br>\nFOLLOW(A) = {a, b} <br>\nFOLLOW(B) = {a, b}</p>"
          ],
          "correct_answer": "<b>A.</b> <p>FIRST(A) = {a, b, \\(\\varepsilon\\)} = FIRST(B)<br>\nFOLLOW(A) = {a, b}<br>\nFOLLOW(B) = {a, b, $}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2181/gate2012-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the program given below, in a block-structured pseudo-language with lexical scoping and\nnesting of procedures permitted.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q36_e237e299.jpg\"><br>\nConsider the calling chain: Main \\(\\rightarrow\\) A1 \\(\\rightarrow\\) A2 \\(\\rightarrow\\) A21 \\(\\rightarrow\\) A1 <br>\nThe correct set of activation records along with their access links is given by <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q36a_b9042f97.jpg\"> <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/1758/gate2012-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
