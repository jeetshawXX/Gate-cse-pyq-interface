window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 7",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Given the following schema:<br>\nemployees(emp-id, first-name, last-name, hire-date, dept-id, salary)  <br>\ndepartments(dept-id, dept-name, manager-id, location-id)<br>\nYou want to display the last names and hire dates of all latest hires in their respective\ndepartments in the location ID 1700. You issue the following query: <br><pre><code> SQL&gt;SELECT last-name, hire-date\nFROM employees\nWHERE (dept-id, hire-date) IN\n(SELECT dept-id, MAx(hire-date)\nFROM employees JOIN departments USING(dept-id)\nWHERE location-id = 1700\nGROUP BY dept-id); </code></pre>\nWhat is the outcome? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It executes but does not give the correct result</p>",
            "<b>B.</b> <p>It executes and gives the correct result.</p>",
            "<b>C.</b> <p>It generates an error because of pairwise comparison.</p>",
            "<b>D.</b> <p>It generates an error because the GROUP BY clause cannot be used with table joins in a sub-query</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It executes and gives the correct result.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1934/gate2014-1-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Given the following two statements: <br>\nS1: Every table with two single-valued attributes is in 1NF, 2NF, 3NF and BCNF <br>\nS2 : AB\\(\\rightarrow\\)C, D\\(\\rightarrow\\) E, E\\(\\rightarrow\\)C is a minimal cover for the set of functional dependencies AB\\(\\rightarrow\\)C, D\\(\\rightarrow\\)E, AB\\(\\rightarrow\\) E,E\\(\\rightarrow\\)C. <br>\nWhich one of the following is CORRECT? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is TRUE and S2 is FALSE</p>",
            "<b>B.</b> <p>Both S1 and S2 are TRUE.</p>",
            "<b>C.</b> <p>S1 is FALSE and S2 is TRUE.</p>",
            "<b>D.</b> <p>Both S1 and S2 are FALSE.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>S1 is TRUE and S2 is FALSE</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1797/gate2014-1-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
          "question": "<p>Given the following statements:<br>\nS1: A foreign key declaration can always be replaced by an equivalent check\nassertion in SQL <br>\nS2: Given the table R(a,b,c) where a and b together form the primary key, the following is a\nvalid table definition. <br>\nCREATE TABLE S ( <br>\na INTEGER, <br>\nd INTEGER, <br>\ne INTEGER, <br>\nPRIMARY KEY (d), <br>\nFOREIGN KEY (a) references R) <br>\nWhich one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is TRUE and S2 is a FALSE</p>",
            "<b>B.</b> <p>Both S1 and S2 are TRUE</p>",
            "<b>C.</b> <p>S1 is FALSE and S2 is a TRUE</p>",
            "<b>D.</b> <p>Both S1 and S2 are FALSE</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both S1 and S2 are FALSE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1789/gate2014-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the relation scheme R = (E, F, G, H, I, J, K, L, M, N) and the set of functional\ndependencies <br> {{E,F}\\(\\rightarrow\\){G}, {F}\\(\\rightarrow\\){I,J}, {E,H}\\(\\rightarrow\\){K,L},  {K}\\(\\rightarrow\\){M},\n{L}\\(\\rightarrow\\){N} }  on R. What is the key for R? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{E, F}</p>",
            "<b>B.</b> <p>{E, F, H}</p>",
            "<b>C.</b> <p>{E, F, H, K, L}</p>",
            "<b>D.</b> <p>{E}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{E, F, H}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1788/gate2014-1-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Relation R has eight attributes ABCDEFGH. Fields of R contain only atomic values.  <br>  \\(F=\\{CH\\rightarrow G, A\\rightarrow BC,B\\rightarrow CFH,E\\rightarrow A,F\\rightarrow EG\\}\\)  is a set of functional dependencies (FDs) so that \\(F^{+}\\) is\nexactly the set of FDs that hold for R. <br>The relation R is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in 1NF, but not in 2NF.</p>",
            "<b>B.</b> <p>in 2NF, but not in 3NF.</p>",
            "<b>C.</b> <p>in 3NF, but not in BCNF.</p>",
            "<b>D.</b> <p>in BCNF</p>"
          ],
          "correct_answer": "<b>A.</b> <p>in 1NF, but not in 2NF.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43290/gate2013-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Relation R has eight attributes ABCDEFGH. Fields of R contain only atomic values.  <br>  \\(F=\\{CH\\rightarrow G, A\\rightarrow BC,B\\rightarrow CFH,E\\rightarrow A,F\\rightarrow EG\\}\\)  is a set of functional dependencies (FDs) so that \\(F^{+}\\) is\nexactly the set of FDs that hold for R. <br>How many candidate keys does the relation R have? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1558/gate2013-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following relational schema.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q35_e9b3f125.jpg\"> <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II, III and IV</p>",
            "<b>B.</b> <p>I, II and III only</p>",
            "<b>C.</b> <p>I, II and IV only</p>",
            "<b>D.</b> <p>II, III and IV only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I, II, III and IV</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1546/gate2013-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>An index is clustered, if <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it is on a set of fields that form a candidate key.</p>",
            "<b>B.</b> <p>it is on a set of fields that include the primary key</p>",
            "<b>C.</b> <p>the data records of the file are organized in the same order as the data entries of the index.</p>",
            "<b>D.</b> <p>the data records of the file are organized not in the same order as the data entries of the index.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the data records of the file are organized in the same order as the data entries of the index.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1437/gate2013-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following relations A, B and C:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q50_b1b0feea.jpg\"> <br>How many tuples does the result of the following SQL query contain?<pre><code> SELECT A.Id\nFROM A\nWHERE A.Age &gt; ALL (SELECT B.Age\nFROM B\nWHERE B.Name = 'Arun') </code></pre> <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>0</p>",
            "<b>D.</b> <p>1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43313/gate2012-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following relations A, B and C:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q50_b1b0feea.jpg\"> <br>How many tuples does the result of the following relational algebra expression contain? Assume\nthat the schema of A\\(\\cup\\)B is the same as that of A. <br>\\((A\\cup B)\\bowtie _{A.Id \\gt 40 \\vee C.Id \\lt 15}C\\) <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>9</p>"
          ],
          "correct_answer": "<b>A.</b> <p>7</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2180/gate2012-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Suppose R1(A, B) and R2(C, D) are two relation schemas. Let r1 and r2 be the corresponding\nrelation instances. B is a foreign key that refers to C in R2. If data in r1 and r2 satisfy referential\nintegrity constraints, which of the following is ALWAYS TRUE? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Pi_{B}(r_{1})- \\Pi_{C}(r_{2}) =\\phi\\)</p>",
            "<b>B.</b> <p>\\(\\Pi_{C}(r_{1})- \\Pi_{B}(r_{2}) =\\phi\\)</p>",
            "<b>C.</b> <p>\\(\\Pi_{B}(r_{1})= \\Pi_{C}(r_{2})\\)</p>",
            "<b>D.</b> <p>\\(\\Pi_{B}(r_{1})- \\Pi_{C}(r_{2}) \\neq \\phi\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Pi_{B}(r_{1})- \\Pi_{C}(r_{2}) =\\phi\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2151/gate2012-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
