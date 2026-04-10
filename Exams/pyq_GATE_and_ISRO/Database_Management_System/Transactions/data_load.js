window.__examLoadCallback({
  "title": "Database_Management_System - Transactions",
  "duration": 136,
  "sections": [
    {
      "name": "Transactions",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the database transactions \\(T1 \\) and \\(T2 \\), and data items \\(X \\) and \\(Y \\). Which of the schedule(s) is/are conflict serializable?\n<br><br>\n\\( \\begin{array}{|l|}\n\\hline\n\\textbf{Transaction T1} \\\\ \\hline\nR1(X) \\\\ \\hline\nW1(Y) \\\\ \\hline\nR1(X) \\\\ \\hline\nW1(X) \\\\ \\hline\n\\text{COMMIT(T1)} \\\\ \\hline\n\\end{array}\n\\)\n<br><br>\n\\( \\begin{array}{|l|}\n\\hline\n\\textbf{Transaction T2} \\\\ \\hline\nW2(X) \\\\ \\hline\nW2(Y) \\\\ \\hline\n\\text{COMMIT(T2)} \\\\ \\hline\n\\end{array}\n\\) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(R1(X), W2(X), W1(Y), W2(Y), R1(X), W1(X), \\text{COMMIT}(T2), \\text{COMMIT}(T1) \\)</p>",
            "<b>B.</b> <p>\\(W2(X), R1(X), W2(Y), W1(Y), R1(X), \\text{COMMIT}(T2), W1(X), \\text{COMMIT}(T1) \\)</p>",
            "<b>C.</b> <p>\\(R1(X), W1(Y), W2(X), W2(Y), R1(X), W1(X), \\text{COMMIT}(T1), \\text{COMMIT}(T2) \\)</p>",
            "<b>D.</b> <p>\\(W2(X), R1(X), W1(Y), W2(Y), R1(X), \\text{COMMIT}(T2), W1(X), \\text{COMMIT}(T1) \\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(W2(X), R1(X), W2(Y), W1(Y), R1(X), \\text{COMMIT}(T2), W1(X), \\text{COMMIT}(T1) \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460850/gate-cse-2025-set-2-question-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>An audit of a banking transactions system has found that on an earlier occasion, two joint holders of account \\(A \\) attempted simultaneous transfers of Rs. 10000 each from account \\(A \\) to account \\(B \\). Both transactions read the same value, Rs. 11000, as the initial balance in \\(A \\) and were allowed to go through. \\(B \\) was credited Rs. 10000 twice. \\(A \\) was debited only once and ended up with a balance of Rs. 1000.\n<br>\nWhich of the following properties is/are certain to have been violated by the system? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Atomicity</p>",
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>",
            "<b>D.</b> <p>Durability</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460818/gate-cse-2025-set-2-question-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A schedule of three database transactions \\(T_1\\), \\(T_2\\), and \\(T_3\\) is shown. \\(R_i(A)\\) and \\(W_i(A)\\) denote read and write of data item \\(A\\) by transaction \\(T_i\\), \\(i = 1, 2, 3\\). The transaction \\(T_1\\) aborts at the end. Which other transaction(s) will be required to be rolled back?\n<br><br> \\( R_1(X) \\quad W_1(Y) \\quad R_2(X) \\quad R_2(Y) \\quad R_3(Y) \\quad ABORT(T_1)\\) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only \\(T_2\\)</p>",
            "<b>B.</b> <p>Only \\(T_3\\)</p>",
            "<b>C.</b> <p>Both \\(T_2\\) and \\(T_3\\)</p>",
            "<b>D.</b> <p>Neither \\(T_2\\) nor \\(T_3\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both \\(T_2\\) and \\(T_3\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460075/gate-cse-2025-set-1-question-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which of the following statements about the Two Phase Locking (2PL) protocol is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2PL permits only serializable schedules</p>",
            "<b>B.</b> <p>With 2PL, a transaction always locks the data item being read or written just before every operation and always releases the lock just after the operation</p>",
            "<b>C.</b> <p>With 2PL, once a lock is released on any data item inside a transaction, no more locks on any data item can be obtained inside that transaction</p>",
            "<b>D.</b> <p>A deadlock is possible with 2PL</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2PL permits only serializable schedules</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422880/gate-cse-2024-set-2-question-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Once the DBMS informs the user that a transaction has been successfully\ncompleted, its effect should persist even if the system crashes before all its changes\nare reflected on disk. This property is called <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>durability</p>",
            "<b>B.</b> <p>atomicity</p>",
            "<b>C.</b> <p>consistency</p>",
            "<b>D.</b> <p>isolation</p>"
          ],
          "correct_answer": "<b>A.</b> <p>durability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422888/gate-cse-2024-set-2-question-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following read-write schedule \\( S \\) over three transactions \\( T_1, T_2 \\), and \\( T_3 \\), where the subscripts in the schedule indicate transaction IDs:\n<br> <br>\\(\nS: r_1(z) ; w_1(z) ; r_2(x) ; r_3(y) ; w_3(y) ; r_2(y) ; w_2(x) ; w_2(y) ;\n\\) <br><br>Which of the following transaction schedules is/are conflict equivalent to \\( S \\) ? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\( T_1 T_2 T_3 \\)</p>",
            "<b>B.</b> <p>\\( T_1 T_3 T_2 \\)</p>",
            "<b>C.</b> <p>\\( T_3 T_2 T_1 \\)</p>",
            "<b>D.</b> <p>\\( T_3 T_1 T_2 \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\( T_1 T_3 T_2 \\)</p>",
            "<b>C.</b> <p>\\( T_3 T_2 T_1 \\)</p>",
            "<b>D.</b> <p>\\( T_3 T_1 T_2 \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422806/gate-cse-2024-set-1-question-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Let \\(R_i(z)\\) and \\(W_i(z)\\) denote read and write operations on a data element \\(z\\) by a transaction \\(T_i\\), respectively. Consider the schedule \\(S\\) with four transactions.<br><br>S: \\(R_4(x)R_2(x)R_3(x)R_1(y)W_1(y)W_2 (x)W_3 (y)R_4(y)\\) <br><br>Which one of the following serial schedules is conflict equivalent to \\(S\\)? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T_1\\rightarrow T_3\\rightarrow T_4\\rightarrow T_2\\)</p>",
            "<b>B.</b> <p>\\(T_1\\rightarrow T_4\\rightarrow T_3\\rightarrow T_2\\)</p>",
            "<b>C.</b> <p>\\(T_4\\rightarrow T_1\\rightarrow T_3\\rightarrow T_2\\)</p>",
            "<b>D.</b> <p>\\(T_3\\rightarrow T_1\\rightarrow T_4\\rightarrow T_2\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(T_1\\rightarrow T_3\\rightarrow T_4\\rightarrow T_2\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/371907/Gate-cse-2022-question-29#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Let S be the following schedule of operations of three transactions \\(T_1, T_2 \\text{ and }T_3\\) in a relational database system:<br><br>\n\\(R_2(Y), R_1(X), R_3(Z), R_1(Y)W_1(X), R_2(Z), W_2(Y), R_3(X), W_3(Z)\\)<br><br>\nConsider the statements P and Q below:<br><br>\nP: S is conflict-serializable.<br>\nQ: If \\(T_3\\) commits before \\(T_1\\) finishes, then S is recoverable.<br><br>\nWhich one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both P and Q are true</p>",
            "<b>B.</b> <p>P is true and Q is false</p>",
            "<b>C.</b> <p>P is false and Q is true</p>",
            "<b>D.</b> <p>Both P and Q are false</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P is true and Q is false</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357508/gate-cse-2021-set-2-question-32#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
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
          "id": 11,
          "question": "<p>Consider a schedule of transactions T1 and T2: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q37_7982b097.jpg\"><br>Here, RX stands for \"Read(X)\" and WX stands for \"Write(X)\". Which one of the following schedules is conflict equivalent to the above schedule?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q37a_8f7271d7.jpg\"> <br><br><strong>(GATE CSE 2020)</strong></p>",
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
          "id": 12,
          "question": "<p>Consider the following two statements about database transaction schedules:<br><br>\nI. Strict two-phase locking protocol generates conflict serializable schedules that are also recoverable.<br>\nII. Timestamp-ordering concurrency control protocol with Thomas' Write Rule can generate view serializable schedules that are not conflict serializable.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both I and II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302837/gate2019-cs-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
          "id": 16,
          "question": "<p>Two transactions \\(T_1 \\; and \\; T_2\\) are given as: <br><br>\n\\(T_{1}:r_{1} (X)w_{1}(X)r_{1}(Y)w_{1}(Y)  \\)<br>\\(T_{2}:r_{2}(Y)w_{2}(Y)r_{2}(Z)w_{2}(Z)\\)<br><br>\nwhere \\(r_{i}(V)\\) denotes a read operation by transaction \\(T_{i}\\) on a variable V and \\(w_{i}(V)\\) denotes a\nwrite operations by transaction \\(T_{i}\\)  on a variable V. The total number of conflict serializable\nschedules that can be formed by \\(T_1 \\; and \\; T_2\\) is _____________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "54",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118640/gate2017-2-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>In a database system, unique time stamps are assigned to each transaction using Lamport's\nlogical clock . Let TS(\\(T_{1}\\)) and TS(\\(T_{2}\\)) be the timestamps of transactions \\(T_{1}\\) and \\(T_{2}\\) respectively. Besides, \\(T_{1}\\) holds a lock on the resource R, and \\(T_{2}\\) has requested a conflicting lock on the same resource R. The following algorithm is used to prevent deadlocks in the database system assuming that a killed transaction is restarted with the same timestamp.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q42_afa2fbc5.jpg\">  <br>Assume any transactions that is not killed terminates eventually. Which of the following is TRUE about the database system that uses the above algorithm to prevent deadlocks? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The database system is both deadlock-free and starvation- free.</p>",
            "<b>B.</b> <p>The database system is deadlock- free, but not starvation-free.</p>",
            "<b>C.</b> <p>The database system is starvation-free but not deadlock- free.</p>",
            "<b>D.</b> <p>The database system is neither deadlock- free nor starvation-free.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The database system is both deadlock-free and starvation- free.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118325/gate2017-1-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Trigger is <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Statement that enables to start any DBMS</p>",
            "<b>B.</b> <p>Statement that is executed by the user when debugging an application program</p>",
            "<b>C.</b> <p>The condition that the system tests for the validity of the database user</p>",
            "<b>D.</b> <p>Statement that is executed automatically by the system as a side effect of a modification of the database</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Statement that is executed automatically by the system as a side effect of a modification of the database</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56041/isro2016-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Consider the following databases chedule with two transactions, T1 and T2.<br>\n\\(S=r_{2}(X);r_{1}(X);r_{2}(Y);w_{1}(X);r_{1}(Y);w_{2}(X);a_{1};a_{2}\\)<br>\nwhere \\(r_{i}(Z)\\) denotes a read operation by transaction \\(T_{i}\\) on avariable Z, \\(w_{i}(Z)\\)\ndenotes a write operation by \\(T_{i}\\) on avariable Z and \\(a_{i}\\) denotes an abort by transaction \\(T_{i}\\).<br>\nWhich one of the following statements about the above schedule is TRUE? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S is non-recoverable</p>",
            "<b>B.</b> <p>S is recoverable,but has a cascading abort</p>",
            "<b>C.</b> <p>S does not have a cascading abort</p>",
            "<b>D.</b> <p>S is strict</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S does not have a cascading abort</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39590/gate2016-2-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Suppose  a database schedule S involves transactions T1,...,Tn. Construct the precedence graph of S with vertices representing the transactions and edges representing the conflicts. If S is serializable, which one of the following orderings of the vertices of the precedence graph is guaranteed to yield a serial schedule? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Topological order</p>",
            "<b>B.</b> <p>Depth-first order</p>",
            "<b>C.</b> <p>Breadth-first order</p>",
            "<b>D.</b> <p>Ascending orderoftransactionindices</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Topological order</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39550/gate2016-2-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Consider the following two phase locking protocol. Suppose a transaction T accesses (for read or write operations), a certain set of objects {O1,... ,Ok}. This is done in the following manner: <br>\nStep 1. T acquires exclusive locks to O1,...,Ok in increasing order of their addresses. <br>\nStep 2. The required operations are performed.<br>\nStep 3. All locks are released. <br>\nThis protocol will <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>guarantee serializability and deadlock-freedom</p>",
            "<b>B.</b> <p>guarantee neither serializability nor deadlock-freedom</p>",
            "<b>C.</b> <p>guarantee serializability but not deadlock-freedom</p>",
            "<b>D.</b> <p>guarantee deadlock-freedom but not serializability</p>"
          ],
          "correct_answer": "<b>A.</b> <p>guarantee serializability and deadlock-freedom</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39703/gate2016-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Which one of the following is NOT a part of the ACID properties of database transactions? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Atomicity</p>",
            "<b>B.</b> <p>Consistency</p>",
            "<b>C.</b> <p>Isolation</p>",
            "<b>D.</b> <p>Deadlock-freedom</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Deadlock-freedom</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39644/gate2016-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
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
          "id": 24,
          "question": "<p>Consider the following partial Schedule S involving two transactions T1 and T2. Only the read and the write operations have been shown. The read operation on data item P is denoted by read(P) and the write operation on data item P is denoted by write(P). <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q41_17720076.jpg\"> <br> Suppose that the transaction T1 fails immediately after time instance 9. Which one of the following statements is correct? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
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
          "id": 25,
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
          "id": 26,
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
          "id": 27,
          "question": "<p>Consider the transactions T1, T2, and T3 and the schedules S1 and S2 given below. <br>\nT1 : r1(x); r1(Z) ; w1(x); w1(Z) <br>\nT2 : r2(x); r2(Z); w2(Z) <br>\nT3 : r3(x); r3(x); w3(Y)<br> <br>\nS1: r1(x); r3(Y); r3(x); r2(Y); r2(Z); w3(Y); w2(Z); r1(Z); w1(x); w1(Z) <br>\nS2: r1(x); r3(Y); r2(Y); r3(x); r1(Z); r2(Z); w3(Y); w1(x); w2(Z); w1(Z) <br>\nWhich one of the following statements about the schedules is TRUE? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is conflict-serializable</p>",
            "<b>B.</b> <p>Only S2 is conflict-serializable.</p>",
            "<b>C.</b> <p>Both S1 and S2 are conflict-serializable</p>",
            "<b>D.</b> <p>Neither S1 nor S2 is conflict-serializable</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Only S1 is conflict-serializable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2063/gate2014-3-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>Consider the following schedule S of transactions T1, T2, T3, T4: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transactions\\q29_87119e6e.jpg\"> <br> Which one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S is conflict-serializable but not recoverable</p>",
            "<b>B.</b> <p>S is not conflict-serializable but is recoverable</p>",
            "<b>C.</b> <p>S is both conflict-serializable and recoverable</p>",
            "<b>D.</b> <p>S is neither conflict-serializable nor is it recoverable</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S is both conflict-serializable and recoverable</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1988/gate2014-2-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>Consider the following four schedules due to three transactions (indicted by the subscript)\nusing read and write on a data item x, denoted by  r(x) and w(x) respectively. Which one of\nthem is conflict serializable? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>r1(x); r2(x); w1(x); r3(x);  w2(x)</p>",
            "<b>B.</b> <p>r2(x);  r1(x);  w2(x);  r3(x);  w1(x)</p>",
            "<b>C.</b> <p>r3(x); r2(x); r1(x); w2(x);  w1(x)</p>",
            "<b>D.</b> <p>r2(x); w2(x); r3(x); r1(x); w1(x)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>r2(x); w2(x); r3(x); r1(x); w1(x)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1796/gate2014-1-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>Which of the following is the highest isolation level in transaction management? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Serializable</p>",
            "<b>B.</b> <p>Repeated Read</p>",
            "<b>C.</b> <p>Committed Read</p>",
            "<b>D.</b> <p>Uncommitted Read</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Serializable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43855/isro-2013-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
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
          "id": 32,
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
          "id": 33,
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
          "id": 34,
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
          "id": 35,
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
          "id": 36,
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
          "id": 37,
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
          "id": 38,
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
          "id": 39,
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
          "id": 40,
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
          "id": 41,
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
          "id": 42,
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
          "id": 43,
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
          "id": 44,
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
          "id": 45,
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
          "id": 46,
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
          "id": 47,
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
          "id": 48,
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
          "id": 49,
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
