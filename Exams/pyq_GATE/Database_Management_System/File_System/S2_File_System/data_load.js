window.__examLoadCallback({
  "title": "File_System - File_System - Slot 2",
  "duration": 30,
  "sections": [
    {
      "name": "File_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>A database table \\(T_1\\) has 2000 records and occupies 80 disk blocks. Another table \\(T_2\\) has 400 records and occupies 20 disk blocks. These two tables have to be joined as per a specified join condition that needs to be evaluated for every pair of records from these two tables. The memory buffer space available can hold exactly one block of records for \\(T_1\\) and one block of records for \\(T_2\\) simultaneously at any point in time. No index is available on either table.<br>If, instead of Nested-loop join, Block nested-loop join is used, again with the most appropriate choice of table in the outer loop, the reduction in number of block accesses required for reading the data will be <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>30400</p>",
            "<b>C.</b> <p>38400</p>",
            "<b>D.</b> <p>798400</p>"
          ],
          "correct_answer": "<b>B.</b> <p>30400</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3848/gate2005-it-82b\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A database table \\(T_1\\) has 2000 records and occupies 80 disk blocks. Another table \\(T_2\\) has 400 records and occupies 20 disk blocks. These two tables have to be joined as per a specified join condition that needs to be evaluated for every pair of records from these two tables. The memory buffer space available can hold exactly one block of records for \\(T_1\\) and one block of records for \\(T_2\\) simultaneously at any point in time. No index is available on either table.<br>If Nested-loop join algorithm is employed to perform the join, with the most appropriate choice of table to be used in outer loop, the number of block accesses required for reading the data are <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>800000</p>",
            "<b>B.</b> <p>40080</p>",
            "<b>C.</b> <p>32020</p>",
            "<b>D.</b> <p>100</p>"
          ],
          "correct_answer": "<b>C.</b> <p>32020</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3847/gate2005-it-82a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>In a computer system, four files of size 11050 bytes, 4990 bytes, 5170 bytes and 12640 bytes need to be stored. For storing these files on disk, we can use either 100 byte disk blocks or 200 byte disk blocks (but can't mix block sizes). For each block used to store a file, 4 bytes of bookkeeping information also needs to be stored on the disk. Thus, the total space used to store a file is the sum of the space taken to store the file and the space taken to store the book keeping information for the blocks allocated for storing the file. A disk block can store either bookkeeping information for a file or data from a file, but not both.\nWhat is the total space required for storing the files using 100 byte disk blocks and 200 byte disk blocks respectively? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>35400 and 35800 bytes</p>",
            "<b>B.</b> <p>35800 and 35400 bytes</p>",
            "<b>C.</b> <p>35600 and 35400 bytes</p>",
            "<b>D.</b> <p>35400 and 35600 bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>35600 and 35400 bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3824/gate2005-it-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3768/gate2005-it-23-isro2017-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which one of the following is a key factor for preferring \\(B^{+}\\) - trees to binary search trees for indexing database relations? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Database relations have a large number of records</p>",
            "<b>B.</b> <p>Database relations are sorted on the primary key</p>",
            "<b>C.</b> <p>\\(B^{+}\\) - trees require less memory than binary search trees</p>",
            "<b>D.</b> <p>Data transfer form disks is in blocks</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Data transfer form disks is in blocks</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1364/gate2005-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a table T in a relational database with a key field K. A B-tree of order p is used as an access structure on K, where p denotes the maximum number of tree pointers in a B-tree index node. Assume that K is 10 bytes long; disk block size is 512 bytes; each data pointer \\(P_D\\) is 8 bytes long and each block pointer \\(P_B\\) is 5 bytes long. In order for each B-tree node to fit in a single disk block, the maximum value of p is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20</p>",
            "<b>B.</b> <p>22</p>",
            "<b>C.</b> <p>23</p>",
            "<b>D.</b> <p>32</p>"
          ],
          "correct_answer": "<b>C.</b> <p>23</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3723/gate2004-it-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The order of an internal node in a B+ tree index is the maximum number of children it can have.\nSuppose that a child pointer takes 6 bytes, the search field value takes 14 bytes, and the block size is\n512 bytes. What is the order of the internal node? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>24</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>26</p>",
            "<b>D.</b> <p>27</p>"
          ],
          "correct_answer": "<b>C.</b> <p>26</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1048/gate2004-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A B+-tree index is to be built on the Name attribute of the relation STUDENT. Assume that all student names are of length 8 bytes, disk blocks are of size 512\nbytes, and index pointers are of size 4 bytes. Given this scenario, what would be\nthe best choice of the degree (i.e. the number of pointers per node) of the B+-tree <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>42</p>",
            "<b>C.</b> <p>43</p>",
            "<b>D.</b> <p>44</p>"
          ],
          "correct_answer": "<b>C.</b> <p>43</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/853/gate2002-2-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>In the index allocation scheme of blocks to a file, the maximum possible size of\nthe file depends on <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The size of the blocks, and the size of the address of the blocks</p>",
            "<b>B.</b> <p>The number of blocks used for the index, and the size of the blocks.</p>",
            "<b>C.</b> <p>The size of the blocks, the number of blocks used for the index, and the size\nof the address of the blocks.</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The size of the blocks, the number of blocks used for the index, and the size\nof the address of the blocks.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/852/gate2002-2-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>\\(B^{+}\\)-trees are preferred to binary trees in databases because <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Disk capacities are greater than memory capacities</p>",
            "<b>B.</b> <p>Disk access is much slower than memory access</p>",
            "<b>C.</b> <p>Disk data transfer rates are much less than memory data transfer rates</p>",
            "<b>D.</b> <p>Disks are more reliable than memory</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Disk access is much slower than memory access</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/646/gate2000-1-22-ugcnet-june2012-ii-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>There are five records in a database.<br>\n\\(\\begin{array}{|c|c|c|c|} \\hline \\textbf {Name} &amp; \\textbf {Age} &amp; \\textbf {Occupation} &amp; \\textbf{Category } \\\\\\hline \\text{Rama} &amp; \\text{27} &amp; \\text{CON} &amp; \\text{A} \\\\\\hline \\text{Abdul} &amp; \\text{22} &amp; \\text{ENG} &amp; \\text{A} \\\\\\hline \\text{Jennifer} &amp; \\text{28} &amp; \\text{DOC} &amp; \\text{B} \\\\\\hline \\text{Maya} &amp; \\text{32} &amp; \\text{SER} &amp; \\text{D} \\\\\\hline \\text{Dev} &amp; \\text{24} &amp; \\text{MUS} &amp; \\text{C} \\\\\\hline \\end{array}\\)<br>There is an index file associated with this and it contains the values 1, 3, 2, 5 and 4. Which one of the fields is the index built from? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Age</p>",
            "<b>B.</b> <p>Name</p>",
            "<b>C.</b> <p>Occupation</p>",
            "<b>D.</b> <p>Category</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Occupation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1672/gate1998-1-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
