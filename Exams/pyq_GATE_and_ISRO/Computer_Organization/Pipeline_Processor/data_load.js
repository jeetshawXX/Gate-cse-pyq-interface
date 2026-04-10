window.__examLoadCallback({
  "title": "Computer_Organization - Pipeline_Processor",
  "duration": 158,
  "sections": [
    {
      "name": "Pipeline_Processor",
      "questions": [
        {
          "id": 1,
          "question": "<p>A 5-stage instruction pipeline has stage delays of 180, 250, 150, 170, and 250, respectively, in nanoseconds. The delay of an inter-stage latch is 10 nanoseconds. Assume that there are no pipeline stalls due to branches and other hazards. The time taken to process 1000 instructions in microseconds is __________ . (rounded off to two decimal places) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "260.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460847/gate-cse-2025-set-2-question-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A non-pipelined instruction execution unit operating at 2 GHz takes an average of\n6 cycles to execute an instruction of a program P. The unit is then redesigned to\noperate on a 5-stage pipeline at 2 GHz. Assume that the ideal throughput of the\npipelined unit is 1 instruction per cycle. In the execution of program P,\n20% instructions incur an average of 2 cycles stall due to data hazards and\n20% instructions incur an average of 3 cycles stall due to control hazards. The\nspeedup (rounded off to one decimal place) obtained by the pipelined design over\nthe non-pipelined design is ________ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422849/gate-cse-2024-set-2-question-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>An instruction format has the following structure:<br><br>\nInstruction Number: \\(Opcode \\; \\; destination reg, \\;\\; source reg-1, \\;\\;source reg-2\\)<br><br>\nConsider the following sequence of instructions to be executed in a pipelined\nprocessor:<br><br>\nI1: DIV R3, R1, R2 <br>\nI2: SUB R5, R3, R4 <br>\nI3: ADD R3, R5, R6 <br>\nI4: MUL R7, R3, R8 <br><br>\nWhich of the following statements is/are TRUE <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is a RAW dependency on R3 between I1 and I2</p>",
            "<b>B.</b> <p>There is a WAR dependency on R3 between I1 and I3</p>",
            "<b>C.</b> <p>There is a RAW dependency on R3 between I2 and I3</p>",
            "<b>D.</b> <p>There is a WAW dependency on R3 between I3 and I4</p>"
          ],
          "correct_answer": "<b>A.</b> <p>There is a RAW dependency on R3 between I1 and I2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422876/gate-cse-2024-set-2-question-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The baseline execution time of a program on a 2 GHz single core machine is\n100 nanoseconds (ns). The code corresponding to 90% of the execution time can be\nfully parallelized. The overhead for using an additional core is 10 ns when running\non a multicore system. Assume that all cores in the multicore system run their share\nof the parallelized code for an equal amount of time.<br>\nThe number of cores that minimize the execution time of the program is _______ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422797/gate-cse-2024-set-1-question-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider a 5-stage pipelined processor with Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Register Writeback (WB) stages. Which of the following statements about forwarding is/are CORRECT? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>In a pipelined execution, forwarding means the result from a source stage of an\nearlier instruction is passed on to the destination stage of a later instruction</p>",
            "<b>B.</b> <p>In forwarding, data from the output of the MEM stage can be passed on to the\ninput of the EX stage of the next instruction</p>",
            "<b>C.</b> <p>Forwarding cannot prevent all pipeline stalls</p>",
            "<b>D.</b> <p>Forwarding does not require any extra hardware to retrieve the data from the\npipeline stages</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>In a pipelined execution, forwarding means the result from a source stage of an\nearlier instruction is passed on to the destination stage of a later instruction</p>",
            "<b>B.</b> <p>In forwarding, data from the output of the MEM stage can be passed on to the\ninput of the EX stage of the next instruction</p>",
            "<b>C.</b> <p>Forwarding cannot prevent all pipeline stalls</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422822/gate-cse-2024-set-1-question-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a 3-stage pipelined processor having a delay of 10 ns (nanoseconds),\n20 ns, and 14 ns, for the first, second, and the third stages, respectively. Assume\nthat there is no other delay and the processor does not suffer from any pipeline\nhazards. Also assume that one instruction is fetched every cycle.<br>\nThe total execution time for executing 100 instructions on this processor is _______\nns <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2040",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399288/gate-cse-2023-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A processor \\(X_1\\) operating at 2 GHz has a standard 5-stage RISC instruction pipeline having a base CPI (cycles per instruction) of one without any pipeline hazards. For a given program P that has 30% branch instructions, control hazards incur 2 cycles stall for every branch. A new version of the processor \\(X_2\\) operating at same clock frequency has an additional branch predictor unit (BPU) that completely eliminates stalls for correctly predicted branches. There is neither any savings nor any additional stalls for wrong predictions. There are no structural hazards and data hazards for \\(X_1\\) and \\(X_2\\). If the BPU has a prediction accuracy of 80%, the speed up (rounded   off to   two decimal places)   obtained   by \\(X_2\\)    over   \\(X_1\\)   in executing P is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.42",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371885/Gate-cse-2022-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider a pipelined processor with 5 stages, Instruction Fetch(IF), Instruction Decode(ID), Execute (EX), Memory Access (MEM), and Write Back (WB). Each stage of the pipeline, except the EX stage, takes one cycle. Assume that the ID stage merely decodes the instruction and the register read is performed in the EX stage. The EX stage takes one cycle for ADD instruction and the register read is performed in the EX stage, The EX stage takes one cycle for ADD instruction and two cycles for MUL instruction. Ignore pipeline register latencies.<br>\nConsider the following sequence of 8 instructions:<br><br>\nADD, MUL, ADD, MUL, ADD, MUL, ADD, MUL<br><br>\nAssume that every MUL instruction is data-dependent on the ADD instruction just before it and every ADD instruction (except the first ADD) is data-dependent on the MUL instruction just before it. The speedup defined as follows.\n<br><br>\n\\(\\textit{Speedup} = \\dfrac{\\text{Execution time without operand forwarding}}{\\text{Execution time with operand forearding}}\\)\n<br><br>\nThe Speedup achieved in executing the given instruction sequence on the pipelined processor (rounded to 2 decimal places) is _____________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.87",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357484/gate-cse-2021-set-2-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A five-stage pipeline has stage delays of 150, 120, 150, 160 and 140 nanoseconds. The registers that are used between the pipeline stages have a delay of 5 nanoseconds each.<br>The total time to execute 100 independent instructions on this pipeline, assuming there are no pipeline stalls, is _______ nanoseconds. <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "17160",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357398/gate-cse-2021-set-1-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>One instruction tries to write an operand before it is written by previous instruction. This may lead to a dependency called <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>True dependency</p>",
            "<b>B.</b> <p>Anti-dependency</p>",
            "<b>C.</b> <p>Output dependency</p>",
            "<b>D.</b> <p>Control Hazard</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Output dependency</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331391/isro2020-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a 5- segment pipeline with a clock cycle time 20 ns in each sub operation. Find out the approximate speed-up ratio between pipelined and non-pipelined system to execute 100 instructions. (if an average, every five cycles, a bubble due to data hazard has to be introduced in the pipeline) <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4.03</p>",
            "<b>C.</b> <p>4.81</p>",
            "<b>D.</b> <p>4.17</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4.03</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331285/isro2020-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a non-pipelined processor operating at 2.5 GHz. It takes 5 clock cycles to complete an instruction. You are going to make a 5-stage pipeline out of this processor. Overheads associated with pipelining force you to operate the pipelined processor at 2 GHz. In a given program, assume that 30% are memory instructions, 60% are ALU instructions and the rest are branch instructions. 5% of the memory instructions cause stalls of 50 clock cycles each due to cache misses and 50% of the branch instructions cause stalls of 2 cycles each. Assume that there are no stalls associated with the execution of ALU instructions. For this program, the speedup achieved by the pipelined processor over the non-pipelined processor (round off to 2 decimal places) is________. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.15",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333188/gate2020-cs-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>A particular parallel program computation requires 100 sec when executed on a single processor, if 40% of this computation is inherently sequential (i.e. will not benefit from additional processors), then theoretically best possible elapsed times of this program running with 2 and 4 processors, respectively, are: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20 sec and 10 sec</p>",
            "<b>B.</b> <p>30 sec and 15 sec</p>",
            "<b>C.</b> <p>50 sec and 25 sec</p>",
            "<b>D.</b> <p>70 sec and 55 sec</p>"
          ],
          "correct_answer": "<b>D.</b> <p>70 sec and 55 sec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213517/isro2018-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The instruction pipeline of a RISC processor has the following stages: Instruction Fetch (IF), Instruction Decode (ID), Operand Fetch (OF), Perform Operation (PO) and Writeback (WB). The IF, ID, OF and WB stages take 1 clock cycle each for every instruction. Consider a sequence of 100 instructions. In the PO stage, 40 instructions take 3 clock cycles each, 35 instructions take 2 clock cycles each, and the remaining 25 instructions take 1 clock cycle each. Assume that there are no data hazards and no control hazards. <br>The number of clock cycles required for completion of execution of the sequence of instructions is ______. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "219",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204125/gate2018-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Instructions execution in a processor is divided into 5 stages. Instruction Fetch (IF),\nInstruction Decode (ID) , Operand Fetch (OF), Execute (EX), and Write Back (WB), These\nstages take 5,4,20, 10 and 3 nanoseconds (ns) respectively. A pipelined implementation of\nthe processor requires buffering between each pair of consecutive stages with a delay of 2ns. <br>\nTwo pipelined implementations of the processor are contemplated.<br><br>\n(i) a naive pipeline implementation (NP) with 5 stages and <br>\n(ii) an efficient pipeline (EP) where the OF stage id divided into stages OF1 and OF2\nwith execution times of 12 ns and 8 ns respectively. <br><br>\nThe speedup (correct to two decimals places) achieved by EP over NP in executing 20\nindependent instructions with no hazards is ________________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.49",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118719/gate2017-1-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Register renaming is done in pipelined processors: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>as an alternative to register allocation at compile time</p>",
            "<b>B.</b> <p>for efficient access to function parameters and local variables</p>",
            "<b>C.</b> <p>to handle certain kinds of hazards</p>",
            "<b>D.</b> <p>as part of address translation</p>"
          ],
          "correct_answer": "<b>C.</b> <p>to handle certain kinds of hazards</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52/gate2012-20-isro2016-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Consider a non-pipelined processor with a clock rate of 2.5 gigahertz and average cycles per instruction of four. The same processor is upgraded to a pipelined processor with five stages; but due to the internal pipeline delay, the clock speed is reduced to 2 gigahertz. Assume that there are no stalls in the pipeline. The speedup achieved in this pipelined processor is <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3.2</p>",
            "<b>B.</b> <p>\\(3.0\\)</p>",
            "<b>C.</b> <p>2.2</p>",
            "<b>D.</b> <p>\\(2.0\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3.2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55465/isro2016-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>The dynamic hazard problem occurs in <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>combinational circuit alone</p>",
            "<b>B.</b> <p>sequential circuit only</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both (A) and (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55543/isro2016-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Consider a 3GHz (gigahertz) processor with a three-stage pipeline and stage latencies \\(\\tau _{1}\\), \\(\\tau _{2}\\), and \\(\\tau _{3}\\) such that \\(\\tau _{1}=3\\tau _{2}/4=2\\tau _{3}\\). If the longest pipeline stage is split into two pipeline stages of equal latency, the new frequency is _____GHz, ignoring delays in the pipeline registers. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3.9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39580/gate2016-2-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Suppose the functions F and G can be computed in 5 and 3 nano seconds by functional units \\(U_{F}\\) and \\(U_{G}\\), respectively. Given two instances of \\(U_{F}\\) and two instances of \\(U_{G}\\), it is required to implement the computation \\(F(G(X_{i}))\\) for \\(1\\leq i\\leq 10\\). Ignoring all other delays, the minimum time required to complete this computation is ________ nanoseconds. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "28",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39627/gate-cse-2016-set-2-question-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>The stage delays in a 4-stage pipeline are 800,500,400 and 300 picoseconds.The first stage (with delay 800 picoseconds)is replaced with a functionally equivalent design involving two stages with respective delays 600 and 350 picoseconds.The throughput increase of the pipeline is ________ percent. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "33",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39691/gate2016-1-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Consider the following code sequence having five instructions I1 to I5. Each of these instructions has the following format. <br><br>OP Ri, Rj, Rk <br><br>where operation OP is performed on contents of registers Rj and Rk and the result is stored in register Ri. <br><br>\nI1: ADD R1, R2, R3  <br>\nI2: MUL R7, R1, R3 <br>\nI3: SUB R4, R1, R5 <br>\nI4: ADD R3, R2, R4 <br>\nI5: MUL R7, R8, R9 <br><br> Consider the following three statements. <br>\nS1: There is an anti-dependence between instructions l2 and l5 <br>\nS2: There is an anti-dependence between instructions l2 and l4  <br>                              S3: Within an instruction pipeline an anti-dependence always creates one or more stalls <br><br> Which one of above statements is/are correct? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is true</p>",
            "<b>B.</b> <p>Only S2 is true</p>",
            "<b>C.</b> <p>Only S1 and S3 are true</p>",
            "<b>D.</b> <p>Only S2 and S3 are true</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Only S2 is true</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8556/gate2015-3-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Consider the following reservation table for a pipeline having three stages S1,S2 and S3.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Pipeline_Processor\\q38_2b8ca31a.jpg\"><br> The minimum average latency (MAL) is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8560/gate2015-3-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Consider the sequence of machine instructions given below:<br>\nMUL R5, R0, R1  <br>\nDIV R6, R2, R3 <br>\nADD R7, R5, R6 <br>\nSUB R8, R7, R4 <br>\nIn the above sequence, R0 to R8 are general purpose registers. In the instructions shown, the first register stores the result of the operation performed on the second and the third registers. This sequence of instructions is to be executed in a pipelined instruction processor with the following 4 stages: (1) Instruction Fetch and Decode (IF), (2) Operand Fetch (OF), (3) Perform Operation (PO) and (4) Write back the result (WB). The IF, OF and WB stages take 1 clock cycle each for any instruction. The PO stage takes 1 clock cycle for ADD or SUB instruction, 3 clock cycles for MUL instruction and 5 clock cycles for DIV instruction. The pipelined processor uses operand forwarding from the PO stage to the OF stage. <br><br>The number of clock cycles taken for the execution of the above sequence of instructions is ___________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "13",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8218/gate2015-2-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Consider a non-pipelined processor with a clock rate of 2.5 gigahertz and average cycles per instruction of four. The same processor is upgraded to a pipelined processor with five stages; but due to the internal pipeline delay, the clock speed is reduced to 2 gigahertz. Assume that there are no stalls in the pipeline. The speed up achieved in this pipelined processor is_________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8288/gate2015-1-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>An instruction pipeline has five stages, namely, instruction fetch (IF), instruction decode and register fetch (ID/RF), instruction execution (Ex), memory access (MEM), and register write back (WB) with stage latencies 1 ns, 2.2 ns, 2 ns, 1 ns, and 0.75 ns, respectively (ns stands for nanoseconds). To gain in terms of frequency, the designers have decided to split the ID/RF stage into three stages (ID, RF1, RF2) each of latency 2.2/3 ns. Also, the Ex stage is split into two stages (Ex1, Ex2) each of latency 1 ns. The new design has a total of eight pipeline stages. A program has 20% branch instructions which execute in the Ex stage and produce the next instruction pointer at the end of the Ex stage in the old design and at the end of the Ex2 stage in the new design. The IF stage stalls after fetching a branch instruction until the next instruction pointer is computed. All instructions other than the branch instruction have an average CPI of one in both the designs. The execution times of this program on the old and the new design are P and Q nanoseconds, respectively. The value of P/Q is __________ <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2077/gate2014-3-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Consider the following processors (ns stands for nanoseconds).\nAssume that the pipeline registers have zero latency. <br>\nP1:  Four-stage pipeline with stage latencies 1 ns, 2 ns, 2 ns, 1 ns. <br>\nP2:  Four-stage pipeline with stage latencies 1 ns, 1.5 ns, 1.5 ns, 1.5 ns. <br>\nP3:  Five-stage pipeline with stage latencies 0.5 ns, 1 ns, 1 ns, 0.6 ns, 1 ns. <br>\nP4:  Five-stage pipeline with stage latencies 0.5 ns, 0.5 ns, 1 ns, 1 ns, 1.1 ns. <br>\nWhich processor has the highest peak clock frequency? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P1</p>",
            "<b>B.</b> <p>P2</p>",
            "<b>C.</b> <p>P3</p>",
            "<b>D.</b> <p>P4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2043/gate2014-3-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>Consider a 6-stage instruction pipeline, where all stages are perfectly balanced. Assume that\nthere is no cycle-time overhead of pipelining. When an application is executing on this 6-stage pipeline, the speedup achieved with respect to non-pipelined execution if 25% of the instructions incur 2 pipeline stall cycles is _________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1921/gate2014-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>A pipeline P operating at 400 MHz has a speedup factor of 6 and operating at 70% efficiency. How many stages are there in the pipeline? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>9</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43806/isro-2013-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>Consider an instruction pipeline with five stages without any branch prediction: Fetch Instruction\n(FI), Decode Instruction (DI), Fetch Operand (FO), Execute Instruction (EI) and Write Operand\n(WO). The stage delays for FI, DI, FO, EI and WO are 5 ns, 7 ns, 10 ns, 8 ns and 6 ns, respectively.\nThere are intermediate storage buffers after each stage and the delay of each buffer is 1 ns. A\nprogram consisting of 12 instructions I1, I2, I3,..., I12 is executed in this pipelined processor.\nInstruction I4 is the only branch instruction and its branch target is I9. If the branch is taken during\nthe execution of this program, the time (in ns) needed to complete the program is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>132</p>",
            "<b>B.</b> <p>165</p>",
            "<b>C.</b> <p>176</p>",
            "<b>D.</b> <p>328</p>"
          ],
          "correct_answer": "<b>B.</b> <p>165</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/330/gate2013-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>Register renaming is done in pipelined processors <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>as an alternative to register allocation at compile time</p>",
            "<b>B.</b> <p>for efficient access to function parameters and local variables</p>",
            "<b>C.</b> <p>to handle certain kinds of hazards</p>",
            "<b>D.</b> <p>as part of address translation</p>"
          ],
          "correct_answer": "<b>C.</b> <p>to handle certain kinds of hazards</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52/gate2012-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>If a microcomputer operates at 5 MHz with an 8-bit bus and a newer version operates at 20 MHz with a 32-bit bus, the maximum speed-up possible approximately will be <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18090/isro2011-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>A processor takes 12 cycles to complete an instruction I. The corresponding pipelined processor uses 6 stages with the execution times of 3,2,5,4,6 and 2 cycles respectively. What is the asymptotic speedup assuming that a very large number of instructions are to be executed? <br><br><strong>(ISRO CSE 2011)</strong></p>",
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
          "id": 34,
          "question": "<p>Consider an instruction pipeline with four stages (S1, S2, S3 and S4) each with\ncombinational circuit only. The pipeline registers are required between each stage\nand at the end of the last stage. Delays for the stages and for the pipeline\nregisters are as given in the figure. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Pipeline_Processor\\q30_eec15aeb.jpg\"> What is the approximate speed up of the pipeline in steady state under ideal conditions when compared to the corresponding non-pipeline implementation? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>2.5</p>",
            "<b>C.</b> <p>1.1</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2.5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2143/gate2011-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>A 5-stage pipelined processor has Instruction Fetch (IF), Instruction Decode (ID),\nOperand Fetch (OF), Perform Operation (PO) and Write Operand (WO) stages.\nThe IF, ID, OF and WO stages take 1 clock cycle each for any instruction. The PO\nstage takes 1 clock cycle for ADD and SUB instructions, 3 clock cycles for MUL\ninstruction, and 6 clock cycles for DIV instruction respectively. Operand\nforwarding is used in the pipeline. What is the number of clock cycles needed to\nexecute the following sequence of instructions?\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Pipeline_Processor\\q33_b6d0f7e6.jpg\"> <br><br><strong>(GATE CSE 2010)</strong></p>",
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
          "id": 36,
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
          "id": 37,
          "question": "<p>Consider a 4 stage pipeline processor. The number of cycles needed by the four\ninstructions I1, I2, I3, I4 in stages S1, S2, S3, S4 is shown below:  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Pipeline_Processor\\q28_52a82c1b.jpg\"><br> What is the number of cycles needed to execute the following loop? <br> For (i=1 to 2) {I1; I2; I3; I4;} <br><br><strong>(GATE CSE 2009)</strong></p>",
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
          "id": 38,
          "question": "<p>The performance of a pipelined processor suffers if: <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the pipeline stages have different delays</p>",
            "<b>B.</b> <p>consecutive instructions are dependent on each other</p>",
            "<b>C.</b> <p>the pipeline stages share hardware resources</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/836/gate2002-2-6-isro2008-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>A non pipelined single cycle processor operating at 100 MHz is converted into a synchronous pipelined processor with five stages requiring 2.5 nsec, 1.5 nsec, 2 nsec, 1.5 nsec and 2.5 nsec, respectively. The delay of the latches is 0.5 nsec. The speedup of the pipeline processor for a large number of instructions is: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4.5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3.33</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3.33</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3350/gate2008-it-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Delayed branching can help in the handling of control hazards <br><br> The following code is to run on a pipelined processor with one branch delay slot: <br> I1: ADD \\(\\leftarrow\\)R2  R7 +R8 <br>\nI2 : SUB R4 \\(\\leftarrow\\)R5 - R6 <br>\nI3: ADD R1 \\(\\leftarrow\\) R2 + R3 <br>\nI4 : STORE Memory [R4] \\(\\leftarrow\\) R1 <br>\nBRANCH to Label if R1==0 <br> <br>Which of the instructions I1, I2, I3 or I4 can legitimately occupy the delay slot without any other program modification? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I1</p>",
            "<b>B.</b> <p>I2</p>",
            "<b>C.</b> <p>I3</p>",
            "<b>D.</b> <p>I4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43487/gate2008-77#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>Delayed branching can help in the handling of control hazards <br><br> For all delayed conditional branch instructions, irrespective of whether the condition evaluates to true or false <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The instruction following the conditional branch instruction in memory is executed</p>",
            "<b>B.</b> <p>The first instruction in the fall through path is executed</p>",
            "<b>C.</b> <p>The first instruction in the taken path is executed</p>",
            "<b>D.</b> <p>The branch takes longer to execute than any other instruction</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The instruction following the conditional branch instruction in memory is executed</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/496/gate2008-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>Which of the following are NOT true in a pipelined processor?<br><br>\nI. Bypassing can handle all RAW hazards<br>\nII. Register renaming can eliminate all register carried WAR hazards <br>\nIII. Control hazard penalties can be eliminated by dynamic branch prediction <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and III only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/447/gate2008-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
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
          "id": 44,
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
          "id": 45,
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
          "id": 46,
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
          "id": 47,
          "question": "<p>A pipelined processor uses a 4-stage instruction pipeline with the following stages: Instruction fetch (IF), Instruction decode (ID), Execute (EX) and Writeback (WB). The arithmetic operations as well as the load and store operations are carried out in the EX stage. The sequence of instructions corresponding to the statement \\(X = (S - R * (P + Q))/T\\) is given below. The values of variables P, Q, R, S and T are available in the registers R0, R1, R2, R3 and R4 respectively, before the execution of the instruction sequence.<br><br>\n\\(\\begin{array}{lll} \\text{ADD} &amp; \\text{$R5,R0,R1$} &amp; \\text{$;R5$} \\leftarrow \\text{R0 + R1} \\\\ \\text{MUL}&amp; \\text{$R6,R2,R5$} &amp; \\text{$;R6$} \\leftarrow \\text{R2 * R5} \\\\ \\text{SUB} &amp; \\text{$R5,R3,R6$} &amp; \\text{$;R5$} \\leftarrow \\text{R3 -R6} \\\\ \\text{DIV} &amp;\\text{$R6,R5,R4$} &amp; \\text{$;R6$} \\leftarrow \\text{R5/R4} \\\\ \\text{STORE} &amp;\\text{$R6,X$}&amp; \\text{$;X$} \\leftarrow \\text{R6} \\\\ \\end{array}\\) <br><br>The IF, ID and WB stages take 1 clock cycle each. The EX stage takes 1 clock cycle each for the ADD, SUB and STORE operations, and 3 clock cycles each for MUL and DIV operations. Operand forwarding from the EX stage to the ID stage is used. The number of clock cycles required to complete the sequence of instructions is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>12</p>",
            "<b>C.</b> <p>14</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>12</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3623/gate2006-it-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>A pipelined processor uses a 4-stage instruction pipeline with the following stages: Instruction fetch (IF), Instruction decode (ID), Execute (EX) and Writeback (WB). The arithmetic operations as well as the load and store operations are carried out in the EX stage. The sequence of instructions corresponding to the statement \\(X = (S - R * (P + Q))/T\\) is given below. The values of variables P, Q, R, S and T are available in the registers R0, R1, R2, R3 and R4 respectively, before the execution of the instruction sequence.<br><br>\n\\(\\begin{array}{lll} \\text{ADD} &amp; \\text{$R5,R0,R1$} &amp; \\text{$;R5$} \\leftarrow \\text{R0 + R1} \\\\ \\text{MUL}&amp; \\text{$R6,R2,R5$} &amp; \\text{$;R6$} \\leftarrow \\text{R2 * R5} \\\\ \\text{SUB} &amp; \\text{$R5,R3,R6$} &amp; \\text{$;R5$} \\leftarrow \\text{R3 -R6} \\\\ \\text{DIV} &amp;\\text{$R6,R5,R4$} &amp; \\text{$;R6$} \\leftarrow \\text{R5/R4} \\\\ \\text{STORE} &amp;\\text{$R6,X$}&amp; \\text{$;X$} \\leftarrow \\text{R6} \\\\ \\end{array}\\) <br><br>The number of Read-After-Write (RAW) dependencies, Write-After-Read( WAR) dependencies, and Write-After-Write (WAW) dependencies in the sequence of instructions are, respectively, <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,2,4</p>",
            "<b>B.</b> <p>3,2,3</p>",
            "<b>C.</b> <p>4,2,2</p>",
            "<b>D.</b> <p>3,3,2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4,2,2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3622/gate2006-it-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>A CPU has five-stages pipeline and runs at 1GHz frequency. Instruction fetch\nhappens in the first stage of the pipeline. A conditional branch instruction\ncomputes the target address and evaluates the condition in the third stage of the\npipeline. The processor stops fetching new instructions following a conditional\nbranch until the branch outcome is known. A program executes \\(10^{9}\\) instructions\nout of which 20% are conditional branches. If each instruction takes one cycle to\ncomplete on average, then total execution time of the program is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.0 second</p>",
            "<b>B.</b> <p>1.2 seconds</p>",
            "<b>C.</b> <p>1.4 seconds</p>",
            "<b>D.</b> <p>1.6 seconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1.4 seconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1818/gate2006-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 50,
          "question": "<p>We have two designs D1 and D2 for a synchronous pipeline processor. D1 has 5 pipeline stages with execution times of 3 nsec, 2 nsec, 4 nsec, 2 nsec and 3 nsec while the design D2 has 8 pipeline stages each with 2 nsec execution time How much time can be saved using design D2 over design D1 for executing 100 instructions? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>214 nsec</p>",
            "<b>B.</b> <p>202 nsec</p>",
            "<b>C.</b> <p>86 nsec</p>",
            "<b>D.</b> <p>-200 nsec</p>"
          ],
          "correct_answer": "<b>B.</b> <p>202 nsec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3805/gate2005-it-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
          "question": "<p>A 5 stage pipelined CPU has the following sequence of stages:<pre><code>\nIF - Instruction fetch from instruction memory,\nRD - Instruction decode and register read,\nEX - Execute: ALU operation for data and address computation,\nMA - Data memory access - for write access, the register read at RD stage is used,\nWB - Register write back. \nConsider the following sequence of instructions:\nI1 : L R0, 1oc1;        R0 &lt;= M[1oc1]\nI2 : A R0, R0;           R0 &lt;= R0 + R0\nI3 : S R2, R0;           R2 &lt;= R2 - R0\n </code></pre> Let each stage take one clock cycle. What is the number of clock cycles taken to complete the above sequence of instructions starting from the fetch of I1 ? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>12</p>",
            "<b>D.</b> <p>15</p>"
          ],
          "correct_answer": "<b>A.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1391/gate2005-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 52,
          "question": "<p>In an enhancement of a design of a CPU, the speed of a floating point unit has been increased by 20% and the speed of a fixed point unit has been increased by 10%. What is the overall speedup achieved if the ratio of the number of floating point operations to the number of fixed point operations is 2:3 and the floating point operation used to take twice the time taken by the fixed point operation in the original design? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.155</p>",
            "<b>B.</b> <p>1.185</p>",
            "<b>C.</b> <p>1.255</p>",
            "<b>D.</b> <p>1.285</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1.155</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/790/gate2004-it-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>Consider a pipeline processor with 4 stages S1 to S4. We want to execute the following loop:<br><pre><code> for (i = 1; i &lt; = 1000; i++) \n    {I1, I2, I3, I4} </code></pre>\nwhere the time taken (in ns) by instructions I1 to I4 for stages S1 to S4 are given below:<br>\\(\\begin{array}{|c|c|c|c|c|} \\hline &amp; \\textbf {$S _1$} &amp;\\textbf {$S _2$} &amp; \\textbf {$S _3$} &amp; \\textbf{$S _4$ } \\\\\\hline \\textbf{I1}&amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$} &amp; \\text{$2$} \\\\\\hline \\textbf{I2} &amp; \\text{$2$} &amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$}\\\\\\hline \\textbf{I3}&amp; \\text{$1$} &amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$} \\\\\\hline \\textbf{I4} &amp; \\text{$2$} &amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$} \\\\\\hline \\end{array}\\)<br>The output of  I1 for i = 2 will be available after<br> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11 ns</p>",
            "<b>B.</b> <p>12 ns</p>",
            "<b>C.</b> <p>13 ns</p>",
            "<b>D.</b> <p>28 ns</p>"
          ],
          "correct_answer": "<b>C.</b> <p>13 ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3690/gate2004-it-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>A 4-stage pipeline has the stage delays as 150, 120, 160 and 140 nanoseconds respectively. Registers\nthat are used between the stages have a delay of 5 nanoseconds each. Assuming constant clocking\nrate, the total time taken to process 1000 data items on this pipeline will be <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>120.4 microseconds</p>",
            "<b>B.</b> <p>160.5 microseconds</p>",
            "<b>C.</b> <p>165.5 microseconds</p>",
            "<b>D.</b> <p>590 microseconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>165.5 microseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1063/gate2004-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
          "question": "<p>For a pipelined CPU with a single ALU, consider the following situations <br>\n1. The (j + 1)-th instruction uses the result of j-th instruction as an operand <br>\n2. The execution of a conditional jump instruction <br>\n3. The j - th and j + 1 - st instructions require the ALU at the same time <br>\nWhich of the above can cause a hazard? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 and 2 only</p>",
            "<b>B.</b> <p>2 and 3 only</p>",
            "<b>C.</b> <p>3 only</p>",
            "<b>D.</b> <p>All the three</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All the three</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/901/gate2003-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 56,
          "question": "<p>The performance of a pipelined processor suffers if <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The pipelined stages have different delays</p>",
            "<b>B.</b> <p>Consecutive instructions are dependent on each other</p>",
            "<b>C.</b> <p>The pipeline stages share hardware resources</p>",
            "<b>D.</b> <p>All the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/836/gate2002-2-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 57,
          "question": "<p>Comparing the time T1 taken for a single instruction on a pipelined CPU with time T2 taken on a non-pipelined but identical CPU, we can say that <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T1 \\(\\leq\\) T2</p>",
            "<b>B.</b> <p>T1 \\(\\geq\\) T2</p>",
            "<b>C.</b> <p>T1 &lt; T2</p>",
            "<b>D.</b> <p>T1 and T2 plus the time taken for one instruction fetch cycle</p>"
          ],
          "correct_answer": "<b>B.</b> <p>T1 \\(\\geq\\) T2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/631/gate2000-1-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
