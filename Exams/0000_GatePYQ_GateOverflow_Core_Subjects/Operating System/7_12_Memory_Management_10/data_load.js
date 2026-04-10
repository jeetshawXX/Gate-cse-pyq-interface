window.__examLoadCallback({
  "title": "Operating System - Memory Management",
  "duration": 28,
  "sections": [
    {
      "name": "Memory Management",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"43582\"></a><div itemprop=\"text\">Let the page reference and the working set window be \\( c\\ c\\ d\\ b\\ c\\ e\\ c\\ e\\ a\\ d\\  \\) and \\( 4 \\), respectively. The initial working set at time \\( t=0 \\) contains the pages \\( \\{a,d,e\\} \\), where \\( a \\) was referenced at time \\( t=0 \\), \\( d \\) was referenced at time \\( t=-1 \\), and \\( e \\) was referenced at time \\( t=-2 \\). Determine the total number of page faults and the average number of page frames used by computing the working set at each reference.</div><br><br><b>GATE CSE 1992 | Question: 12-b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3.2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/43582/gate-cse-1992-question-12-b\" target=\"_blank\">https://gateoverflow.in/43582/gate-cse-1992-question-12-b</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2641\"></a><div itemprop=\"text\"><p>A computer installation has \\( 1000k \\) of main memory. The jobs arrive and finish in the following sequences.</p>\n\n<pre class=\"prettyprint lang-text\">    Job 1 requiring 200k arrives\n    Job 2 requiring 350k arrives\n    Job 3 requiring 300k arrives\n    Job 1 finishes\n    Job 4 requiring 120k arrives\n    Job 5 requiring 150k arrives\n    Job 6 requiring 80k arrives</pre>\n\n</div><br><br><b>GATE CSE 1995 | Question: 5</b></p>",
          "type": "numeric",
          "options": [
            "<p>Draw the memory allocation table using Best Fit and First Fit algorithms.</p>",
            "<p>Which algorithm performs better for this sequence?</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2641/gate-cse-1995-question-5\" target=\"_blank\">https://gateoverflow.in/2641/gate-cse-1995-question-5</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2747\"></a><div itemprop=\"text\"><p>A \\( 1000 \\) \\( \\text{Kbyte} \\) memory is managed using variable partitions but no compaction. It currently has two partitions of sizes \\( 200 \\) \\( \\text{Kbyte} \\) and \\( 260 \\) \\( \\text{Kbyte} \\) respectively. The smallest allocation request in \\( \\text{Kbyte} \\) that could be denied is for</p>\n\n</div><br><br><b>GATE CSE 1996 | Question: 2.18</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 151 \\)&nbsp;</p>",
            "<p>\\( 181 \\)</p>",
            "<p>\\( 231 \\)</p>",
            "<p>\\( 541 \\)</p>"
          ],
          "correct_answer": "<p>\\( 181 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2747/gate-cse-1996-question-2-18\" target=\"_blank\">https://gateoverflow.in/2747/gate-cse-1996-question-2-18</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1689\"></a><div itemprop=\"text\"><p>The overlay tree for a program is as shown below:</p>\n\n<p style=\"text-align:center\"><img alt=\"\" src=\"images/gateOverflow_pyq_images/operating_system___memory_management/ebe8e98fc1bfb7e87a1528bcee12be48.png\"></p>\n\n<p>What will be the size of the partition (in physical memory) required to load (and run) this program?</p>\n\n</div><br><br><b>GATE CSE 1998 | Question: 2.16</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{12 KB} \\)</p>",
            "<p>\\( \\text{14 KB} \\)</p>",
            "<p>\\( \\text{10 KB} \\)</p>",
            "<p>\\( \\text{8 KB} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{14 KB} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1689/gate-cse-1998-question-2-16\" target=\"_blank\">https://gateoverflow.in/1689/gate-cse-1998-question-2-16</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"2022\"></a><div itemprop=\"text\">Consider the main memory system that consists of \\( 8 \\) memory modules attached to the system bus, which is one word wide. When a write request is made, the bus is occupied for \\( 100 \\) nanoseconds (ns) by the data, address, and control signals. During the same \\( 100 \\) ns, and for \\( 500 \\) ns thereafter, the addressed memory module executes one cycle accepting and storing the data. The (internal) operation of different memory modules may overlap in time, but only one request can be on the bus at any time. The maximum number of stores (of one word each) that can be initiated in \\( 1 \\) millisecond is ________</div><br><br><b>GATE CSE 2014 Set 2 | Question: 55</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10000",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2022/gate-cse-2014-set-2-question-55\" target=\"_blank\">https://gateoverflow.in/2022/gate-cse-2014-set-2-question-55</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"8145\"></a><div itemprop=\"text\"><p>Consider \\( 6 \\) memory partitions of sizes \\( 200 \\) \\( \\text{KB} \\), \\( 400 \\) \\( \\text{KB} \\), \\( 600 \\) \\( \\text{KB} \\), \\( 500 \\) \\( \\text{KB} \\), \\( 300 \\) \\( \\text{KB} \\) and \\( 250 \\) \\( \\text{KB} \\), where \\( \\text{KB} \\)refers to \\( \\text{kilobyte} \\). These partitions need to be allotted to four processes of sizes \\( 357 \\) \\( \\text{KB} \\), \\( 210 \\) \\( \\text{KB} \\), \\( 468 \\) \\( \\text{KB} \\), \\( 491 \\) \\( \\text{KB} \\) in that order. If the best-fit algorithm is used, which partitions are NOT allotted to any process?</p></div><br><br><b>GATE CSE 2015 Set 2 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 200 \\) \\( \\text{KB} \\)&nbsp;and \\( 300 \\) \\( \\text{KB} \\)</p>",
            "<p>\\( 200 \\)&nbsp;\\( \\text{KB} \\) and \\( 250 \\) \\( \\text{KB} \\)</p>",
            "<p>\\( 250 \\) \\( \\text{KB} \\) and \\( 300 \\) \\( \\text{KB} \\)</p>",
            "<p>\\( 300 \\) \\( \\text{KB} \\) and \\( 400 \\) \\( \\text{KB} \\)</p>"
          ],
          "correct_answer": "<p>\\( 200 \\) \\( \\text{KB} \\)&nbsp;and \\( 300 \\) \\( \\text{KB} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8145/gate-cse-2015-set-2-question-30\" target=\"_blank\">https://gateoverflow.in/8145/gate-cse-2015-set-2-question-30</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"333220\"></a><div itemprop=\"text\"><p>Consider allocation of memory to a new process. Assume that none of the existing holes in the memory will exactly fit the process’s memory requirement. Hence, a new hole of smaller size will be created if allocation is made in any of the existing holes. Which one of the following statement is TRUE?</p>\n\n</div><br><br><b>GATE CSE 2020 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>The hole created by first fit is always larger than the&nbsp;hole created by next fit.</p>",
            "<p>The hole created by worst&nbsp;fit is always larger than the&nbsp;hole created by first&nbsp;fit.&nbsp;</p>",
            "<p>The hole created by best&nbsp;fit is never larger than the&nbsp;hole created by first&nbsp;fit.</p>",
            "<p>The hole created by next&nbsp;fit is never larger than the&nbsp;hole created by best fit.</p>"
          ],
          "correct_answer": "<p>The hole created by best&nbsp;fit is never larger than the&nbsp;hole created by first&nbsp;fit.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333220/gate-cse-2020-question-11\" target=\"_blank\">https://gateoverflow.in/333220/gate-cse-2020-question-11</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"371908\"></a><div itemprop=\"text\"><p>Which one of the following statements is \\( \\text{FALSE}? \\)</p>\n\n</div><br><br><b>GATE CSE 2022 | Question: 28</b></p>",
          "type": "single",
          "options": [
            "<p>The \\( \\text{TLB} \\) performs an associative search in parallel on all its valid entries using page number of incoming virtual address.</p>",
            "<p>If the virtual address of a word given by \\( \\text{CPU} \\) has a \\( \\text{TLB} \\) hit, but the subsequent search for the word results in a cache miss, then the word will always be present in the main memory.</p>",
            "<p>The memory access time using a given inverted page table is always same for all incoming virtual addresses.</p>",
            "<p>In a system that uses hashed page tables, if two distinct virtual addresses \\( \\text{V1} \\) and&nbsp;\\( \\text{V2} \\) map to the same value while hashing, then the memory access time of these addresses will not be the same.</p>"
          ],
          "correct_answer": "<p>The memory access time using a given inverted page table is always same for all incoming virtual addresses.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371908/gate-cse-2022-question-28\" target=\"_blank\">https://gateoverflow.in/371908/gate-cse-2022-question-28</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"3600\"></a><div itemprop=\"text\"><p>For each of the four processes \\( P_1, P_2, P_3, \\) and \\( P_4 \\). The total size in kilobytes \\( (KB) \\) and the number of segments are given below.\\[ \\small \\begin{array}{|c|c|c|}\\hline \\textbf{Process}&nbsp; &amp;&nbsp; \\textbf{Total size (in KB)} &amp; \\textbf{Number of segments}&nbsp; \\\\\\hline&nbsp; \\text{\\( P_1 \\)} &amp; \\text{195}&amp; \\text{4}\\\\\\hline&nbsp; \\text{\\( P_2 \\)} &amp; \\text{254} &amp; \\text{5}\\\\\\hline&nbsp; \\text{\\( P_3 \\)} &amp; \\text{45}&amp; \\text{3} \\\\\\hline \\text{\\( P_4 \\)} &amp; \\text{364}&amp; \\text{8} \\\\\\hline \\end{array} \\]The page size is \\( 1 \\) \\( \\text{KB} \\). The size of an entry in the page table is \\( 4 \\) \\( \\text{bytes} \\). The size of an entry in the segment table is \\( 8 \\) \\( \\text{bytes} \\). The maximum size of a segment is \\( 256 \\) \\( \\text{KB} \\). The paging method for memory management uses two-level paging, and its storage overhead is \\( P \\). The storage overhead for the segmentation method is \\( S \\). The storage overhead for the segmentation and paging method is \\( T \\). What is the relation among the overheads for the different methods of memory management in the concurrent execution of the above four processes?</p>\n\n</div><br><br><b>GATE IT 2006 | Question: 56</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{P &lt; S &lt; T} \\)</p>",
            "<p>\\( \\text{S &lt; P &lt; T} \\)</p>",
            "<p>\\( \\text{S &lt; T &lt; P} \\)</p>",
            "<p>\\( \\text{T &lt; S &lt; P} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{S &lt; P &lt; T} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3600/gate-it-2006-question-56\" target=\"_blank\">https://gateoverflow.in/3600/gate-it-2006-question-56</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"3444\"></a><div itemprop=\"text\"><p>Let a memory have four free blocks of sizes \\( 4k \\), \\( 8k \\), \\( 20k \\), \\( 2k \\). These blocks are allocated following the best-fit strategy. The allocation requests are stored in a queue as shown below.\\[ \\small \\begin{array}{|l|l|l|l|l|l|l|l|}\\hline \\textbf{Request No} &amp; \\text{J1} &amp; \\text{J2} &amp; \\text{J3} &amp; \\text{J4} &amp; \\text{J5} &amp; \\text{J6} &amp; \\text{J7} &amp; \\text{J8} &nbsp; \\\\ \\hline \\textbf{Request Sizes} &amp; \\text{2k}&amp; \\text{14k}&amp; \\text{3k}&amp; \\text{6k}&amp; \\text{6k}&amp; \\text{10k}&amp; \\text{7k}&amp; \\text{20k} \\\\\\hline \\textbf{Usage Time} &amp; \\text{4}&nbsp;&amp; \\text{10}&amp; \\text{2}&amp; \\text{8}&amp; \\text{4}&amp; \\text{1}&amp; \\text{8}&amp; \\text{6} \\\\ \\hline\\end{array} \\]The time at which the request for \\( J7 \\) will be completed will be</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 16 \\)</p>",
            "<p>\\( 19 \\)</p>",
            "<p>\\( 20 \\)</p>",
            "<p>\\( 37 \\)</p>"
          ],
          "correct_answer": "<p>\\( 19 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3444/gate-it-2007-question-11\" target=\"_blank\">https://gateoverflow.in/3444/gate-it-2007-question-11</a></p>"
        }
      ]
    }
  ]
});
