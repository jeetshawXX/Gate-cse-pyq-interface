window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 12",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>The following table has two attributes A and C where A is the primary key and C is the foreign key referencing A with on-delete cascade. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q76_054b99cf.jpg\"> <br>The set of all tuples that must be additionally deleted to preserve referential integrity when the tuple (2,4) is deleted is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(3,4) and (6,4)</p>",
            "<b>B.</b> <p>(5,2) and (7,2)</p>",
            "<b>C.</b> <p>(5,2), (7,2) and (9,5)</p>",
            "<b>D.</b> <p>(3,4), (4,3) and (6,4)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(5,2), (7,2) and (9,5)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1399/gate2005-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Let E1 and E2 be two entities in an E/R diagram with simple single-valued attributes. R1 and R2 are two relationships between E1 and E2, where R1 is one-to-many and R2 is many-to-many. R1 and R2 do not have any attributes of their own. What is the minimum number of tables required to represent this situation in the relational model? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1398/gate2005-75#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let r be a relation instance with schema R = (A, B, C, D). We define \\(r_{1}=\\Pi _{A,B,C}(R)\\) and \\(r_{2}=\\Pi _{A,D}(R)\\). Let \\(s=r_1*r_2\\) where * denotes natural join. Given that the decomposition of r into \\(r_1\\) and \\(r_2\\) is lossy, which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S\\subset r\\)</p>",
            "<b>B.</b> <p>\\(r\\cup S=r\\)</p>",
            "<b>C.</b> <p>\\(r\\subset S\\)</p>",
            "<b>D.</b> <p>\\(r*S=S\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(r\\subset S\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1366/gate2005-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which one of the following statements about normal forms is FALSE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>BCNF is stricter than 3NF</p>",
            "<b>B.</b> <p>Lossless, dependency-preserving decomposition into 3NF is always possible</p>",
            "<b>C.</b> <p>Lossless, dependency-preserving decomposition into BCNF is always possible</p>",
            "<b>D.</b> <p>Any relation with two attributes is in BCNF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Lossless, dependency-preserving decomposition into BCNF is always possible</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1365/gate2005-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which one of the following is a key factor for preferring \\(B^{+}\\) - trees to binary search trees for indexing database relations? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Database relations have a large number of records</p>",
            "<b>B.</b> <p>Database relations are sorted on the primary key</p>",
            "<b>C.</b> <p>\\(B^{+}\\) - trees require less memory than binary search trees</p>",
            "<b>D.</b> <p>Data transfer form disks is in blocks</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Data transfer form disks is in blocks</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1364/gate2005-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a table T in a relational database with a key field K. A B-tree of order p is used as an access structure on K, where p denotes the maximum number of tree pointers in a B-tree index node. Assume that K is 10 bytes long; disk block size is 512 bytes; each data pointer \\(P_D\\) is 8 bytes long and each block pointer \\(P_B\\) is 5 bytes long. In order for each B-tree node to fit in a single disk block, the maximum value of p is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20</p>",
            "<b>B.</b> <p>22</p>",
            "<b>C.</b> <p>23</p>",
            "<b>D.</b> <p>32</p>"
          ],
          "correct_answer": "<b>C.</b> <p>23</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3723/gate2004-it-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider the following schedule S of transactions T1 and T2:<br>\\({\\begin{array}{l|l} \\textbf{T1}&amp; \\textbf{T2} \\\\\\hline \\text{Read(A)} \\\\ \\text{A = A ? 10}\\\\ &amp; \\text{Read(A) }\\\\ &amp; \\text{Temp = 0.2*A} \\\\ &amp; \\text{Write(A)} \\\\ &amp; \\text{Read(B)} \\\\ \\text{Write(A)}\\\\ \\text{Read(B)}\\\\ \\text{B = B + 10}\\\\ \\text{Write(B)} \\\\ &amp; \\text{B = B + Temp} \\\\ &amp; \\text{Write(B)}\\\\ \\end{array}}\\)<br>Which of the following is TRUE about the schedule S ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S  is serializable only as T1,T2</p>",
            "<b>B.</b> <p>S is serializable only as T2,T1</p>",
            "<b>C.</b> <p>S is serializable both as T1,T2 and T2,T1</p>",
            "<b>D.</b> <p>S is not serializable either as T1,T2 or as T2,T1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>S is not serializable either as T1,T2 or as T2,T1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3721/gate2004-it-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>A relation Empdtl is defined with attributes empcode (unique), name, street, city, state and pincode. For any pincode, there is only one city and state. Also, for any given street, city and state, there is just one pincode. In normalization terms, Empdtl is a relation in <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1NF only</p>",
            "<b>B.</b> <p>2NF and hence also in 1NF</p>",
            "<b>C.</b> <p>3NF and hence also in 2NF and 1NF</p>",
            "<b>D.</b> <p>BCNF and hence also in 3NF, 2NF and 1NF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2NF and hence also in 1NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3719/gate2004-it-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
