window.__examLoadCallback({
  "title": "SQL - SQL - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "SQL",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
          "question": "<p>Consider the relation account (customer, balance) where customer is a primary\nkey and there are no mall values. We would like to rank customers according\nto decreasing balance. The customer with the largest balance gets rank 1. Ties\nare not broken but ranks are skipped: if exactly two customers have the largest\nbalance they each get rank 1 and rank 2 is not assigned.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q67_9153671d.jpg\"><br>\nConsider these statements about Query 1 and Query 2. <br>\n1. Query 1will produce the same row set as Query 2 for some but not all\ndatabases <br>\n2. Both Query 1 Query 2 are correct implementations of the specification <br>\n3. Query 1 is a correct implementation of the specification but Query 2 is not <br>\n4. Neither query 1 nor Query 2 is a correct implementation of the specification <br>\n5. Assigning rank with a pure relational Query takes less time than scanning\nin decreasing balance order the assigning ranks using ODBC <br><br>\nWhich two of the above statements are correct? <br><br><strong>(GATE CSE 2006)</strong></p>",
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
