window.__examLoadCallback({
  "title": "Databases - SQL",
  "duration": 39,
  "sections": [
    {
      "name": "SQL",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1400\"></a><div itemprop=\"text\"><p>The relation <strong>book</strong>&nbsp;(<u>title</u>, price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?</p>\n\n<pre class=\"prettyprint linenums lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"\">select title\nfrom book as B\nwhere (select count(*)\n    from book as T\n    where T.price&gt;B.price) &lt; 5\n</pre>\n\n</div><br><br><b>Databases: GATE CSE 2005 | Question: 77,  ISRO2016</b></p>",
          "type": "single",
          "options": [
            "<p>Titles of the four most expensive books</p>",
            "<p>Title of the fifth most inexpensive book</p>",
            "<p>Title of the fifth most expensive book</p>",
            "<p>Titles of the five most expensive books</p>"
          ],
          "correct_answer": "<p>Titles of the five most expensive books</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1400/gate-cse-2005-question-77-isro2016-55\" target=\"_blank\">https://gateoverflow.in/1400/gate-cse-2005-question-77-isro2016-55</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"49526\"></a><div itemprop=\"text\">\n<p>Which commands are used to control access over objects in relational database?</p>\n\n\n</div><br><br><b>Databases: ISRO CSE 2007 | Question: 47</b></p>",
          "type": "single",
          "options": [
            "<p>CASCADE &amp; MVD</p>",
            "<p>GRANT &amp; REVOKE</p>",
            "<p>QUE &amp; QUIST</p>",
            "<p>None of these</p>"
          ],
          "correct_answer": "<p>GRANT &amp; REVOKE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/49526/isro-cse-2007-question-47\" target=\"_blank\">https://gateoverflow.in/49526/isro-cse-2007-question-47</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"49527\"></a><div itemprop=\"text\">\n<p>Which of the following is aggregate function in SQL?</p>\n\n\n</div><br><br><b>Databases: ISRO CSE 2007 | Question: 48</b></p>",
          "type": "single",
          "options": [
            "<p>Avg</p>",
            "<p>Select</p>",
            "<p>Ordered by</p>",
            "<p>distinct</p>"
          ],
          "correct_answer": "<p>Avg</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/49527/isro-cse-2007-question-48\" target=\"_blank\">https://gateoverflow.in/49527/isro-cse-2007-question-48</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"128552\"></a><div itemprop=\"text\"><p>\\( \\begin{array}{|l|l|l|l|l|} \\hline \\textbf{Employee} &amp; \\textbf{Department} &amp; \\textbf{OT_allowance} \\\\ \\hline \\text{RAMA} &amp; \\text{Mechanical} &amp; \\text{5000} \\\\\\hline \\text{GOPI} &amp; \\text{Electrical} &amp; \\text{2000} \\\\\\hline \\text{SINDHU} &amp; \\text{Computer} &amp; \\text{4000} \\\\\\hline \\text{MAHESH} &amp; \\text{Civil} &amp; \\text{1500} \\\\\\hline&nbsp;&nbsp;\\end{array} \\)</p>\n\n<p>What is the output of the following SQL query?</p>\n\n<pre class=\"prettyprint lang-sql\">select count(*) from \n    ((select Employee, Department from Overtime_allowance) \n    natural join \n    (select Department, OT_allowance from Overtime_allowance) \n    as T);</pre>\n\n</div><br><br><b>Databases: ISRO CSE 2017 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 16 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( 4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128552/isro-cse-2017-question-7\" target=\"_blank\">https://gateoverflow.in/128552/isro-cse-2017-question-7</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"213548\"></a><div itemprop=\"text\"><p>Given relations \\( \\textsf{R(w,x)} \\) and \\( \\textsf{S(y,z)}, \\)&nbsp;the result of</p>\n\n<pre class=\"prettyprint linenums lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"4\">SELECT DISTINCT w, x\nFROM R, S</pre>\n\n<p>ls guaranteed to be same as \\( \\text{R}, \\) if</p>\n\n</div><br><br><b>Databases: ISRO CSE 2018 | Question: 40</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{R} \\) has no duplicates and \\( \\textsf{S} \\) is non-empty</p>",
            "<p>\\( \\textsf{R} \\) and \\( \\textsf{S} \\) have no duplicates</p>",
            "<p>\\( \\textsf{S} \\) has no duplicates and \\( \\textsf{R} \\) is non-empty</p>",
            "<p>\\( \\textsf{R} \\) and \\( \\textsf{S} \\) have the same number of tuples</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{R} \\) has no duplicates and \\( \\textsf{S} \\) is non-empty</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213548/isro-cse-2018-question-40\" target=\"_blank\">https://gateoverflow.in/213548/isro-cse-2018-question-40</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"213546\"></a><div itemprop=\"text\"><p>Consider the set of relations given below and the SQL query that follows:</p>\n\n<pre class=\"prettyprint linenums lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"4\">Students: (Roll_number, Name, Date_of_birth)\nCoursed: (Course_number, Course_name, Instructor)\nGrades: (Roll_number, Course_number, Grade)</pre>\n\n<pre class=\"prettyprint linenums lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"4\">SELECT DISTINCT Name\nFROM Students, Courses, Grades\nWHERE Students.Roll_number =&nbsp;Grades.Roll_number\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AND&nbsp; &nbsp;Courses.Intructor =Sriram\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AND&nbsp; &nbsp;Courses.Course_number = Grades.Course_number\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AND&nbsp; &nbsp;Grades.Grade = A</pre>\n\n<p>Which of the following sets is computed by the above query?</p>\n\n</div><br><br><b>Databases: ISRO CSE 2018 | Question: 42</b></p>",
          "type": "single",
          "options": [
            "<p>Names of Students who have got an \\( \\textsf{A} \\) grade in all courses taught by Sriram</p>",
            "<p>Names of Students who have got an \\( \\textsf{A} \\) grade in all courses</p>",
            "<p>Names of Students who have got an \\( \\textsf{A} \\) grade in at least one of the&nbsp;courses taught by Sriram</p>",
            "<p>None of the above&nbsp;</p>"
          ],
          "correct_answer": "<p>Names of Students who have got an \\( \\textsf{A} \\) grade in at least one of the&nbsp;courses taught by Sriram</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213546/isro-cse-2018-question-42\" target=\"_blank\">https://gateoverflow.in/213546/isro-cse-2018-question-42</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"331428\"></a><div itemprop=\"text\"><p>Properties of \\( \\text{‘DELETE’} \\) and \\( \\text{‘TRUNCATE’} \\) commands indicate that</p>\n\n</div><br><br><b>Databases: ISRO CSE 2020 | Question: 48</b></p>",
          "type": "multiple",
          "options": [
            "<p>After the execution of \\( \\text{‘TRUNCATE’} \\) operation, \\( \\text{COMMIT} \\), and \\( \\text{ROLLBACK} \\) statements cannot be performed to retrieve the lost data, while \\( \\text{‘DELETE’} \\) allow&nbsp;it</p>",
            "<p>After the execution of \\( \\text{‘DELETE’} \\) and \\( \\text{‘TRUNCATE’} \\) operation retrieval is easily possible for the lost data</p>",
            "<p>After the execution of \\( \\text{‘DELETE’} \\) operation, \\( \\text{COMMIT} \\) and \\( \\text{ROLLBACK} \\) statements can be performed to retrieve the lost data, while \\( \\text{TRUNCATE} \\) do not allow it</p>",
            "<p>After the execution of \\( \\text{‘DELETE’} \\) and \\( \\text{‘TRUNCATE’} \\) operation no retrieval is possible for the lost data</p>"
          ],
          "correct_answer": [
            "<p>After the execution of \\( \\text{‘TRUNCATE’} \\) operation, \\( \\text{COMMIT} \\), and \\( \\text{ROLLBACK} \\) statements cannot be performed to retrieve the lost data, while \\( \\text{‘DELETE’} \\) allow&nbsp;it</p>",
            "<p>After the execution of \\( \\text{‘DELETE’} \\) operation, \\( \\text{COMMIT} \\) and \\( \\text{ROLLBACK} \\) statements can be performed to retrieve the lost data, while \\( \\text{TRUNCATE} \\) do not allow it</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331428/isro-cse-2020-question-48\" target=\"_blank\">https://gateoverflow.in/331428/isro-cse-2020-question-48</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"331400\"></a><div itemprop=\"text\"><p>The SQL query</p>\n\n<pre class=\"prettyprint linenums lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"4\">SELECT columns\nFROM TableA\nRIGHT OUTER JOIN TableB\nON A.columnName = B.columnName\nWHERE A.columnName IS NULL</pre>\n\n<p>returns the following:</p>\n\n</div><br><br><b>Databases: ISRO CSE 2020 | Question: 51</b></p>",
          "type": "single",
          "options": [
            "<p>All rows in Table \\( \\text{B} \\), which meets equality condition above and, none from Table \\( \\text{A} \\) which meets the condition.</p>",
            "<p>All rows in Table \\( \\text{A} \\), which meets equality condition above and none from Table \\( \\text{B} \\), which meets the condition.</p>",
            "<p>All rows in Table \\( \\text{B} \\), which meets the equality condition</p>",
            "<p>All rows in Table \\( \\text{A} \\), which meets the equality condition</p>"
          ],
          "correct_answer": "<p>All rows in Table \\( \\text{B} \\), which meets equality condition above and, none from Table \\( \\text{A} \\) which meets the condition.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331400/isro-cse-2020-question-51\" target=\"_blank\">https://gateoverflow.in/331400/isro-cse-2020-question-51</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"435389\"></a><div itemprop=\"text\"><p>Consider a database table \\( T \\) containing two columns \\( X \\) and \\( Y \\) each of type Integer. After the creation of the table, one record \\( (X=1, Y=1) \\) is inserted in the table. Let \\( MX \\) and \\( MY \\) denote the respective maximum values of \\( X \\) and \\( Y \\) among all records in the table at any point in time. Using \\( MX \\) and \\( MY \\), new records are inserted in the table \\( 128 \\) times with \\( X \\) and \\( Y \\) values being \\( M X+1,2 \\times M Y+1 \\) respectively. It may be noted that each time after the insertion, values of \\( MX \\) and \\( MY \\) change. What will be the output of the following SQL query after the steps mentioned above are carried out?</p><p><strong>SELECT \\( Y \\) FROM \\( T \\) WHERE \\( X=7 \\);</strong></p></div><br><br><b>Databases: ISRO CSE 2023 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 127 \\)</p>",
            "<p>\\( 15 \\)</p>",
            "<p>\\( 129 \\)</p>",
            "<p>\\( 257 \\)<br>&nbsp;</p>"
          ],
          "correct_answer": "<p>\\( 127 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/435389/isro-cse-2023-question-7\" target=\"_blank\">https://gateoverflow.in/435389/isro-cse-2023-question-7</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"43857\"></a><div itemprop=\"text\">\n<p>Consider the following relational schema:</p>\n\n<ul><li>Suppliers (<span style=\"text-decoration: underline;\">sid:integer</span>, sname:string, saddress:string)</li>\n\t<li>Parts (<span style=\"text-decoration: underline;\">pid:integer</span>, pname:string, pcolor:string)</li>\n\t<li>Catalog (<span style=\"text-decoration: underline;\">sid:integer, pid:integer</span>, pcost:real)</li>\n</ul><p>What is the result of the following query?</p>\n\n<pre class=\"prettyprint lang-sql\">(SELECT Catalog.pid from Suppliers, Catalog\nWHERE Suppliers.sid = Catalog.sid)\nMINUS\n(SELECT Catalog.pid from Suppliers, Catalog\nWHERE Suppliers.sname &lt;&gt; 'Sachin' and Suppliers.sid = Catalog.sid)</pre>\n\n\n</div><br><br><b>Databases: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>Pid of parts supplied by all except Sachin</p>",
            "<p>Pid of parts supplied only by Sachin</p>",
            "<p>Pid of parts available in catalog supplied by Sachin</p>",
            "<p>Pid of parts available in catalog supplied by all except Sachin</p>"
          ],
          "correct_answer": "<p>Pid of parts supplied only by Sachin</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43857/isro-2013-24\" target=\"_blank\">https://gateoverflow.in/43857/isro-2013-24</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"182061\"></a><div itemprop=\"text\"><p>Consider the schema</p>\n\n<p>\\( \\text{Sailors(sid,sname,rating,age) with the following data} \\)</p>\n\n<p>\\( \\begin{array}{|l|l|l|l|} \\hline \\textbf{sid} &amp; \\textbf{sname} &amp; \\textbf{rating} &amp; \\textbf{age} \\\\ \\hline \\text{22} &amp; \\text{Dustin}&nbsp; &amp; \\text{7} &amp; \\text{45} \\\\ \\hline&nbsp;\\text{29} &amp; \\text{Borg}&nbsp; &amp; \\text{1} &amp; \\text{33} \\\\ \\hline&nbsp;\\text{31} &amp; \\text{Pathy}&nbsp; &amp; \\text{8} &amp; \\text{55} \\\\ \\hline&nbsp;\\text{32} &amp; \\text{Robert}&nbsp; &amp; \\text{8} &amp; \\text{25} \\\\ \\hline&nbsp;\\text{58} &amp; \\text{Raghu}&nbsp; &amp; \\text{10} &amp; \\text{17} \\\\ \\hline&nbsp;\\text{64} &amp; \\text{Herald}&nbsp; &amp; \\text{7} &amp; \\text{35} \\\\ \\hline&nbsp;\\text{71} &amp; \\text{Vishnu}&nbsp; &amp; \\text{10} &amp; \\text{16} \\\\ \\hline&nbsp;\\text{74} &amp; \\text{King}&nbsp; &amp; \\text{9} &amp; \\text{35} \\\\ \\hline&nbsp;\\text{85} &amp; \\text{Archer}&nbsp; &amp; \\text{3} &amp; \\text{26} \\\\ \\hline&nbsp;\\text{84} &amp; \\text{Bob}&nbsp; &amp; \\text{3} &amp; \\text{64} \\\\ \\hline&nbsp;\\text{96} &amp; \\text{Flinch}&nbsp; &amp; \\text{3} &amp; \\text{17} \\\\ \\hline&nbsp; \\end{array} \\)</p>\n\n<p>For the query&nbsp;</p>\n\n<pre class=\"prettyprint linenums lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"4\">SELECT&nbsp;S.rating, AVG(S.age) AS&nbsp;avgage&nbsp;FROM&nbsp;Sailors S\nWhere&nbsp;S.age&nbsp;&gt;= 18\nGROUP BY&nbsp;S.rating\nHAVING 1&lt;(SELECT COUNT(*) FROM$ Sailors S2 Where&nbsp;S.rating=S2.rating)</pre>\n\n<p>The number of rows returned is</p>\n\n</div><br><br><b>Databases: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 6 \\)<br>\n\t&nbsp;</p>",
            "<p>\\( 5 \\)<br>\n\t&nbsp;</p>",
            "<p>\\( 4 \\)<br>\n\t&nbsp;</p>",
            "<p>\\( 3 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/182061/isro-dec2017-11\" target=\"_blank\">https://gateoverflow.in/182061/isro-dec2017-11</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"51170\"></a><div itemprop=\"text\"><p>The maximum length of an attribute of type text is</p>\n\n</div><br><br><b>Databases: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 127 \\)</p>",
            "<p>\\( 255 \\)</p>",
            "<p>\\( 256 \\)</p>",
            "<p>It is variable</p>"
          ],
          "correct_answer": "<p>It is variable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/51170/isro2015-19\" target=\"_blank\">https://gateoverflow.in/51170/isro2015-19</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"51189\"></a><div itemprop=\"text\">\n<p>Consider the following relational query on the above database:</p>\n\n<pre class=\"prettyprint lang-\">SELECT S.name FROM Suppliers S \nWhere S.sid NOT IN (SELECT C.sid FROM Catalog C\nWHERE C.pid NOT IN (SELECT P.pid FROM Parts P WHERE P.color &lt;&gt;'blue'))\n</pre>\n\n\n</div><br><br><b>Databases: ISRO2015</b></p>",
          "type": "numeric",
          "options": [
            "<p>Find the names of all suppliers who have supplied non-blue part.</p>",
            "<p>Find the names of all suppliers who have not supplied non-blue part.</p>",
            "<p>Find the names of all suppliers who have supplied only non-blue parts</p>",
            "<p>Find the names of all suppliers who have not supplied only non-blue part.</p>"
          ],
          "correct_answer": "X",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/51189/isro2015-22\" target=\"_blank\">https://gateoverflow.in/51189/isro2015-22</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"51196\"></a><div itemprop=\"text\"><p>Consider the following schema:</p>\n\n<p>\\( \\textsf{Emp (Empcode, Name, Sex, Salary, Deptt)} \\)</p>\n\n<p>A simple SQL query is executed as follows:</p>\n\n<pre class=\"prettyprint linenums lang-\" data-pbcklang=\"\" data-pbcktabsize=\"\">SELECT Deptt FROM Emp\nGROUP by Dept\nHaving avg (Salary) &gt; {select avg (Salary) from Emp}</pre>\n\n<p>The output will be</p>\n\n</div><br><br><b>Databases: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>Average salary of male employee is the average salary of the organization</p>",
            "<p>Average salary of male employee is less than the average salary of the organization</p>",
            "<p>Average salary of male employee is equal to the average salary of the organization</p>",
            "<p>Average salary of male employee is more than the average salary of the organization</p>"
          ],
          "correct_answer": "<p>Average salary of male employee is more than the average salary of the organization</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/51196/isro2015-23\" target=\"_blank\">https://gateoverflow.in/51196/isro2015-23</a></p>"
        }
      ]
    }
  ]
});
