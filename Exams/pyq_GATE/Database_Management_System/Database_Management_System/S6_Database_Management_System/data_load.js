window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 6",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider the following relations: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51_2717e41f.jpg\"><br>  Consider the following SQL query. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q51a_e0f73a11.jpg\"><br>The number of rows that will be returned by the SQL query is _____________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8225/gate2015-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider an Entity-Relationship (ER) model in which entity sets E1 and E2 are connected by an m : n relationship R12. E1 and E3 are connected by a 1 : n (1 on the side of E1 and n on the side of E3) relationship R13. <br><br>E1 has two single-valued attributes a11 and a12 of which a11 is the key attribute. E2 has two single-valued attributes a21 and a22 of which a21 is the key attribute. E3 has two single-valued attributes a31 and a32 of which a31 is the key attribute. The relationships do not have any attributes. <br><br> If a relational model is derived from the above ER model, then the minimum number of relations that would be generated if all the relations are in 3NF is _______. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8309/gate2015-1-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider the following relational schema: <br>\nEmployee (empId, empName, empDept ) <br>\nCustomer (custId,custName, salesRepId, rating)<br>\nSalesRepId is a foreign key referring to empId of the employee relation. Assume that each\nemployee makes a sale to at least one customer. What does the following query return?<br><pre><code>SELECT empName \nFROM employee E \n WHERE NOT EXISTS (SELECT custId\nFROM customer C\nWHERE C. salesRepId = E. empId\nAND C. rating &lt; &gt; 'GOOD')</code></pre> <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Names of all the employees with at least one of their customers having a 'GOOD' rating</p>",
            "<b>B.</b> <p>Names of all the employees with at most one of their customers having a 'GOOD' rating.</p>",
            "<b>C.</b> <p>Names of all the employees with none of their customers having a 'GOOD' rating.</p>",
            "<b>D.</b> <p>Names of all the employees with all their customers having a 'GOOD' rating.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Names of all the employees with all their customers having a 'GOOD' rating.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2089/gate2014-3-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the relational schema given below, where eId of the relation dependentis a foreign key referring to empId of the relation employee. Assume that every employee has at least one associated dependent in the dependent relation. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q30_1c9e79a8.jpg\">  <br>\nThe above query evaluates to the set of empIds of employees whose age is greater than that of <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>some dependent</p>",
            "<b>B.</b> <p>all dependents</p>",
            "<b>C.</b> <p>some of his/her dependents</p>",
            "<b>D.</b> <p>all of his/her dependents</p>"
          ],
          "correct_answer": "<b>D.</b> <p>all of his/her dependents</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2064/gate2014-3-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
          "question": "<p>A prime attribute of a relation scheme R is an attribute that appears <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in all candidate keys of R.</p>",
            "<b>B.</b> <p>in some candidate key of R.</p>",
            "<b>C.</b> <p>in a foreign keys of R</p>",
            "<b>D.</b> <p>only in the primary key of R.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>in some candidate key of R.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2056/gate2014-3-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>What is the optimized version of the relation algebra expression  \\(\\pi _{A1}(\\pi _{A2}(\\sigma _{F1}(\\sigma_{F2}(r))))\\) , where A1, A2 are sets of attributes in r with \\(A_{1}\\subset A_{2}\\) and F1, F2 are Boolean expressions based on the attributes in r? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\pi _{A1}(\\sigma_{(F1 \\wedge F2)}(r))\\)</p>",
            "<b>B.</b> <p>\\(\\pi _{A1}(\\sigma_{(F1\\vee F2)}(r))\\)</p>",
            "<b>C.</b> <p>\\(\\pi _{A2}(\\sigma_{(F1\\wedge F2)}(r))\\)</p>",
            "<b>D.</b> <p>\\(\\pi _{A2}(\\sigma_{(F1 \\vee F2)}(r))\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\pi _{A1}(\\sigma_{(F1 \\wedge F2)}(r))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2055/gate2014-3-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>SQL allows duplicate tuples in relations, and correspondingly defines the multiplicity of\ntuples in the result of joins. Which one of the following queries always gives the same answer\nas the nested query shown below: <br>\nSelect * from R where a in (select S. a from S) <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Select R. * from R, S where R. a=S. a</p>",
            "<b>B.</b> <p>Select distinct R. * from R,S where R. a=S. a</p>",
            "<b>C.</b> <p>Select R. * from R, (select distinct a from S) as S1 where R. a=S1.a</p>",
            "<b>D.</b> <p>Select R. * from R, S where R.a = S. a and is unique R</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Select R. * from R, (select distinct a from S) as S1 where R. a=S1.a</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2021/gate2014-2-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a join (relation algebra) between relations r(R)and s(S) using the nested loop\nmethod. There are 3 buffers each of size equal to disk block size, out of which one buffer is\nreserved for intermediate results. Assuming size(r(R))\\(\\lt\\)size(s(S)), the join will have fewer\nnumber of disk block accesses if <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>relation r(R) is in the outer loop.</p>",
            "<b>B.</b> <p>relation s(S) is in the outer loop</p>",
            "<b>C.</b> <p>join selection factor between r(R) and s(S) is more than 0.5.</p>",
            "<b>D.</b> <p>join selection factor between r(R) and s(S) is less than 0.5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>relation r(R) is in the outer loop.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1989/gate2014-2-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following schedule S of transactions T1, T2, T3, T4: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q29_87119e6e.jpg\"> <br> Which one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
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
          "id": 14,
          "question": "<p>Given an instance of the STUDENTS relation as shown below <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q22_4febd6f8.jpg\"><br> For (StudentName, StudentAge) to be a key for this instance, the value x should NOT be\nequal to_______. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1980/gate2014-2-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>The maximum number of super keys for the relation schema R (E, F, G, H) with E as the key\nis __________. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1978/gate2014-2-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
