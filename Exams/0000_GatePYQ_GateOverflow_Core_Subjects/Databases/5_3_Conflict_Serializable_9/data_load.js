window.__examLoadCallback({
  "title": "Databases - Conflict Serializable",
  "duration": 25,
  "sections": [
    {
      "name": "Conflict Serializable",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1796\"></a><div itemprop=\"text\"><p>Consider the following four schedules due to three transactions (indicated by the subscript) using&nbsp;<em>read&nbsp;</em>and&nbsp;<em>write&nbsp;</em>on a data item x, denoted by \\( r(x) \\) and \\( w(x) \\) respectively. Which one of them is conflict serializable?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 1 | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p>\\( r_1(x) \\); \\( r_2(x) \\); \\( w_1(x) \\); \\( r_3(x) \\); \\( w_2(x) \\);</p>",
            "<p>\\( r_2(x) \\); \\( r_1(x) \\); \\( w_2(x) \\); \\( r_3(x) \\); \\( w_1(x) \\);</p>",
            "<p>\\( r_3(x) \\); \\( r_2(x) \\); \\( r_1(x) \\); \\( w_2(x) \\); \\( w_1(x) \\);&nbsp;</p>",
            "<p>\\( r_2(x) \\); \\( w_2(x) \\); \\( r_3(x) \\); \\( r_1(x) \\); \\( w_1(x) \\);</p>"
          ],
          "correct_answer": "<p>\\( r_2(x) \\); \\( w_2(x) \\); \\( r_3(x) \\); \\( r_1(x) \\); \\( w_1(x) \\);</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1796/gate-cse-2014-set-1-question-29\" target=\"_blank\">https://gateoverflow.in/1796/gate-cse-2014-set-1-question-29</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1988\"></a><div itemprop=\"text\"><p>Consider the following schedule&nbsp;<strong>S</strong>&nbsp;of transactions \\( T1, T2, T3, T4: \\)<br>\n\\[ {\\begin{array}{|l|l|l|l|}\\hline<br>\n\\textbf{T1}&amp;&nbsp; &nbsp; \\textbf{T2}&amp;&nbsp; \\textbf{T3}&amp; \\textbf{T4} \\\\\\hline<br>\n&amp;&nbsp; &nbsp; &nbsp;\\text{Reads(X)}&nbsp; &nbsp; &nbsp; &nbsp;\\\\&nbsp;<br>\n&amp;&amp;&nbsp; &nbsp; &nbsp;\\text{Writes(X)}&nbsp;&nbsp;&nbsp;\\\\&nbsp; &nbsp; &nbsp;<br>\n&amp;&amp;&nbsp; &nbsp; &nbsp;\\text{Commit}&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; \\\\&nbsp; &nbsp; &nbsp;\\text{Writes(X)}&nbsp; &nbsp; &nbsp; \\\\<br>\n&nbsp; &nbsp; \\text{Commit}&amp; &nbsp; &nbsp; \\\\<br>\n&amp; &nbsp; &nbsp; \\text{Writes(Y) }&nbsp; &nbsp;\\\\&nbsp; &nbsp;<br>\n&amp; &nbsp; &nbsp; \\text{Reads(Z)}&nbsp; &nbsp; \\\\&nbsp;<br>\n&amp; &nbsp; &nbsp; \\text{Commit} \\\\<br>\n&amp;&amp;&amp;&nbsp; &nbsp; \\text{Reads(X)}&nbsp; &nbsp;\\\\<br>\n&amp;&amp;&amp;&nbsp; &nbsp; &nbsp;\\text{Reads(Y)} \\\\ &amp;&nbsp; &amp;&amp;\\text{Commit}&nbsp;\\\\\\hline&nbsp;<br>\n\\end{array}} \\]<br>\nWhich one of the following statements is CORRECT?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p><strong>S</strong>&nbsp;is conflict-serializable but not recoverable</p>",
            "<p><strong>S</strong>&nbsp;is not conflict-serializable but is recoverable</p>",
            "<p><strong>S</strong>&nbsp;is both conflict-serializable and recoverable</p>",
            "<p><strong>S</strong>&nbsp;is neither conflict-serializable not is it recoverable</p>"
          ],
          "correct_answer": "<p><strong>S</strong>&nbsp;is both conflict-serializable and recoverable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1988/gate-cse-2014-set-2-question-29\" target=\"_blank\">https://gateoverflow.in/1988/gate-cse-2014-set-2-question-29</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2063\"></a><div itemprop=\"text\"><p>Consider the transactions \\( T1, T2, \\:\\text{and} \\:T3 \\) and the schedules \\( S1 \\:\\text{and} \\:S2 \\) given below.&nbsp;</p>\n\n<ul>\n\t<li>\\( T1: r1(X); r1(Z); w1(X); w1(Z)  \\)</li>\n\t<li>\\( T2: r2(Y); r2(Z); w2(Z)  \\)</li>\n\t<li>\\( T3: r3(Y); r3(X); w3(Y)  \\)</li>\n\t<li>\\( S1: r1(X); r3(Y); r3(X); r2(Y); r2(Z); w3(Y); w2(Z); r1(Z); w1(X); w1(Z)  \\)</li>\n\t<li>\\( S2: r1(X); r3(Y); r2(Y); r3(X); r1(Z); r2(Z); w3(Y); w1(X); w2(Z); w1(Z)  \\)</li>\n</ul>\n\n<p>Which one of the following statements about the schedules is&nbsp;<strong>TRUE</strong>?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 3 | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p>Only \\( S1 \\) is conflict-serializable.</p>",
            "<p>Only \\( S2 \\) is conflict-serializable.</p>",
            "<p>Both \\( S1 \\) and \\( S2 \\) are conflict-serializable.</p>",
            "<p>Neither \\( S1 \\) nor \\( S2 \\) is conflict-serializable.</p>"
          ],
          "correct_answer": "<p>Only \\( S1 \\) is conflict-serializable.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2063/gate-cse-2014-set-3-question-29\" target=\"_blank\">https://gateoverflow.in/2063/gate-cse-2014-set-3-question-29</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"118640\"></a><div itemprop=\"text\">Two transactions \\( T_1 \\) and \\( T_2 \\) are given as<br>\n<br>\n\\( T_1:r_1(X)w_1(X)r_1(Y)w_1(Y) \\)<br>\n<br>\n\\( T_2:r_2(Y)w_2(Y)r_2(Z)w_2(Z) \\)<br>\n<br>\nwhere \\( r_i(V) \\) denotes a \\( \\textit{read} \\) operation by transaction \\( T_i \\) on a variable \\( V \\) and \\( w_i(V) \\) denotes a \\( \\textit{write} \\) operation by transaction \\( T_i \\) on a variable \\( V \\). The total number of conflict serializable schedules that can be formed by \\( T_1 \\) and \\( T_2 \\) is ______</div><br><br><b>GATE CSE 2017 Set 2 | Question: 44</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "54",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118640/gate-cse-2017-set-2-question-44\" target=\"_blank\">https://gateoverflow.in/118640/gate-cse-2017-set-2-question-44</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"357419\"></a><div itemprop=\"text\"><p>Let \\( r_i(z) \\) and \\( w_i(z) \\) denote read and write operations respectively on a data item \\( z \\) by a transaction \\( T_i \\). Consider the following two schedules.</p>\n\n<ul>\n\t<li>\\( S_1: r_1(x)r_1(y)r_2(x)r_2(y)w_2(y)w_1(x) \\)</li>\n\t<li>\\( S_2: r_1(x)r_2(x)r_2(y)w_2(y)r_1(y)w_1(x) \\)</li>\n</ul>\n\n<p>Which one of the following options is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S_1 \\) is conflict serializable, and \\( S_2 \\)&nbsp;is not conflict serializable</p>",
            "<p>\\( S_1 \\) is not conflict serializable, and \\( S_2 \\) is conflict serializable</p>",
            "<p>Both \\( S_1 \\) and \\( S_2 \\) are conflict serializable</p>",
            "<p>Niether \\( S_1 \\) nor \\( S_2 \\) is conflict serializable</p>"
          ],
          "correct_answer": "<p>\\( S_1 \\) is not conflict serializable, and \\( S_2 \\) is conflict serializable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357419/gate-cse-2021-set-1-question-32\" target=\"_blank\">https://gateoverflow.in/357419/gate-cse-2021-set-1-question-32</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"357508\"></a><div itemprop=\"text\"><p>​​​​​Let \\( S \\) be the following schedule of operations of three transactions \\( T_1 \\), \\( T_2 \\) and \\( T_3 \\) in a relational database system:</p>\n\n<p>\\[ R_2(Y), R_1(X), R_3(Z), R_1(Y)W_1(X), R_2(Z), W_2(Y), R_3(X), W_3(Z) \\]</p>\n\n<p>Consider the statements \\( P \\) and \\( Q \\) below:</p>\n\n<ul>\n\t<li>\\( P \\): \\( S \\) is conflict-serializable.</li>\n\t<li>\\( Q \\): If \\( T_3 \\) commits before \\( T_1 \\) finishes, then \\( S \\) is recoverable.</li>\n</ul>\n\n<p>Which one of the following choices is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 2 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>Both \\( P \\) and \\( Q \\) are true</p>",
            "<p>\\( P \\) is true and \\( Q \\) is false</p>",
            "<p>\\( P \\) is false and \\( Q \\) is true</p>",
            "<p>Both \\( P \\) and \\( Q \\) are false</p>"
          ],
          "correct_answer": "<p>\\( P \\) is true and \\( Q \\) is false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357508/gate-cse-2021-set-2-question-32\" target=\"_blank\">https://gateoverflow.in/357508/gate-cse-2021-set-2-question-32</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"371907\"></a><div itemprop=\"text\"><p>Let \\( \\textit{R}_{i}(z) \\) and \\( \\textit{W}_{i}(z) \\) denote read and write operations on a data element \\( z \\) by a transaction \\( \\textit{T}_{i}, \\) respectively. Consider the schedule \\( \\textit{S} \\) with four transactions.</p>\n\n<p>\\( S: \\; R_{4}(x) R_{2}(x) R_{3}(x)R_{1}(y) W_{1}(y) W_{2}(x) W_{3}(y) R_{4}(y) \\)</p>\n\n<p>Which one of the following serial schedules is conflict equivalent to \\( \\textit{S}? \\)</p>\n\n</div><br><br><b>GATE CSE 2022 | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T_{1} \\rightarrow T_{3} \\rightarrow T_{4} \\rightarrow T_{2} \\)</p>",
            "<p>\\( T_{1} \\rightarrow T_{4} \\rightarrow T_{3} \\rightarrow T_{2} \\)</p>",
            "<p>\\( T_{4} \\rightarrow T_{1} \\rightarrow T_{3} \\rightarrow T_{2} \\)</p>",
            "<p>\\( T_{3} \\rightarrow T_{1} \\rightarrow T_{4} \\rightarrow T_{2} \\)</p>"
          ],
          "correct_answer": "<p>\\( T_{1} \\rightarrow T_{3} \\rightarrow T_{4} \\rightarrow T_{2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371907/gate-cse-2022-question-29\" target=\"_blank\">https://gateoverflow.in/371907/gate-cse-2022-question-29</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"422806\"></a><div itemprop=\"text\"><p>​​​​Consider the following read-write schedule \\( \\text{S} \\) over three transactions \\( T_{1}, T_{2} \\), and \\( T_{3} \\), where the subscripts in the schedule indicate transaction IDs:</p><p>\\( S: r_{1}(z) ; w_{1}(z) ; r_{2}(x) ; r_{3}(y) ; w_{3}(y) ; r_{2}(y) ; w_{2}(x) ; w_{2}(y) ; \\)</p><p>Which of the following transaction schedules is/are conflict equivalent to \\( \\text{S} \\)?</p></div><br><br><b>GATE CSE 2024 | Set 1 | Question: 36</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( T_{1} T_{2} T_{3} \\)</p>",
            "<p>\\( T_{1} T_{3} T_{2} \\)</p>",
            "<p>\\( T_{3} T_{2} T_{1} \\)</p>",
            "<p>\\( T_{3} T_{1} T_{2} \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( T_{1} T_{3} T_{2} \\)</p>",
            "<p>\\( T_{3} T_{2} T_{1} \\)</p>",
            "<p>\\( T_{3} T_{1} T_{2} \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422806/gate-cse-2024-set-1-question-36\" target=\"_blank\">https://gateoverflow.in/422806/gate-cse-2024-set-1-question-36</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"460850\"></a><div itemprop=\"text\"><p>Consider the database transactions T1 and T2 , and data items X and Y . Which of the schedule(s) is/are conflict serializable?</p><p>\\[ \\begin{array}{|ll|} \\hline&nbsp; \\textbf{Transaction T1}&nbsp; &nbsp;\\\\&nbsp;\\text{R1(X)}&nbsp; \\\\&nbsp; &nbsp;\\text{W1(Y)} \\\\&nbsp; \\text{R1(X)} \\\\&nbsp;\\text{W1(X)} \\\\&nbsp;\\text{COMMIT(T1)} \\\\\\hline \\end{array} \\quad&nbsp;\\begin{array}{|ll|} \\hline&nbsp; \\textbf{Transaction T2}&nbsp; &nbsp;\\\\&nbsp;\\text{W2(X)}&nbsp;\\\\&nbsp;\\text{W2(Y)}&nbsp;\\\\&nbsp;\\text{COMMIT(T2)}&nbsp;&nbsp;\\\\\\hline&nbsp;\\end{array}  \\]</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 43</b></p>",
          "type": "single",
          "options": [
            "<p>&nbsp;R1(X), W2(X), W1(Y), W2(Y), R1(X), W1(X), COMMIT(T2), COMMIT(T1)&nbsp;</p>",
            "<p>W2(X), R1(X), W2(Y), W1(Y), R1(X), COMMIT(T2), W1(X), COMMIT(T1)&nbsp;</p>",
            "<p>R1(X), W1(Y), W2(X), W2(Y), R1(X), W1(X), COMMIT(T1), COMMIT(T2)&nbsp;</p>",
            "<p>W2(X), R1(X), W1(Y), W2(Y), R1(X), COMMIT(T2), W1(X), COMMIT(T1)<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>W2(X), R1(X), W2(Y), W1(Y), R1(X), COMMIT(T2), W1(X), COMMIT(T1)&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460850/gate-cse-2025-set-2-question-43\" target=\"_blank\">https://gateoverflow.in/460850/gate-cse-2025-set-2-question-43</a></p>"
        }
      ]
    }
  ]
});
