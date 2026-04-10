window.__examLoadCallback({
  "title": "Compiler_Design - Compiler_Design - Slot 10",
  "duration": 47,
  "sections": [
    {
      "name": "Compiler_Design",
      "questions": [
        {
          "id": 1,
          "question": "<p>The correct matching for the following pairs is<br><br> \\(\\begin{array}{ll|ll} \\text{(A)}&amp;\\text{Activation record} &amp; \\text{(1)} &amp;\\text{Linking loader} \\\\ \\text{(B)} &amp;\\text{Location counter} &amp; \\text{(2)} &amp;\\text{Garbage collection} \\\\ \\text{(C)}&amp; \\text{Reference counts} &amp; \\text{(3)} &amp;\\text{Subroutine call} \\\\ \\text{(D)}&amp; \\text{Address relocation} &amp; \\text{(4)}&amp; \\text{Assembler} \\\\ \\end{array}\\) <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A-3 B-4 C-1 D-2</p>",
            "<b>B.</b> <p>A-4 B-3 C-1 D-2</p>",
            "<b>C.</b> <p>A-4 B-3 C-2 D-1</p>",
            "<b>D.</b> <p>A-3 B-4 C-2 D-1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A-3 B-4 C-2 D-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2746/gate1996-2-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>The grammar whose productions are<br>\n\\(\\langle\\text{stmt}\\rangle \\to\\text{ if id then } \\langle\\text{stmt}\\rangle\\)<br>\n\\(\\langle\\text{stmt}\\rangle\\to\\text{ if id then } \\langle\\text{stmt}\\rangle\\text{ else } \\langle \\text{stmt}\\rangle\\)<br>\n\\(\\langle\\text{stmt}\\rangle \\to\\text{ id }:=\\text{ id}\\)<br>\nis ambiguous because <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d } \\)<br>\nhas more than two parse trees</p>",
            "<b>B.</b> <p>the left most and right most derivations of the sentence<br>\\(\\text{\nif a then if b then c:= d } \\)<br>\ngive rise to different parse trees</p>",
            "<b>C.</b> <p>the sentence <br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas more than two parse trees</p>",
            "<b>D.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas two parse trees</p>"
          ],
          "correct_answer": "<b>D.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas two parse trees</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2739/gate1996-2-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The pass numbers for each of the following activities<br>\ni.   object code generation<br>\nii.  literals added to literal table<br>\niii. listing printed<br>\niv.  address resolution of local symbols that occur in a two pass assembler<br>\nrespectively are <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 2, 1, 2</p>",
            "<b>B.</b> <p>2, 1, 2, 1</p>",
            "<b>C.</b> <p>2, 1, 1, 2</p>",
            "<b>D.</b> <p>1, 2, 2, 2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2, 1, 2, 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2721/gate1996-1-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A shift reduce parser carries out the actions specified within braces immediately after reducing with the corresponding rule of grammar <br>\n\\(S \\rightarrow xxW \\;\\text{{print \"1\"}}\\)<br>\n\\(S \\rightarrow y \\;\\text{{print \"2\"}}\\)<br>\n\\(W \\rightarrow Sz\\; \\text{{print \"3\"}}\\)<br>\nWhat is the translation of \\(xxxxyzz\\) using the syntax directed translation scheme described by the above rules? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>23131</p>",
            "<b>B.</b> <p>11233</p>",
            "<b>C.</b> <p>11231</p>",
            "<b>D.</b> <p>33211</p>"
          ],
          "correct_answer": "<b>A.</b> <p>23131</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2622/gate1995-2-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A linker is given object modules for a set of programs that were compiled separately. What information need to be included in an object module? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Object code</p>",
            "<b>B.</b> <p>Relocation bits</p>",
            "<b>C.</b> <p>Names and locations of all external symbols defined in the object module</p>",
            "<b>D.</b> <p>Absolute addresses of internal symbols</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Names and locations of all external symbols defined in the object module</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2601/gate1995-1-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Generation of intermediate code based on an abstract machine model is useful in compilers because <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it makes implementation of lexical analysis and syntax analysis easier</p>",
            "<b>B.</b> <p>syntax-directed translations can be written for intermediate code generation</p>",
            "<b>C.</b> <p>it enhances the portability of the front end of the compiler</p>",
            "<b>D.</b> <p>it is not possible to generate code for real machines directly from high level language programs</p>"
          ],
          "correct_answer": "<b>C.</b> <p>it enhances the portability of the front end of the compiler</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2453/gate1994-1-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A part of the system software which under all circumstances must reside in the main memory is: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>text editor</p>",
            "<b>B.</b> <p>assembler</p>",
            "<b>C.</b> <p>linker</p>",
            "<b>D.</b> <p>loader</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>loader</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2295/gate1993-7-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A simple two-pass assembler does the following in the first pass: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It allocates space for the literals.</p>",
            "<b>B.</b> <p>It computes the total length of the program.</p>",
            "<b>C.</b> <p>It builds the symbol table for the symbols and their values.</p>",
            "<b>D.</b> <p>It generates code for all the load and store register instructions.</p>",
            "<b>E.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It allocates space for the literals.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2294/gate1993-7-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Which of the following statements is false ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An unambiguous grammar has same left most and right most derivation</p>",
            "<b>B.</b> <p>An LL(1) parser is a top-down parser</p>",
            "<b>C.</b> <p>LALR is more powerful than SLR</p>",
            "<b>D.</b> <p>An ambiguous grammar can never be LR(K) for any k</p>"
          ],
          "correct_answer": "<b>A.</b> <p>An unambiguous grammar has same left most and right most derivation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/711/gate2001-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>The process of assigning load addresses to the various parts of the program and\nadjusting the code and date in the program to reflect the assigned addresses is\ncalled <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Assembly</p>",
            "<b>B.</b> <p>Parsing</p>",
            "<b>C.</b> <p>Relocation</p>",
            "<b>D.</b> <p>Symbol resolution</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Relocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/710/gate2001-1-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Choose the correct alternatives (more than one may be correct ) and write the corresponding letters only:<br>Consider the SLR(1) and LALR(1)  parsing tables for a context free grammar. Which of the following statement is/are true? <br><br><strong>(GATE CSE 1992)</strong></p>",
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
          "id": 12,
          "question": "<p>Mention the pass number for each of the following activities that occur in a two pass assembler:\n<br><br>A. object code generation\n<br>B. literals added to literal table\n<br>C. listing printed\n<br>D. address resolution of local symbols <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 1 2 1</p>",
            "<b>B.</b> <p>1 1 1 2</p>",
            "<b>C.</b> <p>1 2 2 2</p>",
            "<b>D.</b> <p>1 2 1 2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2 1 2 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/579/gate1992-03-ii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Indicate all the true statements from the following: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Recursive descent parsing cannot be used for grammar with left recursion.</p>",
            "<b>B.</b> <p>The intermediate form for representing expressions which is best suited for code optimization is the postfix form.</p>",
            "<b>C.</b> <p>A programming language not supporting either recursion or pointer type does not need the support of dynamic memory allocation.</p>",
            "<b>D.</b> <p>Although C does not support call-by-name parameter passing, the effect can be correctly simulated in C</p>",
            "<b>E.</b> <p>No feature of Pascal typing violates strong typing in Pascal.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Recursive descent parsing cannot be used for grammar with left recursion.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/524/gate1991-03-x\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Choose the correct alternatives (more than one may be correct ) and write the corresponding letters only<br>A \"link editor\" is a program that: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>matches the parameters of the macro-definition with locations of the parameters of the macro call</p>",
            "<b>B.</b> <p>matches external names of one program with their location in other programs</p>",
            "<b>C.</b> <p>matches the parameters of subroutine definition with the location of parameters of subroutine call.</p>",
            "<b>D.</b> <p>acts as a link between text editor and the user</p>",
            "<b>E.</b> <p>acts as a link between compiler and the user program</p>"
          ],
          "correct_answer": "<b>B.</b> <p>matches external names of one program with their location in other programs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/519/gate1991-03-ix\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>In a compiler the module that checks every character of the source text is called: <br><br><strong>(GATE CSE 1988)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The code generator.</p>",
            "<b>B.</b> <p>The code optimiser.</p>",
            "<b>C.</b> <p>The lexical analyser.</p>",
            "<b>D.</b> <p>The syntax analyser.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The lexical analyser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80282/gate1987-1-xi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>An operator precedence parser is a <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Bottom-up parser.</p>",
            "<b>B.</b> <p>Top-down parser.</p>",
            "<b>C.</b> <p>Back tracking parser.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Bottom-up parser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80295/gate1987-1-xiv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>In a compiler the module that checks every character of the source text is called: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The code generator.</p>",
            "<b>B.</b> <p>The code optimiser.</p>",
            "<b>C.</b> <p>The lexical analyser.</p>",
            "<b>D.</b> <p>The syntax analyser.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The lexical analyser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80282/gate1987-1-xi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
