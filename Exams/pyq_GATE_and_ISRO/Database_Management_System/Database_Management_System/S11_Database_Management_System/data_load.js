window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 11",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following transactions with data items P and Q initialized to zero:<pre><code>\nT1 :read (P);\n       read (Q);\n       if P = 0 then Q := Q + 1 ; \n       write (Q).\nT2 : read (Q);\n        read (P);\n        if Q = 0 then P := P + 1 ;\n        write (P). </code></pre>\nAny non-serial interleaving of T1 and T2 for concurrent execution leads to <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a serializable schedule</p>",
            "<b>B.</b> <p>a schedule that is not conflict serializable</p>",
            "<b>C.</b> <p>a conflict serializable schedule</p>",
            "<b>D.</b> <p>a schedule for which a precedence graph cannot be drawn</p>"
          ],
          "correct_answer": "<b>B.</b> <p>a schedule that is not conflict serializable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1612/gate2012-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
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
        },
        {
          "id": 3,
          "question": "<p>Given the basic ER and relational models, which of the following is INCORRECT? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An attribute of an entity can have more than one value</p>",
            "<b>B.</b> <p>An attribute of an entity can be composite</p>",
            "<b>C.</b> <p>In a row of a relational table, an attribute can have more than one value</p>",
            "<b>D.</b> <p>In a row of a relational table, an attribute can have exactly one value or a NULL value</p>"
          ],
          "correct_answer": "<b>C.</b> <p>In a row of a relational table, an attribute can have more than one value</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/46/gate2012-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which of the following is TRUE? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every relation in 3NF is also in BCNF</p>",
            "<b>B.</b> <p>A relation R is in 3NF if every non-prime attribute of R is fully functionally dependent on every key of R</p>",
            "<b>C.</b> <p>Every relation in BCNF is also in 3NF</p>",
            "<b>D.</b> <p>No relation can be in both BCNF and 3NF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Every relation in BCNF is also in 3NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/34/gate2012-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>In functional dependency Armstrong inference rules refers to <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Reflexive, Augmentation and Decomposition</p>",
            "<b>B.</b> <p>Transitive, Augmentation and Reflexive</p>",
            "<b>C.</b> <p>Augmentation, Transitive, Reflexive and Decomposition</p>",
            "<b>D.</b> <p>Reflexive, Transitive and Decomposition</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Transitive, Augmentation and Reflexive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50639/isro2011-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which normal form is based on the concept of 'full functional dependency' is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First Normal Form</p>",
            "<b>B.</b> <p>Second  Normal Form</p>",
            "<b>C.</b> <p>Third Normal Form</p>",
            "<b>D.</b> <p>Fourth Normal Form</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Second  Normal Form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18117/isro2011-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which type of DBMS provides support for maintaining several versions of the same entity? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Relational Database Management System</p>",
            "<b>B.</b> <p>Hierarchical</p>",
            "<b>C.</b> <p>Object Oriented Database Management System</p>",
            "<b>D.</b> <p>Network</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Object Oriented Database Management System</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50618/isro2011-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>What is the equivalent serial schedule for the following transactions? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q15_d25b3ef5.jpg\"><br> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T_1 - T_2 - T_3\\)</p>",
            "<b>B.</b> <p>\\(T_3 - T_1 - T_2\\)</p>",
            "<b>C.</b> <p>\\(T_2 - T_1 - T_3\\)</p>",
            "<b>D.</b> <p>\\(T_1 - T_3 - T_2\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T_3 - T_1 - T_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52269/isro2011-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Database table by name Loan_Records is given below.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q36_8949872d.jpg\"> <br>\nWhat is the output of the following SQL query?<pre><code> \nSELECT count(*)\nFROM(\n(SELECT Borrower, Bank_Manager FROM Loan_Records) AS S\nNATURAL JOIN\n(SELECT Bank_Manager, Loan_Amount FROM Loan_Records) AS T); </code></pre> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>C.</b> <p>5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2148/gate2011-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a relational table r with sufficient number of records, having attributes\n\\(A_{1}, A_{2},..., A_{n}\\) and let \\(1\\leq p\\leq n\\)\n. Two queries Q1 and Q2 are given below. <br><br>\\(Q1:\\pi _{A_{1}....A_{n}}(\\sigma _{A_{p}=c}(r)) \\) where c is a constant <br> \\(Q2:\\pi _{A1....A_{n}}(\\sigma _{c_{1}\\leq A_{p}\\leq c_{2}}(r)) \\) where \\(c_{1}\\) and \\(c_{2}\\) are constants <br><br> The database can be configured to do ordered indexing on \\(A_{p}\\) or hashing on  \\(A_{p}\\).<br><br>\nWhich of the following statements is TRUE? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Ordered indexing will always outperform hashing for both queries</p>",
            "<b>B.</b> <p>Hashing will always outperform ordered indexing for both queries</p>",
            "<b>C.</b> <p>Hashing will outperform ordered indexing on Q1, but not on Q2</p>",
            "<b>D.</b> <p>Hashing will outperform ordered indexing on Q2, but not on Q1.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Hashing will outperform ordered indexing on Q1, but not on Q2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2141/gate2011-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a database table T containing two columns X and Y each of type integer.\nAfter the creation of the table, one record (X=1,Y=1) is inserted in the table. <br><br>\nLet MX and MY denote the respective maximum values of X and Y among all\nrecords in the table at any point in time. Using MX and MY, new records are\ninserted in the table 128 times with X and Y values being MX+1, 2*MY+1\nrespectively. It may be noted that each time after the insertion, values of MX and\nMY change. <br><br>\nWhat will be the output of the following SQL query after the steps mentioned\nabove are carried out? <br><br>\nSELECT Y FROM T WHERE X=7; <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>127</p>",
            "<b>B.</b> <p>255</p>",
            "<b>C.</b> <p>129</p>",
            "<b>D.</b> <p>257</p>"
          ],
          "correct_answer": "<b>A.</b> <p>127</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2134/gate2011-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a relational table with a single record for each registered student with\nthe following attributes. <br><br>\n1. Registration_Number: Unique registration number for each registered student <br>\n2. UID: Unique Identity number, unique at the national level for each citizen <br>\n3. BankAccount_Number: Unique account number at the bank. A student can\nhave multiple accounts or joint accounts. This attributes stores the primary\naccount number <br>\n4. Name: Name of the Student <br>\n5. Hostel_Room: Room number of the hostel <br><br>\nWhich of the following options is INCORRECT? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>BankAccount_Number is a candidate key</p>",
            "<b>B.</b> <p>Registration_Number can be a primary key</p>",
            "<b>C.</b> <p>UID is a candidate key if all students are from the same country</p>",
            "<b>D.</b> <p>If \\(S\\) is a superkey such that \\(\\text{S}\\cap \\text{UID}\\) is NULL then \\(\\text{S}\\cup \\text{UID}\\) is also a superkey</p>"
          ],
          "correct_answer": "<b>A.</b> <p>BankAccount_Number is a candidate key</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2114/gate2011-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The following functional dependencies hold for relations R(A, B, C) and S(B, D, E) <br> <br>\nB \\(\\rightarrow\\)A, <br>\nA \\(\\rightarrow\\)C<br> <br>\nThe relation R contains 200tuples and the relation S contains 100tuples. What is\nthe maximum number of tuples possible in the natural join R\\(\\Join\\) S? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100</p>",
            "<b>B.</b> <p>200</p>",
            "<b>C.</b> <p>300</p>",
            "<b>D.</b> <p>2000</p>"
          ],
          "correct_answer": "<b>A.</b> <p>100</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2344/gate2010-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following schedule for transactions T1, T2 and T3:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q42_ec75b74c.jpg\"><br>\nWhich one of the schedules below is the correct serialization of the above? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T1 \\(\\rightarrow\\) T3 \\(\\rightarrow\\) T2</p>",
            "<b>B.</b> <p>T2 \\(\\rightarrow\\) T1 \\(\\rightarrow\\) T3</p>",
            "<b>C.</b> <p>T2 \\(\\rightarrow\\) T3 \\(\\rightarrow\\) T1</p>",
            "<b>D.</b> <p>T3 \\(\\rightarrow\\) T1 \\(\\rightarrow\\) T2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>T1 \\(\\rightarrow\\) T3 \\(\\rightarrow\\) T2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2343/gate2010-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following concurrency control protocols ensure both conflict\nserializability and freedom from deadlock?<br>\nI. 2-phase locking <br>\nII. Time-stamp ordering <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2196/gate2010-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
