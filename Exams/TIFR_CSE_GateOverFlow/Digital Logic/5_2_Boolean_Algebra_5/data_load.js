window.__examLoadCallback({
  "title": "Digital Logic - Boolean Algebra",
  "duration": 14,
  "sections": [
    {
      "name": "Boolean Algebra",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"18621\"></a><div itemprop=\"text\"><p>For \\( x \\in \\{0,1\\} \\), let \\( \\lnot x \\) denote the negation of \\( x \\), that is \\[ \\lnot \\, &nbsp;x = \\begin{cases}1 &amp; \\mbox{iff } x = 0\\\\ 0 &amp; \\mbox{iff } x = 1\\end{cases} \\].</p>\n\n<p>If \\( x \\in \\{0,1\\}^n \\), then \\( \\lnot \\, x \\) denotes the component wise negation of \\( x \\); that is: \\[ (\\lnot \\, x)_i=\\left&nbsp;(\\lnot \\, x_i \\mid i \\in [1..n] \\right&nbsp;) \\]</p>\n\n<p>Consider a circuit \\( C \\), computing a function \\( f: \\{0,1\\}^{n} \\to \\{0,1\\} \\) using <strong>AND </strong>\\( (\\land) \\), <strong>OR </strong>\\( (\\lor) \\),and <strong>NOT </strong>\\( (\\lnot) \\) gates. Let \\( D \\) be the circuit obtained from \\( C \\) by replacing each <strong>AND </strong>gate by an <strong>OR </strong>gate and replacing each <strong>OR</strong> gate by an <strong>AND</strong>. Suppose \\( D \\) computes the function \\( g \\). Which of the following is true for all inputs \\( x \\)?</p>\n\n</div><br><br><b>Digital Logic: TIFR CSE 2010 | Part B | Question: 21</b></p>",
          "type": "single",
          "options": [
            "<p>\\( g(x) = \\lnot \\, f(x) \\)</p>",
            "<p>\\( g(x) = f(x) \\land f(\\lnot x) \\)</p>",
            "<p>\\( g(x) = f(x) \\lor f(\\lnot x) \\)</p>",
            "<p>\\( g(x) = \\lnot f(\\lnot x) \\)</p>",
            "<p>None of the above.</p>"
          ],
          "correct_answer": "<p>\\( g(x) = \\lnot f(\\lnot x) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/18621/tifr-cse-2010-part-b-question-21\" target=\"_blank\">https://gateoverflow.in/18621/tifr-cse-2010-part-b-question-21</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"27344\"></a><div itemprop=\"text\"><p>Let \\( f: \\left\\{0, 1\\right\\}^{n} \\rightarrow \\left\\{0, 1\\right\\} \\) be a boolean function computed by a logical circuit comprising just binary&nbsp;AND and binary OR gates (assume that the circuit does not have any feedback). Let PARITY : \\( \\left\\{0, 1\\right\\}^{n} \\rightarrow \\left\\{0, 1\\right\\} \\)&nbsp;be the boolean function that outputs \\( 1 \\) if the total number of input bits set to \\( 1 \\) is odd. Similarly, let&nbsp;MAJORITY be the boolean function that outputs \\( 1 \\) if the number of input bits that are set to \\( 1 \\) is at least as&nbsp;large as the number of input bits that are set to \\( 0 \\). Then, which of the following is NOT possible?</p>\n\n</div><br><br><b>Digital Logic: TIFR CSE 2014 | Part B | Question: 17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f(0, 0, . . . , 0) = f(1, 1, . . . , 1) = 0 \\).</p>",
            "<p>\\( f(0, 0, . . . , 0) = f(1, 1. . . . , 1) = 1 \\)</p>",
            "<p>\\( f \\) is the MAJORITY function.</p>",
            "<p>\\( f \\) is the PARITY function.</p>",
            "<p>\\( f \\) outputs \\( 1 \\) at exactly one assignment of the input bits.</p>"
          ],
          "correct_answer": "<p>\\( f \\) is the PARITY function.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/27344/tifr-cse-2014-part-b-question-17\" target=\"_blank\">https://gateoverflow.in/27344/tifr-cse-2014-part-b-question-17</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"95703\"></a><div itemprop=\"text\"><p>For any natural number \\( n \\), an ordering of all binary strings of length \\( n \\) is a Gray code if it starts with \\( 0^n \\), and any successive strings in the ordering differ in exactly one bit (the first and last string must also differ by one bit). Thus, for \\( n=3 \\), the ordering \\( (000, 100, 101, 111, 110, 010, 011, 001) \\) is a Gray code. Which of the following must be TRUE for all Gray codes over strings of length \\( n \\)?</p>\n\n</div><br><br><b>Digital Logic: TIFR CSE 2017 | Part B | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>the number of possible Gray codes is even</p>",
            "<p>the number of possible Gray codes is odd</p>",
            "<p>In any Gray code, if two strings are separated by \\( k \\) other strings in the ordering, then they must differ in exactly \\( k+1 \\) bits</p>",
            "<p>In any Gray code, if two strings are separated by \\( k \\) other strings in the ordering, then they must differ in exactly \\( k \\) bits</p>",
            "<p>none of the above</p>"
          ],
          "correct_answer": "<p>the number of possible Gray codes is even</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/95703/tifr-cse-2017-part-b-question-8\" target=\"_blank\">https://gateoverflow.in/95703/tifr-cse-2017-part-b-question-8</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"333120\"></a><div itemprop=\"text\"><p>Consider the following Boolean valued function on \\( n \\) Boolean variables: \\( f(x_{1},\\dots,x_{n}) = x_{1} + \\dots + x_{n}(\\text{mod } 2) \\), where addition is over integers, mapping \\( \\textbf{‘FALSE’} \\) to \\( 0 \\) and \\( \\textbf{‘TRUE’} \\) to \\( 1. \\) Consider Boolean circuits (with no feedback) that use only logical \\( \\textbf{AND} \\) and \\( \\textbf{OR} \\) gates, and where each gate has two input bits, each of which is either an input bit of \\( f \\) or the output bit of some other gate of the circuit. The circuit has a distinguished gate whose value is the output of the circuit. The minimum size of such a circuit computing \\( f \\) (asymptotically in \\( n \\))&nbsp; is :</p>\n\n</div><br><br><b>Digital Logic: TIFR CSE 2020 | Part B | Question: 1</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( 2^{o(\\log n)} \\)</p>",
            "<p>\\( n^{c} \\), for some fixed constant \\( c \\)</p>",
            "<p>\\( n^{\\omega(1)} \\), but \\( n^{O(\\log n)} \\)</p>",
            "<p>\\( 2^{\\Theta(n)} \\)</p>",
            "<p>None of the others</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/333120/tifr-cse-2020-part-b-question-1\" target=\"_blank\">https://gateoverflow.in/333120/tifr-cse-2020-part-b-question-1</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"333135\"></a><div itemprop=\"text\"><p>Suppose \\( X_{1a}, X_{1b},X_{2a},X_{2b},\\dots , X_{5a},X_{5b} \\) are ten Boolean variables each of which can take the value TRUE or FLASE. Recall the Boolean XOR \\( X\\oplus Y:=(X\\wedge \\neg Y)\\vee&nbsp;(\\neg X \\wedge Y) \\). Define the Boolean logic formulas</p>\n\n<p>\\[ F:= (X_{1a}\\vee X_{1b}) \\wedge&nbsp;(X_{2a}\\vee X_{2b})\\wedge&nbsp;(X_{3a}\\vee X_{3b})\\wedge&nbsp;(X_{4a}\\vee X_{4b})\\wedge&nbsp;(X_{5a}\\vee X_{5b}), \\]</p>\n\n<p>\\[ G_{i}:=(X_{i,a}\\oplus X_{i+1,a})\\vee (X_{i,b}\\oplus X_{i+1,b}),\\:\\:\\:1 \\leq i \\leq 4 \\]</p>\n\n<p>\\[ G_{5}:=(X_{5a}\\oplus X_{1a})\\vee (X_{5b}\\oplus X_{1b}), \\]</p>\n\n<p>\\[ H:=F\\wedge G_1 \\wedge G_2 \\wedge G_3 \\wedge G_4 \\wedge G_5. \\]</p>\n\n<p>A truth assignment to the ten Boolean variables \\( X_{ia}, X_{ib},\\:\\:1\\leq i \\leq 5 \\) is said to be a satisfying assignment if \\( H \\) takes the value TRUE for example,</p>\n\n<p>\\[ (X_{1a},X_{1b},X_{2a},X_{2b},\\dots, X_{5a}, X_{5b}) = (F,T,T,F,F,T,T,T,T,F) \\]</p>\n\n<p>&nbsp;is a satisfying assignment,</p>\n\n<p>\\[ (X_{1a},X_{1b},X_{2a},X_{2b},\\dots, X_{5a}, X_{5b}) = (F,T,T,T,F,T,T,T,T,F) \\]</p>\n\n<p>&nbsp;is&nbsp; another satisfying assignment, while</p>\n\n<p>\\[ (X_{1a},X_{1b},X_{2a},X_{2b},\\dots, X_{5a}, X_{5b}) = (F,T,T,F,F,T,T,F,T,F) \\]</p>\n\n<p>&nbsp;is&nbsp; not a satisfying assignment.</p>\n\n<p>How many satisfying assignments does \\( H \\) have?</p>\n\n\n\n<ol start=\"1\" style=\"list-style-type:upper-alpha\">\n</ol></div><br><br><b>Digital Logic: TIFR CSE 2020 | Part B | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 20 \\)</p>",
            "<p>\\( 30 \\)</p>",
            "<p>\\( 32 \\)</p>",
            "<p>\\( 160 \\)</p>",
            "<p>\\( 1024 \\)</p>"
          ],
          "correct_answer": "<p>\\( 30 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333135/tifr-cse-2020-part-b-question-15\" target=\"_blank\">https://gateoverflow.in/333135/tifr-cse-2020-part-b-question-15</a></p>"
        }
      ]
    }
  ]
});
