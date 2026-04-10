window.__examLoadCallback({
  "title": "Machine_Instruction - Machine_Instruction - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Machine_Instruction",
      "questions": [
        {
          "id": 1,
          "question": "<p>An application executes \\(6.4 \\times 10^8\\) number of instructions in 6.3 seconds. There are four types of instructions, the details of which are given in the table. The duration of a clock cycle in nanoseconds is _________. (rounded off to one decimal place)\\( \\begin{array}{|c|c|c|}\n\\hline\n\\text{Instruction type} &amp; \\text{Clock cycles required per instruction (CPI)} &amp; \\text{Number of instructions executed} \\\\\n\\hline\n\\text{Branch} &amp; 2 &amp; 2.25 \\times 10^8 \\\\\n\\text{Load} &amp; 5 &amp; 1.20 \\times 10^8 \\\\\n\\text{Store} &amp; 4 &amp; 1.65 \\times 10^8 \\\\\n\\text{Arithmetic} &amp; 3 &amp; 1.30 \\times 10^8 \\\\\n\\hline\n\\end{array} \\) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460842/gate-cse-2025-set-2-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which of the following is/are part of an Instruction Set Architecture of a processor? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The size of the cache memory</p>",
            "<b>B.</b> <p>The clock frequency of the processor</p>",
            "<b>C.</b> <p>The number of cache memory levels</p>",
            "<b>D.</b> <p>The total number of registers</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The total number of registers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460817/gate-cse-2025-set-2-question-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A processor has 64 general-purpose registers and 50 distinct instruction types. An instruction is encoded in 32-bits. What is the maximum number of bits that can be used to store the immediate operand for the given instruction?\n<br><br>\nADD  R1, #25       // R1 = R1 + 25 <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>20</p>",
            "<b>C.</b> <p>22</p>",
            "<b>D.</b> <p>24</p>"
          ],
          "correct_answer": "<b>B.</b> <p>20</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460053/gate-cse-2025-set-1-question-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A processor uses a 32-bit instruction format and supports byte-addressable memory\naccess. The ISA of the processor has 150 distinct instructions. The instructions are\nequally divided into two types, namely R-type and I-type, whose formats are shown\nbelow.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Machine_Instruction\\q51_81cf05b3.webp\"><br>\nIn the OPCODE, 1 bit is used to distinguish between I-type and R-type instructions\nand the remaining bits indicate the operation. The processor has 50 architectural\nregisters, and all register fields in the instructions are of equal size.<br>\nLet X be the number of bits used to encode the UNUSED field, Y be the number\nof bits used to encode the OPCODE field, and Z be the number of bits used to\nencode the immediate value/address field. The value of X + 2Y + Z is ______ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "34",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422846/gate-cse-2024-set-2-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A processor with 16 general purpose registers uses a 32-bit instruction format. The\ninstruction format consists of an opcode field, an addressing mode field, two register\noperand fields, and a 16-bit scalar field. If 8 addressing modes are to be supported,\nthe maximum number of unique opcodes possible for every addressing mode\nis _________ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "32",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422850/gate-cse-2024-set-2-question-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the given C-code and its corresponding assembly code, with a few\noperands U1-U4 being unknown. Some useful information as well as the semantics\nof each unique assembly instruction is annotated as inline comments in the code.\nThe memory is byte-addressable.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Machine_Instruction\\q31_991991da.jpg\"><br>Which one of the following options is a CORRECT replacement for operands in\nthe position (U1, U2, U3, U4) in the above assembly code? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(8, 4, 1, Lo2)</p>",
            "<b>B.</b> <p>(3, 4, 4, Lo1)</p>",
            "<b>C.</b> <p>(8, 1, 1, Lo2)</p>",
            "<b>D.</b> <p>(3, 1, 1, Lo1)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(3, 4, 4, Lo1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399280/gate-cse-2023-question-31#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following instruction sequence where registers \\(R_1,R_2 \\text{ and }R_3\\) are general purpose and \\(MEMORY[X]\\) denotes the content at the memory location \\(X\\).<br><br>\\(\\begin{array}{llc} \\textbf{Instruction} &amp; \\textbf{Semantics} &amp; \\textbf{Instruction Size} \\text{ (bytes)} \\\\ \\hline \\text{MOV } R1, (5000) &amp; R1 \\leftarrow \\text{MEMORY}[5000] &amp; 4 \\\\ \\hline \\text{MOV } R2, (R3) &amp; R2 \\leftarrow \\text{MEMORY}[R3] &amp; 4 \\\\ \\hline \\text{ADD} R2, R1 &amp; R2 \\leftarrow R1 + R2 &amp; 2 \\\\ \\hline \\text{MOV } (R3), R2 &amp; \\text{MEMORY}[R3] \\leftarrow R2 &amp; 4 \\\\ \\hline \\text{INC } R3 &amp; R3 \\leftarrow R3+1 &amp; 2 \\\\ \\hline \\text{DEC } R1 &amp; R1 \\leftarrow R1-1 &amp; 2 \\\\ \\hline \\text{BNZ } 1004 &amp; \\text{Branch if not zero to the} &amp; 2 \\\\ &amp; \\text{given absolute address} \\\\ \\hline \\text{HALT} &amp; \\text{Stop} &amp; 1 \\\\ \\hline \\end{array}\\)<br><br>\nAssume that the content of the memory location 5000 is 10, and the content of the register \\(R_3\\) is 3000. The content of each of the memory locations from 3000 to 3020 is 50. The instruction sequence starts from the memory location 1000. All the numbers are in decimal format. Assume that the memory is byte addressable.\n<br>\nAfter the execution of the program, the content of memory location 3010 is ____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357397/gate-cse-2021-set-1-question-55#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A computer which issues instructions in order, has only 2 registers and 3 opcodes ADD, SUB and MOV. Consider 2 different implementations of the following basic block :<br>\\(\\begin{array}{l|l} \\text { Case } 1 &amp; \\text { Case } 2 \\\\ \\hline t 1=a+b ; &amp; t 2=c+d \\\\ t 2=c+d ; &amp; t 3=e-t 2 \\\\ t 3=e-t 2 ; &amp; t 1=a+b \\\\ t 4=t 1-t 2 ; &amp; t 4=t 1-t 2 \\end{array}\\)<br>Assume that all operands are initially in memory. Final value of computation also has to reside in memory. Which one is better in terms of memory accesses and by how many MOV instructions? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Case 2, 2</p>",
            "<b>B.</b> <p>Case 2, 3</p>",
            "<b>C.</b> <p>Case 1, 2</p>",
            "<b>D.</b> <p>Case 1, 3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Case 2, 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331470/isro2020-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider a 32- bit processor which supports 70 instructions. Each instruction is 32 bit long and has 4 fields namely opcode, two register identifiers and an immediate operand of unsigned integer type. Maximum value of the immediate operand that can be supported by the processor is 8191. How many registers the processor has? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>32</p>",
            "<b>B.</b> <p>64</p>",
            "<b>C.</b> <p>128</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>64</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331291/isro2020-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A non-pipelined CPU has 12 general purpose registers?(R0,R1,R2,...,R12). Following operations are supported<br><br>ADD Ra, Rb, Rr      Add Ra to Rb and store the result in Rr<br>MUL Ra, Rb, Rr      Multiply Ra to Rb and store the result in Rr<br><br>MUL  operation takes two clock cycles, ADD takes one clock cycle.<br><br>Calculate minimum number of clock cycles required to compute the value of the expression XY+XYZ+YZ. The variable X,Y,Z are initially available in registers R0,R1 and R2 and contents of these registers must not be modified. <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>B.</b> <p>6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331437/isro2020-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Statements associated with registers of a CPU are given. Identify the false statement. <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The program counter holds the memory address of the instruction in execution</p>",
            "<b>B.</b> <p>Only opcode is transferred to the control unit</p>",
            "<b>C.</b> <p>An instruction in the instruction register consists of the opcode and the operand</p>",
            "<b>D.</b> <p>The value of the program counter is incremented by 1 once its value has been read to the memory address register</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The program counter holds the memory address of the instruction in execution</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331334/isro2020-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A processor has 64 registers and uses 16-bit instruction format. It has two types of instructions: I-type and R-type. Each I-type instruction contains an opcode, a register name, and a 4-bit immediate value. Each R-type instruction contains an opcode and two register names. If there are 8 distinct I-type opcodes, then the maximum number of distinct R-type opcodes is _______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333187/gate2020-cs-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following data path diagram. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Machine_Instruction\\q4_f58f93bb.jpg\"><br> Consider an instruction: \\(R0\\leftarrow R1+R2\\). The following steps are used to execute it over the given data path. Assume that PC is incremented appropriately. The subscripts r and w indicate read and write operations, respectively. <br><br>\n\\(1. \\; R2_r,TEMP1_r,ALU_{add},TEMP2_w\\)  <br>  \\(2. \\; R1_r,TEMP1_w\\) <br> \\(3. \\; PC_r,MAR_w,MEM_r\\)  <br>\\(4. \\; TEMP2_r,R0_w\\) <br> \\(5. \\; MDR_r,IR_w\\)<br><br>\nWhich one of the following is the correct order of execution of the above steps? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,1,4,5,3</p>",
            "<b>B.</b> <p>1,2,4,3,5</p>",
            "<b>C.</b> <p>3,5,2,1,4</p>",
            "<b>D.</b> <p>3,5,1,2,4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3,5,2,1,4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333227/gate2020-cs-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>A byte addressable computer has a memory capacity of \\(2^{m} K B(k \\text { bytes })\\) and can perform \\(2^{n}\\) operations. An instruction involving 3 operands and one operator needs maximum of: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3m bits</p>",
            "<b>B.</b> <p>3m+n bits</p>",
            "<b>C.</b> <p>m+n bits</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213557/isro2018-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A data driven machine is one that executes an instruction if the needed data is available. The physical ordering of the code listing does not dictate the course of execution. Consider the following pseudo-code:<br><br>A. Multiply E by 0.5 to get F<br>B. Add A and B to get E<br>\nC. Add B with 0.5 to get D<br>\nD. Add E and F to get G<br>\nE. Add A with 10.5 to get C<br><br>Assume A,B,C are already assigned values and the desired output is G. Which of the following sequence of execution is valid? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>B, C, D, A, E</p>",
            "<b>B.</b> <p>C, B, E, A, D</p>",
            "<b>C.</b> <p>A, B, C, D, E</p>",
            "<b>D.</b> <p>E, D, C, B, A</p>"
          ],
          "correct_answer": "<b>B.</b> <p>C, B, E, A, D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213582/isro2018-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
