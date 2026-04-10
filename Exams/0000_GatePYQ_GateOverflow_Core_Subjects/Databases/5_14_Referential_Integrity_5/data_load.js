window.__examLoadCallback({
  "title": "Databases - Referential Integrity",
  "duration": 14,
  "sections": [
    {
      "name": "Referential Integrity",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2266\"></a><div itemprop=\"text\">\n<p>Let \\( R (a, b, c) \\) and \\( S(d, e, f) \\) be two relations in which \\( d \\) is the foreign key of \\( S \\) that refers to the primary key of \\( R \\). Consider the following four operations \\( R \\) and \\( S \\)</p>\n\n<ol style=\"list-style-type: upper-roman;\"><li>\n\t<p>Insert into \\( R \\)</p>\n\t</li>\n\t<li>\n\t<p>Insert into \\( S \\)</p>\n\t</li>\n\t<li>\n\t<p>Delete from \\( R \\)</p>\n\t</li>\n\t<li>\n\t<p>Delete from \\( S \\)</p>\n\t</li>\n</ol><p>Which of the following can cause violation of the referential integrity constraint above?</p>\n\n\n</div><br><br><b>GATE CSE 1997 | Question: 6.10,  ISRO2016-54</b></p>",
          "type": "single",
          "options": [
            "<p>Both I and IV</p>",
            "<p>Both II and III</p>",
            "<p>All of these</p>",
            "<p>None of these</p>"
          ],
          "correct_answer": "<p>Both II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2266/gate-cse-1997-question-6-10-isro2016-54\" target=\"_blank\">https://gateoverflow.in/2266/gate-cse-1997-question-6-10-isro2016-54</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1399\"></a><div itemprop=\"text\"><p>The following table has two attributes \\( A \\) and \\( C \\) where \\( A \\) is the primary key and \\( C \\) is the foreign key referencing \\( A \\)&nbsp;with on-delete cascade.<br>\n\\[ \\begin{array}{|c|c|} \\hline \\textbf {A} &amp;&nbsp;&nbsp;\\textbf {C} \\\\\\hline \\text {2} &amp; &nbsp;\\text{4} \\\\\\hline&nbsp;\\text{3} &amp; \\text{4} \\\\\\hline \\text{4} &amp; \\text{3}&nbsp;\\\\\\hline \\text{5} &amp;&nbsp;&nbsp;\\text{2} \\\\\\hline \\text {7} &amp; &nbsp;\\text{2} \\\\\\hline&nbsp;\\text{9} &amp; \\text{5} \\\\\\hline \\text{6} &amp; \\text{4}&nbsp;\\\\\\hline \\end{array} \\]</p>\n\n<p>The set of all tuples that must be additionally deleted to preserve referential integrity when the tuple \\( (2, 4) \\) is deleted is:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 76</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (3, 4) \\) and \\( (6, 4) \\)</p>",
            "<p>\\( (5, 2) \\) and \\( (7, 2) \\)</p>",
            "<p>\\( (5, 2),&nbsp;(7, 2) \\) and \\( (9, 5) \\)</p>",
            "<p>\\( (3, 4),&nbsp;(4, 3) \\) and \\( (6, 4) \\)</p>"
          ],
          "correct_answer": "<p>\\( (5, 2),&nbsp;(7, 2) \\) and \\( (9, 5) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1399/gate-cse-2005-question-76\" target=\"_blank\">https://gateoverflow.in/1399/gate-cse-2005-question-76</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2151\"></a><div itemprop=\"text\"><p>Suppose \\( R_{1} (\\underline{A}, B) \\) and \\( R_{2} (\\underline{C}, D)  \\) are two relation schemas. Let \\( r_{1} \\) and \\( r_{2} \\) be the corresponding relation instances. \\( B \\) is a foreign key that refers to \\( C \\) in \\( R_{2} \\). If data in \\( r_{1} \\) and \\( r_{2} \\) satisfy referential integrity constraints, which of the following is <strong>ALWAYS TRUE</strong>?</p></div><br><br><b>GATE CSE 2012 | Question: 43</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\prod_{B}(r_{1})- \\prod _{C}(r_{2})= \\varnothing \\)</p>",
            "<p>\\( \\prod_{C}(r_{2})- \\prod _{B}(r_{1})= \\varnothing \\)</p>",
            "<p>\\( \\prod_{B}(r_{1}) = \\prod _{C}(r_{2}) \\)</p>",
            "<p>\\( \\prod_{B}(r_{1}) - \\prod _{C}(r_{2}) \\neq \\varnothing \\)</p>"
          ],
          "correct_answer": "<p>\\( \\prod_{B}(r_{1})- \\prod _{C}(r_{2})= \\varnothing \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2151/gate-cse-2012-question-43\" target=\"_blank\">https://gateoverflow.in/2151/gate-cse-2012-question-43</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"118236\"></a><div itemprop=\"text\"><p>Consider the following tables \\( T1 \\) and \\( T2. \\)</p>\n\n<p>\\[ \\overset{T1}{\\begin{array}{|c|c|c|} \\hline \\textbf {P} &amp; \\textbf {Q} \\\\\\hline&nbsp;&nbsp;\\text {2} &amp; &nbsp;\\text{2&nbsp;}\\\\\\hline&nbsp;\\text{3} &amp; \\text{8} \\\\\\hline \\text{7} &amp; \\text{3} \\\\\\hline&nbsp;\\text{5} &amp; \\text{8} \\\\\\hline&nbsp; \\text{6&nbsp;} &amp;\\text{9} \\\\\\hline&nbsp;\\text{8} &amp;&nbsp;\\text{5} \\\\\\hline \\text{9} &amp; \\text{8} \\\\\\hline \\end{array}}<br>\n\\qquad \\overset{T2}{\\begin{array}{|c|c|c|} \\hline \\textbf {R} &amp; \\textbf {S} \\\\\\hline&nbsp;&nbsp;\\text {2} &amp; &nbsp;\\text{2&nbsp;}\\\\\\hline&nbsp;\\text{8} &amp; \\text{3} \\\\\\hline \\text{3} &amp; \\text{2} \\\\\\hline&nbsp;\\text{9} &amp; \\text{7} \\\\\\hline&nbsp; \\text{5&nbsp;} &amp;\\text{7} \\\\\\hline&nbsp;\\text{7} &amp;&nbsp;\\text{2}&nbsp; \\\\\\hline \\end{array}} \\]</p>\n\n<p>In table \\( T1 \\)&nbsp;<strong>P</strong> is the primary key and <strong>Q</strong> is the foreign key referencing <strong>R</strong> in table \\( T2 \\) with on-delete cascade and on-update cascade. In table \\( T2, \\)&nbsp;<strong>R </strong>is the primary key and <strong>S</strong> is the foreign key referencing <strong>P </strong>&nbsp;in table \\( T1 \\) with on-delete set NULL and on-update cascade. In order to delete record \\( \\langle 3, 8 \\rangle \\)&nbsp;from the table \\( T1, \\) the number of additional records that need to be deleted from table \\( T1 \\) is _______</p></div><br><br><b>GATE CSE 2017 Set 2 | Question: 19</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.00",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118236/gate-cse-2017-set-2-question-19\" target=\"_blank\">https://gateoverflow.in/118236/gate-cse-2017-set-2-question-19</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"357534\"></a><div itemprop=\"text\"><p>Consider the following statements \\( S1 \\) and \\( S2 \\) about the relational data model:</p>\n\n<ul>\n\t<li>\\( S1 \\): A relation scheme can have at most one foreign key.</li>\n\t<li>\\( S2 \\): A foreign key in a relation scheme \\( R \\) cannot be used to refer to tuples of \\( R. \\)</li>\n</ul>\n\n<p>Which one of the following choices is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 2 | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>Both \\( S1 \\) and \\( S2 \\) are true</p>",
            "<p>\\( S1 \\) is true and \\( S2 \\) is false</p>",
            "<p>\\( S1 \\) is false and \\( S2 \\) is true</p>",
            "<p>Both \\( S1 \\) and \\( S2 \\) are false</p>"
          ],
          "correct_answer": "<p>Both \\( S1 \\) and \\( S2 \\) are false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357534/gate-cse-2021-set-2-question-6\" target=\"_blank\">https://gateoverflow.in/357534/gate-cse-2021-set-2-question-6</a></p>"
        }
      ]
    }
  ]
});
