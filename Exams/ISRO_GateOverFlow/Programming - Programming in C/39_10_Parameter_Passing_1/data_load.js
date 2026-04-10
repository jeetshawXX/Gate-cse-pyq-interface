window.__examLoadCallback({
  "title": "Programming - Programming in C - Parameter Passing",
  "duration": 3,
  "sections": [
    {
      "name": "Parameter Passing",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1834\"></a><div itemprop=\"text\">\n<p>Consider the following code written in a pass-by-reference language like&nbsp;FORTRAN and these statements about the code.&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">subroutine swap(ix,iy) \n     it = ix \nL1 : ix = iy \nL2 : iy = it \n    end \n    ia = 3 \n    ib = 8 \n    call swap (ia, ib+5)\n    print *, ia, ib \n    end </pre>\n\n<p><strong>S1</strong>: The compiler will generate code to allocate a temporary nameless cell,&nbsp;initialize it to 13, and pass the address of the cell to swap&nbsp;<br><strong>S2</strong>: On execution the code will generate a runtime error on line L1&nbsp;<br><strong>S3</strong>: On execution the code will generate a runtime error on line L2&nbsp;<br><strong>S4</strong>: The program will print 13 and 8&nbsp;<br><strong>S5</strong>: The program will print 13 and -2&nbsp;</p>\n\n<p>Exactly the following set of statement(s) is correct:&nbsp;</p>\n\n\n</div><br><br><b>Programming in C: GATE CSE 2006 | Question: 56, ISRO2009</b></p>",
          "type": "single",
          "options": [
            "<p>S1 and S2&nbsp;</p>",
            "<p>S1 and S4&nbsp;</p>",
            "<p>S3&nbsp;</p>",
            "<p>S1 and S5&nbsp;</p>"
          ],
          "correct_answer": "<p>S1 and S4&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1834/gate-cse-2006-question-56-isro2009-58\" target=\"_blank\">https://gateoverflow.in/1834/gate-cse-2006-question-56-isro2009-58</a></p>"
        }
      ]
    }
  ]
});
