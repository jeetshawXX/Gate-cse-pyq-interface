window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 17",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
