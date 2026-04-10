window.__examLoadCallback({
  "title": "Propositional_Logic - Propositional_Logic - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Propositional_Logic",
      "questions": [
        {
          "id": 1,
          "question": "<p>Let \\(P(x) \\) be an arbitrary predicate over the domain of natural numbers. Which ONE of the following statements is TRUE? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((P(0) \\land (\\forall x [P(x) \\Rightarrow P(x+1)])) \\Rightarrow (\\forall x P(x)) \\)</p>",
            "<b>B.</b> <p>\\((P(0) \\land (\\forall x [P(x) \\Rightarrow P(x-1)])) \\Rightarrow (\\forall x P(x)) \\)</p>",
            "<b>C.</b> <p>\\((P(1000) \\land (\\forall x [P(x) \\Rightarrow P(x-1)])) \\Rightarrow (\\forall x P(x)) \\)</p>",
            "<b>D.</b> <p>\\((P(1000) \\land (\\forall x [P(x) \\Rightarrow P(x+1)])) \\Rightarrow (\\forall x P(x)) \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((P(0) \\land (\\forall x [P(x) \\Rightarrow P(x+1)])) \\Rightarrow (\\forall x P(x)) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460830/gate-cse-2025-set-2-question-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which of the following predicate logic formulae/formula is/are CORRECT representation(s) of the statement: \"Everyone has exactly one mother\"?\n<br><br>The meanings of the predicates used are:\n<br>\n\\(mother(y,x): y\\) is the mother of \\( x \\)\n<br>\\(noteq(x,y): x\\) and  \\( y \\) are not equal <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\( \\forall x \\exists y \\exists z (mother(y, x) \\land \\neg mother(z, x)) \\)</p>",
            "<b>B.</b> <p>\\( \\forall x \\exists y [mother(y, x) \\land \\forall z (noteq(z, y) \\to \\neg mother(z, x))] \\)</p>",
            "<b>C.</b> <p>\\( \\forall x \\forall y [mother(y, x) \\to \\exists z (mother(z, x) \\land \\neg noteq(z, y))] \\)</p>",
            "<b>D.</b> <p>\\( \\forall x \\exists y [mother(y, x) \\land \\neg \\exists z (noteq(z, y) \\land mother(z, x))] \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\( \\forall x \\exists y [mother(y, x) \\land \\forall z (noteq(z, y) \\to \\neg mother(z, x))] \\)</p>",
            "<b>D.</b> <p>\\( \\forall x \\exists y [mother(y, x) \\land \\neg \\exists z (noteq(z, y) \\land mother(z, x))] \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460042/gate-cse-2025-set-1-question-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let \\( p \\) and \\( q \\) be the following propositions:<br><br>\n\\( p \\) : Fail grade can be given.<br>\n\\( q \\) : Student scores more than \\( 50 \\% \\) marks.\n<br><br>\nConsider the statement: \"Fail grade cannot be given when student scores more than \\( 50 \\% \\) marks.\"\n<br>\nWhich one of the following is the CORRECT representation of the above statement in propositional logic? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(  q \\rightarrow \\neg p \\)</p>",
            "<b>B.</b> <p>\\(  q \\rightarrow p \\)</p>",
            "<b>C.</b> <p>\\(  p \\rightarrow q \\)</p>",
            "<b>D.</b> <p>\\( \\neg p \\rightarrow q \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(  q \\rightarrow \\neg p \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422895/gate-cse-2024-set-2-question-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Geetha has a conjecture about integers, which is of the form<br>\\(\\forall x\\left [P(x)\\Rightarrow \\exists yQ(x,y)  \\right ]  \\)<br>where \\(P\\) is a statement about integers, and \\(Q\\) is a statement about pairs of integers.\nWhich of the following (one or more) option(s) would imply Geetha's conjecture? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(\\exists  x\\left [P(x)\\wedge  \\forall yQ(x,y)  \\right ]  \\)</p>",
            "<b>B.</b> <p>\\(\\forall x  \\forall y  Q(x,y)    \\)</p>",
            "<b>C.</b> <p>\\(\\exists  y \\forall x \\left [P(x) \\Rightarrow   Q(x,y)  \\right ]  \\)</p>",
            "<b>D.</b> <p>\\(\\exists   x \\left [P(x) \\wedge  \\exists y  Q(x,y)  \\right ]  \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>\\(\\forall x  \\forall y  Q(x,y)    \\)</p>",
            "<b>C.</b> <p>\\(\\exists  y \\forall x \\left [P(x) \\Rightarrow   Q(x,y)  \\right ]  \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399295/gate-cse-2023-question-16#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Choose the correct choice(s) regarding the following proportional logic assertion S:<br><br>\\(S: (( P \\wedge Q) \\rightarrow R) \\rightarrow (( P \\wedge Q) \\rightarrow (Q \\rightarrow R))\\) <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>S  is neither a tautology nor a contradiction</p>",
            "<b>B.</b> <p>S  is a tautology</p>",
            "<b>C.</b> <p>S  is a contradiction</p>",
            "<b>D.</b> <p>The antecedent of S is logically equivalent to the consequent of S</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>S  is a tautology</p>",
            "<b>D.</b> <p>The antecedent of S is logically equivalent to the consequent of S</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357525/gate-cse-2021-set-2-question-15#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Let p and q be two propositions. Consider the following two formulae in propositional logic.<br>\n<br>\\(S1: (\\neg p\\wedge(p\\vee q))\\rightarrow q\\)<br>\\(S2: q\\rightarrow(\\neg p\\wedge(p\\vee q))\\)<br><br>Which one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are tautologies.</p>",
            "<b>B.</b> <p>S1 is a tautology but S2 is not a tautology</p>",
            "<b>C.</b> <p>S1 is not a tautology but S2 is a tautology</p>",
            "<b>D.</b> <p>Niether S1 nor S2 is a tautology</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S1 is a tautology but S2 is not a tautology</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357445/gate-cse-2021-set-1-question-7#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Given that<br>B(a)  means \"a is a bear\"<br>F(a)  means \"a is a fish\" and<br>E(a,b)  means \"a eats b\"<br>Then what is the best meaning of<br>\\(\\forall x[F(x) \\rightarrow \\forall y(E(y, x) \\rightarrow b(y))]\\) <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every fish is eaten by some bear</p>",
            "<b>B.</b> <p>Bears eat only fish</p>",
            "<b>C.</b> <p>Every bear eats fish</p>",
            "<b>D.</b> <p>Only bears eat fish</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Only bears eat fish</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331314/isro2020-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which one of the following predicate formulae is NOT logically valid?\n<br>\nNote that W is a predicate formula without any free occurrence of x. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\forall x(p(x)\\vee W)\\equiv \\forall xp(x)\\vee W\\)</p>",
            "<b>B.</b> <p>\\(\\exists x(p(x)\\wedge W)\\equiv \\exists xp(x)\\wedge W\\)</p>",
            "<b>C.</b> <p>\\(\\forall x(p(x)\\rightarrow W)\\equiv \\forall xp(x)\\rightarrow W\\)</p>",
            "<b>D.</b> <p>\\(\\exists x(p(x)\\rightarrow W)\\equiv \\forall xp(x)\\rightarrow W\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\forall x(p(x)\\rightarrow W)\\equiv \\forall xp(x)\\rightarrow W\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333192/gate2020-cs-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the first-order logic sentence <br> \\(\\varphi \\equiv \\exists s\\exists t\\exists u\\forall v\\forall w\\forall x\\forall y\\varphi (s,t,u,v,w,x,y)\\)<br>  where \\(\\varphi (s,t,u,v,w,x,y)\\) is a quantifier-free first-order logic formula using only predicate\nsymbols, and possibly equality, but no function symbols. Suppose \\(\\varphi \\) has a model with a universe containing 7 elements.\nWhich one of the following statements is necessarily true? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There exists at least one model of \\(\\varphi\\) with universe of size less than or equal to 3.</p>",
            "<b>B.</b> <p>There exists no model of \\(\\varphi\\) with universe of size less than or equal to 3.</p>",
            "<b>C.</b> <p>There exists no model of \\(\\varphi\\) with universe of size greater than 7.</p>",
            "<b>D.</b> <p>Every model of \\(\\varphi\\) has a universe of size equal to 7.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>There exists at least one model of \\(\\varphi\\) with universe of size less than or equal to 3.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204102/gate2018-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which one of the following Boolean expressions is NOT a tautology? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(((a \\rightarrow b) \\wedge(b \\rightarrow c)) \\rightarrow(a \\rightarrow c)\\)</p>",
            "<b>B.</b> <p>\\((a \\leftrightarrow c) \\rightarrow(\\sim b \\rightarrow(a \\wedge c))\\)</p>",
            "<b>C.</b> <p>\\((a \\wedge b \\wedge c) \\rightarrow(c \\vee a)\\)</p>",
            "<b>D.</b> <p>\\(a \\rightarrow(b \\rightarrow a)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\((a \\leftrightarrow c) \\rightarrow(\\sim b \\rightarrow(a \\wedge c))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128691/isro2017-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Let p, q, r denote the statements \"It is raining ,\" It is cold\", and \" It is pleasant,\"\nrespectively. Then the statement \"It is not raining and it is pleasant, and it is not pleasant\nonly if it is raining and it is cold\" is represented by <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((\\neg p\\wedge r)\\wedge (\\neg r\\rightarrow (p\\wedge q))\\)</p>",
            "<b>B.</b> <p>\\((\\neg p\\wedge r)\\wedge ((p\\wedge q)\\rightarrow \\neg r)\\)</p>",
            "<b>C.</b> <p>\\((\\neg p\\wedge r)\\vee ((p\\wedge q)\\rightarrow \\neg r)\\)</p>",
            "<b>D.</b> <p>\\((\\neg p\\wedge r)\\vee (r \\rightarrow (p\\wedge q))\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((\\neg p\\wedge r)\\wedge (\\neg r\\rightarrow (p\\wedge q))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118151/gate2017-2-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Let p, q, and r be propositions and the expression (p\\(\\rightarrow\\)q)\\(\\rightarrow\\)r be a contradiction. Then, the\nexpression (r\\(\\rightarrow\\)p)\\(\\rightarrow\\)q is <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a tautology</p>",
            "<b>B.</b> <p>a tautology</p>",
            "<b>C.</b> <p>always TRUE when p is FALSE</p>",
            "<b>D.</b> <p>always TRUE when q is TRUE</p>"
          ],
          "correct_answer": "<b>D.</b> <p>always TRUE when q is TRUE</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118310/gate2017-1-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the first-order logic sentence \\(F:\\forall x(\\exists yR(x,y))\\). Assuming non-empty logical\ndomains, which of the sentences below are implied by F? <br>I. \\(\\exists y(\\exists xR(x,y))\\)<br> II. \\(\\exists y(\\forall xR(x,y)) \\)<br>III. \\(\\forall y(\\exists xR(x,y))\\)<br> IV. \\(\\neg \\exists x(\\forall y\\neg R(x,y))\\) <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>IV only</p>",
            "<b>B.</b> <p>I and IV only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118701/gate2017-1-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The statement \\((\\neg p)\\Rightarrow (\\neg q)\\) is logically equivalent to which of the statements below? <br>I. \\( p\\Rightarrow q \\) <br>II. \\(q \\Rightarrow p \\)<br>III. \\((\\neg q)\\vee p\\) <br>IV. \\((\\neg p)\\vee q\\) <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and IV only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118698/gate2017-1-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following expressions:<br>\n(i) false <br>\n(ii) Q <br>\n(iii) true <br>\n(iv) \\(P\\vee Q\\) <br>\n(v) \\(\\neg Q \\vee P\\) <br>\nThe number of expressions given above that are logically implied by \\(P \\wedge (P \\Rightarrow Q)\\) is ________. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39568/gate2016-2-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
