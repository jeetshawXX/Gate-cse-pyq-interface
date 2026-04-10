window.__examLoadCallback({
  "title": "Parsing - Parsing - Slot 6",
  "duration": 22,
  "sections": [
    {
      "name": "Parsing",
      "questions": [
        {
          "id": 1,
          "question": "<p>A grammar that is both left and right recursive for a non-terminal, is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Ambiguous</p>",
            "<b>B.</b> <p>Unambiguous</p>",
            "<b>C.</b> <p>Information is not sufficient to decide whether it is ambiguous or unambiguous</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Information is not sufficient to decide whether it is ambiguous or unambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1493/gate1999-2-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which of the following is the most powerful parsing method? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LL (1)</p>",
            "<b>B.</b> <p>Canonical LR</p>",
            "<b>C.</b> <p>SLR</p>",
            "<b>D.</b> <p>LALR</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Canonical LR</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1470/gate1999-1-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which of the following statements is true? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SLR parser is more powerful than LALR</p>",
            "<b>B.</b> <p>LALR parser is more powerful than Canonical LR parser</p>",
            "<b>C.</b> <p>Canonical LR parser is more powerful than LALR parser</p>",
            "<b>D.</b> <p>The parsers SLR, Canonical CR, and LALR have the same power</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Canonical LR parser is more powerful than LALR parser</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1663/gate1998-1-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>In the following grammar<br>\n\\(\\begin{aligned} X &amp;::= X \\oplus Y \\mid Y \\\\ Y&amp;::= Z * Y \\mid Z\\\\ Z&amp;::= id \\end{aligned}\\)<br>\nWhich of the following is true? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>'\\(\\oplus\\)' is left associative while '*' is right associative</p>",
            "<b>B.</b> <p>Both '\\(\\oplus\\)' and '*' are left associative</p>",
            "<b>C.</b> <p>'\\(\\oplus\\)' is right associative while '*' is left associative</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>'\\(\\oplus\\)' is left associative while '*' is right associative</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2222/gate1997-1-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The grammar whose productions are<br>\n\\(\\langle\\text{stmt}\\rangle \\to\\text{ if id then } \\langle\\text{stmt}\\rangle\\)<br>\n\\(\\langle\\text{stmt}\\rangle\\to\\text{ if id then } \\langle\\text{stmt}\\rangle\\text{ else } \\langle \\text{stmt}\\rangle\\)<br>\n\\(\\langle\\text{stmt}\\rangle \\to\\text{ id }:=\\text{ id}\\)<br>\nis ambiguous because <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d } \\)<br>\nhas more than two parse trees</p>",
            "<b>B.</b> <p>the left most and right most derivations of the sentence<br>\\(\\text{\nif a then if b then c:= d } \\)<br>\ngive rise to different parse trees</p>",
            "<b>C.</b> <p>the sentence <br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas more than two parse trees</p>",
            "<b>D.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas two parse trees</p>"
          ],
          "correct_answer": "<b>D.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas two parse trees</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2739/gate1996-2-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following statements is false ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An unambiguous grammar has same left most and right most derivation</p>",
            "<b>B.</b> <p>An LL(1) parser is a top-down parser</p>",
            "<b>C.</b> <p>LALR is more powerful than SLR</p>",
            "<b>D.</b> <p>An ambiguous grammar can never be LR(K) for any k</p>"
          ],
          "correct_answer": "<b>A.</b> <p>An unambiguous grammar has same left most and right most derivation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/711/gate2001-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Choose the correct alternatives (more than one may be correct ) and write the corresponding letters only:<br>Consider the SLR(1) and LALR(1)  parsing tables for a context free grammar. Which of the following statement is/are true? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The goto part of both tables may be different.</p>",
            "<b>B.</b> <p>The shift entries are identical in both the tables.</p>",
            "<b>C.</b> <p>The reduce entries in the tables may be different.</p>",
            "<b>D.</b> <p>The error entries in tables may be different</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The shift entries are identical in both the tables.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/571/gate1992-02-xiv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>An operator precedence parser is a <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Bottom-up parser.</p>",
            "<b>B.</b> <p>Top-down parser.</p>",
            "<b>C.</b> <p>Back tracking parser.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Bottom-up parser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80295/gate1987-1-xiv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
