window.__examLoadCallback({
  "title": "Database_Management_System - Tuple_Calculus",
  "duration": 28,
  "sections": [
    {
      "name": "Tuple_Calculus",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider two relations describing teams and players in a sports league:\n<br><br>\n\\(teams(tid, tname):tid, tname \\) are team-id and team-name, respectively\n<br>    \\(players(pid, pname, tid):pid,pname,tid\\) denote player-id, player-name and the team-id of the player, respectively\n<br><br>\nWhich ONE of the following tuple relational calculus queries returns the name of the players who play for the team having name as 'MI'? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\( \\{ p.pname \\mid p \\in players \\wedge \\exists t ( t \\in teams \\wedge p.tid = t.tid \\wedge t.tname = 'MI' ) \\} \\)</p>",
            "<b>B.</b> <p>\\( \\{ p.pname \\mid p \\in teams \\wedge \\exists t ( t \\in players \\wedge p.tid = t.tid \\wedge t.tname = 'MI' ) \\} \\)</p>",
            "<b>C.</b> <p>\\( \\{ p.pname \\mid p \\in players \\wedge \\exists t ( t \\in teams \\wedge t.tname = 'MI' ) \\} \\)</p>",
            "<b>D.</b> <p>\\( \\{ p.pname \\mid p \\in teams \\wedge \\exists t ( t \\in players \\wedge t.tname = 'MI' ) \\} \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\( \\{ p.pname \\mid p \\in players \\wedge \\exists t ( t \\in teams \\wedge p.tid = t.tid \\wedge t.tname = 'MI' ) \\} \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460051/gate-cse-2025-set-1-question-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following two relations, \\(R(A, B) \\) and \\(S(A, C) \\) :<br>\\(\\boldsymbol{R}\n\\begin{array}{|c|c|}\n\\hline \\boldsymbol{A}  &amp; \\boldsymbol{B}  \\\\\n\\hline 10 &amp; 20 \\\\\n\\hline 20 &amp; 30 \\\\\n\\hline 30 &amp; 40 \\\\\n\\hline 30 &amp; 50 \\\\\n\\hline 50 &amp; 95 \\\\\n\\hline\n\\end{array}\\)<br><br> <br>\\(\\boldsymbol{S}\n\\begin{array}{|c|c|}\n\\hline \\boldsymbol{A}  &amp; \\boldsymbol{C}  \\\\\n\\hline 10 &amp; 90 \\\\\n\\hline 30 &amp; 45 \\\\\n\\hline 40 &amp; 80 \\\\\n\\hline\n\\end{array}\n\\)<br>\nThe total number of tuples obtained by evaluating the following expression \\( \\sigma_{B \\lt C}\\left(R \\bowtie_{R . A=S . A} S\\right) \\)\nis ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422817/gate-cse-2024-set-1-question-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A relation \\(r(A,B)\\) in a relational database has 1200 tuples. The attribute \\(A\\) has integer values ranging from 6 to 20, and the attribute \\(B\\) has integer values ranging from 1 to 20. Assume that the attributes \\(A\\) and \\(B\\) are independently distributed.\n<br><br>\nThe estimated number of tuples in the output of \\(\\sigma _{(A &gt; 10)\\vee(B=18)}(r)\\) is ____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "205",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357428/gate-cse-2021-set-1-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider a database that has the relation schemas EMP(EmpId, EmpName, DepId) and\nDEPT(DeptName, DeptId). Note that the DeptId can be permitted to be NULL in the relation\nEMP. Consider the following queries on the database expressed in tuple relational calculus.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Tuple_Calculus\\q35_fb6f6bf4.jpg\"><br>\nWhich of the above queries are safe? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(I) and (II) only</p>",
            "<b>B.</b> <p>(I) and (III) only</p>",
            "<b>C.</b> <p>(II) and (III) only</p>",
            "<b>D.</b> <p>(I), (II) and (III)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(I), (II) and (III)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118324/gate2017-1-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Let R and S be relational schemes such that R={a,b,c} and S={c}. Now consider\nthe following queries on the database: <br> \\(I.\\pi _{R-S}(r)-\\pi_{R-S}(\\pi_{R-S}(r) \\times  S -\\pi_{R-S,S}(r))\\)  <br>  \\( II.\\{t|t\\in \\pi _{R-S}(r)\\wedge \\forall u \\in s (\\exists v \\in  r(u=v[s]\\wedge t=v[R-S]))\\} \\)  <br>  \\( III.\\{t|t\\in \\pi _{R-S}(r)\\wedge \\forall v\\in r(\\exists u\\in s(u=v[s]\\wedge t=v[R-S]))\\}\\)  <br> IV. Select R.a, R.b\nFrom R,S\nWhere R.c=S.c <br><br>\nWhich of the above queries are equivalent? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II</p>",
            "<b>B.</b> <p>I and III</p>",
            "<b>C.</b> <p>II and IV</p>",
            "<b>D.</b> <p>III and IV</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I and II</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1331/gate2009-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following tuple relational calculus expression(s) is/are equivalent to\n\\(\\forall t \\in r(P(t))\\)? <br>I. \\(\\neg \\exists t \\in r(P(t)) \\)<br> II. \\( \\neg t \\notin r(P(t)) \\)<br> III. \\( \\neg \\exists t \\in  r(\\neg P(t)) \\)<br>  IV. \\(\\exists t \\in r(\\neg P(t))\\) <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>III and IV only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/413/gate2008-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the relation employee(name, sex, supervisorName) with name as the\nkey. supervisorName gives the name of the supervisor of the employee under\nconsideration. What does the following Tuple Relational Calculus query produce? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Tuple_Calculus\\q60_8949e2c3.jpg\"><br> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Names of employees with a male supervisor.</p>",
            "<b>B.</b> <p>Names of employees with no immediate male subordinates</p>",
            "<b>C.</b> <p>Names of employees with no immediate female subordinates.</p>",
            "<b>D.</b> <p>Names of employees with a female supervisor</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Names of employees with no immediate female subordinates.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1258/gate2007-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which of the following relational query languages have the same expressive power?<br>\nI.   Relational algebra<br>\nII.  Tuple relational calculus restricted to safe expressions<br>\nIII. Domain relational calculus restricted to safe expressions <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II and III only</p>",
            "<b>B.</b> <p>I and II only</p>",
            "<b>C.</b> <p>I and III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I, II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3554/gate2006-it-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>The relational algebra expression equivalent to the following tuple calculus expression: <br>\n\\(\\left\\{t \\mid t \\in r \\land \\left(t[A] = 10 \\land t[B]=20\\right)\\right\\}\\) is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma_{(A=10 \\lor B=20)} (r)\\)</p>",
            "<b>B.</b> <p>\\(\\sigma_{(A=10)} (r) \\cup \\sigma_{(B=20)} (r)\\)</p>",
            "<b>C.</b> <p>\\(\\sigma_{(A=10)} (r) \\cap \\sigma_{(B=20)} (r)\\)</p>",
            "<b>D.</b> <p>\\(\\sigma_{(A=10)} (r) - \\sigma_{(B=20)} (r)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\sigma_{(A=10)} (r) \\cap \\sigma_{(B=20)} (r)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1472/gate1999-1-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which of the following relational calculus expressions is not safe ? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Tuple_Calculus\\q49_d1539589.jpg\"> <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/742/gate2001-2-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
