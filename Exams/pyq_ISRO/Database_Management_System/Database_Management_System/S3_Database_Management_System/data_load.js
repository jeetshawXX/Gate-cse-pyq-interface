window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>If \\(D_1,D_2,...D_n\\) are domains in a relational model, then the relation is a table, which is a subset of <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(D_{1} \\oplus D_{2} \\oplus \\cdots \\oplus D_{n}\\)</p>",
            "<b>B.</b> <p>\\(D_{1} \\times D_{2} \\times \\cdots \\times D_{n}\\)</p>",
            "<b>C.</b> <p>\\(D_{1} \\cup D_{2} \\cup \\cdots \\cup D_{n}\\)</p>",
            "<b>D.</b> <p>\\(D_{1} \\cap D_{2} \\cap \\cdots \\cap D_{n}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(D_{1} \\times D_{2} \\times \\cdots \\times D_{n}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/11982/isro2015-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Let R=(A,B,C,D,E,F) be a relation scheme with the following dependencies \\(C \\rightarrow F\\), \\(E \\rightarrow A\\), \\(EC \\rightarrow D\\), \\(A \\rightarrow B\\). Which of the following is a key of R? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>CD</p>",
            "<b>B.</b> <p>EC</p>",
            "<b>C.</b> <p>AE</p>",
            "<b>D.</b> <p>AC</p>"
          ],
          "correct_answer": "<b>B.</b> <p>EC</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51174/isro2015-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The maximum length of an attribute of type text is <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>127</p>",
            "<b>B.</b> <p>255</p>",
            "<b>C.</b> <p>256</p>",
            "<b>D.</b> <p>It is variable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It is variable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51170/isro2015-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Given a block can hold either 3 records or 10 key pointers. A database contains n records, then how many blocks do we need to hold the data file and the dense index <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13n/30</p>",
            "<b>B.</b> <p>n/3</p>",
            "<b>C.</b> <p>n/10</p>",
            "<b>D.</b> <p>n/30</p>"
          ],
          "correct_answer": "<b>A.</b> <p>13n/30</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19400/isro2015-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following log sequence of two transactions on a bank account, with initial balance 12000, that transfer 2000 to a mortgage payment and then apply a 5% interest.<br>1.T1 start <br>2.T1 B old =1200 new =10000<br>3.T1 M old =0 new =2000<br>4.T1 commit<br>5.T2 start<br>6.T2 B old =10000 new =10500<br>7.T2 commit<br>Suppose the database system crashes just before log record 7 is written. When  the system is restarted, which one statement is true of the recovery procedure? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>We must redo log record 6 to set B to 10500</p>",
            "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2  and 3</p>",
            "<b>C.</b> <p>We need not redo log records 2 and 3 because transaction T1 has committed</p>",
            "<b>D.</b> <p>We can apply redo and undo operations in arbitrary order because they are idempotent</p>"
          ],
          "correct_answer": "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2  and 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/981/gate2006-20-isro2015-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following Relationship Entity Diagram(ERP)<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q16_77f487d5.jpg\"><br>Which of the following possible relations will not hold if the above ERD is mapped into a relation model? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Person (NID, Name)</p>",
            "<b>B.</b> <p>Qualification (NID, ExamID, QualifiedDate)</p>",
            "<b>C.</b> <p>Exam (ExamID, NID, ExamName)</p>",
            "<b>D.</b> <p>Exam (ExamID, ExamName)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Exam (ExamID, NID, ExamName)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51167/isro2015-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider a system where each file is associated with a 16 bit number. For each file, each user should have the read and write capability. How much memory is needed to store each user's access data? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16 KB</p>",
            "<b>B.</b> <p>32 KB</p>",
            "<b>C.</b> <p>64 KB</p>",
            "<b>D.</b> <p>128 KB</p>"
          ],
          "correct_answer": "<b>A.</b> <p>16 KB</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/15029/isro2014-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following table<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q63_241939ef.jpg\"><br>The table is in which normal form? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First Normal Form</p>",
            "<b>B.</b> <p>Second Normal Form</p>",
            "<b>C.</b> <p>Third Normal Form but not BCNF</p>",
            "<b>D.</b> <p>Third Normal Form and BCNF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Third Normal Form but not BCNF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55019/isro2014-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let x, y, z, a, b, c be the attributes of an entity set E. If {x}, {x,y}, {a,b}, {a,b,c}, {x,y,z} are superkeys then which of the following are the candidate keys? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{x,y}  and {a,b}</p>",
            "<b>B.</b> <p>{x} and {a,b}</p>",
            "<b>C.</b> <p>{x,y,z} and {a,b,c}</p>",
            "<b>D.</b> <p>{z} and {c}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{x} and {a,b}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17425/isro2014-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Every time the attribute A appears, it is matched with the same value of attribute B but not the same value of attribute C. Which of the following is true? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A -&gt; (B,C)</p>",
            "<b>B.</b> <p>A -&gt; B, A -&gt;&gt; C</p>",
            "<b>C.</b> <p>A -&gt; B, C -&gt;&gt; A</p>",
            "<b>D.</b> <p>A -&gt;&gt; B, B -&gt; C</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A -&gt; B, A -&gt;&gt; C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/16128/isro2014-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the schema \\(R(A,B,C,D)\\) and the functional dependencies \\(A \\rightarrow B\\) and \\(C \\rightarrow D\\).  If the decomposition is made as \\(R_{1}(A, B)\\) and \\(R_{2}(C, D)\\), then which of the following is TRUE? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Preserves dependency but cannot perform lossless join</p>",
            "<b>B.</b> <p>Preserves dependency and performs lossless join</p>",
            "<b>C.</b> <p>Does not perform dependency and cannot perform lossless join</p>",
            "<b>D.</b> <p>Does not preserve dependency but perform lossless join</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Preserves dependency but cannot perform lossless join</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17319/isro2014-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>An aggregation association is drawn using which symbol? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A line which loops back on to the same table</p>",
            "<b>B.</b> <p>A small open diamond at the end of a line connecting two tables</p>",
            "<b>C.</b> <p>A small closed diamond at the end of a line connecting two tables</p>",
            "<b>D.</b> <p>A small closed triangle at the end of a line connecting two tables</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A small open diamond at the end of a line connecting two tables</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/54244/isro2014-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Embedded pointer provides <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A secondary access path</p>",
            "<b>B.</b> <p>A physical record key</p>",
            "<b>C.</b> <p>An inverted index</p>",
            "<b>D.</b> <p>A primary key</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A secondary access path</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44407/isro-2013-61-isro2008-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The physical location of a record determined by a formula that transforms a file key into a record location is <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hashed file</p>",
            "<b>B.</b> <p>B-Tree file</p>",
            "<b>C.</b> <p>Indexed file</p>",
            "<b>D.</b> <p>Sequential file</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Hashed file</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43938/isro-2013-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Calculate the order of leaf (\\(P_{leaf}\\)) and non leaf (P) nodes of a \\(B^{+}\\) tree based on the information given below.\n<br><br>\nSearch key field = 12 field\n<br>\nRecord pointer = 10 bytes\n<br>\nBlock pointer = 8 bytes\n<br>\nBlock size = 1KB <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(P_{leaf}\\) = 51 &amp; p = 46</p>",
            "<b>B.</b> <p>\\(P_{leaf}\\) = 47 &amp; p = 52</p>",
            "<b>C.</b> <p>\\(P_{leaf}\\) = 46 &amp; p = 51</p>",
            "<b>D.</b> <p>\\(P_{leaf}\\) = 52 &amp; p = 47</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(P_{leaf}\\) = 46 &amp; p = 51</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43933/isro-2013-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
