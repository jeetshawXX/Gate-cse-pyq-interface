window.__examLoadCallback({
  "title": "CO and Architecture - IO Handling",
  "duration": 17,
  "sections": [
    {
      "name": "IO Handling",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"487\"></a><div itemprop=\"text\"><p>Which of the following statements about synchronous and asynchronous I/O is NOT true?</p>\n\n</div><br><br><b>CO & Architecture: GATE CSE 2008 | Question: 64, ISRO2009</b></p>",
          "type": "single",
          "options": [
            "<p>An ISR is invoked on completion of I/O in synchronous I/O but not in asynchronous I/O</p>",
            "<p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service Routine) is invoked after completion of the I/O</p>",
            "<p>A process making a synchronous I/O call waits until I/O is complete, but a process making an asynchronous&nbsp;I/O call does not wait for completion of the I/O</p>",
            "<p>In the case of synchronous I/O, the process waiting for the completion of I/O is woken up by the ISR that is invoked after the completion of I/O</p>"
          ],
          "correct_answer": "<p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service Routine) is invoked after completion of the I/O</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/487/gate-cse-2008-question-64-isro2009-13\" target=\"_blank\">https://gateoverflow.in/487/gate-cse-2008-question-64-isro2009-13</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"49917\"></a><div itemprop=\"text\">\n<p>An interrupt in which the external device supplies its address as well as the interrupt requests is known as</p>\n\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2008 | Question: 36</b></p>",
          "type": "single",
          "options": [
            "<p>vectored interrupt</p>",
            "<p>maskable&nbsp;<span style=\"line-height: 20.8px;\">interrupt</span></p>",
            "<p>non&nbsp;maskable&nbsp;<span style=\"line-height: 20.8px;\">interrupt</span></p>",
            "<p>designated interrupt</p>"
          ],
          "correct_answer": "<p>vectored interrupt</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/49917/isro-cse-2008-question-36\" target=\"_blank\">https://gateoverflow.in/49917/isro-cse-2008-question-36</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"18581\"></a><div itemprop=\"text\">\n<p>On receiving an interrupt from an I/O device,the CPU</p>\n\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2009 | Question: 78</b></p>",
          "type": "single",
          "options": [
            "<p>Halts for a predetermined time</p>",
            "<p>Branches off to the interrupt service routine after completion of the current instruction</p>",
            "<p><span style=\"line-height: 20.8px;\">Branches off to the&nbsp;interrupt service routine immediately</span></p>",
            "<p><span style=\"line-height: 20.8px;\"><span style=\"line-height: 20.8px;\">Hands over control of address bus and data bus to the interrupting device</span></span></p>"
          ],
          "correct_answer": "<p>Branches off to the interrupt service routine after completion of the current instruction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/18581/isro-cse-2009-question-78\" target=\"_blank\">https://gateoverflow.in/18581/isro-cse-2009-question-78</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"52487\"></a><div itemprop=\"text\"><p>Two control signals in microprocessor which are related to Direct Memory Access (DMA) are</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2011 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{INTR &amp; INTA} \\)</p>",
            "<p>\\( \\textsf{RD &amp; WR} \\)</p>",
            "<p>\\( \\textsf{S0 &amp; S1} \\)</p>",
            "<p>\\( \\textsf{HOLD &amp; HLDA} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{HOLD &amp; HLDA} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52487/isro-cse-2011-question-39\" target=\"_blank\">https://gateoverflow.in/52487/isro-cse-2011-question-39</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"52824\"></a><div itemprop=\"text\">\n<p>In DMA transfer scheme, the transfer scheme other than burst mode is</p>\n\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2011 | Question: 58</b></p>",
          "type": "single",
          "options": [
            "<p>cycle technique</p>",
            "<p>stealing&nbsp;<span style=\"line-height: 20.8px;\">technique</span></p>",
            "<p>cycle stealing&nbsp;<span style=\"line-height: 20.8px;\">technique</span></p>",
            "<p>cycle bypass&nbsp;<span style=\"line-height: 20.8px;\">technique</span></p>"
          ],
          "correct_answer": "<p>cycle stealing&nbsp;<span style=\"line-height: 20.8px;\">technique</span></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52824/isro-cse-2011-question-58\" target=\"_blank\">https://gateoverflow.in/52824/isro-cse-2011-question-58</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"213523\"></a><div itemprop=\"text\"><p>Of the following,&nbsp;which best characterizes computers that use memory-mapped&nbsp;\\( \\text{I/O}? \\)</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2018 | Question: 65</b></p>",
          "type": "single",
          "options": [
            "<p>The computer provides special instructions for manipulating \\( \\text{I/O} \\) ports</p>",
            "<p>\\( \\text{I/O} \\) ports are placed at addresses on the bus and are accessed just like other memory locations</p>",
            "<p>To perform \\( \\text{I/O} \\) operations. it is sufficient to place the data in an address register and call channel to perform the operation</p>",
            "<p>\\( \\text{I/O} \\) can be performed only when memory management hardware is turned on</p>"
          ],
          "correct_answer": "<p>\\( \\text{I/O} \\) ports are placed at addresses on the bus and are accessed just like other memory locations</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213523/isro-cse-2018-question-65\" target=\"_blank\">https://gateoverflow.in/213523/isro-cse-2018-question-65</a></p>"
        }
      ]
    }
  ]
});
