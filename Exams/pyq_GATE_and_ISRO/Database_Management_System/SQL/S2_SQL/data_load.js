window.__examLoadCallback({
  "title": "SQL - SQL - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "SQL",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider the following database table named water_schemes : <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q52_3b8c0d21.jpg\"><br> The number of tuples returned by the following SQL query is __________.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q52a_85159664.jpg\"> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39604/gate2016-2-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider the following relations: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q51_2717e41f.jpg\"><br>  Consider the following SQL query. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q51a_e0f73a11.jpg\"><br>The number of rows that will be returned by the SQL query is _____________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8225/gate2015-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
