window.__examLoadCallback({
  "title": "Database_Management_System - Database_Management_System - Slot 13",
  "duration": 42,
  "sections": [
    {
      "name": "Database_Management_System",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider the following ER diagram <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q82_a2c9ca9e.jpg\">  <br>Which of the following is a correct attribute set for one of the tables for the minimum number of tables needed to represent M, N, P, R1, R2? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{M1,M2,M3,P1}</p>",
            "<b>B.</b> <p>{M1,P1,N1,N2}</p>",
            "<b>C.</b> <p>{M1,P1,N1}</p>",
            "<b>D.</b> <p>{M1,P1}</p>"
          ],
          "correct_answer": "<b>A.</b> <p>{M1,M2,M3,P1}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/87025/gate2008-83#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following ER diagram <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Database_Management_System\\q82_a2c9ca9e.jpg\">  <br> The minimum number of tables needed to represent M, N, P, R1, R2 is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/390/gate2008-82#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider a file of 16384 records. Each record is 32 bytes long and its key field is\nof size 6 bytes. The file is ordered on a non-key field, and the file organization is\nunspanned. The file is stored in a file system with block size 1024 bytes, and the\nsize of a block pointer is 10 bytes. If the secondary index is built on the key field\nof the file, and a multi-level index scheme is used to store the secondary index,\nthe number of first-level and second-level blocks in the multi-level index are respectively <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8 and 0</p>",
            "<b>B.</b> <p>128 and 6</p>",
            "<b>C.</b> <p>256 and 4</p>",
            "<b>D.</b> <p>512 and 5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>256 and 4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/259/gate2008-70#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
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
          "id": 6,
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
          "id": 7,
          "question": "<p>A clustering index is defined on the fields which are of type <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>non-key and ordering</p>",
            "<b>B.</b> <p>non-key and non-ordering</p>",
            "<b>C.</b> <p>key and ordering</p>",
            "<b>D.</b> <p>key and non-ordering</p>"
          ],
          "correct_answer": "<b>A.</b> <p>non-key and ordering</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/414/gate2008-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which of the following tuple relational calculus expression(s) is/are equivalent to\n\\(\\forall t \\in r(P(t))\\)? <br>I. \\(\\neg \\exists t \\in r(P(t)) \\)<br> II. \\( \\neg t \\notin r(P(t)) \\)<br> III. \\( \\neg \\exists t \\in  r(\\neg P(t)) \\)<br>  IV. \\(\\exists t \\in r(\\neg P(t))\\) <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>III and IV only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/413/gate2008-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>BCNF is not used for cases where a relation has <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Two (or more) candidate keys</p>",
            "<b>B.</b> <p>Two candidate keys and composite</p>",
            "<b>C.</b> <p>The candidate key overlap</p>",
            "<b>D.</b> <p>Two mutually exclusive foreign keys</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Two candidate keys and composite</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49536/isro2007-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
          "question": "<p>Armstrong's inference rule doesnot determine <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Reflexivity</p>",
            "<b>B.</b> <p>Augmentation</p>",
            "<b>C.</b> <p>Transitivity</p>",
            "<b>D.</b> <p>Mutual dependency</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Mutual dependency</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49531/isro2007-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>A view of database that appears to an application program is known as <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Schema</p>",
            "<b>B.</b> <p>Subschema</p>",
            "<b>C.</b> <p>Virtual table</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Subschema</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49530/isro2007-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following is aggregate function in SQL? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Avg</p>",
            "<b>B.</b> <p>Select</p>",
            "<b>C.</b> <p>Ordered by</p>",
            "<b>D.</b> <p>distinct</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Avg</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49527/isro2007-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which commands are used to control access over objects in relational database? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>CASCADE &amp; MVD</p>",
            "<b>B.</b> <p>GRANT &amp; REVOKE</p>",
            "<b>C.</b> <p>QUE &amp; QUIST</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>GRANT &amp; REVOKE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49526/isro2007-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
