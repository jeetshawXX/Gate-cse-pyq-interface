window.__examLoadCallback({
  "title": "SQL - SQL - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "SQL",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
          "question": "<p>Consider the following relational schema.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q35_e9b3f125.jpg\"> <br><br><strong>(GATE CSE 2013)</strong></p>",
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
          "id": 5,
          "question": "<p>Consider the following relations A, B and C:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q50_b1b0feea.jpg\"> <br>How many tuples does the result of the following SQL query contain?<pre><code> SELECT A.Id\nFROM A\nWHERE A.Age &gt; ALL (SELECT B.Age\nFROM B\nWHERE B.Name = 'Arun') </code></pre> <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "id": 6,
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
          "id": 7,
          "question": "<p>Database table by name Loan_Records is given below.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q36_8949872d.jpg\"> <br>\nWhat is the output of the following SQL query?<pre><code> \nSELECT count(*)\nFROM(\n(SELECT Borrower, Bank_Manager FROM Loan_Records) AS S\nNATURAL JOIN\n(SELECT Bank_Manager, Loan_Amount FROM Loan_Records) AS T); </code></pre> <br><br><strong>(GATE CSE 2011)</strong></p>",
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
          "id": 8,
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
          "id": 9,
          "question": "<p>A relational schema for a train reservation database is given below\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q19_f503c6ab.jpg\"> <br> What pids are returned by the following SQL query for the above instance of the\ntables?<pre><code> SELECT pid\nFROM Re servation\nWHERE class = 'AC' AND\n     EXISTS (SELECT *\n                      FROM Passenger\n                      WHERE age &gt; 65 AND\n                      Passenger.pid = Reservation.pid) </code></pre> <br><br><strong>(GATE CSE 2010)</strong></p>",
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
