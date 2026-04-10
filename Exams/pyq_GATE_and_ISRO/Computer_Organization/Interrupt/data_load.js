window.__examLoadCallback({
  "title": "Computer_Organization - Interrupt",
  "duration": 69,
  "sections": [
    {
      "name": "Interrupt",
      "questions": [
        {
          "id": 1,
          "question": "<p>Suppose a program is running on a non-pipelined single processor computer system. The computer is connected to an external device that can interrupt the processor asynchronously. The processor needs to execute the interrupt service routine (ISR) to serve this interrupt. The following steps (not necessarily in order) are taken by the processor when the interrupt arrives:\n<br><br>\n(i) The processor saves the content of the program counter.\n<br>(ii) The program counter is loaded with the start address of the ISR.\n<br>(iii) The processor finishes the present instruction.\n<br><br>\nWhich ONE of the following is the CORRECT sequence of steps? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(iii), (i), (ii)</p>",
            "<b>B.</b> <p>(i), (iii), (ii)</p>",
            "<b>C.</b> <p>(i), (ii), (iii)</p>",
            "<b>D.</b> <p>(iii), (ii), (i)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(iii), (i), (ii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460080/gate-cse-2025-set-1-question-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A keyboard connected to a computer is used at a rate of 1 keystroke per second.\nThe computer system polls the keyboard every 10 ms (milli seconds) to check for\na keystroke and consumes 100 \\( \\mu s\\) (micro seconds) for each poll. If it is determined\nafter polling that a key has been pressed, the system consumes an additional 200\n\\( \\mu s\\) to process the keystroke. Let \\( T_1\\) denote the fraction of a second spent in polling\nand processing a keystroke.<br>\nIn an alternative implementation, the system uses interrupts instead of polling.\nAn interrupt is raised for every keystroke. It takes a total of 1 ms for servicing an\ninterrupt and processing a keystroke. Let  \\( T_2\\) denote the fraction of a second spent\nin servicing the interrupt and processing a keystroke.\nThe ratio \\( \\frac{T_1}{T_2}\\)\nis ______ . (Rounded off to one decimal place) <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10.2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399287/gate-cse-2023-question-24#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following statements.<br><br>\nI. Daisy chaining is used to assign priorities in attending interrupts.<br>\nII. When a device raises a vectored interrupt, the CPU does polling to identify the source of interrupt.<br>\nIII. In polling,the CPU periodically checks the status bits to know if any device needs its attention.<br>\nIV. During DMA, both the CPU and DMA controller can be bus masters at the same time.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>I and IV only</p>",
            "<b>C.</b> <p>I and III only</p>",
            "<b>D.</b> <p>III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333228/gate2020-cs-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The following are some events that occur after a device controller issues an interrupt while process L is under execution.  <br>(P) The processor pushes the process status of L onto the control stack.<br>\n(Q) The processor finishes the execution of the current instruction.\n<br>\n(R) The processor executes the interrupt service routine.\n<br>\n(S) The processor pops the process status of L from the control stack.\n<br>\n(T) The processor loads the new PC value based on the interrupt.\n<br> Which one of the following is the correct order in which the events above occur? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>QPTRS</p>",
            "<b>B.</b> <p>PTRSQ</p>",
            "<b>C.</b> <p>TRPQS</p>",
            "<b>D.</b> <p>QTPRS</p>"
          ],
          "correct_answer": "<b>A.</b> <p>QPTRS</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204083/gate2018-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which interrupt in 8085 Microprocessor is unmaskable? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>RST 5.5</p>",
            "<b>B.</b> <p>RST 7.5</p>",
            "<b>C.</b> <p>TRAP</p>",
            "<b>D.</b> <p>Both (A) and (B)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>TRAP</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128631/isro2017-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>In 8085 microprocessor, the ISR for handling trap interrupt is at which location? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3CH</p>",
            "<b>B.</b> <p>34H</p>",
            "<b>C.</b> <p>74H</p>",
            "<b>D.</b> <p>24H</p>"
          ],
          "correct_answer": "<b>D.</b> <p>24H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43971/isro-2013-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A computer handles several interrupt sources of which the following are relevant for this question. <br><br>\nInterrupt from CPU temperature sensor  (raises interrupt if CPU temperature is too high)<br>\nInterrupt from Mouse      (raises Interrupt if the mouse is moved or a button is pressed)           <br>                                                                                              Interrupt from Keyboard  (raises Interrupt if a key is pressed or released)<br>\nInterrupt from Hard Disk  (raises Interrupt when a disk read is completed)<br><br>Which one of these will be handled at the HIGHEST priority? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Interrupt from Hard Disk</p>",
            "<b>B.</b> <p>Interrupt from Mouse</p>",
            "<b>C.</b> <p>Interrupt from Keyboard</p>",
            "<b>D.</b> <p>Interrupt from CPU temp sensor</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Interrupt from CPU temp sensor</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2113/gate2011-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>On receiving an interrupt from an I/O device,the CPU <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Halts for a predetermined time</p>",
            "<b>B.</b> <p>Branches off to the interrupt service routine after completion of the current instruction</p>",
            "<b>C.</b> <p>Branches off to the interrupt service routine immediately</p>",
            "<b>D.</b> <p>Hands over control of address bus and data bus to the interrupting device</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Branches off to the interrupt service routine after completion of the current instruction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18581/isro2009-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A certain microprocessor requires 4.5 microseconds to respond to an interrupt. Assuming that the three interrupts\\(I_1\\), \\(I_2\\) and \\(I_3\\) require the following execution time after the interrupt is recognized:<br>\nI.   \\(I_1\\) requires 25 microseconds<br>\nII.  \\(I_2\\) requires 35 microseconds<br>\nIII. \\(I_3\\) requires 20 microseconds<br>\n\\(I_1\\) has the highest priority and \\(I_3\\) has the lowest. What is the possible range of time for \\(I_3\\) to be executed assuming that it may or may not occur simultaneously with other interrupts? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>24.5 microseconds to 39.5 microseconds</p>",
            "<b>B.</b> <p>24.5 microseconds to 93.5 microseconds</p>",
            "<b>C.</b> <p>4.5 microseconds to 24.5 microseconds</p>",
            "<b>D.</b> <p>29.5 microseconds 93.5 microseconds</p>"
          ],
          "correct_answer": "<b>B.</b> <p>24.5 microseconds to 93.5 microseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48044/isro2009-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which of the following statements about synchronous and asynchronous I/O is NOT true? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An ISR is invoked on completion of I/O in synchronous I/O but not in asynchronous I/O</p>",
            "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service Routine) is invoked after completion of the I/O</p>",
            "<b>C.</b> <p>A process making a synchronous I/O call waits until I/O is complete, but a process making an asynchronous I/O call does not wait for completion of the I/O</p>",
            "<b>D.</b> <p>In the case of synchronous I/O, the process waiting for the completion of I/O is woken up by the ISR that is invoked after the completion of I/O</p>"
          ],
          "correct_answer": "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service Routine) is invoked after completion of the I/O</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/487/gate2008-64-isro2009-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A CPU generally handles an interrupt by executing an interrupt service routine <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>As soon as an interrupt is raised</p>",
            "<b>B.</b> <p>By checking the interrupt register at the end of fetch cycle.</p>",
            "<b>C.</b> <p>By checking the interrupt register after finishing the execution of the current instruction.</p>",
            "<b>D.</b> <p>By checking the interrupt register at fixed time intervals.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>By checking the interrupt register after finishing the execution of the current instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1300/gate2009-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The TRAP is one of the interrupts available in INTEL 8085. Which one of the following statements is true of TRAP ? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it is level triggered</p>",
            "<b>B.</b> <p>it is negative edge triggered</p>",
            "<b>C.</b> <p>it is +ve edge triggered</p>",
            "<b>D.</b> <p>it is both +ve and -ve edges triggered</p>"
          ],
          "correct_answer": "<b>D.</b> <p>it is both +ve and -ve edges triggered</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47657/isro2008-45\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>An interrupt in which the external device supplies its address as well as the interrupt requests is known as <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>vectored interrupt</p>",
            "<b>B.</b> <p>maskable interrupt</p>",
            "<b>C.</b> <p>non maskable interrupt</p>",
            "<b>D.</b> <p>designated interrupt</p>"
          ],
          "correct_answer": "<b>A.</b> <p>vectored interrupt</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49917/isro2008-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which one of the following is true for a CPU having a single interrupt request line and a single\ninterrupt grant line? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Neither vectored interrupt nor multiple interrupting devices are possible</p>",
            "<b>B.</b> <p>Vectored interrupts are not possible but multiple interrupting devices are possible.</p>",
            "<b>C.</b> <p>Vectored interrupts and multiple interrupting devices are both possible</p>",
            "<b>D.</b> <p>Vectored interrupt is possible but multiple interrupting devices are not possible</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Vectored interrupts and multiple interrupting devices are both possible</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1355/gate2005-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A device employing INTR line for device interrupt puts the CALL instruction on\nthe data bus while <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\overline{INTA}\\) is active</p>",
            "<b>B.</b> <p>HOLD is active</p>",
            "<b>C.</b> <p>READY is active</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\overline{INTA}\\) is active</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/813/gate2002-1-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>The 8085 microprocessor responds to the presence of an interrupt <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>as soon as the TRAP pin becomes 'high'</p>",
            "<b>B.</b> <p>by checking the TRAP pin for 'high' status at the end of each instruction</p>",
            "<b>C.</b> <p>by checking the TRAP pin for 'high' status at the end of the execution of each instruction.</p>",
            "<b>D.</b> <p>by checking the TRAP pin for 'high' status at regular intervals.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>by checking the TRAP pin for 'high' status at the end of the execution of each instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/632/gate2000-1-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Which of the following is true? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Unless enabled, a CPU will not be able to process interrupts.</p>",
            "<b>B.</b> <p>Loop instructions cannot be interrupted till they complete.</p>",
            "<b>C.</b> <p>A processor checks for interrupts before executing a new instruction.</p>",
            "<b>D.</b> <p>Only level triggered interrupts are possible on microprocessors.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Unless enabled, a CPU will not be able to process interrupts.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1657/gate1998-1-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Which of the following devices should get higher priority in assigning interrupts? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hard disk</p>",
            "<b>B.</b> <p>Printer</p>",
            "<b>C.</b> <p>Keyboard</p>",
            "<b>D.</b> <p>Floppy disk</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Hard disk</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1655/gate1998-1-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>RST 7.5 interrupt in 8085 microprocessor executes the interrupt service routing from interrupt vector location <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0000H</p>",
            "<b>B.</b> <p>0075H</p>",
            "<b>C.</b> <p>003CH</p>",
            "<b>D.</b> <p>0034H</p>"
          ],
          "correct_answer": "<b>C.</b> <p>003CH</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2228/gate1997-2-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>In a vectored interrupt: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The branch address is assigned to a fixed location in memory</p>",
            "<b>B.</b> <p>The interrupting source supplies the branch information to the processor through an interrupt vector</p>",
            "<b>C.</b> <p>The branch address is obtained from a register in the processor</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The interrupting source supplies the branch information to the processor through an interrupt vector</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2590/gate1995-1-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Identify the logic function performed by the circuit shown in figure.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Interrupt\\q6.1_1f0bee2f.jpg\"><br> <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>exclusive OR</p>",
            "<b>B.</b> <p>exclusive NOR</p>",
            "<b>C.</b> <p>NAND</p>",
            "<b>D.</b> <p>NOR</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>exclusive NOR</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2290/gate1993-6-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>A CPU has two modes-privileged and non-privileged. In order to change the\nmode from privileged to non-privileged <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A hardware interrupt is needed.</p>",
            "<b>B.</b> <p>A software interrupt is needed.</p>",
            "<b>C.</b> <p>A privileged instruction (which does not generate an interrupt) is needed</p>",
            "<b>D.</b> <p>a non-privileged instruction (which does not generate an interrupt is needed</p>"
          ],
          "correct_answer": "<b>D.</b> <p>a non-privileged instruction (which does not generate an interrupt is needed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/706/gate2001-1-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>A processor needs software interrupt to <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Test the interrupt system of the processor.</p>",
            "<b>B.</b> <p>Implement co-routines.</p>",
            "<b>C.</b> <p>Obtain system services which need execution of privileged instructions.</p>",
            "<b>D.</b> <p>Return from subroutine</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Obtain system services which need execution of privileged instructions.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/705/gate2001-1-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:\n<br>\nThe TRAP interrupts mechanism of the 8085 microprocessor: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>executes an RST by hardware</p>",
            "<b>B.</b> <p>executes an instruction supplied by an external device through the INTA signal</p>",
            "<b>C.</b> <p>executes an instruction from memory location 20H</p>",
            "<b>D.</b> <p>executes a NOP</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>E.</b> <p>none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/518/gate1991-03-iv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>On receiving an interrupt from a I/O device the CPU: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Halts for a predetermined time.</p>",
            "<b>B.</b> <p>Hands over control of address bus and data bus to the interrupting device.</p>",
            "<b>C.</b> <p>Branches off to the interrupt service routine immediately.</p>",
            "<b>D.</b> <p>Branches off to the interrupt service routine after completion of the current instruction.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Branches off to the interrupt service routine after completion of the current instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80274/gate1987-1-viii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
