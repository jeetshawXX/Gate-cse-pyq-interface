window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
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
          "question": "<p>If every non-key attribute functionally dependent on the primary key, then the relation will be in <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First normal form</p>",
            "<b>B.</b> <p>Second normal form</p>",
            "<b>C.</b> <p>Third normal form</p>",
            "<b>D.</b> <p>Fourth Normal form</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331394/isro2020-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
          "question": "<p>Let us assume that transaction T1 has arrived before transaction T2. Consider the schedule s=r1(A);r2(B):w2(A);w1(B)<br>Which of the following is true? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Allowed under basic timestamp protocol.</p>",
            "<b>B.</b> <p>Not allowed under basic timestamp protocols because T1 is rolled back.</p>",
            "<b>C.</b> <p>Not allowed under basic timestamp protocols because T2 is rolled back.</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Not allowed under basic timestamp protocols because T1 is rolled back.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213533/isro2018-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The set of attributes X will be fully functionally dependent on the set of attributes Y if the following conditions are satisfied. <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X is functionally dependent on Y</p>",
            "<b>B.</b> <p>X is not functionally dependent on any subset of Y</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both (A) and (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213534/isro2018-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Immunity of the external schemas (or application programs) to changes in the conceptual scheme is referred to as: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Physical Data Independence</p>",
            "<b>B.</b> <p>Logical Data Independence</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Logical Data Independence</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213535/isro2018-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>In E-R model, Y is the dominant entity and X is subordinate entity <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>If X is deleted, then Y is also deleted</p>",
            "<b>B.</b> <p>If Y is deleted, then X is also deleted</p>",
            "<b>C.</b> <p>If Y is deleted, then X is not deleted</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>If Y is deleted, then X is also deleted</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213536/isro2018-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which of the following is dense index? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Primary index</p>",
            "<b>B.</b> <p>Clustered index</p>",
            "<b>C.</b> <p>Secondary index</p>",
            "<b>D.</b> <p>Secondary non-key index</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Secondary index</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213537/isro2018-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>in a file which contains 1 million records and the order of the tree is 100, then what is the maximum number of nodes to be accessed if B+ tree index is used? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213539/isro2018-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
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
          "id": 11,
          "question": "<p>For a database relation R(a,b,c,d) where the domain of a,b,c and d include only atomic value, only the following functions dependencies and those that can be inferred from them hold<br>a\\(\\rightarrow\\)c<br>b\\(\\rightarrow\\)d<br>The relation is in: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First normal form but not in second normal form</p>",
            "<b>B.</b> <p>Second normal form but not in third normal form</p>",
            "<b>C.</b> <p>Third normal form</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>First normal form but not in second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213547/isro2018-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
          "question": "<p>Considering the following table in a relational database :<br>\\(\\begin{array}{|c|c|c|c|} \\hline \\text { Last Name } &amp; \\text { Rank } &amp; \\text { Room } &amp; \\text { Shift } \\\\ \\hline \\text { Smith } &amp; \\text { Manager } &amp; 234 &amp; \\text { Morning } \\\\ \\hline \\text { Jones } &amp; \\text { Custodian } &amp; 33 &amp; \\text { Afternoon } \\\\ \\hline \\text { Smith } &amp; \\text { Custodian } &amp; 33 &amp; \\text { Evening } \\\\ \\hline \\text { Doe } &amp; \\text { Clerical } &amp; 222 &amp; \\text { Morning } \\\\ \\hline \\end{array}\\)<br>According to the data shown in the table, which of the following could be a candidate key of the table? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{Last Name}</p>",
            "<b>B.</b> <p>{Room}</p>",
            "<b>C.</b> <p>{Shift}</p>",
            "<b>D.</b> <p>{Room, Shift}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{Room, Shift}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213583/isro2018-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3768/gate2005-it-23-isro2017-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of these is characteristic of RAID 5? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dedicated parity</p>",
            "<b>B.</b> <p>Double parity</p>",
            "<b>C.</b> <p>Hamming code parity</p>",
            "<b>D.</b> <p>Distributed parity</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Distributed parity</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128687/isro2017-45\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
