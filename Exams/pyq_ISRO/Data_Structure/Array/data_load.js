window.__examLoadCallback({
  "title": "Data_Structure - Array",
  "duration": 25,
  "sections": [
    {
      "name": "Array",
      "questions": [
        {
          "id": 1,
          "question": "<p>If an array A contains the items 10, 4, 7, 23, 67, 12 and 5 in that order, what will be the resultant array A after third pass of insertion sort? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>67,12,10,5,4,7,23</p>",
            "<b>B.</b> <p>4,7,10,23,67,12,5</p>",
            "<b>C.</b> <p>4,5,7,67,10,12,23</p>",
            "<b>D.</b> <p>10,7,4,67,23,12,5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4,7,10,23,67,12,5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331354/isro2020-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider a 2-dimensional array x with 10 rows and 4 columns, with each element storing a value equivalent to the product of row number and column number. The array is stored in row-major format. If the first element x[0][0] occupies the memory location with address 1000 and each element occupies only one memory location, which all locations (in decimal) will be holding a value of 10? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(1018,1019\\)</p>",
            "<b>B.</b> <p>\\(1022,1041\\)</p>",
            "<b>C.</b> <p>\\(1017,1036\\)</p>",
            "<b>D.</b> <p>\\(1000,1399\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(1017,1036\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "Originally all Options are wrong. We have modified one option.<br><a href=\"https://gateoverflow.in/331475/isro2020-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>An array A consists of n integers in locations A[0],A[1],...A[n-1]. It is required to shift the elements of the array cyclically to the left by k places, where \\(1 \\leq k \\leq (n-1)\\). An incomplete algorithm for doing this in linear time, without using another array is given bellow. Complete the algorithm by filling in the blanks.<br><pre><code> min=n; i=0;\nwhile(_________) {\n    temp= A[i]; j=i;\n    while(_________) {\n        A[j]= _______;\n        j=(j+k) mod n;\n        if(j &lt; min) then\n        min = j;\n    }\n    A[(n+i-k) mod n]=_______;\n    i=________;\n    \n}</code></pre> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(i  \\gt \\min ; \\quad j !=(n+1) \\bmod n ; \\quad A[j+k] \\quad \\text { temp; } \\quad i+1 ;\\)</p>",
            "<b>B.</b> <p>\\(i \\lt \\min ; \\quad j !=(n+i) \\bmod n ; \\quad A[j+k] \\quad \\text { temp; } \\quad i+1 ;\\)</p>",
            "<b>C.</b> <p>\\(i \\gt \\min ; \\quad j !=(n+i+k) \\bmod n ; \\quad A[j+k] \\quad \\text { temp; } \\quad i+1 ;\\)</p>",
            "<b>D.</b> <p>\\(i \\lt \\min ; \\quad j !=(n+i-k) \\bmod n ; \\quad A[(j+k) \\bmod n] \\quad \\text { temp; } \\quad i+1 ;\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(i \\lt \\min ; \\quad j !=(n+i-k) \\bmod n ; \\quad A[(j+k) \\bmod n] \\quad \\text { temp; } \\quad i+1 ;\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213576/isro2018-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The average number of key comparisons required for a successful search for sequential search on n items is <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\frac{n}{2}\\)</p>",
            "<b>B.</b> <p>\\(\\frac{n-1}{2}\\)</p>",
            "<b>C.</b> <p>\\(\\frac{n+1}{2}\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\frac{n+1}{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2742/gate1996-2-13-isro2016-28\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A frame buffer array is addressed in row major order for a monitor with pixel locations starting from (0,0) and ending with (100,100). What is address of the pixel(6,10)? Assume one bit storage per pixel and starting pixel location is at 0. <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1016</p>",
            "<b>B.</b> <p>1006</p>",
            "<b>C.</b> <p>610</p>",
            "<b>D.</b> <p>616</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1016</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/53819/isro2014-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Suppose there are 11 items in sorted order in an array. How many searches are required on the average, if binary search is employed and all searches are successful in finding the item? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(3.00\\)</p>",
            "<b>B.</b> <p>3.46</p>",
            "<b>C.</b> <p>2.81</p>",
            "<b>D.</b> <p>3.33</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(3.00\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/16124/isro2014-28\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>In an array of 2N elements that is both 2-ordered and 3-ordered, what is the maximum number of positions that an element can be from its position if the array were 1-ordered? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>N/2</p>",
            "<b>D.</b> <p>2N-1</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43767/isro-2013-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Let A(1:8, -5:5, -10:5) be a three dimensional array. How many elements are there in the array A? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1200</p>",
            "<b>B.</b> <p>1408</p>",
            "<b>C.</b> <p>33</p>",
            "<b>D.</b> <p>1050</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1408</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43751/isro-2013-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A one dimensional array A has indices 1....75. Each element is a string and takes up three memory words. The array is stored at location 1120 decimal. The starting address of A[49] is <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1267</p>",
            "<b>B.</b> <p>1164</p>",
            "<b>C.</b> <p>1264</p>",
            "<b>D.</b> <p>1169</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1264</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48050/isro2009-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
