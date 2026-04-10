window.__examLoadCallback({
  "title": "Digital Logic - IEEE Representation",
  "duration": 22,
  "sections": [
    {
      "name": "IEEE Representation",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"39\"></a><div itemprop=\"text\"><p>The decimal value \\( 0.5 \\) in IEEE single precision floating point representation has</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>fraction bits of \\( 000\\dots 000 \\) and exponent value of \\( 0 \\)</p>",
            "<p>fraction bits of \\( 000\\dots 000 \\) and exponent value of \\( −1 \\)</p>",
            "<p>fraction bits of \\( 100\\dots 000 \\) and exponent value of \\( 0 \\)</p>",
            "<p>no exact representation</p>"
          ],
          "correct_answer": "<p>fraction bits of \\( 000\\dots 000 \\) and exponent value of \\( −1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39/gate-cse-2012-question-7\" target=\"_blank\">https://gateoverflow.in/39/gate-cse-2012-question-7</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2011\"></a><div itemprop=\"text\"><p>The value of a \\( \\text{float} \\) type variable is represented using the single-precision \\( \\text{32-bit} \\) floating point format of \\( \\text{IEEE-754} \\) standard that uses \\( 1 \\) \\( \\text{bit} \\) for sign, \\( \\text{8 bits} \\) for biased exponent and \\( \\text{23 bits} \\) for the mantissa. A \\( \\text{float} \\) type variable \\( X \\) is assigned the decimal value of \\( −14.25 \\). The representation of \\( X \\) in hexadecimal notation is</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{C1640000H} \\)</p>",
            "<p>\\( \\text{416C0000H} \\)</p>",
            "<p>\\( \\text{41640000H} \\)</p>",
            "<p>\\( \\text{C16C0000H} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{C1640000H} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2011/gate-cse-2014-set-2-question-45\" target=\"_blank\">https://gateoverflow.in/2011/gate-cse-2014-set-2-question-45</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"357427\"></a><div itemprop=\"text\">Consider the following representation of a number in \\( \\text{IEEE 754} \\) single-precision floating point format with a bias of \\( 127 \\).\\[ S: 1\\quad\\quad &nbsp;E:\\; 10000001\\quad\\quad F:\\;11110000000000000000000 \\] Here \\( S, \\;E \\) and \\( F \\) denote the sign, exponent, and fraction components of the floating point representation.<br>\n<br>\nThe decimal value corresponding to the above representation (rounded to \\( 2 \\) decimal places) is ____________.</div><br><br><b>GATE CSE 2021 Set 1 | Question: 24</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "-7.75:-7.75",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/357427/gate-cse-2021-set-1-question-24\" target=\"_blank\">https://gateoverflow.in/357427/gate-cse-2021-set-1-question-24</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"357536\"></a><div itemprop=\"text\"><p>The format of the single-precision floating point representation of a real number as per the \\( \\text{IEEE 754} \\) standard is as follows:</p><p>\\[ \\begin{array}{|c|c|c|} \\hline \\text{sign} &amp; \\text{exponent} &amp; \\text{mantissa} \\\\ \\hline \\end{array} \\]</p><p>Which one of the following choices is correct with respect to the <em>smallest&nbsp;</em>normalized positive number represented using the standard?</p></div><br><br><b>GATE CSE 2021 Set 2 | Question: 4</b></p>",
          "type": "single",
          "options": [
            "<p>exponent \\( =00000000 \\) and mantissa \\( =0000000000000000000000000 \\)</p>",
            "<p>exponent \\( =00000000 \\) and mantissa \\( =0000000000000000000000001 \\)</p>",
            "<p>exponent \\( =00000001 \\) and mantissa \\( =0000000000000000000000000 \\)</p>",
            "<p>exponent \\( =00000001 \\) and mantissa \\( =0000000000000000000000001 \\)</p>"
          ],
          "correct_answer": "<p>exponent \\( =00000001 \\) and mantissa \\( =0000000000000000000000000 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357536/gate-cse-2021-set-2-question-4\" target=\"_blank\">https://gateoverflow.in/357536/gate-cse-2021-set-2-question-4</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"371905\"></a><div itemprop=\"text\"><p>Consider three floating point numbers \\( \\textit{A, B} \\) and \\( \\textit{C} \\) stored in registers \\( \\text{R}_{\\text{A}}, \\text{R}_{\\text{B}} \\) and \\( \\text{R}_{\\text{C}}, \\) respectively as per \\( \\textsf{IEEE-754} \\) single precision floating point format. The \\( \\text{32-bit} \\) content stored in these registers \\( \\text{(in hexadecimal form)} \\) are as follows.</p><p>\\( \\begin{array} {|c|c|c|} \\hline \\text{R}_{\\text{A}} = \\text{0xC1400000} &amp; \\text{R}_{\\text{B}} = \\text{0x42100000} &amp; \\text{R}_{\\text{C}} = \\text{0x41400000} \\\\\\hline \\end{array} \\)</p><p>Which one of the following is \\( \\text{FALSE}? \\)</p></div><br><br><b>GATE CSE 2022 | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textit{A + C} = 0 \\)</p>",
            "<p>\\( \\textit{C = A + B} \\)</p>",
            "<p>\\( \\textit{B =3C} \\)</p>",
            "<p>\\( \\textit{(B – C)} &gt; 0 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textit{C = A + B} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371905/gate-cse-2022-question-31\" target=\"_blank\">https://gateoverflow.in/371905/gate-cse-2022-question-31</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"399276\"></a><div itemprop=\"text\"><p>Consider the \\( \\textsf{IEEE-754} \\) single precision floating point numbers \\( \\text{P} = \\textsf{0xC1800000} \\) and \\( \\text{Q} = \\textsf{0x3F5C2EF4}. \\)</p><p>Which one of the following corresponds to the product of these numbers&nbsp;\\( (\\text{i.e., P} \\times \\mathrm{Q}&nbsp;), \\) represented in the \\( \\textsf{IEEE-754} \\) single precision format?</p></div><br><br><b>GATE CSE 2023 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{0x404C2EF4} \\)</p>",
            "<p>\\( \\textsf{0x405C2EF4} \\)</p>",
            "<p>\\( \\textsf{0xC15C2EF4} \\)</p>",
            "<p>\\( \\textsf{0xC14C2EF4} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{0xC15C2EF4} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399276/gate-cse-2023-question-35\" target=\"_blank\">https://gateoverflow.in/399276/gate-cse-2023-question-35</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"422893\"></a><div itemprop=\"text\"><p>​​The format of a single-precision floating-point number as per the \\( \\text{IEEE 754} \\) standard is:\\[ \\begin{array}{|l|l|l|}\\hline&nbsp; \\textbf{Sign} &amp; \\textbf{Exponent} &amp; \\textbf{Mantissa} \\\\\\hline &nbsp;\\text{(1 bit)} &amp; \\text{(8 bits)} &amp; \\text{(23 bits)} \\\\\\hline&nbsp; &nbsp;\\end{array} \\]</p><p>Choose the largest floating-point number among the following options.&nbsp; &nbsp;&nbsp;</p><p>A. \\( \\begin{array}{|l|l|l|}\\hline&nbsp; \\textbf{Sign} &amp; \\textbf{Exponent} &amp; \\textbf{Mantissa} \\\\\\hline &nbsp;\\text{0} &amp; \\text{01111111} &amp; \\text{11111111111111111111111} \\\\\\hline&nbsp; &nbsp;\\end{array} \\)</p><p>B. \\( \\begin{array}{|l|l|l|}\\hline&nbsp; \\textbf{Sign} &amp; \\textbf{Exponent} &amp; \\textbf{Mantissa} \\\\\\hline &nbsp;\\text{0} &amp; \\text{11111110} &amp; \\text{11111111111111111111111} \\\\\\hline&nbsp; &nbsp;\\end{array} \\)</p><p>C. \\( \\begin{array}{|l|l|l|}\\hline&nbsp; \\textbf{Sign} &amp; \\textbf{Exponent} &amp; \\textbf{Mantissa} \\\\\\hline &nbsp;\\text{0} &amp; \\text{11111111} &amp; \\text{11111111111111111111111} \\\\\\hline&nbsp; &nbsp;\\end{array} \\)</p><p>D.&nbsp;\\( \\begin{array}{|l|l|l|}\\hline&nbsp; \\textbf{Sign} &amp; \\textbf{Exponent} &amp; \\textbf{Mantissa} \\\\\\hline &nbsp;\\text{0} &amp; \\text{01111111} &amp; \\text{00000000000000000000000} \\\\\\hline&nbsp; &nbsp;\\end{array} \\)</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 4</b></p>",
          "type": "single",
          "options": [],
          "correct_answer": "<p>B</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422893/gate-cse-2024-set-2-question-4\" target=\"_blank\">https://gateoverflow.in/422893/gate-cse-2024-set-2-question-4</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"460796\"></a><div itemprop=\"text\"><p>Three floating point numbers \\( X, Y \\), and \\( Z \\) are stored in three registers \\( \\mathrm{R}_{\\mathrm{X}}, \\mathrm{R}_{\\mathrm{Y}} \\), and \\( \\mathrm{R}_{\\mathrm{Z}} \\), respectively in \\( IEEE \\) \\( 754 \\) single precision format as given below in hexadecimal:</p><p>\\[ \\mathrm{R}_{\\mathrm{X}}=0 \\mathrm{xC} 1100000, \\mathrm{R}_{\\mathrm{Y}}=0&nbsp;\\mathrm{x} &nbsp;40 \\mathrm{C} 00000, \\text { and } \\mathrm{R}_{\\mathrm{Z}}=0 \\mathrm{x} 41400000 \\]</p><p>Which of the following option(s) is/are CORRECT?</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 39</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( 4(X+Y)+Z=0 \\)</p>",
            "<p>\\( 2 Y-Z=0 \\)</p>",
            "<p>\\( 4 X+3 Z=0 \\)</p>",
            "<p>\\( X+Y+Z=0 \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( 4(X+Y)+Z=0 \\)</p>",
            "<p>\\( 2 Y-Z=0 \\)</p>",
            "<p>\\( 4 X+3 Z=0 \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460796/gate-cse-2025-set-2-question-39\" target=\"_blank\">https://gateoverflow.in/460796/gate-cse-2025-set-2-question-39</a></p>"
        }
      ]
    }
  ]
});
