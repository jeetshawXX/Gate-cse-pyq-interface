window.__examLoadCallback({
  "title": "Databases - Natural Join",
  "duration": 8,
  "sections": [
    {
      "name": "Natural Join",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1366\"></a><div itemprop=\"text\"><p>Let r be a relation instance with schema R = (A, B, C, D). We define \\( r_1 = \\pi_{A, B, C} (R) \\) and \\( r_2=\\pi_{A, D}&nbsp;(r) \\). Let \\( s&nbsp;=r_1 \\: * \\: r_2 \\) where \\( * \\) denotes natural join. Given that the decomposition of \\( r \\) into \\( r_1 \\) and \\( r_2 \\) is lossy, which one of the following is TRUE?</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>\\( s \\subset r \\)</p>",
            "<p>\\( r \\cup s =r \\)</p>",
            "<p>\\( r \\subset s \\)</p>",
            "<p>\\( r*s=s \\)</p>"
          ],
          "correct_answer": "<p>\\( r \\subset s \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1366/gate-cse-2005-question-30\" target=\"_blank\">https://gateoverflow.in/1366/gate-cse-2005-question-30</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2344\"></a><div itemprop=\"text\"><p>The following functional dependencies hold for relations \\( R(A, B, C) \\) and \\( S(B, D, E). \\)&nbsp;</p>\n\n<ul>\n<li>\\(  B \\to A \\)</li>\n<li>\\( A \\to C \\)</li>\n</ul>\n\n<p>The relation \\( R \\) contains \\( 200 \\) tuples and the relation \\( S \\) contains \\( 100 \\) tuples. What is the maximum number of tuples possible in&nbsp;the natural join &nbsp;\\( R \\bowtie S \\)?</p>\n\n</div><br><br><b>GATE CSE 2010 | Question: 43</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 100 \\)</p>",
            "<p>\\( 200 \\)</p>",
            "<p>\\( 300 \\)</p>",
            "<p>\\( 2000 \\)</p>"
          ],
          "correct_answer": "<p>\\( 100 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2344/gate-cse-2010-question-43\" target=\"_blank\">https://gateoverflow.in/2344/gate-cse-2010-question-43</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"8151\"></a><div itemprop=\"text\"><p>Consider two relations \\( R_1(A,B) \\) with the tuples \\( (1,5), (3,7) \\) and \\( R_2(A,C) = (1,7),(4,9) \\).</p>\n\n<p>Assume that \\( R(A,B,C) \\) is the full natural outer join of \\( R_1 \\) and \\( R_2 \\). Consider the following tuples of the form \\( (A,B,C): \\)</p>\n\n<p>\\( a = (1,5,null), b=(1,null,7), c=(3,null,9), d=(4,7,null), e=(1,5,7),  \\)</p>\n\n<p>\\(  f=(3,7,null), &nbsp;g=(4,null,9). \\)</p>\n\n<p>Which one of the following statements is correct?</p>\n\n</div><br><br><b>GATE CSE 2015 Set 2 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( R \\) contains \\( a, b, e, f, g \\) but not \\( c, d \\).</p>",
            "<p>\\( R \\) contains all \\( a, b, c, d, e, f, g \\).</p>",
            "<p>\\( R \\) contains \\( e, f, g \\) but not \\( a, b \\).</p>",
            "<p>\\( R \\) contains \\( e \\) but not \\( f, g \\).</p>"
          ],
          "correct_answer": "<p>\\( R \\) contains \\( e, f, g \\) but not \\( a, b \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8151/gate-cse-2015-set-2-question-32\" target=\"_blank\">https://gateoverflow.in/8151/gate-cse-2015-set-2-question-32</a></p>"
        }
      ]
    }
  ]
});
