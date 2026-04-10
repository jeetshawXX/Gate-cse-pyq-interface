window.__examLoadCallback({
  "title": "Programming and DS - Data Structures - Linked List",
  "duration": 19,
  "sections": [
    {
      "name": "Linked List",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"337211\"></a><div itemprop=\"text\"><p>In a circularly linked list organization, insertion of a record involves the modification of</p>\n\n</div><br><br><b>Data Structures: NIELIT 2016 MAR Scientist C</b></p>",
          "type": "single",
          "options": [
            "<p>no pointer</p>",
            "<p>\\( 1 \\) pointer</p>",
            "<p>\\( 2 \\) pointers</p>",
            "<p>\\( 3 \\) pointers</p>"
          ],
          "correct_answer": "<p>\\( 2 \\) pointers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/337211/nielit-2016-mar-scientist-c-section-c-54\" target=\"_blank\">https://gateoverflow.in/337211/nielit-2016-mar-scientist-c-section-c-54</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"336794\"></a><div itemprop=\"text\"><p>The address field of linked list :&nbsp;</p>\n\n</div><br><br><b>Data Structures: NIELIT 2017 DEC Scientific Assistant A</b></p>",
          "type": "single",
          "options": [
            "<p>Contain address of next node&nbsp;</p>",
            "<p>May contain null character</p>",
            "<p>Contain address of next pointer</p>",
            "<p>Both \\( \\left (A \\right) \\) and \\( \\left ( B \\right) \\)</p>"
          ],
          "correct_answer": "<p>Both \\( \\left (A \\right) \\) and \\( \\left ( B \\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336794/nielit-2017-dec-scientific-assistant-a-section-b-52\" target=\"_blank\">https://gateoverflow.in/336794/nielit-2017-dec-scientific-assistant-a-section-b-52</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"336374\"></a><div itemprop=\"text\"><p>What does the following function&nbsp;do for a given Linked List with first node as head?&nbsp;</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void fun1(struct node* head) \n{ \nif(head==NULL) \nreturn; \nfun1(head-&gt;next); \nprintf(\"%d\",head-&gt;data); \n} </pre>\n\n</div><br><br><b>Data Structures: NIELIT 2017 July Scientist B (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>Prints all nodes of linked lists</p>",
            "<p>Prints all nodes of linked list in reverse order</p>",
            "<p>Prints alternate nodes of Linked List</p>",
            "<p>Prints alternate nodes in reverse order</p>"
          ],
          "correct_answer": "<p>Prints all nodes of linked list in reverse order</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336374/nielit-2017-july-scientist-b-cs-section-b-1\" target=\"_blank\">https://gateoverflow.in/336374/nielit-2017-july-scientist-b-cs-section-b-1</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"336372\"></a><div itemprop=\"text\"><p>Consider the following function that takes reference to head of a Doubly Linked List as parameter. Assume that a node of doubly linked list has previous pointer as \\( \\textit{prev} \\) and next pointer as \\( \\textit{next} \\).</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void fun(struct node **head_ref) \n{ \nstruct node *temp=NULL; \nstruct node *current=*head_ref; \nwhile(current!=NULL) \n{ \n temp=current-&gt;prev; \n current-&gt;prev=current-&gt;next; \n current-&gt;next=temp; \n current=current-&gt;prev; \n} \nif(temp!=NULL) \n*head_ref=temp-&gt;prev; \n} </pre>\n\n<p>Assume that reference of head of following doubly linked list is passed to above function</p>\n\n<p>\\( 1 \\leftrightarrow&nbsp;2 \\leftrightarrow 3 \\leftrightarrow 4 \\leftrightarrow 5 \\leftrightarrow 6 \\). What should be the modified linked list after the function call?&nbsp;</p>\n\n</div><br><br><b>Data Structures: NIELIT 2017 July Scientist B (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2 \\leftrightarrow 1 \\leftrightarrow 4 \\leftrightarrow 3 \\leftrightarrow 6 \\leftrightarrow 5 \\)</p>",
            "<p>\\( 5 \\leftrightarrow 4 \\leftrightarrow 3 \\leftrightarrow 2 \\leftrightarrow 1 \\leftrightarrow 6 \\)</p>",
            "<p>\\( 6&nbsp; \\leftrightarrow 5 \\leftrightarrow 4 \\leftrightarrow 3 \\leftrightarrow 2 \\leftrightarrow 1 \\)</p>",
            "<p>\\( 6 \\leftrightarrow 5 \\leftrightarrow 4 \\leftrightarrow 3 \\leftrightarrow 1 \\leftrightarrow 2 \\)</p>"
          ],
          "correct_answer": "<p>\\( 6&nbsp; \\leftrightarrow 5 \\leftrightarrow 4 \\leftrightarrow 3 \\leftrightarrow 2 \\leftrightarrow 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336372/nielit-2017-july-scientist-b-cs-section-b-3\" target=\"_blank\">https://gateoverflow.in/336372/nielit-2017-july-scientist-b-cs-section-b-3</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"369309\"></a><div itemprop=\"text\"><p>Which type of linked list stores the address of the header node in the next field of the last node ?</p>\n\n</div><br><br><b>Data Structures: NIELIT 2021 Dec Scientist A</b></p>",
          "type": "single",
          "options": [
            "<p>Singly linked list</p>",
            "<p>Circular linked list</p>",
            "<p>Doubly linked list</p>",
            "<p>Circular header linked list</p>"
          ],
          "correct_answer": "<p>Circular linked list</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/369309/nielit-2021-dec-scientist-a-section-b-104\" target=\"_blank\">https://gateoverflow.in/369309/nielit-2021-dec-scientist-a-section-b-104</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"366969\"></a><div itemprop=\"text\"><p>The following type definition is for a ____________ .&nbsp;</p>\n\n<p>type pointer \\( = \\; \\uparrow \\) node</p>\n\n<p>node =&nbsp;record&nbsp;</p>\n\n<p>data :&nbsp;integer</p>\n\n<p>link :&nbsp;pointer</p>\n\n<p>end;</p>\n\n</div><br><br><b>Data Structures: NIELIT 2021 Dec Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>Structure&nbsp;</p>",
            "<p>Link List&nbsp;</p>",
            "<p>Stack</p>",
            "<p>Doubly link list&nbsp;</p>"
          ],
          "correct_answer": "<p>Link List&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/366969/nielit-2021-dec-scientist-b-section-b-48\" target=\"_blank\">https://gateoverflow.in/366969/nielit-2021-dec-scientist-b-section-b-48</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"351592\"></a><div itemprop=\"text\"><p>Which type of linked list stores the address of the header node in the next field of the last node?</p>\n\n</div><br><br><b>Data Structures: NIELIT Scientist B 2020 November: 90</b></p>",
          "type": "single",
          "options": [
            "<p>Singly linked list</p>",
            "<p>Circular linked list</p>",
            "<p>Doubly linked list</p>",
            "<p>Hashed list</p>"
          ],
          "correct_answer": "<p>Circular linked list</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/351592/nielit-scientist-b-2020-november-90\" target=\"_blank\">https://gateoverflow.in/351592/nielit-scientist-b-2020-november-90</a></p>"
        }
      ]
    }
  ]
});
