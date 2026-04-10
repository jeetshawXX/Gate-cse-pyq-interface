window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 5",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider the following four relational schemas. For each schema, all non-trivial functional\ndependencies are listed. The underlined attributes are the respective primary keys.<br>\n<img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q42_13ce7592.jpg\">\n<br>\nWhich one of the relational schemas above is in 3NF but not in BCNF? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Schema I</p>",
            "<b>B.</b> <p>Schema II</p>",
            "<b>C.</b> <p>Schema III</p>",
            "<b>D.</b> <p>Schema IV</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Schema II</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204116/gate2018-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the relations r(A, B) and s(B, C), where s.B is a primary key and r.B is a foreign key referencing s.B. Consider the query<br> \\(Q:r \\Join (\\sigma _{B\\lt 5}(s))\\) <br> Let LOJ denote the natural left outer-join operation. Assume that r and s contain no null values. <br>\nWhich one of the following queries is NOT equivalent to Q? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma _{B \\lt 5}(r\\Join s)\\)</p>",
            "<b>B.</b> <p>\\(\\sigma _{B\\lt 5}(r LOJ s)\\)</p>",
            "<b>C.</b> <p>\\(r LOJ(\\sigma _{B\\lt 5}(s))\\)</p>",
            "<b>D.</b> <p>\\(\\sigma _{B\\lt 5}(r) LOJ s\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(r LOJ(\\sigma _{B\\lt 5}(s))\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204115/gate2018-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following two tables and four queries in SQL. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q12_98ab1de3.jpg\">   <br>Which one of the queries above is certain to have an output that is a superset of the outputs of the other three queries? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Query 1</p>",
            "<b>B.</b> <p>Query 2</p>",
            "<b>C.</b> <p>Query 3</p>",
            "<b>D.</b> <p>Query 4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Query 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204086/gate2018-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>In an Entity-Relationship (ER) model, suppose R is a many-to-one relationship from entity set E1 to entity set E2. Assume that E1 and E2 participate totally in R and that the cardinality of E1 is greater than the cardinality of E2. <br> Which one of the following is true about R? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every entity in E1 is associated with exactly one entity in E2.</p>",
            "<b>B.</b> <p>Some entity in E1 is associated with more than one entity in E2.</p>",
            "<b>C.</b> <p>Every entity in E2 is associated with exactly one entity in E1.</p>",
            "<b>D.</b> <p>Every entity in E2 is associated with at most one entity in E1.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Every entity in E1 is associated with exactly one entity in E2.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204085/gate2018-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
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
          "id": 7,
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
        },
        {
          "id": 8,
          "question": "<p>Which symbol denote derived attributes in ER Model? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Double ellipse</p>",
            "<b>B.</b> <p>Dashed ellipse</p>",
            "<b>C.</b> <p>Squared ellipse</p>",
            "<b>D.</b> <p>Ellipse with attribute name underlined</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Dashed ellipse</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128553/isro2017-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>ACID properties of a transactions are <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Atomicity, consistency, isolation, database</p>",
            "<b>B.</b> <p>Atomicity, consistency, isolation, durability</p>",
            "<b>C.</b> <p>Atomicity, consistency, integrity, durability</p>",
            "<b>D.</b> <p>Atomicity, consistency, integrity, database</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Atomicity, consistency, isolation, durability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128601/isro2017-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following concurrency control protocol ensures both conflict and free from deadlock? , <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Time stamp ordering</p>",
            "<b>B.</b> <p>2 Phase locking</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Time stamp ordering</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128600/isro-2017-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>What does a data dictionary will identify? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Field name</p>",
            "<b>B.</b> <p>Field format</p>",
            "<b>C.</b> <p>Field types</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128498/isro2017-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>In a \\(B^{+}\\) tree, if the search -key value is 8 bytes long, the block size is 512 bytes and the block pointer size is 2 bytes, then maximum order of the \\(B^{+}\\) tree is _______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "52",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118561/gate2017-2-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following database table named top_scorer. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q49_e09ff2a7.jpg\"> <br>      Consider the following SQL query:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q49a_79634f62.jpg\"> <br>\nThe number of tuples returned by the above SQL query is ___________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118391/gate2017-2-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Two transactions \\(T_1 \\; and \\; T_2\\) are given as: <br><br>\n\\(T_{1}:r_{1} (X)w_{1}(X)r_{1}(Y)w_{1}(Y)  \\)<br>\\(T_{2}:r_{2}(Y)w_{2}(Y)r_{2}(Z)w_{2}(Z)\\)<br><br>\nwhere \\(r_{i}(V)\\) denotes a read operation by transaction \\(T_{i}\\) on a variable V and \\(w_{i}(V)\\) denotes a\nwrite operations by transaction \\(T_{i}\\)  on a variable V. The total number of conflict serializable\nschedules that can be formed by \\(T_1 \\; and \\; T_2\\) is _____________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "54",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118640/gate2017-2-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
