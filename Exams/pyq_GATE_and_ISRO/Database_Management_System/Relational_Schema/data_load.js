window.__examLoadCallback({
  "title": "Database_Management_System - Relational_Schema",
  "duration": 72,
  "sections": [
    {
      "name": "Relational_Schema",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following relational schema along with all the functional dependencies that hold on them.  <br><br>\n\\(\nR1(A, B, C, D, E): \\{ D \\to E, EA \\to B, EB \\to C \\}\n\\)<br>\n\\(\nR2(A, B, C, D): \\{ A \\to D, A \\to B, C \\to A \\}\n\\)<br><br>\nWhich of the following statement(s) is/are TRUE? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(R1 \\) is in 3NF</p>",
            "<b>B.</b> <p>\\(R2 \\) is in 3NF</p>",
            "<b>C.</b> <p>\\(R1 \\) is NOT in 3NF</p>",
            "<b>D.</b> <p>\\(R2 \\) is NOT in 3NF</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>\\(R1 \\) is NOT in 3NF</p>",
            "<b>D.</b> <p>\\(R2 \\) is NOT in 3NF</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460799/gate-cse-2025-set-2-question-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A functional dependency \\(F:X \\rightarrow Y\\) is termed as a useful functional dependency if\nand only if it satisfies all the following three conditions:<br><br>\n\\(X\\) is not the empty set.\n\\(Y\\) is not the empty set.\nIntersection of \\(X\\) and \\(Y\\) is the empty set.<br><br>\nFor a relation \\(R\\) with 4 attributes, the total number of possible useful functional\ndependencies is ______ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422851/gate-cse-2024-set-2-question-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The symbol \\( \\rightarrow \\) indicates functional dependency in the context of a relational database. Which of the following options is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\( (X, Y) \\rightarrow(Z, W) \\text { implies } X \\rightarrow(Z, W)  \\)</p>",
            "<b>B.</b> <p>\\( (X, Y) \\rightarrow(Z, W) \\text { implies }(X, Y) \\rightarrow Z  \\)</p>",
            "<b>C.</b> <p>\\( ((X, Y) \\rightarrow Z \\text { and } W \\rightarrow Y) \\text { implies }(X, W) \\rightarrow Z  \\)</p>",
            "<b>D.</b> <p>\\( (X \\rightarrow Y \\text { and } Y \\rightarrow Z) \\text { implies } X \\rightarrow Z \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\( (X, Y) \\rightarrow(Z, W) \\text { implies }(X, Y) \\rightarrow Z  \\)</p>",
            "<b>C.</b> <p>\\( ((X, Y) \\rightarrow Z \\text { and } W \\rightarrow Y) \\text { implies }(X, W) \\rightarrow Z  \\)</p>",
            "<b>D.</b> <p>\\( (X \\rightarrow Y \\text { and } Y \\rightarrow Z) \\text { implies } X \\rightarrow Z \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422808/gate-cse-2024-set-1-question-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which one of the options given below refers to the degree (or arity) of a relation in\nrelational database systems? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Number of attributes of its relation schema.</p>",
            "<b>B.</b> <p>Number of tuples stored in the relation.</p>",
            "<b>C.</b> <p>Number of entries in the relation.</p>",
            "<b>D.</b> <p>Number of distinct domains of its relation schema.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Number of attributes of its relation schema.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399306/gate-cse-2023-question-6#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider a relation \\(R( A, B, C, D, E )\\) with the following three functional dependencies.<br>\\(AB \\rightarrow C;BC  \\rightarrow D; C \\rightarrow E;\\)<br>\nThe number of superkeys in the relation \\(R\\) is . <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371915/Gate-cse-2022-question-21#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following statements S1 and S2 about the relational data model:<br>\n<br>\nS1: A relation scheme can have at most one foreign key.<br>\nS2: A foreign key in a relation scheme R cannot be used to refer to tuples of R.<br><br>\nWhich one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are true</p>",
            "<b>B.</b> <p>S1 is true and S2 is false</p>",
            "<b>C.</b> <p>S1 is false and S2 is true</p>",
            "<b>D.</b> <p>Both S1 and S2 are false</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both S1 and S2 are false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357534/gate-cse-2021-set-2-question-6#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the relation \\(R(P,Q,S,T,X,Y,Z,W)\\) with the following functional dependencies.\n<br><br>\\(PQ\\rightarrow X;\\quad P\\rightarrow YX;\\quad Q\\rightarrow Y; \\quad Y\\rightarrow ZW\\)\n<br><br>\nConsider the decomposition of the relation R into the constituent relations according to the following two decomposition schemes.\n<br><br>\n\\(D1:\\quad R=[(P,QS,T);\\;(P,T,X);\\;(Q,Y);\\;(Y,Z,W)]\\)<br>\n\\(D2:\\quad R=[(P,Q,S);\\;(T,X);\\;(Q,Y);\\;(Y,Z,W)]\\)<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>D1 is a lossless decomposition, but D2 is a lossy decomposition.</p>",
            "<b>B.</b> <p>D1 is a lossy decomposition, but D2 is a lossless decomposition.</p>",
            "<b>C.</b> <p>Both D1 and D2 are lossless decompositions.</p>",
            "<b>D.</b> <p>Both D1 and D2 are lossy decompositions.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>D1 is a lossless decomposition, but D2 is a lossy decomposition.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357418/gate-cse-2021-set-1-question-33#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Immunity of the external schemas (or application programs) to changes in the conceptual scheme is referred to as: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Physical Data Independence</p>",
            "<b>B.</b> <p>Logical Data Independence</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Logical Data Independence</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213535/isro2018-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Considering the following table in a relational database :<br>\\(\\begin{array}{|c|c|c|c|} \\hline \\text { Last Name } &amp; \\text { Rank } &amp; \\text { Room } &amp; \\text { Shift } \\\\ \\hline \\text { Smith } &amp; \\text { Manager } &amp; 234 &amp; \\text { Morning } \\\\ \\hline \\text { Jones } &amp; \\text { Custodian } &amp; 33 &amp; \\text { Afternoon } \\\\ \\hline \\text { Smith } &amp; \\text { Custodian } &amp; 33 &amp; \\text { Evening } \\\\ \\hline \\text { Doe } &amp; \\text { Clerical } &amp; 222 &amp; \\text { Morning } \\\\ \\hline \\end{array}\\)<br>According to the data shown in the table, which of the following could be a candidate key of the table? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{Last Name}</p>",
            "<b>B.</b> <p>{Room}</p>",
            "<b>C.</b> <p>{Shift}</p>",
            "<b>D.</b> <p>{Room, Shift}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{Room, Shift}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213583/isro2018-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>What does a data dictionary will identify? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Field name</p>",
            "<b>B.</b> <p>Field format</p>",
            "<b>C.</b> <p>Field types</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128498/isro2017-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Goals for the design of the logical scheme include <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>avoiding data inconsistency</p>",
            "<b>B.</b> <p>being able to construct query easily</p>",
            "<b>C.</b> <p>being able to access data efficiently</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56039/isro2016-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which of the following is NOT a superkey in a relational schema with attributes\nV,W, X, Y, Z and primary key V Y? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>VXYZ</p>",
            "<b>B.</b> <p>VWXZ</p>",
            "<b>C.</b> <p>VWXY</p>",
            "<b>D.</b> <p>VWXYZ</p>"
          ],
          "correct_answer": "<b>B.</b> <p>VWXZ</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39637/gate2016-1-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
          "id": 16,
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
          "id": 17,
          "question": "<p>Given an instance of the STUDENTS relation as shown below <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Schema\\q22_4febd6f8.jpg\"><br> For (StudentName, StudentAge) to be a key for this instance, the value x should NOT be\nequal to_______. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1980/gate2014-2-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>The maximum number of super keys for the relation schema R (E, F, G, H) with E as the key\nis __________. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1978/gate2014-2-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
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
          "id": 20,
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
          "id": 21,
          "question": "<p>Purpose of 'Foreign Key' in a table is to ensure <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Null Integrity</p>",
            "<b>B.</b> <p>Referential Integrity</p>",
            "<b>C.</b> <p>Domain Integrity</p>",
            "<b>D.</b> <p>Null and Domain Integrity</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Referential Integrity</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47321/isro2009-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>The following functional dependencies are given:<br><br>\n\\(AB\\rightarrow CD,AF\\rightarrow D,DE\\rightarrow F,C\\rightarrow G,F\\rightarrow E,G\\rightarrow A\\)\n<br><br>\nWhich one of the following options is false? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left \\{ CF \\right \\}^{*}=\\left \\{ ACDEFG \\right \\}\\)</p>",
            "<b>B.</b> <p>\\(\\left \\{ BG \\right \\}^{*}=\\left \\{ ABCDG \\right \\}\\)</p>",
            "<b>C.</b> <p>\\(\\left \\{ AF \\right \\}^{*}=\\left \\{ ACDEFG \\right \\}\\)</p>",
            "<b>D.</b> <p>\\(\\left \\{ AB \\right \\}^{*}=\\left \\{ ABCDG \\right \\}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\left \\{ AF \\right \\}^{*}=\\left \\{ ACDEFG \\right \\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1848/gate2006-70#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Consider a relation scheme R=(A,B,C,D,E,H) on which the following functional dependencies hold: {A\\(\\rightarrow\\)B, BC\\(\\rightarrow\\)D, E\\(\\rightarrow\\)C, D\\(\\rightarrow\\)A}. What are the candidate keys of R? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>AE, BE</p>",
            "<b>B.</b> <p>AE, BE, DE</p>",
            "<b>C.</b> <p>AEH, BEH, BCH</p>",
            "<b>D.</b> <p>AEH, BEH, DEH</p>"
          ],
          "correct_answer": "<b>D.</b> <p>AEH, BEH, DEH</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1401/gate2005-78#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>From the following instance of relation schema R(A,B,C), we can conclude that : <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Schema\\q50_e0841df0.jpg\"> <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A functionally determines B and B functionally determines C</p>",
            "<b>B.</b> <p>A functionally determines B and B does not functionally determines C .</p>",
            "<b>C.</b> <p>B does not functionally determines C</p>",
            "<b>D.</b> <p>A does not functionally B and B does not functionally determines.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>B does not functionally determines C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/855/gate2002-2-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Let R = (A, B, C, D, E, F) be a relation scheme with the following dependencies \\(C \\rightarrow F, E \\rightarrow A, EC \\rightarrow D, A \\rightarrow B\\). Which one of the following is a key for R? <br><br><strong>(GATE CSE 1999)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/1477/gate1999-1-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>Consider a schema R(A,B,C,D) and functional dependencies A\\(\\rightarrow\\)B and C\\(\\rightarrow\\)D.\nThen the decomposition of R into R1(AB) and R2(CD) is : <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dependency preserving and lossless join</p>",
            "<b>B.</b> <p>Lossless join but not dependency preserving</p>",
            "<b>C.</b> <p>Dependency preserving but not lossless join</p>",
            "<b>D.</b> <p>Not dependency preserving and not lossless join</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Dependency preserving but not lossless join</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/716/gate2001-1-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
