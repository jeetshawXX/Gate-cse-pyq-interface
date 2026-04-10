window.__examLoadCallback({
  "title": "Array - Array - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Array",
      "questions": [
        {
          "id": 1,
          "question": "<p>The minimum number of comparisons required to determine if an integer appears\nmore than n/2 times in a sorted array of n integers is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta\\)(n)</p>",
            "<b>B.</b> <p>\\(\\Theta\\)(logn)</p>",
            "<b>C.</b> <p>\\(\\Theta\\)(log*n)</p>",
            "<b>D.</b> <p>\\(\\Theta\\)(1)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta\\)(logn)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/452/gate2008-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>An array of n numbers is given, where n is an even number. The maximum as well as the minimum of these n numbers needs to be determined. Which of the following is TRUE about the number of comparisons needed? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>At least 2n - c comparisons, for some constant c, are needed.</p>",
            "<b>B.</b> <p>At most 1.5n - 2 comparisons are needed.</p>",
            "<b>C.</b> <p>At least 2 nlog n comparisons are needed.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>At most 1.5n - 2 comparisons are needed.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1248/gate2007-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Given two arrays of numbers \\(a_{1},...,a_{n}\\) and \\(b_{1},...,b_{n}\\) where each number is 0 or 1,\nthe fastest algorithm to find the largest span(i,j) such that \\(a_{i}+a_{i+1}+...+a_{j}=b_{i}+b_{i+1}+.....+b_{j}\\) , or report that there is no such span, <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Takes \\(O(3^{n})\\) and \\(\\Omega (2^{n})\\) time if hashing is permitted</p>",
            "<b>B.</b> <p>Takes \\(O(n^{3})\\) and \\(\\Omega (n^{2.5})\\) time in the key comparison model</p>",
            "<b>C.</b> <p>Takes \\(\\Theta (n)\\) time and space</p>",
            "<b>D.</b> <p>Takes \\(O(\\sqrt{n})\\) time only if the sum of the 2n elements is an even number</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Takes \\(\\Theta (n)\\) time and space</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1832/gate2006-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>An element in an array X is called a leader if it is grater than all elements to the\nright of it in X. The best algorithm to find all leaders in an array. <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Solves it in linear time using a left to right pass of the array</p>",
            "<b>B.</b> <p>Solves in linear time using a right to left pass of the array</p>",
            "<b>C.</b> <p>Solves it is using divide and conquer in time \\(\\Theta\\)(nlogn)</p>",
            "<b>D.</b> <p>Solves it in time \\(\\Theta (n^{2})\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Solves in linear time using a right to left pass of the array</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/978/gate2006-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Let a and b be two sorted arrays containing n integers each, in non-decreasing order. Let c be a sorted array containing 2n integers obtained by merging the two arrays a and b. Assuming the arrays are indexed starting from 0, consider the following four statements<br><br>\nI. \\(a[i] \\geq b [i] \\Rightarrow c[2i] \\geq a [i]\\)<br>\nII. \\(a[i] \\geq b [i] \\Rightarrow c[2i] \\geq b [i]\\)<br>\nIII. \\(a[i] \\geq b [i] \\Rightarrow c[2i] \\leq a [i]\\)<br>\nIV. \\(a[i] \\geq b [i] \\Rightarrow c[2i] \\leq b [i]\\)<br><br>\nWhich of the following is TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>only I and II</p>",
            "<b>B.</b> <p>only I and IV</p>",
            "<b>C.</b> <p>only II and III</p>",
            "<b>D.</b> <p>only III and IV</p>"
          ],
          "correct_answer": "<b>C.</b> <p>only II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3820/gate2005-it-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A program P reads in 500 integers in the range [0,100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An array of 50 numbers</p>",
            "<b>B.</b> <p>An array of 100 numbers</p>",
            "<b>C.</b> <p>An array of 500 numbers</p>",
            "<b>D.</b> <p>A dynamically allocated array of 550 numbers</p>"
          ],
          "correct_answer": "<b>A.</b> <p>An array of 50 numbers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1347/gate2005-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Two matrices M1 and M2 are to be stored in arrays A and B respectively. Each array can be stored\neither in row-major or column-major order in contiguous memory locations. The time complexity of\nan algorithm to compute M1 x M2 will be <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>best if A is in row-major, and B is in column major order</p>",
            "<b>B.</b> <p>best if both are in row-major order</p>",
            "<b>C.</b> <p>best if both are in column-major order</p>",
            "<b>D.</b> <p>independent of the storage scheme</p>"
          ],
          "correct_answer": "<b>D.</b> <p>independent of the storage scheme</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1036/gate2004-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following algorithm for searching for a given number x in an unsorted\narray A[1.....n] having n distinct values : <br><br>\n(1) Choose an i uniformly at random from [1....n]<br>\n(2) If A[i] = x then stop else Goto 1; <br><br>\nAssuming that x is present A, What is the expected number of comparisons made\nby the algorithm before it terminates? <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n</p>",
            "<b>B.</b> <p>n-1</p>",
            "<b>C.</b> <p>2n</p>",
            "<b>D.</b> <p>n/2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>n</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/840/gate2002-2-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following declaration of a two-dimensional array in C : <br><br>\nChar a[100][100]<br>\nAssuming that the main memory is byte-addressable and that array is stored\nstarting form memory address 0, the address of a [40] [50] is <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4040</p>",
            "<b>B.</b> <p>4050</p>",
            "<b>C.</b> <p>5040</p>",
            "<b>D.</b> <p>5040</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4050</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/838/gate2002-2-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Suppose you are given an array s[1....n] and a procedure reverse (s, i, j) which reverses the order of elements in s between positions i and j (both inclusive). What does the following sequence do, where 1 \\(\\leqslant k \\leqslant\\) n:<br><pre><code> reverse (s, 1, k);\n reverse (s, k+1, n);\n reverse (s, 1, n); </code></pre> <br> <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Rotates s left by k positions</p>",
            "<b>B.</b> <p>Leaves s unchanged</p>",
            "<b>C.</b> <p>Reverses all elements of s</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Rotates s left by k positions</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/662/gate2000-2-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>An \\(n \\times n\\) array \\(v\\) is defined as follows:<br>\n\\(v\\left[i,j\\right] = i - j\\) for all \\(i, j, i \\leq n, 1 \\leq j \\leq n\\)<br>\nThe sum of the elements of the array \\(v\\) is <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>n-1</p>",
            "<b>C.</b> <p>\\(n^2 - 3n +2\\)</p>",
            "<b>D.</b> <p>\\(n^2 \\frac{\\left(n+1\\right)}{2}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/625/gate2000-1-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Suppose we want to arrange the n numbers stored in any array such that all negative values occur before all positive ones. Minimum number of exchanges required in the worst case is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n-1</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>n+1</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1466/gate1999-1-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Let A be a two dimensional array declared as follows:<br><pre><code> A: array [1 ... 10] [1 ... 15] of integer;</code></pre>\nAssuming that each integer takes one memory location, the array is stored in row-major order and the first element of the array is stored at location 100, what is the address of the element A[i][j]? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15i+j+84</p>",
            "<b>B.</b> <p>15j+i+84</p>",
            "<b>C.</b> <p>10i+j+89</p>",
            "<b>D.</b> <p>10j+i+89</p>"
          ],
          "correct_answer": "<b>A.</b> <p>15i+j+84</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1686/gate1998-2-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The average number of key comparisons required for a successful search for sequential search on n items is <br><br><strong>(GATE CSE 1996)</strong></p>",
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
          "id": 15,
          "question": "<p>In a compact single dimensional array representation for lower triangular matrices (i.e all the elements above the diagonal are zero) of size \\(n \\times n\\), non-zero elements, (i.e elements of lower triangle) of each row are stored one after another, starting from the first row, the index of the \\((i, j)^{th}\\) element of the lower triangular matrix in this new representation is: <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(i+j\\)</p>",
            "<b>B.</b> <p>\\(i+j-1\\)</p>",
            "<b>C.</b> <p>\\((j-1)+\\frac{i(i-1)}{2}\\)</p>",
            "<b>D.</b> <p>\\(i+\\frac{j(j-1)}{2}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\((j-1)+\\frac{i(i-1)}{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2452/gate1994-1-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
