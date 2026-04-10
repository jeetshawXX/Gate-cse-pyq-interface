window.__examLoadCallback({
  "title": "Database_Management_System - Relational_Algebra",
  "duration": 94,
  "sections": [
    {
      "name": "Relational_Algebra",
      "questions": [
        {
          "id": 1,
          "question": "<p>The relation schema, Person(pid,city), describes the city of residence for\nevery person uniquely identified by pid. The following relational algebra operators\nare available: selection, projection, cross product, and rename.<br><br>\nTo find the list of cities where at least 3 persons reside, using the above operators,\nthe minimum number of cross product operations that must be used is <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422862/gate-cse-2024-set-2-question-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following three relations in a relational database.<br>\\(Employee(eId, Name), Brand (bId, bName), Own(eId ,bId)\\)<br>Which of the following relational algebra expressions return the set of \\(eIds\\) who own all the brands? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(  \\Pi _{eId}(\\Pi _{eId,bId}(Own)/\\Pi _{bId}(Brand))\\)</p>",
            "<b>B.</b> <p>\\(  \\Pi _{eId}(Own)-\\Pi _{eId}\\left ((\\Pi _{eId}(Own) \\times \\Pi _{bId}(Brand) )-\\Pi _{eId,bId}(Own)  \\right )\\)</p>",
            "<b>C.</b> <p>\\(\\Pi _{eId}(\\Pi _{eId,bId}(Own)/\\Pi _{bId}(Own))  \\)</p>",
            "<b>D.</b> <p>\\( \\Pi _{eId}\\left ((\\Pi _{eId}(Own) \\times \\Pi _{bId}(Own) )/\\Pi _{bId}(Brand)  \\right ) \\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(  \\Pi _{eId}(\\Pi _{eId,bId}(Own)/\\Pi _{bId}(Brand))\\)</p>",
            "<b>B.</b> <p>\\(  \\Pi _{eId}(Own)-\\Pi _{eId}\\left ((\\Pi _{eId}(Own) \\times \\Pi _{bId}(Brand) )-\\Pi _{eId,bId}(Own)  \\right )\\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371921/Gate-cse-2022-question-15#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The following relation records the age of 500 employees of a company, where empNo ( indicating the employee number) is the key:\n<br><br>\n\\(empAge(\\underline{empNo},age)\\)<br><br>\nConsider the following relational algebra expression:\n<br><br>\n\\(\\Pi_{empNo}(empAge \\Join_{(age &gt; age1)} \\rho_{empNo1,age1}(empAge))\\)<br><br>\nWhat does the above expression generate? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Employee numbers of only those employees whose age is the maximum</p>",
            "<b>B.</b> <p>Employee numbers of only those employees whose age is more than the age of exactly one other employee</p>",
            "<b>C.</b> <p>Employee numbers of all employees whose age is not the minimum</p>",
            "<b>D.</b> <p>Employee numbers of all employees whose age is the minimum</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Employee numbers of all employees whose age is not the minimum</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357424/gate-cse-2021-set-1-question-27#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following relation P(X, Y, Z), Q(X, Y, T) and R(Y, V):\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Algebra\\q55_cdc2944f.jpg\"><br>How many tuples will be returned by the following relational algebra query?  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Algebra\\q55a_38366a3a.jpg\"><br>Answer:______ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302793/gate2019-cs-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the relations r(A, B) and s(B, C), where s.B is a primary key and r.B is a foreign key referencing s.B. Consider the query<br> \\(Q:r \\Join (\\sigma _{B\\lt 5}(s))\\) <br> Let LOJ denote the natural left outer-join operation. Assume that r and s contain no null values. <br>\nWhich one of the following queries is NOT equivalent to Q? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma _{B \\lt 5}(r\\Join s)\\)</p>",
            "<b>B.</b> <p>\\(\\sigma _{B\\lt 5}(r LOJ s)\\)</p>",
            "<b>C.</b> <p>\\(r LOJ(\\sigma _{B\\lt 5}(s))\\)</p>",
            "<b>D.</b> <p>\\(\\sigma _{B\\lt 5}(r) LOJ s\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(r LOJ(\\sigma _{B\\lt 5}(s))\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204115/gate2018-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a database that has the relation schema CR (StudentName, CourseName). An\ninstance of the schema CR is as given below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Algebra\\q53_8cbe5db4.jpg\"><br> The following query is made on the database <br><br>\\(T1\\leftarrow \\pi _{CourseName}(\\sigma _{StudentName='SA'}(CR))\\)<br>\\( T2\\leftarrow CR\\div T1\\) <br><br>The number of rows in T2 is ____________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118329/gate2017-1-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Given the relations<br>employee (name, salary, dept-no), and<br>\ndepartment (dept-no, dept-name,address),<br>\nWhich of the following queries cannot be expressed using the basic relational algebra operations \\(\\left(\\sigma, \\pi,\\times ,\\Join, \\cup, \\cap,-\\right)\\)? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Department address of every employee</p>",
            "<b>B.</b> <p>Employees whose name is the same as their department name</p>",
            "<b>C.</b> <p>The sum of all employees' salaries</p>",
            "<b>D.</b> <p>All employees of a given department</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The sum of all employees' salaries</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/647/gate2000-1-23-isro2016-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the join of a relation R with a relation S. If R has m tuples and S has n tuples then the maximum and minimum sizes of the join respectively are <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>m+n and 0</p>",
            "<b>B.</b> <p>mn and 0</p>",
            "<b>C.</b> <p>m+n and |m-n|</p>",
            "<b>D.</b> <p>mn and m+n</p>"
          ],
          "correct_answer": "<b>B.</b> <p>mn and 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1471/gate1999-1-18-isro2016-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>Consider the relational schema given below, where eId of the relation dependentis a foreign key referring to empId of the relation employee. Assume that every employee has at least one associated dependent in the dependent relation. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Algebra\\q30_1c9e79a8.jpg\">  <br>\nThe above query evaluates to the set of empIds of employees whose age is greater than that of <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
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
          "id": 11,
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
          "question": "<p>Consider the following relations A, B and C:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Algebra\\q50_b1b0feea.jpg\"> <br>How many tuples does the result of the following relational algebra expression contain? Assume\nthat the schema of A\\(\\cup\\)B is the same as that of A. <br>\\((A\\cup B)\\bowtie _{A.Id \\gt 40 \\vee C.Id \\lt 15}C\\) <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "id": 14,
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
          "id": 15,
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
          "id": 16,
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
          "id": 17,
          "question": "<p>The join operation can be defined as <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a cartesian product of two relations followed by a selection</p>",
            "<b>B.</b> <p>a cartesian product of two relations</p>",
            "<b>C.</b> <p>a union of two relations followed by cartesian product of the two relations</p>",
            "<b>D.</b> <p>a union of two relations</p>"
          ],
          "correct_answer": "<b>A.</b> <p>a cartesian product of two relations followed by a selection</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49914/isro2008-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Consider the following relational schema:<pre><code>Student(school-id,sch-roll-no,sname,saddress)\nSchool(school-id,sch-name,sch-address,sch-phone)\nEnrolment(school-id,sch-roll-no,erollno,examname)\nExamResult(erollno,examname,marks) </code></pre> <br>Consider the following tuple relational calculus query. <br> \\(\\begin{array}{l} \\{t \\mid \\exists E \\in \\text { Enrolment } t=E \\text { .school-id } \\\\ \\wedge \\mid\\{x \\mid x \\in \\text { Enrolment } \\wedge x . \\text { school-id }=t \\wedge(\\exists B \\in \\text { ExamResult } B . \\text { erollno }=x . \\text { erollno } \\wedge B \\\\ \\text { examname }=x . \\text { examname } \\wedge B . \\text { marks }&gt;35)\\}|\\div|\\{x \\mid x \\in \\text { Enrolment } \\wedge x . \\text { school-id }=t\\} \\mid \\\\ * 100&gt;35\\} \\end{array}\\)<br><br>If a student needs to score more than 35 marks to pass an exam, what does the query return? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The empty set</p>",
            "<b>B.</b> <p>schools with more than 35% of its students enrolled in some exam or the other</p>",
            "<b>C.</b> <p>schools with a pass percentage above 35% over all exams taken together</p>",
            "<b>D.</b> <p>schools with a pass percentage above 35% over each exam</p>"
          ],
          "correct_answer": "<b>C.</b> <p>schools with a pass percentage above 35% over all exams taken together</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3389/gate2008-it-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Let R and S be two relations with the following schema<br><br>\nR (\\(\\underline{P},\\underline{Q}\\),R1,R2,R3)<br><br>\nS (\\(\\underline{P},\\underline{Q}\\),S1,S2)<br><br>\nWhere {P, Q} is the key for both schemas. Which of the following queries are\nequivalent? <br><br> I. \\( \\Pi _{P}(R\\Join S)\\) <br> II. \\(\\Pi _{p}(R)\\Join \\Pi _{P}(S)\\)<br> III. \\(\\Pi _{P}(\\Pi _{P,Q}(R)\\cap \\Pi _{P,Q}(S))\\)<br> IV. \\(\\Pi _{P}(\\Pi _{P,Q}(R)-(\\Pi _{P,Q}(R)-\\Pi _{P,Q}(S)))\\) <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only I and II</p>",
            "<b>B.</b> <p>Only I and III</p>",
            "<b>C.</b> <p>Only I, II and III</p>",
            "<b>D.</b> <p>Only I, III and IV</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Only I, III and IV</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/491/gate2008-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Which operation is used to extract specified columns from a table? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Project</p>",
            "<b>B.</b> <p>Join</p>",
            "<b>C.</b> <p>Extract</p>",
            "<b>D.</b> <p>Substitute</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Project</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49532/isro2007-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Consider the following relation schemas :<br>\nb-Schema = (b-name, b-city, assets)<br>\na-Schema = (a-num, b-name, bal)<br>\nd-Schema = (c-name, a-number)<br>\nLet branch, account and depositor be respectively instances of the above schemas. Assume that account and depositor relations are much bigger than the branch relation.<br>Consider the following query:<br>\\(\\Pi _{c-name}(\\sigma _{b-city=\"Agra\" \\wedge bal \\lt 0} (branch \\Join (account \\Join depositor)))\\)\n<br>Which one of the following queries is the most efficient version of the above query ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Pi _{c-name} (\\sigma_{bal \\lt 0} (\\sigma_{b-city=\"Agra\"} branch \\Join account) \\Join depositor)\\)</p>",
            "<b>B.</b> <p>\\(\\Pi _{c-name} (\\sigma_{b-city=\"Agra\"} branch \\Join (\\sigma_{bal \\lt 0} account \\Join depositor)\\)</p>",
            "<b>C.</b> <p>\\(\\Pi _{c-name} ((\\sigma_{b-city=\"Agra\"} branch \\Join \\sigma_{b-city=\"Agra\" \\wedge bal \\lt 0} account) \\Join depositor)\\)</p>",
            "<b>D.</b> <p>\\(\\Pi _{c-name} (\\sigma_{b-city=\"Agra\"} branch \\Join( \\sigma_{b-city=\"Agra\" \\wedge bal \\lt 0} account \\Join depositor))\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Pi _{c-name} (\\sigma_{bal \\lt 0} (\\sigma_{b-city=\"Agra\"} branch \\Join account) \\Join depositor)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3513/gate2007-it-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Consider a selection of the form \\(\\sigma_{A\\leq 100} (r)\\), where r is a relation with 1000 tuples. Assume that the attribute values for A among the tuples are uniformly distributed in the interval [0, 500]. Which one of the following options is the best estimate of the number of tuples returned by the given selection query ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>50</p>",
            "<b>B.</b> <p>100</p>",
            "<b>C.</b> <p>150</p>",
            "<b>D.</b> <p>200</p>"
          ],
          "correct_answer": "<b>D.</b> <p>200</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3510/gate2007-it-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Information about a collection of students is given by the relation studinfo(\\(\\underline{studId}\\), name, sex). The relation enroll(studId, courseId) gives which student has enrolled for (or taken) what course(s). Assume that every course is taken by at least one male and at least one female student. What does the following relational algebra expression represent?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Algebra\\q59_39d5133d.jpg\"><br> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Courses in which all the female students are enrolled.</p>",
            "<b>B.</b> <p>Courses in which a proper subset of female students are enrolled.</p>",
            "<b>C.</b> <p>Courses in which only male students are enrolled.</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Courses in which a proper subset of female students are enrolled.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2428/gate2007-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Consider the relations r1(P, Q, R) and r2(R, S, T) with primary keys P and R respectively. The relation \\(r_{1}\\) contains 2000 tuples and \\(r_{2}\\) contains 2500 tuples. The maximum size of the join \\(r_{1} \\Join r_{2}\\) is : <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2000</p>",
            "<b>B.</b> <p>2500</p>",
            "<b>C.</b> <p>4500</p>",
            "<b>D.</b> <p>5000</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2000</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3553/gate2006-it-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Let r be a relation instance with schema R = (A, B, C, D). We define \\(r_{1}=\\Pi _{A,B,C}(R)\\) and \\(r_{2}=\\Pi _{A,D}(R)\\). Let \\(s=r_1*r_2\\) where * denotes natural join. Given that the decomposition of r into \\(r_1\\) and \\(r_2\\) is lossy, which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S\\subset r\\)</p>",
            "<b>B.</b> <p>\\(r\\cup S=r\\)</p>",
            "<b>C.</b> <p>\\(r\\subset S\\)</p>",
            "<b>D.</b> <p>\\(r*S=S\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(r\\subset S\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1366/gate2005-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>Consider the relation Student (\\(\\underline{name}\\), sex, marks), where the primary key is shown underlined,\npertaining to students in a class that has at least one boy and one girl. What does the following\nrelational algebra expression produce)\n(Note: \\(\\rho\\) is the rename operator).  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Relational_Algebra\\q51_5155e252.jpg\"><br>  The condition in join is \"\\((sex=female ^\\wedge x=male ^\\wedge marks\\leq m)\\)\" <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>names of girl students with the highest marks</p>",
            "<b>B.</b> <p>names of girl students with more marks than some boy student</p>",
            "<b>C.</b> <p>names of girl students with marks not less than some boy student</p>",
            "<b>D.</b> <p>names of girl students with more marks than all the boy students</p>"
          ],
          "correct_answer": "<b>D.</b> <p>names of girl students with more marks than all the boy students</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1047/gate2004-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Let R1(\\(\\underline{A}\\),B,(C)) and R2(\\(\\underline{D}\\),E) be two relation schema, where the primary keys are shown\nunderlined, and let C be a foreign key in R1 referring to R2 . Suppose there is no violation of the\nabove referential integrity constraint in the corresponding relation instances r1 and r2 . Which one of\nthe following relational algebra expressions would necessarily produce an empty relation? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Pi _{D}(r2)-\\Pi _{C}(r1)\\)</p>",
            "<b>B.</b> <p>\\(\\Pi _{C}(r1)-\\Pi _{D}(r2)\\)</p>",
            "<b>C.</b> <p>\\(\\Pi _{D}(r1\\Join _{C\\neq D}r2 )\\)</p>",
            "<b>D.</b> <p>\\(\\Pi _{C}(r1\\Join _{C=D}r2 )\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Pi _{C}(r1)-\\Pi _{D}(r2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1010/gate2004-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>With regard to the expressive power of the formal relational query languages,\nwhich of the following statements is true ? <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Relational algebra is more powerful than relational calculus.</p>",
            "<b>B.</b> <p>Relational algebra has the same power as relational calculus.</p>",
            "<b>C.</b> <p>Relational algebra has the same power as safe relational calculus.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Relational algebra has the same power as safe relational calculus.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/825/gate2002-1-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>Given the relations <br>\nemployee (name, salary, dept-no), and<br>\ndepartment (dept-no, dept-name,address),<br>\nWhich of the following queries cannot be expressed using the basic relational algebra operations \\(\\left(\\sigma, \\pi,\\times ,\\Join, \\cup, \\cap,-\\right)\\)? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Department address of every employee</p>",
            "<b>B.</b> <p>Employees whose name is the same as their department name</p>",
            "<b>C.</b> <p>The sum of all employees' salaries</p>",
            "<b>D.</b> <p>All employees of a given department</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The sum of all employees' salaries</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/647/gate2000-1-23-isro2016-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>Consider the join of a relation R with a relation S. If R has m tuples and S has n tuples then the maximum and minimum sizes of the join respectively are <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>m+n and 0</p>",
            "<b>B.</b> <p>mn and 0</p>",
            "<b>C.</b> <p>m+n and |m-n|</p>",
            "<b>D.</b> <p>mn and m+n</p>"
          ],
          "correct_answer": "<b>B.</b> <p>mn and 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1471/gate1999-1-18-isro2016-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>Which of the following query transformations (i.e., replacing the l.h.s. expression by the r.h.s expression) is incorrect? \\(R_1\\) and \\(R_2\\) are relations, \\(C_1\\) and \\(C_2\\) are selection conditions and \\(A_1\\) and \\(A_1\\) are attributes of \\(R_1\\). <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma_{C_1} \\left(\\sigma_{C_2}\\left(R_1\\right)\\right) \\to \\sigma_{C_2} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right)\\)</p>",
            "<b>B.</b> <p>\\(\\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right) \\to \\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right)\\)</p>",
            "<b>C.</b> <p>\\(\\sigma_{C_1} \\left(R_1 \\cup R_2\\right) \\to \\sigma_{C_1}\\left(R_1\\right) \\cup \\sigma_{C_1} \\left(R_2\\right)\\)</p>",
            "<b>D.</b> <p>\\(\\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\to \\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\pi_{A_1} \\left(\\sigma_{C_1}\\left(R_1\\right)\\right) \\to \\sigma_{C_1} \\left(\\pi_{A_1}\\left(R_1\\right)\\right)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1692/gate1998-2-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Given two union compatible relations \\(R_1(A, B)\\) and \\(R_2 (C, D)\\), what is the result of the operation \\(R_1 \\Join_{ A = C \\wedge B = D} R_2\\)? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(R_1 \\cup R_2\\)</p>",
            "<b>B.</b> <p>\\(R_1 \\times R_2\\)</p>",
            "<b>C.</b> <p>\\(R_1- R_2\\)</p>",
            "<b>D.</b> <p>\\(R_1 \\cap R_2\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(R_1 \\cap R_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1670/gate1998-1-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>Let r and s be two relations over the relation schemes R and S respectively, and\nlet A be an attribute in R. Then the relational algebra expression \\(\\sigma _{A=a}(r\\Join s)\\) is always equal to : <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sigma _{A=a}(r)\\)</p>",
            "<b>B.</b> <p>r</p>",
            "<b>C.</b> <p>\\(\\sigma _{A=a}(r)\\Join s\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\sigma _{A=a}(r)\\Join s\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/718/gate2001-1-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Suppose the adjacency relation of vertices in a graph is represented in a table Adj(X,Y).  Which of the following queries cannot be expressed by a relational algebra\nexpression of constant length ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>List all vertices adjacent to a given vertex.</p>",
            "<b>B.</b> <p>List all vertices which have self loops</p>",
            "<b>C.</b> <p>List all vertices which belong to cycles of less than three vertices</p>",
            "<b>D.</b> <p>List all vertices reachable from a given vertex</p>"
          ],
          "correct_answer": "<b>D.</b> <p>List all vertices reachable from a given vertex</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/717/gate2001-1-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
