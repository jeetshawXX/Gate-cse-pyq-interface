window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 12",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
