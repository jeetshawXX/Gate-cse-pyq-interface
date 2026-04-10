window.__examLoadCallback({
  "title": "Algorithms - Recurrence_Relation",
  "duration": 14,
  "sections": [
    {
      "name": "Recurrence_Relation",
      "questions": [
        {
          "id": 1,
          "question": "<p>The master theorem <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>assumes the subproblems are unequal sizes</p>",
            "<b>B.</b> <p>can be used if the subproblems are of equal size</p>",
            "<b>C.</b> <p>cannot be used for divide and conquer algorithms</p>",
            "<b>D.</b> <p>cannot be used for asymptotic complexity analysis</p>"
          ],
          "correct_answer": "<b>B.</b> <p>can be used if the subproblems are of equal size</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331325/isro2020-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>The running time of an algorithm is given by:<br>\\(T(n)=\\left\\{\\begin{matrix} T(n-1)+T(n-2)-T(n-3), &amp;\\text {  if } n&gt;3\\\\  n, &amp;\\text{  otherwise}\\end{matrix}\\right.\\)<br>Then what should be the relation between \\(T(1),T(2),T(3)\\), so that the order of the algorithm is constant? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(1) = T(2) = T(3)</p>",
            "<b>B.</b> <p>T(1) + T(3) = 2T(2)</p>",
            "<b>C.</b> <p>T(1) - T(3) = T(2)</p>",
            "<b>D.</b> <p>T(1) + T(2) = T(3)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>T(1) = T(2) = T(3)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213551/isro2018-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The recurrence relation that arises in relation with the complexity of binary search is: <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n)=2 T\\left(\\frac{n}{2}\\right)+k, \\mathrm{k} \\text { is a constant }\\)</p>",
            "<b>B.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+k, \\mathrm{k} \\text { is a constant }\\)</p>",
            "<b>C.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+\\log n\\)</p>",
            "<b>D.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+n\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+k, \\mathrm{k} \\text { is a constant }\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2444/gate1994-1-7-isro2017-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following recurrence:<br>\\(T(n)=2T\\left ( \\sqrt{n}\\right )+1, T(1)=1\\)<br>Which one of the following is true? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n)=\\Theta (\\log\\log n)\\)</p>",
            "<b>B.</b> <p>\\(T(n)=\\Theta (\\log n)\\)</p>",
            "<b>C.</b> <p>\\(T(n)=\\Theta (\\sqrt{n})\\)</p>",
            "<b>D.</b> <p>\\(T(n)=\\Theta (n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T(n)=\\Theta (\\log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1829/gate2006-51-isro2016-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Let \\(T(n)\\) be defined by \\(T(1)=10\\) and \\(T(n+1)=2n+T(n)\\) for all integers \\(n \\geq 1\\). Which of the following  represents the order of growth of \\(T(n)\\) as a function of n? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n)\\)</p>",
            "<b>B.</b> <p>\\(O(n \\log n)\\)</p>",
            "<b>C.</b> <p>\\(O(n^2)\\)</p>",
            "<b>D.</b> <p>\\(O(n^3)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(O(n^2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47492/isro2011-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
