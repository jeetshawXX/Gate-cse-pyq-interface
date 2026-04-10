window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System",
  "duration": 786,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following relational schema:<br><br>\n\\(\n\\text{Students} (\\text{\\underline{rollno: integer,} name: string, age: integer, cgpa: real})\n\\)<br>\n\\(\n\\text{Courses} (\\text{\\underline{courseno: integer,} cname: string, credits: integer})\n\\)<br>\n\\(\n\\text{Enrolled} (\\text{ \\underline{rollno: integer,} \\underline{courseno: integer,} grade: string})\n\\)<br><br>\nWhich of the following options is/are correct SQL query/queries to retrieve the names of the students enrolled in course number (i.e. courseno) 1470? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>SELECT S.name FROM Students S WHERE EXISTS (SELECT * FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno)</p>",
            "<b>B.</b> <p>SELECT S.name FROM Students S WHERE SIZEOF (SELECT * FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno) &gt; 0</p>",
            "<b>C.</b> <p>SELECT S.name FROM Students S WHERE 0 &lt; (SELECT COUNT(*) FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno)</p>",
            "<b>D.</b> <p>SELECT S.name FROM Students S NATURAL JOIN Enrolled E WHERE E.courseno = 1470</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>SELECT S.name FROM Students S WHERE EXISTS (SELECT * FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno)</p>",
            "<b>C.</b> <p>SELECT S.name FROM Students S WHERE 0 &lt; (SELECT COUNT(*) FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno)</p>",
            "<b>D.</b> <p>SELECT S.name FROM Students S NATURAL JOIN Enrolled E WHERE E.courseno = 1470</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460849/gate-cse-2025-set-2-question-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the database transactions \\(T1 \\) and \\(T2 \\), and data items \\(X \\) and \\(Y \\). Which of the schedule(s) is/are conflict serializable?\n<br><br>\n\\( \\begin{array}{|l|}\n\\hline\n\\textbf{Transaction T1} \\\\ \\hline\nR1(X) \\\\ \\hline\nW1(Y) \\\\ \\hline\nR1(X) \\\\ \\hline\nW1(X) \\\\ \\hline\n\\text{COMMIT(T1)} \\\\ \\hline\n\\end{array}\n\\)\n<br><br>\n\\( \\begin{array}{|l|}\n\\hline\n\\textbf{Transaction T2} \\\\ \\hline\nW2(X) \\\\ \\hline\nW2(Y) \\\\ \\hline\n\\text{COMMIT(T2)} \\\\ \\hline\n\\end{array}\n\\) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(R1(X), W2(X), W1(Y), W2(Y), R1(X), W1(X), \\text{COMMIT}(T2), \\text{COMMIT}(T1) \\)</p>",
            "<b>B.</b> <p>\\(W2(X), R1(X), W2(Y), W1(Y), R1(X), \\text{COMMIT}(T2), W1(X), \\text{COMMIT}(T1) \\)</p>",
            "<b>C.</b> <p>\\(R1(X), W1(Y), W2(X), W2(Y), R1(X), W1(X), \\text{COMMIT}(T1), \\text{COMMIT}(T2) \\)</p>",
            "<b>D.</b> <p>\\(W2(X), R1(X), W1(Y), W2(Y), R1(X), \\text{COMMIT}(T2), W1(X), \\text{COMMIT}(T1) \\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(W2(X), R1(X), W2(Y), W1(Y), R1(X), \\text{COMMIT}(T2), W1(X), \\text{COMMIT}(T1) \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460850/gate-cse-2025-set-2-question-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following relational schema along with all the functional dependencies that hold on them.  <br><br>\n\\(\nR1(A, B, C, D, E): \\{ D \\to E, EA \\to B, EB \\to C \\}\n\\)<br>\n\\(\nR2(A, B, C, D): \\{ A \\to D, A \\to B, C \\to A \\}\n\\)<br><br>\nWhich of the following statement(s) is/are TRUE? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(R1 \\) is in 3NF</p>",
            "<b>B.</b> <p>\\(R2 \\) is in 3NF</p>",
            "<b>C.</b> <p>\\(R1 \\) is NOT in 3NF</p>",
            "<b>D.</b> <p>\\(R2 \\) is NOT in 3NF</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>\\(R1 \\) is NOT in 3NF</p>",
            "<b>D.</b> <p>\\(R2 \\) is NOT in 3NF</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460799/gate-cse-2025-set-2-question-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>An audit of a banking transactions system has found that on an earlier occasion, two joint holders of account \\(A \\) attempted simultaneous transfers of Rs. 10000 each from account \\(A \\) to account \\(B \\). Both transactions read the same value, Rs. 11000, as the initial balance in \\(A \\) and were allowed to go through. \\(B \\) was credited Rs. 10000 twice. \\(A \\) was debited only once and ended up with a balance of Rs. 1000.\n<br>\nWhich of the following properties is/are certain to have been violated by the system? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Atomicity</p>",
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>",
            "<b>D.</b> <p>Durability</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460818/gate-cse-2025-set-2-question-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following database tables of a sports league.\n<br><br>\nplayer(pid,pname,age)\n<br>coach(cid,cname)\n<br>team(tid,tname,city,cid)\n<br>members(pid,tid)\n<br><br>\nAn instance of the table and an SQL query are given.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q45_06d1065f.webp\"><br>\nThe value returned by the given SQL query is _________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "26",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460035/gate-cse-2025-set-1-question-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a relational schema \\( team(name, city, owner) \\), with functional dependencies  \\(\\{ name \\to city \\), \\( name \\to owner \\} \\) .\n<br><br>\nThe relation \\( team \\) is decomposed into two relations, \\( t_1(name, city) \\) and \\( t_2(name, owner) \\). Which of the following statement(s) is/are TRUE? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The relation \\( team \\) is NOT in BCNF.</p>",
            "<b>B.</b> <p>The relations \\( t_1 \\) and \\( t_2 \\) are in BCNF.</p>",
            "<b>C.</b> <p>The decomposition constitutes a lossless join.</p>",
            "<b>D.</b> <p>The relation \\(team \\)is NOT in 3NF.</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>The relations \\( t_1 \\) and \\( t_2 \\) are in BCNF.</p>",
            "<b>C.</b> <p>The decomposition constitutes a lossless join.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460043/gate-cse-2025-set-1-question-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>A schedule of three database transactions \\(T_1\\), \\(T_2\\), and \\(T_3\\) is shown. \\(R_i(A)\\) and \\(W_i(A)\\) denote read and write of data item \\(A\\) by transaction \\(T_i\\), \\(i = 1, 2, 3\\). The transaction \\(T_1\\) aborts at the end. Which other transaction(s) will be required to be rolled back?\n<br><br> \\( R_1(X) \\quad W_1(Y) \\quad R_2(X) \\quad R_2(Y) \\quad R_3(Y) \\quad ABORT(T_1)\\) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only \\(T_2\\)</p>",
            "<b>B.</b> <p>Only \\(T_3\\)</p>",
            "<b>C.</b> <p>Both \\(T_2\\) and \\(T_3\\)</p>",
            "<b>D.</b> <p>Neither \\(T_2\\) nor \\(T_3\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both \\(T_2\\) and \\(T_3\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460075/gate-cse-2025-set-1-question-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A functional dependency \\(F:X \\rightarrow Y\\) is termed as a useful functional dependency if\nand only if it satisfies all the following three conditions:<br><br>\n\\(X\\) is not the empty set.\n\\(Y\\) is not the empty set.\nIntersection of \\(X\\) and \\(Y\\) is the empty set.<br><br>\nFor a relation \\(R\\) with 4 attributes, the total number of possible useful functional\ndependencies is ______ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422851/gate-cse-2024-set-2-question-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>The relation schema, Person(pid,city), describes the city of residence for\nevery person uniquely identified by pid. The following relational algebra operators\nare available: selection, projection, cross product, and rename.<br><br>\nTo find the list of cities where at least 3 persons reside, using the above operators,\nthe minimum number of cross product operations that must be used is <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422862/gate-cse-2024-set-2-question-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following statements about the Two Phase Locking (2PL) protocol is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2PL permits only serializable schedules</p>",
            "<b>B.</b> <p>With 2PL, a transaction always locks the data item being read or written just before every operation and always releases the lock just after the operation</p>",
            "<b>C.</b> <p>With 2PL, once a lock is released on any data item inside a transaction, no more locks on any data item can be obtained inside that transaction</p>",
            "<b>D.</b> <p>A deadlock is possible with 2PL</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2PL permits only serializable schedules</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422880/gate-cse-2024-set-2-question-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which of the following file organizations is/are I/O efficient for the scan operation in DBMS? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Sorted</p>",
            "<b>B.</b> <p>Heap</p>",
            "<b>C.</b> <p>Unclustered tree index</p>",
            "<b>D.</b> <p>Unclustered hash index</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Sorted</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422881/gate-cse-2024-set-2-question-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>In the context of owner and weak entity sets in the ER (Entity-Relationship) data model, which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The weak entity set MUST have total participation in the identifying relationship</p>",
            "<b>B.</b> <p>The owner entity set MUST have total participation in the identifying relationship</p>",
            "<b>C.</b> <p>Both weak and owner entity sets MUST have total participation in the identifying relationship</p>",
            "<b>D.</b> <p>Neither weak entity set nor owner entity set MUST have total participation in the identifying relationship</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The weak entity set MUST have total participation in the identifying relationship</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422887/gate-cse-2024-set-2-question-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Once the DBMS informs the user that a transaction has been successfully\ncompleted, its effect should persist even if the system crashes before all its changes\nare reflected on disk. This property is called <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>durability</p>",
            "<b>B.</b> <p>atomicity</p>",
            "<b>C.</b> <p>consistency</p>",
            "<b>D.</b> <p>isolation</p>"
          ],
          "correct_answer": "<b>A.</b> <p>durability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422888/gate-cse-2024-set-2-question-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following read-write schedule \\( S \\) over three transactions \\( T_1, T_2 \\), and \\( T_3 \\), where the subscripts in the schedule indicate transaction IDs:\n<br> <br>\\(\nS: r_1(z) ; w_1(z) ; r_2(x) ; r_3(y) ; w_3(y) ; r_2(y) ; w_2(x) ; w_2(y) ;\n\\) <br><br>Which of the following transaction schedules is/are conflict equivalent to \\( S \\) ? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\( T_1 T_2 T_3 \\)</p>",
            "<b>B.</b> <p>\\( T_1 T_3 T_2 \\)</p>",
            "<b>C.</b> <p>\\( T_3 T_2 T_1 \\)</p>",
            "<b>D.</b> <p>\\( T_3 T_1 T_2 \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\( T_1 T_3 T_2 \\)</p>",
            "<b>C.</b> <p>\\( T_3 T_2 T_1 \\)</p>",
            "<b>D.</b> <p>\\( T_3 T_1 T_2 \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422806/gate-cse-2024-set-1-question-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>The symbol \\( \\rightarrow \\) indicates functional dependency in the context of a relational database. Which of the following options is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\( (X, Y) \\rightarrow(Z, W) \\text { implies } X \\rightarrow(Z, W)  \\)</p>",
            "<b>B.</b> <p>\\( (X, Y) \\rightarrow(Z, W) \\text { implies }(X, Y) \\rightarrow Z  \\)</p>",
            "<b>C.</b> <p>\\( ((X, Y) \\rightarrow Z \\text { and } W \\rightarrow Y) \\text { implies }(X, W) \\rightarrow Z  \\)</p>",
            "<b>D.</b> <p>\\( (X \\rightarrow Y \\text { and } Y \\rightarrow Z) \\text { implies } X \\rightarrow Z \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\( (X, Y) \\rightarrow(Z, W) \\text { implies }(X, Y) \\rightarrow Z  \\)</p>",
            "<b>C.</b> <p>\\( ((X, Y) \\rightarrow Z \\text { and } W \\rightarrow Y) \\text { implies }(X, W) \\rightarrow Z  \\)</p>",
            "<b>D.</b> <p>\\( (X \\rightarrow Y \\text { and } Y \\rightarrow Z) \\text { implies } X \\rightarrow Z \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422808/gate-cse-2024-set-1-question-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Consider the following two relations, \\(R(A, B) \\) and \\(S(A, C) \\) :<br>\\(\\boldsymbol{R}\n\\begin{array}{|c|c|}\n\\hline \\boldsymbol{A}  &amp; \\boldsymbol{B}  \\\\\n\\hline 10 &amp; 20 \\\\\n\\hline 20 &amp; 30 \\\\\n\\hline 30 &amp; 40 \\\\\n\\hline 30 &amp; 50 \\\\\n\\hline 50 &amp; 95 \\\\\n\\hline\n\\end{array}\\)<br><br> <br>\\(\\boldsymbol{S}\n\\begin{array}{|c|c|}\n\\hline \\boldsymbol{A}  &amp; \\boldsymbol{C}  \\\\\n\\hline 10 &amp; 90 \\\\\n\\hline 30 &amp; 45 \\\\\n\\hline 40 &amp; 80 \\\\\n\\hline\n\\end{array}\n\\)<br>\nThe total number of tuples obtained by evaluating the following expression \\( \\sigma_{B \\lt C}\\left(R \\bowtie_{R . A=S . A} S\\right) \\)\nis ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422817/gate-cse-2024-set-1-question-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Which of the following statements about a relation R in first normal form (1NF)\nis/are TRUE ? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>R can have a multi-attribute key</p>",
            "<b>B.</b> <p>R cannot have a foreign key</p>",
            "<b>C.</b> <p>R cannot have a composite attribute</p>",
            "<b>D.</b> <p>R cannot have more than one candidate key</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>R can have a multi-attribute key</p>",
            "<b>C.</b> <p>R cannot have a composite attribute</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422830/gate-cse-2024-set-1-question-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Let S be the specification: \"Instructors teach courses. Students register for courses.\nCourses are allocated classrooms. Instructors guide students.\" Which one of the\nfollowing ER diagrams CORRECTLY represents S? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q10_4a9e0516.webp\"><br> <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i)</p>",
            "<b>B.</b> <p>(ii)</p>",
            "<b>C.</b> <p>(iii)</p>",
            "<b>D.</b> <p>(iv)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(iv)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422832/gate-cse-2024-set-1-question-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Consider a database of fixed-length records, stored as an ordered file. The database\nhas 25,000 records, with each record being 100 bytes, of which the primary key\noccupies 15 bytes. The data file is block-aligned in that each data record is fully\ncontained within a block. The database is indexed by a primary index file, which\nis also stored as a block-aligned ordered file. The figure below depicts this indexing\nscheme.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q52_44be1c2f.jpg\"><br>Suppose the block size of the file system is 1024 bytes, and a pointer to a block\noccupies 5 bytes. The system uses binary search on the index file to search for a\nrecord with a given key. You may assume that a binary search on an index file of\n\\(b\\) blocks takes  \\(\\left \\lceil \\log_2 b \\right \\rceil \\)  block accesses in the worst case.<br>\nGiven a key, the number of block accesses required to identify the block in the data\nfile that may contain a record with the key, in the worst case, is _____ <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399259/gate-cse-2023-question-52#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Consider the following table named Student in a relational database. The primary\nkey of this table is rollNum.<br>\\(\\begin{array}{|c|c|c|c|}\n\\hline \\\\\nrollNum&amp;name&amp;gender&amp;marks \\\\ \\hline\n1&amp;Naman&amp;M&amp;62\\\\ \\hline\n2&amp;Aliya&amp;F&amp;70 \\\\ \\hline\n3&amp;Aliya &amp;F&amp;80 \\\\ \\hline\n4&amp;James&amp;M&amp;82\\\\ \\hline\n5&amp;Swati&amp;F&amp;65\\\\ \\hline\n\\end{array} \\)  <br>The SQL query below is executed on this database.<br><pre><code>\nSELECT *\nFROM Student\nWHERE gender = 'F' AND\n marks &gt; 65;\n</code></pre><br>The number of rows returned by the query is ______ <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399260/gate-cse-2023-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Which one of the options given below refers to the degree (or arity) of a relation in\nrelational database systems? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Number of attributes of its relation schema.</p>",
            "<b>B.</b> <p>Number of tuples stored in the relation.</p>",
            "<b>C.</b> <p>Number of entries in the relation.</p>",
            "<b>D.</b> <p>Number of distinct domains of its relation schema.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Number of attributes of its relation schema.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399306/gate-cse-2023-question-6#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Consider the relational database with the following four schemas and their respective instances.<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q46_acaeb162.jpg\"><br>The number of rows returned by the above SQL query is ___ <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371890/Gate-cse-2022-question-46#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Let \\(R_i(z)\\) and \\(W_i(z)\\) denote read and write operations on a data element \\(z\\) by a transaction \\(T_i\\), respectively. Consider the schedule \\(S\\) with four transactions.<br><br>S: \\(R_4(x)R_2(x)R_3(x)R_1(y)W_1(y)W_2 (x)W_3 (y)R_4(y)\\) <br><br>Which one of the following serial schedules is conflict equivalent to \\(S\\)? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T_1\\rightarrow T_3\\rightarrow T_4\\rightarrow T_2\\)</p>",
            "<b>B.</b> <p>\\(T_1\\rightarrow T_4\\rightarrow T_3\\rightarrow T_2\\)</p>",
            "<b>C.</b> <p>\\(T_4\\rightarrow T_1\\rightarrow T_3\\rightarrow T_2\\)</p>",
            "<b>D.</b> <p>\\(T_3\\rightarrow T_1\\rightarrow T_4\\rightarrow T_2\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(T_1\\rightarrow T_3\\rightarrow T_4\\rightarrow T_2\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/371907/Gate-cse-2022-question-29#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Consider a relation \\(R( A, B, C, D, E )\\) with the following three functional dependencies.<br>\\(AB \\rightarrow C;BC  \\rightarrow D; C \\rightarrow E;\\)<br>\nThe number of superkeys in the relation \\(R\\) is . <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371915/Gate-cse-2022-question-21#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>Consider the following three relations in a relational database.<br>\\(Employee(eId, Name), Brand (bId, bName), Own(eId ,bId)\\)<br>Which of the following relational algebra expressions return the set of \\(eIds\\) who own all the brands? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(  \\Pi _{eId}(\\Pi _{eId,bId}(Own)/\\Pi _{bId}(Brand))\\)</p>",
            "<b>B.</b> <p>\\(  \\Pi _{eId}(Own)-\\Pi _{eId}\\left ((\\Pi _{eId}(Own) \\times \\Pi _{bId}(Brand) )-\\Pi _{eId,bId}(Own)  \\right )\\)</p>",
            "<b>C.</b> <p>\\(\\Pi _{eId}(\\Pi _{eId,bId}(Own)/\\Pi _{bId}(Own))  \\)</p>",
            "<b>D.</b> <p>\\( \\Pi _{eId}\\left ((\\Pi _{eId}(Own) \\times \\Pi _{bId}(Own) )/\\Pi _{bId}(Brand)  \\right ) \\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(  \\Pi _{eId}(\\Pi _{eId,bId}(Own)/\\Pi _{bId}(Brand))\\)</p>",
            "<b>B.</b> <p>\\(  \\Pi _{eId}(Own)-\\Pi _{eId}\\left ((\\Pi _{eId}(Own) \\times \\Pi _{bId}(Brand) )-\\Pi _{eId,bId}(Own)  \\right )\\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371921/Gate-cse-2022-question-15#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>In a relational data model, which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A relation with only two attributes is always in BCNF.</p>",
            "<b>B.</b> <p>If all attributes of a relation are prime attributes, then the relation is in BCNF.</p>",
            "<b>C.</b> <p>Every relation has at least one non-prime attribute.</p>",
            "<b>D.</b> <p>BCNF decompositions preserve functional dependencies.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A relation with only two attributes is always in BCNF.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371932/Gate-cse-2022-question-4#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>Suppose the following functional dependencies hold on a relation U with attributes \\(P, Q, R, S, \\text{ and } T\\):\n<br><br>\\(P \\rightarrow QR \\\\ RS \\rightarrow T\\)<br><br>\nWhich of the following functional dependencies can be inferred from the above functional dependencies? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(PS \\rightarrow T\\)</p>",
            "<b>B.</b> <p>\\(R \\rightarrow T\\)</p>",
            "<b>C.</b> <p>\\(P \\rightarrow R\\)</p>",
            "<b>D.</b> <p>\\(PS \\rightarrow Q\\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(PS \\rightarrow T\\)</p>",
            "<b>C.</b> <p>\\(P \\rightarrow R\\)</p>",
            "<b>D.</b> <p>\\(PS \\rightarrow Q\\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357500/gate-cse-2021-set-2-question-40#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>Let S be the following schedule of operations of three transactions \\(T_1, T_2 \\text{ and }T_3\\) in a relational database system:<br><br>\n\\(R_2(Y), R_1(X), R_3(Z), R_1(Y)W_1(X), R_2(Z), W_2(Y), R_3(X), W_3(Z)\\)<br><br>\nConsider the statements P and Q below:<br><br>\nP: S is conflict-serializable.<br>\nQ: If \\(T_3\\) commits before \\(T_1\\) finishes, then S is recoverable.<br><br>\nWhich one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both P and Q are true</p>",
            "<b>B.</b> <p>P is true and Q is false</p>",
            "<b>C.</b> <p>P is false and Q is true</p>",
            "<b>D.</b> <p>Both P and Q are false</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P is true and Q is false</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357508/gate-cse-2021-set-2-question-32#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>The relation scheme given below is used to store information about the employees of a company, where empId is the key and deptId indicates the department to which the employee is assigned. Each employee is assigned to exactly one department.<br><br>\n\\(\\textsf{emp($\\underline{\\textsf{empId}}$, name, gender, salary, deptId)}\\)<br><br>\nConsider the following SQL query:<pre><code> select deptId, count(*)\nfrom emp\nwhere gender = \"female\" and salary &gt; (select avg(salary)from emp)\ngroup by deptId;</code></pre>The above query gives, for each department in the company, the number of female employees whose salary is greater than the average salary of <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>employees in the department</p>",
            "<b>B.</b> <p>employees in the company</p>",
            "<b>C.</b> <p>female employees in the department</p>",
            "<b>D.</b> <p>female employees in the company</p>"
          ],
          "correct_answer": "<b>B.</b> <p>employees in the company</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357509/gate-cse-2021-set-2-question-31#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>A data file consisting of 1,50,000 student-records is stored on a hard disk with block size of 4096 bytes. The data file is sorted on the primary key RollNo. The size of a record pointer for this disk is 7 bytes. Each student-record has a candidate key attribute called ANum of size 12 bytes. Suppose an index file with records consisting of two fields, ANum value and the record pointer the corresponding student record, is built and stored on the same disk. Assume that the records of data file and index file are not split across disk blocks. The number of blocks in the index file is ______ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "698",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357519/gate-cse-2021-set-2-question-21#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Consider the following statements S1 and S2 about the relational data model:<br>\n<br>\nS1: A relation scheme can have at most one foreign key.<br>\nS2: A foreign key in a relation scheme R cannot be used to refer to tuples of R.<br><br>\nWhich one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are true</p>",
            "<b>B.</b> <p>S1 is true and S2 is false</p>",
            "<b>C.</b> <p>S1 is false and S2 is true</p>",
            "<b>D.</b> <p>Both S1 and S2 are false</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both S1 and S2 are false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357534/gate-cse-2021-set-2-question-6#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>Consider the relation \\(R(P,Q,S,T,X,Y,Z,W)\\) with the following functional dependencies.\n<br><br>\\(PQ\\rightarrow X;\\quad P\\rightarrow YX;\\quad Q\\rightarrow Y; \\quad Y\\rightarrow ZW\\)\n<br><br>\nConsider the decomposition of the relation R into the constituent relations according to the following two decomposition schemes.\n<br><br>\n\\(D1:\\quad R=[(P,QS,T);\\;(P,T,X);\\;(Q,Y);\\;(Y,Z,W)]\\)<br>\n\\(D2:\\quad R=[(P,Q,S);\\;(T,X);\\;(Q,Y);\\;(Y,Z,W)]\\)<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>D1 is a lossless decomposition, but D2 is a lossy decomposition.</p>",
            "<b>B.</b> <p>D1 is a lossy decomposition, but D2 is a lossless decomposition.</p>",
            "<b>C.</b> <p>Both D1 and D2 are lossless decompositions.</p>",
            "<b>D.</b> <p>Both D1 and D2 are lossy decompositions.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>D1 is a lossless decomposition, but D2 is a lossy decomposition.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357418/gate-cse-2021-set-1-question-33#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Let \\(r_i(z)\\) and \\(w_i(z)\\) denote read and write operations respectively on a data item \\(z\\) by a transaction \\(T_i\\). Consider the following two schedules.\n<br><br>\n\\(S1: r_1(x)r_1(y)r_2(x)r_2(y)w_2(y)w_1(x)\\)\n<br>\n\\(S2: r_1(x)r_2(x)r_2(y)w_2(y)r_1(y)w_1(x)\\)\n<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is conflict serializable, and S2 is not conflict serializable</p>",
            "<b>B.</b> <p>S1 is not conflict serializable, and S2 is conflict serializable</p>",
            "<b>C.</b> <p>Both S1 and S2 are conflict serializable</p>",
            "<b>D.</b> <p>Niether S1 nor S2 is conflict serializable</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S1 is not conflict serializable, and S2 is conflict serializable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357419/gate-cse-2021-set-1-question-32#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>The following relation records the age of 500 employees of a company, where empNo ( indicating the employee number) is the key:\n<br><br>\n\\(empAge(\\underline{empNo},age)\\)<br><br>\nConsider the following relational algebra expression:\n<br><br>\n\\(\\Pi_{empNo}(empAge \\Join_{(age &gt; age1)} \\rho_{empNo1,age1}(empAge))\\)<br><br>\nWhat does the above expression generate? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Employee numbers of only those employees whose age is the maximum</p>",
            "<b>B.</b> <p>Employee numbers of only those employees whose age is more than the age of exactly one other employee</p>",
            "<b>C.</b> <p>Employee numbers of all employees whose age is not the minimum</p>",
            "<b>D.</b> <p>Employee numbers of all employees whose age is the minimum</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Employee numbers of all employees whose age is not the minimum</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357424/gate-cse-2021-set-1-question-27#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>A relation \\(r(A,B)\\) in a relational database has 1200 tuples. The attribute \\(A\\) has integer values ranging from 6 to 20, and the attribute \\(B\\) has integer values ranging from 1 to 20. Assume that the attributes \\(A\\) and \\(B\\) are independently distributed.\n<br><br>\nThe estimated number of tuples in the output of \\(\\sigma _{(A &gt; 10)\\vee(B=18)}(r)\\) is ____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "205",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357428/gate-cse-2021-set-1-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>Consider a linear list based directory implementation in a file system. Each directory is a list of nodes, where each node contains the file name along with the file metadata, such as the list of pointers to the data blocks. Consider a given directory foo.<br><br>Which of the following operations will necessarily require a full scan of foo for successful completion? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Creation of a new file in foo</p>",
            "<b>B.</b> <p>Deletion of an existing file from foo</p>",
            "<b>C.</b> <p>Renaming of an existing file in foo</p>",
            "<b>D.</b> <p>Opening of an existing file in foo</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Creation of a new file in foo</p>",
            "<b>C.</b> <p>Renaming of an existing file in foo</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357437/gate-cse-2021-set-1-question-15#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>Suppose a database system crashes again while recovering from a previous crash. Assume checkpointing is not done by the database either during the transactions or during recovery.<br><br>Which of the following statements is/are correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The same undo and redo list will be used while recovering again</p>",
            "<b>B.</b> <p>The system cannot recover any further</p>",
            "<b>C.</b> <p>All the transactions that are already undone and redone will not be recovered again</p>",
            "<b>D.</b> <p>The database will become inconsistent</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>The same undo and redo list will be used while recovering again</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357439/gate-cse-2021-set-1-question-13#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>The SQL query<br><pre><code> SELECT columns\nFROM TableA\nRIGHT OUTER JOIN TableB\nON A.columnName = B.columnName\nWHERE A.columnName IS NULL</code></pre><br>returns the following: <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All rows in Table B, which meets equality condition above and, none from Table A which meets the condition.</p>",
            "<b>B.</b> <p>All rows in Table A, which meets equality condition above and none from Table B, which meets the condition.</p>",
            "<b>C.</b> <p>All rows in Table B, which meets the equality condition</p>",
            "<b>D.</b> <p>All rows in Table A, which meets the equality condition</p>"
          ],
          "correct_answer": "<b>A.</b> <p>All rows in Table B, which meets equality condition above and, none from Table A which meets the condition.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "NOTE: Question is excluded from the evaluation due to ambiguity.<br> <a href=\"https://gateoverflow.in/331400/isro2020-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>If every non-key attribute functionally dependent on the primary key, then the relation will be in <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First normal form</p>",
            "<b>B.</b> <p>Second normal form</p>",
            "<b>C.</b> <p>Third normal form</p>",
            "<b>D.</b> <p>Fourth Normal form</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331394/isro2020-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>Properties of 'DELETE' and 'TRUNCATE' commands indicate that <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>After the execution of 'TRUNCATE' operation, COMMIT, and ROLLBACK statements cannot be performed to retrieve the lost data, while 'DELETE' allow it</p>",
            "<b>B.</b> <p>After the execution of 'DELETE' and 'TRUNCATE' operation retrieval is easily possible for the lost data</p>",
            "<b>C.</b> <p>After the execution of 'DELETE' operation, COMMIT and ROLLBACK statements can be performed to retrieve the lost data, while TRUNCATE do not allow it</p>",
            "<b>D.</b> <p>After the execution of 'DELETE' and 'TRUNCATE' operation no retrieval is possible for the lost data</p>"
          ],
          "correct_answer": "<b>A.</b> <p>After the execution of 'TRUNCATE' operation, COMMIT, and ROLLBACK statements cannot be performed to retrieve the lost data, while 'DELETE' allow it</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331428/isro2020-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>Consider a database implemented using B+ tree for file indexing and installed on a disk drive with block size of 4 KB. The size of search key is 12 bytes and the size of tree/disk pointer is 8 bytes. Assume that the database has one million records. Also assume that no node of the B+ tree and no records are present initially in main memory. Consider that each record fits into one disk block. The minimum number of disk accesses required to retrieve any record in the database is _______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333177/gate2020-cs-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
          "question": "<p>Consider a schedule of transactions T1 and T2: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q37_7982b097.jpg\"><br>Here, RX stands for \"Read(X)\" and WX stands for \"Write(X)\". Which one of the following schedules is conflict equivalent to the above schedule?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q37a_8f7271d7.jpg\"> <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333194/gate2020-cs-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
          "question": "<p>Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a prime attribute.</p>",
            "<b>B.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.</p>",
            "<b>C.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.</p>",
            "<b>D.</b> <p>A cell in R holds a set instead of an atomic value.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a prime attribute.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333195/gate2020-cs-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 45,
          "question": "<p>Which one of the following is used to represent the supporting many-one relationships of a weak entity set in an entity-relationship diagram? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Diamonds with double/bold border</p>",
            "<b>B.</b> <p>Rectangles with double/bold border</p>",
            "<b>C.</b> <p>Ovals with double/bold border</p>",
            "<b>D.</b> <p>Ovals that contain underlined identifiers</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Diamonds with double/bold border</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333217/gate2020-cs-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>Consider a relational database containing the following schemas. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q13_00d62b79.jpg\"><br>The primary key of each table is indicated by underlining the constituent fields.<pre><code> SELECT s.sno, s.sname\n    FROM Suppliers s, Catalogue c\n    WHERE s.sno=c.sno AND\n        cost &gt; (SELECT AVG (cost)\n                FROM Catalogue\n                WHERE pno = 'P4'\n                GROUP BY pno) ;</code></pre><br>The number of rows returned by the above SQL query is <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>0</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333218/gate2020-cs-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
          "question": "<p>Consider the following relation P(X, Y, Z), Q(X, Y, T) and R(Y, V):\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q55_cdc2944f.jpg\"><br>How many tuples will be returned by the following relational algebra query?  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q55a_38366a3a.jpg\"><br>Answer:______ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302793/gate2019-cs-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>A relational database contains two tables Student and Performance as shown below: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51_c175b8ed.jpg\"><br>The primary key of the Student table is Roll_no. For the Performance table, the columns Roll_no. and Subject_code together from the primary key. Consider the SQL query given below:<pre><code>SELECT S.Student_name, sum(P.Marks)\nFROM Student S, Performance P\nWHERE  P.Marks  &gt;  84\nGROUP BY S.Student_name;</code></pre>The number of rows returned by the above SQL query is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302797/gate2019-cs-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>Let the set of functional dependencies \\(F=\\{QR\\rightarrow S,R\\rightarrow P,S\\rightarrow Q\\}\\) hold on a relation schema X = (PQRS). X is not in BCNF. Suppose X is decomposed into two schemas Y and Z where Y = (PR) and Z = (QRS). <br>Consider the two statements given below:<br><br>\nI. Both Y and Z are in BCNF<br>\nII. Decomposition of X into Y and Z is dependency preserving and lossless.<br><br>\nWhich of the above statements is/are correct? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both I and II</p>",
            "<b>B.</b> <p>I only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>C.</b> <p>II only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302816/gate2019-cs-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 50,
          "question": "<p>Which one of the following statements is NOT correct about the \\(B^+\\) tree data structure used for creating an index of a relational database table? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(B^+\\) Tree is a height-balanced tree</p>",
            "<b>B.</b> <p>Non-leaf nodes have pointers to data records</p>",
            "<b>C.</b> <p>Key values in each node are kept in sorted order</p>",
            "<b>D.</b> <p>Each leaf node has a pointer to the next leaf node</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Non-leaf nodes have pointers to data records</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302834/gate2019-cs-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
          "question": "<p>Consider the following two statements about database transaction schedules:<br><br>\nI. Strict two-phase locking protocol generates conflict serializable schedules that are also recoverable.<br>\nII. Timestamp-ordering concurrency control protocol with Thomas' Write Rule can generate view serializable schedules that are not conflict serializable.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both I and II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302837/gate2019-cs-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 52,
          "question": "<p>Let us assume that transaction T1 has arrived before transaction T2. Consider the schedule s=r1(A);r2(B):w2(A);w1(B)<br>Which of the following is true? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Allowed under basic timestamp protocol.</p>",
            "<b>B.</b> <p>Not allowed under basic timestamp protocols because T1 is rolled back.</p>",
            "<b>C.</b> <p>Not allowed under basic timestamp protocols because T2 is rolled back.</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Not allowed under basic timestamp protocols because T1 is rolled back.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213533/isro2018-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>The set of attributes X will be fully functionally dependent on the set of attributes Y if the following conditions are satisfied. <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X is functionally dependent on Y</p>",
            "<b>B.</b> <p>X is not functionally dependent on any subset of Y</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both (A) and (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213534/isro2018-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>Immunity of the external schemas (or application programs) to changes in the conceptual scheme is referred to as: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Physical Data Independence</p>",
            "<b>B.</b> <p>Logical Data Independence</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Logical Data Independence</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213535/isro2018-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
          "question": "<p>In E-R model, Y is the dominant entity and X is subordinate entity <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>If X is deleted, then Y is also deleted</p>",
            "<b>B.</b> <p>If Y is deleted, then X is also deleted</p>",
            "<b>C.</b> <p>If Y is deleted, then X is not deleted</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>If Y is deleted, then X is also deleted</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213536/isro2018-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 56,
          "question": "<p>Which of the following is dense index? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Primary index</p>",
            "<b>B.</b> <p>Clustered index</p>",
            "<b>C.</b> <p>Secondary index</p>",
            "<b>D.</b> <p>Secondary non-key index</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Secondary index</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213537/isro2018-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 57,
          "question": "<p>in a file which contains 1 million records and the order of the tree is 100, then what is the maximum number of nodes to be accessed if B+ tree index is used? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213539/isro2018-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 58,
          "question": "<p>Consider the set of relations given below and the SQL query that follows:<br><pre><code> Students: (Roll_number, Name, Date_of_birth )\n\nCoursed: (Course_number, Course_name, Instructor )\n\nGrades: (Roll_number, Course_number, Grade)\n\nSELECT DISTINCT Name\n\nFROM Students, Courses, Grades\n\nWHERE Students.Roll_number = Grades.Roll_number\n\n                            AND   Courses.Intructor =Sriram\n\n                            AND   Courses.Course_number = Grades.Course_number\n\n                            AND   Grades.Grade = A</code></pre>Which of the following sets is computed by the above query? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Names of Students who have got an A grade in all courses taught by Sriram</p>",
            "<b>B.</b> <p>Names of Students who have got an A grade in all courses</p>",
            "<b>C.</b> <p>Names of Students who have got an A grade in at least one of the courses taught by Sriram</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Names of Students who have got an A grade in at least one of the courses taught by Sriram</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213546/isro2018-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 59,
          "question": "<p>For a database relation R(a,b,c,d) where the domain of a,b,c and d include only atomic value, only the following functions dependencies and those that can be inferred from them hold<br>a\\(\\rightarrow\\)c<br>b\\(\\rightarrow\\)d<br>The relation is in: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First normal form but not in second normal form</p>",
            "<b>B.</b> <p>Second normal form but not in third normal form</p>",
            "<b>C.</b> <p>Third normal form</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>First normal form but not in second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213547/isro2018-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 60,
          "question": "<p>Given relations R(w,x) and S(y,z), the result of<br>SELECT DISTINCT w,x<br>FROM R,S<br>is guaranteed to be same as R, if <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R has no duplicates and S is non-empty</p>",
            "<b>B.</b> <p>R and S have no duplicates</p>",
            "<b>C.</b> <p>S has no duplicates and R is non-empty</p>",
            "<b>D.</b> <p>R and S have the same number of tuples</p>"
          ],
          "correct_answer": "<b>A.</b> <p>R has no duplicates and S is non-empty</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213548/isro2018-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 61,
          "question": "<p>Considering the following table in a relational database :<br>\\(\\begin{array}{|c|c|c|c|} \\hline \\text { Last Name } &amp; \\text { Rank } &amp; \\text { Room } &amp; \\text { Shift } \\\\ \\hline \\text { Smith } &amp; \\text { Manager } &amp; 234 &amp; \\text { Morning } \\\\ \\hline \\text { Jones } &amp; \\text { Custodian } &amp; 33 &amp; \\text { Afternoon } \\\\ \\hline \\text { Smith } &amp; \\text { Custodian } &amp; 33 &amp; \\text { Evening } \\\\ \\hline \\text { Doe } &amp; \\text { Clerical } &amp; 222 &amp; \\text { Morning } \\\\ \\hline \\end{array}\\)<br>According to the data shown in the table, which of the following could be a candidate key of the table? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{Last Name}</p>",
            "<b>B.</b> <p>{Room}</p>",
            "<b>C.</b> <p>{Shift}</p>",
            "<b>D.</b> <p>{Room, Shift}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{Room, Shift}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213583/isro2018-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 62,
          "question": "<p>Consider the following four relational schemas. For each schema, all non-trivial functional\ndependencies are listed. The underlined attributes are the respective primary keys.<br>\n<img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q42_13ce7592.jpg\">\n<br>\nWhich one of the relational schemas above is in 3NF but not in BCNF? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Schema I</p>",
            "<b>B.</b> <p>Schema II</p>",
            "<b>C.</b> <p>Schema III</p>",
            "<b>D.</b> <p>Schema IV</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Schema II</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204116/gate2018-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 63,
          "question": "<p>Consider the relations r(A, B) and s(B, C), where s.B is a primary key and r.B is a foreign key referencing s.B. Consider the query<br> \\(Q:r \\Join (\\sigma _{B\\lt 5}(s))\\) <br> Let LOJ denote the natural left outer-join operation. Assume that r and s contain no null values. <br>\nWhich one of the following queries is NOT equivalent to Q? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma _{B \\lt 5}(r\\Join s)\\)</p>",
            "<b>B.</b> <p>\\(\\sigma _{B\\lt 5}(r LOJ s)\\)</p>",
            "<b>C.</b> <p>\\(r LOJ(\\sigma _{B\\lt 5}(s))\\)</p>",
            "<b>D.</b> <p>\\(\\sigma _{B\\lt 5}(r) LOJ s\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(r LOJ(\\sigma _{B\\lt 5}(s))\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204115/gate2018-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 64,
          "question": "<p>Consider the following two tables and four queries in SQL. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q12_98ab1de3.jpg\">   <br>Which one of the queries above is certain to have an output that is a superset of the outputs of the other three queries? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Query 1</p>",
            "<b>B.</b> <p>Query 2</p>",
            "<b>C.</b> <p>Query 3</p>",
            "<b>D.</b> <p>Query 4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Query 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204086/gate2018-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 65,
          "question": "<p>In an Entity-Relationship (ER) model, suppose R is a many-to-one relationship from entity set E1 to entity set E2. Assume that E1 and E2 participate totally in R and that the cardinality of E1 is greater than the cardinality of E2. <br> Which one of the following is true about R? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every entity in E1 is associated with exactly one entity in E2.</p>",
            "<b>B.</b> <p>Some entity in E1 is associated with more than one entity in E2.</p>",
            "<b>C.</b> <p>Every entity in E2 is associated with exactly one entity in E1.</p>",
            "<b>D.</b> <p>Every entity in E2 is associated with at most one entity in E1.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Every entity in E1 is associated with exactly one entity in E2.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204085/gate2018-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 66,
          "question": "<p>A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3768/gate2005-it-23-isro2017-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 67,
          "question": "<p>Which of these is characteristic of RAID 5? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dedicated parity</p>",
            "<b>B.</b> <p>Double parity</p>",
            "<b>C.</b> <p>Hamming code parity</p>",
            "<b>D.</b> <p>Distributed parity</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Distributed parity</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128687/isro2017-45\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 68,
          "question": "<p>Which symbol denote derived attributes in ER Model? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Double ellipse</p>",
            "<b>B.</b> <p>Dashed ellipse</p>",
            "<b>C.</b> <p>Squared ellipse</p>",
            "<b>D.</b> <p>Ellipse with attribute name underlined</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Dashed ellipse</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128553/isro2017-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 69,
          "question": "<p>\\(\\begin{array}{|l|l|l|l|l|} \\hline \\textbf{Employee} &amp; \\textbf{Department} &amp; \\textbf{OT allowance} \\\\ \\hline \\text{RAMA} &amp; \\text{Mechanical} &amp; \\text{5000} \\\\\\hline \\text{GOPI} &amp; \\text{Electrical} &amp; \\text{2000} \\\\\\hline \\text{SINDHU} &amp; \\text{Computer} &amp; \\text{4000} \\\\\\hline \\text{MAHESH} &amp; \\text{Civil} &amp; \\text{1500} \\\\\\hline \\end{array}\\)<br>What is the output of the following SQL query?<br><pre><code> select count(*) from \n    ((select Employee, Department from Overtime_allowance) \n    natural join \n    (select Department, OT_allowance from Overtime_allowance) \n    as T);</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128552/isro2017-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 70,
          "question": "<p>ACID properties of a transactions are <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Atomicity, consistency, isolation, database</p>",
            "<b>B.</b> <p>Atomicity, consistency, isolation, durability</p>",
            "<b>C.</b> <p>Atomicity, consistency, integrity, durability</p>",
            "<b>D.</b> <p>Atomicity, consistency, integrity, database</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Atomicity, consistency, isolation, durability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128601/isro2017-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 71,
          "question": "<p>Which of the following concurrency control protocol ensures both conflict and free from deadlock? , <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Time stamp ordering</p>",
            "<b>B.</b> <p>2 Phase locking</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Time stamp ordering</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128600/isro-2017-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 72,
          "question": "<p>What does a data dictionary will identify? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Field name</p>",
            "<b>B.</b> <p>Field format</p>",
            "<b>C.</b> <p>Field types</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128498/isro2017-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 73,
          "question": "<p>In a \\(B^{+}\\) tree, if the search -key value is 8 bytes long, the block size is 512 bytes and the block pointer size is 2 bytes, then maximum order of the \\(B^{+}\\) tree is _______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "52",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118561/gate2017-2-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 74,
          "question": "<p>Consider the following database table named top_scorer. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q49_e09ff2a7.jpg\"> <br>      Consider the following SQL query:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q49a_79634f62.jpg\"> <br>\nThe number of tuples returned by the above SQL query is ___________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118391/gate2017-2-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 75,
          "question": "<p>Two transactions \\(T_1 \\; and \\; T_2\\) are given as: <br><br>\n\\(T_{1}:r_{1} (X)w_{1}(X)r_{1}(Y)w_{1}(Y)  \\)<br>\\(T_{2}:r_{2}(Y)w_{2}(Y)r_{2}(Z)w_{2}(Z)\\)<br><br>\nwhere \\(r_{i}(V)\\) denotes a read operation by transaction \\(T_{i}\\) on a variable V and \\(w_{i}(V)\\) denotes a\nwrite operations by transaction \\(T_{i}\\)  on a variable V. The total number of conflict serializable\nschedules that can be formed by \\(T_1 \\; and \\; T_2\\) is _____________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "54",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118640/gate2017-2-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 76,
          "question": "<p>Consider the following tables T1 and T2.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q11_05594a74.jpg\"> <br> In table T1, P is the primary key and Q is the foreign key referencing R in table T2 with ondelete\ncascade and on-update cascade. In table T2, R is the primary key and S is the foreign\nkey referencing P in table T1 on-delete set NULL and on-update cascade. In order to delete\nrecord (3,8) from table T1, the number of additional records that need to be deleted from\ntable T1 is _____. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118236/gate2017-2-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 77,
          "question": "<p>An ER model of a database consists of entity types A and B. These are connected by a\nrelationship R which does not have its own attribute. Under which one of the following\nconditions, can the relational table for R be merged with that of A? <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Relationship R is one-to-many and the participation of A in R is total</p>",
            "<b>B.</b> <p>Relationship R is one-to-many and the participation of A in R is partial</p>",
            "<b>C.</b> <p>Relationship R is many-to one and the participation of A in R is total</p>",
            "<b>D.</b> <p>Relationship R is many-to one and the participation of A in R is partial</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Relationship R is many-to one and the participation of A in R is total</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118157/gate2017-2-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 78,
          "question": "<p>Consider a database that has the relation schema CR (StudentName, CourseName). An\ninstance of the schema CR is as given below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q53_8cbe5db4.jpg\"><br> The following query is made on the database <br><br>\\(T1\\leftarrow \\pi _{CourseName}(\\sigma _{StudentName='SA'}(CR))\\)<br>\\( T2\\leftarrow CR\\div T1\\) <br><br>The number of rows in T2 is ____________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118329/gate2017-1-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 79,
          "question": "<p>In a database system, unique time stamps are assigned to each transaction using Lamport's\nlogical clock . Let TS(\\(T_{1}\\)) and TS(\\(T_{2}\\)) be the timestamps of transactions \\(T_{1}\\) and \\(T_{2}\\) respectively. Besides, \\(T_{1}\\) holds a lock on the resource R, and \\(T_{2}\\) has requested a conflicting lock on the same resource R. The following algorithm is used to prevent deadlocks in the database system assuming that a killed transaction is restarted with the same timestamp.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q42_afa2fbc5.jpg\">  <br>Assume any transactions that is not killed terminates eventually. Which of the following is TRUE about the database system that uses the above algorithm to prevent deadlocks? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The database system is both deadlock-free and starvation- free.</p>",
            "<b>B.</b> <p>The database system is deadlock- free, but not starvation-free.</p>",
            "<b>C.</b> <p>The database system is starvation-free but not deadlock- free.</p>",
            "<b>D.</b> <p>The database system is neither deadlock- free nor starvation-free.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The database system is both deadlock-free and starvation- free.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118325/gate2017-1-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 80,
          "question": "<p>Consider a database that has the relation schemas EMP(EmpId, EmpName, DepId) and\nDEPT(DeptName, DeptId). Note that the DeptId can be permitted to be NULL in the relation\nEMP. Consider the following queries on the database expressed in tuple relational calculus.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q35_fb6f6bf4.jpg\"><br>\nWhich of the above queries are safe? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
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
          "id": 81,
          "question": "<p>Consider a database that has the relation schema EMP (EmpId, EmpName, and DeptName).\nAn instance of the schema EMP and a SQL query on it are given below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q20_fff46230.jpg\"> The output of executing the SQL query is _____. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118303/gate2017-1-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 82,
          "question": "<p>The following functional dependencies hold true for the relational schema R{V,W,X,Y,Z}: <br>\nV \\(\\rightarrow\\)W <br>\nVW \\(\\rightarrow\\)X <br>\nY\\(\\rightarrow\\) VX <br>\nY \\(\\rightarrow\\)Z <br> Which of the following is irreducible equivalent for this set of functional dependencies ? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>V \\(\\rightarrow\\)W   <br>       V\\(\\rightarrow\\)X <br>\nY \\(\\rightarrow\\)V     <br>       Y \\(\\rightarrow\\)Z</p>",
            "<b>B.</b> <p>V \\(\\rightarrow\\)W  <br>       W \\(\\rightarrow\\)X<br>\nY\\(\\rightarrow\\) V    <br>       Y\\(\\rightarrow\\) Z</p>",
            "<b>C.</b> <p>V \\(\\rightarrow\\)W   <br>     V\\(\\rightarrow\\) X<br>\nY\\(\\rightarrow\\) V    <br>     Y \\(\\rightarrow\\)X<br>\nY \\(\\rightarrow\\)Z</p>",
            "<b>D.</b> <p>V \\(\\rightarrow\\)W  <br>      W\\(\\rightarrow\\) X<br>\nY\\(\\rightarrow\\) V   <br>      Y \\(\\rightarrow\\)X<br>\nY \\(\\rightarrow\\)Z</p>"
          ],
          "correct_answer": "<b>A.</b> <p>V \\(\\rightarrow\\)W   <br>       V\\(\\rightarrow\\)X <br>\nY \\(\\rightarrow\\)V     <br>       Y \\(\\rightarrow\\)Z</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118296/gate2017-1-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 83,
          "question": "<p>A clustering index is defined on the fields which are of type <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>non-key and ordering</p>",
            "<b>B.</b> <p>non-key and non-ordering</p>",
            "<b>C.</b> <p>key and ordering</p>",
            "<b>D.</b> <p>key and non-ordering</p>"
          ],
          "correct_answer": "<b>A.</b> <p>non-key and ordering</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/414/gate2008-16-isro2016-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 84,
          "question": "<p>The order of a leaf node in a \\(B^+\\) - tree is the maximum number of (value, data record pointer) pairs it can hold. Given that the block size is 1K bytes, data record pointer is 7 bytes long, the value field is 9 bytes long and a block pointer is 6 bytes long, what is the order of the leaf node? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>63</p>",
            "<b>B.</b> <p>64</p>",
            "<b>C.</b> <p>67</p>",
            "<b>D.</b> <p>68</p>"
          ],
          "correct_answer": "<b>A.</b> <p>63</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1261/gate2007-63-isro2016-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 85,
          "question": "<p>Trigger is <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Statement that enables to start any DBMS</p>",
            "<b>B.</b> <p>Statement that is executed by the user when debugging an application program</p>",
            "<b>C.</b> <p>The condition that the system tests for the validity of the database user</p>",
            "<b>D.</b> <p>Statement that is executed automatically by the system as a side effect of a modification of the database</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Statement that is executed automatically by the system as a side effect of a modification of the database</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56041/isro2016-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 86,
          "question": "<p>Given the relations<br>employee (name, salary, dept-no), and<br>\ndepartment (dept-no, dept-name,address),<br>\nWhich of the following queries cannot be expressed using the basic relational algebra operations \\(\\left(\\sigma, \\pi,\\times ,\\Join, \\cup, \\cap,-\\right)\\)? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Department address of every employee</p>",
            "<b>B.</b> <p>Employees whose name is the same as their department name</p>",
            "<b>C.</b> <p>The sum of all employees' salaries</p>",
            "<b>D.</b> <p>All employees of a given department</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The sum of all employees' salaries</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/647/gate2000-1-23-isro2016-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 87,
          "question": "<p>Goals for the design of the logical scheme include <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>avoiding data inconsistency</p>",
            "<b>B.</b> <p>being able to construct query easily</p>",
            "<b>C.</b> <p>being able to access data efficiently</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56039/isro2016-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 88,
          "question": "<p>The relation book (title,price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?<br><pre><code> select title\nfrom book as B\nwhere (select count(*)\n    from book as T\n    where T.price&gt;B.price) &lt; 5</code></pre> <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Titles of the four most expensive books</p>",
            "<b>B.</b> <p>Title of the fifth most inexpensive book</p>",
            "<b>C.</b> <p>Title of the fifth most expensive book</p>",
            "<b>D.</b> <p>Titles of the five most expensive books</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Titles of the five most expensive books</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1400/gate2005-77-isro2016-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 89,
          "question": "<p>Let R(a,b,c) and S(d,e,f) be two relations in which d is the foreign key of S that refers to the primary key of R. Consider the following four operations R and S<br><br>\nI.   Insert into R<br>\nII.  Insert into S<br>\nIII. Delete from R<br>\nIV.  Delete from S<br><br>\nWhich of the following can cause violation of the referential integrity constraint above? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both I and IV</p>",
            "<b>B.</b> <p>Both II and III</p>",
            "<b>C.</b> <p>All of these</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Both II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2266/gate1997-6-10-isro2016-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 90,
          "question": "<p>Consider the join of a relation R with a relation S. If R has m tuples and S has n tuples then the maximum and minimum sizes of the join respectively are <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>m+n and 0</p>",
            "<b>B.</b> <p>mn and 0</p>",
            "<b>C.</b> <p>m+n and |m-n|</p>",
            "<b>D.</b> <p>mn and m+n</p>"
          ],
          "correct_answer": "<b>B.</b> <p>mn and 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1471/gate1999-1-18-isro2016-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 91,
          "question": "<p>Consider the following database table named water_schemes : <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q52_3b8c0d21.jpg\"><br> The number of tuples returned by the following SQL query is __________.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q52a_85159664.jpg\"> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39604/gate2016-2-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 92,
          "question": "<p>Consider the following databases chedule with two transactions, T1 and T2.<br>\n\\(S=r_{2}(X);r_{1}(X);r_{2}(Y);w_{1}(X);r_{1}(Y);w_{2}(X);a_{1};a_{2}\\)<br>\nwhere \\(r_{i}(Z)\\) denotes a read operation by transaction \\(T_{i}\\) on avariable Z, \\(w_{i}(Z)\\)\ndenotes a write operation by \\(T_{i}\\) on avariable Z and \\(a_{i}\\) denotes an abort by transaction \\(T_{i}\\).<br>\nWhich one of the following statements about the above schedule is TRUE? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S is non-recoverable</p>",
            "<b>B.</b> <p>S is recoverable,but has a cascading abort</p>",
            "<b>C.</b> <p>S does not have a cascading abort</p>",
            "<b>D.</b> <p>S is strict</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S does not have a cascading abort</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39590/gate2016-2-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 93,
          "question": "<p>Suppose  a database schedule S involves transactions T1,...,Tn. Construct the precedence graph of S with vertices representing the transactions and edges representing the conflicts. If S is serializable, which one of the following orderings of the vertices of the precedence graph is guaranteed to yield a serial schedule? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Topological order</p>",
            "<b>B.</b> <p>Depth-first order</p>",
            "<b>C.</b> <p>Breadth-first order</p>",
            "<b>D.</b> <p>Ascending orderoftransactionindices</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Topological order</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39550/gate2016-2-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 94,
          "question": "<p>Consider the following two phase locking protocol. Suppose a transaction T accesses (for read or write operations), a certain set of objects {O1,... ,Ok}. This is done in the following manner: <br>\nStep 1. T acquires exclusive locks to O1,...,Ok in increasing order of their addresses. <br>\nStep 2. The required operations are performed.<br>\nStep 3. All locks are released. <br>\nThis protocol will <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>guarantee serializability and deadlock-freedom</p>",
            "<b>B.</b> <p>guarantee neither serializability nor deadlock-freedom</p>",
            "<b>C.</b> <p>guarantee serializability but not deadlock-freedom</p>",
            "<b>D.</b> <p>guarantee deadlock-freedom but not serializability</p>"
          ],
          "correct_answer": "<b>A.</b> <p>guarantee serializability and deadlock-freedom</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39703/gate2016-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 95,
          "question": "<p>A database of resear charticles in a journal uses the following schema.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q23_1293001f.jpg\"> <br>\nWhich is the weakest normal form that the new database satisfies,but the old one does not? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1NF</p>",
            "<b>B.</b> <p>2NF</p>",
            "<b>C.</b> <p>3NF</p>",
            "<b>D.</b> <p>BCNF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39646/gate2016-1-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 96,
          "question": "<p>Which one of the following is NOT a part of the ACID properties of database transactions? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Atomicity</p>",
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>",
            "<b>D.</b> <p>Deadlock-freedom</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Deadlock-freedom</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39644/gate2016-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 97,
          "question": "<p>Which of the following is NOT a superkey in a relational schema with attributes\nV,W, X, Y, Z and primary key V Y? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>VXYZ</p>",
            "<b>B.</b> <p>VWXZ</p>",
            "<b>C.</b> <p>VWXY</p>",
            "<b>D.</b> <p>VWXYZ</p>"
          ],
          "correct_answer": "<b>B.</b> <p>VWXZ</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39637/gate2016-1-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 98,
          "question": "<p>Consider the following schema:<br>Emp (Empcode, Name, Sex, Salary, Deptt)<br>A simple SQL query is executed as follows:<br><pre><code> SELECT Deptt FROM Emp\nwhere sex = 'Male'\nGROUP by Dept\nHaving avg (Salary) &gt; {select avg (Salary) from Emp}</code></pre>The output will be <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Average salary of male employee is the average salary of the organization</p>",
            "<b>B.</b> <p>Average salary of male employee is less than the average salary of the organization</p>",
            "<b>C.</b> <p>Average salary of male employee is equal to the average salary of the organization</p>",
            "<b>D.</b> <p>Average salary of male employee is more than the average salary of the organization</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Average salary of male employee is more than the average salary of the organization</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51196/isro2015-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 99,
          "question": "<p>Consider the following relational query on the above database:<br><pre><code> SELECT S.name FROM Suppliers S \nWhere S.sid NOT IN (SELECT C.sid FROM Catalog C\nWHERE C.pid NOT IN (SELECT P.pid FROM Parts P WHERE P.color &lt;&gt;'blue'))</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Find the names of all suppliers who have supplied non-blue part.</p>",
            "<b>B.</b> <p>Find the names of all suppliers who have not supplied non-blue part.</p>",
            "<b>C.</b> <p>Find the names of all suppliers who have supplied only non-blue parts</p>",
            "<b>D.</b> <p>Find the names of all suppliers who have not supplied only non-blue part.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Find the names of all suppliers who have supplied non-blue part.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "As per the ISRO Answer key option A and C are correct, but None of these are correct. See the detail Solution. <a href=\"https://gateoverflow.in/1339/gate-cse-2009-question-55#a_list\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 100,
          "question": "<p>If \\(D_1,D_2,...D_n\\) are domains in a relational model, then the relation is a table, which is a subset of <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(D_{1} \\oplus D_{2} \\oplus \\cdots \\oplus D_{n}\\)</p>",
            "<b>B.</b> <p>\\(D_{1} \\times D_{2} \\times \\cdots \\times D_{n}\\)</p>",
            "<b>C.</b> <p>\\(D_{1} \\cup D_{2} \\cup \\cdots \\cup D_{n}\\)</p>",
            "<b>D.</b> <p>\\(D_{1} \\cap D_{2} \\cap \\cdots \\cap D_{n}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(D_{1} \\times D_{2} \\times \\cdots \\times D_{n}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/11982/isro2015-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 101,
          "question": "<p>Let R=(A,B,C,D,E,F) be a relation scheme with the following dependencies \\(C \\rightarrow F\\), \\(E \\rightarrow A\\), \\(EC \\rightarrow D\\), \\(A \\rightarrow B\\). Which of the following is a key of R? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>CD</p>",
            "<b>B.</b> <p>EC</p>",
            "<b>C.</b> <p>AE</p>",
            "<b>D.</b> <p>AC</p>"
          ],
          "correct_answer": "<b>B.</b> <p>EC</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51174/isro2015-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 102,
          "question": "<p>The maximum length of an attribute of type text is <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>127</p>",
            "<b>B.</b> <p>255</p>",
            "<b>C.</b> <p>256</p>",
            "<b>D.</b> <p>It is variable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It is variable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51170/isro2015-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 103,
          "question": "<p>Given a block can hold either 3 records or 10 key pointers. A database contains n records, then how many blocks do we need to hold the data file and the dense index <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13n/30</p>",
            "<b>B.</b> <p>n/3</p>",
            "<b>C.</b> <p>n/10</p>",
            "<b>D.</b> <p>n/30</p>"
          ],
          "correct_answer": "<b>A.</b> <p>13n/30</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19400/isro2015-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 104,
          "question": "<p>Consider the following log sequence of two transactions on a bank account, with initial balance 12000, that transfer 2000 to a mortgage payment and then apply a 5% interest.<br>1.T1 start <br>2.T1 B old =1200 new =10000<br>3.T1 M old =0 new =2000<br>4.T1 commit<br>5.T2 start<br>6.T2 B old =10000 new =10500<br>7.T2 commit<br>Suppose the database system crashes just before log record 7 is written. When  the system is restarted, which one statement is true of the recovery procedure? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>We must redo log record 6 to set B to 10500</p>",
            "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2  and 3</p>",
            "<b>C.</b> <p>We need not redo log records 2 and 3 because transaction T1 has committed</p>",
            "<b>D.</b> <p>We can apply redo and undo operations in arbitrary order because they are idempotent</p>"
          ],
          "correct_answer": "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2  and 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/981/gate2006-20-isro2015-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 105,
          "question": "<p>Consider the following Relationship Entity Diagram(ERP)<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q16_77f487d5.jpg\"><br>Which of the following possible relations will not hold if the above ERD is mapped into a relation model? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Person (NID, Name)</p>",
            "<b>B.</b> <p>Qualification (NID, ExamID, QualifiedDate)</p>",
            "<b>C.</b> <p>Exam (ExamID, NID, ExamName)</p>",
            "<b>D.</b> <p>Exam (ExamID, ExamName)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Exam (ExamID, NID, ExamName)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51167/isro2015-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 106,
          "question": "<p>Consider the following partial Schedule S involving two transactions T1 and T2. Only the read and the write operations have been shown. The read operation on data item P is denoted by read(P) and the write operation on data item P is denoted by write(P). <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q41_17720076.jpg\"> <br> Suppose that the transaction T1 fails immediately after time instance 9. Which one of the following statements is correct? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T2 must be aborted and then both T1 and T2 must be re-started to ensure transaction atomicity</p>",
            "<b>B.</b> <p>Schedule S is non-recoverable and cannot ensure transaction atomicity</p>",
            "<b>C.</b> <p>Only T2 must be aborted and then re-started to ensure transaction atomicity</p>",
            "<b>D.</b> <p>Schedule S is recoverable and can ensure atomicity and nothing else needs to be done</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Schedule S is non-recoverable and cannot ensure transaction atomicity</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8482/gate2015-3-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 107,
          "question": "<p>Consider a B+ tree in which the search key is 12 bytes long, block size is 1024 bytes, record pointer is 10 bytes long and block pointer is 8 bytes long. The maximum number of keys that can be accommodated in each non-leaf node of the tree is ____________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8555/gate2015-3-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 108,
          "question": "<p>Consider the following relation <br><br>   Cinema(theater, address, capacity) <br><br>Which of the following options will be needed at the end of the SQL query <br><br> SELECT P1.address FROM Cinema P1 <br><br> such that it always finds the addresses of theaters with maximum capacity? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>WHERE P1.capacity \\(\\geq\\) All (select P2.capacity from Cinema P2)</p>",
            "<b>B.</b> <p>WHERE P1.capacity \\(\\geq\\) Any (select P2.capacity from Cinema P2)</p>",
            "<b>C.</b> <p>WHERE P1.capacity \\(\\gt\\) All (select max(P2.capacity) from Cinema P2)</p>",
            "<b>D.</b> <p>WHERE P1.capacity \\(\\gt\\) Any (select max(P2.capacity) from Cinema P2)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>WHERE P1.capacity \\(\\geq\\) All (select P2.capacity from Cinema P2)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8396/gate2015-3-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 109,
          "question": "<p>Consider the relation X(P,Q,R,S,T,U) with the following set of functional  dependencies <br> F= {{P,R}\\(\\rightarrow\\){S,T}, {P,S,U}\\(\\rightarrow\\){Q,R} } <br>\nWhich of the following is the trivial functional dependency in \\(F^{+}\\), where \\(F^{+}\\) is closure of F ? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{P,R}\\(\\rightarrow\\){S,T}</p>",
            "<b>B.</b> <p>{P,R}\\(\\rightarrow\\){R,T}</p>",
            "<b>C.</b> <p>{P,S}\\(\\rightarrow\\){S}</p>",
            "<b>D.</b> <p>{P,S,U}\\(\\rightarrow\\){Q}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{P,S}\\(\\rightarrow\\){S}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8420/gate2015-3-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 110,
          "question": "<p>Consider two relations R1(A,B) with the tuples (1,5), (3,7) and R2(A,C) = (1,7), (4,9). Assume that R(A,B,C) is the full natural outer join of R1 and R2. Consider the following tuples of the form (A,B,C): a = (1,5,null), b = (1,null,7), c = (3, null, 9), d = (4,7,null), e = (1,5,7), f = (3,7,null), g = (4,null,9). Which one of the following statements is correct? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R contains a, b, e, f, g but not c, d.</p>",
            "<b>B.</b> <p>R contains all of a, b, c, d, e, f, g.</p>",
            "<b>C.</b> <p>R contains e, f, g but not a, b.</p>",
            "<b>D.</b> <p>R contains e but not f, g.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>R contains e, f, g but not a, b.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8151/gate2015-2-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 111,
          "question": "<p>Consider a simple checkpointing protocol and the following set of operations in the log. <br> (start, T4); (write, T4, y, 2, 3); (start, T1); (commit, T4); (write, T1, z, 5, 7); <br>(checkpoint);<br> (start, T2); (write, T2, x, 1, 9); (commit, T2); (start, T3), (write, T3, z, 7, 2); <br> If a crash happens now and the system tries to recover using both undo and redo operations, what are the contents of the undo list and the redo list? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Undo: T3, T1; Redo: T2</p>",
            "<b>B.</b> <p>Undo: T3, T1; Redo: T2, T4</p>",
            "<b>C.</b> <p>Undo: none; Redo: T2, T4, T3, T1</p>",
            "<b>D.</b> <p>Undo: T3, T1, T4; Redo: T2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Undo: T3, T1; Redo: T2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8246/gate2015-2-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 112,
          "question": "<p>Consider the following transaction involving two bank accounts x and y. <br><br> read(x);    x:=x-50;  write(x);    read(y);    y:=y+50; write(y) <br><br> The constraint that the sum of the accounts x and y should remain constant is that of <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Atomicity</p>",
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>",
            "<b>D.</b> <p>Durability</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Consistency</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8047/gate2015-2-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 113,
          "question": "<p>Consider the following relations: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51_2717e41f.jpg\"><br>  Consider the following SQL query. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51a_e0f73a11.jpg\"><br>The number of rows that will be returned by the SQL query is _____________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8225/gate2015-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 114,
          "question": "<p>Consider an Entity-Relationship (ER) model in which entity sets E1 and E2 are connected by an m : n relationship R12. E1 and E3 are connected by a 1 : n (1 on the side of E1 and n on the side of E3) relationship R13. <br><br>E1 has two single-valued attributes a11 and a12 of which a11 is the key attribute. E2 has two single-valued attributes a21 and a22 of which a21 is the key attribute. E3 has two single-valued attributes a31 and a32 of which a31 is the key attribute. The relationships do not have any attributes. <br><br> If a relational model is derived from the above ER model, then the minimum number of relations that would be generated if all the relations are in 3NF is _______. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8309/gate2015-1-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 115,
          "question": "<p>A file is organized so that the ordering of data records is the same as or close to the ordering of data entries in some index. Then that index is called <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dense</p>",
            "<b>B.</b> <p>Sparse</p>",
            "<b>C.</b> <p>Clustered</p>",
            "<b>D.</b> <p>Unclustered</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Clustered</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8222/gate2015-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 116,
          "question": "<p>SELECT operation in SQL is equivalent to <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the selection operation in relational algebra</p>",
            "<b>B.</b> <p>the selection operation in relational algebra, except that SELECT in SQL retains duplicates</p>",
            "<b>C.</b> <p>the projection operation in relational algebra</p>",
            "<b>D.</b> <p>the projection operation in relational algebra, except that SELECT in SQL retains duplicates</p>"
          ],
          "correct_answer": "<b>D.</b> <p>the projection operation in relational algebra, except that SELECT in SQL retains duplicates</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8094/gate2015-1-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 117,
          "question": "<p>Consider a system where each file is associated with a 16 bit number. For each file, each user should have the read and write capability. How much memory is needed to store each user's access data? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16 KB</p>",
            "<b>B.</b> <p>32 KB</p>",
            "<b>C.</b> <p>64 KB</p>",
            "<b>D.</b> <p>128 KB</p>"
          ],
          "correct_answer": "<b>A.</b> <p>16 KB</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/15029/isro2014-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 118,
          "question": "<p>Consider the following table<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q63_241939ef.jpg\"><br>The table is in which normal form? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First Normal Form</p>",
            "<b>B.</b> <p>Second Normal Form</p>",
            "<b>C.</b> <p>Third Normal Form but not BCNF</p>",
            "<b>D.</b> <p>Third Normal Form and BCNF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Third Normal Form but not BCNF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55019/isro2014-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 119,
          "question": "<p>Let x, y, z, a, b, c be the attributes of an entity set E. If {x}, {x,y}, {a,b}, {a,b,c}, {x,y,z} are superkeys then which of the following are the candidate keys? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{x,y}  and {a,b}</p>",
            "<b>B.</b> <p>{x} and {a,b}</p>",
            "<b>C.</b> <p>{x,y,z} and {a,b,c}</p>",
            "<b>D.</b> <p>{z} and {c}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{x} and {a,b}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17425/isro2014-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 120,
          "question": "<p>Every time the attribute A appears, it is matched with the same value of attribute B but not the same value of attribute C. Which of the following is true? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A -&gt; (B,C)</p>",
            "<b>B.</b> <p>A -&gt; B, A -&gt;&gt; C</p>",
            "<b>C.</b> <p>A -&gt; B, C -&gt;&gt; A</p>",
            "<b>D.</b> <p>A -&gt;&gt; B, B -&gt; C</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A -&gt; B, A -&gt;&gt; C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/16128/isro2014-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 121,
          "question": "<p>Consider the schema \\(R(A,B,C,D)\\) and the functional dependencies \\(A \\rightarrow B\\) and \\(C \\rightarrow D\\).  If the decomposition is made as \\(R_{1}(A, B)\\) and \\(R_{2}(C, D)\\), then which of the following is TRUE? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Preserves dependency but cannot perform lossless join</p>",
            "<b>B.</b> <p>Preserves dependency and performs lossless join</p>",
            "<b>C.</b> <p>Does not perform dependency and cannot perform lossless join</p>",
            "<b>D.</b> <p>Does not preserve dependency but perform lossless join</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Preserves dependency but cannot perform lossless join</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17319/isro2014-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 122,
          "question": "<p>An aggregation association is drawn using which symbol? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A line which loops back on to the same table</p>",
            "<b>B.</b> <p>A small open diamond at the end of a line connecting two tables</p>",
            "<b>C.</b> <p>A small closed diamond at the end of a line connecting two tables</p>",
            "<b>D.</b> <p>A small closed triangle at the end of a line connecting two tables</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A small open diamond at the end of a line connecting two tables</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/54244/isro2014-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 123,
          "question": "<p>Consider the following relational schema: <br>\nEmployee (empId, empName, empDept ) <br>\nCustomer (custId,custName, salesRepId, rating)<br>\nSalesRepId is a foreign key referring to empId of the employee relation. Assume that each\nemployee makes a sale to at least one customer. What does the following query return?<br><pre><code>SELECT empName \nFROM employee E \n WHERE NOT EXISTS (SELECT custId\nFROM customer C\nWHERE C. salesRepId = E. empId\nAND C. rating &lt; &gt; 'GOOD')</code></pre> <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Names of all the employees with at least one of their customers having a 'GOOD' rating</p>",
            "<b>B.</b> <p>Names of all the employees with at most one of their customers having a 'GOOD' rating.</p>",
            "<b>C.</b> <p>Names of all the employees with none of their customers having a 'GOOD' rating.</p>",
            "<b>D.</b> <p>Names of all the employees with all their customers having a 'GOOD' rating.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Names of all the employees with all their customers having a 'GOOD' rating.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2089/gate2014-3-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 124,
          "question": "<p>Consider the relational schema given below, where eId of the relation dependentis a foreign key referring to empId of the relation employee. Assume that every employee has at least one associated dependent in the dependent relation. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q30_1c9e79a8.jpg\">  <br>\nThe above query evaluates to the set of empIds of employees whose age is greater than that of <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>some dependent</p>",
            "<b>B.</b> <p>all dependents</p>",
            "<b>C.</b> <p>some of his/her dependents</p>",
            "<b>D.</b> <p>all of his/her dependents</p>"
          ],
          "correct_answer": "<b>D.</b> <p>all of his/her dependents</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2064/gate2014-3-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 125,
          "question": "<p>Consider the transactions T1, T2, and T3 and the schedules S1 and S2 given below. <br>\nT1 : r1(x); r1(Z) ; w1(x); w1(Z) <br>\nT2 : r2(x); r2(Z); w2(Z) <br>\nT3 : r3(x); r3(x); w3(Y)<br> <br>\nS1: r1(x); r3(Y); r3(x); r2(Y); r2(Z); w3(Y); w2(Z); r1(Z); w1(x); w1(Z) <br>\nS2: r1(x); r3(Y); r2(Y); r3(x); r1(Z); r2(Z); w3(Y); w1(x); w2(Z); w1(Z) <br>\nWhich one of the following statements about the schedules is TRUE? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is conflict-serializable</p>",
            "<b>B.</b> <p>Only S2 is conflict-serializable.</p>",
            "<b>C.</b> <p>Both S1 and S2 are conflict-serializable</p>",
            "<b>D.</b> <p>Neither S1 nor S2 is conflict-serializable</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Only S1 is conflict-serializable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2063/gate2014-3-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 126,
          "question": "<p>A prime attribute of a relation scheme R is an attribute that appears <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in all candidate keys of R.</p>",
            "<b>B.</b> <p>in some candidate key of R.</p>",
            "<b>C.</b> <p>in a foreign keys of R</p>",
            "<b>D.</b> <p>only in the primary key of R.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>in some candidate key of R.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2056/gate2014-3-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 127,
          "question": "<p>What is the optimized version of the relation algebra expression  \\(\\pi _{A1}(\\pi _{A2}(\\sigma _{F1}(\\sigma_{F2}(r))))\\) , where A1, A2 are sets of attributes in r with \\(A_{1}\\subset A_{2}\\) and F1, F2 are Boolean expressions based on the attributes in r? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\pi _{A1}(\\sigma_{(F1 \\wedge F2)}(r))\\)</p>",
            "<b>B.</b> <p>\\(\\pi _{A1}(\\sigma_{(F1\\vee F2)}(r))\\)</p>",
            "<b>C.</b> <p>\\(\\pi _{A2}(\\sigma_{(F1\\wedge F2)}(r))\\)</p>",
            "<b>D.</b> <p>\\(\\pi _{A2}(\\sigma_{(F1 \\vee F2)}(r))\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\pi _{A1}(\\sigma_{(F1 \\wedge F2)}(r))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2055/gate2014-3-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 128,
          "question": "<p>SQL allows duplicate tuples in relations, and correspondingly defines the multiplicity of\ntuples in the result of joins. Which one of the following queries always gives the same answer\nas the nested query shown below: <br>\nSelect * from R where a in (select S. a from S) <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Select R. * from R, S where R. a=S. a</p>",
            "<b>B.</b> <p>Select distinct R. * from R,S where R. a=S. a</p>",
            "<b>C.</b> <p>Select R. * from R, (select distinct a from S) as S1 where R. a=S1.a</p>",
            "<b>D.</b> <p>Select R. * from R, S where R.a = S. a and is unique R</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Select R. * from R, (select distinct a from S) as S1 where R. a=S1.a</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2021/gate2014-2-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 129,
          "question": "<p>Consider a join (relation algebra) between relations r(R)and s(S) using the nested loop\nmethod. There are 3 buffers each of size equal to disk block size, out of which one buffer is\nreserved for intermediate results. Assuming size(r(R))\\(\\lt\\)size(s(S)), the join will have fewer\nnumber of disk block accesses if <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>relation r(R) is in the outer loop.</p>",
            "<b>B.</b> <p>relation s(S) is in the outer loop</p>",
            "<b>C.</b> <p>join selection factor between r(R) and s(S) is more than 0.5.</p>",
            "<b>D.</b> <p>join selection factor between r(R) and s(S) is less than 0.5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>relation r(R) is in the outer loop.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1989/gate2014-2-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 130,
          "question": "<p>Consider the following schedule S of transactions T1, T2, T3, T4: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q29_87119e6e.jpg\"> <br> Which one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S is conflict-serializable but not recoverable</p>",
            "<b>B.</b> <p>S is not conflict-serializable but is recoverable</p>",
            "<b>C.</b> <p>S is both conflict-serializable and recoverable</p>",
            "<b>D.</b> <p>S is neither conflict-serializable nor is it recoverable</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S is both conflict-serializable and recoverable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1988/gate2014-2-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 131,
          "question": "<p>Given an instance of the STUDENTS relation as shown below <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q22_4febd6f8.jpg\"><br> For (StudentName, StudentAge) to be a key for this instance, the value x should NOT be\nequal to_______. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1980/gate2014-2-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 132,
          "question": "<p>The maximum number of super keys for the relation schema R (E, F, G, H) with E as the key\nis __________. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1978/gate2014-2-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 133,
          "question": "<p>Given the following schema:<br>\nemployees(emp-id, first-name, last-name, hire-date, dept-id, salary)  <br>\ndepartments(dept-id, dept-name, manager-id, location-id)<br>\nYou want to display the last names and hire dates of all latest hires in their respective\ndepartments in the location ID 1700. You issue the following query: <br><pre><code> SQL&gt;SELECT last-name, hire-date\nFROM employees\nWHERE (dept-id, hire-date) IN\n(SELECT dept-id, MAx(hire-date)\nFROM employees JOIN departments USING(dept-id)\nWHERE location-id = 1700\nGROUP BY dept-id); </code></pre>\nWhat is the outcome? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It executes but does not give the correct result</p>",
            "<b>B.</b> <p>It executes and gives the correct result.</p>",
            "<b>C.</b> <p>It generates an error because of pairwise comparison.</p>",
            "<b>D.</b> <p>It generates an error because the GROUP BY clause cannot be used with table joins in a sub-query</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It executes and gives the correct result.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1934/gate2014-1-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 134,
          "question": "<p>Given the following two statements: <br>\nS1: Every table with two single-valued attributes is in 1NF, 2NF, 3NF and BCNF <br>\nS2 : AB\\(\\rightarrow\\)C, D\\(\\rightarrow\\) E, E\\(\\rightarrow\\)C is a minimal cover for the set of functional dependencies AB\\(\\rightarrow\\)C, D\\(\\rightarrow\\)E, AB\\(\\rightarrow\\) E,E\\(\\rightarrow\\)C. <br>\nWhich one of the following is CORRECT? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is TRUE and S2 is FALSE</p>",
            "<b>B.</b> <p>Both S1 and S2 are TRUE.</p>",
            "<b>C.</b> <p>S1 is FALSE and S2 is TRUE.</p>",
            "<b>D.</b> <p>Both S1 and S2 are FALSE.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>S1 is TRUE and S2 is FALSE</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1797/gate2014-1-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 135,
          "question": "<p>Consider the following four schedules due to three transactions (indicted by the subscript)\nusing read and write on a data item x, denoted by  r(x) and w(x) respectively. Which one of\nthem is conflict serializable? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>r1(x); r2(x); w1(x); r3(x);  w2(x)</p>",
            "<b>B.</b> <p>r2(x);  r1(x);  w2(x);  r3(x);  w1(x)</p>",
            "<b>C.</b> <p>r3(x); r2(x); r1(x); w2(x);  w1(x)</p>",
            "<b>D.</b> <p>r2(x); w2(x); r3(x); r1(x); w1(x)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>r2(x); w2(x); r3(x); r1(x); w1(x)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1796/gate2014-1-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 136,
          "question": "<p>Given the following statements:<br>\nS1: A foreign key declaration can always be replaced by an equivalent check\nassertion in SQL <br>\nS2: Given the table R(a,b,c) where a and b together form the primary key, the following is a\nvalid table definition. <br>\nCREATE TABLE S ( <br>\na INTEGER, <br>\nd INTEGER, <br>\ne INTEGER, <br>\nPRIMARY KEY (d), <br>\nFOREIGN KEY (a) references R) <br>\nWhich one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is TRUE and S2 is a FALSE</p>",
            "<b>B.</b> <p>Both S1 and S2 are TRUE</p>",
            "<b>C.</b> <p>S1 is FALSE and S2 is a TRUE</p>",
            "<b>D.</b> <p>Both S1 and S2 are FALSE</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both S1 and S2 are FALSE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1789/gate2014-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 137,
          "question": "<p>Consider the relation scheme R = (E, F, G, H, I, J, K, L, M, N) and the set of functional\ndependencies <br> {{E,F}\\(\\rightarrow\\){G}, {F}\\(\\rightarrow\\){I,J}, {E,H}\\(\\rightarrow\\){K,L},  {K}\\(\\rightarrow\\){M},\n{L}\\(\\rightarrow\\){N} }  on R. What is the key for R? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{E, F}</p>",
            "<b>B.</b> <p>{E, F, H}</p>",
            "<b>C.</b> <p>{E, F, H, K, L}</p>",
            "<b>D.</b> <p>{E}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{E, F, H}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1788/gate2014-1-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 138,
          "question": "<p>Embedded pointer provides <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A secondary access path</p>",
            "<b>B.</b> <p>A physical record key</p>",
            "<b>C.</b> <p>An inverted index</p>",
            "<b>D.</b> <p>A primary key</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A secondary access path</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44407/isro-2013-61-isro2008-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 139,
          "question": "<p>The physical location of a record determined by a formula that transforms a file key into a record location is <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hashed file</p>",
            "<b>B.</b> <p>B-Tree file</p>",
            "<b>C.</b> <p>Indexed file</p>",
            "<b>D.</b> <p>Sequential file</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Hashed file</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43938/isro-2013-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 140,
          "question": "<p>Calculate the order of leaf (\\(P_{leaf}\\)) and non leaf (P) nodes of a \\(B^{+}\\) tree based on the information given below.\n<br><br>\nSearch key field = 12 field\n<br>\nRecord pointer = 10 bytes\n<br>\nBlock pointer = 8 bytes\n<br>\nBlock size = 1KB <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(P_{leaf}\\) = 51 &amp; p = 46</p>",
            "<b>B.</b> <p>\\(P_{leaf}\\) = 47 &amp; p = 52</p>",
            "<b>C.</b> <p>\\(P_{leaf}\\) = 46 &amp; p = 51</p>",
            "<b>D.</b> <p>\\(P_{leaf}\\) = 52 &amp; p = 47</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(P_{leaf}\\) = 46 &amp; p = 51</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43933/isro-2013-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 141,
          "question": "<p>Consider the following dependencies and the BOOK table in a relational database design. Determine the normal form of the given relation.<br>\nISBN \\(\\rightarrow\\) Title<br>\nISBN \\(\\rightarrow\\) Publisher<br>\nPublisher \\(\\rightarrow\\) Address<br> <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First Normal Form</p>",
            "<b>B.</b> <p>Second Normal Form</p>",
            "<b>C.</b> <p>Third Normal Form</p>",
            "<b>D.</b> <p>BCNF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Second Normal Form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43861/isro-2013-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 142,
          "question": "<p>Consider the following relational schema:<br>\nSuppliers (sid:integer, sname:string, saddress:string)<br>\nParts (pid:integer, pname:string, pcolor:string)<br>\nCatalog (sid:integer, pid:integer, pcost:real)<br>\nWhat is the result of the following query?<br><pre><code> (SELECT Catalog.pid from Suppliers, Catalog\nWHERE Suppliers.sid = Catalog.sid)\nMINUS\n(SELECT Catalog.pid from Suppliers, Catalog\nWHERE Suppliers.sname &lt;&gt; 'Sachin' and Suppliers.sid = Catalog.sid)</code></pre> <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Pid of parts supplied by all except Sachin</p>",
            "<b>B.</b> <p>Pid of parts supplied only by Sachin</p>",
            "<b>C.</b> <p>Pid of parts available in catalog supplied by Sachin</p>",
            "<b>D.</b> <p>Pid of parts available in catalog supplied by all except Sachin</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Pid of parts supplied only by Sachin</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43857/isro-2013-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 143,
          "question": "<p>Which of the following is the highest isolation level in transaction management? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Serializable</p>",
            "<b>B.</b> <p>Repeated Read</p>",
            "<b>C.</b> <p>Committed Read</p>",
            "<b>D.</b> <p>Uncommitted Read</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Serializable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43855/isro-2013-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 144,
          "question": "<p>Relation R has eight attributes ABCDEFGH. Fields of R contain only atomic values.  <br>  \\(F=\\{CH\\rightarrow G, A\\rightarrow BC,B\\rightarrow CFH,E\\rightarrow A,F\\rightarrow EG\\}\\)  is a set of functional dependencies (FDs) so that \\(F^{+}\\) is\nexactly the set of FDs that hold for R. <br>The relation R is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in 1NF, but not in 2NF.</p>",
            "<b>B.</b> <p>in 2NF, but not in 3NF.</p>",
            "<b>C.</b> <p>in 3NF, but not in BCNF.</p>",
            "<b>D.</b> <p>in BCNF</p>"
          ],
          "correct_answer": "<b>A.</b> <p>in 1NF, but not in 2NF.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43290/gate2013-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 145,
          "question": "<p>Relation R has eight attributes ABCDEFGH. Fields of R contain only atomic values.  <br>  \\(F=\\{CH\\rightarrow G, A\\rightarrow BC,B\\rightarrow CFH,E\\rightarrow A,F\\rightarrow EG\\}\\)  is a set of functional dependencies (FDs) so that \\(F^{+}\\) is\nexactly the set of FDs that hold for R. <br>How many candidate keys does the relation R have? <br><br><strong>(GATE CSE 2013)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/1558/gate2013-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 146,
          "question": "<p>Consider the following relational schema.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q35_e9b3f125.jpg\"> <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II, III and IV</p>",
            "<b>B.</b> <p>I, II and III only</p>",
            "<b>C.</b> <p>I, II and IV only</p>",
            "<b>D.</b> <p>II, III and IV only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I, II, III and IV</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1546/gate2013-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 147,
          "question": "<p>An index is clustered, if <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it is on a set of fields that form a candidate key.</p>",
            "<b>B.</b> <p>it is on a set of fields that include the primary key</p>",
            "<b>C.</b> <p>the data records of the file are organized in the same order as the data entries of the index.</p>",
            "<b>D.</b> <p>the data records of the file are organized not in the same order as the data entries of the index.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the data records of the file are organized in the same order as the data entries of the index.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1437/gate2013-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 148,
          "question": "<p>Consider the following relations A, B and C:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q50_b1b0feea.jpg\"> <br>How many tuples does the result of the following SQL query contain?<pre><code> SELECT A.Id\nFROM A\nWHERE A.Age &gt; ALL (SELECT B.Age\nFROM B\nWHERE B.Name = 'Arun') </code></pre> <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>0</p>",
            "<b>D.</b> <p>1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43313/gate2012-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 149,
          "question": "<p>Consider the following relations A, B and C:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q50_b1b0feea.jpg\"> <br>How many tuples does the result of the following relational algebra expression contain? Assume\nthat the schema of A\\(\\cup\\)B is the same as that of A. <br>\\((A\\cup B)\\bowtie _{A.Id \\gt 40 \\vee C.Id \\lt 15}C\\) <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>9</p>"
          ],
          "correct_answer": "<b>A.</b> <p>7</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2180/gate2012-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 150,
          "question": "<p>Suppose R1(A, B) and R2(C, D) are two relation schemas. Let r1 and r2 be the corresponding\nrelation instances. B is a foreign key that refers to C in R2. If data in r1 and r2 satisfy referential\nintegrity constraints, which of the following is ALWAYS TRUE? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Pi_{B}(r_{1})- \\Pi_{C}(r_{2}) =\\phi\\)</p>",
            "<b>B.</b> <p>\\(\\Pi_{C}(r_{1})- \\Pi_{B}(r_{2}) =\\phi\\)</p>",
            "<b>C.</b> <p>\\(\\Pi_{B}(r_{1})= \\Pi_{C}(r_{2})\\)</p>",
            "<b>D.</b> <p>\\(\\Pi_{B}(r_{1})- \\Pi_{C}(r_{2}) \\neq \\phi\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Pi_{B}(r_{1})- \\Pi_{C}(r_{2}) =\\phi\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2151/gate2012-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 151,
          "question": "<p>Consider the following transactions with data items P and Q initialized to zero:<pre><code>\nT1 :read (P);\n       read (Q);\n       if P = 0 then Q := Q + 1 ; \n       write (Q).\nT2 : read (Q);\n        read (P);\n        if Q = 0 then P := P + 1 ;\n        write (P). </code></pre>\nAny non-serial interleaving of T1 and T2 for concurrent execution leads to <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a serializable schedule</p>",
            "<b>B.</b> <p>a schedule that is not conflict serializable</p>",
            "<b>C.</b> <p>a conflict serializable schedule</p>",
            "<b>D.</b> <p>a schedule for which a precedence graph cannot be drawn</p>"
          ],
          "correct_answer": "<b>B.</b> <p>a schedule that is not conflict serializable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1612/gate2012-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 152,
          "question": "<p>Which of the following statements are TRUE about an SQL query? <br>\nP : An SQL query can contain a HAVING clause even if it does not have a GROUP BY clause <br>\nQ : An SQL query can contain a HAVING clause only if it has a GROUP BY clause <br>\nR : All attributes used in the GROUP BY clause must appear in the SELECT clause <br>\nS : Not all attributes used in the GROUP BY clause need to appear in the SELECT clause <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P and R</p>",
            "<b>B.</b> <p>P and S</p>",
            "<b>C.</b> <p>Q and R</p>",
            "<b>D.</b> <p>Q and S</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Q and R</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47/gate2012-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 153,
          "question": "<p>Given the basic ER and relational models, which of the following is INCORRECT? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An attribute of an entity can have more than one value</p>",
            "<b>B.</b> <p>An attribute of an entity can be composite</p>",
            "<b>C.</b> <p>In a row of a relational table, an attribute can have more than one value</p>",
            "<b>D.</b> <p>In a row of a relational table, an attribute can have exactly one value or a NULL value</p>"
          ],
          "correct_answer": "<b>C.</b> <p>In a row of a relational table, an attribute can have more than one value</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/46/gate2012-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 154,
          "question": "<p>Which of the following is TRUE? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every relation in 3NF is also in BCNF</p>",
            "<b>B.</b> <p>A relation R is in 3NF if every non-prime attribute of R is fully functionally dependent on every key of R</p>",
            "<b>C.</b> <p>Every relation in BCNF is also in 3NF</p>",
            "<b>D.</b> <p>No relation can be in both BCNF and 3NF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Every relation in BCNF is also in 3NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/34/gate2012-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 155,
          "question": "<p>In functional dependency Armstrong inference rules refers to <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Reflexive, Augmentation and Decomposition</p>",
            "<b>B.</b> <p>Transitive, Augmentation and Reflexive</p>",
            "<b>C.</b> <p>Augmentation, Transitive, Reflexive and Decomposition</p>",
            "<b>D.</b> <p>Reflexive, Transitive and Decomposition</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Transitive, Augmentation and Reflexive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50639/isro2011-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 156,
          "question": "<p>Which normal form is based on the concept of 'full functional dependency' is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First Normal Form</p>",
            "<b>B.</b> <p>Second  Normal Form</p>",
            "<b>C.</b> <p>Third Normal Form</p>",
            "<b>D.</b> <p>Fourth Normal Form</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Second  Normal Form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18117/isro2011-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 157,
          "question": "<p>Which type of DBMS provides support for maintaining several versions of the same entity? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Relational Database Management System</p>",
            "<b>B.</b> <p>Hierarchical</p>",
            "<b>C.</b> <p>Object Oriented Database Management System</p>",
            "<b>D.</b> <p>Network</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Object Oriented Database Management System</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50618/isro2011-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 158,
          "question": "<p>What is the equivalent serial schedule for the following transactions? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q15_d25b3ef5.jpg\"><br> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T_1 - T_2 - T_3\\)</p>",
            "<b>B.</b> <p>\\(T_3 - T_1 - T_2\\)</p>",
            "<b>C.</b> <p>\\(T_2 - T_1 - T_3\\)</p>",
            "<b>D.</b> <p>\\(T_1 - T_3 - T_2\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T_3 - T_1 - T_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52269/isro2011-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 159,
          "question": "<p>Database table by name Loan_Records is given below.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q36_8949872d.jpg\"> <br>\nWhat is the output of the following SQL query?<pre><code> \nSELECT count(*)\nFROM(\n(SELECT Borrower, Bank_Manager FROM Loan_Records) AS S\nNATURAL JOIN\n(SELECT Bank_Manager, Loan_Amount FROM Loan_Records) AS T); </code></pre> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>C.</b> <p>5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2148/gate2011-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 160,
          "question": "<p>Consider a relational table r with sufficient number of records, having attributes\n\\(A_{1}, A_{2},..., A_{n}\\) and let \\(1\\leq p\\leq n\\)\n. Two queries Q1 and Q2 are given below. <br><br>\\(Q1:\\pi _{A_{1}....A_{n}}(\\sigma _{A_{p}=c}(r)) \\) where c is a constant <br> \\(Q2:\\pi _{A1....A_{n}}(\\sigma _{c_{1}\\leq A_{p}\\leq c_{2}}(r)) \\) where \\(c_{1}\\) and \\(c_{2}\\) are constants <br><br> The database can be configured to do ordered indexing on \\(A_{p}\\) or hashing on  \\(A_{p}\\).<br><br>\nWhich of the following statements is TRUE? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Ordered indexing will always outperform hashing for both queries</p>",
            "<b>B.</b> <p>Hashing will always outperform ordered indexing for both queries</p>",
            "<b>C.</b> <p>Hashing will outperform ordered indexing on Q1, but not on Q2</p>",
            "<b>D.</b> <p>Hashing will outperform ordered indexing on Q2, but not on Q1.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Hashing will outperform ordered indexing on Q1, but not on Q2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2141/gate2011-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 161,
          "question": "<p>Consider a database table T containing two columns X and Y each of type integer.\nAfter the creation of the table, one record (X=1,Y=1) is inserted in the table. <br><br>\nLet MX and MY denote the respective maximum values of X and Y among all\nrecords in the table at any point in time. Using MX and MY, new records are\ninserted in the table 128 times with X and Y values being MX+1, 2*MY+1\nrespectively. It may be noted that each time after the insertion, values of MX and\nMY change. <br><br>\nWhat will be the output of the following SQL query after the steps mentioned\nabove are carried out? <br><br>\nSELECT Y FROM T WHERE X=7; <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>127</p>",
            "<b>B.</b> <p>255</p>",
            "<b>C.</b> <p>129</p>",
            "<b>D.</b> <p>257</p>"
          ],
          "correct_answer": "<b>A.</b> <p>127</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2134/gate2011-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 162,
          "question": "<p>Consider a relational table with a single record for each registered student with\nthe following attributes. <br><br>\n1. Registration_Number: Unique registration number for each registered student <br>\n2. UID: Unique Identity number, unique at the national level for each citizen <br>\n3. BankAccount_Number: Unique account number at the bank. A student can\nhave multiple accounts or joint accounts. This attributes stores the primary\naccount number <br>\n4. Name: Name of the Student <br>\n5. Hostel_Room: Room number of the hostel <br><br>\nWhich of the following options is INCORRECT? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>BankAccount_Number is a candidate key</p>",
            "<b>B.</b> <p>Registration_Number can be a primary key</p>",
            "<b>C.</b> <p>UID is a candidate key if all students are from the same country</p>",
            "<b>D.</b> <p>If \\(S\\) is a superkey such that \\(\\text{S}\\cap \\text{UID}\\) is NULL then \\(\\text{S}\\cup \\text{UID}\\) is also a superkey</p>"
          ],
          "correct_answer": "<b>A.</b> <p>BankAccount_Number is a candidate key</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2114/gate2011-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 163,
          "question": "<p>The following functional dependencies hold for relations R(A, B, C) and S(B, D, E) <br> <br>\nB \\(\\rightarrow\\)A, <br>\nA \\(\\rightarrow\\)C<br> <br>\nThe relation R contains 200tuples and the relation S contains 100tuples. What is\nthe maximum number of tuples possible in the natural join R\\(\\Join\\) S? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100</p>",
            "<b>B.</b> <p>200</p>",
            "<b>C.</b> <p>300</p>",
            "<b>D.</b> <p>2000</p>"
          ],
          "correct_answer": "<b>A.</b> <p>100</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2344/gate2010-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 164,
          "question": "<p>Consider the following schedule for transactions T1, T2 and T3:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q42_ec75b74c.jpg\"><br>\nWhich one of the schedules below is the correct serialization of the above? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T1 \\(\\rightarrow\\) T3 \\(\\rightarrow\\) T2</p>",
            "<b>B.</b> <p>T2 \\(\\rightarrow\\) T1 \\(\\rightarrow\\) T3</p>",
            "<b>C.</b> <p>T2 \\(\\rightarrow\\) T3 \\(\\rightarrow\\) T1</p>",
            "<b>D.</b> <p>T3 \\(\\rightarrow\\) T1 \\(\\rightarrow\\) T2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>T1 \\(\\rightarrow\\) T3 \\(\\rightarrow\\) T2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2343/gate2010-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 165,
          "question": "<p>Which of the following concurrency control protocols ensure both conflict\nserializability and freedom from deadlock?<br>\nI. 2-phase locking <br>\nII. Time-stamp ordering <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2196/gate2010-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 166,
          "question": "<p>A relational schema for a train reservation database is given below\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q19_f503c6ab.jpg\"> <br> What pids are returned by the following SQL query for the above instance of the\ntables?<pre><code> SELECT pid\nFROM Re servation\nWHERE class = 'AC' AND\n     EXISTS (SELECT *\n                      FROM Passenger\n                      WHERE age &gt; 65 AND\n                      Passenger.pid = Reservation.pid) </code></pre> <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1,0</p>",
            "<b>B.</b> <p>1,2</p>",
            "<b>C.</b> <p>1,3</p>",
            "<b>D.</b> <p>1,5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1,3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2194/gate2010-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 167,
          "question": "<p>Which of the following scenarios may lead to an irrecoverable error in a database system? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A transaction writes a data item after it is read by an uncommitted transaction</p>",
            "<b>B.</b> <p>A transaction reads a data item after it is read by an uncommitted transaction</p>",
            "<b>C.</b> <p>A transaction reads a data item after it is written by a committed transaction</p>",
            "<b>D.</b> <p>A transaction reads a data item after it is written by an uncommitted transaction</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A transaction reads a data item after it is written by an uncommitted transaction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/919/gate2003-29-isro2009-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 168,
          "question": "<p>Purpose of 'Foreign Key' in a table is to ensure <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Null Integrity</p>",
            "<b>B.</b> <p>Referential Integrity</p>",
            "<b>C.</b> <p>Domain Integrity</p>",
            "<b>D.</b> <p>Null and Domain Integrity</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Referential Integrity</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47321/isro2009-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 169,
          "question": "<p>Which of the following contains complete record of all activity that affected the contents of a database during a certain period of time? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Transaction log</p>",
            "<b>B.</b> <p>Query language</p>",
            "<b>C.</b> <p>Report writer</p>",
            "<b>D.</b> <p>Data manipulation language</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Transaction log</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50569/isro2009-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 170,
          "question": "<p>A locked database file can be <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Accessed by only one user</p>",
            "<b>B.</b> <p>Modified by users with the correct password</p>",
            "<b>C.</b> <p>Used to hide sensitive information</p>",
            "<b>D.</b> <p>Updated by more than one user</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Accessed by only one user</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48081/isro2009-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 171,
          "question": "<p>Consider the following relational schema:<pre><code>\nSuppliers(sid:integer, sname:string, city:string, street:string)\nParts(pid:integer, pname:string, color:string)\nCatalog(sid:integer, pid:integer, cost:real)</code></pre> Assume that, in the suppliers relation above, each supplier and each street within\na city has a unique name, and (sname, city) forms a candidate key. No other\nfunctional dependencies are implied other than those implied by primary and\ncandidate keys. Which one of the following is TRUE about the above schema? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The schema is in BCNF</p>",
            "<b>B.</b> <p>The schema is in 3NF but not in BCNF</p>",
            "<b>C.</b> <p>The schema is in 2NF but not in 3NF</p>",
            "<b>D.</b> <p>The schema is not in 2NF</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The schema is in BCNF</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43474/gate2009-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 172,
          "question": "<p>Consider the following relational schema:<pre><code>\nSuppliers(sid:integer, sname:string, city:string, street:string)\nParts(pid:integer, pname:string, color:string)\nCatalog(sid:integer, pid:integer, cost:real)</code></pre> Consider the following relational query on the above database:<pre><code>\nSELECT S.sname\nFROM Suppliers S\nWHERE S.sid NOT IN (SELECT C.sid\nFROM Catalog C\nWHERE C.pid NOT (SELECT P.pid\nFROM Parts P\nWHERE P.color&lt;&gt; 'blue')) </code></pre> Assume that relations corresponding to the above schema are not empty. Which one of the following is the correct interpretation of the above query? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Find the names of all suppliers who have supplied a non-blue part.</p>",
            "<b>B.</b> <p>Find the names of all suppliers who have not supplied a non-blue part.</p>",
            "<b>C.</b> <p>Find the names of all suppliers who have supplied only blue parts.</p>",
            "<b>D.</b> <p>Find the names of all suppliers who have not supplied only blue parts.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Find the names of all suppliers who have supplied a non-blue part.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1339/gate2009-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 173,
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
          "id": 174,
          "question": "<p>Consider two transactions T1 and T2, and four schedules S1, S2, S3, S4 of T1 and T2\nas given below: <br><br> \\(T_{1}:R_{1}[x]W_{1}[x]W_{1}[y] \\)<br>  \\(T_{2}:R_{2}[x]R_{2}[x]W_{1}[y] \\)<br> \\(S_{1}:R_{1}[x]R_{2}[x]R_{2}[y]W_{1}[x]W_{1}[y]W_{2}[y] \\)<br> \\(S_{2}:R_{1}[x]R_{2}[x]R_{2}[y]W_{1}[x]W_{2}[y]W_{1}[y] \\)<br> \\(S_{3}:R_{1}[x]W_{1}[x]R_{2}[x]W_{1}[y]R_{2}[y]W_{2}[y] \\)<br> \\(S_{4}:R_{2}[x]R_{2}[y]R_{1}[x]W_{1}[x]W_{1}[y]W_{2}[y]\\)<br><br>\nWhich of the above schedules are conflict-serializable? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 and S2</p>",
            "<b>B.</b> <p>S2 and S3</p>",
            "<b>C.</b> <p>S3 only</p>",
            "<b>D.</b> <p>S4 only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S2 and S3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1329/gate2009-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 175,
          "question": "<p>Embedded pointer provides <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A secondary access path</p>",
            "<b>B.</b> <p>A physical record key</p>",
            "<b>C.</b> <p>An inverted index</p>",
            "<b>D.</b> <p>A primary key</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A secondary access path</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44407/isro-2013-61-isro2008-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 176,
          "question": "<p>The join operation can be defined as <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a cartesian product of two relations followed by a selection</p>",
            "<b>B.</b> <p>a cartesian product of two relations</p>",
            "<b>C.</b> <p>a union of two relations followed by cartesian product of the two relations</p>",
            "<b>D.</b> <p>a union of two relations</p>"
          ],
          "correct_answer": "<b>A.</b> <p>a cartesian product of two relations followed by a selection</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49914/isro2008-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 177,
          "question": "<p>Consider the following relational schema:<pre><code>Student(school-id,sch-roll-no,sname,saddress)\nSchool(school-id,sch-name,sch-address,sch-phone)\nEnrolment(school-id,sch-roll-no,erollno,examname)\nExamResult(erollno,examname,marks) </code></pre> <br>Consider the following tuple relational calculus query. <br> \\(\\begin{array}{l} \\{t \\mid \\exists E \\in \\text { Enrolment } t=E \\text { .school-id } \\\\ \\wedge \\mid\\{x \\mid x \\in \\text { Enrolment } \\wedge x . \\text { school-id }=t \\wedge(\\exists B \\in \\text { ExamResult } B . \\text { erollno }=x . \\text { erollno } \\wedge B \\\\ \\text { examname }=x . \\text { examname } \\wedge B . \\text { marks }&gt;35)\\}|\\div|\\{x \\mid x \\in \\text { Enrolment } \\wedge x . \\text { school-id }=t\\} \\mid \\\\ * 100&gt;35\\} \\end{array}\\)<br><br>If a student needs to score more than 35 marks to pass an exam, what does the query return? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The empty set</p>",
            "<b>B.</b> <p>schools with more than 35% of its students enrolled in some exam or the other</p>",
            "<b>C.</b> <p>schools with a pass percentage above 35% over all exams taken together</p>",
            "<b>D.</b> <p>schools with a pass percentage above 35% over each exam</p>"
          ],
          "correct_answer": "<b>C.</b> <p>schools with a pass percentage above 35% over all exams taken together</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3389/gate2008-it-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 178,
          "question": "<p>Consider the following relational schema:<pre><code>Student(school-id,sch-roll-no,sname,saddress)\nSchool(school-id,sch-name,sch-address,sch-phone)\nEnrolment(school-id,sch-roll-no,erollno,examname)\nExamResult(erollno,examname,marks) </code></pre> <br>What does the following SQL query output?<pre><code>SELECT\tsch-name, COUNT (*)\nFROM\tSchool C, Enrolment E, ExamResult R\nWHERE\tE.school-id = C.school-id\nAND\nE.examname = R.examname AND E.erollno = R.erollno\nAND\nR.marks = 100 AND S.school-id IN (SELECT school-id\n                                FROM student\n                                GROUP BY school-id\n                                 HAVING COUNT (*) &gt; 200)\nGROUP By school-id</code></pre> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>for each school with more than 200 students appearing in exams, the name of the school and the number of 100's scored by its students</p>",
            "<b>B.</b> <p>for each school with more than 200 students in it, the name of the school and the number of 100's scored by its students</p>",
            "<b>C.</b> <p>for each school with more than 200 students in it, the name of the school and the number of its students scoring 100 in at least one exam</p>",
            "<b>D.</b> <p>nothing; the query has a syntax error</p>"
          ],
          "correct_answer": "<b>D.</b> <p>nothing; the query has a syntax error</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3388/gate2008-it-74\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 179,
          "question": "<p>Consider the following three schedules of transactions T1, T2 and T3. <br>[Notation: In the following NYO represents the action Y (R for read, W for write) performed by transaction N on object O.]<br><br>\\(\\begin{array}{lllllllllll} \\hline(S 1) &amp; 2 R A &amp; 2 W A &amp; 3 R C &amp; 2 W B &amp; 3 W A &amp; 3 W C &amp; 1 R A &amp; 1 R B &amp; 1 W A &amp; 1 W B \\\\ \\hline(S 2) &amp; 3 R C &amp; 2 R A &amp; 2 W A &amp; 2 W B &amp; 3 W A &amp; 1 R A &amp; 1 R B &amp; 1 W A &amp; 1 W B &amp; 3 W C \\\\ \\hline(S 3) &amp; 2 R A &amp; 3 R C &amp; 3 W A &amp; 2 W A &amp; 2 W B &amp; 3 W C &amp; 1 R A &amp; 1 R B &amp; 1 W A &amp; 1 W B \\\\ \\hline \\end{array}\\)<br><br>Which of the following statements is TRUE? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1, S2 and S3 are all conflict equivalent to each other</p>",
            "<b>B.</b> <p>No two of S1, S2 and S3 are conflict equivalent to each other</p>",
            "<b>C.</b> <p>S2 is conflict equivalent to S3, but not to S1</p>",
            "<b>D.</b> <p>S1 is conflict equivalent to S2, but not to S3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>S1 is conflict equivalent to S2, but not to S3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3374/gate2008-it-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 180,
          "question": "<p>Let R (A, B, C, D, E, P, G) be a relational schema in which the following functional dependencies are known to hold: <br>\\(AB \\to CD, DE \\to P, C \\to E, P \\to C\\) and \\(B \\to G\\). <br> The relational schema R is <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in BCNF</p>",
            "<b>B.</b> <p>in 3NF, but not in BCNF</p>",
            "<b>C.</b> <p>in 2NF, but not in 3NF</p>",
            "<b>D.</b> <p>not in 2NF</p>"
          ],
          "correct_answer": "<b>D.</b> <p>not in 2NF</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3372/gate2008-it-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 181,
          "question": "<p>Let \\(R (A, B, C, D)\\) be a relational schema in which the following functional dependencies are known to hold: <br>\\(A \\to B, \\;  B \\to C, \\; C \\to D \\) and \\(D \\to B\\). <br>The decomposition of \\(R\\) into \\((A,B), (B,C), (B,D)\\) <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>gives a lossless join, and is dependency preserving</p>",
            "<b>B.</b> <p>gives a lossless join, but is not dependency preserving</p>",
            "<b>C.</b> <p>does not give a lossless join, but is dependency preserving</p>",
            "<b>D.</b> <p>does not give a lossless join and is not dependency preserving</p>"
          ],
          "correct_answer": "<b>A.</b> <p>gives a lossless join, and is dependency preserving</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3371/gate2008-it-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 182,
          "question": "<p>Consider the following ER diagram <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q82_a2c9ca9e.jpg\">  <br>Which of the following is a correct attribute set for one of the tables for the minimum number of tables needed to represent M, N, P, R1, R2? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{M1,M2,M3,P1}</p>",
            "<b>B.</b> <p>{M1,P1,N1,N2}</p>",
            "<b>C.</b> <p>{M1,P1,N1}</p>",
            "<b>D.</b> <p>{M1,P1}</p>"
          ],
          "correct_answer": "<b>A.</b> <p>{M1,M2,M3,P1}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/87025/gate2008-83#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 183,
          "question": "<p>Consider the following ER diagram <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q82_a2c9ca9e.jpg\">  <br> The minimum number of tables needed to represent M, N, P, R1, R2 is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/390/gate2008-82#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 184,
          "question": "<p>Consider a file of 16384 records. Each record is 32 bytes long and its key field is\nof size 6 bytes. The file is ordered on a non-key field, and the file organization is\nunspanned. The file is stored in a file system with block size 1024 bytes, and the\nsize of a block pointer is 10 bytes. If the secondary index is built on the key field\nof the file, and a multi-level index scheme is used to store the secondary index,\nthe number of first-level and second-level blocks in the multi-level index are respectively <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8 and 0</p>",
            "<b>B.</b> <p>128 and 6</p>",
            "<b>C.</b> <p>256 and 4</p>",
            "<b>D.</b> <p>512 and 5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>256 and 4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/259/gate2008-70#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 185,
          "question": "<p>Consider the following relational schemes for a library database:<br><br>\nBook (Title, Author, Catalog_ no, Publisher, Year, Price) <br>\nCollection (Title,Author, Catalog_ no) <br><br>\nwith in the following functional dependencies: <br><br>\nI. Title Author \\(\\rightarrow\\) Catalog_no <br>\nII. Catalog_no \\(\\rightarrow\\) Title Author Publisher Year <br>\nIII. Publisher Title Year \\(\\rightarrow\\) Price <br><br>\nAssume {Author, Title} is the key for both schemes. Which of the following\nstatements is true? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both Book and Collection are in BCNF</p>",
            "<b>B.</b> <p>Both Book and Collection are in 3NF only</p>",
            "<b>C.</b> <p>Book is in 2NF and Collection is in 3NF</p>",
            "<b>D.</b> <p>Both Book and Collection are in 2NF only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Book is in 2NF and Collection is in 3NF</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/492/gate2008-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 186,
          "question": "<p>Let R and S be two relations with the following schema<br><br>\nR (\\(\\underline{P},\\underline{Q}\\),R1,R2,R3)<br><br>\nS (\\(\\underline{P},\\underline{Q}\\),S1,S2)<br><br>\nWhere {P, Q} is the key for both schemas. Which of the following queries are\nequivalent? <br><br> I. \\( \\Pi _{P}(R\\Join S)\\) <br> II. \\(\\Pi _{p}(R)\\Join \\Pi _{P}(S)\\)<br> III. \\(\\Pi _{P}(\\Pi _{P,Q}(R)\\cap \\Pi _{P,Q}(S))\\)<br> IV. \\(\\Pi _{P}(\\Pi _{P,Q}(R)-(\\Pi _{P,Q}(R)-\\Pi _{P,Q}(S)))\\) <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only I and II</p>",
            "<b>B.</b> <p>Only I and III</p>",
            "<b>C.</b> <p>Only I, II and III</p>",
            "<b>D.</b> <p>Only I, III and IV</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Only I, III and IV</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/491/gate2008-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 187,
          "question": "<p>A clustering index is defined on the fields which are of type <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>non-key and ordering</p>",
            "<b>B.</b> <p>non-key and non-ordering</p>",
            "<b>C.</b> <p>key and ordering</p>",
            "<b>D.</b> <p>key and non-ordering</p>"
          ],
          "correct_answer": "<b>A.</b> <p>non-key and ordering</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/414/gate2008-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 188,
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
          "id": 189,
          "question": "<p>Which of the following is correct with respect to Two phase commit protocol? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Ensures serializability</p>",
            "<b>B.</b> <p>Prevents Deadlock</p>",
            "<b>C.</b> <p>Detects Deadlock</p>",
            "<b>D.</b> <p>Recover from Deadlock</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Ensures serializability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49627/isro2007-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 190,
          "question": "<p>BCNF is not used for cases where a relation has <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Two (or more) candidate keys</p>",
            "<b>B.</b> <p>Two candidate keys and composite</p>",
            "<b>C.</b> <p>The candidate key overlap</p>",
            "<b>D.</b> <p>Two mutually exclusive foreign keys</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Two candidate keys and composite</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49536/isro2007-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 191,
          "question": "<p>Which operation is used to extract specified columns from a table? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Project</p>",
            "<b>B.</b> <p>Join</p>",
            "<b>C.</b> <p>Extract</p>",
            "<b>D.</b> <p>Substitute</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Project</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49532/isro2007-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 192,
          "question": "<p>Armstrong's inference rule doesnot determine <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Reflexivity</p>",
            "<b>B.</b> <p>Augmentation</p>",
            "<b>C.</b> <p>Transitivity</p>",
            "<b>D.</b> <p>Mutual dependency</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Mutual dependency</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49531/isro2007-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 193,
          "question": "<p>A view of database that appears to an application program is known as <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Schema</p>",
            "<b>B.</b> <p>Subschema</p>",
            "<b>C.</b> <p>Virtual table</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Subschema</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49530/isro2007-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 194,
          "question": "<p>Which of the following is aggregate function in SQL? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Avg</p>",
            "<b>B.</b> <p>Select</p>",
            "<b>C.</b> <p>Ordered by</p>",
            "<b>D.</b> <p>distinct</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Avg</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49527/isro2007-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 195,
          "question": "<p>Which commands are used to control access over objects in relational database? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>CASCADE &amp; MVD</p>",
            "<b>B.</b> <p>GRANT &amp; REVOKE</p>",
            "<b>C.</b> <p>QUE &amp; QUIST</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>GRANT &amp; REVOKE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49526/isro2007-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 196,
          "question": "<p>Consider the following relation schemas :<br>\nb-Schema = (b-name, b-city, assets)<br>\na-Schema = (a-num, b-name, bal)<br>\nd-Schema = (c-name, a-number)<br>\nLet branch, account and depositor be respectively instances of the above schemas. Assume that account and depositor relations are much bigger than the branch relation.<br>Consider the following query:<br>\\(\\Pi _{c-name}(\\sigma _{b-city=\"Agra\" \\wedge bal \\lt 0} (branch \\Join (account \\Join depositor)))\\)\n<br>Which one of the following queries is the most efficient version of the above query ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Pi _{c-name} (\\sigma_{bal \\lt 0} (\\sigma_{b-city=\"Agra\"} branch \\Join account) \\Join depositor)\\)</p>",
            "<b>B.</b> <p>\\(\\Pi _{c-name} (\\sigma_{b-city=\"Agra\"} branch \\Join (\\sigma_{bal \\lt 0} account \\Join depositor)\\)</p>",
            "<b>C.</b> <p>\\(\\Pi _{c-name} ((\\sigma_{b-city=\"Agra\"} branch \\Join \\sigma_{b-city=\"Agra\" \\wedge bal \\lt 0} account) \\Join depositor)\\)</p>",
            "<b>D.</b> <p>\\(\\Pi _{c-name} (\\sigma_{b-city=\"Agra\"} branch \\Join( \\sigma_{b-city=\"Agra\" \\wedge bal \\lt 0} account \\Join depositor))\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Pi _{c-name} (\\sigma_{bal \\lt 0} (\\sigma_{b-city=\"Agra\"} branch \\Join account) \\Join depositor)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3513/gate2007-it-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 197,
          "question": "<p>Consider the following implications relating to functional and multivalued dependencies given below, which may or may not be correct.<br><br>\ni. if \\(A \\rightarrow \\rightarrow B\\) and \\(A \\rightarrow \\rightarrow C\\) then \\(A \\rightarrow  BC\\)<br>\nii. if \\(A \\rightarrow B\\) and \\(A \\rightarrow C\\) then \\(A \\rightarrow \\rightarrow BC\\)<br>\niii. if \\(A \\rightarrow \\rightarrow BC\\) and \\(A \\rightarrow B\\) then \\(A \\rightarrow C\\)<br>\niv. if \\(A \\rightarrow BC\\) and \\(A \\rightarrow B\\) then \\(A \\rightarrow \\rightarrow C\\)<br><br>\nExactly how many of the above implications are valid? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3512/gate2007-it-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 198,
          "question": "<p>Consider the following two transactions : T1 and T2. <br>\nT1:read (A);<br>\nread (B);<br>\nif A = 0 then B \\(\\leftarrow \\) B + 1;<br>\nwrite (B);<br><br>\nT2 :\tread (B);<br>\nread (A);<br>\nif B \\(\\neq\\) 0 then A \\(\\leftarrow \\) A - 1;<br>\nwrite (A);<br><br>\nWhich of the following schemes, using shared and exclusive locks, satisfy the requirements for strict two phase locking for the above transactions?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q66_94480cd3.jpg\"><br> <br><br><strong>(GATE IT 2007)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/3511/gate2007-it-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 199,
          "question": "<p>Consider a selection of the form \\(\\sigma_{A\\leq 100} (r)\\), where r is a relation with 1000 tuples. Assume that the attribute values for A among the tuples are uniformly distributed in the interval [0, 500]. Which one of the following options is the best estimate of the number of tuples returned by the given selection query ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>50</p>",
            "<b>B.</b> <p>100</p>",
            "<b>C.</b> <p>150</p>",
            "<b>D.</b> <p>200</p>"
          ],
          "correct_answer": "<b>D.</b> <p>200</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3510/gate2007-it-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 200,
          "question": "<p>Consider the following schedules involving two transactions. Which one of the\nfollowing statements is TRUE? <br> \\(S_1 :r_1(X); r_1(Y); r_2(X); r_2(Y); w_2(Y); w_1(X)\\) <br> \\(S_2 :r_1(X); r_2(X); r_2(Y); w_2(Y); r_1(Y); w_1(X)\\) <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are conflict serializable.</p>",
            "<b>B.</b> <p>S1 is conflict serializable and S2 is not conflict serializable.</p>",
            "<b>C.</b> <p>S1 is not conflict serializable and S2 is conflict serializable.</p>",
            "<b>D.</b> <p>Both S1 and S2 are not conflict serializable.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S1 is not conflict serializable and S2 is conflict serializable.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1262/gate2007-64#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 201,
          "question": "<p>The order of a leaf node in a B+ tree is the maximum number of (value, data\nrecord pointer) pairs it can hold. Given that the block size is 1K bytes, data\nrecord pointer is 7 bytes long, the value field is 9 bytes long and a block pointer\nis 6 bytes long, what is the order of the leaf node? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>63</p>",
            "<b>B.</b> <p>64</p>",
            "<b>C.</b> <p>67</p>",
            "<b>D.</b> <p>68</p>"
          ],
          "correct_answer": "<b>A.</b> <p>63</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1261/gate2007-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 202,
          "question": "<p>Which one of the following statements if FALSE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Any relation with two attributes is in BCNF</p>",
            "<b>B.</b> <p>A relation in which every key has only one attribute is in 2NF</p>",
            "<b>C.</b> <p>A prime attribute can be transitively dependent on a key in a 3 NF relation.</p>",
            "<b>D.</b> <p>A prime attribute can be transitively dependent on a key in a BCNF relation.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A prime attribute can be transitively dependent on a key in a BCNF relation.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1260/gate2007-62#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 203,
          "question": "<p>Consider the table employee(empId, name, department, salary) and the two\nqueries Q1 ,Q2 below. Assuming that department 5 has more than one employee,\nand we want to find the employees who get higher salary than anyone in the department 5, which one of the statements is TRUE for any arbitrary employee table?<pre><code>Q1 : Select e.empId\n     From employee e\n     Where not exists\n        (Select * From employee s where s.department = \"5\" and \n                                        s.salary &gt;=e.salary) <br>\nQ2 : Select e.empId\n     From employee e\n     Where e.salary &gt; Any\n    (Select distinct salary From employee s Where s.department =\"5\"</code></pre> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Q1 is the correct query</p>",
            "<b>B.</b> <p>Q2 is the correct query</p>",
            "<b>C.</b> <p>Both Q1 and Q2 produce the same answer.</p>",
            "<b>D.</b> <p>Neither Q1 nor Q2 is the correct query</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Q1 is the correct query</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1259/gate2007-61#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 204,
          "question": "<p>Consider the relation employee(name, sex, supervisorName) with name as the\nkey. supervisorName gives the name of the supervisor of the employee under\nconsideration. What does the following Tuple Relational Calculus query produce? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q60_8949e2c3.jpg\"><br> <br><br><strong>(GATE CSE 2007)</strong></p>",
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
          "id": 205,
          "question": "<p>Information about a collection of students is given by the relation studinfo(\\(\\underline{studId}\\), name, sex). The relation enroll(studId, courseId) gives which student has enrolled for (or taken) what course(s). Assume that every course is taken by at least one male and at least one female student. What does the following relational algebra expression represent?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q59_39d5133d.jpg\"><br> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Courses in which all the female students are enrolled.</p>",
            "<b>B.</b> <p>Courses in which a proper subset of female students are enrolled.</p>",
            "<b>C.</b> <p>Courses in which only male students are enrolled.</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Courses in which a proper subset of female students are enrolled.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2428/gate2007-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 206,
          "question": "<p>Which of the following is TRUE about formulae in Conjunctive Normal Form? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>For any formula, there is a truth assignment for which at least half the\nclauses evaluate to true.</p>",
            "<b>B.</b> <p>For any formula, there is a truth assignment for which all the clauses\nevaluate to true.</p>",
            "<b>C.</b> <p>There is a formula such that for each truth assignment, at most one-fourth of\nthe clauses evaluate to true.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>For any formula, there is a truth assignment for which at least half the\nclauses evaluate to true.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1246/gate2007-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 207,
          "question": "<p>Consider a database with three relation instances shown below. The primary keys for the Drivers and Cars relation are did and cid respectively and the records are stored in ascending order of these primary keys as given in the tables. No indexing is available in the database.<br><br>\n\\(\\overset{\\text{D: Drivers relation}}{\\begin{array}{|c|l|r|c|}\\hline \\textbf{did}&amp; \\textbf{dname}&amp; \\textbf{rating}&amp; \\textbf{age} \\\\\\hline 22&amp; \\text{Karthikeyan}&amp; 7&amp; 25 \\\\ \\hline 29&amp; \\text{Salman}&amp; 1&amp; 33 \\\\ \\hline 31&amp; \\text{Boris}&amp; 8&amp; 55 \\\\\\hline 32&amp; \\text{Amoldt}&amp; 8&amp; 25 \\\\\\hline 58&amp; \\text{Schumacher}&amp; 10&amp; 35 \\\\\\hline 64&amp; \\text{Sachin}&amp; 7&amp; 35 \\\\\\hline 71&amp; \\text{Senna}&amp; 10&amp; 16 \\\\\\hline 74&amp; \\text{Sachin}&amp; 9&amp; 35 \\\\\\hline 85&amp; \\text{Rahul}&amp; 3&amp; 25 \\\\\\hline 95&amp; \\text{Ralph}&amp; 3&amp; 53 \\\\\\hline \\end{array}} \\qquad \\overset{\\text{R: Reserves relation}}{\\begin{array}{|c|c|c|}\\hline \\textbf {did} &amp; \\textbf {Cid} &amp; \\textbf {day} \\\\\\hline 22 &amp; 101 &amp; 10-10-06 \\\\ \\hline 22 &amp; 102 &amp; 10-10-06\\\\ \\hline 22 &amp; 103 &amp; 08-10-06 \\\\\\hline 22 &amp; 104 &amp; 07-10-06 \\\\\\hline 31 &amp; 102 &amp; 10-11-16 \\\\\\hline 31&amp;103 &amp;06-11-16 \\\\\\hline 31 &amp; 104&amp;12-11-16 \\\\\\hline 64 &amp; 101 &amp;05-09-06 \\\\\\hline 64&amp; 102 &amp; 08-09-06 \\\\\\hline 74 &amp; 103 &amp; 08-09-06 \\\\\\hline \\end{array}}\\)<br><br>\n\\(\\overset{\\text{C: Cars relation}}{\\begin{array}{|c|c|c|c|}\\hline \\textbf {Cid} &amp; \\textbf {Cname} &amp; \\textbf{colour} \\\\\\hline 101 &amp; \\text{Renault} &amp; \\text{blue} \\\\ \\hline 102 &amp; \\text{Renault} &amp; \\text{red} \\\\ \\hline 103 &amp; \\text{Ferrari} &amp; \\text{green} \\\\\\hline 104 &amp; \\text{Jaguar} &amp; \\text{red} \\\\\\hline \\end{array}}\\) <br><pre><code> \nselect D.dname\nfrom Drivers D\nwhere D.did in  (\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid = C.cid and C.colour = 'red'\n                  intersect\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid  = C.cid and C.colour = 'green'\n                  )</code></pre><br> Let n be the number of comparisons performed when the above SQL query is optimally executed. If linear search is used to locate a tuple in a relation using primary key, then n lies in the range: <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>36-40</p>",
            "<b>B.</b> <p>44-48</p>",
            "<b>C.</b> <p>60-64</p>",
            "<b>D.</b> <p>100-104</p>"
          ],
          "correct_answer": "<b>B.</b> <p>44-48</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3641/gate2006-it-85\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 208,
          "question": "<p>Consider a database with three relation instances shown below. The primary keys for the Drivers and Cars relation are did and cid respectively and the records are stored in ascending order of these primary keys as given in the tables. No indexing is available in the database.<br><br>\n\\(\\overset{\\text{D: Drivers relation}}{\\begin{array}{|c|l|r|c|}\\hline \\textbf{did}&amp; \\textbf{dname}&amp; \\textbf{rating}&amp; \\textbf{age} \\\\\\hline 22&amp; \\text{Karthikeyan}&amp; 7&amp; 25 \\\\ \\hline 29&amp; \\text{Salman}&amp; 1&amp; 33 \\\\ \\hline 31&amp; \\text{Boris}&amp; 8&amp; 55 \\\\\\hline 32&amp; \\text{Amoldt}&amp; 8&amp; 25 \\\\\\hline 58&amp; \\text{Schumacher}&amp; 10&amp; 35 \\\\\\hline 64&amp; \\text{Sachin}&amp; 7&amp; 35 \\\\\\hline 71&amp; \\text{Senna}&amp; 10&amp; 16 \\\\\\hline 74&amp; \\text{Sachin}&amp; 9&amp; 35 \\\\\\hline 85&amp; \\text{Rahul}&amp; 3&amp; 25 \\\\\\hline 95&amp; \\text{Ralph}&amp; 3&amp; 53 \\\\\\hline \\end{array}} \\qquad \\overset{\\text{R: Reserves relation}}{\\begin{array}{|c|c|c|}\\hline \\textbf {did} &amp; \\textbf {Cid} &amp; \\textbf {day} \\\\\\hline 22 &amp; 101 &amp; 10-10-06 \\\\ \\hline 22 &amp; 102 &amp; 10-10-06\\\\ \\hline 22 &amp; 103 &amp; 08-10-06 \\\\\\hline 22 &amp; 104 &amp; 07-10-06 \\\\\\hline 31 &amp; 102 &amp; 10-11-16 \\\\\\hline 31&amp;103 &amp;06-11-16 \\\\\\hline 31 &amp; 104&amp;12-11-16 \\\\\\hline 64 &amp; 101 &amp;05-09-06 \\\\\\hline 64&amp; 102 &amp; 08-09-06 \\\\\\hline 74 &amp; 103 &amp; 08-09-06 \\\\\\hline \\end{array}}\\)<br><br>\n\\(\\overset{\\text{C: Cars relation}}{\\begin{array}{|c|c|c|c|}\\hline \\textbf {Cid} &amp; \\textbf {Cname} &amp; \\textbf{colour} \\\\\\hline 101 &amp; \\text{Renault} &amp; \\text{blue} \\\\ \\hline 102 &amp; \\text{Renault} &amp; \\text{red} \\\\ \\hline 103 &amp; \\text{Ferrari} &amp; \\text{green} \\\\\\hline 104 &amp; \\text{Jaguar} &amp; \\text{red} \\\\\\hline \\end{array}}\\)<br><br>  What is the output of the following SQL query?<pre><code> \nselect D.dname\nfrom Drivers D\nwhere D.did in  (\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid = C.cid and C.colour = 'red'\n                  intersect\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid  = C.cid and C.colour = 'green'\n                   )</code></pre><br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Karthikeyan, Boris</p>",
            "<b>B.</b> <p>Sachin, Salman</p>",
            "<b>C.</b> <p>Karthikeyan, Boris, Sachin</p>",
            "<b>D.</b> <p>Schumacher, Senna</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Karthikeyan, Boris</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3640/gate2006-it-84\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 209,
          "question": "<p>In a database file structure, the search key field is 9 bytes long, the block size is 512 bytes, a record pointer is 7 bytes and a block pointer is 6 bytes. The largest possible order of a non-leaf node in a B+ tree implementing this file structure is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>23</p>",
            "<b>B.</b> <p>24</p>",
            "<b>C.</b> <p>34</p>",
            "<b>D.</b> <p>44</p>"
          ],
          "correct_answer": "<b>C.</b> <p>34</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3605/gate2006-it-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 210,
          "question": "<p>Consider a relation R with five attributes V, W, X, Y, and Z. The following functional dependencies hold:<br>\n\\(VY \\rightarrow W, WX \\rightarrow Z, \\text{and }ZY \\rightarrow V\\).<br>\nWhich of the following is a candidate key for R? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>VXZ</p>",
            "<b>B.</b> <p>VXY</p>",
            "<b>C.</b> <p>VWXY</p>",
            "<b>D.</b> <p>VWXYZ</p>"
          ],
          "correct_answer": "<b>B.</b> <p>VXY</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3604/gate2006-it-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 211,
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
          "id": 212,
          "question": "<p>Consider the relations r1(P, Q, R) and r2(R, S, T) with primary keys P and R respectively. The relation \\(r_{1}\\) contains 2000 tuples and \\(r_{2}\\) contains 2500 tuples. The maximum size of the join \\(r_{1} \\Join r_{2}\\) is : <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2000</p>",
            "<b>B.</b> <p>2500</p>",
            "<b>C.</b> <p>4500</p>",
            "<b>D.</b> <p>5000</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2000</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3553/gate2006-it-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 213,
          "question": "<p>The following functional dependencies are given:<br><br>\n\\(AB\\rightarrow CD,AF\\rightarrow D,DE\\rightarrow F,C\\rightarrow G,F\\rightarrow E,G\\rightarrow A\\)\n<br><br>\nWhich one of the following options is false? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left \\{ CF \\right \\}^{*}=\\left \\{ ACDEFG \\right \\}\\)</p>",
            "<b>B.</b> <p>\\(\\left \\{ BG \\right \\}^{*}=\\left \\{ ABCDG \\right \\}\\)</p>",
            "<b>C.</b> <p>\\(\\left \\{ AF \\right \\}^{*}=\\left \\{ ACDEFG \\right \\}\\)</p>",
            "<b>D.</b> <p>\\(\\left \\{ AB \\right \\}^{*}=\\left \\{ ABCDG \\right \\}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\left \\{ AF \\right \\}^{*}=\\left \\{ ACDEFG \\right \\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1848/gate2006-70#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 214,
          "question": "<p>Consider the relation enrolled (student, course) in which (student, course) is\nthe primary key, and the relation paid (student, amount) where student is the\nprimary key. Assume no null values and no foreign keys or integrity constraints.\nAssume that amounts 6000, 7000,8000,9000 and 10000 were each paid by 20% of\nthe students. Consider these query plans (Plan 1 on left, Plan 2 on right) to \"list\nall courses taken by students who have paid more than x.\" <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q69_12cbe10b.jpg\"><br> A disk seek takes 4 ms. disk data transfer bank width is 300 MB/s and checking a tuple to see if amount is greater x takes 10\\(\\mu\\)s . Which of the following statements is correct? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Plan 1 and Plan 2 will not output identical row sets for all databases</p>",
            "<b>B.</b> <p>A course may be listed more than once int the output of Plan 1 for some databases</p>",
            "<b>C.</b> <p>For x = 5000, Plan 1 executes faster than Plan 2 for all databases</p>",
            "<b>D.</b> <p>For x = 9000, Plan 1 executes slower than Plan 2 for all databases</p>"
          ],
          "correct_answer": "<b>C.</b> <p>For x = 5000, Plan 1 executes faster than Plan 2 for all databases</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1847/gate2006-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 215,
          "question": "<p>Consider the relation enrolled (student, course) in which student, course) is the\nprimary key, and the relation paid (student, amount) where student is the primary\nkey . Assume no null values and no foreign keys or integrity constraints. Given\nthe following four queries: <br><br>\nQuery 1: Select from enrolled where student in (select student form paid) <br>\nQuery 2: Select student from paid where student in (select student from\nenrolled) <br>\nQuery 3: Select E. student from enrolled E, paid P where E. student= P student <br>\nQuery 4: Select student from paid where exists <br>(select*from enrolled where\nenrolled student=paid.student) <br><br>\nWhich one of the following statements is correct? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All queries return identical row sets for any database</p>",
            "<b>B.</b> <p>Query 2 and Query 4 return identical row sets for all databases but there\nexist database for which Query 1 and Query 2 retrun different row sets</p>",
            "<b>C.</b> <p>There exist databases for which Query 3 returns strictly fewer rows than Query 2</p>",
            "<b>D.</b> <p>There exist databases for which Query 4 will encounter an intergrity\nviolation at runtime</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Query 2 and Query 4 return identical row sets for all databases but there\nexist database for which Query 1 and Query 2 retrun different row sets</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1846/gate2006-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 216,
          "question": "<p>Consider the relation account (customer, balance) where customer is a primary\nkey and there are no mall values. We would like to rank customers according\nto decreasing balance. The customer with the largest balance gets rank 1. Ties\nare not broken but ranks are skipped: if exactly two customers have the largest\nbalance they each get rank 1 and rank 2 is not assigned.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q67_9153671d.jpg\"><br>\nConsider these statements about Query 1 and Query 2. <br>\n1. Query 1will produce the same row set as Query 2 for some but not all\ndatabases <br>\n2. Both Query 1 Query 2 are correct implementations of the specification <br>\n3. Query 1 is a correct implementation of the specification but Query 2 is not <br>\n4. Neither query 1 nor Query 2 is a correct implementation of the specification <br>\n5. Assigning rank with a pure relational Query takes less time than scanning\nin decreasing balance order the assigning ranks using ODBC <br><br>\nWhich two of the above statements are correct? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 and 5</p>",
            "<b>B.</b> <p>1 and 3</p>",
            "<b>C.</b> <p>1 and 4</p>",
            "<b>D.</b> <p>3 and 5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1 and 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1845/gate2006-67#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 217,
          "question": "<p>Consider the following log sequence of two transactions on a bank account, with\ninitial balance 12000,that transfer 2000 to a mortgage payment and, then apply\na 5% interest. <br><br>\n1. T1 start <br>\n2. T1 B old = 12000 new = 10000 <br>\n3. T1 M old = 0 ne = 2000<br>\n4. T1 commit <br>\n5. T2 start<br>\n6. T2 B old = 10000 new = 10500 <br>\n7. T2 commit<br><br>\nSuppose the database system crashed just before log record 7 is written. When\nthe system is restarted, which one statement is true of the recovery procedure? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>We must redo log record 6 to set B to 10500</p>",
            "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</p>",
            "<b>C.</b> <p>We need not redo log records 2 and 3 because transaction T1 has committed</p>",
            "<b>D.</b> <p>We can apply redo and undo operations in arbitrary order because they are\nidempotent</p>"
          ],
          "correct_answer": "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/981/gate2006-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 218,
          "question": "<p>A database table \\(T_1\\) has 2000 records and occupies 80 disk blocks. Another table \\(T_2\\) has 400 records and occupies 20 disk blocks. These two tables have to be joined as per a specified join condition that needs to be evaluated for every pair of records from these two tables. The memory buffer space available can hold exactly one block of records for \\(T_1\\) and one block of records for \\(T_2\\) simultaneously at any point in time. No index is available on either table.<br>If, instead of Nested-loop join, Block nested-loop join is used, again with the most appropriate choice of table in the outer loop, the reduction in number of block accesses required for reading the data will be <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>30400</p>",
            "<b>C.</b> <p>38400</p>",
            "<b>D.</b> <p>798400</p>"
          ],
          "correct_answer": "<b>B.</b> <p>30400</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3848/gate2005-it-82b\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 219,
          "question": "<p>A database table \\(T_1\\) has 2000 records and occupies 80 disk blocks. Another table \\(T_2\\) has 400 records and occupies 20 disk blocks. These two tables have to be joined as per a specified join condition that needs to be evaluated for every pair of records from these two tables. The memory buffer space available can hold exactly one block of records for \\(T_1\\) and one block of records for \\(T_2\\) simultaneously at any point in time. No index is available on either table.<br>If Nested-loop join algorithm is employed to perform the join, with the most appropriate choice of table to be used in outer loop, the number of block accesses required for reading the data are <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>800000</p>",
            "<b>B.</b> <p>40080</p>",
            "<b>C.</b> <p>32020</p>",
            "<b>D.</b> <p>100</p>"
          ],
          "correct_answer": "<b>C.</b> <p>32020</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3847/gate2005-it-82a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 220,
          "question": "<p>In a schema with attributes A, B, C, D and E following set of functional dependencies are given  <br>\n\\(A \\rightarrow B\\)<br>\n\\(A \\rightarrow C\\)<br>\n\\(CD \\rightarrow E\\)<br>\n\\(B \\rightarrow D\\)<br>\n\\(E \\rightarrow A\\)<br>\nWhich of the following functional dependencies is NOT implied by the above set? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(CD \\rightarrow AC\\)</p>",
            "<b>B.</b> <p>\\(BD \\rightarrow CD\\)</p>",
            "<b>C.</b> <p>\\(BC \\rightarrow CD\\)</p>",
            "<b>D.</b> <p>\\(AC \\rightarrow BC\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(BD \\rightarrow CD\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3833/gate2005-it-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 221,
          "question": "<p>In an inventory management system implemented at a trading corporation, there are several tables designed to hold all the information. Amongst these, the following two tables hold information on which items are supplied by which suppliers, and which warehouse keeps which items along with the stock-level of these items.<br>\nSupply = (supplierid, itemcode)<br>\nInventory = (itemcode, warehouse, stocklevel)<br>For a specific information required by the management, following SQL query has been written<br><pre><code> Select distinct STMP.supplierid \nFrom Supply as STMP\nWhere not unique (Select ITMP.supplierid\n                            From Inventory, Supply as ITMP\n                            Where STMP.supplierid = ITMP.supplierid\n                            And ITMP.itemcode = Inventory.itemcode\n                            And Inventory.warehouse = 'Nagpur');</code></pre> <br>\nFor the warehouse at Nagpur, this query will find all suppliers wh <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>do not supply any item</p>",
            "<b>B.</b> <p>supply exactly one item</p>",
            "<b>C.</b> <p>supply one or more items</p>",
            "<b>D.</b> <p>supply two or more items</p>"
          ],
          "correct_answer": "<b>D.</b> <p>supply two or more items</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3832/gate2005-it-69\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 222,
          "question": "<p>A table 'student' with schema (roll, name, hostel, marks), and another table 'hobby' with schema (roll, hobbyname) contains records as shown below:<br>\n\\(\\overset{\\text{Table: student}}{\\begin{array}{|c|c|c|c|} \\hline \\textbf{Roll} &amp; \\textbf {Name} &amp; \\textbf {Hostel} &amp; \\textbf{Marks} \\\\\\hline \\text{1798} &amp; \\text{Manoj Rathor} &amp; \\text{7} &amp; \\text{95} \\\\\\hline \\text{2154} &amp; \\text{Soumic Banerjee} &amp; \\text{5} &amp; \\text{68}\\\\\\hline \\text{2369} &amp; \\text{Gumma Reddy} &amp; \\text{7} &amp; \\text{86}\\\\\\hline\\text{2581} &amp; \\text{Pradeep pendse} &amp; \\text{6} &amp; \\text{92}\\\\\\hline \\text{2643} &amp; \\text{Suhas Kulkarni} &amp; \\text{5} &amp; \\text{78} \\\\\\hline \\text{2711} &amp; \\text{Nitin Kadam} &amp; \\text{8} &amp; \\text{72}\\\\\\hline \\text{2872}&amp; \\text{Kiran Vora} &amp; \\text{5} &amp; \\text{92}\\\\\\hline\\text{2926} &amp; \\text{Manoj Kunkalikar} &amp; \\text{5} &amp; \\text{94}\\\\\\hline \\text{2959}&amp; \\text{Hemant Karkhanis} &amp; \\text{7} &amp; \\text{88}\\\\\\hline\\text{3125} &amp; \\text{Rajesh Doshi} &amp; \\text{5} &amp; \\text{82}\\\\\\hline \\end{array}}\\)<br><br>\\(\\overset{\\text{Table: hobby}}{}\\\\\\begin{array}{|c|c|} \\hline \\textbf{Roll} &amp; \\textbf {Hobby Name} \\\\\\hline \\text{1798} &amp; \\text{chess} \\\\\\hline \\text{1798} &amp; \\text{music} \\\\\\hline \\text{2154} &amp; \\text{music} \\\\\\hline \\text{2369} &amp; \\text{swimming}\\\\\\hline \\text{2581} &amp; \\text{cricket} \\\\\\hline \\text{2643} &amp; \\text{chess}\\\\\\hline\\text{2643} &amp; \\text{hockey} \\\\\\hline \\text{2711} &amp; \\text{volleyball}\\\\\\hline \\text{2872} &amp; \\text{football} \\\\\\hline \\text{2926} &amp; \\text{cricket} \\\\\\hline \\text{2959} &amp; \\text{photography} \\\\\\hline \\text{3125} &amp; \\text{music}\\\\\\hline \\text{3125}&amp; \\text{chess}\\\\\\hline \\end{array}\\)<br>\nThe following SQL query is executed on the above tables:<br><pre><code> \nselect hostel\nfrom student natural join hobby\nwhere marks &gt;= 75 and roll between 2000 and 3000;</code></pre> <br>Relations S and H with the same schema as those of these two tables respectively contain the same information as tuples. A new relation S is obtained by the following relational algebra operation:<br>\\(S' = \\Pi_{\\text{hostel}} ((\\sigma_{s.roll = H.roll} (\\sigma_{marks \\gt 75\\text{ and }roll \\gt 2000\\text{ and }roll \\lt 3000} (S)) \\times (H))\\)<br>\nThe difference between the number of rows output by the SQL statement and the number of tuples in S' is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>0</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3831/gate2005-it-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 223,
          "question": "<p>A company maintains records of sales made by its salespersons and pays them commission based on each individual's total sales made in a year. This data is maintained in a table with following schema:<br>salesinfo = (salespersonid, totalsales, commission)<br>In a certain year, due to better business results, the company decides to further reward its salespersons by enhancing the commission paid to them as per the following formula:<br>If commission \\(\\leq 50000\\), enhance it by 2%<br>\nIf 50000 &lt; commission \\(\\leq 100000\\), enhance it by 4%<br>\nIf commission &gt; 100000, enhance it by 6%<br>\nThe IT staff has written three different SQL scripts to calculate enhancement for each slab, each of these scripts is to run as a separate transaction as follows:<br>T1<br><pre><code> Update salesinfo\nSet commission = commission * 1.02\nWhere commission &lt; = 50000;</code></pre>\n<br> T2<br><pre><code>Update salesinfo\nSet commission = commission * 1.04\nWhere commission &gt; 50000 and commission is &lt; = 100000; </code></pre>\n<br> T3<br><pre><code> Update salesinfo\nSet commission = commission * 1.06\nWhere commission &gt; 100000;</code></pre>\n<br>Which of the following options of running these transactions will update the commission of all salespersons correctly <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Execute T1 followed by T2 followed by T3</p>",
            "<b>B.</b> <p>Execute T2, followed by T3; T1 running concurrently throughout</p>",
            "<b>C.</b> <p>Execute T3 followed by T2; T1 running concurrently throughout</p>",
            "<b>D.</b> <p>Execute T3 followed by T2 followed by T1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Execute T3 followed by T2 followed by T1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3830/gate2005-it-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 224,
          "question": "<p>In a computer system, four files of size 11050 bytes, 4990 bytes, 5170 bytes and 12640 bytes need to be stored. For storing these files on disk, we can use either 100 byte disk blocks or 200 byte disk blocks (but can't mix block sizes). For each block used to store a file, 4 bytes of bookkeeping information also needs to be stored on the disk. Thus, the total space used to store a file is the sum of the space taken to store the file and the space taken to store the book keeping information for the blocks allocated for storing the file. A disk block can store either bookkeeping information for a file or data from a file, but not both.\nWhat is the total space required for storing the files using 100 byte disk blocks and 200 byte disk blocks respectively? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>35400 and 35800 bytes</p>",
            "<b>B.</b> <p>35800 and 35400 bytes</p>",
            "<b>C.</b> <p>35600 and 35400 bytes</p>",
            "<b>D.</b> <p>35400 and 35600 bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>35600 and 35400 bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3824/gate2005-it-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 225,
          "question": "<p>Amongst the ACID properties of a transaction, the 'Durability' property requires that the changes made to the database by a successful transaction persist <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Except in case of an Operating System crash</p>",
            "<b>B.</b> <p>Except in case of a Disk crash</p>",
            "<b>C.</b> <p>Except in case of a power failure</p>",
            "<b>D.</b> <p>Always, even if there is a failure of any kind</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Always, even if there is a failure of any kind</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3769/gate2005-it-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 226,
          "question": "<p>A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3768/gate2005-it-23-isro2017-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 227,
          "question": "<p>A table has fields \\(F_1, F_2, F_3, F_4, F_5\\) with the following functional dependencies   <br>\n\\(F_1 \\to F_3, F_2\\to F_4, (F_1 . F_2) \\to F_5\\)<br>\nIn terms of Normalization, this table is in <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(1\\;\\text{NF}\\)</p>",
            "<b>B.</b> <p>\\(2\\;\\text{NF}\\)</p>",
            "<b>C.</b> <p>\\(3\\;\\text{NF}\\)</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(1\\;\\text{NF}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3767/gate2005-it-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 228,
          "question": "<p>Consider the entities 'hotel room', and 'person' with a many to many relationship 'lodging' as shown below:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q21_7385a135.jpg\"><br>If we wish to store information about the rent payment to be made by person (s) occupying different hotel rooms, then this information should appear as an attribute of <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Person</p>",
            "<b>B.</b> <p>Hotel Room</p>",
            "<b>C.</b> <p>Lodging</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Lodging</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3766/gate2005-it-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 229,
          "question": "<p>Consider a relation scheme R=(A,B,C,D,E,H) on which the following functional dependencies hold: {A\\(\\rightarrow\\)B, BC\\(\\rightarrow\\)D, E\\(\\rightarrow\\)C, D\\(\\rightarrow\\)A}. What are the candidate keys of R? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>AE, BE</p>",
            "<b>B.</b> <p>AE, BE, DE</p>",
            "<b>C.</b> <p>AEH, BEH, BCH</p>",
            "<b>D.</b> <p>AEH, BEH, DEH</p>"
          ],
          "correct_answer": "<b>D.</b> <p>AEH, BEH, DEH</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1401/gate2005-78#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 230,
          "question": "<p>The relation book (title, price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?<pre><code> select title\n  from book as B\n  where (select count(*)\n     from book as T\n     where T.price &gt; B.price) &lt; 5 </code></pre> <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Titles of the four most expensive books</p>",
            "<b>B.</b> <p>Title of the fifth most inexpensive book</p>",
            "<b>C.</b> <p>Title of the fifth most expensive bookTitles of the five most expensive books</p>",
            "<b>D.</b> <p>Titles of the five most expensive books</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Titles of the five most expensive books</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1400/gate2005-77#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 231,
          "question": "<p>The following table has two attributes A and C where A is the primary key and C is the foreign key referencing A with on-delete cascade. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q76_054b99cf.jpg\"> <br>The set of all tuples that must be additionally deleted to preserve referential integrity when the tuple (2,4) is deleted is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(3,4) and (6,4)</p>",
            "<b>B.</b> <p>(5,2) and (7,2)</p>",
            "<b>C.</b> <p>(5,2), (7,2) and (9,5)</p>",
            "<b>D.</b> <p>(3,4), (4,3) and (6,4)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(5,2), (7,2) and (9,5)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1399/gate2005-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 232,
          "question": "<p>Let E1 and E2 be two entities in an E/R diagram with simple single-valued attributes. R1 and R2 are two relationships between E1 and E2, where R1 is one-to-many and R2 is many-to-many. R1 and R2 do not have any attributes of their own. What is the minimum number of tables required to represent this situation in the relational model? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1398/gate2005-75#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 233,
          "question": "<p>Let r be a relation instance with schema R = (A, B, C, D). We define \\(r_{1}=\\Pi _{A,B,C}(R)\\) and \\(r_{2}=\\Pi _{A,D}(R)\\). Let \\(s=r_1*r_2\\) where * denotes natural join. Given that the decomposition of r into \\(r_1\\) and \\(r_2\\) is lossy, which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S\\subset r\\)</p>",
            "<b>B.</b> <p>\\(r\\cup S=r\\)</p>",
            "<b>C.</b> <p>\\(r\\subset S\\)</p>",
            "<b>D.</b> <p>\\(r*S=S\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(r\\subset S\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1366/gate2005-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 234,
          "question": "<p>Which one of the following statements about normal forms is FALSE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>BCNF is stricter than 3NF</p>",
            "<b>B.</b> <p>Lossless, dependency-preserving decomposition into 3NF is always possible</p>",
            "<b>C.</b> <p>Lossless, dependency-preserving decomposition into BCNF is always possible</p>",
            "<b>D.</b> <p>Any relation with two attributes is in BCNF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Lossless, dependency-preserving decomposition into BCNF is always possible</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1365/gate2005-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 235,
          "question": "<p>Which one of the following is a key factor for preferring \\(B^{+}\\) - trees to binary search trees for indexing database relations? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Database relations have a large number of records</p>",
            "<b>B.</b> <p>Database relations are sorted on the primary key</p>",
            "<b>C.</b> <p>\\(B^{+}\\) - trees require less memory than binary search trees</p>",
            "<b>D.</b> <p>Data transfer form disks is in blocks</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Data transfer form disks is in blocks</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1364/gate2005-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 236,
          "question": "<p>Consider a table T in a relational database with a key field K. A B-tree of order p is used as an access structure on K, where p denotes the maximum number of tree pointers in a B-tree index node. Assume that K is 10 bytes long; disk block size is 512 bytes; each data pointer \\(P_D\\) is 8 bytes long and each block pointer \\(P_B\\) is 5 bytes long. In order for each B-tree node to fit in a single disk block, the maximum value of p is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20</p>",
            "<b>B.</b> <p>22</p>",
            "<b>C.</b> <p>23</p>",
            "<b>D.</b> <p>32</p>"
          ],
          "correct_answer": "<b>C.</b> <p>23</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3723/gate2004-it-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 237,
          "question": "<p>Consider two tables in a relational database with columns and rows as follows:<br><br>\\(\\overset{\\text{Table: Student}}{\\begin{array}{|c|c|c|} \\hline \\textbf {Roll\\_no} &amp; \\textbf{Name} &amp; \\textbf{Dept\\_id} \\\\\\hline 1&amp; \\text{ABC} &amp; 1\\\\\\hline 2&amp; \\text{DEF} &amp; 1 \\\\\\hline 3 &amp; \\text{GHI} &amp; 2\\\\\\hline 4 &amp; \\text{JKL} &amp; 3\\\\\\hline \\end{array}} \\qquad \\overset{\\text{Table: Department}}{\\begin{array}{|c|c|c|} \\hline \\textbf {Dept\\_id} &amp; \\textbf{Dept\\_name} \\\\\\hline 1&amp; \\text{A} \\\\\\hline 2&amp; \\text{B} \\\\\\hline 3 &amp; \\text{C} \\\\\\hline \\end{array}}\\)<br><br>\nRoll_no is the primary key of the Student table, Dept_id is the primary key of the Department table and Student.Dept_id is a foreign key from Department.Dept_id<br><br>\nWhat will happen if we try to execute the following two SQL statements?<br>update Student set Dept_id = Null where Roll_on = 1<br>\nupdate Department set Dept_id = Null where Dept_id = 1 <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both i and ii will fail</p>",
            "<b>B.</b> <p>i will fail but ii will succeed</p>",
            "<b>C.</b> <p>i will succeed but ii will fail</p>",
            "<b>D.</b> <p>Both i and ii will succeed</p>"
          ],
          "correct_answer": "<b>C.</b> <p>i will succeed but ii will fail</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3722/gate2004-it-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 238,
          "question": "<p>Consider the following schedule S of transactions T1 and T2:<br>\\({\\begin{array}{l|l} \\textbf{T1}&amp; \\textbf{T2} \\\\\\hline \\text{Read(A)} \\\\ \\text{A = A ? 10}\\\\ &amp; \\text{Read(A) }\\\\ &amp; \\text{Temp = 0.2*A} \\\\ &amp; \\text{Write(A)} \\\\ &amp; \\text{Read(B)} \\\\ \\text{Write(A)}\\\\ \\text{Read(B)}\\\\ \\text{B = B + 10}\\\\ \\text{Write(B)} \\\\ &amp; \\text{B = B + Temp} \\\\ &amp; \\text{Write(B)}\\\\ \\end{array}}\\)<br>Which of the following is TRUE about the schedule S ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S  is serializable only as T1,T2</p>",
            "<b>B.</b> <p>S is serializable only as T2,T1</p>",
            "<b>C.</b> <p>S is serializable both as T1,T2 and T2,T1</p>",
            "<b>D.</b> <p>S is not serializable either as T1,T2 or as T2,T1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>S is not serializable either as T1,T2 or as T2,T1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3721/gate2004-it-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 239,
          "question": "<p>A table T1 in a relational database has the following rows and columns: <br><br>\n\\(\\begin{array}{|c|c|c|} \\hline \\text {Roll no. } &amp; \\text {Marks} \\\\\\hline 1&amp; 10 \\\\\\hline 2 &amp; 20 \\\\\\hline3 &amp; 30 \\\\\\hline 4 &amp; \\text{NULL}\\\\\\hline \\end{array}\\)<br><br>\nThe following sequence of SQL statements was successfully executed on table T1.<br><pre><code> Update T1 set marks = marks + 5\nSelect avg(marks) from T1</code></pre>\nWhat is the output of the select statement? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>18.75</p>",
            "<b>B.</b> <p>20</p>",
            "<b>C.</b> <p>25</p>",
            "<b>D.</b> <p>Null</p>"
          ],
          "correct_answer": "<b>C.</b> <p>25</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3720/gate2004-it-76\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 240,
          "question": "<p>A relation Empdtl is defined with attributes empcode (unique), name, street, city, state and pincode. For any pincode, there is only one city and state. Also, for any given street, city and state, there is just one pincode. In normalization terms, Empdtl is a relation in <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1NF only</p>",
            "<b>B.</b> <p>2NF and hence also in 1NF</p>",
            "<b>C.</b> <p>3NF and hence also in 2NF and 1NF</p>",
            "<b>D.</b> <p>BCNF and hence also in 3NF, 2NF and 1NF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2NF and hence also in 1NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3719/gate2004-it-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 241,
          "question": "<p>A relational database contains two tables student and department in which student table has columns roll_no, name and dept_id and department table has columns dept_id and dept_name. The following insert statements were executed successfully to populate the empty tables:<br><pre><code>Insert into department values (1, 'Mathematics')\nInsert into department values (2, 'Physics')\nInsert into student values (l, 'Navin', 1)\nInsert into student values (2, 'Mukesh', 2)\nInsert into student values (3, 'Gita', 1)</code></pre> How many rows and columns will be retrieved by the following SQL statement?<pre><code>Select * from student, department </code></pre> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0 row and 4 columns</p>",
            "<b>B.</b> <p>3 rows and 4 columns</p>",
            "<b>C.</b> <p>3 rows and 5 columns</p>",
            "<b>D.</b> <p>6 rows and 5 columns</p>"
          ],
          "correct_answer": "<b>D.</b> <p>6 rows and 5 columns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3718/gate2004-it-74\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 242,
          "question": "<p>Consider the following entity relationship diagram (ERD), where two entities E1 and E2 have a relation R of cardinality 1:m.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q73_7b7dd9cd.jpg\"><br>The attributes of E1 are A11, A12 and A13 where A11 is the key attribute. The attributes of E2 are A21, A22 and A23 where A21 is the key attribute and A23 is a multi-valued attribute. Relation R does not have any attribute. A relational database containing minimum number of tables with each table satisfying the requirements of the third normal form (3NF) is designed from the above ERD. The number of tables in the database is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3717/gate2004-it-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 243,
          "question": "<p>Which level of locking provides the highest degree of concurrency in a relational database ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Page</p>",
            "<b>B.</b> <p>Table</p>",
            "<b>C.</b> <p>Row</p>",
            "<b>D.</b> <p>Page, table and row level locking allow the same degree of concurrency</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Row</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3662/gate2004-it-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 244,
          "question": "<p>The employee information in a company is stored in the relation <br><br>\nEmployee (\\(\\underline{name}\\), sex, salary, deptName) <br><br>\nConsider the following SQL query<pre><code> select deptName\n       from Employee\n       where sex = 'M'\n       group by deptName\n       having avg (salary) &gt; (select avg (salary) from Employee) </code></pre>\nIt returns the names of the department in which <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the average salary is more than the average salary in the company</p>",
            "<b>B.</b> <p>the average salary of male employees is more than the average salary of all male employees in the company</p>",
            "<b>C.</b> <p>the average salary of male employees is more than the average salary of employees in the same department.</p>",
            "<b>D.</b> <p>the average salary of male employees is more than the average salary in the company</p>"
          ],
          "correct_answer": "<b>D.</b> <p>the average salary of male employees is more than the average salary in the company</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1049/gate2004-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 245,
          "question": "<p>The order of an internal node in a B+ tree index is the maximum number of children it can have.\nSuppose that a child pointer takes 6 bytes, the search field value takes 14 bytes, and the block size is\n512 bytes. What is the order of the internal node? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>24</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>26</p>",
            "<b>D.</b> <p>27</p>"
          ],
          "correct_answer": "<b>C.</b> <p>26</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1048/gate2004-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 246,
          "question": "<p>Consider the relation Student (\\(\\underline{name}\\), sex, marks), where the primary key is shown underlined,\npertaining to students in a class that has at least one boy and one girl. What does the following\nrelational algebra expression produce)\n(Note: \\(\\rho\\) is the rename operator).  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51_5155e252.jpg\"><br>  The condition in join is \"\\((sex=female ^\\wedge x=male ^\\wedge marks\\leq m)\\)\" <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>names of girl students with the highest marks</p>",
            "<b>B.</b> <p>names of girl students with more marks than some boy student</p>",
            "<b>C.</b> <p>names of girl students with marks not less than some boy student</p>",
            "<b>D.</b> <p>names of girl students with more marks than all the boy students</p>"
          ],
          "correct_answer": "<b>D.</b> <p>names of girl students with more marks than all the boy students</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1047/gate2004-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 247,
          "question": "<p>The relation scheme Student Performance (name, courseNo, rollNo, grade) has the following\nfunctional dependencies: <br><br>\nname, courseNo, \\(\\rightarrow\\) grade <br>\nrollNo, courseNo \\(\\rightarrow\\) grade <br>\nname \\(\\rightarrow\\) rollNo <br>\nrollNo \\(\\rightarrow\\) name <br><br>\nThe highest normal form of this relation scheme is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2NF</p>",
            "<b>B.</b> <p>3NF</p>",
            "<b>C.</b> <p>BCNF</p>",
            "<b>D.</b> <p>4NF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1046/gate2004-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 248,
          "question": "<p>Consider the following relation schema pertaining to a students database: <br><br>\nStudents  (\\(\\underline{rollno}\\), name, address)<br>\nEnroll (\\(\\underline{rollno}\\) ,\\(\\underline{courseno}\\), coursename) <br><br>\nWhere the primary keys are shown underlined. The number of tuples in the student and Enroll tables\nare 120 and 8 respectively. What are the maximum and minimum number of tuples that can be\npresent in (Student * Enroll), where '*' denotes natural join? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8,8</p>",
            "<b>B.</b> <p>120,8</p>",
            "<b>C.</b> <p>960,8</p>",
            "<b>D.</b> <p>960,120</p>"
          ],
          "correct_answer": "<b>A.</b> <p>8,8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1011/gate2004-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 249,
          "question": "<p>Let R1(\\(\\underline{A}\\),B,(C)) and R2(\\(\\underline{D}\\),E) be two relation schema, where the primary keys are shown\nunderlined, and let C be a foreign key in R1 referring to R2 . Suppose there is no violation of the\nabove referential integrity constraint in the corresponding relation instances r1 and r2 . Which one of\nthe following relational algebra expressions would necessarily produce an empty relation? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Pi _{D}(r2)-\\Pi _{C}(r1)\\)</p>",
            "<b>B.</b> <p>\\(\\Pi _{C}(r1)-\\Pi _{D}(r2)\\)</p>",
            "<b>C.</b> <p>\\(\\Pi _{D}(r1\\Join _{C\\neq D}r2 )\\)</p>",
            "<b>D.</b> <p>\\(\\Pi _{C}(r1\\Join _{C=D}r2 )\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Pi _{C}(r1)-\\Pi _{D}(r2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1010/gate2004-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 250,
          "question": "<p>Consider three data items D1,D2 and D3 and the following execution schedule of\ntransactions T1,T2 and T3. In the diagram, R(D) and W(D) denote the actions\nreading and writing the data item D respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q87_3fcdb821.jpg\"> <br>Which of the following statements is correct? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The schedule is serializable as T2; T3;T1;</p>",
            "<b>B.</b> <p>The schedule is serializable as T2; T1;T3;</p>",
            "<b>C.</b> <p>The schedule is serializable as T3; T2; T1;</p>",
            "<b>D.</b> <p>The schedule is not serializable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The schedule is not serializable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/970/gate2003-87#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 251,
          "question": "<p>Consider the set of relations shown below and the SQL query that follow:<pre><code>\nStudents:(Roll_number,Name,Date_of_birth)\nCourses:(Course_number,Course_name,Instructor)\nGrades:(Roll_number,Course_number,Grade)</code></pre><pre><code>select distrinct Name\nfrom Students, Courses, Grades\nWhere Students.Roll_number=Grades.Toll_number\nand Courses.Instructor= 'Korth'\nand Courses.Course_number=Grades.Course_number\nand Grades.grade= 'A' </code></pre>\nWhich of the following sets is computed by the above query? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Names of students who have got an A grade in all courses taught by Korth</p>",
            "<b>B.</b> <p>Names of students who have got an A grade in all courses</p>",
            "<b>C.</b> <p>Name of students who have got an A grade in at least one of the courses\ntaught by Korth</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Name of students who have got an A grade in at least one of the courses\ntaught by Korth</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/969/gate2003-86#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 252,
          "question": "<p>Consider the following functional dependencise in a database: <br><br>\\(\\begin{array}{|l|l|}\\hline \\text{Date\\_of\\_Birth } \\to \\text{Age} &amp; \\text{Age } \\to \\text{Eligibility} \\\\ \\hline  \\text{Name } \\to \\text{Roll\\_number} &amp; \\text{Roll\\_number }\\to \\text{Name} \\\\ \\hline   \\text{Course\\_number }\\to \\text{Course\\_name} &amp; \\text{Course\\_number } \\to\\text{Instructor} \\\\ \\hline  \\text{(Roll\\_number, Course\\_number) }\\to\\text{Grade} &amp; \\text{}  \\\\ \\hline \\end{array}\\)<br><br>\nThe relation (Roll_number,Name,Date_of_brith,Age) is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in second normal normal form but not in third normal form</p>",
            "<b>B.</b> <p>in third normal form but not in BCNF</p>",
            "<b>C.</b> <p>in BCNF</p>",
            "<b>D.</b> <p>in none of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>in none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/968/gate2003-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 253,
          "question": "<p>Consider the following SQL query<pre><code>\nselect distinct al, a2,........., an\nfrom r1, r2,........, rm\nwhere P </code></pre>\nFor an arbitrary predicate P,this query is equivalent to which of the following\nrelational algebra expressions? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q30_9bb6a32e.jpg\"> <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/920/gate2003-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 254,
          "question": "<p>Which of the following scenarios may lead to an irrecoverable error in a database\nsystem? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A transaction writes a data item after it is read by an uncommitted\ntransaction</p>",
            "<b>B.</b> <p>A transaction read a data item after it is read by an uncommitted transaction</p>",
            "<b>C.</b> <p>A transaction read a data item after it is written by an committed transaction</p>",
            "<b>D.</b> <p>A transaction read a data item after it is written by an uncommitted transaction</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A transaction read a data item after it is written by an uncommitted transaction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/919/gate2003-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 255,
          "question": "<p>From the following instance of relation schema R(A,B,C), we can conclude that : <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q50_e0841df0.jpg\"> <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A functionally determines B and B functionally determines C</p>",
            "<b>B.</b> <p>A functionally determines B and B does not functionally determines C .</p>",
            "<b>C.</b> <p>B does not functionally determines C</p>",
            "<b>D.</b> <p>A does not functionally B and B does not functionally determines.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>B does not functionally determines C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/855/gate2002-2-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 256,
          "question": "<p>Relation R is decomposed using a set of functional dependencies, F ,and relation S\nis decomposed using another set of functional dependencies, G. One decomposition\nis definitely BCNF , the other is definitely. 3NF , but it is not known which is\nwhich. To make a guaranteed identification, which one of the following tests\nshould be used on the decompositions ? (Assume that the closures of F and G\nare available). <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dependency-preservation</p>",
            "<b>B.</b> <p>Lossless-join</p>",
            "<b>C.</b> <p>BCNF definition</p>",
            "<b>D.</b> <p>3NF definition</p>"
          ],
          "correct_answer": "<b>C.</b> <p>BCNF definition</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/854/gate2002-2-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 257,
          "question": "<p>A B+-tree index is to be built on the Name attribute of the relation STUDENT. Assume that all student names are of length 8 bytes, disk blocks are of size 512\nbytes, and index pointers are of size 4 bytes. Given this scenario, what would be\nthe best choice of the degree (i.e. the number of pointers per node) of the B+-tree <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>42</p>",
            "<b>C.</b> <p>43</p>",
            "<b>D.</b> <p>44</p>"
          ],
          "correct_answer": "<b>C.</b> <p>43</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/853/gate2002-2-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 258,
          "question": "<p>In the index allocation scheme of blocks to a file, the maximum possible size of\nthe file depends on <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The size of the blocks, and the size of the address of the blocks</p>",
            "<b>B.</b> <p>The number of blocks used for the index, and the size of the blocks.</p>",
            "<b>C.</b> <p>The size of the blocks, the number of blocks used for the index, and the size\nof the address of the blocks.</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The size of the blocks, the number of blocks used for the index, and the size\nof the address of the blocks.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/852/gate2002-2-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 259,
          "question": "<p>With regard to the expressive power of the formal relational query languages,\nwhich of the following statements is true ? <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Relational algebra is more powerful than relational calculus.</p>",
            "<b>B.</b> <p>Relational algebra has the same power as relational calculus.</p>",
            "<b>C.</b> <p>Relational algebra has the same power as safe relational calculus.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Relational algebra has the same power as safe relational calculus.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/825/gate2002-1-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 260,
          "question": "<p>Relation R with an associated set of functional dependencies, F , is decomposed\ninto BCNF. The redundancy (arising out of functional dependencies) in the\nresulting set of relations is. <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Zero</p>",
            "<b>B.</b> <p>More than zero but less than that of an equivalent 3NF decomposition</p>",
            "<b>C.</b> <p>Proportional to the size of F+</p>",
            "<b>D.</b> <p>Indetermine.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Zero</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/824/gate2002-1-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 261,
          "question": "<p>In SQL, relations can contain null values, and comparisons with null values are treated as unknown. Suppose all comparisons with a null value are treated as false. Which of the following pairs is not equivalent? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(x=5\\; not(not(x=5)) \\)</p>",
            "<b>B.</b> <p>\\(x=5 \\; x \\gt 4 \\text{ and }x\\lt6 \\), where  \\(x \\) is an integer</p>",
            "<b>C.</b> <p>\\(x \\neq 5\\) not(x=5)</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(x \\neq 5\\) not(x=5)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/673/gate2000-2-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 262,
          "question": "<p>Given relations r(w, x) and s(y, z) the result of <br><pre><code> select distinct w, x from r, s </code></pre>\nis guaranteed to be same as r, provided. <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>r has no duplicates and s is non-empty</p>",
            "<b>B.</b> <p>r and s have no duplicates</p>",
            "<b>C.</b> <p>s has no duplicates and r is non-empty</p>",
            "<b>D.</b> <p>r and s have the same number of tuples</p>"
          ],
          "correct_answer": "<b>A.</b> <p>r has no duplicates and s is non-empty</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/672/gate2000-2-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 263,
          "question": "<p>Given the following relation instance.<br>\n\\(\\begin{array}{|l|l|l|}\\hline \\text{X} &amp; \\text{Y} &amp; \\text{Z} \\\\\\hline \\text{1} &amp; \\text{4} &amp; \\text{2} \\\\ \\text{1} &amp; \\text{5} &amp; \\text{3} \\\\ \\text{1} &amp; \\text{6} &amp; \\text{3} \\\\ \\text{3} &amp; \\text{2} &amp; \\text{2} \\\\\\hline \\end{array}\\)<br>Which of the following functional dependencies are satisfied by the instance? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(XY \\rightarrow Z \\text{ and } Z \\rightarrow Y\\)</p>",
            "<b>B.</b> <p>\\(YZ \\rightarrow X \\text{ and } Y \\rightarrow Z\\)</p>",
            "<b>C.</b> <p>\\(YZ \\rightarrow X \\text{ and } X \\rightarrow Z\\)</p>",
            "<b>D.</b> <p>\\(XZ \\rightarrow Y \\text{ and }Y \\rightarrow X\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(YZ \\rightarrow X \\text{ and } Y \\rightarrow Z\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/671/gate2000-2-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 264,
          "question": "<p>Given the relations <br>\nemployee (name, salary, dept-no), and<br>\ndepartment (dept-no, dept-name,address),<br>\nWhich of the following queries cannot be expressed using the basic relational algebra operations \\(\\left(\\sigma, \\pi,\\times ,\\Join, \\cup, \\cap,-\\right)\\)? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Department address of every employee</p>",
            "<b>B.</b> <p>Employees whose name is the same as their department name</p>",
            "<b>C.</b> <p>The sum of all employees' salaries</p>",
            "<b>D.</b> <p>All employees of a given department</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The sum of all employees' salaries</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/647/gate2000-1-23-isro2016-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 265,
          "question": "<p>\\(B^{+}\\)-trees are preferred to binary trees in databases because <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Disk capacities are greater than memory capacities</p>",
            "<b>B.</b> <p>Disk access is much slower than memory access</p>",
            "<b>C.</b> <p>Disk data transfer rates are much less than memory data transfer rates</p>",
            "<b>D.</b> <p>Disks are more reliable than memory</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Disk access is much slower than memory access</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/646/gate2000-1-22-ugcnet-june2012-ii-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 266,
          "question": "<p>Which of the following is/are correct? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An SQL query automatically eliminates duplicates</p>",
            "<b>B.</b> <p>An SQL query will not work if there are no indexes on the relations</p>",
            "<b>C.</b> <p>SQL permits attribute names to be repeated in the same relation</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1502/gate1999-2-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 267,
          "question": "<p>Consider the schema \\(R=(S,T, U, V)\\) and the dependencies \\(S \\rightarrow T, T \\rightarrow U, U \\rightarrow V\\) and \\(V \\rightarrow S\\). Let \\(R = (R1\\text{ and } R2)\\) be a decomposition such that \\(R1 \\cap R2 \\neq \\phi\\). The decomposition is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>not in 2NF</p>",
            "<b>B.</b> <p>in 2NF but not 3NF</p>",
            "<b>C.</b> <p>in 3NF but not in 2NF</p>",
            "<b>D.</b> <p>in both 2NF and 3NF</p>"
          ],
          "correct_answer": "<b>D.</b> <p>in both 2NF and 3NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1485/gate1999-2-7-ugcnet-june2014-iii-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 268,
          "question": "<p>For the schedule given below, which of the following is correct:<br>\\(\\begin{array}{lll} \\text{1} &amp; \\text{Read A} &amp; \\text{} \\\\ \\text{2} &amp; \\text{} &amp; \\text{Read B} \\\\ \\text{3} &amp; \\text{Write A} &amp; \\text{} \\\\ \\text{4} &amp; \\text{} &amp; \\text{Read A} \\\\ \\text{5} &amp; \\text{} &amp; \\text{Write A} \\\\ \\text{6} &amp; \\text{} &amp; \\text{Write B} \\\\ \\text{7} &amp; \\text{Read B} &amp; \\text{} \\\\ \\text{8} &amp; \\text{Write B} &amp; \\text{} \\\\\\end{array}\\) <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>This schedule is serializable and can occur in a scheme using 2PL protocol</p>",
            "<b>B.</b> <p>This schedule is serializable but cannot occur in a scheme using 2PL protocol</p>",
            "<b>C.</b> <p>This schedule is not serializable but can occur in a scheme using 2PL protocol</p>",
            "<b>D.</b> <p>This schedule is not serializable and cannot occur in a scheme using 2PL protocol</p>"
          ],
          "correct_answer": "<b>D.</b> <p>This schedule is not serializable and cannot occur in a scheme using 2PL protocol</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1484/gate1999-2-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 269,
          "question": "<p>Let R = (A, B, C, D, E, F) be a relation scheme with the following dependencies \\(C \\rightarrow F, E \\rightarrow A, EC \\rightarrow D, A \\rightarrow B\\). Which one of the following is a key for R? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>CD</p>",
            "<b>B.</b> <p>EC</p>",
            "<b>C.</b> <p>AE</p>",
            "<b>D.</b> <p>AC</p>"
          ],
          "correct_answer": "<b>B.</b> <p>EC</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1477/gate1999-1-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 270,
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
          "id": 271,
          "question": "<p>Consider the join of a relation R with a relation S. If R has m tuples and S has n tuples then the maximum and minimum sizes of the join respectively are <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>m+n and 0</p>",
            "<b>B.</b> <p>mn and 0</p>",
            "<b>C.</b> <p>m+n and |m-n|</p>",
            "<b>D.</b> <p>mn and m+n</p>"
          ],
          "correct_answer": "<b>B.</b> <p>mn and 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1471/gate1999-1-18-isro2016-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 272,
          "question": "<p>Which of the following query transformations (i.e., replacing the l.h.s. expression by the r.h.s expression) is incorrect? \\(R_1\\) and \\(R_2\\) are relations, \\(C_1\\) and \\(C_2\\) are selection conditions and \\(A_1\\) and \\(A_1\\) are attributes of \\(R_1\\). <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma_{C_1} \\left(\\sigma_{C_2}\\left(R_1\\right)\\right) \\to \\sigma_{C_2} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right)\\)</p>",
            "<b>B.</b> <p>\\(\\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right) \\to \\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right)\\)</p>",
            "<b>C.</b> <p>\\(\\sigma_{C_1} \\left(R_1 \\cup R_2\\right) \\to \\sigma_{C_1}\\left(R_1\\right) \\cup \\sigma_{C_1} \\left(R_2\\right)\\)</p>",
            "<b>D.</b> <p>\\(\\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\to \\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\to \\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1692/gate1998-2-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 273,
          "question": "<p>There are five records in a database.<br>\n\\(\\begin{array}{|c|c|c|c|} \\hline \\textbf {Name} &amp; \\textbf {Age} &amp; \\textbf {Occupation} &amp; \\textbf{Category } \\\\\\hline \\text{Rama} &amp; \\text{27} &amp; \\text{CON} &amp; \\text{A} \\\\\\hline \\text{Abdul} &amp; \\text{22} &amp; \\text{ENG} &amp; \\text{A} \\\\\\hline \\text{Jennifer} &amp; \\text{28} &amp; \\text{DOC} &amp; \\text{B} \\\\\\hline \\text{Maya} &amp; \\text{32} &amp; \\text{SER} &amp; \\text{D} \\\\\\hline \\text{Dev} &amp; \\text{24} &amp; \\text{MUS} &amp; \\text{C} \\\\\\hline \\end{array}\\)<br>There is an index file associated with this and it contains the values 1, 3, 2, 5 and 4. Which one of the fields is the index built from? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Age</p>",
            "<b>B.</b> <p>Name</p>",
            "<b>C.</b> <p>Occupation</p>",
            "<b>D.</b> <p>Category</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Occupation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1672/gate1998-1-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 274,
          "question": "<p>Which normal form is considered adequate for normal relational database design? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2NF</p>",
            "<b>B.</b> <p>5NF</p>",
            "<b>C.</b> <p>4NF</p>",
            "<b>D.</b> <p>3NF</p>"
          ],
          "correct_answer": "<b>D.</b> <p>3NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1671/gate1998-1-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 275,
          "question": "<p>Given two union compatible relations \\(R_1(A, B)\\) and \\(R_2 (C, D)\\), what is the result of the operation \\(R_1 \\Join_{ A = C \\wedge B = D} R_2\\)? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(R_1 \\cup R_2\\)</p>",
            "<b>B.</b> <p>\\(R_1 \\times R_2\\)</p>",
            "<b>C.</b> <p>\\(R_1- R_2\\)</p>",
            "<b>D.</b> <p>\\(R_1 \\cap R_2\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(R_1 \\cap R_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1670/gate1998-1-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 276,
          "question": "<p>Let R(a, b, c) and S(d, e, f) be two relations in which d is the foreign key of S that refers to the primary key of R. Consider the following four operations R and S<br><br>\nI.   Insert into R<br>\nII.  Insert into S<br>\nIII. Delete from R<br>\nIV.  Delete from S<br><br>\nWhich of the following can cause violation of the referential integrity constraint above? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both I and IV</p>",
            "<b>B.</b> <p>Both II and III</p>",
            "<b>C.</b> <p>All of these</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Both II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2266/gate1997-6-10-isro2016-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 277,
          "question": "<p>For a database relation R(a, b, c, d), where the domains a, b, c, d include only atomic values, only the following functional dependencies and those that can be inferred from them hold<br>\n\\(a \\rightarrow c\\)<br>\n\\(b \\rightarrow d\\)<br>\nThis relation is <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in first normal form but not in second normal form</p>",
            "<b>B.</b> <p>in second normal form but not in first normal form</p>",
            "<b>C.</b> <p>in third normal form</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>in first normal form but not in second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2265/gate1997-6-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 278,
          "question": "<p>Consider a relation geq which represents \"greater than or equal to\", that is,\n(x,y) \\(\\in\\) geq only if y\\(\\geq\\)x:<pre><code> create table geq\n( \n  ib integer not null\n  ub integer not null\n  primary key ib\n  foreign key (ub) references geq on delete cascade \n) </code></pre>\nWhich of the following is possible if a tuple (x,y) is deleted ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A tuple (z,w) with z \\(\\gt\\)\ny is deleted</p>",
            "<b>B.</b> <p>A tuple (z,w) with z \\(\\gt\\)\nx is deleted</p>",
            "<b>C.</b> <p>A tuple (z,w) with w \\(\\lt\\)\nx is deleted</p>",
            "<b>D.</b> <p>The deletion of (x,y) is prohibited</p>"
          ],
          "correct_answer": "<b>C.</b> <p>A tuple (z,w) with w \\(\\lt\\)\nx is deleted</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/743/gate2001-2-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 279,
          "question": "<p>Which of the following relational calculus expressions is not safe ? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q49_d1539589.jpg\"> <br><br><strong>(GATE CSE 2001)</strong></p>",
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
        },
        {
          "id": 280,
          "question": "<p>R,(A,B,C,D) is a relation. Which of the following does not have a lossless join,\ndependency preserving BCNF decomposition ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(A\\rightarrow B,B\\rightarrow CD\\)</p>",
            "<b>B.</b> <p>\\(A\\rightarrow B,B\\rightarrow C,C\\rightarrow D\\)</p>",
            "<b>C.</b> <p>\\(AB\\rightarrow C,C\\rightarrow AD\\)</p>",
            "<b>D.</b> <p>\\(A\\rightarrow BCD\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(AB\\rightarrow C,C\\rightarrow AD\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/741/gate2001-2-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 281,
          "question": "<p>Let r and s be two relations over the relation schemes R and S respectively, and\nlet A be an attribute in R. Then the relational algebra expression \\(\\sigma _{A=a}(r\\Join s)\\) is always equal to : <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma _{A=a}(r)\\)</p>",
            "<b>B.</b> <p>r</p>",
            "<b>C.</b> <p>\\(\\sigma _{A=a}(r)\\Join s\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\sigma _{A=a}(r)\\Join s\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/718/gate2001-1-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 282,
          "question": "<p>Suppose the adjacency relation of vertices in a graph is represented in a table Adj(X,Y).  Which of the following queries cannot be expressed by a relational algebra\nexpression of constant length ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>List all vertices adjacent to a given vertex.</p>",
            "<b>B.</b> <p>List all vertices which have self loops</p>",
            "<b>C.</b> <p>List all vertices which belong to cycles of less than three vertices</p>",
            "<b>D.</b> <p>List all vertices reachable from a given vertex</p>"
          ],
          "correct_answer": "<b>D.</b> <p>List all vertices reachable from a given vertex</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/717/gate2001-1-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 283,
          "question": "<p>Consider a schema R(A,B,C,D) and functional dependencies A\\(\\rightarrow\\)B and C\\(\\rightarrow\\)D.\nThen the decomposition of R into R1(AB) and R2(CD) is : <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dependency preserving and lossless join</p>",
            "<b>B.</b> <p>Lossless join but not dependency preserving</p>",
            "<b>C.</b> <p>Dependency preserving but not lossless join</p>",
            "<b>D.</b> <p>Not dependency preserving and not lossless join</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Dependency preserving but not lossless join</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/716/gate2001-1-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 284,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>Indicate which of the following statements are true:\n<br>\nA relational database which is in 3NF may still have undesirable data redundancy because there may exist: <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Transitive functional dependencies</p>",
            "<b>B.</b> <p>Non-trivial functional dependencies involving prime attributes on the right-side.</p>",
            "<b>C.</b> <p>Non-trivial functional dependencies involving prime attributes only on the left-side.</p>",
            "<b>D.</b> <p>Non-trivial functional dependencies involving only prime attributes.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Non-trivial functional dependencies involving prime attributes on the right-side.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84054/gate1990-3-ii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
