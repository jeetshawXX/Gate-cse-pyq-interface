window.__examLoadCallback({
  "title": "Compiler Design - First and Follow",
  "duration": 17,
  "sections": [
    {
      "name": "First and Follow",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"570\"></a><div itemprop=\"text\"><p>For a context free grammar, FOLLOW(A) is the set of terminals that can appear immediately to the&nbsp;right of non-terminal \\( A \\) in some \"sentential\" form. We define two sets LFOLLOW(A) and RFOLLOW(A) by replacing the word \"sentential\" by \"left sentential\" and \"right most sentential\" respectively in the definition of&nbsp;FOLLOW (A).</p></div><br><br><b>GATE CSE 1992 | Question: 02,xiii</b></p>",
          "type": "multiple",
          "options": [
            "<p>FOLLOW(A) and LFOLLOW(A) may be different.</p>",
            "<p>FOLLOW(A) and RFOLLOW(A) are always the same.</p>",
            "<p>All the three sets are identical.</p>",
            "<p>All the three sets are different.</p>"
          ],
          "correct_answer": [
            "<p>FOLLOW(A) and LFOLLOW(A) may be different.</p>",
            "<p>FOLLOW(A) and RFOLLOW(A) are always the same.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/570/gate-cse-1992-question-02-xiii\" target=\"_blank\">https://gateoverflow.in/570/gate-cse-1992-question-02-xiii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2181\"></a><div itemprop=\"text\"><p>For the grammar below, a partial \\( LL(1) \\) parsing table is also presented along with the grammar. Entries that need to be filled are indicated as \\( E1, E2, \\) and \\( E3 \\). \\( \\varepsilon \\) is the empty string, \\\\(  indicates end of input, and,  \\)\\mid\\(  separates alternate right hand sides of productions.</p><ul><li> \\) S\\rightarrow a A b B \\mid b A a B \\mid \\varepsilon \\( </li><li> \\) A\\rightarrow S \\( </li><li> \\) B\\rightarrow S $</li></ul><p>$$\\begin{array}{|l|l|}\\hline \\text{}&nbsp; &amp;&nbsp; \\textbf{a} &amp; \\textbf{b}&nbsp; &amp;&nbsp; \\textbf{\\\\( } \\\\\\hline&nbsp; \\text{ \\)S\\( } &amp; \\text{E1} &amp;&nbsp; \\text{E2}&nbsp; &amp;&nbsp; \\text{ \\)S\\rightarrow \\varepsilon \\( } \\\\\\hline&nbsp; \\text{ \\)A\\( } &amp; \\text{ \\)A\\rightarrow S\\( } &amp;&nbsp; \\text{ \\)A\\rightarrow S\\( }&nbsp; &amp;&nbsp; \\text{error} \\\\\\hline&nbsp; \\text{ \\)B\\( } &amp; \\text{ \\)B\\rightarrow S\\( } &amp; \\text{ \\)B\\rightarrow S\\( }&nbsp; &amp;&nbsp; \\text{ \\)E3$} \\\\\\hline \\end{array}$$</p><p>The FIRST and FOLLOW sets for the non-terminals \\( A \\) and \\( B \\) are</p></div><br><br><b>GATE CSE 2012 | Question: 52</b></p>",
          "type": "single",
          "options": [
            "<p>\\( &nbsp;\\text{FIRST}(A) = \\{a, b, \\varepsilon\\} =\\text{FIRST}(B)  \\)<br>\\(  \\text{FOLLOW}(A) = \\{a, b\\}  \\)<br>\\(  \\text{FOLLOW}(B) = \\{a, b, \\ \\)\\} $<br>&nbsp;</p>",
            "<p>\\(  \\text{FIRST}(A) = \\{a, b, \\ \\)\\} \\( <br> \\) \\text{FIRST}(B) = \\{a, b, \\varepsilon\\} \\( <br> \\) \\text{FOLLOW}(A) = \\{a, b\\} \\( <br> \\) \\text{FOLLOW}(B) = \\{\\\\( \\}  \\)<br>&nbsp;</p>",
            "<p>\\(  \\text{FIRST}(A) = \\{a, b, \\varepsilon\\} =\\text{FIRST}(B)  \\)<br>\\(  \\text{FOLLOW}(A) =\\{a, b\\}  \\)<br>\\(  \\text{FOLLOW}(B) = \\varnothing  \\)<br>&nbsp;</p>",
            "<p>\\(  \\text{FIRST}(A) = \\{a, b\\} = \\text{FIRST}(B)  \\)<br>\\(  \\text{FOLLOW}(A) = \\{a, b\\}  \\)<br>\\(  \\text{FOLLOW}(B) =\\{a, b\\}  \\)</p>"
          ],
          "correct_answer": "<p>\\( &nbsp;\\text{FIRST}(A) = \\{a, b, \\varepsilon\\} =\\text{FIRST}(B)  \\)<br>\\(  \\text{FOLLOW}(A) = \\{a, b\\}  \\)<br>\\(  \\text{FOLLOW}(B) = \\{a, b, \\ \\)\\} $<br>&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2181/gate-cse-2012-question-52\" target=\"_blank\">https://gateoverflow.in/2181/gate-cse-2012-question-52</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"118297\"></a><div itemprop=\"text\"><p>Consider the following grammar:</p><ul><li>\\( P\\rightarrow xQRS \\)</li><li>\\( Q\\rightarrow yz\\mid z \\)</li><li>\\( R\\rightarrow w\\mid \\varepsilon \\)</li><li>\\( S\\rightarrow y \\)</li></ul><p>What is FOLLOW(\\( Q \\))?</p></div><br><br><b>GATE CSE 2017 Set 1 | Question: 17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\left \\{ R \\right \\} \\)</p>",
            "<p>\\( \\left \\{ w \\right \\} \\)</p>",
            "<p>\\( \\left \\{ w,y \\right \\} \\)</p>",
            "<p>\\( \\left \\{ w,\\ \\) \\right \\}$</p>"
          ],
          "correct_answer": "<p>\\( \\left \\{ w,y \\right \\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118297/gate-cse-2017-set-1-question-17\" target=\"_blank\">https://gateoverflow.in/118297/gate-cse-2017-set-1-question-17</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"302829\"></a><div itemprop=\"text\"><p>Consider the grammar given below:</p><ul><li>\\( S \\rightarrow Aa \\)</li><li>\\( A \\rightarrow BD \\)</li><li>\\( B \\rightarrow b \\mid \\epsilon  \\)</li><li>\\( D \\rightarrow d \\mid \\epsilon  \\)</li></ul><p><br>Let \\( a,b,d \\) and $\\\\[  be indexed as follows: \\]\\begin{array}{|l|l|l|l|} \\hline a &amp; b &amp; d &amp; \\$ \\\\ \\hline 3 &amp; 2 &amp; 1 &amp; 0 \\\\ \\hline \\end{array}$$Compute the FOLLOW set of the non-terminal B and write the index values for the symbols in the FOLLOW set in the descending order.(For example, if the FOLLOW set is \\( (a,b,d, \\ \\))\\(  , then the answer should be  \\)3210$)</p></div><br><br><b>GATE CSE 2019 | Question: 19</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302829/gate-cse-2019-question-19\" target=\"_blank\">https://gateoverflow.in/302829/gate-cse-2019-question-19</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"422814\"></a><div itemprop=\"text\"><p>Consider the following grammar \\( G \\), with \\( S \\) as the start symbol. The grammar \\( G \\) has three incomplete productions denoted by \\( (1), (2) \\), and \\( (3) \\).</p><p>\\[ \\begin{aligned} &amp; S \\rightarrow d a T \\mid \\quad(1) \\\\ &amp; T \\rightarrow a S|b T| \\quad(2) \\\\ &amp; R \\rightarrow(3) \\mid \\epsilon\\end{aligned} \\]</p><p>The set of terminals is \\( \\{a, b, c, d, f\\} \\). The FIRST and FOLLOW sets of the different non-terminals are as follows.</p><p>\\( \\begin{aligned} &amp; \\operatorname{FIRST}(S)=\\{c, d, f\\}, \\operatorname{FIRST}(T)=\\{a, b, \\epsilon\\}, \\operatorname{FIRST}(R)=\\{c, \\epsilon\\} \\\\ &amp; \\operatorname{FOLLOW}(S)=\\operatorname{FOLLOW}(T)=\\{c, f, \\ \\)\\}, \\operatorname{FOLLOW}(R)=\\{f\\}\\end{aligned}$</p><p>Which one of the following options CORRECTLY fills in the incomplete productions?</p></div><br><br><b>GATE CSE 2024 | Set 1 | Question: 28</b></p>",
          "type": "single",
          "options": [
            "<p>(1) \\( S \\rightarrow R f \\) (2) \\( T \\rightarrow \\epsilon \\) (3) \\( R \\rightarrow c T R \\)</p>",
            "<p>(1) \\( S \\rightarrow f R \\) (2) \\( T \\rightarrow \\epsilon \\) (3) \\( R \\rightarrow c T R \\)</p>",
            "<p>(1) \\( S \\rightarrow f R \\) (2) \\( T \\rightarrow c T \\) (3) \\( R \\rightarrow c R \\)</p>",
            "<p>(1) \\( S \\rightarrow R f \\) (2) \\( T \\rightarrow c T \\) (3) \\( R \\rightarrow c R \\)&nbsp;</p>"
          ],
          "correct_answer": "<p>(1) \\( S \\rightarrow R f \\) (2) \\( T \\rightarrow \\epsilon \\) (3) \\( R \\rightarrow c T R \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422814/gate-cse-2024-set-1-question-28\" target=\"_blank\">https://gateoverflow.in/422814/gate-cse-2024-set-1-question-28</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"460044\"></a><div itemprop=\"text\"><p>Which of the following statement(s) is/are TRUE while computing \\( \\operatorname{First} \\) and \\( \\operatorname{Follow} \\) during top down parsing by a compiler?</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 36</b></p>",
          "type": "multiple",
          "options": [
            "<p>For a production \\( A \\rightarrow \\epsilon, \\epsilon \\) will be added to \\( \\operatorname{First}(A) \\).</p>",
            "<p>If there is any input right end marker, it will be added to \\( \\text{First(S)} \\), where \\( S \\) is the start symbol.</p>",
            "<p>For a production \\( A \\rightarrow \\epsilon, \\epsilon \\) will be added to Follow \\( \\text{(A)} \\).</p>",
            "<p>If there is any input right end marker, it will be added to \\( \\operatorname{Follow}(S) \\), where \\( \\text{S} \\) is the start symbol.</p>"
          ],
          "correct_answer": [
            "<p>For a production \\( A \\rightarrow \\epsilon, \\epsilon \\) will be added to \\( \\operatorname{First}(A) \\).</p>",
            "<p>If there is any input right end marker, it will be added to \\( \\operatorname{Follow}(S) \\), where \\( \\text{S} \\) is the start symbol.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460044/gate-cse-2025-set-1-question-36\" target=\"_blank\">https://gateoverflow.in/460044/gate-cse-2025-set-1-question-36</a></p>"
        }
      ]
    }
  ]
});
