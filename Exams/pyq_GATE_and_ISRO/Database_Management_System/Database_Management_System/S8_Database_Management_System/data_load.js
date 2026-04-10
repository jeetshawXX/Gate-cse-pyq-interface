window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 8",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following partial Schedule S involving two transactions T1 and T2. Only the read and the write operations have been shown. The read operation on data item P is denoted by read(P) and the write operation on data item P is denoted by write(P). <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q41_17720076.jpg\"> <br> Suppose that the transaction T1 fails immediately after time instance 9. Which one of the following statements is correct? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T2 must be aborted and then both T1 and T2 must be re-started to ensure transaction atomicity</p>",
            "<b>B.</b> <p>Schedule S is non-recoverable and cannot ensure transaction atomicity</p>",
            "<b>C.</b> <p>Only T2 must be aborted and then re-started to ensure transaction atomicity</p>",
            "<b>D.</b> <p>Schedule S is recoverable and can ensure atomicity and nothing else needs to be done</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Schedule S is non-recoverable and cannot ensure transaction atomicity</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8482/gate2015-3-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider a B+ tree in which the search key is 12 bytes long, block size is 1024 bytes, record pointer is 10 bytes long and block pointer is 8 bytes long. The maximum number of keys that can be accommodated in each non-leaf node of the tree is ____________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8555/gate2015-3-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
          "question": "<p>Consider the relation X(P,Q,R,S,T,U) with the following set of functional  dependencies <br> F= {{P,R}\\(\\rightarrow\\){S,T}, {P,S,U}\\(\\rightarrow\\){Q,R} } <br>\nWhich of the following is the trivial functional dependency in \\(F^{+}\\), where \\(F^{+}\\) is closure of F ? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{P,R}\\(\\rightarrow\\){S,T}</p>",
            "<b>B.</b> <p>{P,R}\\(\\rightarrow\\){R,T}</p>",
            "<b>C.</b> <p>{P,S}\\(\\rightarrow\\){S}</p>",
            "<b>D.</b> <p>{P,S,U}\\(\\rightarrow\\){Q}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{P,S}\\(\\rightarrow\\){S}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8420/gate2015-3-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider two relations R1(A,B) with the tuples (1,5), (3,7) and R2(A,C) = (1,7), (4,9). Assume that R(A,B,C) is the full natural outer join of R1 and R2. Consider the following tuples of the form (A,B,C): a = (1,5,null), b = (1,null,7), c = (3, null, 9), d = (4,7,null), e = (1,5,7), f = (3,7,null), g = (4,null,9). Which one of the following statements is correct? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R contains a, b, e, f, g but not c, d.</p>",
            "<b>B.</b> <p>R contains all of a, b, c, d, e, f, g.</p>",
            "<b>C.</b> <p>R contains e, f, g but not a, b.</p>",
            "<b>D.</b> <p>R contains e but not f, g.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>R contains e, f, g but not a, b.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8151/gate2015-2-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a simple checkpointing protocol and the following set of operations in the log. <br> (start, T4); (write, T4, y, 2, 3); (start, T1); (commit, T4); (write, T1, z, 5, 7); <br>(checkpoint);<br> (start, T2); (write, T2, x, 1, 9); (commit, T2); (start, T3), (write, T3, z, 7, 2); <br> If a crash happens now and the system tries to recover using both undo and redo operations, what are the contents of the undo list and the redo list? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Undo: T3, T1; Redo: T2</p>",
            "<b>B.</b> <p>Undo: T3, T1; Redo: T2, T4</p>",
            "<b>C.</b> <p>Undo: none; Redo: T2, T4, T3, T1</p>",
            "<b>D.</b> <p>Undo: T3, T1, T4; Redo: T2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Undo: T3, T1; Redo: T2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8246/gate2015-2-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following transaction involving two bank accounts x and y. <br><br> read(x);    x:=x-50;  write(x);    read(y);    y:=y+50; write(y) <br><br> The constraint that the sum of the accounts x and y should remain constant is that of <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Atomicity</p>",
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>",
            "<b>D.</b> <p>Durability</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Consistency</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8047/gate2015-2-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following relations: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51_2717e41f.jpg\"><br>  Consider the following SQL query. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51a_e0f73a11.jpg\"><br>The number of rows that will be returned by the SQL query is _____________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8225/gate2015-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider an Entity-Relationship (ER) model in which entity sets E1 and E2 are connected by an m : n relationship R12. E1 and E3 are connected by a 1 : n (1 on the side of E1 and n on the side of E3) relationship R13. <br><br>E1 has two single-valued attributes a11 and a12 of which a11 is the key attribute. E2 has two single-valued attributes a21 and a22 of which a21 is the key attribute. E3 has two single-valued attributes a31 and a32 of which a31 is the key attribute. The relationships do not have any attributes. <br><br> If a relational model is derived from the above ER model, then the minimum number of relations that would be generated if all the relations are in 3NF is _______. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8309/gate2015-1-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A file is organized so that the ordering of data records is the same as or close to the ordering of data entries in some index. Then that index is called <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dense</p>",
            "<b>B.</b> <p>Sparse</p>",
            "<b>C.</b> <p>Clustered</p>",
            "<b>D.</b> <p>Unclustered</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Clustered</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8222/gate2015-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
