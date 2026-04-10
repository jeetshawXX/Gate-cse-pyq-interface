window.__examLoadCallback({
  "title": "Operating System - Virtual Memory",
  "duration": 28,
  "sections": [
    {
      "name": "Virtual Memory",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1840\"></a><div itemprop=\"text\"><p>A CPU generates \\( 32 \\)-bit virtual addresses. The page size is \\( 4 \\) KB. The processor has a translation look-aside buffer (TLB) which can hold a total of \\( 128 \\) page table entries and is \\( 4 \\)-way set associative. The minimum size of the TLB tag is:</p>\n\n</div><br><br><b>Operating System: GATE CSE 2006 | Question: 62, ISRO2016</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{11 bits} \\)</p>",
            "<p>\\( \\text{13 bits} \\)</p>",
            "<p>\\( \\text{15 bits} \\)</p>",
            "<p>\\( \\text{20 bits} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{15 bits} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1840/gate-cse-2006-question-62-isro2016-50\" target=\"_blank\">https://gateoverflow.in/1840/gate-cse-2006-question-62-isro2016-50</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"49500\"></a><div itemprop=\"text\">\n<p>Virtual memory is</p>\n\n\n</div><br><br><b>Operating System: ISRO CSE 2007 | Question: 27</b></p>",
          "type": "single",
          "options": [
            "<p>Part of Main Memory only used for swapping</p>",
            "<p>A technique to allow a program, of size more than the size of main memory, to run</p>",
            "<p>Part of secondary storage used in program execution</p>",
            "<p>None of these</p>"
          ],
          "correct_answer": "<p>A technique to allow a program, of size more than the size of main memory, to run</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/49500/isro-cse-2007-question-27\" target=\"_blank\">https://gateoverflow.in/49500/isro-cse-2007-question-27</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"50005\"></a><div itemprop=\"text\">\n<p>Consider a logical address space of 8 pages of 1024 words mapped into memory of 32 frames. How many bits are there in the logical address?</p>\n\n\n</div><br><br><b>Operating System: ISRO CSE 2008 | Question: 65</b></p>",
          "type": "single",
          "options": [
            "<p>13 bits</p>",
            "<p>15 bits</p>",
            "<p>14 bits</p>",
            "<p>12 bits</p>"
          ],
          "correct_answer": "<p>13 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/50005/isro-cse-2008-question-65\" target=\"_blank\">https://gateoverflow.in/50005/isro-cse-2008-question-65</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"47001\"></a><div itemprop=\"text\">\n<p>If the page size in a 32-bit machine is 4K bytes then the size of page table is</p>\n\n\n</div><br><br><b>Operating System: ISRO CSE 2011 | Question: 24</b></p>",
          "type": "single",
          "options": [
            "<p>1 M bytes</p>",
            "<p>2 M bytes</p>",
            "<p>4 M bytes</p>",
            "<p>4 K bytes</p>"
          ],
          "correct_answer": "<p>4 M bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/47001/isro-cse-2011-question-24\" target=\"_blank\">https://gateoverflow.in/47001/isro-cse-2011-question-24</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"46107\"></a><div itemprop=\"text\">\n<p><span style=\"line-height: 1.6;\">Using the page table shown below, translate the physical address 25 to virtual address. The address length is 16 bits and page size is 2048 words while the size of the physical memory is four frames.</span></p>\n\n<div>&nbsp;</div>\n\n<div>Page &nbsp; &nbsp; &nbsp;Present (1-ln, 0-0ut) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Frame</div>\n\n<div>0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3</div>\n\n<div>1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2</div>\n\n<div>2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0</div>\n\n<div>3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;–</div>\n\n<div>&nbsp;</div>\n\n\n</div><br><br><b>Operating System: ISRO CSE 2014 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>25</p>",
            "<p>6169</p>",
            "<p>2073</p>",
            "<p>4121</p>"
          ],
          "correct_answer": "<p>4121</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/46107/isro-cse-2014-question-35\" target=\"_blank\">https://gateoverflow.in/46107/isro-cse-2014-question-35</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"54972\"></a><div itemprop=\"text\"><p>A computer has 16 pages of virtual address space but the size of main memory is only four frames. Initially the memory is empty. A program references the virtual pages in the order 0, 2, 4, 5, 2, 4, 3, 11, 2, 10. How many page faults occur if LRU page replacement algorithm is used?</p></div><br><br><b>Operating System: ISRO CSE 2014 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>3</p>",
            "<p>5</p>",
            "<p>7</p>",
            "<p>8</p>"
          ],
          "correct_answer": "<p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/54972/isro-cse-2014-question-44\" target=\"_blank\">https://gateoverflow.in/54972/isro-cse-2014-question-44</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"55089\"></a><div itemprop=\"text\"><p>Dirty bit is used to indicate which of the following?</p></div><br><br><b>Operating System: ISRO CSE 2014 | Question: 70</b></p>",
          "type": "single",
          "options": [
            "<p>A page fault has occurred</p>",
            "<p>A page has corrupted data</p>",
            "<p>A page has been modified after being loaded into cache</p>",
            "<p>An illegal access of page</p>"
          ],
          "correct_answer": "<p>A page has been modified after being loaded into cache</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/55089/isro-cse-2014-question-70\" target=\"_blank\">https://gateoverflow.in/55089/isro-cse-2014-question-70</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"52224\"></a><div itemprop=\"text\">\n<p>What is the size of the physical address space in a paging system which has a page table containing 64 entries of 11 bit each (including valid and invalid bit) and a page size of 512 bytes?</p>\n\n\n</div><br><br><b>Operating System: ISRO CSE 2014 | Question: 77</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2^{11} \\)</p>",
            "<p>\\( 2^{15} \\)</p>",
            "<p>\\( 2^{19} \\)</p>",
            "<p>\\( 2^{20} \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^{19} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52224/isro-cse-2014-question-77\" target=\"_blank\">https://gateoverflow.in/52224/isro-cse-2014-question-77</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"55475\"></a><div itemprop=\"text\">\n<p>Let the page fault service time be \\( 10 \\)&nbsp;ms in a computer with average memory access time being \\( 20 \\)&nbsp;ns. If one page fault is generated for every \\( 10^6 \\)&nbsp;memory accesses, what is the effective access time for the memory?</p>\n\n\n</div><br><br><b>Operating System: ISRO CSE 2016 | Question: 22</b></p>",
          "type": "single",
          "options": [
            "<p>21.4 ns</p>",
            "<p>29.9 ns</p>",
            "<p>23.5 ns</p>",
            "<p>35.1 ns</p>"
          ],
          "correct_answer": "<p>29.9 ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/55475/isro-cse-2016-question-22\" target=\"_blank\">https://gateoverflow.in/55475/isro-cse-2016-question-22</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"435338\"></a><div itemprop=\"text\"><p>State whether true or false:</p><ol type=\"i\"><li>Virtualization facilitates multiple OS simultaneously on the same hardware</li><li>In dual boot, multiple OS can run simultaneously</li></ol></div><br><br><b>Operating System: ISRO CSE 2023 | Question: 57</b></p>",
          "type": "single",
          "options": [
            "<p>(i) True (ii) False</p>",
            "<p>(i) False (ii) True</p>",
            "<p>(i) True (ii) True</p>",
            "<p>(i) False (ii) False</p>"
          ],
          "correct_answer": "<p>(i) True (ii) False</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/435338/isro-cse-2023-question-57\" target=\"_blank\">https://gateoverflow.in/435338/isro-cse-2023-question-57</a></p>"
        }
      ]
    }
  ]
});
