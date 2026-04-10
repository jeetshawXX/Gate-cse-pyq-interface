window.__examLoadCallback({
  "title": "Transactions - Transactions - Slot 3",
  "duration": 25,
  "sections": [
    {
      "name": "Transactions",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
