window.__examLoadCallback({
  "title": "Theory_of_Computation - Regular_Expression",
  "duration": 80,
  "sections": [
    {
      "name": "Regular_Expression",
      "questions": [
        {
          "id": 1,
          "question": "<p>Let M be the 5-state NFA with \\(\\epsilon\\)-transitions shown in the diagram below:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Regular_Expression\\q31_4d8bc041.webp\"><br>\nWhich one of the following regular expressions represents the language accepted\nby M ? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((00)^*  +  1(11)^*\\)</p>",
            "<b>B.</b> <p>\\(0^* + (1 + 0(00)^*)(11)^*\\)</p>",
            "<b>C.</b> <p>\\((00)^* + (1 + (00)^*)(11)^*\\)</p>",
            "<b>D.</b> <p>\\(0^+ + 1(11)^* + 0(11)^*\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(0^* + (1 + 0(00)^*)(11)^*\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422866/gate-cse-2024-set-2-question-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which one of the following regular expressions is equivalent to the language\naccepted by the DFA given below?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Regular_Expression\\q12_7b57ec64.webp\"><br> <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(0^*1(0+10^*1)^*\\)</p>",
            "<b>B.</b> <p>\\(0^*(10^*11)^*0^*\\)</p>",
            "<b>C.</b> <p>\\(0^*1(010^*1)^*0^*\\)</p>",
            "<b>D.</b> <p>\\(0(1+0^*10^*1)^*0^*\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(0^*1(0+10^*1)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422885/gate-cse-2024-set-2-question-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following two regular expressions over the alphabet \\( \\{0,1\\} \\) :<br><br>\n\\(\n\\begin{aligned}\n&amp; r=0^*+1^* \\\\\n&amp; s=01^*+10^*\n\\end{aligned}\n\\)\n<br><br>\nThe total number of strings of length less than or equal to 5 , which are neither in \\( r \\) nor in \\( s \\), is ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "44",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422791/gate-cse-2024-set-1-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following definition of a lexical token \\(id\\) for an identifier in a programming language, using extended regular expressions:\n<br><br> \\( letter \\rightarrow  [A-Za-z]\\)<br>\\( digit \\rightarrow  [0-9]\\)<br>\\( id \\rightarrow letter (letter\\;| \\;digit)^*\\)<br>  <br><br>Which one of the following Non-deterministic Finite-state Automata with -\ntransitions accepts the set of valid identifiers? (A double-circle denotes a final\nstate)<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Regular_Expression\\q9_ec1c38fc.jpg\"><br> <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399303/gate-cse-2023-question-9#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the Deterministic Finite-state Automaton (DFA) \\(A\\) shown below. The\nDFA runs on the alphabet {0, 1}, and has the set of states {s, p, q, r}, with s being\nthe start state and p being the only final state.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Regular_Expression\\q4_8a98cf53.jpg\"><br>Which one of the following regular expressions correctly describes the language\naccepted by \\(A\\)? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(1(0^*11)^*\\)</p>",
            "<b>B.</b> <p>\\(0(0 + 1)^*\\)</p>",
            "<b>C.</b> <p>\\(1(0 + 11)^*\\)</p>",
            "<b>D.</b> <p>\\(1(110^*)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(1(0 + 11)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399308/gate-cse-2023-question-4#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following regular expressions represent(s) the set of all binary numbers that are divisible by three? Assume that the string \\(\\epsilon\\) is divisible by three. <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\((0+1(01^*0)^*1)^*\\)</p>",
            "<b>B.</b> <p>\\((0+11+10(1+00)^*01)^*\\)</p>",
            "<b>C.</b> <p>\\((0^*(1(01^*0)^*1)^*)^*\\)</p>",
            "<b>D.</b> <p>\\((0+11+11(1+00)^*00)^*\\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\((0+1(01^*0)^*1)^*\\)</p>",
            "<b>B.</b> <p>\\((0+11+10(1+00)^*01)^*\\)</p>",
            "<b>C.</b> <p>\\((0^*(1(01^*0)^*1)^*)^*\\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357493/gate-cse-2021-set-2-question-47#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which one of the following regular expressions represents the set of all binary strings with an odd number of 1's? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(((0+1)^* 1(0+1)^*1)^*10^*\\)</p>",
            "<b>B.</b> <p>\\((0^*10^*10^*)^*0^*1\\)</p>",
            "<b>C.</b> <p>\\(10^*(0^*10^*10^*)^*\\)</p>",
            "<b>D.</b> <p>\\((0^*10^*10^*)^*10^*\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\((0^*10^*10^*)^*10^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "As per Official GATE CSE 2020 Answer key _MTA (Marks to All)<br> <a href=\"https://gateoverflow.in/333224/gate2020-cs-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>In some programming language, an identifier is permitted to be a letter followed by any number of letters or digits. If \\(L\\) and \\(D\\) denote the sets of letters and digits respectively, which of the following expressions defines an identifier? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((L+D)^{+}\\)</p>",
            "<b>B.</b> <p>\\(\\text { (L.D)* }\\)</p>",
            "<b>C.</b> <p>\\(L(L+D)^{*}\\)</p>",
            "<b>D.</b> <p>\\(L(L . D)^{*}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(L(L+D)^{*}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2596/gate1995-1-9-isro2017-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let \\(L=\\left\\{w \\in(0+1)^{*} \\mid w \\text { has even number of } 1 \\text { 's }\\right\\}\\), i.e. \\(L\\) is the set of all bit strings with even number of 1's. Which one of the regular expression below represents \\(L\\)? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((0^*10^*1)^*\\)</p>",
            "<b>B.</b> <p>\\(0^*(10^*10^*)^*\\)</p>",
            "<b>C.</b> <p>\\(0^*(10^*1^*)^*0^*\\)</p>",
            "<b>D.</b> <p>\\(0^*1(10^*1)^*10^*\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(0^*(10^*10^*)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55547/isro2016-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which one of the following regular expressions represents the language: the set of all binary strings having two consecutive 0s and two consecutive 1s? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(0+1)*0011(0+1)*+(0+1)*1100(0+1)*</p>",
            "<b>B.</b> <p>(0+1)*(00(0+1)*11+11(0+1)*00)(0+1)*</p>",
            "<b>C.</b> <p>(0+1)*00(0+1)*+(0+1)*11(0+1)*</p>",
            "<b>D.</b> <p>00(0+1)*11+11(0+1)*00</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(0+1)*(00(0+1)*11+11(0+1)*00)(0+1)*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39647/gate2016-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The length of the shortest string NOT in the language (over  \\(\\Sigma\\)={a,b}) of the following regular expression is _________.  <br>a*b* (ba)* a* <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2049/gate2014-3-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Let L = {w \\(\\in\\) (0 + 1)*|w has even number of 1s}, i.e. L is the set of all bit strings\nwith even number of 1s. Which one of the regular expressions below represents L? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(0 *10 *1) *</p>",
            "<b>B.</b> <p>0 * (10 *10 *) *</p>",
            "<b>C.</b> <p>0 * (10 *1) * 0 *</p>",
            "<b>D.</b> <p>0 *1(10 *1) *10 *</p>"
          ],
          "correct_answer": "<b>B.</b> <p>0 * (10 *10 *) *</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2340/gate2010-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which one of the following languages over the alphabet {0,1} is described by the regular expression: (0+1)*0(0+1)*0(0+1)*? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The set of all strings containing the substring 00.</p>",
            "<b>B.</b> <p>The set of all strings containing at most two 0's.</p>",
            "<b>C.</b> <p>The set of all strings containing at least two 0's.</p>",
            "<b>D.</b> <p>The set of all strings that begin and end with either 0 or 1</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The set of all strings containing at least two 0's.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1307/gate2009-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following regular expressions describes the language over\\(\\{0, 1\\}\\) consisting of strings that contain exactly two 1's? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((0 + 1)^ * \\ 11(0 + 1) ^*\\)</p>",
            "<b>B.</b> <p>\\(0 ^* \\ 110 ^*\\)</p>",
            "<b>C.</b> <p>\\(0 ^* 10 ^* 10 ^*\\)</p>",
            "<b>D.</b> <p>\\((0 + 1) ^* 1(0 + 1) ^* 1 (0 + 1) ^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(0 ^* 10 ^* 10 ^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3265/gate2008-it-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the regular expression \\(R = (a + b)^* \\ (aa + bb) \\ (a + b)^*\\)<br>\nWhich one of the regular expressions given below defines the same language as defined by the regular expression R ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((a(ba)^* + b(ab)^*)(a + b)^+\\)</p>",
            "<b>B.</b> <p>\\((a(ba)^* + b(ab)^*)^*(a + b)^*\\)</p>",
            "<b>C.</b> <p>\\((a(ba)^* (a + bb) + b(ab)^*(b + aa))(a + b)^*\\)</p>",
            "<b>D.</b> <p>\\((a(ba)^* (a + bb) + b(ab)^*(b + aa))(a + b)^+\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\((a(ba)^* (a + bb) + b(ab)^*(b + aa))(a + b)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3525/gate2007-it-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Consider the regular expression \\(R = (a + b)^* (aa + bb) (a + b)^*\\)<br>\nWhich deterministic finite automaton accepts the language represented by the regular expression R?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Regular_Expression\\q72_68fd615c.jpg\"><br> <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3524/gate2007-it-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Consider the regular expression \\(R = (a + b)^* (aa + bb) (a + b)^*\\) <br>\nWhich of the following non-deterministic finite automata recognizes the language defined by the regular expression R? Edges labeled \\(\\lambda\\) denote transitions on the empty string.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Regular_Expression\\q71_f699dc08.jpg\"><br> <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3523/gate2007-it-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Which regular expression best describes the language accepted by the non-deterministic automaton below?\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Regular_Expression\\q5_1a0e53b1.jpg\"><br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((a + b)^* \\ a(a + b)b\\)</p>",
            "<b>B.</b> <p>\\((abb)^*\\)</p>",
            "<b>C.</b> <p>\\((a + b)^* \\ a(a + b)^* \\ b(a + b)^*\\)</p>",
            "<b>D.</b> <p>\\((a + b)^*\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((a + b)^* \\ a(a + b)b\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3544/gate2006-it-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Which of the following statements is TRUE about the regular expression 01*0? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It represents a finite set of finite strings.</p>",
            "<b>B.</b> <p>It represents an infinite set of finite strings.</p>",
            "<b>C.</b> <p>It represents a finite set of infinite strings.</p>",
            "<b>D.</b> <p>It represents an infinite set of infinite strings.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It represents an infinite set of finite strings.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3749/gate2005-it-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Which one of the following regular expressions is NOT equivalent to the regular expression \\((a + b + c)^*?\\) <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((a^* + b^* + c^*)^*\\)</p>",
            "<b>B.</b> <p>\\((a^*b^*c^*)^*\\)</p>",
            "<b>C.</b> <p>\\(((ab)^* + c^*)^*\\)</p>",
            "<b>D.</b> <p>\\((a^*b^* + c^*)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(((ab)^* + c^*)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3648/gate2004-it-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>The regular expression 0*(10*)* denotes the same set as <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(1*0)*1*</p>",
            "<b>B.</b> <p>0 + (0 + 10) *</p>",
            "<b>C.</b> <p>(0 + 1)* 10(0 + 1)*</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(1*0)*1*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/905/gate2003-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Let S and T be languages over \\(\\Sigma=\\{a.b\\}\\) represented by the regular expressions \\((a+b^*)^* \\text{ and } (a+b)^*\\), respectively. Which of the following is true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S \\subset T\\)</p>",
            "<b>B.</b> <p>\\(T \\subset S\\)</p>",
            "<b>C.</b> <p>S = T</p>",
            "<b>D.</b> <p>\\(S \\cap T = \\phi\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S = T</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/627/gate2000-1-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>The string 1101 does not belong to the set represented by <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(110^*(0 + 1)\\)</p>",
            "<b>B.</b> <p>\\(1(0 + 1)^*101\\)</p>",
            "<b>C.</b> <p>\\((10)^*(01)^*(00 + 11)^*\\)</p>",
            "<b>D.</b> <p>\\((00 + (11)^*0)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\((10)^*(01)^*(00 + 11)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1649/gate1998-1-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>If the regular set \\(A\\) is represented by \\(A = (01 + 1)^*\\) and the regular set \\(B\\) is represented by \\(B = \\left(\\left(01\\right)^*1^*\\right)^*\\), which of the following is true? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(A \\subset B\\)</p>",
            "<b>B.</b> <p>\\(B \\subset A\\)</p>",
            "<b>C.</b> <p>\\(A\\) and \\(B\\) are incomparable</p>",
            "<b>D.</b> <p>\\(A=B\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(A=B\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1646/gate1998-1-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Which one of the following regular expressions over {0,1} denotes the set of all strings not containing 100 as substring? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(0^*(1+0)^*\\)</p>",
            "<b>B.</b> <p>\\(0^*1010^*\\)</p>",
            "<b>C.</b> <p>\\(0^*1^*01^*\\)</p>",
            "<b>D.</b> <p>\\(0^*(10+1)^*\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(0^*(10+1)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2260/gate1997-6-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>Which two of the following four regular expressions are equivalent? (\\(\\varepsilon\\) is the empty string).<br>\n(i).   \\((00)^ * (\\varepsilon +0)\\)<br>\n(ii).  \\((00)^*\\)<br>\n(iii). \\(0^*\\)<br>\n(iv).  \\(0(00)^*\\)<br> <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) and (ii)</p>",
            "<b>B.</b> <p>(ii) and (iii)</p>",
            "<b>C.</b> <p>(i) and (iii)</p>",
            "<b>D.</b> <p>(iii) and (iv)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(i) and (iii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2712/gate1996-1-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>In some programming language, an identifier is permitted to be a letter followed by any number of letters or digits. If L and D denote the sets of letters and digits respectively, which of the following expressions defines an identifier? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((L + D)^+\\)</p>",
            "<b>B.</b> <p>\\((L.D)^*\\)</p>",
            "<b>C.</b> <p>\\(L(L + D)^*\\)</p>",
            "<b>D.</b> <p>\\(L(L.D)^*\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(L(L + D)^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2596/gate1995-1-9-isro2017-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Which of the following regular expression identities is/are TRUE? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(r^{(^*)} =r^*\\)</p>",
            "<b>B.</b> <p>\\((r^*s^*)=(r+s)^*\\)</p>",
            "<b>C.</b> <p>\\((r+s)^* = r^* + s^*\\)</p>",
            "<b>D.</b> <p>\\(r^*s^* = r^*+s^*\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(r^{(^*)} =r^*\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/575/gate1992-02-xvii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only.<br>Let \\(r=1(1+0)^*, s=11^*0 \\text{ and } t=1^*0\\) be three regular expressions. Which one of the following is true? <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L(s) \\subseteq L(r) \\text{ and } L(s) \\subseteq L(t)\\)</p>",
            "<b>B.</b> <p>\\(L(r) \\subseteq L(s) \\text{ and }  L(s) \\subseteq L(t)\\)</p>",
            "<b>C.</b> <p>\\(L(s) \\subseteq L(t) \\text{ and }  L(s) \\subseteq L(r)\\)</p>",
            "<b>D.</b> <p>\\(L(t) \\subseteq L(s)\\text{ and }  L(s) \\subseteq L(r)\\)</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(L(s) \\subseteq L(r) \\text{ and } L(s) \\subseteq L(t)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/527/gate1991-03-xiii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
