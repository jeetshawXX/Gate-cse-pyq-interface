window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 16",
  "duration": 25,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following program<pre><code> Program P2 \n    var n: int: \n     procedure W(var x: int) \n     begin \n         x=x+1; \n         print x;   \n     end \n\n     procedure D \n     begin  \n         var n: int; \n         n=3; \n         W(n);  \n     end \nbegin //beginP2 \n  n=10; \n  D; \nend </code></pre>\nIf the language has dynamic scooping and parameters are passed by reference,\nwhat will be printed by the program ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>11</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/737/gate2001-2-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following three functions :\n<br>[P1]<pre><code>  int * g (void) \n{ \n  int x= 10; \n  return (&amp;x); \n}</code></pre>\n[P2]<pre><code>   int * g (void) \n{ \n  int * px; \n  *px= 10; \n  return px; \n} </code></pre>\n[P3]<pre><code>  int *g (void) \n{ \n  int *px; \n  px = (int *) malloc (sizeof(int)); \n  *px= 10; \n  return px; \n} </code></pre>\nWhich of the above three functions are likely to cause problems with pointers ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only P3</p>",
            "<b>B.</b> <p>Only P1 and P3</p>",
            "<b>C.</b> <p>Only P1 and P2</p>",
            "<b>D.</b> <p>P1, P2 and P3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Only P1 and P2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/736/gate2001-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>What is printed by the print statements in the program P1 assuming call by\nreference parameter passing ?<pre><code> Program P1()\n{\n   x = 10;\n   y = 3;\n   func1(y,x,x);\n   print x;\n   print y;\n}\nfunc1(x,y,z)\n{\n   y = y+4;\n   z = x+y+z;\n}\n</code></pre> <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10, 3</p>",
            "<b>B.</b> <p>31, 3</p>",
            "<b>C.</b> <p>27, 7</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>31, 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/735/gate2001-2-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>What type of parameter passing mechanism (call-by-value, call-by-reference, call-by-name, or-by-value result) is the following sequence of actions trying to implement for a procedure call P(A[i]) where P (i:integer) is a procedure and A is an integer array? <br>Is the implementation correct? Explain and correct it if necessary. You are supposed to make only small changes\n<br><br>Create a new local variable, say z.<br>\nAssign to z the value of A[i].<br>\nExecute the body of P using z for A[i]<br>\nSet A[i] to z.? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>call-by-value</p>",
            "<b>B.</b> <p>call-by-reference</p>",
            "<b>C.</b> <p>call-by-name</p>",
            "<b>D.</b> <p>call-by-value result</p>"
          ],
          "correct_answer": "<b>D.</b> <p>call-by-value result</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/589/gate1992-10a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Consider the following Pascal function:<br><pre><code>Function X(M:integer):integer;\nVar i:integer;\nBegin\n    i := 0;\n    while i*i &lt; M\n    do i:= i+1\n    X := i\n end </code></pre> <br>The function call X(N), if N is positive, will return <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\lfloor\\sqrt N \\rfloor\\)</p>",
            "<b>B.</b> <p>\\(\\lfloor\\sqrt N \\rfloor\\)</p>",
            "<b>C.</b> <p>\\(\\lceil \\sqrt N \\rceil\\)</p>",
            "<b>D.</b> <p>\\(\\lceil \\sqrt N \\rceil +1\\)</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\lceil \\sqrt N \\rceil\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/523/gate1991-03-viii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>An unrestricted use of the \"go to\" statement is harmful because of which of the following reason (s): <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It makes it more difficult to verify programs.</p>",
            "<b>B.</b> <p>It makes programs more inefficient.</p>",
            "<b>C.</b> <p>It makes it more difficult to modify existing programs.</p>",
            "<b>D.</b> <p>It results in the compiler generating longer machine code.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It makes it more difficult to verify programs.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87095/gate1989-3-i\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>In which of the following case(s) is it possible to obtain different results for call-by-reference and call-by-name parameter passing? <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Passing an expression as a parameter</p>",
            "<b>B.</b> <p>Passing an array as a parameter</p>",
            "<b>C.</b> <p>Passing a pointer as a parameter</p>",
            "<b>D.</b> <p>Passing as array element as a parameter</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Passing an expression as a parameter</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37264/gate1989-3-viii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>For the program given below what will be printed by the write statements marked (1) and (2) in the program if the variables are dynamically scoped?<br><pre><code> Var x, y:interger; \nprocedure P(n:interger);\nbegin\n     x := (n+2)/(n-3);\nend;\n\nprocedure Q \nVar x, y:interger;\nbegin   \n    x:=3;\n    y:=4; \n    P(y);\n    Write(x);           __(1)\nend;\n \nbegin\n    x:=7;\n    y:=8;\n    Q; \n    Write(x);           __(2)\nend.</code></pre> <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3, 6</p>",
            "<b>B.</b> <p>6, 7</p>",
            "<b>C.</b> <p>3, 7</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>6, 7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80374/gate1987-1-xx\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Study the following program written in a block-structured language:<br><pre><code> Var x, y:interger; \nprocedure P(n:interger);\nbegin\n     x:=(n+2)/(n-3);\nend;\n\nprocedure Q \nVar x, y:interger;\nbegin   \n    x:=3;\n    y:=4; \n    P(y);\n    Write(x)          __(1)\nend;\n \nbegin\n    x:=7;\n    y:=8;\n    Q; \nWrite(x);             __(2) \nend.</code></pre> <br>\nWhat will be printed by the write statements marked (1) and (2) in the program if the variables are statically scoped? <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3, 6</p>",
            "<b>B.</b> <p>6, 7</p>",
            "<b>C.</b> <p>3, 7</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3, 6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80373/gate1987-1-xix\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
