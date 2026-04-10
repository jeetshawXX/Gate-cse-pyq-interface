window.__examLoadCallback({
  "title": "Databases - Relational Calculus",
  "duration": 42,
  "sections": [
    {
      "name": "Relational Calculus",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2320\"></a><div itemprop=\"text\"><p>The following relations are used to store data about students, courses, enrollment of students in courses and teachers of courses. Attributes for primary key in each relation are marked by ‘*’.</p>\n\n<pre class=\"prettyprint lang-sql\">Students (rollno*, sname, saddr)\ncourses (cno*, cname)\nenroll(rollno*, cno*, grade)\nteach(tno*, tname, cao*)\n</pre>\n\n<p>(cno is course number cname is course name, tno is teacher number, tname is teacher name, sname is student name, etc.)</p>\n\n<p>Write a SQL query for retrieving roll number and name of students who got A grade in at least one course taught by teacher names Ramesh for the above relational database.</p></div><br><br><b>GATE CSE 1993 | Question: 23</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2320/gate-cse-1993-question-23\" target=\"_blank\">https://gateoverflow.in/2320/gate-cse-1993-question-23</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"203351\"></a><div itemprop=\"text\"><p>The following relations are used to store data about students, courses, enrollment of students in courses and teachers of courses. Attributes for primary key in each relation are marked by \\( ‘\\text{*’}. \\)</p><ul><li>\\( \\text{students} (\\text{rollno*},\\text{sname},\\text{saddr}) \\)</li><li>\\( \\text{courses} (\\text{cno*}, \\text{cname}) \\)</li><li>\\( \\text{enroll}(\\text{rollno*},\\text{cno*},\\text{grade}) \\)</li><li>\\( \\text{teach}(\\text{tno*},\\text{tname},\\text{cao*}) \\)</li></ul><p>\\( (\\text{cno} \\) is course number,&nbsp;\\( \\text{cname} \\) is course name, \\( \\text{tno} \\) is teacher number, \\( \\text{tname} \\) is teacher name, \\( \\text{sname} \\) is student name, etc.)</p><p>For the relational database given above, the following functional dependencies hold:</p><ul><li>\\( \\text{rollno} \\rightarrow&nbsp;\\text{sname}, \\text{saddr} \\)</li><li>\\( \\text{cno} \\rightarrow&nbsp;\\text{cname} \\)</li><li>\\( \\text{tno} \\rightarrow&nbsp;\\text{tname} \\)</li><li>\\( \\text{rollno}, \\text{cno} \\rightarrow&nbsp;\\text{grade} \\)</li></ul><ol style=\"list-style-type:lower-alpha\"><li><p>Is the database in \\( 3^{rd} \\) normal form \\( (3NF) \\)?</p></li><li><p>If yes, prove that it is in \\( \\text{3NF} \\). If not, normalize&nbsp;the relations so that they are in \\( \\text{3NF} \\) (without proving).</p></li></ol></div><br><br><b>GATE CSE 1993 | Question: 24</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/203351/gate-cse-1993-question-24\" target=\"_blank\">https://gateoverflow.in/203351/gate-cse-1993-question-24</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1692\"></a><div itemprop=\"text\"><p>Which of the following query transformations (i.e., replacing the l.h.s. expression by the r.h.s expression) is incorrect? R1&nbsp;and R2&nbsp;are relations, C1&nbsp;and C2&nbsp;are selection conditions and A1&nbsp;and A2&nbsp;are attributes of R1.</p>\n\n</div><br><br><b>GATE CSE 1998 | Question: 2.19</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\sigma_{C_1} \\left(\\sigma_{C_2}\\left(R_1\\right)\\right) \\to&nbsp;\\sigma_{C_2} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\)</p>",
            "<p>\\( \\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right) \\to&nbsp;\\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\)</p>",
            "<p>\\( \\sigma_{C_1} \\left(R_1 \\cup R_2\\right) \\to &nbsp;\\sigma_{C_1}\\left(R_1\\right) \\cup \\sigma_{C_1} \\left(R_2\\right) \\)</p>",
            "<p>\\( \\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\to&nbsp;\\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\to&nbsp;\\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1692/gate-cse-1998-question-2-19\" target=\"_blank\">https://gateoverflow.in/1692/gate-cse-1998-question-2-19</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1472\"></a><div itemprop=\"text\"><p>The relational algebra expression equivalent to the following tuple calculus expression:</p>\n\n<p>\\( \\left\\{t \\mid t \\in r \\land \\left(t[A] = 10 \\land t[B]=20\\right)\\right\\} \\) is</p>\n\n</div><br><br><b>GATE CSE 1999 | Question: 1.19</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\sigma_{(A=10 \\lor B=20)} (r) \\)</p>",
            "<p>\\( \\sigma_{(A=10)} (r) \\cup \\sigma_{(B=20)} (r) \\)</p>",
            "<p>\\( \\sigma_{(A=10)} (r) \\cap \\sigma_{(B=20)} (r) \\)</p>",
            "<p>\\( \\sigma_{(A=10)} (r) - \\sigma_{(B=20)} (r) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\sigma_{(A=10)} (r) \\cap \\sigma_{(B=20)} (r) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1472/gate-cse-1999-question-1-19\" target=\"_blank\">https://gateoverflow.in/1472/gate-cse-1999-question-1-19</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"742\"></a><div itemprop=\"text\"><p>Which of the following relational calculus expression is not safe?</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 2.24</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\left\\{t \\mid \\exists u \\in R_1\\left(t[A] = u[A]\\right) \\land \\neg \\exists s \\in R_2 \\left(t[A] = s[A]\\right)\\right\\} \\)</p>",
            "<p>\\( \\left\\{ t \\mid \\forall u \\in R_1\\left(u[A]=\"x\" \\Rightarrow \\exists s \\in R_2\\left(t[A] = s[A] \\land s[A] = u[A]\\right)\\right) \\right\\}  \\)</p>",
            "<p>\\( \\left\\{t \\mid \\neg (t \\in R_1)\\right\\}  \\)</p>",
            "<p>\\( \\left\\{t \\mid \\exists u \\in R_1\\left(t[A]=u[A]\\right) \\land \\exists s \\in R_2 \\left(t[A] = s[A]\\right)\\right\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\left\\{t \\mid \\neg (t \\in R_1)\\right\\}  \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/742/gate-cse-2001-question-2-24\" target=\"_blank\">https://gateoverflow.in/742/gate-cse-2001-question-2-24</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"825\"></a><div itemprop=\"text\"><p>With regards to the expressive power of the formal relational query languages, which of the following statements is true?</p>\n\n</div><br><br><b>GATE CSE 2002 | Question: 1.20</b></p>",
          "type": "single",
          "options": [
            "<p>Relational algebra is more powerful than relational calculus</p>",
            "<p>Relational algebra has the same power as relational calculus</p>",
            "<p>Relational algebra has the same power as safe relational calculus</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>Relational algebra has the same power as safe relational calculus</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/825/gate-cse-2002-question-1-20\" target=\"_blank\">https://gateoverflow.in/825/gate-cse-2002-question-1-20</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1010\"></a><div itemprop=\"text\"><p>Let \\( R_1&nbsp;\\left(\\underline{A}, B, C\\right) \\) and \\( R_2\\left(\\underline{D}, E \\right)&nbsp; \\) be two relation schema, where the primary keys are shown underlined, and let C be a foreign key in \\( R_1 \\) referring to \\( R_2 \\). Suppose there is no violation of the above referential integrity constraint in the corresponding relation instances \\( r_1 \\) and \\( r_2 \\). Which of the following relational algebra expressions would necessarily produce an empty relation?</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Pi_D (r_2) - \\Pi_C (r_1) \\)</p>",
            "<p>\\( \\Pi_C (r_1) - \\Pi_D (r_2) \\)</p>",
            "<p>\\( \\Pi_D \\left(r_1 \\bowtie_{C \\neq&nbsp; D}r_2\\right) \\)</p>",
            "<p>\\( \\Pi_C \\left(r_1 \\bowtie_{C =&nbsp;D}r_2\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Pi_C (r_1) - \\Pi_D (r_2) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1010/gate-cse-2004-question-13\" target=\"_blank\">https://gateoverflow.in/1010/gate-cse-2004-question-13</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1258\"></a><div itemprop=\"text\"><p>Consider the relation <strong>employee</strong>(name, sex, supervisorName) with <em>name</em> as the key, <em>supervisorName</em> gives the name of the supervisor of the employee under consideration. What does the following Tuple Relational Calculus query produce?</p>\n\n<p>\\( \\left\\{e.name \\mid employee(e) \\wedge \\left(\\forall x\\right)\\left[\\neg employee\\left(x \\right) \\vee x.supervisorName \\neq e.name \\vee x.sex = ``male\" \\right]\\right\\} \\)</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 60</b></p>",
          "type": "single",
          "options": [
            "<p>Names of employees with a male supervisor.</p>",
            "<p>Names of employees with no immediate male subordinates.</p>",
            "<p>Names of employees with no immediate female subordinates.</p>",
            "<p>Names of employees with a female supervisor.</p>"
          ],
          "correct_answer": "<p>Names of employees with no immediate female subordinates.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1258/gate-cse-2007-question-60\" target=\"_blank\">https://gateoverflow.in/1258/gate-cse-2007-question-60</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"413\"></a><div itemprop=\"text\"><p>Which of the following tuple relational calculus expression(s) is/are equivalent to \\( \\forall t \\in r \\left(P\\left(t\\right)\\right) \\)?</p>\n\n<ol style=\"list-style-type: upper-roman;\">\n\t<li>\\( \\neg \\exists t \\in r \\left(P\\left(t\\right)\\right) \\)</li>\n\t<li>\\( \\exists t \\notin r \\left(P\\left(t\\right)\\right) \\)</li>\n\t<li>\\( \\neg \\exists t \\in r \\left(\\neg P\\left(t\\right)\\right) \\)</li>\n\t<li>\\( \\exists t \\notin r \\left(\\neg P\\left(t\\right)\\right) \\)\n\t\n\t</li>\n</ol></div><br><br><b>GATE CSE 2008 | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>I only</p>",
            "<p>II only</p>",
            "<p>III only</p>",
            "<p>III and IV only</p>"
          ],
          "correct_answer": "<p>III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/413/gate-cse-2008-question-15\" target=\"_blank\">https://gateoverflow.in/413/gate-cse-2008-question-15</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"1331\"></a><div itemprop=\"text\"><p>Let \\( R \\) and \\( S \\) be relational schemes such that \\( R=\\{a,b,c\\} \\) and \\( S=\\{c\\}. \\) Now consider the following queries on the database:</p>\n\n<ol>\n\t<li>\\( \\pi_{R-S}(r) - \\pi_{R-S} \\left (\\pi_{R-S} (r) \\times s - \\pi_{R-S,S}(r)\\right ) \\)</li>\n\t<li>\\( \\left\\{t \\mid t \\in \\pi_{R-S} (r) \\wedge \\forall u \\in s \\left(\\exists v \\in r \\left(u = v[S] \\wedge t = v\\left[R-S\\right]\\right )\\right )\\right\\} \\)</li>\n\t<li>\\( \\left\\{t \\mid t \\in \\pi_{R-S} (r) \\wedge \\forall v \\in r \\left(\\exists u \\in s \\left(u = v[S] \\wedge t = v\\left[R-S\\right]\\right )\\right ) \\right\\} \\)</li>\n\t<li>\n\t<pre class=\"prettyprint lang-c_cpp\">Select R.a,R.b\n    From R,S\n    Where R.c = S.c</pre>\n\t</li>\n</ol>\n\n<p>Which of the above queries are equivalent?</p>\n\n</div><br><br><b>GATE CSE 2009 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1 \\) and \\( 2 \\)</p>",
            "<p>\\( 1 \\) and \\( 3 \\)</p>",
            "<p>\\( 2 \\) and \\( 4 \\)</p>",
            "<p>\\( 3 \\) and \\( 4 \\)</p>"
          ],
          "correct_answer": "<p>\\( 1 \\) and \\( 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1331/gate-cse-2009-question-45\" target=\"_blank\">https://gateoverflow.in/1331/gate-cse-2009-question-45</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"1546\"></a><div itemprop=\"text\"><p>Consider the following relational schema.</p>\n\n<ul>\n\t<li>Students(rollno: integer, sname: string)</li>\n\t<li>Courses(courseno: integer, cname: string)</li>\n\t<li>Registration(rollno: integer, courseno: integer, percent: real)</li>\n</ul>\n\n<p>Which of the following queries are equivalent to this query in English?</p>\n\n<p><em>“Find the distinct names of all students who score more than \\( 90\\% \\) in the course numbered 107”</em></p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<pre class=\"prettyprint lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"4\">SELECT DISTINCT S.sname FROM Students as S, Registration\n    as R WHERE \n    R.rollno=S.rollno AND R.courseno=107 AND R.percent &gt;90\n</pre>\n\t</li>\n\t<li>\\( ∏_{sname}(σ_{courseno=107 ∧ percent &gt; 90} (Registration ⋈ Students)) \\)</li>\n\t<li>\\( \\{T \\mid ∃S \\in Students, ∃R \\in Registration ( S.rollno=R.rollno \\)<br>\n\t\\( ∧ R.courseno=107 ∧ R.percent&gt;90 ∧T.sname=S.sname)&nbsp;\\} \\)</li>\n\t<li>\\( \\left\\{ \\langle S_N\\rangle \\mid ∃S_R∃R_P (\\langle S_R,S_N\\rangle ∈Students ∧ \\\\ \\langle S_R,107,R_P\\rangle ∈Registration ∧ R_P&gt;90) \\right\\} \\)</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2013 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>I, II, III and IV</p>",
            "<p>I, II and III only</p>",
            "<p>I, II and IV only</p>",
            "<p>II, III and IV only</p>"
          ],
          "correct_answer": "<p>I, II, III and IV</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1546/gate-cse-2013-question-35\" target=\"_blank\">https://gateoverflow.in/1546/gate-cse-2013-question-35</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"118324\"></a><div itemprop=\"text\"><p>Consider a database that has the relation schemas EMP(EmpId, EmpName, DeptId), and DEPT(DeptName, DeptId). Note that the DeptId can be permitted to be NULL in the relation EMP. Consider the following queries on the database expressed in tuple relational calculus.</p>\n\n<ol style=\"list-style-type: upper-roman;\">\n\t<li>{\\( t \\) | \\( \\exists \\)u \\( \\in \\) EMP(t[EmpName] = u[EmpName] \\( \\wedge \\) \\( \\forall \\)v \\( \\in \\) DEPT(t[DeptId] \\( \\neq \\) v[DeptId]))}</li>\n\t<li>{\\( t \\) | \\( \\exists \\)u \\( \\in \\) EMP(t[EmpName] = u[EmpName] \\( \\wedge \\) \\( \\exists \\)v \\( \\in \\) DEPT(t[DeptId] \\( \\neq \\) v[DeptId]))}</li>\n\t<li>{\\( t \\) | \\( \\exists \\)u \\( \\in \\) EMP(t[EmpName] = u[EmpName] \\( \\wedge \\) \\( \\exists \\)v \\( \\in \\) DEPT(t[DeptId] \\( = \\) v[DeptId]))}</li>\n</ol>\n\n<p>Which of the above queries are safe?</p>\n\n</div><br><br><b>GATE CSE 2017 Set 1 | Question: 41</b></p>",
          "type": "single",
          "options": [
            "<p>I and II only</p>",
            "<p>I and III only</p>",
            "<p>II and III only</p>",
            "<p>I, II and&nbsp;III</p>"
          ],
          "correct_answer": "<p>I, II and&nbsp;III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118324/gate-cse-2017-set-1-question-41\" target=\"_blank\">https://gateoverflow.in/118324/gate-cse-2017-set-1-question-41</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"3554\"></a><div itemprop=\"text\"><p>Which of the following relational query languages have the same expressive power?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>Relational algebra</li>\n\t<li>Tuple relational calculus restricted to safe expressions</li>\n\t<li>Domain relational calculus restricted to safe expressions</li>\n</ol>\n\n\n\n</div><br><br><b>GATE IT 2006 | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>II and III only</p>",
            "<p>I and II only</p>",
            "<p>I and III only</p>",
            "<p>I, II and III</p>"
          ],
          "correct_answer": "<p>I, II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3554/gate-it-2006-question-15\" target=\"_blank\">https://gateoverflow.in/3554/gate-it-2006-question-15</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"3510\"></a><div itemprop=\"text\"><p>Consider a selection of the form \\( \\sigma_{A\\leq 100} (r) \\), where \\( r \\) is a relation with \\( 1000 \\) tuples. Assume that the attribute values for \\( A \\) among the tuples are uniformly distributed in the interval \\( [0, 500]. \\) Which one of the following options is the best estimate of the number of tuples returned by the given selection query ?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 65</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 50 \\)</p>",
            "<p>\\( 100 \\)</p>",
            "<p>\\( 150 \\)</p>",
            "<p>\\( 200 \\)</p>"
          ],
          "correct_answer": "<p>\\( 200 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3510/gate-it-2007-question-65\" target=\"_blank\">https://gateoverflow.in/3510/gate-it-2007-question-65</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"3389\"></a><div itemprop=\"text\"><p>Consider the following relational schema:</p>\n\n<ul>\n\t<li>\\( \\text{Student} (\\underline{\\text{school-id}, \\text{sch-roll-no}}, \\text{sname}, \\text{saddress}) \\)</li>\n\t<li>\\( \\text{School} (\\underline{\\text{school-id}}, \\text{sch-name}, \\text{sch-address}, \\text{sch-phone}) \\)</li>\n\t<li>\\( \\text{Enrolment}(\\underline{\\text{school-id}, \\text{sch-roll-no}}, \\text{erollno}, \\text{examname}) \\)</li>\n\t<li>\\( \\text{ExamResult}(\\underline{\\text{erollno}, \\text{examname}}, \\text{marks}) \\)</li>\n</ul>\n\n<p>Consider the following tuple relational calculus query.<br>\n<br>\n\\( \\left\\{t \\mid&nbsp;\\exists&nbsp;E \\in&nbsp;\\text{Enrolment }\\;\\; t = E.\\text{school-id} \\wedge \\left |&nbsp;\\{x \\mid&nbsp;x \\in&nbsp;\\text{Enrolment} \\wedge&nbsp;x.\\text{school-id} = t \\wedge (\\exists&nbsp;B \\in&nbsp;\\text{ExamResult} \\;\\;B.\\text{erollno} = x.\\text{erollno} \\wedge&nbsp; B.\\text{examname} = x.\\text{examname} \\wedge&nbsp; B.\\text{marks} &gt; 35)\\}\\right |&nbsp;\\div&nbsp;\\left | \\{x \\mid&nbsp;x \\in&nbsp;\\text{Enrolment} \\wedge&nbsp;x.\\text{school-id} = t\\}\\right |&nbsp;* 100 &gt; 35\\right\\} \\)</p>\n\n<p>If a student needs to score more than 35 marks to pass an exam, what does the query return?</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 75</b></p>",
          "type": "single",
          "options": [
            "<p>The empty set</p>",
            "<p>schools with more than \\( 35\\% \\) of its students enrolled in some exam or the other</p>",
            "<p>schools with a pass percentage above \\( 35\\% \\) over all exams taken together</p>",
            "<p>schools with a pass percentage above \\( 35\\% \\) over each exam</p>"
          ],
          "correct_answer": "<p>schools with a pass percentage above \\( 35\\% \\) over all exams taken together</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3389/gate-it-2008-question-75\" target=\"_blank\">https://gateoverflow.in/3389/gate-it-2008-question-75</a></p>"
        }
      ]
    }
  ]
});
