window.__examLoadCallback({
  "title": "Normal_Form - Normal_Form - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Normal_Form",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider a relational schema \\( team(name, city, owner) \\), with functional dependencies  \\(\\{ name \\to city \\), \\( name \\to owner \\} \\) .\n<br><br>\nThe relation \\( team \\) is decomposed into two relations, \\( t_1(name, city) \\) and \\( t_2(name, owner) \\). Which of the following statement(s) is/are TRUE? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The relation \\( team \\) is NOT in BCNF.</p>",
            "<b>B.</b> <p>The relations \\( t_1 \\) and \\( t_2 \\) are in BCNF.</p>",
            "<b>C.</b> <p>The decomposition constitutes a lossless join.</p>",
            "<b>D.</b> <p>The relation \\(team \\)is NOT in 3NF.</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>The relations \\( t_1 \\) and \\( t_2 \\) are in BCNF.</p>",
            "<b>C.</b> <p>The decomposition constitutes a lossless join.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460043/gate-cse-2025-set-1-question-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which of the following statements about a relation R in first normal form (1NF)\nis/are TRUE ? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>R can have a multi-attribute key</p>",
            "<b>B.</b> <p>R cannot have a foreign key</p>",
            "<b>C.</b> <p>R cannot have a composite attribute</p>",
            "<b>D.</b> <p>R cannot have more than one candidate key</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>R can have a multi-attribute key</p>",
            "<b>C.</b> <p>R cannot have a composite attribute</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422830/gate-cse-2024-set-1-question-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>In a relational data model, which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A relation with only two attributes is always in BCNF.</p>",
            "<b>B.</b> <p>If all attributes of a relation are prime attributes, then the relation is in BCNF.</p>",
            "<b>C.</b> <p>Every relation has at least one non-prime attribute.</p>",
            "<b>D.</b> <p>BCNF decompositions preserve functional dependencies.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A relation with only two attributes is always in BCNF.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371932/Gate-cse-2022-question-4#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Suppose the following functional dependencies hold on a relation U with attributes \\(P, Q, R, S, \\text{ and } T\\):\n<br><br>\\(P \\rightarrow QR \\\\ RS \\rightarrow T\\)<br><br>\nWhich of the following functional dependencies can be inferred from the above functional dependencies? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(PS \\rightarrow T\\)</p>",
            "<b>B.</b> <p>\\(R \\rightarrow T\\)</p>",
            "<b>C.</b> <p>\\(P \\rightarrow R\\)</p>",
            "<b>D.</b> <p>\\(PS \\rightarrow Q\\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(PS \\rightarrow T\\)</p>",
            "<b>C.</b> <p>\\(P \\rightarrow R\\)</p>",
            "<b>D.</b> <p>\\(PS \\rightarrow Q\\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357500/gate-cse-2021-set-2-question-40#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>If every non-key attribute functionally dependent on the primary key, then the relation will be in <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First normal form</p>",
            "<b>B.</b> <p>Second normal form</p>",
            "<b>C.</b> <p>Third normal form</p>",
            "<b>D.</b> <p>Fourth Normal form</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331394/isro2020-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a prime attribute.</p>",
            "<b>B.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.</p>",
            "<b>C.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.</p>",
            "<b>D.</b> <p>A cell in R holds a set instead of an atomic value.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>R has a nontrivial functional dependency \\(X\\rightarrow A\\), where X is not a superkey and A is a prime attribute.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333195/gate2020-cs-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Let the set of functional dependencies \\(F=\\{QR\\rightarrow S,R\\rightarrow P,S\\rightarrow Q\\}\\) hold on a relation schema X = (PQRS). X is not in BCNF. Suppose X is decomposed into two schemas Y and Z where Y = (PR) and Z = (QRS). <br>Consider the two statements given below:<br><br>\nI. Both Y and Z are in BCNF<br>\nII. Decomposition of X into Y and Z is dependency preserving and lossless.<br><br>\nWhich of the above statements is/are correct? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both I and II</p>",
            "<b>B.</b> <p>I only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>C.</b> <p>II only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302816/gate2019-cs-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The set of attributes X will be fully functionally dependent on the set of attributes Y if the following conditions are satisfied. <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X is functionally dependent on Y</p>",
            "<b>B.</b> <p>X is not functionally dependent on any subset of Y</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both (A) and (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213534/isro2018-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>For a database relation R(a,b,c,d) where the domain of a,b,c and d include only atomic value, only the following functions dependencies and those that can be inferred from them hold<br>a\\(\\rightarrow\\)c<br>b\\(\\rightarrow\\)d<br>The relation is in: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First normal form but not in second normal form</p>",
            "<b>B.</b> <p>Second normal form but not in third normal form</p>",
            "<b>C.</b> <p>Third normal form</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>First normal form but not in second normal form</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213547/isro2018-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following four relational schemas. For each schema, all non-trivial functional\ndependencies are listed. The underlined attributes are the respective primary keys.<br>\n<img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Normal_Form\\q42_13ce7592.jpg\">\n<br>\nWhich one of the relational schemas above is in 3NF but not in BCNF? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Schema I</p>",
            "<b>B.</b> <p>Schema II</p>",
            "<b>C.</b> <p>Schema III</p>",
            "<b>D.</b> <p>Schema IV</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Schema II</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204116/gate2018-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The following functional dependencies hold true for the relational schema R{V,W,X,Y,Z}: <br>\nV \\(\\rightarrow\\)W <br>\nVW \\(\\rightarrow\\)X <br>\nY\\(\\rightarrow\\) VX <br>\nY \\(\\rightarrow\\)Z <br> Which of the following is irreducible equivalent for this set of functional dependencies ? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>V \\(\\rightarrow\\)W   <br>       V\\(\\rightarrow\\)X <br>\nY \\(\\rightarrow\\)V     <br>       Y \\(\\rightarrow\\)Z</p>",
            "<b>B.</b> <p>V \\(\\rightarrow\\)W  <br>       W \\(\\rightarrow\\)X<br>\nY\\(\\rightarrow\\) V    <br>       Y\\(\\rightarrow\\) Z</p>",
            "<b>C.</b> <p>V \\(\\rightarrow\\)W   <br>     V\\(\\rightarrow\\) X<br>\nY\\(\\rightarrow\\) V    <br>     Y \\(\\rightarrow\\)X<br>\nY \\(\\rightarrow\\)Z</p>",
            "<b>D.</b> <p>V \\(\\rightarrow\\)W  <br>      W\\(\\rightarrow\\) X<br>\nY\\(\\rightarrow\\) V   <br>      Y \\(\\rightarrow\\)X<br>\nY \\(\\rightarrow\\)Z</p>"
          ],
          "correct_answer": "<b>A.</b> <p>V \\(\\rightarrow\\)W   <br>       V\\(\\rightarrow\\)X <br>\nY \\(\\rightarrow\\)V     <br>       Y \\(\\rightarrow\\)Z</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118296/gate2017-1-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A database of resear charticles in a journal uses the following schema.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Normal_Form\\q23_1293001f.jpg\"> <br>\nWhich is the weakest normal form that the new database satisfies,but the old one does not? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1NF</p>",
            "<b>B.</b> <p>2NF</p>",
            "<b>C.</b> <p>3NF</p>",
            "<b>D.</b> <p>BCNF</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2NF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39646/gate2016-1-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the relation X(P,Q,R,S,T,U) with the following set of functional  dependencies <br> F= {{P,R}\\(\\rightarrow\\){S,T}, {P,S,U}\\(\\rightarrow\\){Q,R} } <br>\nWhich of the following is the trivial functional dependency in \\(F^{+}\\), where \\(F^{+}\\) is closure of F ? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{P,R}\\(\\rightarrow\\){S,T}</p>",
            "<b>B.</b> <p>{P,R}\\(\\rightarrow\\){R,T}</p>",
            "<b>C.</b> <p>{P,S}\\(\\rightarrow\\){S}</p>",
            "<b>D.</b> <p>{P,S,U}\\(\\rightarrow\\){Q}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>{P,S}\\(\\rightarrow\\){S}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8420/gate2015-3-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following table<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Normal_Form\\q63_241939ef.jpg\"><br>The table is in which normal form? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First Normal Form</p>",
            "<b>B.</b> <p>Second Normal Form</p>",
            "<b>C.</b> <p>Third Normal Form but not BCNF</p>",
            "<b>D.</b> <p>Third Normal Form and BCNF</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Third Normal Form but not BCNF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55019/isro2014-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Every time the attribute A appears, it is matched with the same value of attribute B but not the same value of attribute C. Which of the following is true? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A -&gt; (B,C)</p>",
            "<b>B.</b> <p>A -&gt; B, A -&gt;&gt; C</p>",
            "<b>C.</b> <p>A -&gt; B, C -&gt;&gt; A</p>",
            "<b>D.</b> <p>A -&gt;&gt; B, B -&gt; C</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A -&gt; B, A -&gt;&gt; C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/16128/isro2014-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
