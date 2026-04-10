window.__examLoadCallback({
  "title": "Transactions - Transactions - Slot 3",
  "duration": 53,
  "sections": [
    {
      "name": "Transactions",
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
          "question": "<p>What is the equivalent serial schedule for the following transactions? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q15_d25b3ef5.jpg\"><br> <br><br><strong>(ISRO CSE 2011)</strong></p>",
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
          "id": 3,
          "question": "<p>Consider the following schedule for transactions T1, T2 and T3:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q42_ec75b74c.jpg\"><br>\nWhich one of the schedules below is the correct serialization of the above? <br><br><strong>(GATE CSE 2010)</strong></p>",
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
          "id": 4,
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
        },
        {
          "id": 5,
          "question": "<p>Which of the following scenarios may lead to an irrecoverable error in a database system? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A transaction writes a data item after it is read by an uncommitted transaction</p>",
            "<b>B.</b> <p>A transaction reads a data item after it is read by an uncommitted transaction</p>",
            "<b>C.</b> <p>A transaction reads a data item after it is written by a committed transaction</p>",
            "<b>D.</b> <p>A transaction reads a data item after it is written by an uncommitted transaction</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A transaction reads a data item after it is written by an uncommitted transaction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/919/gate2003-29-isro2009-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following contains complete record of all activity that affected the contents of a database during a certain period of time? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Transaction log</p>",
            "<b>B.</b> <p>Query language</p>",
            "<b>C.</b> <p>Report writer</p>",
            "<b>D.</b> <p>Data manipulation language</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Transaction log</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50569/isro2009-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider two transactions T1 and T2, and four schedules S1, S2, S3, S4 of T1 and T2\nas given below: <br><br> \\(T_{1}:R_{1}[x]W_{1}[x]W_{1}[y] \\)<br>  \\(T_{2}:R_{2}[x]R_{2}[x]W_{1}[y] \\)<br> \\(S_{1}:R_{1}[x]R_{2}[x]R_{2}[y]W_{1}[x]W_{1}[y]W_{2}[y] \\)<br> \\(S_{2}:R_{1}[x]R_{2}[x]R_{2}[y]W_{1}[x]W_{2}[y]W_{1}[y] \\)<br> \\(S_{3}:R_{1}[x]W_{1}[x]R_{2}[x]W_{1}[y]R_{2}[y]W_{2}[y] \\)<br> \\(S_{4}:R_{2}[x]R_{2}[y]R_{1}[x]W_{1}[x]W_{1}[y]W_{2}[y]\\)<br><br>\nWhich of the above schedules are conflict-serializable? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 and S2</p>",
            "<b>B.</b> <p>S2 and S3</p>",
            "<b>C.</b> <p>S3 only</p>",
            "<b>D.</b> <p>S4 only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S2 and S3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1329/gate2009-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following three schedules of transactions T1, T2 and T3. <br>[Notation: In the following NYO represents the action Y (R for read, W for write) performed by transaction N on object O.]<br><br>\\(\\begin{array}{lllllllllll} \\hline(S 1) &amp; 2 R A &amp; 2 W A &amp; 3 R C &amp; 2 W B &amp; 3 W A &amp; 3 W C &amp; 1 R A &amp; 1 R B &amp; 1 W A &amp; 1 W B \\\\ \\hline(S 2) &amp; 3 R C &amp; 2 R A &amp; 2 W A &amp; 2 W B &amp; 3 W A &amp; 1 R A &amp; 1 R B &amp; 1 W A &amp; 1 W B &amp; 3 W C \\\\ \\hline(S 3) &amp; 2 R A &amp; 3 R C &amp; 3 W A &amp; 2 W A &amp; 2 W B &amp; 3 W C &amp; 1 R A &amp; 1 R B &amp; 1 W A &amp; 1 W B \\\\ \\hline \\end{array}\\)<br><br>Which of the following statements is TRUE? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1, S2 and S3 are all conflict equivalent to each other</p>",
            "<b>B.</b> <p>No two of S1, S2 and S3 are conflict equivalent to each other</p>",
            "<b>C.</b> <p>S2 is conflict equivalent to S3, but not to S1</p>",
            "<b>D.</b> <p>S1 is conflict equivalent to S2, but not to S3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>S1 is conflict equivalent to S2, but not to S3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3374/gate2008-it-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Which of the following is correct with respect to Two phase commit protocol? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Ensures serializability</p>",
            "<b>B.</b> <p>Prevents Deadlock</p>",
            "<b>C.</b> <p>Detects Deadlock</p>",
            "<b>D.</b> <p>Recover from Deadlock</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Ensures serializability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49627/isro2007-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following two transactions : T1 and T2. <br>\nT1:read (A);<br>\nread (B);<br>\nif A = 0 then B \\(\\leftarrow \\) B + 1;<br>\nwrite (B);<br><br>\nT2 :\tread (B);<br>\nread (A);<br>\nif B \\(\\neq\\) 0 then A \\(\\leftarrow \\) A - 1;<br>\nwrite (A);<br><br>\nWhich of the following schemes, using shared and exclusive locks, satisfy the requirements for strict two phase locking for the above transactions?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q66_94480cd3.jpg\"><br> <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3511/gate2007-it-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following schedules involving two transactions. Which one of the\nfollowing statements is TRUE? <br> \\(S_1 :r_1(X); r_1(Y); r_2(X); r_2(Y); w_2(Y); w_1(X)\\) <br> \\(S_2 :r_1(X); r_2(X); r_2(Y); w_2(Y); r_1(Y); w_1(X)\\) <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are conflict serializable.</p>",
            "<b>B.</b> <p>S1 is conflict serializable and S2 is not conflict serializable.</p>",
            "<b>C.</b> <p>S1 is not conflict serializable and S2 is conflict serializable.</p>",
            "<b>D.</b> <p>Both S1 and S2 are not conflict serializable.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S1 is not conflict serializable and S2 is conflict serializable.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1262/gate2007-64#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following log sequence of two transactions on a bank account, with\ninitial balance 12000,that transfer 2000 to a mortgage payment and, then apply\na 5% interest. <br><br>\n1. T1 start <br>\n2. T1 B old = 12000 new = 10000 <br>\n3. T1 M old = 0 ne = 2000<br>\n4. T1 commit <br>\n5. T2 start<br>\n6. T2 B old = 10000 new = 10500 <br>\n7. T2 commit<br><br>\nSuppose the database system crashed just before log record 7 is written. When\nthe system is restarted, which one statement is true of the recovery procedure? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>We must redo log record 6 to set B to 10500</p>",
            "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</p>",
            "<b>C.</b> <p>We need not redo log records 2 and 3 because transaction T1 has committed</p>",
            "<b>D.</b> <p>We can apply redo and undo operations in arbitrary order because they are\nidempotent</p>"
          ],
          "correct_answer": "<b>B.</b> <p>We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/981/gate2006-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>A company maintains records of sales made by its salespersons and pays them commission based on each individual's total sales made in a year. This data is maintained in a table with following schema:<br>salesinfo = (salespersonid, totalsales, commission)<br>In a certain year, due to better business results, the company decides to further reward its salespersons by enhancing the commission paid to them as per the following formula:<br>If commission \\(\\leq 50000\\), enhance it by 2%<br>\nIf 50000 &lt; commission \\(\\leq 100000\\), enhance it by 4%<br>\nIf commission &gt; 100000, enhance it by 6%<br>\nThe IT staff has written three different SQL scripts to calculate enhancement for each slab, each of these scripts is to run as a separate transaction as follows:<br>T1<br><pre><code> Update salesinfo\nSet commission = commission * 1.02\nWhere commission &lt; = 50000;</code></pre>\n<br> T2<br><pre><code>Update salesinfo\nSet commission = commission * 1.04\nWhere commission &gt; 50000 and commission is &lt; = 100000; </code></pre>\n<br> T3<br><pre><code> Update salesinfo\nSet commission = commission * 1.06\nWhere commission &gt; 100000;</code></pre>\n<br>Which of the following options of running these transactions will update the commission of all salespersons correctly <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Execute T1 followed by T2 followed by T3</p>",
            "<b>B.</b> <p>Execute T2, followed by T3; T1 running concurrently throughout</p>",
            "<b>C.</b> <p>Execute T3 followed by T2; T1 running concurrently throughout</p>",
            "<b>D.</b> <p>Execute T3 followed by T2 followed by T1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Execute T3 followed by T2 followed by T1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3830/gate2005-it-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Amongst the ACID properties of a transaction, the 'Durability' property requires that the changes made to the database by a successful transaction persist <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Except in case of an Operating System crash</p>",
            "<b>B.</b> <p>Except in case of a Disk crash</p>",
            "<b>C.</b> <p>Except in case of a power failure</p>",
            "<b>D.</b> <p>Always, even if there is a failure of any kind</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Always, even if there is a failure of any kind</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3769/gate2005-it-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
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
          "id": 16,
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
          "id": 17,
          "question": "<p>Consider three data items D1,D2 and D3 and the following execution schedule of\ntransactions T1,T2 and T3. In the diagram, R(D) and W(D) denote the actions\nreading and writing the data item D respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q87_3fcdb821.jpg\"> <br>Which of the following statements is correct? <br><br><strong>(GATE CSE 2003)</strong></p>",
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
          "id": 18,
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
          "id": 19,
          "question": "<p>For the schedule given below, which of the following is correct:<br>\\(\\begin{array}{lll} \\text{1} &amp; \\text{Read A} &amp; \\text{} \\\\ \\text{2} &amp; \\text{} &amp; \\text{Read B} \\\\ \\text{3} &amp; \\text{Write A} &amp; \\text{} \\\\ \\text{4} &amp; \\text{} &amp; \\text{Read A} \\\\ \\text{5} &amp; \\text{} &amp; \\text{Write A} \\\\ \\text{6} &amp; \\text{} &amp; \\text{Write B} \\\\ \\text{7} &amp; \\text{Read B} &amp; \\text{} \\\\ \\text{8} &amp; \\text{Write B} &amp; \\text{} \\\\\\end{array}\\) <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>This schedule is serializable and can occur in a scheme using 2PL protocol</p>",
            "<b>B.</b> <p>This schedule is serializable but cannot occur in a scheme using 2PL protocol</p>",
            "<b>C.</b> <p>This schedule is not serializable but can occur in a scheme using 2PL protocol</p>",
            "<b>D.</b> <p>This schedule is not serializable and cannot occur in a scheme using 2PL protocol</p>"
          ],
          "correct_answer": "<b>D.</b> <p>This schedule is not serializable and cannot occur in a scheme using 2PL protocol</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1484/gate1999-2-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
