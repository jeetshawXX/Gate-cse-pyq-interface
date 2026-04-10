window.__examLoadCallback({
  "title": "Databases - Relational Algebra",
  "duration": 86,
  "sections": [
    {
      "name": "Relational Algebra",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"43581\"></a><div itemprop=\"text\">Suppose we have a database consisting of the following three relations:<br>\n\\[ \\begin{array}{|c|c|} \\hline \\text {FREQUENTS} &amp; \\text {(CUSTOMER, HOTEL)} \\\\\\hline \\text {SERVES} &amp; &nbsp;\\text{(HOTEL, SNACKS)}\\\\\\hline \\text{LIKES} &amp; \\text{(CUSTOMER, SNACKS)}\\\\\\hline \\end{array} \\]<br>\nThe first indicates the hotels each customer visits, the second tells which snacks each hotel serves and last indicates which snacks are liked by each customer. Express the following query in relational algebra:<br>\n<br>\nPrint the hotels the serve the snack that customer Rama likes.</div><br><br><b>GATE CSE 1992 | Question: 13b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/43581/gate-cse-1992-question-13b\" target=\"_blank\">https://gateoverflow.in/43581/gate-cse-1992-question-13b</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2509\"></a><div itemprop=\"text\"><p>Consider the following relational schema:</p>\n\n<ul>\n\t<li>COURSES (<u>cno</u>, cname)</li>\n\t<li>STUDENTS (<u>rollno</u>, sname, age, year)</li>\n\t<li>REGISTERED_FOR (<u>cno, rollno</u>)</li>\n</ul>\n\n<p>The underlined attributes indicate the primary keys for the relations. The ‘year’ attribute for the STUDENTS relation indicates the year in which the student is currently studying (First year, Second year etc.)</p>\n\n</div><br><br><b>GATE CSE 1994 | Question: 13</b></p>",
          "type": "numeric",
          "options": [
            "<p>Write a relational algebra query to print the roll number of students who have registered for cno&nbsp;\\( 322. \\)</p>",
            "<p>Write a SQL query to print the age and year of the youngest student in each year.</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2509/gate-cse-1994-question-13\" target=\"_blank\">https://gateoverflow.in/2509/gate-cse-1994-question-13</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2494\"></a><div itemprop=\"text\">Give a relational algebra expression using only the minimum number of operators from \\( (∪, −) \\) which is equivalent to \\( R \\) \\( ∩ \\) \\( S. \\)</div><br><br><b>GATE CSE 1994 | Question: 3.8</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2494/gate-cse-1994-question-3-8\" target=\"_blank\">https://gateoverflow.in/2494/gate-cse-1994-question-3-8</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"2666\"></a><div itemprop=\"text\"><p>Consider the relation scheme.\\[ \\begin{array}{|ll|ll|} \\hline &amp; \\text{AUTHOR} &amp; \\text{(ANAME, INSTITUTION, ACITY, AGE)} \\\\\\hline &amp; \\text{PUBLISHER} &amp; \\text{(PNAME, PCITY)} \\\\\\hline &amp;&nbsp; \\text{BOOK} &amp; \\text{(TITLE, ANAME, PNAME)} \\\\\\hline \\end{array} \\]Express the following queries using (one or more of) SELECT, PROJECT, JOIN and DIVIDE operations.</p></div><br><br><b>GATE CSE 1995 | Question: 27</b></p>",
          "type": "numeric",
          "options": [
            "<p>Get the names of all publishers.</p>",
            "<p>Get values of all attributes of all authors who have published a book for the publisher with PNAME=’TECHNICAL PUBLISHERS’.</p>",
            "<p>Get the names of all authors who have published a book for any publisher located in Madras</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2666/gate-cse-1995-question-27\" target=\"_blank\">https://gateoverflow.in/2666/gate-cse-1995-question-27</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"2779\"></a><div itemprop=\"text\"><p>A library relational database system uses the following schema</p>\n\n<ul>\n\t<li>USERS (User#, User Name, Home Town)</li>\n\t<li>BOOKS (Book#, Book Title, Author Name)</li>\n\t<li>ISSUED (Book#, User#, Date)</li>\n</ul>\n\n<p>Explain in one English sentence, what each of the following relational algebra queries is designed to determine</p>\n\n<ol style=\"list-style-type:lower-alpha\">\n\t<li>&nbsp;\\( \\sigma_{ \\text{User#}=6}\\left(\\pi_{\\text{User#, Book Title}}\\left(\\left(\\text{USERS} \\bowtie \\text{ISSUED}\\right) \\bowtie \\text{BOOKS}\\right)\\right) \\)</li>\n\t<li>&nbsp;\\( \\pi_{\\text{Author Name}}\\left(\\text{BOOKS} \\bowtie \\sigma_{\\text{Home Town=Delhi}} \\left(\\text{USERS} \\bowtie \\text{ISSUED}\\right)\\right) \\)</li>\n</ol></div><br><br><b>GATE CSE 1996 | Question: 27</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2779/gate-cse-1996-question-27\" target=\"_blank\">https://gateoverflow.in/2779/gate-cse-1996-question-27</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"19838\"></a><div itemprop=\"text\"><p>Consider the following relational database schema:</p>\n\n<ul>\n\t<li>EMP (<u>eno</u> name, age)</li>\n\t<li>PROJ (<u>pno</u> name)</li>\n\t<li>INVOLVED (<u>eno, pno</u>)</li>\n</ul>\n\n<p>EMP contains information about employees. PROJ about projects and involved about which employees involved in which projects. The underlined attributes are the primary keys for the respective relations.&nbsp;</p>\n\n<p>What is the relational algebra expression containing one or more of \\( \\{ \\sigma, \\pi, \\times, \\rho, -\\} \\) which is equivalent to SQL query.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">  select eno  from EMP|INVOLVED where EMP.eno=INVOLVED.eno  and INVOLVED.pno=3</pre></div><br><br><b>GATE CSE 1997 | Question: 76-a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/19838/gate-cse-1997-question-76-a\" target=\"_blank\">https://gateoverflow.in/19838/gate-cse-1997-question-76-a</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1670\"></a><div itemprop=\"text\"><p>Given two union compatible relations \\( R_1(A, B) \\) and \\( R_2 (C, D) \\), what is the result of the operation \\( R_1 \\Join_{ A = C \\wedge B = D} R_2 \\)?</p>\n\n\n\n</div><br><br><b>GATE CSE 1998 | Question: 1.33</b></p>",
          "type": "single",
          "options": [
            "<p>\\( R_1 \\cup R_2 \\)</p>",
            "<p>\\( R_1 \\times R_2 \\)</p>",
            "<p>\\( R_1 – R_2 \\)</p>",
            "<p>\\( R_1 \\cap R_2 \\)</p>"
          ],
          "correct_answer": "<p>\\( R_1 \\cap R_2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1670/gate-cse-1998-question-1-33\" target=\"_blank\">https://gateoverflow.in/1670/gate-cse-1998-question-1-33</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1742\"></a><div itemprop=\"text\"><p>Consider the following relational database schemes:</p>\n\n<ul>\n\t<li>COURSES (Cno, Name)</li>\n\t<li>PRE_REQ(Cno, Pre_Cno)</li>\n\t<li>COMPLETED (Student_no, Cno)</li>\n</ul>\n\n<p>COURSES gives the number and name of all the available courses.</p>\n\n<p>PRE_REQ gives the information about which courses are pre-requisites for a given course.</p>\n\n<p>COMPLETED indicates what courses have been completed by students</p>\n\n<p>Express the following using relational algebra:</p>\n\n<p>List all the courses for which a student with Student_no 2310 has completed all the pre-requisites.</p></div><br><br><b>GATE CSE 1998 | Question: 27</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1742/gate-cse-1998-question-27\" target=\"_blank\">https://gateoverflow.in/1742/gate-cse-1998-question-27</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"1471\"></a><div itemprop=\"text\"><p>Consider the join of a relation \\( R \\) with a relation \\( S \\). If \\( R \\) has \\( m \\) tuples and \\( S \\) has \\( n \\) tuples then the maximum and minimum sizes of the join respectively are</p>\n\n</div><br><br><b>GATE CSE 1999 | Question: 1.18,  ISRO2016-53</b></p>",
          "type": "single",
          "options": [
            "<p>\\( m+n \\) and \\( 0 \\)</p>",
            "<p>\\( mn \\) and \\( 0 \\)</p>",
            "<p>\\( m+n \\) and \\( |m-n| \\)</p>",
            "<p>\\( mn \\) and \\( m+n \\)</p>"
          ],
          "correct_answer": "<p>\\( mn \\) and \\( 0 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1471/gate-cse-1999-question-1-18-isro2016-53\" target=\"_blank\">https://gateoverflow.in/1471/gate-cse-1999-question-1-18-isro2016-53</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"647\"></a><div itemprop=\"text\">\n<p>Given the relations</p>\n\n<ul><li>employee (name, salary, dept-no), and</li>\n\t<li>department (dept-no, dept-name,address),</li>\n</ul><p>Which of the following queries cannot be expressed using the basic relational algebra operations \\( \\left(\\sigma, \\pi,\\times ,\\Join, \\cup, \\cap,-\\right) \\)?</p>\n\n\n</div><br><br><b>GATE CSE 2000 | Question: 1.23, ISRO2016-57</b></p>",
          "type": "single",
          "options": [
            "<p>Department address of every employee</p>",
            "<p>Employees whose name is the same as their department name</p>",
            "<p>The sum of all employees' salaries</p>",
            "<p>All employees of a given department</p>"
          ],
          "correct_answer": "<p>The sum of all employees' salaries</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/647/gate-cse-2000-question-1-23-isro2016-57\" target=\"_blank\">https://gateoverflow.in/647/gate-cse-2000-question-1-23-isro2016-57</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"717\"></a><div itemprop=\"text\"><p>Suppose the adjacency relation of vertices in a graph is represented in a table Adj \\( (X,Y). \\) Which of the following queries cannot be expressed by a relational algebra expression of constant length?</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 1.24</b></p>",
          "type": "single",
          "options": [
            "<p>List all vertices adjacent to a given vertex</p>",
            "<p>List all vertices which have self loops</p>",
            "<p>List all vertices which belong to cycles of less than three vertices</p>",
            "<p>List all vertices reachable from a given vertex</p>"
          ],
          "correct_answer": "<p>List all vertices reachable from a given vertex</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/717/gate-cse-2001-question-1-24\" target=\"_blank\">https://gateoverflow.in/717/gate-cse-2001-question-1-24</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"718\"></a><div itemprop=\"text\"><p>Let r and s be two relations over the relation schemes R and S respectively, and let A be an attribute in R. &nbsp;The relational algebra&nbsp;expression \\( \\sigma_{A=a}(r \\bowtie s) \\) is always equal to</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 1.25</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\sigma_{A=a}(r) \\)</p>",
            "<p>\\( r \\)</p>",
            "<p>\\( \\sigma_{A=a}(r) \\bowtie s \\)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( \\sigma_{A=a}(r) \\bowtie s \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/718/gate-cse-2001-question-1-25\" target=\"_blank\">https://gateoverflow.in/718/gate-cse-2001-question-1-25</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"868\"></a><div itemprop=\"text\"><p>A university placement center maintains a relational database of companies that interview students on campus and make job offers to those successful in the interview. The schema of the database is given below:<br>\n\\[ \\begin{array}{|ll|}\\hline \\text{COMPANY(}\\underline{\\text{cname}}\\text{, clocation)} &amp; \\text{STUDENT(}\\underline{\\text{srollno}}\\text{, sname, sdegree)} \\\\<br>\n\\text{INTERVIEW(}\\underline{\\text{cname, srollno}}, \\text{idate)} &amp; \\text{OFFER(}\\underline{\\text{cname, srollno}}\\text{, osalary)} \\\\\\hline&nbsp;&nbsp; \\end{array} \\]<br>\nThe COMPANY relation gives the name and location of the company. The STUDENT relation gives the student’s roll number, name and the degree program for which the student is registered in the university. The INTERVIEW relation gives the date on which a student is interviewed by a company. The OFFER relation gives the salary offered to a student who is successful in a company’s interview. The key for each relation is indicated by the underlined attributes</p>\n\n<ol style=\"list-style-type:lower-alpha\">\n<li>Write a <strong>relational algebra </strong>expressions (using only the operators \\( \\bowtie,&nbsp;\\sigma, \\pi, \\cup, - \\) ) for the following queries.\n\n<ol style=\"list-style-type:lower-roman\">\n<li>List the \\( rollnumbers \\) and \\( names \\) of students who attended at least one interview but did not receive \\( any \\) job offer.</li>\n<li>List the \\( rollnumbers \\) and \\( names \\) of students who went for interviews and received job offers from \\( every \\) company with which they interviewed.</li>\n</ol>\n</li>\n<li>Write an SQL query to list, for each degree program in which more than \\( five \\) students were offered jobs, the name of the degree and the average offered salary of students in this degree program.</li>\n</ol></div><br><br><b>GATE CSE 2002 | Question: 15</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/868/gate-cse-2002-question-15\" target=\"_blank\">https://gateoverflow.in/868/gate-cse-2002-question-15</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"920\"></a><div itemprop=\"text\"><p>Consider the following SQL query</p>\n\n<p><strong>Select distinct </strong>\\( a_1, a_2, …, a_n \\)</p>\n\n<p><strong>from </strong>\\( r_1, r_2, …, r_m \\)</p>\n\n<p><strong>where </strong>P</p>\n\n<p>For an arbitrary predicate P, this query is equivalent to which of the following relational algebra expressions?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Pi_{a_1, a_2, … a_n}&nbsp; \\sigma_p \\left(r_1 \\times r_2 \\times \\dots \\times r_m\\right) \\)</p>",
            "<p>\\( \\Pi_{a_1, a_2, … a_n}&nbsp; \\sigma_p \\left(r_1 \\bowtie r_2 \\bowtie \\dots \\bowtie r_m \\right) \\)</p>",
            "<p>\\( \\Pi_{a_1, a_2, … a_n}&nbsp; \\sigma_p \\left(r_1 \\cup r_2 \\cup \\dots \\cup r_m \\right) \\)</p>",
            "<p>\\( \\Pi_{a_1, a_2, … a_n}&nbsp; \\sigma_p \\left(r_1 \\cap r_2 \\cap \\dots \\cap r_m \\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Pi_{a_1, a_2, … a_n}&nbsp; \\sigma_p \\left(r_1 \\times r_2 \\times \\dots \\times r_m\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/920/gate-cse-2003-question-30\" target=\"_blank\">https://gateoverflow.in/920/gate-cse-2003-question-30</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"1047\"></a><div itemprop=\"text\"><p>Consider the relation Student (<ins>name</ins>, sex, marks), where the primary key is shown underlined, pertaining to students in a class that has at least one boy and one girl. What does the following relational algebra expression produce? (Note: \\( \\rho \\) is the rename operator).</p>\n\n<p>\\( \\displaystyle \\pi_{name} \\{\\sigma_{sex=female} (\\text{Student}) \\} - \\pi_{name} (\\text{Student}\\bowtie _{(sex=female \\wedge x=male \\wedge marks \\leq m)} \\rho_{n, x, m}(\\text{Student})) \\)</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 51</b></p>",
          "type": "single",
          "options": [
            "<p>names of girl students with the highest marks</p>",
            "<p>names of girl students with more marks than some boy student</p>",
            "<p>names of girl students with marks not less than some boy student</p>",
            "<p>names of girl students with more marks than all the boy students</p>"
          ],
          "correct_answer": "<p>names of girl students with more marks than all the boy students</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1047/gate-cse-2004-question-51\" target=\"_blank\">https://gateoverflow.in/1047/gate-cse-2004-question-51</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"2428\"></a><div itemprop=\"text\"><p>Information about a collection of students is given by the relation \\( \\text{studInfo(}\\underline{\\text{studId}},\\text{ name, sex)} \\). The relation \\( \\text{enroll(}{\\text{studId}},{\\text{ courseId}}) \\) gives which student has enrolled for (or taken) what course(s). Assume that every course is taken by at least one male and at least one female student. What does the following relational algebra expression represent?</p><p>\\( \\pi _{courceId}\\left(\\left(\\pi_{\\text{studId}}\\left(\\sigma_{sex='female'}\\left(\\text{studInfo}\\right)\\right) \\times \\pi_{courseId}\\left(\\text{enroll}\\right)\\right) -\\text{enroll}\\right) \\)</p></div><br><br><b>GATE CSE 2007 | Question: 59</b></p>",
          "type": "single",
          "options": [
            "<p>Courses in which all the female students are enrolled.</p>",
            "<p>Courses in which a proper subset of female students are enrolled.</p>",
            "<p>Courses in which only male students are enrolled.</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>Courses in which a proper subset of female students are enrolled.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2428/gate-cse-2007-question-59\" target=\"_blank\">https://gateoverflow.in/2428/gate-cse-2007-question-59</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"491\"></a><div itemprop=\"text\"><p>Let R and S be two relations with the following schema</p><p>\\( R(\\underline{P,Q}, R1, R2, R3) \\)</p><p>\\( S(\\underline{P,Q}, S1, S2) \\)</p><p>where \\( \\left\\{P, Q\\right\\} \\) is the key for both schemas. Which of the following queries are equivalent?</p><ol style=\"list-style-type:upper-roman\"><li><p>\\( \\Pi_P \\left(R \\bowtie S\\right) \\)</p></li><li><p>\\( \\Pi_P \\left(R\\right) \\bowtie \\Pi_P\\left(S\\right) \\)</p></li><li><p>\\( \\Pi_P \\left(\\Pi_{P, Q} \\left(R\\right) \\cap \\Pi_{P,Q} \\left(S\\right) \\right) \\)</p></li><li><p>\\( \\Pi_P \\left(\\Pi_{P, Q} \\left(R\\right) - \\left(\\Pi_{P,Q} \\left(R\\right) - \\Pi_{P,Q} \\left(S\\right)\\right)\\right) \\)</p></li></ol></div><br><br><b>GATE CSE 2008 | Question: 68</b></p>",
          "type": "single",
          "options": [
            "<p>Only I and II</p>",
            "<p>Only I and III</p>",
            "<p>Only I, II and III</p>",
            "<p>Only I, III and IV</p>"
          ],
          "correct_answer": "<p>Only I, III and IV</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/491/gate-cse-2008-question-68\" target=\"_blank\">https://gateoverflow.in/491/gate-cse-2008-question-68</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"2055\"></a><div itemprop=\"text\"><p>What is the optimized version of the relation algebra expression \\( \\pi_{A1}(\\pi_{A2}(\\sigma_{F1}(\\sigma_{F2}(r)))) \\), where \\( A1, A2 \\) are sets of attributes in \\( r \\) with &nbsp;\\( A1 \\subset A2 \\) and \\( F1,F2 \\) are Boolean expressions based on the attributes in \\( r \\)?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 3 | Question: 21</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\pi_{A1}(\\sigma_{(F1 \\wedge F2)}(r)) \\)</p>",
            "<p>\\( \\pi_{A1}(\\sigma_{(F1 \\vee F2)}(r)) \\)</p>",
            "<p>\\( \\pi_{A2}(\\sigma_{(F1 \\wedge F2)}(r)) \\)</p>",
            "<p>\\( \\pi_{A2}(\\sigma_{(F1 \\vee F2)}(r)) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\pi_{A1}(\\sigma_{(F1 \\wedge F2)}(r)) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2055/gate-cse-2014-set-3-question-21\" target=\"_blank\">https://gateoverflow.in/2055/gate-cse-2014-set-3-question-21</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"2064\"></a><div itemprop=\"text\"><p>Consider the relational schema given below, where <strong>eId</strong> of the relation <strong>dependent</strong> is a foreign key referring to <strong>empId</strong>&nbsp;of the relation <strong>employee</strong>. Assume that every employee has at least one associated dependent in the <strong>dependent</strong>&nbsp;relation.</p><ul><li><strong>employee (empId, empName, empAge)</strong></li><li><strong>dependent (depId, eId, depName, depAge)</strong></li></ul><p>Consider the following relational algebra query:</p><p>\\( \\Pi_{empId}\\:(employee) - \\Pi_{empId}\\:(employee \\bowtie_{(empId=eID) \\wedge (empAge \\leq depAge)} dependent) \\)</p><p>The above query evaluates to the set of <strong>empId</strong>s of employees whose age is greater than that of</p></div><br><br><b>GATE CSE 2014 Set 3 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>some dependent.</p>",
            "<p>all dependents.</p>",
            "<p>some of his/her dependents.</p>",
            "<p>all of his/her dependents.</p>"
          ],
          "correct_answer": "<p>all of his/her dependents.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2064/gate-cse-2014-set-3-question-30\" target=\"_blank\">https://gateoverflow.in/2064/gate-cse-2014-set-3-question-30</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"8094\"></a><div itemprop=\"text\"><p>SELECT operation in SQL is equivalent to</p>\n\n</div><br><br><b>GATE CSE 2015 Set 1 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>The selection operation in relational algebra</p>",
            "<p>The selection operation in relational algebra, except that SELECT in SQL retains duplicates</p>",
            "<p>The projection operation in relational algebra</p>",
            "<p>The projection operation in relational algebra, except that SELECT in SQL retains duplicates</p>"
          ],
          "correct_answer": "<p>The projection operation in relational algebra, except that SELECT in SQL retains duplicates</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8094/gate-cse-2015-set-1-question-7\" target=\"_blank\">https://gateoverflow.in/8094/gate-cse-2015-set-1-question-7</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"118329\"></a><div itemprop=\"text\"><p>Consider a database that has the relation schema CR(StudentName, CourseName). An instance of the schema CR is as given below.<br>\n\\[ \\begin{array}{|c|c|} \\hline \\textbf{StudentName} &amp;&nbsp;\\textbf {CourseName} \\\\\\hline \\text {SA} &amp; &nbsp;\\text{CA} \\\\\\hline \\text{SA} &amp; \\text{CB}\\\\\\hline \\text{SA} &amp; \\text{CC}&nbsp;\\\\\\hline \\text{SB} &amp; \\text{CB}&nbsp;\\\\\\hline \\text{SB}&amp; \\text{CC}&nbsp;\\\\\\hline&nbsp;\\text{SC} &amp; \\text{CA}\\\\\\hline \\text{SC}&amp;\\text{CB}&nbsp;\\\\\\hline \\text{SC} &amp; \\text{CC} \\\\\\hline&nbsp;\\text {SD} &amp; &nbsp;\\text{CA} \\\\\\hline \\text{SD} &amp; \\text{CB}\\\\\\hline \\text{SD} &amp; \\text{CC}&nbsp;\\\\\\hline \\text{SD} &amp; \\text{CD}&nbsp;\\\\\\hline \\text{SE}&amp; \\text{CD}&nbsp;\\\\\\hline&nbsp;\\text{SE} &amp; \\text{CA}\\\\\\hline \\text{SE}&amp;\\text{CB}&nbsp;\\\\\\hline \\text{SF}&amp; \\text{CA} \\\\\\hline \\text{SF} &amp; \\text{CB }\\\\\\hline\\text{SF} &amp; \\text{CC} \\\\\\hline \\end{array} \\]<br>\nThe following query is made on the database.</p>\n\n<ul>\n<li>\\( T1 \\leftarrow \\pi _{CourseName}\\left ( \\sigma _{StudentName=SA}\\left ( CR \\right ) \\right ) \\)</li>\n<li>\\( T2 \\leftarrow CR\\div T1 \\)</li>\n</ul>\n\n<p>The number of rows in \\( T2 \\) is ______________ .</p></div><br><br><b>GATE CSE 2017 Set 1 | Question: 46</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118329/gate-cse-2017-set-1-question-46\" target=\"_blank\">https://gateoverflow.in/118329/gate-cse-2017-set-1-question-46</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"204115\"></a><div itemprop=\"text\"><p>Consider the relations \\( r(A, B) \\) and \\( s(B, C) \\), where \\( s.B \\) is a primary key and \\( r.B \\) is a foreign key referencing \\( s.B \\). Consider the query</p>\n\n<p>\\( Q: r \\bowtie&nbsp;(\\sigma_{B&lt;5} (s)) \\)</p>\n\n<p>Let LOJ denote the natural left outer-join operation. Assume that \\( r \\) and \\( s \\) contain no null values.</p>\n\n<p>Which of the following is NOT equivalent to \\( Q \\)?</p>\n\n</div><br><br><b>GATE CSE 2018 | Question: 41</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\sigma_{B&lt;5} (r \\bowtie&nbsp;s) \\)</p>",
            "<p>\\( \\sigma_{B&lt;5} (r \\: LOJ \\:&nbsp;s) \\)</p>",
            "<p>\\( r \\: LOJ \\: (\\sigma_{B&lt;5}&nbsp;&nbsp;(s)) \\)</p>",
            "<p>\\( \\sigma_{B&lt;5} (r) \\: LOJ \\:&nbsp;s \\)</p>"
          ],
          "correct_answer": "<p>\\( r \\: LOJ \\: (\\sigma_{B&lt;5}&nbsp;&nbsp;(s)) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/204115/gate-cse-2018-question-41\" target=\"_blank\">https://gateoverflow.in/204115/gate-cse-2018-question-41</a></p>"
        },
        {
          "id": 23,
          "question": "<p><a name=\"302793\"></a><div itemprop=\"text\">Consider the following relations \\( P(X,Y,Z), Q(X,Y,T) \\) and \\( R(Y,V) \\).<br>\n\\[ \\overset{\\textbf{Table: P}}{\\begin{array}{|l|l|l|} \\hline \\textbf{X} &amp; \\textbf{Y} &amp; \\textbf{Z} \\\\\\hline \\text{X1} &amp; \\text{Y1} &amp; \\text{Z1} \\\\\\hline \\text{X1} &amp; \\text{Y1} &amp; \\text{Z2} \\\\\\hline \\text{X2} &amp; \\text{Y2} &amp; \\text{Z2} \\\\\\hline \\text{X2} &amp; \\text{Y4} &amp; \\text{Z4} \\\\\\hline &nbsp;\\end{array}} \\qquad \\overset{\\textbf{Table: Q}}{\\begin{array}{|l|l|l|} \\hline &nbsp;\\textbf{X} &amp; \\textbf{Y} &amp; \\textbf{T} \\\\\\hline \\text{X2} &amp; \\text{Y1} &amp; 2 \\\\\\hline \\text{X1} &amp; \\text{Y2} &amp; 5 \\\\\\hline \\text{X1} &amp; \\text{Y1} &amp; 6 \\\\\\hline \\text{X3} &amp; \\text{Y3} &amp; 1 \\\\\\hline &nbsp;\\end{array}} \\qquad \\overset{\\textbf{Table: R}}{\\begin{array}{|l|l|} \\hline \\textbf{Y} &amp; \\textbf{V} &nbsp;\\\\\\hline \\text{Y1} &amp; \\text{V1} \\\\\\hline \\text{Y3} &amp; \\text{V2} \\\\\\hline \\text{Y2} &amp; \\text{V3} \\\\\\hline \\text{Y2} &amp; \\text{V2} \\\\\\hline &nbsp;\\end{array}} \\]<br>\nHow many tuples will be returned by the following relational algebra query?<br>\n<br>\n\\( \\Pi_x (\\sigma_{(P.Y=R.Y \\wedge R.V=V2))} (P \\times R)) – \\Pi_x (\\sigma_{(Q.Y = R.Y \\wedge Q.T&gt;2))} (Q \\times R)) \\)<br>\n<br>\nAnswer: ________</div><br><br><b>GATE CSE 2019 | Question: 55</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302793/gate-cse-2019-question-55\" target=\"_blank\">https://gateoverflow.in/302793/gate-cse-2019-question-55</a></p>"
        },
        {
          "id": 24,
          "question": "<p><a name=\"357424\"></a><div itemprop=\"text\"><p>The following relation records the age of \\( 500 \\) employees of a company, where \\( empNo \\) (indicating the employee number) is the key:</p>\n\n<p>\\[ empAge(\\underline{empNo},age) \\]</p>\n\n<p>Consider the following relational algebra expression:</p>\n\n<p>\\[ \\Pi_{empNo}(empAge&nbsp;\\Join_{(age&gt;age1)} \\rho_{empNo1,age1}(empAge)) \\]</p>\n\n<p>What does the above expression generate?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 27</b></p>",
          "type": "single",
          "options": [
            "<p>Employee numbers of only those employees whose age is the maximum</p>",
            "<p>Employee numbers of only those employees whose age is more than the age of exactly one other employee</p>",
            "<p>Employee numbers of all employees whose age is not the minimum</p>",
            "<p>Employee numbers of all employees whose age is the minimum</p>"
          ],
          "correct_answer": "<p>Employee numbers of all employees whose age is not the minimum</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357424/gate-cse-2021-set-1-question-27\" target=\"_blank\">https://gateoverflow.in/357424/gate-cse-2021-set-1-question-27</a></p>"
        },
        {
          "id": 25,
          "question": "<p><a name=\"371921\"></a><div itemprop=\"text\"><p>Consider the following three relations in a relational database.</p>\n\n<p>\\( \\text{Employee} (\\underline{\\text{eId}},\\text{Name}), \\; \\text{Brand}(\\underline{\\text{bId}},\\text{bName}), \\; \\text{Own}(\\underline{\\text{eId}},\\underline{\\text{bId}}) \\)</p>\n\n<p>Which of the following relational algebra expressions return the set of \\( \\textit{elds} \\) who own all the brands?</p>\n\n</div><br><br><b>GATE CSE 2022 | Question: 15</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\(  \\Pi_{eId} \\left(\\Pi_{eId,bId} (Own) / \\Pi_{bId} (Brand) \\right) \\)</p>",
            "<p>\\(  \\Pi_{eId} (Own) – \\Pi_{eId} \\left( ( \\Pi_{eId} (Own) \\times \\Pi_{bId} (Brand)) – \\Pi_{eId,bId} (Own)\\right) \\)</p>",
            "<p>\\(  \\Pi_{eId} \\left(\\Pi_{eId,bId} (Own) / \\Pi_{bId} (Own) \\right) \\)</p>",
            "<p>\\(  \\Pi_{eId} \\left( (\\Pi_{eId}(Own) \\times \\Pi_{bId} (Own)) / \\Pi_{bId} (Brand) \\right) \\)</p>"
          ],
          "correct_answer": [
            "<p>\\(  \\Pi_{eId} \\left(\\Pi_{eId,bId} (Own) / \\Pi_{bId} (Brand) \\right) \\)</p>",
            "<p>\\(  \\Pi_{eId} (Own) – \\Pi_{eId} \\left( ( \\Pi_{eId} (Own) \\times \\Pi_{bId} (Brand)) – \\Pi_{eId,bId} (Own)\\right) \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371921/gate-cse-2022-question-15\" target=\"_blank\">https://gateoverflow.in/371921/gate-cse-2022-question-15</a></p>"
        },
        {
          "id": 26,
          "question": "<p><a name=\"422817\"></a><div itemprop=\"text\">Consider the following two relations, \\( R(A, B) \\) and \\( S(A, C) \\):<br>\n\\[ <br>\n\\begin{array}{|c|}<br>\n\\hline<br>\n\\textbf{R} \\\\<br>\n\\hline<br>\n\\begin{array}{c|c}<br>\n\\textbf{A} &amp; \\textbf{B} &nbsp;\\\\<br>\n\\hline<br>\n\\text{10} &amp; \\text{20} &nbsp;\\\\ &nbsp;\\hline<br>\n\\text{20} &amp; \\text{30} &nbsp;\\\\ &nbsp;\\hline<br>\n\\text{30} &amp; \\text{40} &nbsp;\\\\ &nbsp;\\hline<br>\n\\text{30} &amp; \\text{50} &nbsp;\\\\ &nbsp;\\hline \\text{50} &amp; \\text{95}<br>\n\\end{array} \\\\<br>\n\\hline<br>\n\\end{array}<br>\n\\quad<br>\n\\begin{array}{|c|}<br>\n\\hline<br>\n\\textbf{S} \\\\<br>\n\\hline<br>\n\\begin{array}{c|c}<br>\n\\textbf{A} &amp; \\textbf{C} &nbsp;\\\\<br>\n\\hline<br>\n\\text{10} &amp; \\text{90} &nbsp;\\\\ &nbsp;\\hline<br>\n\\text{30} &amp; \\text{45} &nbsp;\\\\ &nbsp;\\hline<br>\n\\text{40} &amp; \\text{80} &nbsp;\\\\<br>\n\\end{array} \\\\<br>\n\\hline<br>\n\\end{array}<br>\n \\]<br>\nThe total number of tuples obtained by evaluating the following expression<br>\n<br>\n\\( \\sigma_{B&lt;C}\\left(R \\bowtie_{R . A=S . A} S\\right) \\) is ___________.</div><br><br><b>GATE CSE 2024 | Set 1 | Question: 25</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422817/gate-cse-2024-set-1-question-25\" target=\"_blank\">https://gateoverflow.in/422817/gate-cse-2024-set-1-question-25</a></p>"
        },
        {
          "id": 27,
          "question": "<p><a name=\"422862\"></a><div itemprop=\"text\"><p>​​​​​The relation schema, Person (pid, city), describes the city of residence for every person uniquely identified by pid. The following relational algebra operators are available: selection, projection, cross product, and rename.</p><p>To find the list of cities where at least \\( 3 \\) persons reside, using the above operators, the minimum number of cross product operations that must be used is</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422862/gate-cse-2024-set-2-question-35\" target=\"_blank\">https://gateoverflow.in/422862/gate-cse-2024-set-2-question-35</a></p>"
        },
        {
          "id": 28,
          "question": "<p><a name=\"460970\"></a><div itemprop=\"text\"><p>Consider the following tables, \\( \\text{Loan} \\) and \\( \\text{Borrower}, \\) of a bank.</p><p><br>\\(<br>\\begin{array}{|c|}<br>\\hline<br>\\textbf{Loan} \\\\<br>\\hline<br>\\begin{array}{c|c|c}<br>\\textbf{loan_number} &amp; \\textbf{branch_name} &amp; \\textbf{amount} \\\\&nbsp;<br>\\hline<br>\\text{L11} &amp; \\text{Banjara Hills} &amp; 90000 \\\\&nbsp; \\hline<br>\\text{L14} &amp; \\text{Kondapur} &amp; 50000 \\\\&nbsp; \\hline<br>\\text{L15} &amp; \\text{SR Nagar} &amp; 40000 \\\\&nbsp; \\hline<br>\\text{L22} &amp; \\text{SR Nagar} &amp; 25000 \\\\&nbsp; \\hline<br>\\text{L23} &amp; \\text{Balanagar} &amp; 80000 \\\\&nbsp; \\hline<br>\\text{L25} &amp; \\text{Kondapur} &amp; 70000 \\\\&nbsp; \\hline<br>\\text{L19} &amp; \\text{SR Nagar} &amp; 65000 \\\\&nbsp;<br>\\end{array} \\\\<br>\\hline<br>\\end{array}<br>\\quad<br>\\begin{array}{|c|}<br>\\hline<br>\\textbf{Borrower} \\\\<br>\\hline<br>\\begin{array}{c|c}<br>\\textbf{customer_name} &amp; \\textbf{loan_num}&nbsp; \\\\&nbsp;<br>\\hline<br>\\text{Anand} &amp; \\text{L11}&nbsp; \\\\&nbsp; \\hline<br>\\text{Karteek}&nbsp;&amp; \\text{L11}&nbsp; \\\\&nbsp; \\hline<br>\\text{Karteek}&nbsp;&amp; \\text{L14}&nbsp; \\\\&nbsp; \\hline<br>\\text{Ankita}&nbsp;&amp; \\text{L15}&nbsp; \\\\&nbsp; \\hline<br>\\text{Gopal}&nbsp;&amp; \\text{L19}&nbsp; \\\\&nbsp; \\hline<br>\\text{Karteek}&nbsp;&amp; \\text{L22}&nbsp; \\\\&nbsp; \\hline<br>\\text{Karteek}&nbsp;&amp; \\text{L23}&nbsp; \\\\&nbsp; \\hline \\text{Sunil}&nbsp;&amp; \\text{L23}&nbsp; \\\\&nbsp; \\hline \\text{Sunil}&nbsp;&amp; \\text{L25}&nbsp; \\\\&nbsp;<br>\\end{array} \\\\<br>\\hline<br>\\end{array}<br>\\)</p><p>Query<strong>:</strong> \\( \\pi_{\\text {branch_name, customer_name }}( \\) <strong>Loan</strong> \\( \\bowtie \\) <strong>Borrower</strong> \\( ) \\div \\pi_{\\text {branch_name }}( \\) <strong>Loan</strong> \\( ) \\) where \\( \\bowtie \\) denotes natural join.<br><br>The number of tuples returned by the above relational algebra query is ____________ (Answer in integer)</p></div><br><br><b>GATE DA 2025 | Question: 52</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1:1",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460970/gate-da-2025-question-52\" target=\"_blank\">https://gateoverflow.in/460970/gate-da-2025-question-52</a></p>"
        },
        {
          "id": 29,
          "question": "<p><a name=\"461015\"></a><div itemprop=\"text\"><p>Consider the following three relations:</p><p data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\\( \\text{Car (model, year,  \\)\\underline{\\text{serial}}\\( , color)} \\)<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\\( \\text{Make (maker,  \\)\\underline{\\text{model}}\\( )} \\)<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\\( \\text{Own ( \\)\\underline{\\text{owner}},\\(   \\)\\underline{\\text{serial}}\\( )} \\)</p><p>A tuple in \\( \\text{Car} \\) represents a specific car of a given \\( \\text{model}, \\) made in a given \\( \\text{year}, \\) with a \\( \\text{serial} \\) number and a \\( \\text{color}. \\) A tuple in \\( \\text{Make} \\) specifies that a \\( \\text{maker} \\) company makes cars of a certain \\( \\text{model}. \\) A tuple in \\( \\text{Own} \\) specifies that an \\( \\text{owner} \\) owns the car with a given \\( \\text{serial} \\) number. Keys are underlined; (\\( \\underline{\\text{owner}}, \\) \\( \\underline{\\text{serial}} \\)) together form key for \\( \\text{Own}. \\) ( \\( \\bowtie \\) denotes natural join)<br>\\[<br>\\pi_{\\text{owner}} \\left( \\text{Own} \\bowtie \\left( \\sigma_{\\text{color} = \\text{\"red\"}} \\left( \\text{Car} \\bowtie \\left( \\sigma_{\\text{maker} = \\text{\"ABC\"}}&nbsp; \\text{ Make} \\right) \\right) \\right) \\right)<br>\\]</p><p>Which one of the following options describes what the above expression computes?</p></div><br><br><b>GATE DA 2025 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>All owners of a red car, a car made by \\( \\text{ABC}, \\) or a red car made by \\( \\text{ABC} \\)</p>",
            "<p>All owners of more than one car, where at least one car is red and made by \\( \\text{ABC} \\)</p>",
            "<p>All owners of a red car made by \\( \\text{ABC} \\)</p>",
            "<p>All red cars made by \\( \\text{ABC} \\)</p>"
          ],
          "correct_answer": "<p>All owners of a red car made by \\( \\text{ABC} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/461015/gate-da-2025-question-7\" target=\"_blank\">https://gateoverflow.in/461015/gate-da-2025-question-7</a></p>"
        },
        {
          "id": 30,
          "question": "<p><a name=\"422946\"></a><div itemprop=\"text\"><p>​​​​​Consider a database that includes the following relations:</p><p>Defender(name, rating, side, goals)<br>Forward(name, rating, assists, goals)<br>Team(name, club, price)</p><p>Which ONE of the following relational algebra expressions checks that every name occurring in Team appears in either Defender or Forward, where \\( \\phi \\) denotes the empty set?</p><p></p></div><br><br><b>GATE DS&AI 2024 | Question: 16</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Pi_{\\text {name }}( \\) Team \\( ) \\backslash\\left(\\Pi_{\\text {name }}(\\right. \\) Defender \\( ) \\cap \\Pi_{\\text {name }}( \\) Forward \\( \\left.)\\right)=\\phi \\)</p>",
            "<p>\\( \\left(\\Pi_{\\text {name }}(\\right. \\) Defender \\( ) \\cap \\Pi_{\\text {name }}( \\) Forward \\( \\left.)\\right) \\backslash \\Pi_{\\text {name }}( \\) Team \\( )=\\phi \\)</p>",
            "<p>\\( \\Pi_{\\text {name }}( \\) Team \\( ) \\backslash\\left(\\Pi_{\\text {name }}(\\right. \\) Defender \\( ) \\cup \\Pi_{\\text {name }}( \\) Forward \\( \\left.)\\right)=\\phi \\)</p>",
            "<p>\\( \\left(\\Pi_{\\text {name }}(\\right. \\) Defender \\( ) \\cup \\Pi_{\\text {name }}( \\) Forward \\( \\left.)\\right) \\backslash \\Pi_{\\text {name }}( \\) Team \\( )=\\phi \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Pi_{\\text {name }}( \\) Team \\( ) \\backslash\\left(\\Pi_{\\text {name }}(\\right. \\) Defender \\( ) \\cup \\Pi_{\\text {name }}( \\) Forward \\( \\left.)\\right)=\\phi \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422946/gate-ds&ai-2024-question-16\" target=\"_blank\">https://gateoverflow.in/422946/gate-ds&ai-2024-question-16</a></p>"
        },
        {
          "id": 31,
          "question": "<p><a name=\"3831\"></a><div itemprop=\"text\"><p>A table 'student' with schema (roll, name, hostel, marks), and another table 'hobby' with schema (roll, hobbyname) contains records as shown below:<br>\n\\[ \\overset{\\text{Table: student}}{\\begin{array}{|c|c|c|c|} \\hline \\textbf{Roll} &amp;&nbsp;\\textbf {Name} &amp;&nbsp;\\textbf {Hostel} &amp; &nbsp;\\textbf{Marks} \\\\\\hline \\text{1798} &amp; \\text{Manoj Rathor} &amp;&nbsp;\\text{7}&nbsp;&amp; \\text{95}&nbsp;\\\\\\hline \\text{2154} &amp; \\text{Soumic Banerjee} &amp; \\text{5}&nbsp;&amp; \\text{68}\\\\\\hline \\text{2369} &amp; \\text{Gumma Reddy} &amp; \\text{7}&nbsp;&amp; \\text{86}\\\\\\hline\\text{2581} &amp; \\text{Pradeep pendse} &amp;&nbsp;\\text{6}&nbsp;&amp; \\text{92}\\\\\\hline&nbsp;\\text{2643} &amp; \\text{Suhas Kulkarni} &amp;&nbsp;\\text{5}&nbsp;&amp; \\text{78}&nbsp;\\\\\\hline \\text{2711} &amp; \\text{Nitin Kadam} &amp; \\text{8}&nbsp;&amp; \\text{72}\\\\\\hline&nbsp; \\text{2872}&amp; \\text{Kiran Vora} &amp; \\text{5}&nbsp;&amp; \\text{92}\\\\\\hline\\text{2926} &amp; \\text{Manoj Kunkalikar} &amp;&nbsp;\\text{5}&nbsp;&amp; \\text{94}\\\\\\hline&nbsp;&nbsp; \\text{2959}&amp; \\text{Hemant&nbsp;Karkhanis} &amp; \\text{7}&nbsp;&amp; \\text{88}\\\\\\hline\\text{3125} &amp; \\text{Rajesh Doshi} &amp;&nbsp;\\text{5}&nbsp;&amp; \\text{82}\\\\\\hline \\end{array}} \\qquad \\overset{\\text{Table: hobby}}{\\begin{array}{|c|c|} \\hline \\textbf{Roll} &amp;&nbsp;\\textbf {Hobby Name} \\\\\\hline \\text{1798} &amp; \\text{chess} \\\\\\hline&nbsp;\\text{1798}&nbsp;&amp; \\text{music}&nbsp;\\\\\\hline \\text{2154} &amp; \\text{music} \\\\\\hline&nbsp;\\text{2369}&nbsp;&amp; \\text{swimming}\\\\\\hline \\text{2581} &amp; \\text{cricket} \\\\\\hline&nbsp;&nbsp;\\text{2643}&nbsp;&amp; \\text{chess}\\\\\\hline\\text{2643} &amp; \\text{hockey} \\\\\\hline&nbsp;\\text{2711}&nbsp;&amp; \\text{volleyball}\\\\\\hline&nbsp;\\text{2872} &amp; \\text{football} \\\\\\hline&nbsp;\\text{2926}&nbsp;&amp; \\text{cricket}&nbsp;\\\\\\hline \\text{2959} &amp; \\text{photography} \\\\\\hline&nbsp;&nbsp;\\text{3125}&nbsp;&amp; \\text{music}\\\\\\hline&nbsp; \\text{3125}&amp; \\text{chess}\\\\\\hline \\end{array}} \\]<br>\nThe following SQL query is executed on the above tables:</p>\n\n<pre class=\"prettyprint lang-sql\">select hostel\nfrom student natural join hobby\nwhere marks &gt;= 75 and roll between 2000 and 3000;</pre>\n\n<p><br>\nRelations \\( S \\) and \\( H \\) with the same schema as those of these two tables respectively contain the same information as tuples. A new relation \\( S’ \\) is obtained by the following relational algebra operation:</p>\n\n<p>\\[ S’ = \\Pi_{\\text{hostel}} ((\\sigma_{s.roll = H.roll} (\\sigma_{marks &gt; 75\\text{ and }roll &gt; 2000\\text{ and }roll &lt; 3000} (S)) \\times&nbsp;(H)) \\]</p>\n\n<p>The difference between the number of rows output by the SQL statement and the number of tuples in \\( S’ \\) is</p>\n\n</div><br><br><b>GATE IT 2005 | Question: 68</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 6 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 0 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3831/gate-it-2005-question-68\" target=\"_blank\">https://gateoverflow.in/3831/gate-it-2005-question-68</a></p>"
        }
      ]
    }
  ]
});
