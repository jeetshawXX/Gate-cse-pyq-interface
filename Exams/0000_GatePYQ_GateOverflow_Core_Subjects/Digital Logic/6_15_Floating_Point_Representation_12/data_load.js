window.__examLoadCallback({
  "title": "Digital Logic - Floating Point Representation",
  "duration": 33,
  "sections": [
    {
      "name": "Floating Point Representation",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"80201\"></a><div itemprop=\"text\"><p>The exponent of a floating-point number is represented in excess-\\( \\text{N} \\) code so that:</p>\n\n</div><br><br><b>GATE CSE 1987 | Question: 1-vii</b></p>",
          "type": "single",
          "options": [
            "<p>The dynamic range is large.</p>",
            "<p>The precision is high.</p>",
            "<p>The smallest number is represented by all zeros.</p>",
            "<p>Overflow is avoided.</p>"
          ],
          "correct_answer": "<p>The smallest number is represented by all zeros.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/80201/gate-cse-1987-question-1-vii\" target=\"_blank\">https://gateoverflow.in/80201/gate-cse-1987-question-1-vii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"87053\"></a><div itemprop=\"text\">Consider an excess -\\( 50 \\) representation for floating point numbers with \\( 4 \\) BCD digit mantissa and \\( 2 \\) BCD digit exponent in normalised form. The minimum and maximum positive numbers that can be represented are __________ and _____________ respectively.</div><br><br><b>GATE CSE 1989 | Question: 1-vi</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/87053/gate-cse-1989-question-1-vi\" target=\"_blank\">https://gateoverflow.in/87053/gate-cse-1989-question-1-vi</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"83830\"></a><div itemprop=\"text\">A \\( 32 \\)-bit floating-point number is represented by a \\( 7 \\)-bit signed exponent, and a \\( 24 \\)-bit fractional mantissa. The base of the scale factor is \\( 16, \\)<br>\nThe range of the exponent is ___________</div><br><br><b>GATE CSE 1990 | Question: 1-iv-a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/83830/gate-cse-1990-question-1-iv-a\" target=\"_blank\">https://gateoverflow.in/83830/gate-cse-1990-question-1-iv-a</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"203832\"></a><div itemprop=\"text\">A \\( 32 \\)-bit floating-point number is represented by a \\( 7 \\)-bit signed exponent, and a \\( 24 \\)-bit fractional mantissa. The base of the scale factor is \\( 16, \\)<br>\nThe range of the exponent is ___________, if the scale factor is represented in excess-\\( 64 \\) format.</div><br><br><b>GATE CSE 1990 | Question: 1-iv-b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/203832/gate-cse-1990-question-1-iv-b\" target=\"_blank\">https://gateoverflow.in/203832/gate-cse-1990-question-1-iv-b</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"19702\"></a><div itemprop=\"text\"><p>Following floating point number format is given</p>\n\n<p>\\( f \\) is a fraction represented by a \\( 6-bit \\) mantissa (includes sign bit) in sign magnitude form, \\( e \\) is a \\( 4-bit \\) exponent (includes sign hit) in sign magnitude form and \\( n=(f, e) = f.&nbsp;2^e \\) is a floating point number. Let \\( A=54.75 \\) in decimal and \\( B=9.75 \\) in decimal</p>\n\n<ol style=\"list-style-type:lower-alpha\">\n\t<li>\n\t<p>Represent \\( A \\) and \\( B \\) as floating point numbers in the above format.</p>\n\t</li>\n\t<li>\n\t<p>Show the steps involved in floating point addition of \\( A \\) and \\( B. \\)</p>\n\t</li>\n\t<li>\n\t<p>What is the percentage error (up to one position beyond decimal point) in the addition operation in (b)?</p>\n\t</li>\n</ol></div><br><br><b>GATE CSE 1997 | Question: 72</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/19702/gate-cse-1997-question-72\" target=\"_blank\">https://gateoverflow.in/19702/gate-cse-1997-question-72</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"934\"></a><div itemprop=\"text\"><p>The following is a scheme for floating point number representation using \\( 16 \\) bits.</p>\n\n<p><img alt=\"\" src=\"images/gateOverflow_pyq_images/digital_logic___floating_point_representation/54bab4d88756d32524ca9f62ac9a17c2.png\" width=\"450\"></p>\n\n<p>Let \\( s, e, \\) and \\( m \\)&nbsp;be the numbers represented in binary in the sign, exponent, and mantissa fields respectively. Then the floating point number represented is:</p>\n\n<p>\\[ \\begin{cases}(-1)^s \\left(1+m \\times 2^{-9}\\right) 2^{e-31}, &amp; \\text{ if the exponent } \\neq 111111 \\\\ &nbsp;0, &amp; \\text{ otherwise} \\end{cases} \\]</p>\n\n<p>What is the maximum difference between two successive real numbers representable in this system?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 43</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2^{-40} \\)</p>",
            "<p>\\( 2^{-9} \\)</p>",
            "<p>\\( 2^{22} \\)</p>",
            "<p>\\( 2^{31} \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^{22} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/934/gate-cse-2003-question-43\" target=\"_blank\">https://gateoverflow.in/934/gate-cse-2003-question-43</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1407\"></a><div itemprop=\"text\"><p>Consider the following floating-point format.</p>\n\n<p><img alt=\"\" src=\"images/gateOverflow_pyq_images/digital_logic___floating_point_representation/133e5ccc5b66587a111c3d3180fd7add.png\" width=\"337\"></p>\n\n<p>Mantissa is a pure fraction in sign-magnitude form.</p>\n\n<p>The decimal number \\( 0.239 \\times&nbsp;2^{13} \\) has the following hexadecimal representation (without normalization and rounding off):</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 85-a</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{0D 24} \\)</p>",
            "<p>\\( \\text{0D 4D} \\)</p>",
            "<p>\\( \\text{4D 0D} \\)</p>",
            "<p>\\( \\text{4D 3D} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{4D 3D} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1407/gate-cse-2005-question-85-a\" target=\"_blank\">https://gateoverflow.in/1407/gate-cse-2005-question-85-a</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"82139\"></a><div itemprop=\"text\"><p>Consider the following floating-point format.</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"135\" src=\"images/gateOverflow_pyq_images/digital_logic___floating_point_representation/7576d2e7e98204ac51424521c6a388bc.png\" width=\"367\"></p>\n\n<p>&nbsp;</p>\n<p>Mantissa is a pure fraction in sign-magnitude form.</p>\n\n<ol>\n</ol>\n\n<p>The normalized representation for the above format is specified as follows. The mantissa has an implicit \\( 1 \\) preceding the binary (radix) point. Assume that only \\( 0’s \\) are padded in while shifting a field.</p>\n\n<p>The normalized representation of the above number \\( (0.239 \\times&nbsp;2^{13}) \\) is:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 85-b</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0A\\;20 \\)</p>",
            "<p>\\( 11\\;34 \\)</p>",
            "<p>\\( 49\\;D0 \\)</p>",
            "<p>\\( 4A\\;E8 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4A\\;E8 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/82139/gate-cse-2005-question-85-b\" target=\"_blank\">https://gateoverflow.in/82139/gate-cse-2005-question-85-b</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"402\"></a><div itemprop=\"text\"><p>In the IEEE floating point representation the hexadecimal value \\( 0\\text{x}00000000 \\) corresponds to</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 4</b></p>",
          "type": "single",
          "options": [
            "<p>The normalized value \\( 2^{-127} \\)</p>",
            "<p>The normalized value \\( 2^{-126} \\)</p>",
            "<p>The normalized value \\( +0 \\)</p>",
            "<p>The special value \\( +0 \\)</p>"
          ],
          "correct_answer": "<p>The special value \\( +0 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/402/gate-cse-2008-question-4\" target=\"_blank\">https://gateoverflow.in/402/gate-cse-2008-question-4</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"118434\"></a><div itemprop=\"text\"><p>Given the following binary number in \\( 32 \\)-bit (single precision) \\( \\text{IEEE-754} \\) format :<br>\n<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\( \\large 00111110011011010000000000000000 \\)<br>\n<br>\nThe decimal value closest to this floating-point number is :</p>\n\n</div><br><br><b>GATE CSE 2017 Set 2 | Question: 12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1.45*10^1 \\)</p>",
            "<p>\\( 1.45*10^{-1} \\)</p>",
            "<p>\\( 2.27*10^{-1} \\)</p>",
            "<p>\\( 2.27*10^1 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2.27*10^{-1} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118434/gate-cse-2017-set-2-question-12\" target=\"_blank\">https://gateoverflow.in/118434/gate-cse-2017-set-2-question-12</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"333202\"></a><div itemprop=\"text\"><p>Consider three registers \\( R1 \\), \\( R2 \\), and \\( R3 \\) that store numbers in \\( \\textsf{IEEE-754} \\) single precision floating point format. Assume that \\( R1 \\) and \\( R2 \\) contain the values (in hexadecimal notation) \\( \\textsf{0x42200000} \\) and \\( \\textsf{0xC1200000}, \\)&nbsp;respectively.</p><p>If \\( R3=\\frac{R1}{R2} \\), what is the value stored in \\( R3 \\)?</p></div><br><br><b>GATE CSE 2020 | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{0x40800000} \\)</p>",
            "<p>\\( \\textsf{0xC0800000} \\)</p>",
            "<p>\\( \\textsf{0x83400000} \\)</p>",
            "<p>\\( \\textsf{0xC8500000} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{0xC0800000} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333202/gate-cse-2020-question-29\" target=\"_blank\">https://gateoverflow.in/333202/gate-cse-2020-question-29</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"3267\"></a><div itemprop=\"text\"><p>The following bit pattern represents a floating point number in IEEE \\( 754 \\) single precision format</p>\n\n<p>\\( 1 \\ 10000011 \\ 101000000000000000000000 \\)</p>\n\n<p>The value of the number in decimal form is</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( -10 \\)</p>",
            "<p>\\( -13 \\)</p>",
            "<p>\\( -26 \\)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( -26 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3267/gate-it-2008-question-7\" target=\"_blank\">https://gateoverflow.in/3267/gate-it-2008-question-7</a></p>"
        }
      ]
    }
  ]
});
