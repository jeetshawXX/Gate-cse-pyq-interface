window.__examLoadCallback({
  "title": "Compiler_Design - Syntax-directed_Translation",
  "duration": 36,
  "sections": [
    {
      "name": "Syntax-directed_Translation",
      "questions": [
        {
          "id": 1,
          "question": "<p>Given the following syntax-directed translation rules:\n<br><br>\n\\( \\text{Rule 1: } R \\rightarrow AB \\{ B.i = R.i - 1; A.i = B.i; R.i = A.i + 1; \\} \\)<br>\n\\( \\text{Rule 2: } P \\rightarrow CD \\{ P.i = C.i + D.i; D.i = C.i + 2; \\} \\)<br>\n\\( \\text{Rule 3: } Q \\rightarrow EF \\{ Q.i = E.i + F.i; \\} \\)\n<br><br>\nWhich ONE is the CORRECT option among the following? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Rule 1 is S-attributed and L-attributed;  Rule 2 is S-attributed and not L-attributed;  Rule 3 is neither S-attributed nor L-attributed.</p>",
            "<b>B.</b> <p>Rule 1 is neither S-attributed nor L-attributed;  Rule 2 is S-attributed and L-attributed;  Rule 3 is S-attributed and L-attributed.</p>",
            "<b>C.</b> <p>Rule 1 is neither S-attributed nor L-attributed;  Rule 2 is not S-attributed and is L-attributed;  Rule 3 is S-attributed and L-attributed.</p>",
            "<b>D.</b> <p>Rule 1 is S-attributed and not L-attributed;  Rule 2 is not S-attributed and is L-attributed;  Rule 3 is S-attributed and L-attributed.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Rule 1 is neither S-attributed nor L-attributed;  Rule 2 is not S-attributed and is L-attributed;  Rule 3 is S-attributed and L-attributed.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460823/gate-cse-2025-set-2-question-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which of the following statements is/are FALSE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An attribute grammar is a syntax-directed definition (SDD) in which the functions in the semantic rules have no side effects</p>",
            "<b>B.</b> <p>The attributes in a L-attributed definition cannot always be evaluated in a depth- first order</p>",
            "<b>C.</b> <p>Synthesized attributes can be evaluated by a bottom-up parser as the input is parsed</p>",
            "<b>D.</b> <p>All  L-attributed  definitions  based  on  LR(1)  grammar  can  be  evaluated  using  a bottom-up parsing strategy</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The attributes in a L-attributed definition cannot always be evaluated in a depth- first order</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422878/gate-cse-2024-set-2-question-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following syntax-directed definition (SDD).<br><br>\\(\n\\begin{array}{|l|l|}\n\\hline S \\rightarrow  DHTU &amp; \\{ S.val = D.val + H.val + T.val + U.val; \\} \\\\\n\\hline D \\rightarrow \"M\"D_1 &amp;  \\{ D.val =5+D_1 . val; \\} \\\\\n\\hline D \\rightarrow \\epsilon  &amp; \\{ D.val =-5 ;\\} \\\\\n\\hline H \\rightarrow \"L\" H_1 &amp; \\{ H.val =5 * 10+H_1 . val; \\} \\\\\n\\hline H \\rightarrow \\epsilon  &amp;  \\{ H.val =-10 ;\\} \\\\\n\\hline T \\rightarrow  \"C\"  T_1  &amp;  \\{T . v a l=5 * 100+T_1 . val; \\} \\\\\n\\hline T \\rightarrow \\epsilon  &amp;  \\{T . v a l=-5 ;\\}  \\\\\n\\hline U \\rightarrow  \"K\" &amp;  \\{  U.val =5 ;\\}  \\\\\n\\hline\n\\end{array}\n\\)<br><br>\nGiven \"MMLK\" as the input, which one of the following options is the CORRECT value computed by the SDD (in the attribute S.val)? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>45</p>",
            "<b>B.</b> <p>50</p>",
            "<b>C.</b> <p>55</p>",
            "<b>D.</b> <p>65</p>"
          ],
          "correct_answer": "<b>A.</b> <p>45</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422815/gate-cse-2024-set-1-question-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the syntax directed translation given by the following grammar and semantic rules. Here \\(N, I, F \\; and \\; B\\) are non-terminals. \\(N\\) is the starting non-terminal,\nand \\(\\#,0 \\; and \\; 1\\) are lexical tokens corresponding to input letters \\(\"\\#\",\"0\" \\; and \\; \"1\"\\),\nrespectively. \\(X.val\\) denotes the synthesized attribute (a numeric value) associated\nwith a non-terminal \\(X\\). \\(I_1\\) and \\(F_1\\) denote occurrences of \\(I\\) and \\(F\\) on the right hand\nside of a production, respectively. For the tokens \\(0\\) and \\(1\\), \\(0.val=0\\) and \\(1.val=1\\).<br><br>The value computed by the translation scheme for the input string<br>\\(\\begin{aligned}\nN &amp; \\rightarrow I \\# F &amp; N.val=I.val+F.val \\\\\nI &amp;\\rightarrow I_1B &amp; I.val = (2 I1.val) + B.val\\\\\nI &amp;\\rightarrow B&amp;I.val = B.val\\\\\nF &amp;\\rightarrow BF_1&amp; F.val = \\frac{1}{2}(B.val + F1.val)\\\\\nF &amp;\\rightarrow B&amp;  F.val = \\frac{1}{2} B.val\\\\\nB&amp;\\rightarrow 0&amp; B.val = 0.val\\\\\nB &amp;\\rightarrow 1&amp;B.val = 1.val\n\\end{aligned} \\)  <br>\\(10\\# 011\\)<br><br>is ____ (Rounded off to three decimal places) <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.374",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399261/gate-cse-2023-question-50#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following ANSI C program:<pre><code>int main () {\n    Integer x;\n    return 0;\n} </code></pre>  Which one of the following phases in a seven-phase C compiler will throw an error? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Lexical analyzer</p>",
            "<b>B.</b> <p>Syntax analyzer</p>",
            "<b>C.</b> <p>Semantic analyzer</p>",
            "<b>D.</b> <p>Machine dependent optimizer</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Semantic analyzer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357537/gate-cse-2021-set-2-question-3#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following grammar (that admits a series of declarations, followed by expressions) and the associated syntax directed translation (SDT) actions, given as pseudo-code<br><br>\\(\\begin{array}{lll} P &amp; \\rightarrow &amp; D^* E^* \\\\ D &amp; \\rightarrow &amp; \\textsf{int ID} \\{ \\text{record that } \\textsf{ID.} \\text{lexeme is of type} \\textsf{ int\\}} \\\\ D &amp; \\rightarrow &amp; \\textsf{bool ID} \\{ \\text{record that } \\textsf{ID.} \\text{lexeme is of type} \\textsf{ bool\\}} \\\\ E&amp; \\rightarrow &amp; E_1 +E_2 \\{ \\text{check that } E_1. \\text{type}=E_2. \\text{type} = \\textsf{int}; \\text{set } E.\\text{type }:= \\textsf{int} \\} \\\\ E &amp; \\rightarrow &amp; !E_1 \\{ \\text{check that } E_1. \\text{type} = \\textsf{bool}; \\text{ set } E.\\text{type} := \\textsf{bool} \\} \\\\ E &amp; \\rightarrow &amp; \\textsf{ID} \\{ \\text{set } E. \\text{type } := \\textsf{int} \\} \\end{array}\\)\n<br><br>\nWith respect to the above grammar, which one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The actions can be used to correctly type-check any syntactically correct program</p>",
            "<b>B.</b> <p>The actions can be used to type-check syntactically correct integer variable declarations and integer expressions</p>",
            "<b>C.</b> <p>The actions can be used to type-check syntactically correct boolean variable declarations and boolean expressions.</p>",
            "<b>D.</b> <p>The actions will lead to an infinite loop</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The actions can be used to type-check syntactically correct integer variable declarations and integer expressions</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357425/gate-cse-2021-set-1-question-26#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following grammar and the semantic actions to support the inherited type declaration attributes. Let \\(X_1,X_2,X_3,X_4,X_5 \\; and \\; X_6\\) be the placeholders for the non-terminals D, T, L or \\(L_1\\) in the following table: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Syntax-directed_Translation\\q36_b81fa569.jpg\"><br> Which one of the following are the appropriate choices for \\(X_1,X_2,X_3 \\; and \\; X_4\\)? <br><br><strong>(GATE CSE 2019)</strong></p>",
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
          "question": "<p>Consider the following Java code fragment:<br><pre><code> public class While\n{\n    public void loop()\n    {\n        int x = 0;\n        while(1)\n        {\n            System.out.println(\"x plus one is\" +(x+1));\n        }\n    }\n}</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is syntax error in line no. 1</p>",
            "<b>B.</b> <p>There is syntax errors in line nos. 1 &amp; 6</p>",
            "<b>C.</b> <p>There is syntax error in line no. 8</p>",
            "<b>D.</b> <p>There is syntax error in line no. 6</p>"
          ],
          "correct_answer": "<b>D.</b> <p>There is syntax error in line no. 6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/54121/isro2014-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which of the following statements is FALSE? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>In statically typed language, each variable in a program has a fixed type</p>",
            "<b>B.</b> <p>In un-typed languages, values do not have any types</p>",
            "<b>C.</b> <p>In dynamically typed languages, variables have no types</p>",
            "<b>D.</b> <p>In all statically typed languages, each variable in a program is associated\nwith values of only a single type during the execution of the program</p>"
          ],
          "correct_answer": "<b>C.</b> <p>In dynamically typed languages, variables have no types</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/914/gate2003-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>In a bottom-up evaluation of a syntax directed definition, inherited attributes can <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>always be evaluated</p>",
            "<b>B.</b> <p>be evaluated if the definition is L-attributed</p>",
            "<b>C.</b> <p>be evaluated only if the definition has synthesized attributes</p>",
            "<b>D.</b> <p>never be evaluated</p>"
          ],
          "correct_answer": "<b>B.</b> <p>be evaluated if the definition is L-attributed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/908/gate2003-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Type checking is normally done during <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>lexical analysis</p>",
            "<b>B.</b> <p>syntax analysis</p>",
            "<b>C.</b> <p>syntax directed translation</p>",
            "<b>D.</b> <p>code optimization</p>"
          ],
          "correct_answer": "<b>C.</b> <p>syntax directed translation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1664/gate1998-1-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
        }
      ]
    }
  ]
});
