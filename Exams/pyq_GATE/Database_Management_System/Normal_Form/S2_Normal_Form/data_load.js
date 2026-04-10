window.__examLoadCallback({
  "title": "Normal_Form - Normal_Form - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Normal_Form",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following relational schema:<pre><code>\nSuppliers(sid:integer, sname:string, city:string, street:string)\nParts(pid:integer, pname:string, color:string)\nCatalog(sid:integer, pid:integer, cost:real)</code></pre> Assume that, in the suppliers relation above, each supplier and each street within\na city has a unique name, and (sname, city) forms a candidate key. No other\nfunctional dependencies are implied other than those implied by primary and\ncandidate keys. Which one of the following is TRUE about the above schema? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The schema is in BCNF</p>",
            "<b>B.</b> <p>The schema is in 3NF but not in BCNF</p>",
            "<b>C.</b> <p>The schema is in 2NF but not in 3NF</p>",
            "<b>D.</b> <p>The schema is not in 2NF</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The schema is in BCNF</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43474/gate2009-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Let R (A, B, C, D, E, P, G) be a relational schema in which the following functional dependencies are known to hold: <br>\\(AB \\to CD, DE \\to P, C \\to E, P \\to C\\) and \\(B \\to G\\). <br> The relational schema R is <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in BCNF</p>",
            "<b>B.</b> <p>in 3NF, but not in BCNF</p>",
            "<b>C.</b> <p>in 2NF, but not in 3NF</p>",
            "<b>D.</b> <p>not in 2NF</p>"
          ],
          "correct_answer": "<b>D.</b> <p>not in 2NF</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3372/gate2008-it-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let \\(R (A, B, C, D)\\) be a relational schema in which the following functional dependencies are known to hold: <br>\\(A \\to B, \\;  B \\to C, \\; C \\to D \\) and \\(D \\to B\\). <br>The decomposition of \\(R\\) into \\((A,B), (B,C), (B,D)\\) <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>gives a lossless join, and is dependency preserving</p>",
            "<b>B.</b> <p>gives a lossless join, but is not dependency preserving</p>",
            "<b>C.</b> <p>does not give a lossless join, but is dependency preserving</p>",
            "<b>D.</b> <p>does not give a lossless join and is not dependency preserving</p>"
          ],
          "correct_answer": "<b>A.</b> <p>gives a lossless join, and is dependency preserving</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3371/gate2008-it-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following relational schemes for a library database:<br><br>\nBook (Title, Author, Catalog_ no, Publisher, Year, Price) <br>\nCollection (Title,Author, Catalog_ no) <br><br>\nwith in the following functional dependencies: <br><br>\nI. Title Author \\(\\rightarrow\\) Catalog_no <br>\nII. Catalog_no \\(\\rightarrow\\) Title Author Publisher Year <br>\nIII. Publisher Title Year \\(\\rightarrow\\) Price <br><br>\nAssume {Author, Title} is the key for both schemes. Which of the following\nstatements is true? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both Book and Collection are in BCNF</p>",
            "<b>B.</b> <p>Both Book and Collection are in 3NF only</p>",
            "<b>C.</b> <p>Book is in 2NF and Collection is in 3NF</p>",
            "<b>D.</b> <p>Both Book and Collection are in 2NF only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Book is in 2NF and Collection is in 3NF</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/492/gate2008-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following implications relating to functional and multivalued dependencies given below, which may or may not be correct.<br><br>\ni. if \\(A \\rightarrow \\rightarrow B\\) and \\(A \\rightarrow \\rightarrow C\\) then \\(A \\rightarrow  BC\\)<br>\nii. if \\(A \\rightarrow B\\) and \\(A \\rightarrow C\\) then \\(A \\rightarrow \\rightarrow BC\\)<br>\niii. if \\(A \\rightarrow \\rightarrow BC\\) and \\(A \\rightarrow B\\) then \\(A \\rightarrow C\\)<br>\niv. if \\(A \\rightarrow BC\\) and \\(A \\rightarrow B\\) then \\(A \\rightarrow \\rightarrow C\\)<br><br>\nExactly how many of the above implications are valid? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3512/gate2007-it-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
          "question": "<p>In a schema with attributes A, B, C, D and E following set of functional dependencies are given  <br>\n\\(A \\rightarrow B\\)<br>\n\\(A \\rightarrow C\\)<br>\n\\(CD \\rightarrow E\\)<br>\n\\(B \\rightarrow D\\)<br>\n\\(E \\rightarrow A\\)<br>\nWhich of the following functional dependencies is NOT implied by the above set? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(CD \\rightarrow AC\\)</p>",
            "<b>B.</b> <p>\\(BD \\rightarrow CD\\)</p>",
            "<b>C.</b> <p>\\(BC \\rightarrow CD\\)</p>",
            "<b>D.</b> <p>\\(AC \\rightarrow BC\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(BD \\rightarrow CD\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3833/gate2005-it-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A table has fields \\(F_1, F_2, F_3, F_4, F_5\\) with the following functional dependencies   <br>\n\\(F_1 \\to F_3, F_2\\to F_4, (F_1 . F_2) \\to F_5\\)<br>\nIn terms of Normalization, this table is in <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(1\\;\\text{NF}\\)</p>",
            "<b>B.</b> <p>\\(2\\;\\text{NF}\\)</p>",
            "<b>C.</b> <p>\\(3\\;\\text{NF}\\)</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(1\\;\\text{NF}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3767/gate2005-it-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which one of the following statements about normal forms is FALSE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>BCNF is stricter than 3NF</p>",
            "<b>B.</b> <p>Lossless, dependency-preserving decomposition into 3NF is always possible</p>",
            "<b>C.</b> <p>Lossless, dependency-preserving decomposition into BCNF is always possible</p>",
            "<b>D.</b> <p>Any relation with two attributes is in BCNF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Lossless, dependency-preserving decomposition into BCNF is always possible</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1365/gate2005-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A relation Empdtl is defined with attributes empcode (unique), name, street, city, state and pincode. For any pincode, there is only one city and state. Also, for any given street, city and state, there is just one pincode. In normalization terms, Empdtl is a relation in <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1NF only</p>",
            "<b>B.</b> <p>2NF and hence also in 1NF</p>",
            "<b>C.</b> <p>3NF and hence also in 2NF and 1NF</p>",
            "<b>D.</b> <p>BCNF and hence also in 3NF, 2NF and 1NF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2NF and hence also in 1NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3719/gate2004-it-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following entity relationship diagram (ERD), where two entities E1 and E2 have a relation R of cardinality 1:m.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Normal_Form\\q73_7b7dd9cd.jpg\"><br>The attributes of E1 are A11, A12 and A13 where A11 is the key attribute. The attributes of E2 are A21, A22 and A23 where A21 is the key attribute and A23 is a multi-valued attribute. Relation R does not have any attribute. A relational database containing minimum number of tables with each table satisfying the requirements of the third normal form (3NF) is designed from the above ERD. The number of tables in the database is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3717/gate2004-it-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The relation scheme Student Performance (name, courseNo, rollNo, grade) has the following\nfunctional dependencies: <br><br>\nname, courseNo, \\(\\rightarrow\\) grade <br>\nrollNo, courseNo \\(\\rightarrow\\) grade <br>\nname \\(\\rightarrow\\) rollNo <br>\nrollNo \\(\\rightarrow\\) name <br><br>\nThe highest normal form of this relation scheme is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2NF</p>",
            "<b>B.</b> <p>3NF</p>",
            "<b>C.</b> <p>BCNF</p>",
            "<b>D.</b> <p>4NF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1046/gate2004-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following functional dependencise in a database: <br><br>\\(\\begin{array}{|l|l|}\\hline \\text{Date\\_of\\_Birth } \\to \\text{Age} &amp; \\text{Age } \\to \\text{Eligibility} \\\\ \\hline  \\text{Name } \\to \\text{Roll\\_number} &amp; \\text{Roll\\_number }\\to \\text{Name} \\\\ \\hline   \\text{Course\\_number }\\to \\text{Course\\_name} &amp; \\text{Course\\_number } \\to\\text{Instructor} \\\\ \\hline  \\text{(Roll\\_number, Course\\_number) }\\to\\text{Grade} &amp; \\text{}  \\\\ \\hline \\end{array}\\)<br><br>\nThe relation (Roll_number,Name,Date_of_brith,Age) is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>in second normal normal form but not in third normal form</p>",
            "<b>B.</b> <p>in third normal form but not in BCNF</p>",
            "<b>C.</b> <p>in BCNF</p>",
            "<b>D.</b> <p>in none of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>in none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/968/gate2003-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
