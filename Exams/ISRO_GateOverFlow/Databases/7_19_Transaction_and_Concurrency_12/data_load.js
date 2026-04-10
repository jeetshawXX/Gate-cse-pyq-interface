window.__examLoadCallback({
  "title": "Databases - Transaction and Concurrency",
  "duration": 33,
  "sections": [
    {
      "name": "Transaction and Concurrency",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"919\"></a><div itemprop=\"text\">\n<p>Which of the following scenarios may lead to an irrecoverable error in a database system?</p>\n\n\n</div><br><br><b>Databases: GATE CSE 2003 | Question: 29, ISRO2009</b></p>",
          "type": "single",
          "options": [
            "<p>A transaction writes a data item after it is read by an uncommitted transaction</p>",
            "<p>A transaction reads a data item after it is read by an uncommitted transaction</p>",
            "<p>A transaction reads a data item after it is written by a&nbsp;committed transaction</p>",
            "<p>A transaction reads a data item after it is written by an uncommitted transaction</p>"
          ],
          "correct_answer": "<p>A transaction reads a data item after it is written by an uncommitted transaction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/919/gate-cse-2003-question-29-isro2009-73\" target=\"_blank\">https://gateoverflow.in/919/gate-cse-2003-question-29-isro2009-73</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"981\"></a><div itemprop=\"text\"><p>Consider the following log sequence of two transactions on a bank account, with&nbsp;initial balance \\( 12000, \\) that transfer \\( 2000 \\) to a mortgage payment and then apply&nbsp;a \\( 5\\% \\) interest.&nbsp;</p>\n\n<ol>\n\t<li>T1 start&nbsp;</li>\n\t<li>T1 B old \\( =12000 \\) new \\( =10000 \\)</li>\n\t<li>T1 M old \\( =0 \\) new \\( =2000 \\)</li>\n\t<li>T1 commit</li>\n\t<li>T2 start</li>\n\t<li>T2 B old \\( =10000 \\) new \\( =10500 \\)</li>\n\t<li>T2 commit</li>\n</ol>\n\n<p>Suppose the database system crashes just before log record \\( 7 \\) is written. When&nbsp;&nbsp;the system is restarted, which one statement is true of the recovery procedure?&nbsp;</p>\n\n</div><br><br><b>Databases: GATE CSE 2006 | Question: 20, ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>We must redo log record \\( 6 \\) to set B to \\( 10500 \\)&nbsp;</p>",
            "<p>We must undo log record \\( 6 \\) to set B to \\( 10000 \\) and then redo log records \\( 2 \\)&nbsp; and \\( 3 \\)</p>",
            "<p>We need not redo log records \\( 2 \\) and \\( 3 \\) because transaction T1 has committed&nbsp;</p>",
            "<p>We can apply redo and undo operations in arbitrary order because they are&nbsp;idempotent</p>"
          ],
          "correct_answer": "<p>We must undo log record \\( 6 \\) to set B to \\( 10000 \\) and then redo log records \\( 2 \\)&nbsp; and \\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/981/gate-cse-2006-question-20-isro2015-17\" target=\"_blank\">https://gateoverflow.in/981/gate-cse-2006-question-20-isro2015-17</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"128600\"></a><div itemprop=\"text\"><p>Which of the following concurrency control protocol ensures both conflict and free from deadlock? ,</p>\n\n</div><br><br><b>Databases: ISRO 2017</b></p>",
          "type": "single",
          "options": [
            "<p>Time stamp ordering</p>",
            "<p>2 Phase locking</p>",
            "<p>Both (a) and (b)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>Time stamp ordering</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128600/isro-2017-5\" target=\"_blank\">https://gateoverflow.in/128600/isro-2017-5</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"49627\"></a><div itemprop=\"text\">\n<p>Which of the following is correct with respect to Two phase commit protocol?</p>\n\n\n</div><br><br><b>Databases: ISRO CSE 2007 | Question: 60</b></p>",
          "type": "single",
          "options": [
            "<p>Ensures serializability</p>",
            "<p>Prevents Deadlock</p>",
            "<p>Detects Deadlock</p>",
            "<p>Recover from Deadlock</p>"
          ],
          "correct_answer": "<p>Ensures serializability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/49627/isro-cse-2007-question-60\" target=\"_blank\">https://gateoverflow.in/49627/isro-cse-2007-question-60</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"50569\"></a><div itemprop=\"text\"><p>Which of the following contains complete record of all activity that affected the contents of a database during a certain period of time?</p>\n\n</div><br><br><b>Databases: ISRO CSE 2009 | Question: 71</b></p>",
          "type": "single",
          "options": [
            "<p>Transaction log</p>",
            "<p>Query language</p>",
            "<p>Report writer</p>",
            "<p>Data manipulation language</p>"
          ],
          "correct_answer": "<p>Transaction log</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/50569/isro-cse-2009-question-71\" target=\"_blank\">https://gateoverflow.in/50569/isro-cse-2009-question-71</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"52269\"></a><div itemprop=\"text\"><p>What is the equivalent serial schedule for the following transactions?</p><h3><strong>Transaction</strong></h3><table border=\"1\" cellpadding=\"50\"><tbody><tr><th>T1</th><th>T2</th><th>T3</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>R(Y)</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>R(Z)</td></tr><tr><td>R(X)</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>W(X)</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>W(Y)</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>W(Z)</td></tr><tr><td>&nbsp;</td><td>W(Z)</td><td>&nbsp;</td></tr><tr><td>R(Y)</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>W(Y)</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>R(Y)</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>W(Y)</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>R(X)</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>W(X)</td><td>&nbsp;</td></tr></tbody></table><p>&nbsp;</p></div><br><br><b>Databases: ISRO CSE 2011 | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{T}_1 - \\text{T}_2 - \\text{T}_3 \\)</p>",
            "<p>\\( \\text{T}_3 - \\text{T}_1 - \\text{T}_2 \\)</p>",
            "<p>\\( \\text{T}_2 - \\text{T}_1 - \\text{T}_3 \\)</p>",
            "<p>\\( \\text{T}_1 - \\text{T}_3 - \\text{T}_2 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{T}_3 - \\text{T}_1 - \\text{T}_2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52269/isro-cse-2011-question-15\" target=\"_blank\">https://gateoverflow.in/52269/isro-cse-2011-question-15</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"56041\"></a><div itemprop=\"text\"><p>Trigger is</p>\n\n</div><br><br><b>Databases: ISRO CSE 2016 | Question: 58</b></p>",
          "type": "single",
          "options": [
            "<p>Statement that enables to start any DBMS</p>",
            "<p>Statement that is executed by the user when debugging an application program</p>",
            "<p>The condition that the system tests for the validity of the database user</p>",
            "<p>Statement that is executed automatically by the system as a side effect of a modification of the database</p>"
          ],
          "correct_answer": "<p>Statement that is executed automatically by the system as a side effect of a modification of the database</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/56041/isro-cse-2016-question-58\" target=\"_blank\">https://gateoverflow.in/56041/isro-cse-2016-question-58</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"128601\"></a><div itemprop=\"text\"><p>ACID properties of a transactions are</p>\n\n</div><br><br><b>Databases: ISRO CSE 2017 | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>Atomicity, consistency, isolation, database</p>",
            "<p>Atomicity, consistency, isolation, durability</p>",
            "<p>Atomicity, consistency, integrity, durability</p>",
            "<p>Atomicity, consistency, integrity, database</p>"
          ],
          "correct_answer": "<p>Atomicity, consistency, isolation, durability</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128601/isro-cse-2017-question-6\" target=\"_blank\">https://gateoverflow.in/128601/isro-cse-2017-question-6</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"213533\"></a><div itemprop=\"text\">\n\n<p>Let us assume that transaction \\( T1 \\) has arrived before transaction \\( T2 \\). Consider the schedule \\( s=r1(A);r2(B): w2(A);&nbsp; w1(B) \\)</p>\n\n<p>Which of the following is true?</p>\n\n</div><br><br><b>Databases: ISRO CSE 2018 | Question: 55</b></p>",
          "type": "single",
          "options": [
            "<p>Allowed&nbsp;under basic timestamp protocol.</p>",
            "<p>Not allowed under basic&nbsp;timestamp protocols because \\( T1 \\) is rolled back.</p>",
            "<p>Not allowed under basic&nbsp;timestamp protocols because \\( T2 \\) is rolled back.</p>",
            "<p>None of these</p>"
          ],
          "correct_answer": "<p>Not allowed under basic&nbsp;timestamp protocols because \\( T1 \\) is rolled back.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213533/isro-cse-2018-question-55\" target=\"_blank\">https://gateoverflow.in/213533/isro-cse-2018-question-55</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"331328\"></a><div itemprop=\"text\"><p>Raymonds tree based algorithm ensures</p>\n\n</div><br><br><b>Databases: ISRO CSE 2020 | Question: 22</b></p>",
          "type": "single",
          "options": [
            "<p>no starvation, but deadlock may occur in rare cases</p>",
            "<p>no deadlock, but starvation may occur</p>",
            "<p>neither deadlock nor starvation can occur</p>",
            "<p>deadlock may occur in cases where the process is already starved</p>"
          ],
          "correct_answer": "<p>no deadlock, but starvation may occur</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331328/isro-cse-2020-question-22\" target=\"_blank\">https://gateoverflow.in/331328/isro-cse-2020-question-22</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"435347\"></a><div itemprop=\"text\"><p>Amongst the ACID properties of a transaction, the 'Durability' property requires that the changes made to the database by a successful transaction persist</p></div><br><br><b>Databases: ISRO CSE 2023 | Question: 49</b></p>",
          "type": "single",
          "options": [
            "<p>Except in case of an operating system crash</p>",
            "<p>Except in case of a disk crash</p>",
            "<p>Except in case of a power failure</p>",
            "<p>Always, even if there is a failure of any kind<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>Always, even if there is a failure of any kind<p>&nbsp;</p></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/435347/isro-cse-2023-question-49\" target=\"_blank\">https://gateoverflow.in/435347/isro-cse-2023-question-49</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"43855\"></a><div itemprop=\"text\">\n<p>Which of the following is the highest isolation level in transaction management?</p>\n\n\n</div><br><br><b>Databases: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>Serializable</p>",
            "<p>Repeated Read</p>",
            "<p>Committed Read</p>",
            "<p>Uncommitted Read</p>"
          ],
          "correct_answer": "<p>Serializable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43855/isro-2013-23\" target=\"_blank\">https://gateoverflow.in/43855/isro-2013-23</a></p>"
        }
      ]
    }
  ]
});
