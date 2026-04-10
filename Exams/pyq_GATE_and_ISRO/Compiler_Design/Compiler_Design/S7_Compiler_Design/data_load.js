window.__examLoadCallback({
  "title": "Compiler_Design - Compiler_Design - Slot 7",
  "duration": 42,
  "sections": [
    {
      "name": "Compiler_Design",
      "questions": [
        {
          "id": 1,
          "question": "<p>Which of the following productions eliminate left recursion in the productions given below:<br>\n\\(S \\rightarrow Aa \\mid b\\)<br>\n\\(A \\rightarrow Ac \\mid Sd \\mid \\epsilon\\) <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow bdA', \\;\\; A' \\rightarrow A'c \\mid A'ba \\mid A \\mid \\epsilon\\)</p>",
            "<b>B.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow A' \\mid bdA', \\;\\; A' \\rightarrow cA' \\mid adA' \\mid \\epsilon\\)</p>",
            "<b>C.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow A'c \\mid A'd ,\\;\\;  A' \\rightarrow bdA' \\mid cA \\mid \\epsilon\\)</p>",
            "<b>D.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow cA' \\mid adA' \\mid bdA',\\;\\;  A' \\rightarrow A \\mid \\epsilon\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow A' \\mid bdA', \\;\\; A' \\rightarrow cA' \\mid adA' \\mid \\epsilon\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43760/isro-2013-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Shift reduce parsing belongs to a class of <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Bottom up parsing.</p>",
            "<b>B.</b> <p>Top down parsing.</p>",
            "<b>C.</b> <p>Recursive parsing.</p>",
            "<b>D.</b> <p>Predictive parsing.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Bottom up parsing.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43755/isro-2013-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
          "question": "<p>A symbol table of length 152 is processing 25 entries at any instant. What is occupation density? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0.164</p>",
            "<b>B.</b> <p>127</p>",
            "<b>C.</b> <p>8.06</p>",
            "<b>D.</b> <p>6.08</p>"
          ],
          "correct_answer": "<b>A.</b> <p>0.164</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/53152/isro2011-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Number of comparisons required for an unsuccessful search of an element in a sequential search organized, fixed length, symbol table of length L is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L</p>",
            "<b>B.</b> <p>L/2</p>",
            "<b>C.</b> <p>(L+1)/2</p>",
            "<b>D.</b> <p>2L</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18148/isro2011-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which of the following sentences can be generated by <br>\n\\(S -&gt; aS \\mid bA\\)<br>\n\\(A -&gt; d \\mid cA\\) <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>bccdd</p>",
            "<b>B.</b> <p>abbcca</p>",
            "<b>C.</b> <p>abcabc</p>",
            "<b>D.</b> <p>abcd</p>"
          ],
          "correct_answer": "<b>D.</b> <p>abcd</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52864/isro2011-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which variable does not drive a terminal string in grammar?<br>\nS -&gt; AB<br>\nA -&gt; a<br>\nB -&gt; b<br>\nB -&gt; C<br> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>S</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51695/isro2011-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following statements about peephole optimization is False? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is applied to a small part of the code</p>",
            "<b>B.</b> <p>It can be used to optimize intermediate code</p>",
            "<b>C.</b> <p>To get the best out of this, it has to be applied repeatedly</p>",
            "<b>D.</b> <p>It can be applied to the portion of the code that is not contiguous</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It can be applied to the portion of the code that is not contiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52264/isro2011-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>In compiler terminology reduction in strength means <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Replacing run time computation by compile time computation</p>",
            "<b>B.</b> <p>Removing loop invariant computation</p>",
            "<b>C.</b> <p>Removing common subexpressions</p>",
            "<b>D.</b> <p>replacing a costly operation by a relatively cheaper one</p>"
          ],
          "correct_answer": "<b>D.</b> <p>replacing a costly operation by a relatively cheaper one</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50567/isro2011-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
