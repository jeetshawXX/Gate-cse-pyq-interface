window.__examLoadCallback({
  "title": "Database_Management_System - SQL",
  "duration": 30,
  "sections": [
    {
      "name": "SQL",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
        }
      ]
    }
  ]
});
