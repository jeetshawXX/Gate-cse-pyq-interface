window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 15",
  "duration": 25,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Let R(a, b, c) and S(d, e, f) be two relations in which d is the foreign key of S that refers to the primary key of R. Consider the following four operations R and S<br><br>\nI.   Insert into R<br>\nII.  Insert into S<br>\nIII. Delete from R<br>\nIV.  Delete from S<br><br>\nWhich of the following can cause violation of the referential integrity constraint above? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both I and IV</p>",
            "<b>B.</b> <p>Both II and III</p>",
            "<b>C.</b> <p>All of these</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Both II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2266/gate1997-6-10-isro2016-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>For a database relation R(a, b, c, d), where the domains a, b, c, d include only atomic values, only the following functional dependencies and those that can be inferred from them hold<br>\n\\(a \\rightarrow c\\)<br>\n\\(b \\rightarrow d\\)<br>\nThis relation is <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in first normal form but not in second normal form</p>",
            "<b>B.</b> <p>in second normal form but not in first normal form</p>",
            "<b>C.</b> <p>in third normal form</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>in first normal form but not in second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2265/gate1997-6-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a relation geq which represents \"greater than or equal to\", that is,\n(x,y) \\(\\in\\) geq only if y\\(\\geq\\)x:<pre><code> create table geq\n( \n  ib integer not null\n  ub integer not null\n  primary key ib\n  foreign key (ub) references geq on delete cascade \n) </code></pre>\nWhich of the following is possible if a tuple (x,y) is deleted ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A tuple (z,w) with z \\(\\gt\\)\ny is deleted</p>",
            "<b>B.</b> <p>A tuple (z,w) with z \\(\\gt\\)\nx is deleted</p>",
            "<b>C.</b> <p>A tuple (z,w) with w \\(\\lt\\)\nx is deleted</p>",
            "<b>D.</b> <p>The deletion of (x,y) is prohibited</p>"
          ],
          "correct_answer": "<b>C.</b> <p>A tuple (z,w) with w \\(\\lt\\)\nx is deleted</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/743/gate2001-2-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which of the following relational calculus expressions is not safe ? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q49_d1539589.jpg\"> <br><br><strong>(GATE CSE 2001)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/742/gate2001-2-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>R,(A,B,C,D) is a relation. Which of the following does not have a lossless join,\ndependency preserving BCNF decomposition ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(A\\rightarrow B,B\\rightarrow CD\\)</p>",
            "<b>B.</b> <p>\\(A\\rightarrow B,B\\rightarrow C,C\\rightarrow D\\)</p>",
            "<b>C.</b> <p>\\(AB\\rightarrow C,C\\rightarrow AD\\)</p>",
            "<b>D.</b> <p>\\(A\\rightarrow BCD\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(AB\\rightarrow C,C\\rightarrow AD\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/741/gate2001-2-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
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
          "id": 7,
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
        },
        {
          "id": 8,
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
        },
        {
          "id": 9,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>Indicate which of the following statements are true:\n<br>\nA relational database which is in 3NF may still have undesirable data redundancy because there may exist: <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Transitive functional dependencies</p>",
            "<b>B.</b> <p>Non-trivial functional dependencies involving prime attributes on the right-side.</p>",
            "<b>C.</b> <p>Non-trivial functional dependencies involving prime attributes only on the left-side.</p>",
            "<b>D.</b> <p>Non-trivial functional dependencies involving only prime attributes.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Non-trivial functional dependencies involving prime attributes on the right-side.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84054/gate1990-3-ii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
