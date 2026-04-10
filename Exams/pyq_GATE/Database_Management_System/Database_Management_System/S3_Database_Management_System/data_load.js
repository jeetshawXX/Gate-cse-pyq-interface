window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>A data file consisting of 1,50,000 student-records is stored on a hard disk with block size of 4096 bytes. The data file is sorted on the primary key RollNo. The size of a record pointer for this disk is 7 bytes. Each student-record has a candidate key attribute called ANum of size 12 bytes. Suppose an index file with records consisting of two fields, ANum value and the record pointer the corresponding student record, is built and stored on the same disk. Assume that the records of data file and index file are not split across disk blocks. The number of blocks in the index file is ______ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "698",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357519/gate-cse-2021-set-2-question-21#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following statements S1 and S2 about the relational data model:<br>\n<br>\nS1: A relation scheme can have at most one foreign key.<br>\nS2: A foreign key in a relation scheme R cannot be used to refer to tuples of R.<br><br>\nWhich one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are true</p>",
            "<b>B.</b> <p>S1 is true and S2 is false</p>",
            "<b>C.</b> <p>S1 is false and S2 is true</p>",
            "<b>D.</b> <p>Both S1 and S2 are false</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both S1 and S2 are false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357534/gate-cse-2021-set-2-question-6#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the relation \\(R(P,Q,S,T,X,Y,Z,W)\\) with the following functional dependencies.\n<br><br>\\(PQ\\rightarrow X;\\quad P\\rightarrow YX;\\quad Q\\rightarrow Y; \\quad Y\\rightarrow ZW\\)\n<br><br>\nConsider the decomposition of the relation R into the constituent relations according to the following two decomposition schemes.\n<br><br>\n\\(D1:\\quad R=[(P,QS,T);\\;(P,T,X);\\;(Q,Y);\\;(Y,Z,W)]\\)<br>\n\\(D2:\\quad R=[(P,Q,S);\\;(T,X);\\;(Q,Y);\\;(Y,Z,W)]\\)<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>D1 is a lossless decomposition, but D2 is a lossy decomposition.</p>",
            "<b>B.</b> <p>D1 is a lossy decomposition, but D2 is a lossless decomposition.</p>",
            "<b>C.</b> <p>Both D1 and D2 are lossless decompositions.</p>",
            "<b>D.</b> <p>Both D1 and D2 are lossy decompositions.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>D1 is a lossless decomposition, but D2 is a lossy decomposition.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357418/gate-cse-2021-set-1-question-33#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Let \\(r_i(z)\\) and \\(w_i(z)\\) denote read and write operations respectively on a data item \\(z\\) by a transaction \\(T_i\\). Consider the following two schedules.\n<br><br>\n\\(S1: r_1(x)r_1(y)r_2(x)r_2(y)w_2(y)w_1(x)\\)\n<br>\n\\(S2: r_1(x)r_2(x)r_2(y)w_2(y)r_1(y)w_1(x)\\)\n<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is conflict serializable, and S2 is not conflict serializable</p>",
            "<b>B.</b> <p>S1 is not conflict serializable, and S2 is conflict serializable</p>",
            "<b>C.</b> <p>Both S1 and S2 are conflict serializable</p>",
            "<b>D.</b> <p>Niether S1 nor S2 is conflict serializable</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S1 is not conflict serializable, and S2 is conflict serializable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357419/gate-cse-2021-set-1-question-32#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The following relation records the age of 500 employees of a company, where empNo ( indicating the employee number) is the key:\n<br><br>\n\\(empAge(\\underline{empNo},age)\\)<br><br>\nConsider the following relational algebra expression:\n<br><br>\n\\(\\Pi_{empNo}(empAge \\Join_{(age &gt; age1)} \\rho_{empNo1,age1}(empAge))\\)<br><br>\nWhat does the above expression generate? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Employee numbers of only those employees whose age is the maximum</p>",
            "<b>B.</b> <p>Employee numbers of only those employees whose age is more than the age of exactly one other employee</p>",
            "<b>C.</b> <p>Employee numbers of all employees whose age is not the minimum</p>",
            "<b>D.</b> <p>Employee numbers of all employees whose age is the minimum</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Employee numbers of all employees whose age is not the minimum</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357424/gate-cse-2021-set-1-question-27#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A relation \\(r(A,B)\\) in a relational database has 1200 tuples. The attribute \\(A\\) has integer values ranging from 6 to 20, and the attribute \\(B\\) has integer values ranging from 1 to 20. Assume that the attributes \\(A\\) and \\(B\\) are independently distributed.\n<br><br>\nThe estimated number of tuples in the output of \\(\\sigma _{(A &gt; 10)\\vee(B=18)}(r)\\) is ____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "205",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357428/gate-cse-2021-set-1-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider a linear list based directory implementation in a file system. Each directory is a list of nodes, where each node contains the file name along with the file metadata, such as the list of pointers to the data blocks. Consider a given directory foo.<br><br>Which of the following operations will necessarily require a full scan of foo for successful completion? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Creation of a new file in foo</p>",
            "<b>B.</b> <p>Deletion of an existing file from foo</p>",
            "<b>C.</b> <p>Renaming of an existing file in foo</p>",
            "<b>D.</b> <p>Opening of an existing file in foo</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Creation of a new file in foo</p>",
            "<b>C.</b> <p>Renaming of an existing file in foo</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357437/gate-cse-2021-set-1-question-15#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Suppose a database system crashes again while recovering from a previous crash. Assume checkpointing is not done by the database either during the transactions or during recovery.<br><br>Which of the following statements is/are correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The same undo and redo list will be used while recovering again</p>",
            "<b>B.</b> <p>The system cannot recover any further</p>",
            "<b>C.</b> <p>All the transactions that are already undone and redone will not be recovered again</p>",
            "<b>D.</b> <p>The database will become inconsistent</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>The same undo and redo list will be used while recovering again</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357439/gate-cse-2021-set-1-question-13#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider a database implemented using B+ tree for file indexing and installed on a disk drive with block size of 4 KB. The size of search key is 12 bytes and the size of tree/disk pointer is 8 bytes. Assume that the database has one million records. Also assume that no node of the B+ tree and no records are present initially in main memory. Consider that each record fits into one disk block. The minimum number of disk accesses required to retrieve any record in the database is _______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333177/gate2020-cs-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a schedule of transactions T1 and T2: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q37_7982b097.jpg\"><br>Here, RX stands for \"Read(X)\" and WX stands for \"Write(X)\". Which one of the following schedules is conflict equivalent to the above schedule?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q37a_8f7271d7.jpg\"> <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333194/gate2020-cs-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a prime attribute.</p>",
            "<b>B.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.</p>",
            "<b>C.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.</p>",
            "<b>D.</b> <p>A cell in R holds a set instead of an atomic value.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a prime attribute.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333195/gate2020-cs-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which one of the following is used to represent the supporting many-one relationships of a weak entity set in an entity-relationship diagram? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Diamonds with double/bold border</p>",
            "<b>B.</b> <p>Rectangles with double/bold border</p>",
            "<b>C.</b> <p>Ovals with double/bold border</p>",
            "<b>D.</b> <p>Ovals that contain underlined identifiers</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Diamonds with double/bold border</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333217/gate2020-cs-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider a relational database containing the following schemas. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q13_00d62b79.jpg\"><br>The primary key of each table is indicated by underlining the constituent fields.<pre><code> SELECT s.sno, s.sname\n    FROM Suppliers s, Catalogue c\n    WHERE s.sno=c.sno AND\n        cost &gt; (SELECT AVG (cost)\n                FROM Catalogue\n                WHERE pno = 'P4'\n                GROUP BY pno) ;</code></pre><br>The number of rows returned by the above SQL query is <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>0</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333218/gate2020-cs-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following relation P(X, Y, Z), Q(X, Y, T) and R(Y, V):\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q55_cdc2944f.jpg\"><br>How many tuples will be returned by the following relational algebra query?  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q55a_38366a3a.jpg\"><br>Answer:______ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302793/gate2019-cs-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A relational database contains two tables Student and Performance as shown below: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51_c175b8ed.jpg\"><br>The primary key of the Student table is Roll_no. For the Performance table, the columns Roll_no. and Subject_code together from the primary key. Consider the SQL query given below:<pre><code>SELECT S.Student_name, sum(P.Marks)\nFROM Student S, Performance P\nWHERE  P.Marks  &gt;  84\nGROUP BY S.Student_name;</code></pre>The number of rows returned by the above SQL query is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302797/gate2019-cs-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
