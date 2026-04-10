window.__examLoadCallback({
  "title": "CO & Architecture - Data Path",
  "duration": 19,
  "sections": [
    {
      "name": "Data Path",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"85669\"></a><div itemprop=\"text\">A single bus CPU consists of four general purpose register, namely, \\( R0, \\ldots, R3, \\text{ALU}, \\text{MAR}, \\text{MDR}, \\text{PC}, \\text{SP} \\) and \\( \\text{IR} \\) (Instruction Register). Assuming suitable microinstructions, write a microroutine for the instruction, \\( \\text{ADD }R0, R1 \\).</div><br><br><b>GATE CSE 1990 | Question: 8a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/85669/gate-cse-1990-question-8a\" target=\"_blank\">https://gateoverflow.in/85669/gate-cse-1990-question-8a</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"731\"></a><div itemprop=\"text\"><p>Consider the following data path of a simple non-pipelined CPU. The registers \\( A, B \\), \\( A_{1},A_{2}, \\textsf{MDR}, \\) the \\( \\textsf{bus} \\) and the \\( \\textsf{ALU} \\) are \\( 8 \\)-\\( bit \\) wide. \\( \\textsf{SP} \\) and \\( \\textsf{MAR} \\) are \\( 16 \\)-\\( bit \\) registers. The \\( \\textsf{MUX} \\) is of size \\( 8 \\times (2:1) \\) and the \\( \\textsf{DEMUX} \\) is of size \\( 8 \\times (1:2) \\). Each memory operation takes \\( 2 \\) \\( \\textsf{CPU} \\) clock cycles and uses \\( \\textsf{MAR} \\) (Memory Address Register) and \\( \\textsf{MDR} \\) (Memory Date Register). \\( \\textsf{SP} \\) can be decremented locally.</p>\n\n<p><img alt=\"\" height=\"261\" src=\"images/gateOverflow_pyq_images/co___architecture___data_path/5d2cc7015ff79054ef62a420b839117f.png\" width=\"632\"></p>\n\n<p>The \\( \\textsf{CPU} \\) instruction \"<code>push r</code>\" where, \\( r = \\) \\( A \\) or \\( B \\) has the specification</p>\n\n<ul>\n\t<li>\\( M[SP] ← r  \\)</li>\n\t<li>\\( SP ← SP - 1 \\)</li>\n</ul>\n\n<p>How many \\( \\textsf{CPU} \\) clock cycles are required to execute the \"<code>push r</code>\" instruction?</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 2.13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 5 \\)</p>"
          ],
          "correct_answer": "<p>\\( 5 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/731/gate-cse-2001-question-2-13\" target=\"_blank\">https://gateoverflow.in/731/gate-cse-2001-question-2-13</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1402\"></a><div itemprop=\"text\"><p>Consider the following data path of a \\( \\text{CPU}. \\)</p>\n\n<p><img alt=\"\" src=\"images/gateOverflow_pyq_images/co___architecture___data_path/f513c81bd3975590026a225a22b18985.png\" width=\"770\"></p>\n\n<p>The \\( \\text{ALU}, \\) the bus and all the registers in the data path are of identical size. All operations including incrementation of the \\( \\text{PC} \\) and the \\( \\text{GPRs} \\) are to be carried out in the \\( \\text{ALU}. \\) Two clock cycles are needed for memory read operation – the first one for loading address in the \\( \\text{MAR} \\) and the next one for loading data from the memory bus into the \\( \\text{MDR}. \\)</p>\n\n<p>The instruction \\( ``\\text{add R0, R1}” \\) has the register transfer interpretation \\( \\text{R0} \\Leftarrow&nbsp;\\text{R0 + R1}. \\) The minimum number of clock cycles needed for execution cycle of this instruction is:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 79</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 5 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1402/gate-cse-2005-question-79\" target=\"_blank\">https://gateoverflow.in/1402/gate-cse-2005-question-79</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"43568\"></a><div itemprop=\"text\"><p>Consider the following data path of a \\( \\text{CPU}. \\)</p>\n\n<p><img alt=\"\" src=\"images/gateOverflow_pyq_images/co___architecture___data_path/5fbb1b94371017b760e28cf4bd25d214.png\" width=\"700\"></p>\n\n<p>The \\( \\text{ALU}, \\) the bus and all the registers in the data path are of identical size. All operations including incrementation of the \\( \\text{PC} \\) and the \\( \\text{GPRs} \\)&nbsp;are to be carried out in the \\( \\text{ALU}. \\) Two clock cycles are needed for memory read operation – the first one for loading address in the \\( \\text{MAR} \\) and the next one for loading data from the memory bus into the \\( \\text{MDR}. \\)</p>\n\n<p>The instruction \"call Rn, sub” is a two word instruction. Assuming that \\( \\text{PC} \\) is incremented during the fetch cycle of the first word of the instruction, its register transfer interpretation is</p>\n\n<p>\\( \\text{Rn} \\leftarrow&nbsp;\\text{PC} + 1 \\);</p>\n\n<p>\\( \\text{PC} \\leftarrow&nbsp;\\text{M[PC]} \\);</p>\n\n<p>The minimum number of <strong>CPU </strong>clock cycles needed during the execution cycle of this instruction is:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 80</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 5 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43568/gate-cse-2005-question-80\" target=\"_blank\">https://gateoverflow.in/43568/gate-cse-2005-question-80</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"39627\"></a><div itemprop=\"text\">Suppose the functions \\( F \\) and \\( G \\) can be computed in \\( 5 \\) and \\( 3 \\) nanoseconds by functional units \\( U_{F} \\) and \\( U_{G} \\), respectively. Given two instances of \\( U_{F} \\) and two instances of \\( U_{G} \\), it is required to implement the computation \\( F(G(X_{i})) \\) for \\( 1 \\leq i \\leq 10 \\). Ignoring all other delays, the minimum time required to complete this computation is ____________ nanoseconds.</div><br><br><b>GATE CSE 2016 Set 2 | Question: 30</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "28",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39627/gate-cse-2016-set-2-question-30\" target=\"_blank\">https://gateoverflow.in/39627/gate-cse-2016-set-2-question-30</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"333227\"></a><div itemprop=\"text\"><p>Consider the following data path diagram.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p style=\"text-align:center\"><img alt=\"\" width=\"700\" src=\"images/gateOverflow_pyq_images/co___architecture___data_path/4496932b48eebc89790f45f11864933f.png\"></p><p>Consider an instruction: \\( R0 \\leftarrow R1 +R2 \\). The following steps are used to execute it over the given data path. Assume that PC is incremented appropriately. The subscripts \\( r \\) and \\( w \\) indicate read and write operations, respectively.</p><ol><li>\\( R2_{r},\\text{ TEMP1}_{r},ALU_{\\text{add}}, \\text{ TEMP2}_{w} \\)</li><li>\\( R1_{r},\\text{ TEMP1}_{w} \\)</li><li>\\( PC_{r}, \\text{ MAR}_{w}, \\text{ MEM}_{r} \\)</li><li>\\( \\text{ TEMP2}_{r}, \\text{ R0}_{w} \\)</li><li>\\( \\text{ MDR}_{r}, \\text{ IR}_{w} \\)</li></ol><p>Which one of the following is the correct order of execution of the above steps?</p></div><br><br><b>GATE CSE 2020 | Question: 4</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2,1,4,5,3 \\)</p>",
            "<p>\\( 1,2,4,3,5 \\)</p>",
            "<p>\\( 3,5,2,1,4 \\)</p>",
            "<p>\\( 3,5,1,2,4 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3,5,2,1,4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333227/gate-cse-2020-question-4\" target=\"_blank\">https://gateoverflow.in/333227/gate-cse-2020-question-4</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"460063\"></a><div itemprop=\"text\"><p>A partial data path of a processor is given in the figure, where \\( \\text{RA, RB,} \\) and \\( \\text{RZ} \\) are \\( 32 \\)-bit registers. Which option(s) is/are CORRECT related to arithmetic operations using the data path as shown?</p><p style=\"text-align:center\"><img alt=\"\" width=\"800\" height=\"444\" src=\"images/gateOverflow_pyq_images/co___architecture___data_path/cc23b6544a45c315c79ae67df0c2edeb.png\"></p><p>&nbsp;</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 17</b></p>",
          "type": "multiple",
          "options": [
            "<p>The data path can implement arithmetic operations involving two registers.</p>",
            "<p>The data path can implement arithmetic operations involving one register and one immediate value.</p>",
            "<p>The data path can implement arithmetic operations involving two immediate values.</p>",
            "<p>The data path can only implement arithmetic operations involving one register and one immediate value.</p>"
          ],
          "correct_answer": [
            "<p>The data path can implement arithmetic operations involving two registers.</p>",
            "<p>The data path can implement arithmetic operations involving one register and one immediate value.</p>",
            "<p>The data path can implement arithmetic operations involving two immediate values.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460063/gate-cse-2025-set-1-question-17\" target=\"_blank\">https://gateoverflow.in/460063/gate-cse-2025-set-1-question-17</a></p>"
        }
      ]
    }
  ]
});
