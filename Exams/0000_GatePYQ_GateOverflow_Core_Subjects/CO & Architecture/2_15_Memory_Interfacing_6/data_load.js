window.__examLoadCallback({
  "title": "CO & Architecture - Memory Interfacing",
  "duration": 17,
  "sections": [
    {
      "name": "Memory Interfacing",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"499\"></a><div itemprop=\"text\">In interleaved memory organization, consecutive words are stored in consecutive memory modules in _______ interleaving, whereas consecutive words are stored within the module in ________ interleaving.</div><br><br><b>GATE CSE 1991 | Question: 01,ii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/499/gate-cse-1991-question-01-ii\" target=\"_blank\">https://gateoverflow.in/499/gate-cse-1991-question-01-ii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1817\"></a><div itemprop=\"text\"><p>A CPU has a cache with block size \\( 64 \\) bytes. The main memory has \\( k \\) banks, each bank being \\( c \\) bytes wide. Consecutive \\( c \\) − byte chunks are mapped on consecutive banks with wrap-around. All the \\( k \\) banks can be accessed in parallel, but two accesses to the same bank must be serialized. A cache block access may involve multiple iterations of parallel bank accesses depending on the amount of data obtained by accessing all the \\( k \\) banks in parallel. Each iteration requires decoding the bank numbers to be accessed in parallel and this takes \\( \\frac{k}{2} ns \\).The latency of one bank access is \\( 80 \\) ns. If \\( c = &nbsp;2 \\) and \\( k = 24 \\), the latency of retrieving a cache block starting at address zero from main memory is:</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 41</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 92 \\) ns</p>",
            "<p>\\( 104 \\) ns</p>",
            "<p>\\( 172 \\) ns</p>",
            "<p>\\( 184 \\) ns</p>"
          ],
          "correct_answer": "<p>\\( 184 \\) ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1817/gate-cse-2006-question-41\" target=\"_blank\">https://gateoverflow.in/1817/gate-cse-2006-question-41</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"39632\"></a><div itemprop=\"text\">A processor can support a maximum memory of \\( 4\\;\\textsf{GB} \\), where the memory is word-addressable (a word consists of two bytes). The size of address bus of the processor is at least _________bits.</div><br><br><b>GATE CSE 2016 Set 1 | Question: 09</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39632/gate-cse-2016-set-1-question-09\" target=\"_blank\">https://gateoverflow.in/39632/gate-cse-2016-set-1-question-09</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"204097\"></a><div itemprop=\"text\">A \\( 32\\text{-bit} \\) wide main memory unit with a capacity of \\( 1\\;\\textsf{GB} \\) is built using \\( 256\\textsf{M} \\times 4\\text{-bit} \\) DRAM chips. The number of rows of memory cells in the DRAM chip is \\( 2^{14} \\). The time taken to perform one refresh operation is \\( 50\\;\\text{nanoseconds} \\). The refresh period is \\( 2\\;\\text{milliseconds.} \\) The percentage (rounded to the closest integer) of the time available for performing the memory read/write operations in the main memory unit is _________.</div><br><br><b>GATE CSE 2018 | Question: 23</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "59:60",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/204097/gate-cse-2018-question-23\" target=\"_blank\">https://gateoverflow.in/204097/gate-cse-2018-question-23</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"302846\"></a><div itemprop=\"text\"><p>The chip select logic for a certain DRAM chip in a memory system design is shown below. Assume that the memory system has \\( 16 \\) address lines denoted by \\( A_{15} \\) to \\( A_0 \\). What is the range of address (in hexadecimal) of the memory system that can get enabled by the chip select (CS) signal?</p><p><img alt=\"\" width=\"280\" src=\"images/gateOverflow_pyq_images/co___architecture___memory_interfacing/2cb6c0b687fabc5c50e12528aae72ba1.png\"></p></div><br><br><b>GATE CSE 2019 | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>C800 to CFFF</p>",
            "<p>CA00 to CAFF</p>",
            "<p>C800&nbsp;to C8FF</p>",
            "<p>DA00 to DFFF</p>"
          ],
          "correct_answer": "<p>C800 to CFFF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/302846/gate-cse-2019-question-2\" target=\"_blank\">https://gateoverflow.in/302846/gate-cse-2019-question-2</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"399279\"></a><div itemprop=\"text\"><p>A \\( 4 \\) kilobyte \\( \\text{(KB)} \\) byte-addressable memory is realized using four \\( 1 \\mathrm{~KB} \\) memory blocks. Two input address lines \\( \\text{(IA4 and IA3)} \\) are connected to the chip select \\( \\text{(CS)} \\) port of these memory blocks through a decoder as shown in the figure. The remaining ten input address lines from \\( \\text{IA11-IA0} \\) are connected to the address port of these blocks. The chip select \\( \\text{(CS)} \\) is active high.</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"265\" src=\"images/gateOverflow_pyq_images/co___architecture___memory_interfacing/46339b48a4a2d74023d0d7814df0ba51.png\" width=\"557\"></p>\n\n<p>The input memory addresses \\( \\text{(IA11-IA0)}, \\) in decimal, for the starting locations \\( \\text{(Addr&nbsp;= 0)} \\) of each block (indicated as \\( \\text{X1, X2, X3, X4} \\) in the figure) are among the options given below. Which one of the following options is&nbsp;\\( \\text{CORRECT}? \\)</p>\n\n</div><br><br><b>GATE CSE 2023 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (0,1,2,3) \\)</p>",
            "<p>\\( (0,1024,2048,3072) \\)</p>",
            "<p>\\( (0,8,16,24) \\)</p>",
            "<p>\\( (0,0,0,0) \\)</p>"
          ],
          "correct_answer": "<p>\\( (0,8,16,24) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399279/gate-cse-2023-question-32\" target=\"_blank\">https://gateoverflow.in/399279/gate-cse-2023-question-32</a></p>"
        }
      ]
    }
  ]
});
