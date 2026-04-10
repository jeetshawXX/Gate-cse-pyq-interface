window.__examLoadCallback({
  "title": "Compiler Design - Runtime Environment",
  "duration": 61,
  "sections": [
    {
      "name": "Runtime Environment",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"93966\"></a><div itemprop=\"text\"><p>Consider the following program skeleton and below figure which shows activation records of procedures involved in the calling sequence. \\[ p&nbsp;\\rightarrow s \\rightarrow q \\rightarrow r \\rightarrow q. \\]Write the access links of the activation records to enable correct access and variables in the procedures from other procedures involved in the calling sequence</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"332\" src=\"images/gateOverflow_pyq_images/compiler_design___runtime_environment/b964b7d4f148eccf114073803c09f508.png\" width=\"212\"></p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">procedure p;\n  procedure q;\n    procedure r;\n      begin\n        q\n      end r;\n    begin\n       r\n    end q;\n  procedure s;\n    begin\n       q\n    end s;\n  begin\n    s\n  end p;\n</pre></div><br><br><b>GATE CSE 1988 | Question: 2xii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/93966/gate-cse-1988-question-2xii\" target=\"_blank\">https://gateoverflow.in/93966/gate-cse-1988-question-2xii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"89636\"></a><div itemprop=\"text\">Will recursion work correctly in a language with static allocation of all variables? Explain.</div><br><br><b>GATE CSE 1989 | Question: 10a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/89636/gate-cse-1989-question-10a\" target=\"_blank\">https://gateoverflow.in/89636/gate-cse-1989-question-10a</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"89082\"></a><div itemprop=\"text\"><p>Indicate the result of the following program if the language uses (i) static scope rules and (ii) dynamic scope rules.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">        var x, y:integer;\n        procedure A (var z:integer);\n        var x:integer;\n        begin x:=1; B; z:= x end;\n        procedure B;\n        begin x:=x+1 end;\n        begin\n        x:=5; A(y); write (y)\n...end.</pre>\n\n</div><br><br><b>GATE CSE 1989 | Question: 8b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/89082/gate-cse-1989-question-8b\" target=\"_blank\">https://gateoverflow.in/89082/gate-cse-1989-question-8b</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"83980\"></a><div itemprop=\"text\">Match the pairs in the following questions:\\[ \\begin{array}{|ll|ll|}\\hline (a) &amp; \\text{Pointer data type} &amp; (p) &amp; \\text{Type conversion} \\\\\\hline &nbsp;(b) &amp; \\text{Activation record} &amp; (q) &amp; \\text{Dynamic data structure} \\\\\\hline &nbsp;&nbsp;(c) &amp; \\text{Repeat-until} &amp; (r) &nbsp;&amp; \\text{Recursion} \\\\\\hline (d) &amp; \\text{Coercion} &amp; (s) &nbsp;&amp; \\text{ Nondeterministic loop } &nbsp;\\\\\\hline \\end{array} \\]</div><br><br><b>GATE CSE 1990 | Question: 2-v</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/83980/gate-cse-1990-question-2-v\" target=\"_blank\">https://gateoverflow.in/83980/gate-cse-1990-question-2-v</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"85394\"></a><div itemprop=\"text\">State whether the following statements are TRUE or FALSE with reason:<br>\n<br>\nThe Link-load-and-go loading scheme required less storage space than the link-and-go loading scheme.</div><br><br><b>GATE CSE 1990 | Question: 4-v</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "True",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/85394/gate-cse-1990-question-4-v\" target=\"_blank\">https://gateoverflow.in/85394/gate-cse-1990-question-4-v</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"2295\"></a><div itemprop=\"text\"><p>A part of the system software which under all circumstances must reside in the main memory is:</p>\n\n\n\n</div><br><br><b>GATE CSE 1993 | Question: 7.7</b></p>",
          "type": "single",
          "options": [
            "<p>text editor</p>",
            "<p>assembler</p>",
            "<p>linker</p>",
            "<p>loader</p>",
            "<p>none of the above</p>"
          ],
          "correct_answer": "<p>loader</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2295/gate-cse-1993-question-7-7\" target=\"_blank\">https://gateoverflow.in/2295/gate-cse-1993-question-7-7</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"2601\"></a><div itemprop=\"text\"><p>A linker is given object modules for a set of programs that were compiled separately. What information need not be included in an object module?</p></div><br><br><b>GATE CSE 1995 | Question: 1.14</b></p>",
          "type": "single",
          "options": [
            "<p>Object code</p>",
            "<p>Relocation bits</p>",
            "<p>Names and locations of all external symbols defined in the object module</p>",
            "<p>Absolute addresses of internal symbols</p>"
          ],
          "correct_answer": "<p>Names and locations of all external symbols defined in the object module</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2601/gate-cse-1995-question-1-14\" target=\"_blank\">https://gateoverflow.in/2601/gate-cse-1995-question-1-14</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"2746\"></a><div itemprop=\"text\"><p>The correct matching for the following pairs is<br>\\[ \\begin{array}{|ll|ll|} \\hline \\text{(A)}&amp;\\text{Activation record} &amp; \\text{(1)}&nbsp;&amp;\\text{Linking loader} \\\\\\hline<br>&nbsp; \\text{(B)} &amp;\\text{Location counter} &amp; \\text{(2)} &amp;\\text{Garbage collection} \\\\\\hline<br>&nbsp; \\text{(C)}&amp; \\text{Reference counts} &amp; \\text{(3)} &amp;\\text{Subroutine call} \\\\\\hline<br>&nbsp;\\text{(D)}&amp; \\text{Address relocation} &amp; \\text{(4)}&amp; \\text{Assembler}&nbsp; \\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 1996 | Question: 2.17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{A-3 B-4 C-1 D-2} \\)</p>",
            "<p>\\( \\text{A-4 B-3 C-1 D-2} \\)</p>",
            "<p>\\( \\text{A-4 B-3 C-2 D-1} \\)</p>",
            "<p>\\( \\text{A-3 B-4 C-2 D-1} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{A-3 B-4 C-2 D-1} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2746/gate-cse-1996-question-2-17\" target=\"_blank\">https://gateoverflow.in/2746/gate-cse-1996-question-2-17</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"2226\"></a><div itemprop=\"text\"><p>Heap allocation is required for languages.</p>\n\n</div><br><br><b>GATE CSE 1997 | Question: 1.10</b></p>",
          "type": "single",
          "options": [
            "<p>that support recursion</p>",
            "<p>that support dynamic data structure</p>",
            "<p>that use dynamic scope rules</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>that support dynamic data structure</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2226/gate-cse-1997-question-1-10\" target=\"_blank\">https://gateoverflow.in/2226/gate-cse-1997-question-1-10</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"2224\"></a><div itemprop=\"text\"><p>A language \\( L \\) allows declaration of arrays whose sizes are not known during compilation. It is required to make efficient use of memory. Which one of the following is true?</p>\n\n</div><br><br><b>GATE CSE 1997 | Question: 1.8</b></p>",
          "type": "single",
          "options": [
            "<p>A compiler using static memory allocation can be written for \\( L \\)</p>",
            "<p>A compiler cannot be written for \\( L \\); an interpreter must be used</p>",
            "<p>A compiler using dynamic memory allocation can be written for \\( L \\)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>A compiler using dynamic memory allocation can be written for \\( L \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2224/gate-cse-1997-question-1-8\" target=\"_blank\">https://gateoverflow.in/2224/gate-cse-1997-question-1-8</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"1662\"></a><div itemprop=\"text\">\n<p>In a resident – OS computer, which of the following systems must reside in the main memory under all situations?</p>\n\n\n</div><br><br><b>GATE CSE 1998 | Question: 1.25, ISRO2008-41</b></p>",
          "type": "single",
          "options": [
            "<p>Assembler</p>",
            "<p>Linker</p>",
            "<p>Loader</p>",
            "<p>Compiler</p>"
          ],
          "correct_answer": "<p>Loader</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1662/gate-cse-1998-question-1-25-isro2008-41\" target=\"_blank\">https://gateoverflow.in/1662/gate-cse-1998-question-1-25-isro2008-41</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"1665\"></a><div itemprop=\"text\"><p>A linker reads four modules whose lengths are \\( 200, 800, 600 \\) and \\( 500 \\) words, respectively. If they are loaded in that order, what are the relocation constants?</p>\n\n\n\n</div><br><br><b>GATE CSE 1998 | Question: 1.28</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0, 200, 500, 600 \\)</p>",
            "<p>\\( 0, 200, 1000, 1600 \\)</p>",
            "<p>\\( 200, 500, 600, 800 \\)</p>",
            "<p>\\( 200, 700, 1300, 2100 \\)</p>"
          ],
          "correct_answer": "<p>\\( 0, 200, 1000, 1600 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1665/gate-cse-1998-question-1-28\" target=\"_blank\">https://gateoverflow.in/1665/gate-cse-1998-question-1-28</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"1687\"></a><div itemprop=\"text\"><p>Faster access to non-local variables is achieved using an array of pointers to activation records called a&nbsp;</p>\n\n</div><br><br><b>GATE CSE 1998 | Question: 2.15</b></p>",
          "type": "single",
          "options": [
            "<p>stack</p>",
            "<p>heap</p>",
            "<p>display</p>",
            "<p>activation tree</p>"
          ],
          "correct_answer": "<p>display</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1687/gate-cse-1998-question-2-15\" target=\"_blank\">https://gateoverflow.in/1687/gate-cse-1998-question-2-15</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"710\"></a><div itemprop=\"text\"><p>The process of assigning load addresses to the various parts of the program and adjusting the code and the data in the program to reflect the assigned addresses is called</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 1.17</b></p>",
          "type": "single",
          "options": [
            "<p>Assembly</p>",
            "<p>parsing</p>",
            "<p>Relocation</p>",
            "<p>Symbol resolution</p>"
          ],
          "correct_answer": "<p>Relocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/710/gate-cse-2001-question-1-17\" target=\"_blank\">https://gateoverflow.in/710/gate-cse-2001-question-1-17</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"850\"></a><div itemprop=\"text\"><p>Dynamic linking can cause security concerns because</p></div><br><br><b>GATE CSE 2002 | Question: 2.20</b></p>",
          "type": "single",
          "options": [
            "<p>Security is dynamic</p>",
            "<p>The path for searching dynamic libraries is not known till runtime</p>",
            "<p>Linking is insecure</p>",
            "<p>Cryptographic procedures are not available for dynamic linking</p>"
          ],
          "correct_answer": "<p>The path for searching dynamic libraries is not known till runtime</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/850/gate-cse-2002-question-2-20\" target=\"_blank\">https://gateoverflow.in/850/gate-cse-2002-question-2-20</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"477\"></a><div itemprop=\"text\"><p>Which of the following are true?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<p>A programming language which does not permit global variables of any kind and has no nesting of procedures/functions, but permits recursion can be implemented with static storage allocation</p>\n\t</li>\n\t<li>\n\t<p>Multi-level access link (or display) arrangement is needed to arrange activation records only if the programming language being implemented has nesting of procedures/functions</p>\n\t</li>\n\t<li>\n\t<p>Recursion in programming languages cannot be implemented with dynamic storage allocation</p>\n\t</li>\n\t<li>\n\t<p>Nesting procedures/functions and recursion require a dynamic heap allocation scheme and cannot be implemented with a stack-based allocation scheme for activation records</p>\n\t</li>\n\t<li>\n\t<p>Programming languages which permit a function to return a function as its result cannot be implemented with a stack-based storage allocation scheme for activation records</p>\n\t</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2008 | Question: 54</b></p>",
          "type": "single",
          "options": [
            "<p>II and V only</p>",
            "<p>I, III and IV only</p>",
            "<p>I, II and V only</p>",
            "<p>II, III and V only</p>"
          ],
          "correct_answer": "<p>II and V only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/477/gate-cse-2008-question-54\" target=\"_blank\">https://gateoverflow.in/477/gate-cse-2008-question-54</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"2187\"></a><div itemprop=\"text\"><p>Which languages necessarily need heap allocation in the runtime environment?</p>\n\n</div><br><br><b>GATE CSE 2010 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>Those that support recursion.</p>",
            "<p>Those that use dynamic scoping.</p>",
            "<p>Those that allow dynamic data structure.</p>",
            "<p>Those that use global variables.</p>"
          ],
          "correct_answer": "<p>Those that allow dynamic data structure.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2187/gate-cse-2010-question-14\" target=\"_blank\">https://gateoverflow.in/2187/gate-cse-2010-question-14</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"1758\"></a><div itemprop=\"text\"><p>Consider the program given below, in a block-structured pseudo-language with lexical scoping and nesting of procedures permitted.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">Program main; \n  Var ...\n  \n  Procedure A1;\n    Var ... \n    Call A2;\n  End A1\n\n  Procedure A2;\n    Var ...\n\n    Procedure A21;\n      Var ...\n      Call A1;\n    End A21\n\n    Call A21;\n  End A2\n\n  Call A1;\nEnd main.</pre>\n\n<p>Consider the calling chain\\( : \\text{Main} \\rightarrow&nbsp;\\text{A1} \\rightarrow&nbsp;\\text{A2} \\rightarrow&nbsp;\\text{A21}\\rightarrow&nbsp;\\text{A1} \\)</p>\n\n<p>The correct set of activation records along with their access links is given by:</p>\n\n<p><img alt=\"\" height=\"538\" src=\"images/gateOverflow_pyq_images/compiler_design___runtime_environment/7ddfec2fb85b74d6365c016e348adfd3.png\" width=\"600\"></p></div><br><br><b>GATE CSE 2012 | Question: 36</b></p>",
          "type": "single",
          "options": [],
          "correct_answer": "<p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1758/gate-cse-2012-question-36\" target=\"_blank\">https://gateoverflow.in/1758/gate-cse-2012-question-36</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"1975\"></a><div itemprop=\"text\"><p>Which one of the following is&nbsp;<strong>NOT</strong>&nbsp;performed during compilation?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 18</b></p>",
          "type": "single",
          "options": [
            "<p>Dynamic memory allocation</p>",
            "<p>Type checking</p>",
            "<p>Symbol table management</p>",
            "<p>Inline expansion</p>"
          ],
          "correct_answer": "<p>Dynamic memory allocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1975/gate-cse-2014-set-2-question-18\" target=\"_blank\">https://gateoverflow.in/1975/gate-cse-2014-set-2-question-18</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"2052\"></a><div itemprop=\"text\"><p>Which of the following statements are CORRECT?</p>\n\n<ol>\n\t<li>Static allocation of all data areas by a compiler makes it impossible to implement recursion.&nbsp;</li>\n\t<li>Automatic garbage collection is essential to implement recursion.&nbsp;</li>\n\t<li>Dynamic allocation of activation records is essential to implement recursion.&nbsp;</li>\n\t<li>Both heap and stack are essential to implement recursion.&nbsp;</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2014 Set 3 | Question: 18</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1 \\) and \\( 2 \\) only</p>",
            "<p>\\( 2 \\) and \\( 3 \\) only</p>",
            "<p>\\( 3 \\) and \\( 4 \\) only</p>",
            "<p>\\( 1 \\) and \\( 3 \\) only</p>"
          ],
          "correct_answer": "<p>\\( 1 \\) and \\( 3 \\) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2052/gate-cse-2014-set-3-question-18\" target=\"_blank\">https://gateoverflow.in/2052/gate-cse-2014-set-3-question-18</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"357448\"></a><div itemprop=\"text\"><p>Consider the following statements.</p>\n\n<ul>\n\t<li>\\( S_1: \\)&nbsp;The sequence of procedure calls corresponds to a preorder traversal of the activation tree.</li>\n\t<li>\\( S_2: \\)&nbsp;The sequence of procedure returns corresponds to a postorder traversal of the activation tree.</li>\n</ul>\n\n<p>Which one of the following options is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 4</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S_1 \\) is true and \\( S_2 \\) is false</p>",
            "<p>\\( S_1 \\) is false and \\( S_2 \\) is true</p>",
            "<p>\\( S_1 \\) is true and \\( S_2 \\) is true</p>",
            "<p>\\( S_1 \\) is false and \\( S_2 \\) is false</p>"
          ],
          "correct_answer": "<p>\\( S_1 \\) is true and \\( S_2 \\) is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357448/gate-cse-2021-set-1-question-4\" target=\"_blank\">https://gateoverflow.in/357448/gate-cse-2021-set-1-question-4</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"399285\"></a><div itemprop=\"text\"><p>Consider the following program:</p><table border=\"0\" cellpadding=\"1\" style=\"width:100%;text-align:left\"><tbody><tr><td style=\"width:25%\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main() \n{\n    f1 ();\n    f2(2);\n    f3();\n    return (0);\n}</pre><p>&nbsp;</p></td><td style=\"width:25%\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int f1 ()\n{\n    return(1);\n}</pre><p>&nbsp;</p></td><td style=\"width:25%\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int f2 (int X)\n{\n    f3();\n    if (X==1);\n        return f1 ();\n    else\n        return (X * f2 (X - 1));\n    \n}</pre><p>&nbsp;</p></td><td style=\"width:25%\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int f3 ()\n{\n    return (5);\n}</pre><p>&nbsp;</p></td></tr></tbody></table><p>Which one of the following options represents the activation tree corresponding to the main function?</p></div><br><br><b>GATE CSE 2023 | Question: 26</b></p>",
          "type": "single",
          "options": [
            "<p><img alt=\"\" height=\"151\" width=\"96\" src=\"images/gateOverflow_pyq_images/compiler_design___runtime_environment/a8c8b5bf3c500e6a35c0a10f8946df55.png\"></p>",
            "<p><img alt=\"\" width=\"96\" src=\"images/gateOverflow_pyq_images/compiler_design___runtime_environment/5385250e5a12d03c86f010fedb74310f.png\"></p>",
            "<p><img alt=\"\" width=\"128\" height=\"138\" src=\"images/gateOverflow_pyq_images/compiler_design___runtime_environment/28f1df50e105074e810277ce433deceb.png\"></p>",
            "<p><img alt=\"\" width=\"125\" height=\"116\" src=\"images/gateOverflow_pyq_images/compiler_design___runtime_environment/47c3c27313534a21af2b5dfb1c068210.png\"></p>"
          ],
          "correct_answer": "<p><img alt=\"\" height=\"151\" width=\"96\" src=\"images/gateOverflow_pyq_images/compiler_design___runtime_environment/a8c8b5bf3c500e6a35c0a10f8946df55.png\"></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399285/gate-cse-2023-question-26\" target=\"_blank\">https://gateoverflow.in/399285/gate-cse-2023-question-26</a></p>"
        }
      ]
    }
  ]
});
