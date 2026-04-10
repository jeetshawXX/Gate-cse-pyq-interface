window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 10",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>The order of a leaf node in a B+ tree is the maximum number of (value, data\nrecord pointer) pairs it can hold. Given that the block size is 1K bytes, data\nrecord pointer is 7 bytes long, the value field is 9 bytes long and a block pointer\nis 6 bytes long, what is the order of the leaf node? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>63</p>",
            "<b>B.</b> <p>64</p>",
            "<b>C.</b> <p>67</p>",
            "<b>D.</b> <p>68</p>"
          ],
          "correct_answer": "<b>A.</b> <p>63</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1261/gate2007-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which one of the following statements if FALSE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Any relation with two attributes is in BCNF</p>",
            "<b>B.</b> <p>A relation in which every key has only one attribute is in 2NF</p>",
            "<b>C.</b> <p>A prime attribute can be transitively dependent on a key in a 3 NF relation.</p>",
            "<b>D.</b> <p>A prime attribute can be transitively dependent on a key in a BCNF relation.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A prime attribute can be transitively dependent on a key in a BCNF relation.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1260/gate2007-62#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the table employee(empId, name, department, salary) and the two\nqueries Q1 ,Q2 below. Assuming that department 5 has more than one employee,\nand we want to find the employees who get higher salary than anyone in the department 5, which one of the statements is TRUE for any arbitrary employee table?<pre><code>Q1 : Select e.empId\n     From employee e\n     Where not exists\n        (Select * From employee s where s.department = \"5\" and \n                                        s.salary &gt;=e.salary) <br>\nQ2 : Select e.empId\n     From employee e\n     Where e.salary &gt; Any\n    (Select distinct salary From employee s Where s.department =\"5\"</code></pre> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Q1 is the correct query</p>",
            "<b>B.</b> <p>Q2 is the correct query</p>",
            "<b>C.</b> <p>Both Q1 and Q2 produce the same answer.</p>",
            "<b>D.</b> <p>Neither Q1 nor Q2 is the correct query</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Q1 is the correct query</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1259/gate2007-61#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the relation employee(name, sex, supervisorName) with name as the\nkey. supervisorName gives the name of the supervisor of the employee under\nconsideration. What does the following Tuple Relational Calculus query produce? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q60_8949e2c3.jpg\"><br> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Names of employees with a male supervisor.</p>",
            "<b>B.</b> <p>Names of employees with no immediate male subordinates</p>",
            "<b>C.</b> <p>Names of employees with no immediate female subordinates.</p>",
            "<b>D.</b> <p>Names of employees with a female supervisor</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Names of employees with no immediate female subordinates.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1258/gate2007-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Information about a collection of students is given by the relation studinfo(\\(\\underline{studId}\\), name, sex). The relation enroll(studId, courseId) gives which student has enrolled for (or taken) what course(s). Assume that every course is taken by at least one male and at least one female student. What does the following relational algebra expression represent?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q59_39d5133d.jpg\"><br> <br><br><strong>(GATE CSE 2007)</strong></p>",
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
          "id": 6,
          "question": "<p>Which of the following is TRUE about formulae in Conjunctive Normal Form? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>For any formula, there is a truth assignment for which at least half the\nclauses evaluate to true.</p>",
            "<b>B.</b> <p>For any formula, there is a truth assignment for which all the clauses\nevaluate to true.</p>",
            "<b>C.</b> <p>There is a formula such that for each truth assignment, at most one-fourth of\nthe clauses evaluate to true.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>For any formula, there is a truth assignment for which at least half the\nclauses evaluate to true.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1246/gate2007-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider a database with three relation instances shown below. The primary keys for the Drivers and Cars relation are did and cid respectively and the records are stored in ascending order of these primary keys as given in the tables. No indexing is available in the database.<br><br>\n\\(\\overset{\\text{D: Drivers relation}}{\\begin{array}{|c|l|r|c|}\\hline \\textbf{did}&amp; \\textbf{dname}&amp; \\textbf{rating}&amp; \\textbf{age} \\\\\\hline 22&amp; \\text{Karthikeyan}&amp; 7&amp; 25 \\\\ \\hline 29&amp; \\text{Salman}&amp; 1&amp; 33 \\\\ \\hline 31&amp; \\text{Boris}&amp; 8&amp; 55 \\\\\\hline 32&amp; \\text{Amoldt}&amp; 8&amp; 25 \\\\\\hline 58&amp; \\text{Schumacher}&amp; 10&amp; 35 \\\\\\hline 64&amp; \\text{Sachin}&amp; 7&amp; 35 \\\\\\hline 71&amp; \\text{Senna}&amp; 10&amp; 16 \\\\\\hline 74&amp; \\text{Sachin}&amp; 9&amp; 35 \\\\\\hline 85&amp; \\text{Rahul}&amp; 3&amp; 25 \\\\\\hline 95&amp; \\text{Ralph}&amp; 3&amp; 53 \\\\\\hline \\end{array}} \\qquad \\overset{\\text{R: Reserves relation}}{\\begin{array}{|c|c|c|}\\hline \\textbf {did} &amp; \\textbf {Cid} &amp; \\textbf {day} \\\\\\hline 22 &amp; 101 &amp; 10-10-06 \\\\ \\hline 22 &amp; 102 &amp; 10-10-06\\\\ \\hline 22 &amp; 103 &amp; 08-10-06 \\\\\\hline 22 &amp; 104 &amp; 07-10-06 \\\\\\hline 31 &amp; 102 &amp; 10-11-16 \\\\\\hline 31&amp;103 &amp;06-11-16 \\\\\\hline 31 &amp; 104&amp;12-11-16 \\\\\\hline 64 &amp; 101 &amp;05-09-06 \\\\\\hline 64&amp; 102 &amp; 08-09-06 \\\\\\hline 74 &amp; 103 &amp; 08-09-06 \\\\\\hline \\end{array}}\\)<br><br>\n\\(\\overset{\\text{C: Cars relation}}{\\begin{array}{|c|c|c|c|}\\hline \\textbf {Cid} &amp; \\textbf {Cname} &amp; \\textbf{colour} \\\\\\hline 101 &amp; \\text{Renault} &amp; \\text{blue} \\\\ \\hline 102 &amp; \\text{Renault} &amp; \\text{red} \\\\ \\hline 103 &amp; \\text{Ferrari} &amp; \\text{green} \\\\\\hline 104 &amp; \\text{Jaguar} &amp; \\text{red} \\\\\\hline \\end{array}}\\) <br><pre><code> \nselect D.dname\nfrom Drivers D\nwhere D.did in  (\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid = C.cid and C.colour = 'red'\n                  intersect\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid  = C.cid and C.colour = 'green'\n                  )</code></pre><br> Let n be the number of comparisons performed when the above SQL query is optimally executed. If linear search is used to locate a tuple in a relation using primary key, then n lies in the range: <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>36-40</p>",
            "<b>B.</b> <p>44-48</p>",
            "<b>C.</b> <p>60-64</p>",
            "<b>D.</b> <p>100-104</p>"
          ],
          "correct_answer": "<b>B.</b> <p>44-48</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3641/gate2006-it-85\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider a database with three relation instances shown below. The primary keys for the Drivers and Cars relation are did and cid respectively and the records are stored in ascending order of these primary keys as given in the tables. No indexing is available in the database.<br><br>\n\\(\\overset{\\text{D: Drivers relation}}{\\begin{array}{|c|l|r|c|}\\hline \\textbf{did}&amp; \\textbf{dname}&amp; \\textbf{rating}&amp; \\textbf{age} \\\\\\hline 22&amp; \\text{Karthikeyan}&amp; 7&amp; 25 \\\\ \\hline 29&amp; \\text{Salman}&amp; 1&amp; 33 \\\\ \\hline 31&amp; \\text{Boris}&amp; 8&amp; 55 \\\\\\hline 32&amp; \\text{Amoldt}&amp; 8&amp; 25 \\\\\\hline 58&amp; \\text{Schumacher}&amp; 10&amp; 35 \\\\\\hline 64&amp; \\text{Sachin}&amp; 7&amp; 35 \\\\\\hline 71&amp; \\text{Senna}&amp; 10&amp; 16 \\\\\\hline 74&amp; \\text{Sachin}&amp; 9&amp; 35 \\\\\\hline 85&amp; \\text{Rahul}&amp; 3&amp; 25 \\\\\\hline 95&amp; \\text{Ralph}&amp; 3&amp; 53 \\\\\\hline \\end{array}} \\qquad \\overset{\\text{R: Reserves relation}}{\\begin{array}{|c|c|c|}\\hline \\textbf {did} &amp; \\textbf {Cid} &amp; \\textbf {day} \\\\\\hline 22 &amp; 101 &amp; 10-10-06 \\\\ \\hline 22 &amp; 102 &amp; 10-10-06\\\\ \\hline 22 &amp; 103 &amp; 08-10-06 \\\\\\hline 22 &amp; 104 &amp; 07-10-06 \\\\\\hline 31 &amp; 102 &amp; 10-11-16 \\\\\\hline 31&amp;103 &amp;06-11-16 \\\\\\hline 31 &amp; 104&amp;12-11-16 \\\\\\hline 64 &amp; 101 &amp;05-09-06 \\\\\\hline 64&amp; 102 &amp; 08-09-06 \\\\\\hline 74 &amp; 103 &amp; 08-09-06 \\\\\\hline \\end{array}}\\)<br><br>\n\\(\\overset{\\text{C: Cars relation}}{\\begin{array}{|c|c|c|c|}\\hline \\textbf {Cid} &amp; \\textbf {Cname} &amp; \\textbf{colour} \\\\\\hline 101 &amp; \\text{Renault} &amp; \\text{blue} \\\\ \\hline 102 &amp; \\text{Renault} &amp; \\text{red} \\\\ \\hline 103 &amp; \\text{Ferrari} &amp; \\text{green} \\\\\\hline 104 &amp; \\text{Jaguar} &amp; \\text{red} \\\\\\hline \\end{array}}\\)<br><br>  What is the output of the following SQL query?<pre><code> \nselect D.dname\nfrom Drivers D\nwhere D.did in  (\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid = C.cid and C.colour = 'red'\n                  intersect\n                  select R.did\n                  from Cars C, Reserves R\n                  where R.cid  = C.cid and C.colour = 'green'\n                   )</code></pre><br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Karthikeyan, Boris</p>",
            "<b>B.</b> <p>Sachin, Salman</p>",
            "<b>C.</b> <p>Karthikeyan, Boris, Sachin</p>",
            "<b>D.</b> <p>Schumacher, Senna</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Karthikeyan, Boris</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3640/gate2006-it-84\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>In a database file structure, the search key field is 9 bytes long, the block size is 512 bytes, a record pointer is 7 bytes and a block pointer is 6 bytes. The largest possible order of a non-leaf node in a B+ tree implementing this file structure is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>23</p>",
            "<b>B.</b> <p>24</p>",
            "<b>C.</b> <p>34</p>",
            "<b>D.</b> <p>44</p>"
          ],
          "correct_answer": "<b>C.</b> <p>34</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3605/gate2006-it-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a relation R with five attributes V, W, X, Y, and Z. The following functional dependencies hold:<br>\n\\(VY \\rightarrow W, WX \\rightarrow Z, \\text{and }ZY \\rightarrow V\\).<br>\nWhich of the following is a candidate key for R? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>VXZ</p>",
            "<b>B.</b> <p>VXY</p>",
            "<b>C.</b> <p>VWXY</p>",
            "<b>D.</b> <p>VWXYZ</p>"
          ],
          "correct_answer": "<b>B.</b> <p>VXY</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3604/gate2006-it-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following relational query languages have the same expressive power?<br>\nI.   Relational algebra<br>\nII.  Tuple relational calculus restricted to safe expressions<br>\nIII. Domain relational calculus restricted to safe expressions <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II and III only</p>",
            "<b>B.</b> <p>I and II only</p>",
            "<b>C.</b> <p>I and III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I, II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3554/gate2006-it-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
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
          "id": 14,
          "question": "<p>Consider the relation enrolled (student, course) in which (student, course) is\nthe primary key, and the relation paid (student, amount) where student is the\nprimary key. Assume no null values and no foreign keys or integrity constraints.\nAssume that amounts 6000, 7000,8000,9000 and 10000 were each paid by 20% of\nthe students. Consider these query plans (Plan 1 on left, Plan 2 on right) to \"list\nall courses taken by students who have paid more than x.\" <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q69_12cbe10b.jpg\"><br> A disk seek takes 4 ms. disk data transfer bank width is 300 MB/s and checking a tuple to see if amount is greater x takes 10\\(\\mu\\)s . Which of the following statements is correct? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Plan 1 and Plan 2 will not output identical row sets for all databases</p>",
            "<b>B.</b> <p>A course may be listed more than once int the output of Plan 1 for some databases</p>",
            "<b>C.</b> <p>For x = 5000, Plan 1 executes faster than Plan 2 for all databases</p>",
            "<b>D.</b> <p>For x = 9000, Plan 1 executes slower than Plan 2 for all databases</p>"
          ],
          "correct_answer": "<b>C.</b> <p>For x = 5000, Plan 1 executes faster than Plan 2 for all databases</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1847/gate2006-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the relation enrolled (student, course) in which student, course) is the\nprimary key, and the relation paid (student, amount) where student is the primary\nkey . Assume no null values and no foreign keys or integrity constraints. Given\nthe following four queries: <br><br>\nQuery 1: Select from enrolled where student in (select student form paid) <br>\nQuery 2: Select student from paid where student in (select student from\nenrolled) <br>\nQuery 3: Select E. student from enrolled E, paid P where E. student= P student <br>\nQuery 4: Select student from paid where exists <br>(select*from enrolled where\nenrolled student=paid.student) <br><br>\nWhich one of the following statements is correct? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All queries return identical row sets for any database</p>",
            "<b>B.</b> <p>Query 2 and Query 4 return identical row sets for all databases but there\nexist database for which Query 1 and Query 2 retrun different row sets</p>",
            "<b>C.</b> <p>There exist databases for which Query 3 returns strictly fewer rows than Query 2</p>",
            "<b>D.</b> <p>There exist databases for which Query 4 will encounter an intergrity\nviolation at runtime</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Query 2 and Query 4 return identical row sets for all databases but there\nexist database for which Query 1 and Query 2 retrun different row sets</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1846/gate2006-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
