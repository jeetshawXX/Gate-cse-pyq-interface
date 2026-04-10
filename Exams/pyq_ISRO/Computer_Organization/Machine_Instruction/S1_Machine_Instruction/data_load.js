window.__examLoadCallback({
  "title": "Machine_Instruction - Machine_Instruction - Slot 1",
  "duration": 53,
  "sections": [
    {
      "name": "Machine_Instruction",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
        },
        {
          "id": 7,
          "question": "<p>In X=(M+NxO)/(PxQ), how many one-address instructions are required to evaluate it? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>C.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37956/isro2015-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The contents of the flag register after execution of the following program by 8085 microprocessor will be<br><br>Program<br> SUB A<br>\nMVI B,(01)H<br>\nDCR B<br>\nHLT<br> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((54)_{H}\\)</p>",
            "<b>B.</b> <p>\\((00)_{H}\\)</p>",
            "<b>C.</b> <p>\\((01)_{H}\\)</p>",
            "<b>D.</b> <p>\\((45)_{H}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((54)_{H}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/46026/isro2015-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Assume that 16-bit CPU is trying to access a double word stating at an odd address. How many memory operations are required to access the data? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52438/isro2014-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>How many number of times the instruction sequence below will loop before coming out of the loop?<br>\nMOV AL, 00H<br>\nA1:  INC AL<br>\nJNZ A1 <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>255</p>",
            "<b>C.</b> <p>256</p>",
            "<b>D.</b> <p>Will not come out of the loop.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>256</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43970/isro-2013-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>In 8086, the jump condition for the instruction JNBE is? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>CF = 0 or ZF = 0</p>",
            "<b>B.</b> <p>ZF = 0 and SF = 1</p>",
            "<b>C.</b> <p>CF = 0 and ZF = 0</p>",
            "<b>D.</b> <p>CF = 0</p>"
          ],
          "correct_answer": "<b>C.</b> <p>CF = 0 and ZF = 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43969/isro-2013-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Find the memory address of the next instruction executed by the microprocessor (8086), when operated in real mode for CS=1000 and IP=E000 <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10E00</p>",
            "<b>B.</b> <p>1E000</p>",
            "<b>C.</b> <p>F000</p>",
            "<b>D.</b> <p>1000E</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1E000</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52485/isro2011-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
          "id": 16,
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
        },
        {
          "id": 17,
          "question": "<p>The Memory Address Register <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>is a hardware memory device which denotes the location of the current instruction being executed.</p>",
            "<b>B.</b> <p>is a group of electrical ckt, that performs the intent of instructions fetched from memory</p>",
            "<b>C.</b> <p>contains the address of the memory location that is to be read from or stored into</p>",
            "<b>D.</b> <p>contains a copy of the designated memory location specified by the MAR after a \"read\" or the new contents of the memory prior to a \"write\"</p>"
          ],
          "correct_answer": "<b>C.</b> <p>contains the address of the memory location that is to be read from or stored into</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49998/isro2008-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Which of the following architecture is/are not suitable for realising SIMD? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Vector processor</p>",
            "<b>B.</b> <p>Array processor</p>",
            "<b>C.</b> <p>Von Neumann</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Von Neumann</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49969/isro2008-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Consider the following Assembly language program<br>\nMVIA\t30 H<br>\nACI\t30 H<br>\nXRA\tA<br>\nPOP\tH<br>\nAfter the execution of the above program, the contents of the accumulator will be <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>30 H</p>",
            "<b>B.</b> <p>60 H</p>",
            "<b>C.</b> <p>00 H</p>",
            "<b>D.</b> <p>contents of stack</p>"
          ],
          "correct_answer": "<b>C.</b> <p>00 H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49921/isro2008-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
