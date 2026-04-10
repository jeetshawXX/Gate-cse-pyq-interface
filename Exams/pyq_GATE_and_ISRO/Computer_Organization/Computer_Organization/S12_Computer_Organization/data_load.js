window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization - Slot 12",
  "duration": 42,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
          "question": "<p>Which of the following is/are true of the auto-increment addressing mode?<br>\nI. It is useful in creating self-relocating code<br>\nII. If it is included in an Instruction Set Architecture, then an additional ALU is required for effective address calculation<br>\nIII. The amount of increment depends on the size of the data item accessed <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/444/gate2008-33-isro2009-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Compared to CISC processors,RISC processors contain <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>More register and smaller instruction set</p>",
            "<b>B.</b> <p>larger instruction set</p>",
            "<b>C.</b> <p>less registers and smaller instruction set</p>",
            "<b>D.</b> <p>more transistor elements</p>"
          ],
          "correct_answer": "<b>A.</b> <p>More register and smaller instruction set</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18580/isro2009-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>Which of the following statements about relative addressing mode is FALSE? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It enables reduced instruction size</p>",
            "<b>B.</b> <p>It allows indexing of array element with same instruction</p>",
            "<b>C.</b> <p>It enables easy relocation of data</p>",
            "<b>D.</b> <p>It enables faster address calculation than absolute addressing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It enables faster address calculation than absolute addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3578/gate2006-it-39-isro2009-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A processor that has carry, overflow and sign flag bits as part of its program status word (PSW) performs addition of the following two 2's complement numbers 01001101 and 11101001. After the execution of this addition operation, the status of the carry, overflow and sign flags, respectively will be <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 1, 0</p>",
            "<b>B.</b> <p>1, 0, 0</p>",
            "<b>C.</b> <p>0, 1, 0</p>",
            "<b>D.</b> <p>1, 0, 1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1, 0, 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48064/isro2009-39-gate2008-it_15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The use of multiple register windows with overlap causes a reduction in the number of memory accesses for:<br>\nI.   Function locals and parameters<br>\nII.  Register saves and restores<br>\nIII. Instruction fetches <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/448/gate2008-37-isro2009-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider a pipelined processor with the following four stages:<br>\nIF: Instruction Fetch<br>\nID: Instruction Decode and Operand Fetch<br>\nEX: Execute<br>\nWB: Write Back<br>\nThe IF, ID and WB stages take one clock cycle each to complete the operation. The number of clock cycles for the EX stage depends on the instruction. The ADD and SUB instructions need 1 clock cycle and the MUL instruction needs 3 clock cycles in the EX stage. Operand forwarding is used in the pipelined processor. What is the number of clock cycles taken to complete the following sequence of instructions?<br>\n\\(\\begin{array}{lllll} \\textbf{ADD} &amp; \\text{R2, R1, R0} &amp;&amp;&amp; \\text{R2 $\\leftarrow$ R1+R0} \\\\ \\textbf{MUL} &amp; \\text{R4, R3, R2} &amp;&amp;&amp; \\text{R4 $\\leftarrow$ R3*R2} \\\\ \\textbf{SUB} &amp; \\text{R6, R5, R4} &amp;&amp;&amp; \\text{R6 $\\leftarrow$ R5-R4} \\\\ \\end{array}\\) <br><br><strong>(ISRO CSE 2009)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/1235/gate2007-37-isro2009-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a disk pack with 16 surfaces, 128 tracks per surface and 256 sectors per track. 512 bytes of data are stores in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
            "<b>B.</b> <p>256 Mbute, 28 bits</p>",
            "<b>C.</b> <p>512 Mbyte, 20 bits</p>",
            "<b>D.</b> <p>64 Gbyte, 28 bits</p>"
          ],
          "correct_answer": "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48058/isro2009-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A CPU has 24-bit instructions. A program starts at address 300 (in decimal). Which one of the following is a legal program counter (all values in decimal)? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>400</p>",
            "<b>B.</b> <p>500</p>",
            "<b>C.</b> <p>600</p>",
            "<b>D.</b> <p>700</p>"
          ],
          "correct_answer": "<b>C.</b> <p>600</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/888/gate2006-09-isro2009-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
