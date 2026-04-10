window.__examLoadCallback({
  "title": "Computer_Organization - IO_Interface",
  "duration": 66,
  "sections": [
    {
      "name": "IO_Interface",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider  a  computer  with  a  4  MHz  processor.  Its  DMA  controller  can  transfer 8 bytes in 1 cycle from a device to main memory through cycle stealing at regular intervals. Which one of the following is the data transfer rate (in bits per second) of the DMA controller if 1% of the processor cycles are used for DMA? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,56,000</p>",
            "<b>B.</b> <p>3,200</p>",
            "<b>C.</b> <p>25,60,000</p>",
            "<b>D.</b> <p>32,000</p>"
          ],
          "correct_answer": "<b>C.</b> <p>25,60,000</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422896/gate-cse-2024-set-2-question-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>In the cycle stealing mode of DMA, one word of data is transferred between an I/O\ndevice and main memory in a stolen cycle</p>",
            "<b>B.</b> <p>For bulk data transfer, the burst mode of DMA has a higher throughput than the\ncycle stealing mode</p>",
            "<b>C.</b> <p>Programmed I/O mechanism has a better CPU utilization than the interrupt driven\nI/O mechanism</p>",
            "<b>D.</b> <p>The CPU can start executing an interrupt service routine faster with vectored\ninterrupts than with non-vectored interrupts</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Programmed I/O mechanism has a better CPU utilization than the interrupt driven\nI/O mechanism</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422837/gate-cse-2024-set-1-question-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which one of the following facilitates transfer of bulk data from hard disk to main memory with the highest throughput? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>DMA based I/O transfer</p>",
            "<b>B.</b> <p>Interrupt driven I/O transfer</p>",
            "<b>C.</b> <p>Polling based I/O transfer</p>",
            "<b>D.</b> <p>Programmed I/O transfer</p>"
          ],
          "correct_answer": "<b>A.</b> <p>DMA based I/O transfer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371929/Gate-cse-2022-question-7#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider a computer system with DMA support. The DMA module is transferring one 8-bit character in one CPU cycle from a device to memory through cycle stealing at regular intervals. Consider a 2 MHz processor. If 0.5% processor cycles are used for DMA, the data transfer rate of the device is __________ bits per second. <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "80000",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357520/gate-cse-2021-set-2-question-20#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Of the following, which best characterizes computers that use memory-mapped I/O? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The computer provides special instructions for manipulating I/O ports</p>",
            "<b>B.</b> <p>I/O ports are placed at addresses on the bus and are accessed just like other memory locations</p>",
            "<b>C.</b> <p>To perform I/O operations. it is sufficient to place the data in an address register and call channel to perform the operation</p>",
            "<b>D.</b> <p>I/O can be performed only when memory management hardware is turned on</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I/O ports are placed at addresses on the bus and are accessed just like other memory locations</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213523/isro2018-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>The size of the data count register of a DMA controller is 16 bits.The processor needs to transfer a file of 29,154 kilobytes from disk to main memory.The memory is byte addressable. The minimum number of times the DMA control lerneeds to get the control of the systembus from the processor to transfer the file from the disk to main memory is ____. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "456",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39698/gate2016-1-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A processor is fetching instructions at the rate of 1 MIPS. A DMA module is used to transfer characters to RAM from a device transmitting at 9600 bps. How much time will the processor be slowed down due to DMA activity? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9.6ms</p>",
            "<b>B.</b> <p>4.8ms</p>",
            "<b>C.</b> <p>2.4ms</p>",
            "<b>D.</b> <p>1.2ms</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1.2ms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43805/isro-2013-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>In DMA transfer scheme, the transfer scheme other than burst mode is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>cycle technique</p>",
            "<b>B.</b> <p>stealing technique</p>",
            "<b>C.</b> <p>cycle stealing technique</p>",
            "<b>D.</b> <p>cycle bypass technique</p>"
          ],
          "correct_answer": "<b>C.</b> <p>cycle stealing technique</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52824/isro2011-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>On a non-pipelined sequential processor, a program segment, which is a part of\nthe interrupt service routine, is given to transfer 500 bytes from an I/O device to\nmemory. <br><br>\nInitialize the address register <br>\nInitialize the count to 500 <br>\nLOOP: Load a byte from device <br>\nStore in memory at address given by address register <br>\nIncrement the address register <br>\nDecrement the count <br>\nIf count != 0 go to LOOP <br><br>\nAssume that each statement in this program is equivalent to a machine\ninstruction which takes one clock cycle to execute if it is a non-load/store\ninstruction. The load-store instructions take two clock cycles to execute. <br><br>\nThe designer of the system also has an alternate approach of using the DMA\ncontroller to implement the same transfer. The DMA controller requires 20 clock\ncycles for initialization and other overheads. Each DMA transfer cycle takes two clock cycles to transfer one byte of data from the device to the memory. <br><br>\nWhat is the approximate speedup when the DMA controller based design is used\nin place of the interrupt driven program based input-output? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3.4</p>",
            "<b>B.</b> <p>4.4</p>",
            "<b>C.</b> <p>5.1</p>",
            "<b>D.</b> <p>6.7</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3.4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2130/gate2011-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which of the following is an example of spooled device? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A line printer used to print the output of a number of jobs</p>",
            "<b>B.</b> <p>A terminal used to enter input data to a running program</p>",
            "<b>C.</b> <p>A secondary storage device in a virtual memory system</p>",
            "<b>D.</b> <p>A graphic display device</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A line printer used to print the output of a number of jobs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2724/gate1996-1-20-isro2008-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The device which is used to connect a peripheral to bus is known as <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>control register</p>",
            "<b>B.</b> <p>interface</p>",
            "<b>C.</b> <p>communication protocol</p>",
            "<b>D.</b> <p>none of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>interface</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49974/isro2008-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The ability to temporarily halt the CPU and use this time to send information on buses is called <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>direct memory access</p>",
            "<b>B.</b> <p>vectoring the interrupt</p>",
            "<b>C.</b> <p>polling</p>",
            "<b>D.</b> <p>cycle stealing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>cycle stealing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49919/isro2008-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which of the following statements about synchronous and asynchronous I/O is\nNOT true? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An ISR is invoked on completion of I/O in synchronous I/O but not in\nasynchronous I/O</p>",
            "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service\nRoutine) is invoked after completion of the I/O</p>",
            "<b>C.</b> <p>A process making a synchronous I/O call waits until I/O is complete, but a process making an asynchronous I/O call does not wait for completion of the I/O</p>",
            "<b>D.</b> <p>In the case of synchronous I/O, the process waiting for the completion of I/O\nis woken up by the ISR that is invoked after the completion of I/O</p>"
          ],
          "correct_answer": "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service\nRoutine) is invoked after completion of the I/O</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/487/gate2008-64#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>A read bit can be read <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>and written by CPU</p>",
            "<b>B.</b> <p>and written by peripheral</p>",
            "<b>C.</b> <p>by peripheral and written by CPU</p>",
            "<b>D.</b> <p>by CPU and written by the peripheral</p>"
          ],
          "correct_answer": "<b>D.</b> <p>by CPU and written by the peripheral</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49478/isro2007-08\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following DMA transfer modes and interrupt handling mechanisms will enable the highest I/O band-width? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Transparent DMA and Polling interrupts</p>",
            "<b>B.</b> <p>Cycle-stealing and Vectored interrupts</p>",
            "<b>C.</b> <p>Block transfer and Vectored interrupts</p>",
            "<b>D.</b> <p>Block transfer and Polling interrupts</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Block transfer and Vectored interrupts</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3547/gate2006-it-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Consider a disk drive with the following specifications:\n16 surfaces, 512 tracks/surface, 512 sectors/track, 1 KB/sector, rotation speed 3000 rpm. The disk is\noperated in cycle stealing mode whereby whenever one 4 byte word is ready it is sent to memory;\nsimilarly, for writing, the disk interface reads a 4 byte word from the memory in each DMA cycle.\nMemory cycle time is 40 nsec. The maximum percentage of time that the CPU gets blocked during\nDMA operation is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>40</p>",
            "<b>D.</b> <p>50</p>"
          ],
          "correct_answer": "<b>B.</b> <p>25</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1393/gate2005-70#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>A device with data transfer rate 10 KB/sec is connected to a CPU. Data is transferred byte-wise. Let\nthe interrupt overhead be 4 \\(\\mu\\)sec. The byte transfer time between the device interfaces register and\nCPU or memory is negligible. What is the minimum performance gain of operating the device under\ninterrupt mode over operating it under program-controlled mode? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>35</p>",
            "<b>D.</b> <p>45</p>"
          ],
          "correct_answer": "<b>B.</b> <p>25</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1392/gate2005-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Normally user programs are prevented from handling I/O directly by I/O instructions in them. For CPUs having explicit I/O instructions, such I/O protection is ensured by having the I/O instructions privileged. In a CPU with memory mapped I/O, there is no explicit I/O instruction. Which one of the following is true for a CPU with memory mapped I/O? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I/O protection is ensured by operating system routine(s)</p>",
            "<b>B.</b> <p>I/O protection is ensured by a hardware trap</p>",
            "<b>C.</b> <p>I/O protection is ensured during system configuration</p>",
            "<b>D.</b> <p>I/O protection is not possible</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I/O protection is ensured by operating system routine(s)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1356/gate2005-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>What is the bit rate of a video terminal unit with 80 characters/line, 8 bits/character and horizontal sweep time of 100 \\(\\mu s\\) (including 20 \\(\\mu s\\) of retrace time)? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(8 \\text{Mbps}\\)</p>",
            "<b>B.</b> <p>\\(6.4 \\text{Mbps}\\)</p>",
            "<b>C.</b> <p>\\(0.8 \\text{Mbps}\\)</p>",
            "<b>D.</b> <p>\\(0.64 \\text{Mbps}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(6.4 \\text{Mbps}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3652/gate2004-it-11-isro2011-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>A hard disk with a transfer rate of 10 Mbytes/second is constantly transferring data to memory using\nDMA. The processor runs at 600 MHz, and takes 300 and 900 clock cycles to initiate and complete\nDMA transfer respectively. If the size of the transfer is 20 Kbytes, what is the percentage of processor\ntime consumed for the transfer operation? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5%</p>",
            "<b>B.</b> <p>1%</p>",
            "<b>C.</b> <p>0.50%</p>",
            "<b>D.</b> <p>0.10%</p>"
          ],
          "correct_answer": "<b>D.</b> <p>0.10%</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1062/gate2004-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Which of the following is an example of a spooled device? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The terminal used to enter the input data for the C program being executed</p>",
            "<b>B.</b> <p>An output device used to print the output of a number of jobs</p>",
            "<b>C.</b> <p>The secondary memory device in a virtual storage system</p>",
            "<b>D.</b> <p>The swapping area on a disk used by the swapper</p>"
          ],
          "correct_answer": "<b>B.</b> <p>An output device used to print the output of a number of jobs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1666/gate1998-1-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>The correct matching for the following pairs is:<br>\\(\\begin{array}{ll} \\text{(A) DMA I/O} &amp; \\text{(1) High speed RAM} \\\\ \\text{(B) Cache} &amp; \\text{(2) Disk} \\\\ \\text{(C) Interrupt I/O} &amp; \\text{(3) Printer} \\\\ \\text{(D) Condition Code Register} &amp; \\text{(4) ALU} \\\\ \\end{array}\\) <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A-4 B-3 C-1 D-2</p>",
            "<b>B.</b> <p>A-2 B-1 C-3 D-4</p>",
            "<b>C.</b> <p>A-4 B-3 C-2 D-1</p>",
            "<b>D.</b> <p>A-2 B-3 C-4 D-1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A-2 B-1 C-3 D-4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2230/gate1997-2-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>For the daisy chain scheme of connecting I/O devices, which of the following statements is true? <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It gives non-uniform priority to various devices</p>",
            "<b>B.</b> <p>It gives uniform priority to all devices</p>",
            "<b>C.</b> <p>It is only useful for connecting slow devices to a processor device</p>",
            "<b>D.</b> <p>It requires a separate interrupt pin on the processor for each device</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It gives non-uniform priority to various devices</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2728/gate1996-1-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>A low memory can be connected to 8085 by using <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>INTER</p>",
            "<b>B.</b> <p>\\(\\overline{RESET \\;IN}\\)</p>",
            "<b>C.</b> <p>HOLD</p>",
            "<b>D.</b> <p>READY</p>"
          ],
          "correct_answer": "<b>D.</b> <p>READY</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/702/gate2001-1-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
