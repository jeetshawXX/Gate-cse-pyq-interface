window.__examLoadCallback({
  "title": "Databases - Relational Algebra",
  "duration": 8,
  "sections": [
    {
      "name": "Relational Algebra",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"60745\"></a><div itemprop=\"text\"><p>Consider the following schemas:</p>\n\n<p>Branch=(Branch-name, Assets, Branch-city)</p>\n\n<p>Customer = (Customer-name, Bank name, Customer-city)</p>\n\n<p>Borrow = (Branch-name, Loan number, Customer account-number)</p>\n\n<p>Deposit = (Branch-name, Account-number, Customer-name, Balance)</p>\n\n<p>Using relational Algebra, the Query that finds customers who have balance more than 10,000 is _____</p>\n\n</div><br><br><b>Databases: UGC NET CSE | December 2013 | Part 3 | Question: 56</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\pi_{customer-name} (\\sigma_{balance &gt; 10000^{(Deposit)}} \\))</p>",
            "<p>\\( \\sigma_{customer-name} (\\sigma_{balance &gt; 10000^{(Deposit)}} \\))</p>",
            "<p>\\( \\pi_{customer-name} (\\sigma_{balance &gt; 10000^{(Borrow)}} \\))</p>",
            "<p>\\( \\sigma_{customer-name} (\\pi_{balance &gt; 10000^{(Borrow)}} \\))</p>"
          ],
          "correct_answer": "<p>\\( \\pi_{customer-name} (\\sigma_{balance &gt; 10000^{(Deposit)}} \\))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/60745/ugc-net-cse-december-2013-part-3-question-56\" target=\"_blank\">https://gateoverflow.in/60745/ugc-net-cse-december-2013-part-3-question-56</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"63614\"></a><div itemprop=\"text\"><p>Consider the relations \\( R(A, B) \\) and \\( S(B, C) \\) and the following four relational algebra queries over R ans S</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\\( \\pi_{A, B} (R \\bowtie S) \\)</li>\n\t<li>\\( R \\bowtie \\pi_B(S) \\)</li>\n\t<li>\\( R \\cap (\\pi_A(R) \\times \\pi_B (S)) \\)</li>\n\t<li>\\( \\Pi_{A.&nbsp;R. B} (R \\times S) \\) where \\( R.B \\) refers to the column B in table R</li>\n</ol>\n\n<p>One can determine that:</p>\n\n</div><br><br><b>Databases: UGC NET CSE | July 2016 | Part 3 | Question: 9</b></p>",
          "type": "single",
          "options": [
            "<p>I, III and IV are the same query</p>",
            "<p>II, III and IV are the same query</p>",
            "<p>I, II&nbsp;and IV are the same query</p>",
            "<p>I, II and III&nbsp;are the same query</p>"
          ],
          "correct_answer": "<p>I, II and III&nbsp;are the same query</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/63614/ugc-net-cse-july-2016-part-3-question-9\" target=\"_blank\">https://gateoverflow.in/63614/ugc-net-cse-july-2016-part-3-question-9</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"316246\"></a><div itemprop=\"text\"><p>With respect to relational algebra, which of the following operations are included from mathematical set theory?</p>\n\n<ol start=\"1\" style=\"list-style-type:lower-roman\" type=\"i\">\n\t<li>Join</li>\n\t<li>Intersection</li>\n\t<li>Cartisian product</li>\n\t<li>Project\n\t\n\t</li>\n</ol></div><br><br><b>Databases: UGC NET CSE | June 2019 | Part 2 | Question: 33</b></p>",
          "type": "single",
          "options": [
            "<p>i and iv</p>",
            "<p>ii and iii</p>",
            "<p>iii and iv</p>",
            "<p>ii and iv</p>"
          ],
          "correct_answer": "<p>ii and iii</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/316246/ugc-net-cse-june-2019-part-2-question-33\" target=\"_blank\">https://gateoverflow.in/316246/ugc-net-cse-june-2019-part-2-question-33</a></p>"
        }
      ]
    }
  ]
});
