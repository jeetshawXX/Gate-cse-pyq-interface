window.__examLoadCallback({
  "title": "Compiler Design - Compilation Phases",
  "duration": 33,
  "sections": [
    {
      "name": "Compilation Phases",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"80282\"></a><div itemprop=\"text\"><p>In a compiler the module that checks every character of the source text is called:</p></div><br><br><b>GATE CSE 1987 | Question: 1-xi</b></p>",
          "type": "single",
          "options": [
            "<p>The code generator.</p>",
            "<p>The code optimiser.</p>",
            "<p>The lexical analyser.</p>",
            "<p>The syntax analyser.</p>"
          ],
          "correct_answer": "<p>The lexical analyser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/80282/gate-cse-1987-question-1-xi\" target=\"_blank\">https://gateoverflow.in/80282/gate-cse-1987-question-1-xi</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"84033\"></a><div itemprop=\"text\">Match the pairs in the following questions:\\[ \\begin{array}{|ll|ll|} \\hline (a) &amp; \\text{Lexical analysis} &amp; (p) &amp; \\text{DAG's} \\\\\\hline &nbsp;(b) &amp; \\text{Code optimization} &amp; (q) &amp; \\text{Syntax trees} \\\\\\hline &nbsp;&nbsp;(c) &amp; \\text{Code generation} &amp; (r) &nbsp;&amp; \\text{Push down automaton} \\\\\\hline (d) &amp; \\text{Abelian groups} &amp; (s) &nbsp;&amp; \\text{Finite automaton} &nbsp;\\\\\\hline \\end{array} \\]</div><br><br><b>GATE CSE 1990 | Question: 2-ix</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/84033/gate-cse-1990-question-2-ix\" target=\"_blank\">https://gateoverflow.in/84033/gate-cse-1990-question-2-ix</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"4066\"></a><div itemprop=\"text\"><p>Consider line number \\( 3 \\) of the following C-program.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main() {                /*Line 1 */\n    int I, N;               /*Line 2 */\n    fro (I=0, I&lt;N, I++);\t/*Line 3 */\n}</pre>\n\n<p>Identify the compiler’s response about this line while creating the object-module:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 61</b></p>",
          "type": "single",
          "options": [
            "<p>No compilation error</p>",
            "<p>Only a lexical error</p>",
            "<p>Only syntactic errors</p>",
            "<p>Both lexical and syntactic errors</p>"
          ],
          "correct_answer": "<p>No compilation error</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/4066/gate-cse-2005-question-61\" target=\"_blank\">https://gateoverflow.in/4066/gate-cse-2005-question-61</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1309\"></a><div itemprop=\"text\"><p>Match all items in Group 1 with the correct options from those given in Group 2.\\[ \\begin{array}{|ll|ll|}\\hline \\rlap{\\textbf{Group 1}} &amp; &amp; \\rlap{\\textbf{Group 2}}&nbsp; \\\\\\hline \\text{P.} &amp; \\text{Regular Expression} &amp; \\text{1.} &amp; \\text{Syntax analysis} \\\\\\hline &nbsp;\\text{Q.} &amp; \\text{Pushdown automata} &amp; \\text{2.}&amp; \\text{Code generation} \\\\\\hline &nbsp;&nbsp;\\text{R.}&amp; \\text{Dataflow analysis} &amp; \\text{3.} &nbsp;&amp; \\text{Lexical analysis} \\\\\\hline &nbsp;\\text{S.} &amp; \\text{Register allocation} &amp;\\text{4.} &nbsp;&amp; \\text{Code optimization} &nbsp;\\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 2009 | Question: 17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{P-4, Q-1, R-2, S-3} \\)</p>",
            "<p>\\( \\text{P-3, Q-1, R-4, S-2} \\)</p>",
            "<p>\\( \\text{P-3, Q-4, R-1, S-2} \\)</p>",
            "<p>\\( \\text{P-2, Q-1, R-4, S-3} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{P-3, Q-1, R-4, S-2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1309/gate-cse-2009-question-17\" target=\"_blank\">https://gateoverflow.in/1309/gate-cse-2009-question-17</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"8098\"></a><div itemprop=\"text\"><p>Match the following:\\[ \\begin{array}{|ll|ll|}\\hline \\text{P.} &amp; \\text{Lexical analysis} &amp; \\text{1.} &amp; \\text{Graph coloring} \\\\\\hline &nbsp;\\text{Q.} &amp; \\text{Parsing} &amp; \\text{2.}&amp; \\text{DFA minimization} \\\\\\hline &nbsp;&nbsp;\\text{R.}&amp; \\text{Register allocation} &amp; \\text{3.} &nbsp;&amp; \\text{Post-order traversal} \\\\\\hline &nbsp;\\text{S.} &amp; \\text{Expression evaluation} &amp;\\text{4.} &nbsp;&amp; \\text{Production tree} &nbsp;\\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 2015 Set 2 | Question: 19</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{P-2, Q-3, R-1, S-4} \\)</p>",
            "<p>\\( \\text{P-2, Q-1, R-4, S-3} \\)</p>",
            "<p>\\( \\text{P-2, Q-4, R-1, S-3} \\)</p>",
            "<p>\\( \\text{P-2, Q-3, R-4, S-1} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{P-2, Q-4, R-1, S-3} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8098/gate-cse-2015-set-2-question-19\" target=\"_blank\">https://gateoverflow.in/8098/gate-cse-2015-set-2-question-19</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"39548\"></a><div itemprop=\"text\"><p>Match the following:\\[ \\begin{array}{|ll|ll|}\\hline \\text{(P)} &amp; \\text{Lexical analysis} &amp; \\text{(i)} &amp; \\text{Leftmost derivation} \\\\\\hline &nbsp;\\text{(Q)} &amp; \\text{Top down parsing} &amp; \\text{(ii)}&amp; \\text{Type checking} \\\\\\hline &nbsp;&nbsp;\\text{(R)}&amp; \\text{Semantic analysis} &amp; \\text{(iii)} &nbsp;&amp; \\text{Regular expressions} \\\\\\hline &nbsp;\\text{(S)} &amp; \\text{Runtime environment} &amp;\\text{(iv)} &nbsp;&amp; \\text{Activation records} &nbsp;\\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 2016 Set 2 | Question: 19</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{P  \\)\\leftrightarrow\\(  i, Q  \\)\\leftrightarrow\\(  ii, R  \\)\\leftrightarrow\\(  iv, S  \\)\\leftrightarrow\\( &nbsp;iii} \\)</p>",
            "<p>\\( \\text{P  \\)\\leftrightarrow\\(  iii, Q  \\)\\leftrightarrow\\(  i, R  \\)\\leftrightarrow\\(  ii, S  \\)\\leftrightarrow\\(  iv} \\)</p>",
            "<p>\\( \\text{P  \\)\\leftrightarrow\\(  ii, Q  \\)\\leftrightarrow\\(  iii, R  \\)\\leftrightarrow\\(  i, S  \\)\\leftrightarrow\\(  iv} \\)</p>",
            "<p>\\( \\text{P  \\)\\leftrightarrow\\(  iv, Q  \\)\\leftrightarrow\\(  i, R  \\)\\leftrightarrow\\(  ii, S  \\)\\leftrightarrow\\(  iii} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{P  \\)\\leftrightarrow\\(  iii, Q  \\)\\leftrightarrow\\(  i, R  \\)\\leftrightarrow\\(  ii, S  \\)\\leftrightarrow\\(  iv} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39548/gate-cse-2016-set-2-question-19\" target=\"_blank\">https://gateoverflow.in/39548/gate-cse-2016-set-2-question-19</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"118592\"></a><div itemprop=\"text\"><p>Match the following according to input (from the left column) to the compiler phase (in the right column) that processes it:<br>\n\\[ \\begin{array}{|l|l|}\\hline \\text{P. Syntax tree}&nbsp; &amp;&nbsp; \\text{i. Code generator} \\\\\\hline&nbsp; \\text{Q. Character stream} &amp; \\text{ii. Syntax analyser} \\\\\\hline&nbsp; \\text{R. Intermediate representation} &amp; \\text{iii. Semantic analyser} \\\\\\hline&nbsp; \\text{S. Token stream} &amp; \\text{iv. Lexical analyser} \\\\\\hline \\end{array} \\]</p>\n\n</div><br><br><b>GATE CSE 2017 Set 2 | Question: 05</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{P-ii; Q-iii; R-iv; S-i} \\)</p>",
            "<p>\\( \\text{P-ii; Q-i; R-iii; S-iv} \\)</p>",
            "<p>\\( \\text{P-iii; Q-iv; R-i; S-ii} \\)</p>",
            "<p>\\( \\text{P-i; Q-iv; R-ii; S-iii} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{P-iii; Q-iv; R-i; S-ii} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118592/gate-cse-2017-set-2-question-05\" target=\"_blank\">https://gateoverflow.in/118592/gate-cse-2017-set-2-question-05</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"204082\"></a><div itemprop=\"text\"><p>Which one of the following statements is FALSE?</p>\n\n</div><br><br><b>GATE CSE 2018 | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>Context-free grammar can be used to specify both lexical and syntax rules</p>",
            "<p>Type checking is done before parsing</p>",
            "<p>High-level language programs can be translated to different Intermediate Representations</p>",
            "<p>Arguments to a function can be passed using the program stack</p>"
          ],
          "correct_answer": "<p>Type checking is done before parsing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/204082/gate-cse-2018-question-8\" target=\"_blank\">https://gateoverflow.in/204082/gate-cse-2018-question-8</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"333222\"></a><div itemprop=\"text\"><p>Consider the following statements.</p>\n\n<ol start=\"1\" style=\"list-style-type:upper-roman\">\n\t<li>Symbol table is accessed only during lexical analysis and syntax analysis.</li>\n\t<li>Compilers for programming languages that support recursion necessarily need heap storage for memory allocation in the run-time environment.</li>\n\t<li>Errors violating the condition ‘<em>any variable must be declared before its use</em>’ are detected during syntax analysis.</li>\n</ol>\n\n<p>&nbsp; Which of the above statements is/are TRUE?</p>\n\n</div><br><br><b>GATE CSE 2020 | Question: 9</b></p>",
          "type": "single",
          "options": [
            "<p>I only</p>",
            "<p>I and&nbsp;III only</p>",
            "<p>Ⅱ only</p>",
            "<p>None of&nbsp; Ⅰ,&nbsp;Ⅱ and&nbsp;&nbsp;Ⅲ</p>"
          ],
          "correct_answer": "<p>None of&nbsp; Ⅰ,&nbsp;Ⅱ and&nbsp;&nbsp;Ⅲ</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333222/gate-cse-2020-question-9\" target=\"_blank\">https://gateoverflow.in/333222/gate-cse-2020-question-9</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"357537\"></a><div itemprop=\"text\"><p>Consider the following \\( \\text{ANSI C} \\) program:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main () {\n    Integer x;\n    return 0;\n}</pre>\n\n<p>Which one of the following phases in a seven-phase \\( C \\) compiler will throw an error?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 2 | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>Lexical analyzer</p>",
            "<p>Syntax&nbsp;analyzer</p>",
            "<p>Semantic&nbsp;analyzer</p>",
            "<p>Machine dependent optimizer</p>"
          ],
          "correct_answer": "<p>Semantic&nbsp;analyzer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357537/gate-cse-2021-set-2-question-3\" target=\"_blank\">https://gateoverflow.in/357537/gate-cse-2021-set-2-question-3</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"399311\"></a><div itemprop=\"text\"><p>Consider the following statements regarding the front-end and back-end of a compiler.</p>\n\n<p><strong>S1:&nbsp;</strong>The front-end includes phases that are independent of the target hardware.<br>\n<strong>S2: </strong>The back-end includes phases that are specific to the target hardware.<br>\n<strong>S3: </strong>The back-end includes phases that are specific to the programming language used in the source code.</p>\n\n<p>Identify the CORRECT option.</p>\n\n</div><br><br><b>GATE CSE 2023 | Question: 1</b></p>",
          "type": "single",
          "options": [
            "<p>Only \\( \\mathbf{S 1} \\) is TRUE.</p>",
            "<p>Only \\( \\mathbf{S 1} \\) and \\( \\mathbf{S 2} \\) are TRUE.</p>",
            "<p>\\( \\mathbf{S 1}, \\mathbf{S 2} \\), and \\( \\mathbf{S 3} \\) are all TRUE.</p>",
            "<p>Only \\( \\mathbf{S 1} \\) and \\( \\mathbf{S 3} \\) are TRUE.</p>"
          ],
          "correct_answer": "<p>Only \\( \\mathbf{S 1} \\) and \\( \\mathbf{S 2} \\) are TRUE.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399311/gate-cse-2023-question-1\" target=\"_blank\">https://gateoverflow.in/399311/gate-cse-2023-question-1</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"422886\"></a><div itemprop=\"text\"><p>​​​Consider the following two sets:</p><p>\\[ \\begin{array}{|ll|ll|}\\hline &amp; \\textbf{Set X} &amp;&nbsp; &amp; \\textbf{Set Y} \\\\\\hline &nbsp;\\text{ P.} &amp; \\text{Lexical Analyzer&nbsp; } &amp; \\text{1.}&amp; \\text{Abstract Syntax Tree} \\\\\\hline &nbsp;&nbsp;\\text{ Q.}&amp; \\text{Syntax Analyzer} &amp; \\text{2.} &nbsp;&amp; \\text{Token} \\\\\\hline &nbsp;\\text{ R.} &amp; \\text{Intermediate Code Generator} &amp;\\text{3.} &nbsp;&amp; \\text{Parse Tree} &nbsp;\\\\\\hline&nbsp;\\text{ S.} &amp; \\text{Code Optimizer} &amp;\\text{4.} &nbsp;&amp; \\text{Constant Folding} &nbsp;\\\\\\hline &nbsp;\\end{array} \\]<br>Which one of the following options is the CORRECT match from <strong><em>Set \\( \\boldsymbol{X} \\) to Set \\( \\boldsymbol{Y} \\)</em></strong>?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\mathrm{P}-4 ; \\mathrm{Q}-1 ; \\mathrm{R}-3 ; \\mathrm{S}-2 \\)</p>",
            "<p>\\( \\mathrm{P}-2 ; \\mathrm{Q}-3 ; \\mathrm{R}-1 ; \\mathrm{S}-4 \\)</p>",
            "<p>\\( \\mathrm{P}-2 ; \\mathrm{Q}-1 ; \\mathrm{R}-3 ; \\mathrm{S}-4 \\)</p>",
            "<p>\\( \\mathrm{P}-4 ; \\mathrm{Q}-3 ; \\mathrm{R}-2 ; \\mathrm{S}-1 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\mathrm{P}-2 ; \\mathrm{Q}-3 ; \\mathrm{R}-1 ; \\mathrm{S}-4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422886/gate-cse-2024-set-2-question-11\" target=\"_blank\">https://gateoverflow.in/422886/gate-cse-2024-set-2-question-11</a></p>"
        }
      ]
    }
  ]
});
