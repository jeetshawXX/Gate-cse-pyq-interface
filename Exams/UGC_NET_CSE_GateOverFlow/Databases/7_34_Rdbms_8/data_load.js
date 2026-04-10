window.__examLoadCallback({
  "title": "Databases - Rdbms",
  "duration": 22,
  "sections": [
    {
      "name": "Rdbms",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"63120\"></a><div itemprop=\"text\"><p>In RDBMS, the constraint that no key attribute (column) may be NULL is referred to as:</p>\n\n</div><br><br><b>Databases: UGC NET CSE | July 2016 | Part 2 | Question: 16</b></p>",
          "type": "single",
          "options": [
            "<p>Referential integrity</p>",
            "<p>Multi-valued dependency</p>",
            "<p>Entity integrity</p>",
            "<p>Functional dependency</p>"
          ],
          "correct_answer": "<p>Entity integrity</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/63120/ugc-net-cse-july-2016-part-2-question-16\" target=\"_blank\">https://gateoverflow.in/63120/ugc-net-cse-july-2016-part-2-question-16</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"63125\"></a><div itemprop=\"text\"><p>In a relational database model, NULL values canbe used for all but which one of the following?</p>\n\n</div><br><br><b>Databases: UGC NET CSE | July 2016 | Part 2 | Question: 18</b></p>",
          "type": "single",
          "options": [
            "<p>To allow duplicate tuples in the table by filling the primary key column(s) with NULL</p>",
            "<p>To avoid confusion with actual legitimate data values like 0 (zero) or integer columns and \" (the empty string) for string columns</p>",
            "<p>To leave columns in a tuple marked as \"unknown\" when the actual value is unknown</p>",
            "<p>To fill a column in a tuple when that&nbsp;column does not really &nbsp;\"exist\" for that particular tuple</p>"
          ],
          "correct_answer": "<p>To allow duplicate tuples in the table by filling the primary key column(s) with NULL</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/63125/ugc-net-cse-july-2016-part-2-question-18\" target=\"_blank\">https://gateoverflow.in/63125/ugc-net-cse-july-2016-part-2-question-18</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"225824\"></a><div itemprop=\"text\"><p>Consider a relation book (title, price) which contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query?</p>\n\n<pre class=\"prettyprint lang-sql\" data-pbcklang=\"sql\" data-pbcktabsize=\"4\">Select title\nfrom book as B\nwhere (select count(*)\n    from book as T\n    where T.price &gt; B. price &lt; 7</pre>\n\n</div><br><br><b>Databases: UGC NET CSE | July 2018 | Part 2 | Question: 62</b></p>",
          "type": "numeric",
          "options": [
            "<p>Titles of the six most expensive books</p>",
            "<p>Title of the sixth most expensive books</p>",
            "<p>Titles of the seven most expensive books</p>",
            "<p>Title of the seventh most expensive books</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/225824/ugc-net-cse-july-2018-part-2-question-62\" target=\"_blank\">https://gateoverflow.in/225824/ugc-net-cse-july-2018-part-2-question-62</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"225820\"></a><div itemprop=\"text\"><p>For a database relation \\( R(a, b, c, d) \\) where the domains of a, b, c and d include only atomic values and only the following functional dependencies and those that can be inferred from them hold:</p>\n\n<p>\\( a \\rightarrow c \\)</p>\n\n<p>\\( b \\rightarrow d \\)</p>\n\n<p>The relation is in ____</p>\n\n</div><br><br><b>Databases: UGC NET CSE | July 2018 | Part 2 | Question: 66</b></p>",
          "type": "numeric",
          "options": [
            "<p>First normal form but not in second normal form</p>",
            "<p>Second&nbsp;normal form but not in third&nbsp;normal form</p>",
            "<p>Third&nbsp;normal form</p>",
            "<p>BCNF</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/225820/ugc-net-cse-july-2018-part-2-question-66\" target=\"_blank\">https://gateoverflow.in/225820/ugc-net-cse-july-2018-part-2-question-66</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"225819\"></a><div itemprop=\"text\"><p>A many-to-one relationship exists between entity sets \\( r_1 \\) and \\( r_2 \\). How will it be represented using functional dependencies if \\( Pk(r) \\) denotes the primary key attribute of relation \\( r \\)?</p>\n\n</div><br><br><b>Databases: UGC NET CSE | July 2018 | Part 2 | Question: 67</b></p>",
          "type": "single",
          "options": [
            "<p>\\( Pk(r_1) \\rightarrow Pk(r_2) \\)</p>",
            "<p>\\( Pk(r_2) \\rightarrow Pk(r_1) \\)</p>",
            "<p>\\( Pk(r_2) \\rightarrow Pk(r_1) \\text{ and } Pk(r_1) \\rightarrow Pk(r_2) \\)</p>",
            "<p>\\( Pk(r_2) \\rightarrow Pk(r_1) \\text{ or&nbsp;} Pk(r_1) \\rightarrow Pk(r_2) \\)</p>"
          ],
          "correct_answer": "<p>\\( Pk(r_1) \\rightarrow Pk(r_2) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/225819/ugc-net-cse-july-2018-part-2-question-67\" target=\"_blank\">https://gateoverflow.in/225819/ugc-net-cse-july-2018-part-2-question-67</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"58493\"></a><div itemprop=\"text\"><p>Horn clauses are special kinds of propositions which can be described as</p>\n\n</div><br><br><b>Databases: UGC NET CSE | June 2013 | Part 3 | Question: 34</b></p>",
          "type": "single",
          "options": [
            "<p>Single atomic proposition on left side</p>",
            "<p>Single or multiple atomic proposition on left side</p>",
            "<p>A single atomic proposition on left side and a single atomic proposition on right side</p>",
            "<p>A single atomic proposition on left side or an empty left side</p>"
          ],
          "correct_answer": "<p>A single atomic proposition on left side or an empty left side</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/58493/ugc-net-cse-june-2013-part-3-question-34\" target=\"_blank\">https://gateoverflow.in/58493/ugc-net-cse-june-2013-part-3-question-34</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"58260\"></a><div itemprop=\"text\">\n<p>The “PROJECT” operator of a relational algebra creates a new table that has always</p>\n\n\n</div><br><br><b>Databases: UGC NET CSE | June 2013 | Part 3 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>More columns than columns in original table</p>",
            "<p>More rows than original table</p>",
            "<p>Same number of rows as the original table</p>",
            "<p>Same number of columns as the original table</p>"
          ],
          "correct_answer": "<p>Same number of rows as the original table</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/58260/ugc-net-cse-june-2013-part-3-question-7\" target=\"_blank\">https://gateoverflow.in/58260/ugc-net-cse-june-2013-part-3-question-7</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"166386\"></a><div itemprop=\"text\"><p>Consider a relation \\( R (A, B, C, D, E, F, G, H) \\)&nbsp;where each attribute is atomic, and following functional dependencies exist.<br>\n<br>\n\\(  CH \\rightarrow G \\)</p>\n\n<p>\\( A \\rightarrow BC \\)</p>\n\n<p>\\( B \\rightarrow CFH \\)</p>\n\n<p>\\( E \\rightarrow A \\)</p>\n\n<p>\\( F \\rightarrow EG \\)</p>\n\n<p>The relation \\( R \\) is ________</p>\n\n</div><br><br><b>Databases: UGC NET CSE | November 2017 | Part 3 | Question: 10</b></p>",
          "type": "single",
          "options": [
            "<p>In \\( 1NF \\) but not in \\( 2NF \\)</p>",
            "<p>In \\( 2NF \\) but not in \\( 3NF \\)</p>",
            "<p>In \\( 3NF \\) but not in \\( BCNF \\)</p>",
            "<p>In \\( BCNF \\)</p>"
          ],
          "correct_answer": "<p>In \\( 1NF \\) but not in \\( 2NF \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/166386/ugc-net-cse-november-2017-part-3-question-10\" target=\"_blank\">https://gateoverflow.in/166386/ugc-net-cse-november-2017-part-3-question-10</a></p>"
        }
      ]
    }
  ]
});
