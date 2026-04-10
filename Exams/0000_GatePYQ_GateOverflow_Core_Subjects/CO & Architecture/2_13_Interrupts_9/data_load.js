window.__examLoadCallback({
  "title": "CO & Architecture - Interrupts",
  "duration": 25,
  "sections": [
    {
      "name": "Interrupts",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"80274\"></a><div itemprop=\"text\"><p>On receiving an interrupt from a I/O&nbsp;device the CPU:</p>\n\n</div><br><br><b>GATE CSE 1987 | Question: 1-viii</b></p>",
          "type": "single",
          "options": [
            "<p>Halts for a predetermined time.</p>",
            "<p>Hands over control of address bus and data bus to the interrupting device.</p>",
            "<p>Branches off to the interrupt service routine immediately.</p>",
            "<p>Branches off to the interrupt service routine after completion of the current instruction.</p>"
          ],
          "correct_answer": "<p>Branches off to the interrupt service routine after completion of the current instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/80274/gate-cse-1987-question-1-viii\" target=\"_blank\">https://gateoverflow.in/80274/gate-cse-1987-question-1-viii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2590\"></a><div itemprop=\"text\"><p>In a vectored interrupt:</p>\n\n</div><br><br><b>GATE CSE 1995 | Question: 1.3</b></p>",
          "type": "single",
          "options": [
            "<p>The branch address is assigned to a fixed location in memory</p>",
            "<p>The interrupting source supplies the branch information to the processor through an interrupt vector</p>",
            "<p>The branch address is obtained from a register in the processor</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>The interrupting source supplies the branch information to the processor through an interrupt vector</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2590/gate-cse-1995-question-1-3\" target=\"_blank\">https://gateoverflow.in/2590/gate-cse-1995-question-1-3</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1657\"></a><div itemprop=\"text\"><p>Which of the following is true?</p>\n\n\n\n</div><br><br><b>GATE CSE 1998 | Question: 1.20</b></p>",
          "type": "single",
          "options": [
            "<p>Unless enabled, a CPU will not be able to process interrupts.</p>",
            "<p>Loop instructions cannot be interrupted till they complete.</p>",
            "<p>A processor checks for interrupts before executing a new instruction.</p>",
            "<p>Only level triggered interrupts are possible on microprocessors.</p>"
          ],
          "correct_answer": "<p>Unless enabled, a CPU will not be able to process interrupts.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1657/gate-cse-1998-question-1-20\" target=\"_blank\">https://gateoverflow.in/1657/gate-cse-1998-question-1-20</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"813\"></a><div itemprop=\"text\"><p>A device employing INTR line for device interrupt puts the CALL instruction on the data bus while:</p></div><br><br><b>GATE CSE 2002 | Question: 1.9</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\overline{\\text{INTA}} \\) is active</p>",
            "<p>HOLD is active</p>",
            "<p>READY is inactive</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( \\overline{\\text{INTA}} \\) is active</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/813/gate-cse-2002-question-1-9\" target=\"_blank\">https://gateoverflow.in/813/gate-cse-2002-question-1-9</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1392\"></a><div itemprop=\"text\"><p>A device with data transfer rate \\( 10 \\) KB/sec is connected to a CPU. Data is transferred byte-wise. Let the interrupt overhead be \\( 4\\mu \\)sec. The byte transfer time between the device interface&nbsp;register and CPU or memory is negligible. What is the minimum performance gain of operating the device under interrupt mode over operating it under program-controlled mode?</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 69</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 15 \\)</p>",
            "<p>\\( 25 \\)</p>",
            "<p>\\( 35 \\)</p>",
            "<p>\\( 45 \\)</p>"
          ],
          "correct_answer": "<p>\\( 25 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1392/gate-cse-2005-question-69\" target=\"_blank\">https://gateoverflow.in/1392/gate-cse-2005-question-69</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1300\"></a><div itemprop=\"text\"><p>A CPU generally handles an interrupt by executing an interrupt service routine:</p>\n\n</div><br><br><b>GATE CSE 2009 | Question: 8, UGCNET-June2012-III: 58</b></p>",
          "type": "single",
          "options": [
            "<p>As soon as an interrupt is raised.</p>",
            "<p>By checking the interrupt register at the end of fetch cycle.</p>",
            "<p>By checking the interrupt register after finishing the execution of the current instruction.</p>",
            "<p>By checking the interrupt register at fixed time intervals.</p>"
          ],
          "correct_answer": "<p>By checking the interrupt register after finishing the execution of the current instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1300/gate-cse-2009-question-8-ugcnet-june2012-iii-58\" target=\"_blank\">https://gateoverflow.in/1300/gate-cse-2009-question-8-ugcnet-june2012-iii-58</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"333228\"></a><div itemprop=\"text\"><p>Consider the following statements.</p>\n\n<ol start=\"1\" style=\"list-style-type:upper-roman\">\n\t<li>Daisy chaining is used to assign priorities in attending interrupts.</li>\n\t<li>When a device raises a vectored interrupt, the CPU does polling to identify the source of interrupt.</li>\n\t<li>In polling, the CPU periodically checks the status bits to know if any device needs its attention.</li>\n\t<li>During DMA, both the CPU and DMA controller can be bus masters at the same time.</li>\n</ol>\n\n<p>Which of the above statements is/are TRUE?</p>\n\n</div><br><br><b>GATE CSE 2020 | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>Ⅰ and&nbsp;Ⅱ only</p>",
            "<p>Ⅰ and&nbsp;Ⅳ only</p>",
            "<p>Ⅰ and&nbsp;Ⅲ only</p>",
            "<p>Ⅲ only</p>"
          ],
          "correct_answer": "<p>Ⅰ and&nbsp;Ⅲ only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333228/gate-cse-2020-question-3\" target=\"_blank\">https://gateoverflow.in/333228/gate-cse-2020-question-3</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"399287\"></a><div itemprop=\"text\">A keyboard connected to a computer is used at a rate of \\( 1 \\) keystroke per second. The computer system polls the keyboard every \\( 10 \\mathrm{~ms} \\) (milli seconds) to check for a keystroke and consumes \\( 100\\; \\mu \\mathrm{s} \\) (micro seconds) for each poll. If it is determined after polling that a key has been pressed, the system consumes an additional \\( 200\\; \\mu \\mathrm{s} \\) to process the keystroke. Let \\( T_{1} \\) denote the fraction of a second spent in polling and processing a keystroke.<br>\n<br>\nIn an alternative implementation, the system uses interrupts instead of polling. An interrupt is raised for every keystroke. It takes a total of \\( 1 \\mathrm{~ms} \\) for servicing an interrupt and processing a keystroke. Let \\( T_{2} \\) denote the fraction of a second spent in servicing the interrupt and processing a keystroke.<br>\n<br>\nThe ratio \\( \\dfrac{T_{1}}{T_{2}} \\) is _____________. (Rounded off to one decimal place)</div><br><br><b>GATE CSE 2023 | Question: 24</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10.2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/399287/gate-cse-2023-question-24\" target=\"_blank\">https://gateoverflow.in/399287/gate-cse-2023-question-24</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"460080\"></a><div itemprop=\"text\"><p>Suppose a program is running on a non-pipelined single processor computer system. The computer is connected to an external device that can interrupt the processor asynchronously. The processor needs to execute the interrupt service routine (ISR) to serve this interrupt. The following steps (not necessarily in order) are taken by the processor when the interrupt arrives:</p><ol start=\"1\" style=\"list-style-type: lower-roman;\"><li>The processor saves the content of the program counter.</li><li>The program counter is loaded with the start address of the ISR.</li><li>The processor finishes the present instruction.</li></ol><p>Which ONE of the following is the CORRECT sequence of steps?</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 1</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{(iii), (i), (ii)} \\)</p>",
            "<p>\\( \\text{(i), (iii), (ii)} \\)</p>",
            "<p>\\( \\text{(i), (ii), (iii)} \\)</p>",
            "<p>\\( \\text{(iii), (ii), (i)} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{(iii), (i), (ii)} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460080/gate-cse-2025-set-1-question-1\" target=\"_blank\">https://gateoverflow.in/460080/gate-cse-2025-set-1-question-1</a></p>"
        }
      ]
    }
  ]
});
