window.__examLoadCallback({
  "title": "SQL - SQL - Slot 4",
  "duration": 30,
  "sections": [
    {
      "name": "SQL",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 6,
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
          "id": 7,
          "question": "<p>Consider the following SQL query<pre><code>\nselect distinct al, a2,........., an\nfrom r1, r2,........, rm\nwhere P </code></pre>\nFor an arbitrary predicate P,this query is equivalent to which of the following\nrelational algebra expressions? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\SQL\\q30_9bb6a32e.jpg\"> <br><br><strong>(GATE CSE 2003)</strong></p>",
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
        }
      ]
    }
  ]
});
