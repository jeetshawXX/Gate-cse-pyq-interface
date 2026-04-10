window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization - Slot 8",
  "duration": 42,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider a hypothetical processor with an instruction of type LW R1, 20(R2),\nwhich during execution reads a 32-bit word from memory and stores it in a 32-bit\nregister R1. The effective address of the memory location is obtained by the\naddition of constant 20 and the contents of register R2. Which of the following\nbest reflects the Addressing Modes implemented by this instruction for the\noperand in memory? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Immediate Addressing</p>",
            "<b>B.</b> <p>Register Addressing</p>",
            "<b>C.</b> <p>Register Indirect Scaled Addressing</p>",
            "<b>D.</b> <p>Base Indexed Addressing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Base Indexed Addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2123/gate2011-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
          "question": "<p>A computer system has an L1 cache, an L2 cache, and a main memory unit\nconnected as shown below. The block size in L1 cache is 4 words. The block size\nin L2 cache is 16 words. The memory access times are 2 nanoseconds.\n20 nanoseconds and 200 nanoseconds for L1 cache, L2 cache and main memory\nunit respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q48_06dbca39.jpg\"><br>When there is a miss in both L1 cache and L2 cache, first a block is transferred\nfrom main memory to L2 cache, and then a block is transferred from L2 cache to\nL1 cache. What is the total time taken for these transfers? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>222 nanoseconds</p>",
            "<b>B.</b> <p>888 nanoseconds</p>",
            "<b>C.</b> <p>902 nanoseconds</p>",
            "<b>D.</b> <p>968 nanoseconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>902 nanoseconds</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43329/gate2010-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A computer system has an L1 cache, an L2 cache, and a main memory unit\nconnected as shown below. The block size in L1 cache is 4 words. The block size\nin L2 cache is 16 words. The memory access times are 2 nanoseconds.\n20 nanoseconds and 200 nanoseconds for L1 cache, L2 cache and main memory\nunit respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q48_06dbca39.jpg\"><br> When there is a miss in L1 cache and a hit in L2 cache, a block is transferred\nfrom L2 cache to L1 cache. What is the time taken for this transfer? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 nanoseconds</p>",
            "<b>B.</b> <p>20 nanoseconds</p>",
            "<b>C.</b> <p>22 nanoseconds</p>",
            "<b>D.</b> <p>88 nanoseconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>22 nanoseconds</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2352/gate2010-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A 5-stage pipelined processor has Instruction Fetch (IF), Instruction Decode (ID),\nOperand Fetch (OF), Perform Operation (PO) and Write Operand (WO) stages.\nThe IF, ID, OF and WO stages take 1 clock cycle each for any instruction. The PO\nstage takes 1 clock cycle for ADD and SUB instructions, 3 clock cycles for MUL\ninstruction, and 6 clock cycles for DIV instruction respectively. Operand\nforwarding is used in the pipeline. What is the number of clock cycles needed to\nexecute the following sequence of instructions?\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q33_b6d0f7e6.jpg\"> <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13</p>",
            "<b>B.</b> <p>15</p>",
            "<b>C.</b> <p>17</p>",
            "<b>D.</b> <p>19</p>"
          ],
          "correct_answer": "<b>B.</b> <p>15</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2207/gate2010-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A main memory unit with a capacity of 4 megabytes is built using 1Mx1-bit\nDRAM chips. Each DRAM chip has 1K rows of cells with 1K cells in each row. The\ntime taken for a single refresh operation is 100 nanoseconds. The time required\nto perform one refresh operation on all the cells in the memory unit is <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100 nanoseconds</p>",
            "<b>B.</b> <p>100 *\\(2^{10}\\) nanoseconds</p>",
            "<b>C.</b> <p>100*\\(2^{20}\\) nanoseconds</p>",
            "<b>D.</b> <p>3200*\\(2^{20}\\) nanoseconds</p>"
          ],
          "correct_answer": "<b>B.</b> <p>100 *\\(2^{10}\\) nanoseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2178/gate2010-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A hard disk has 63 sectors per track, 10 platters each with 2 recording surfaces\nand 1000 cylinders. The address of a sector is given as a triple (c,h,s), where c is the cylinder number, h is the surface number and s is the sector number. Thus, the \\(0^{th}\\) sector is addressed as (0,0,0), the \\(1^{st}\\) sector as (0,0,1), and so on <br><br>The address of the \\(1039^{th}\\) sector is <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(0,15,31)</p>",
            "<b>B.</b> <p>(0,16,30)</p>",
            "<b>C.</b> <p>(0,16,31)</p>",
            "<b>D.</b> <p>(0,17,31)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(0,16,31)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43477/gate2009-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A hard disk has 63 sectors per track, 10 platters each with 2 recording surfaces\nand 1000 cylinders. The address of a sector is given as a triple (c,h,s), where c is the cylinder number, h is the surface number and s is the sector number. Thus, the \\(0^{th}\\) sector is addressed as (0,0,0), the \\(1^{st}\\) sector as (0,0,1), and so on <br><br> The address (400, 16, 29) corresponds to sector number: <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>505035</p>",
            "<b>B.</b> <p>505036</p>",
            "<b>C.</b> <p>505037</p>",
            "<b>D.</b> <p>505038</p>"
          ],
          "correct_answer": "<b>C.</b> <p>505037</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1337/gate2009-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a 4-way set associative cache (initially empty) with total 16 cache\nblocks. The main memory consists of 256 blocks and the request for memory\nblocks is in the following order: <br><br>\n0, 255, 1, 4, 3, 8, 133, 159, 216, 129, 63, 8, 48, 32, 73, 92, 155. <br><br>\nWhich one of the following memory block will NOT be in cache if LRU replacement\npolicy is used? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>129</p>",
            "<b>D.</b> <p>216</p>"
          ],
          "correct_answer": "<b>D.</b> <p>216</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1315/gate2009-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a 4 stage pipeline processor. The number of cycles needed by the four\ninstructions I1, I2, I3, I4 in stages S1, S2, S3, S4 is shown below:  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q28_52a82c1b.jpg\"><br> What is the number of cycles needed to execute the following loop? <br> For (i=1 to 2) {I1; I2; I3; I4;} <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>23</p>",
            "<b>C.</b> <p>28</p>",
            "<b>D.</b> <p>30</p>"
          ],
          "correct_answer": "<b>B.</b> <p>23</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1314/gate2009-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
          "question": "<p>How many 32K x 1 RAM chips are needed to provide a memory capacity of 256Kbytes? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>32</p>",
            "<b>C.</b> <p>64</p>",
            "<b>D.</b> <p>128</p>"
          ],
          "correct_answer": "<b>C.</b> <p>64</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1299/gate2009-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a computer with a 4-ways set-associative mapped cache of the following characteristics: a total of 1 MB of main memory, a word size of 1 byte, a block size of 128 words and a cache size of 8 KB.<br>\nWhile accessing the memory location 0C795H by the CPU, the contents of the TAG field of the corresponding cache line is: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>000011000</p>",
            "<b>B.</b> <p>110001111</p>",
            "<b>C.</b> <p>00011000</p>",
            "<b>D.</b> <p>110010101</p>"
          ],
          "correct_answer": "<b>A.</b> <p>000011000</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3405/gate2008-it-81\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a computer with a 4-ways set-associative mapped cache of the following characteristics: a total of 1 MB of main memory, a word size of 1 byte, a block size of 128 words and a cache size of 8 KB.<br>\nThe number of bits in the TAG, SET and WORD fields, respectively are: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7,6,7</p>",
            "<b>B.</b> <p>8,5,7</p>",
            "<b>C.</b> <p>8,6,6</p>",
            "<b>D.</b> <p>9,4,7</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9,4,7</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3403/gate2008-it-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
