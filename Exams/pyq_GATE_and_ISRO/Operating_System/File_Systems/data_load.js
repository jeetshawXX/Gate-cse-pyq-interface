window.__examLoadCallback({
  "title": "Operating_System - File_Systems",
  "duration": 36,
  "sections": [
    {
      "name": "File_Systems",
      "questions": [
        {
          "id": 1,
          "question": "<p>A disk of size \\( 512M \\) bytes is divided into blocks of \\( 64K \\) bytes. A file is stored in the disk using linked allocation. Each data block reserves 4 bytes to store the pointer to the next data block. The link part of the last data block contains a NULL pointer (also of 4 bytes). Suppose a file of \\( 1M \\) bytes needs to be stored in the disk. Assume, \\( 1K=2^{10}, 1M=2^{20} \\). The amount of space in bytes that will be wasted due to internal fragmentation is _________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "65468",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460039/gate-cse-2025-set-1-question-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider two files systems A and B , that use contiguous allocation and linked allocation, respectively. A file of size 100 blocks is already stored in A and also in\nB. Now, consider inserting a new block in the middle of the file (between \\(50^{th}  \\text{ and }51^{st}\\) block), whose data is already available in the memory. Assume that there are enough free blocks at the end of the file and that the file control blocks are already in memory. Let the number of disk accesses required to insert a block in the middle of the file in   A   and     B   are \\(n_A\\) and \\(n_B\\),   respectively, then the value of  \\(n_A+n_B\\)  is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "153",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371883/Gate-cse-2022-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The index node (inode) of a Unix-like file system has 12 direct, one single-indirect and one double-indirect pointer The disk block size is 4 kB and the disk block addresses 32-bits long. The maximum possible file size is (rounded off to 1 decimal place) __________ GB. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302806/gate2019-cs-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>In a file allocation system, which of the following allocation schemes(s) can be used if no external fragmentation is allowed?<br>\nI. Contiguous <br>II. Linked <br>III. Indexed <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and III only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118437/gate2017-2-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A FAT (file allocation table) based file system is being used and the total overhead of each\nentry in the FAT is 4 bytes in size. Given a 100x\\(10^{6}\\) bytes disk on which the file system is\nstored and data block size is \\(10^{3}\\) bytes, the maximum size of a file that can be stored on this\ndisk in units of \\(10^{6}\\) bytes is _______. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "99.55",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1977/gate2014-2-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A file system with 300 GByte disk uses a file descriptor with 8 direct block addresses, 1 indirect\nblock address and 1 doubly indirect block address. The size of each disk block is 128 Bytes and the\nsize of each disk block address is 8 Bytes. The maximum possible file size in this file system is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 KBytes</p>",
            "<b>B.</b> <p>35 KBytes</p>",
            "<b>C.</b> <p>280 KBytes</p>",
            "<b>D.</b> <p>dependent on the size of the disk</p>"
          ],
          "correct_answer": "<b>B.</b> <p>35 KBytes</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2149/gate2012-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Using a larger block size in a fixed block size file system leads to <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>better disk throughput but poorer disk space utilization</p>",
            "<b>B.</b> <p>better disk throughput and better disk space utilization</p>",
            "<b>C.</b> <p>poorer disk throughput but better disk space utilization</p>",
            "<b>D.</b> <p>poorer disk throughput and poorer disk space utilization</p>"
          ],
          "correct_answer": "<b>A.</b> <p>better disk throughput but poorer disk space utilization</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/915/gate2003-25-isro2009-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The data blocks of a very large file in the Unix file system are allocated using <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>contiguous allocation</p>",
            "<b>B.</b> <p>linked allocation</p>",
            "<b>C.</b> <p>indexed allocation</p>",
            "<b>D.</b> <p>an extension of indexed allocation</p>"
          ],
          "correct_answer": "<b>D.</b> <p>an extension of indexed allocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/418/gate2008-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>In a particular Unix OS, each data block is of size 1024 bytes, each node has 10 direct data block addresses and three additional addresses: one for single indirect block, one for double indirect block and one for triple indirect block. Also, each block can contain addresses for 128 blocks. Which one of the following is approximately the maximum size of a file in the file system? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>512 MB</p>",
            "<b>B.</b> <p>2 GB</p>",
            "<b>C.</b> <p>8 GB</p>",
            "<b>D.</b> <p>16 GB</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2 GB</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3710/gate2004-it-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A unix-style I-node has 10 direct pointers and one single, one double and one triple indirect pointers.\nDisk block size is 1 Kbyte, disk block address is 32 bits, and 48-bit integers are used. What is the\nmaximum possible file size? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{24}\\)bytes</p>",
            "<b>B.</b> <p>\\(2^{32}\\)bytes</p>",
            "<b>C.</b> <p>\\(2^{34}\\)bytes</p>",
            "<b>D.</b> <p>\\(2^{48}\\)bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(2^{34}\\)bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1045/gate2004-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>I/O redirection <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>implies changing the name of a file</p>",
            "<b>B.</b> <p>can be employed to use an existing file as input file for a program</p>",
            "<b>C.</b> <p>implies connecting 2 programs through a pipe</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>can be employed to use an existing file as input file for a program</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2238/gate1997-3-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The root directory of a disk should be placed <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>at a fixed address in main memory</p>",
            "<b>B.</b> <p>at a fixed location on the disk</p>",
            "<b>C.</b> <p>anywhere on the disk</p>",
            "<b>D.</b> <p>at a fixed location on the system disk</p>",
            "<b>E.</b> <p>anywhere on the system disk</p>"
          ],
          "correct_answer": "<b>B.</b> <p>at a fixed location on the disk</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2296/gate1993-7-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which of the following requires a device driver ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Register</p>",
            "<b>B.</b> <p>Cache</p>",
            "<b>C.</b> <p>Main memory</p>",
            "<b>D.</b> <p>Disk</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Disk</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/715/gate2001-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
