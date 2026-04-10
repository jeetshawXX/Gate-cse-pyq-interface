window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization - Slot 10",
  "duration": 42,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
          "question": "<p>Which of the following is/are true of the auto-increment Addressing Modes?<br>\nI. It is useful in creating self-relocating code <br><br>\nII. If it is included in an Instruction Set Architecture, then an additional ALU is\nrequired for effective address calculation <br>\nIII. The amount of increment depends on the size of the data item accessed <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/444/gate2008-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>For a magnetic disk with concentric circular tracks, the seek latency is not linearly\nproportional to the seek distance due to <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>non-uniform distribution of requests</p>",
            "<b>B.</b> <p>arm starting and stopping inertia</p>",
            "<b>C.</b> <p>higher capacity of tracks on the periphery of the platter</p>",
            "<b>D.</b> <p>use of unfair arm scheduling policies</p>"
          ],
          "correct_answer": "<b>B.</b> <p>arm starting and stopping inertia</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/443/gate2008-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A hard disk system has the following parameters :<br>Number of tracks = 500<br>\nNumber of sectors/track = 100<br>\nNumber of bytes /sector = 500<br>\nTime taken by the head to move from one track to adjacent track = 1 ms<br>\nRotation speed = 600 rpm.<br>\nWhat is the average time taken for transferring 250 bytes from the disk ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>300.5  ms</p>",
            "<b>B.</b> <p>255.5  ms</p>",
            "<b>C.</b> <p>255 ms</p>",
            "<b>D.</b> <p>300  ms</p>"
          ],
          "correct_answer": "<b>D.</b> <p>300  ms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3479/gate2007-it-44-isro2015-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Following table indicates the latencies of operations between the instruction producing the result and instruction using the result.<br>\n\\(\\begin{array}{|l|l|c|} \\hline \\textbf {Instruction producing the result} &amp; \\textbf{Instruction using the result }&amp; \\textbf{Latency} \\\\\\hline \\text{ALU Operation} &amp; \\text{ALU Operation} &amp; 2 \\\\\\hline \\text{ALU Operation} &amp; \\text{Store} &amp; \\text{2}\\\\\\hline \\text{Load} &amp; \\text{ALU Operation} &amp; \\text{1}\\\\\\hline \\text{Load} &amp; \\text{Store} &amp; \\text{0} \\\\\\hline \\end{array}\\)<br>\nConsider the following code segment:<br><pre><code>Load R1, Loc 1; Load R1 from memory location Loc1\n Load R2, Loc 2; Load R2 from memory location Loc 2\n Add R1, R2, R1; Add R1 and R2 and save result in R1\n Dec R2;         Decrement R2\n Dec R1;         Decrement R1\n Mpy R1, R2, R3; Multiply R1 and R2 and save result in R3\n Store R3, Loc 3; Store R3 in memory location Loc 3 </code></pre> <br>\nWhat is the number of cycles needed to execute the above code segment assuming each instruction takes one cycle to execute? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>13</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>C.</b> <p>13</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3476/gate2007-it-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Data forwarding techniques can be used to speed up the operation in presence of data dependencies. Consider the following replacements of LHS with RHS.<br>\ni. \\(R1\\rightarrow Loc, Loc\\rightarrow R2 \\; \\equiv \\; R1\\rightarrow R2, R1 \\rightarrow Loc\\)<br>\nii. \\(R1\\rightarrow Loc, Loc\\rightarrow R2 \\; \\equiv \\; R1\\rightarrow R2\\)<br>\niii. \\(R1\\rightarrow Loc, R2 \\rightarrow Loc \\; \\equiv \\; R1\\rightarrow Loc\\)<br>\niv. \\(R1\\rightarrow Loc, R2 \\rightarrow Loc \\; \\equiv \\; R2\\rightarrow Loc\\)<br>\nIn which of the following options, will the result of executing the RHS be the same as executing the LHS irrespective of the instructions that follow ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>i and iii</p>",
            "<b>B.</b> <p>i and iv</p>",
            "<b>C.</b> <p>ii and iii</p>",
            "<b>D.</b> <p>ii and iv</p>"
          ],
          "correct_answer": "<b>B.</b> <p>i and iv</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3472/gate2007-it-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a Direct Mapped Cache with 8 cache blocks (numbered 0-7). If the memory block requests are in the following order <br>\n3, 5, 2, 8, 0, 63, 9,16, 20, 17, 25, 18, 30, 24, 2, 63, 5, 82,17, 24. <br>\nWhich of the following memory blocks will not be in the cache at the end of the sequence ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>18</p>",
            "<b>C.</b> <p>20</p>",
            "<b>D.</b> <p>30</p>"
          ],
          "correct_answer": "<b>B.</b> <p>18</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3470/gate2007-it-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The floating point unit of a processor using a design D takes 2t cycles compared to t cycles taken by the fixed point unit. There are two more design suggestions \\(D_1\\) and \\(D_2\\). \\(D_1\\) uses 30% more cycles for fixed point unit but 30% less cycles for floating point unit as compared to design D. \\(D_2\\) uses 40% less cycles for fixed point unit but 10% more cycles for floating point unit as compared to design D. For a given program which has 80% fixed point operations and 20% floating point operations, which of the following ordering reflects the relative performances of three designs?\n(\\(D_i\\) &gt; \\(D_j\\) denotes that \\(D_i\\) is faster than \\(D_j\\)) <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(D_1 &gt; D &gt; D_2\\)</p>",
            "<b>B.</b> <p>\\(D_2 &gt; D &gt; D_1\\)</p>",
            "<b>C.</b> <p>\\(D &gt; D_2 &gt; D_1\\)</p>",
            "<b>D.</b> <p>\\(D &gt; D_1 &gt; D_2\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(D_2 &gt; D &gt; D_1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3469/gate2007-it-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A processor takes 12 cycles to complete an instruction \\(I\\). The corresponding pipelined processor uses 6 stages with the execution times of 3, 2, 5, 4, 6 and 2 cycles respectively. What is the asymptotic speedup assuming that a very large number of instructions are to be executed? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.83</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3437/gate2007-it-6-isro2011-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider a machine with a byte addressable main memory of \\(2^{16}\\)  bytes. Assume that a direct mapped data cache consisting of 32 lines of 64 bytes each is used in the system. A 50 x 50 two-dimensional array of bytes is stored in the main memory starting from memory location 1100H. Assume that the data cache is initially empty. The complete array is accessed twice. Assume that the contents of the data cache do not change in between the two accesses. <br><br>Which of the following lines of the data cache will be replaced by new blocks in\naccessing the array for the second time? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>line 4 to line 11</p>",
            "<b>B.</b> <p>line 4 to line 12</p>",
            "<b>C.</b> <p>line 0 to line 7</p>",
            "<b>D.</b> <p>line 0 to line 8</p>"
          ],
          "correct_answer": "<b>A.</b> <p>line 4 to line 11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43511/gate2007-81#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a machine with a byte addressable main memory of \\(2^{16}\\)  bytes. Assume that a direct mapped data cache consisting of 32 lines of 64 bytes each is used in the system. A 50 x 50 two-dimensional array of bytes is stored in the main memory starting from memory location 1100H. Assume that the data cache is initially empty. The complete array is accessed twice. Assume that the contents of the data cache do not change in between the two accesses. <br><br>How many data cache misses will occur in total? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>48</p>",
            "<b>B.</b> <p>50</p>",
            "<b>C.</b> <p>56</p>",
            "<b>D.</b> <p>59</p>"
          ],
          "correct_answer": "<b>C.</b> <p>56</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1273/gate2007-80#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following program segment. Here R1, R2 and R3 are the general purpose registers. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q71_d5243e81.jpg\"><br>  Assume that the content of memory location 3000 is 10 and the content of the register R3 is 2000. The content of each of the memory locations from 2000 to 2010 is 100. The program is loaded from the memory location 1000. All the numbers are in decimal. <br><br>Assume that the memory is byte addressable and the word size is 32 bits. If an interrupt occurs during the execution of the instruction \"INC R3\", what return address will be pushed on to the stack? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1005</p>",
            "<b>B.</b> <p>1020</p>",
            "<b>C.</b> <p>1024</p>",
            "<b>D.</b> <p>1040</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1024</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43516/gate2007-73#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following program segment. Here R1, R2 and R3 are the general purpose registers. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q71_d5243e81.jpg\"><br>  Assume that the content of memory location 3000 is 10 and the content of the register R3 is 2000. The content of each of the memory locations from 2000 to 2010 is 100. The program is loaded from the memory location 1000. All the numbers are in decimal. <br><br> Assume that the memory is word addressable. After the execution of this\nprogram, the content of memory location 2010 is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100</p>",
            "<b>B.</b> <p>101</p>",
            "<b>C.</b> <p>102</p>",
            "<b>D.</b> <p>110</p>"
          ],
          "correct_answer": "<b>A.</b> <p>100</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43515/gate2007-72#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following program segment. Here R1, R2 and R3 are the general purpose registers. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q71_d5243e81.jpg\"><br>  Assume that the content of memory location 3000 is 10 and the content of the register R3 is 2000. The content of each of the memory locations from 2000 to 2010 is 100. The program is loaded from the memory location 1000. All the numbers are in decimal. <br><br>Assume that the memory is word addressable. The number of memory references for accessing the data in executing the program completely is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>11</p>",
            "<b>C.</b> <p>20</p>",
            "<b>D.</b> <p>21</p>"
          ],
          "correct_answer": "<b>D.</b> <p>21</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1269/gate2007-71#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a pipelined processor with the following four stages: <br>\nIF: Instruction Fetch <br>\nID: Instruction Decode and Operand Fetch <br>\nEX: Execute <br>\nWB: Write Back <br><br>\nThe IF, ID and WB stages take one clock cycle each to complete the operation.\nThe number of clock cycles for the EX stage depends on the instruction. The ADD\nand SUB instructions need 1 clock cycle and the MUL instruction needs 3 clock\ncycles in the EX stage. Operand forwarding is used in the pipelined processor.\nWhat is the number of clock cycles taken to complete the following sequence of\ninstructions? <br>\nADD R2, R1, R0              (R2 \\(\\leftarrow\\)  R1 + R0) <br>\nMUL R4, R3, R2              (R4 \\(\\leftarrow\\)  R3 * R2)<br>\nSUB R6, R5, R4               (R6 \\(\\leftarrow\\)  R5 - R4)<br> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1235/gate2007-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a disk pack with 16 surfaces, 128 tracks per surface and 256 sectors per track. 512 bytes of data are stored in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
            "<b>B.</b> <p>256 Mbyte, 28 bits</p>",
            "<b>C.</b> <p>512 Mbyte, 20 bits</p>",
            "<b>D.</b> <p>64 Gbyte, 28 bits</p>"
          ],
          "correct_answer": "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1209/gate2007-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
