window.__examLoadCallback({
  "title": "C_Programming - Array_and_Pointer",
  "duration": 33,
  "sections": [
    {
      "name": "Array_and_Pointer",
      "questions": [
        {
          "id": 1,
          "question": "<p>Following declaration of an array of struct, assumes size of byte, short, int and long are 1,2,3 and 4 respectively. Alignment rule stipulates that n byte field must be located at an address divisible by n, the fields in the struct are not rearranged, padding is used to ensure alignment. All elements of array should be of same size.<br><pre><code> Struct complx\n       Short s\n       Byte b\n       Long l\n       Int i\nEnd Complx\nComplx C[10]</code></pre>Assuming C is located at an address divisble by 8, what is the total size of C, in bytes? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>150</p>",
            "<b>B.</b> <p>160</p>",
            "<b>C.</b> <p>200</p>",
            "<b>D.</b> <p>240</p>"
          ],
          "correct_answer": "<b>B.</b> <p>160</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "NOTE: This question is Excluded\nfor\nevaluation. <br><a href=\"https://gateoverflow.in/331318/isro2020-74\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>What is output of the following 'C' code assuming it runs on a byte addressed little endian machine?<br><pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    int x;\n    char *ptr;\n    x=622,100,101;\n    printf(\"%d\",(*(char *)&amp;x)*(x%3));\n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>622</p>",
            "<b>B.</b> <p>311</p>",
            "<b>C.</b> <p>22</p>",
            "<b>D.</b> <p>110</p>"
          ],
          "correct_answer": "<b>D.</b> <p>110</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331225/isro2020-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>What is the output of the code given below?<br><pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    char name[]=\"satellites\";\n    int len;\n    int size;\n    len= strlen(name);\n    size = sizeof(name);\n    printf(\"%d\",len*size);\n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100</p>",
            "<b>B.</b> <p>110</p>",
            "<b>C.</b> <p>40</p>",
            "<b>D.</b> <p>44</p>"
          ],
          "correct_answer": "<b>B.</b> <p>110</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331463/isro2020-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following declaration :<br><pre><code> structaddr {\n    char city[10];\n    char street[30];\n    int pin;\n};\nstruct {\n    char name[30];\n    int gender;\n    struct addr locate;\n} person, *kd = &amp;person;</code></pre>Then \\(^{\\star}(k d-&gt;\\text { name }+2)\\) can be used instead of: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>person.name+2</p>",
            "<b>B.</b> <p>\\(k d-&gt;(\\text { name }+2)\\)</p>",
            "<b>C.</b> <p>\\(*((* k d) . \\text { name }+2)\\)</p>",
            "<b>D.</b> <p>either (A) or(B), not (C)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(*((* k d) . \\text { name }+2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213586/isro2018-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following program<pre><code>{\n    int x=1;\n    printf(\"%d\",(*char(char*)&amp;x));\n} </code></pre>Assuming required header files are included and if the machine in which this program is executed is little endian, then the output will be <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>99999999</p>",
            "<b>C.</b> <p>1</p>",
            "<b>D.</b> <p>unpredictable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>unpredictable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213587/isro2018-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>We use malloc and calloc for: <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic memory allocation</p>",
            "<b>B.</b> <p>Static memory allocation</p>",
            "<b>C.</b> <p>Both dynamic memory allocation and static memory allocation</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Dynamic memory allocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128772/isro2017-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>What will be output of the following program? Assume that you are running this program in little-endian processor.<br><pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    short a=320;\n    char *ptr;\n    ptr=(char *)&amp;a;\n    printf(\"%d\",*ptr);\n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>320</p>",
            "<b>C.</b> <p>64</p>",
            "<b>D.</b> <p>Compilation error</p>"
          ],
          "correct_answer": "<b>C.</b> <p>64</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55481/isro2016-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>What is the output of this C  code?<br><pre><code> #include &lt; stdio.h &gt;\nvoid main()\n{\n    int k=5;\n    int *p=&amp;k;\n    int **m=&amp;p;\n    printf(\"%d %d %d\",k,*p,**m);\n    \n}</code></pre> <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5 5 5</p>",
            "<b>B.</b> <p>5 5 junk</p>",
            "<b>C.</b> <p>5 junk junk</p>",
            "<b>D.</b> <p>compile time error</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5 5 5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55468/isro2016-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following C declaration:<br><pre><code> struct ( \n    short x[5];  \n    union { \n        float y; \n        long z; \n    } u;\n )t;</code></pre>Assume that the objects of the type short, float and long occupy 2 bytes, 4 bytes and 8 bytes, respectively. The memory requirement for variable t, ignoring alignment consideration, is: <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>22  bytes</p>",
            "<b>B.</b> <p>14 bytes</p>",
            "<b>C.</b> <p>18 bytes</p>",
            "<b>D.</b> <p>10 bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>18 bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/640/gate2000-1-17-isro2015-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>The output of the following program is<br><pre><code> main()\n{\n    static int x[] = {1,2,3,4,5,6,7,8}\n    int i;\n    for (i=2; i&lt;6; ++i)\n    x[x[i]]=x[i];\n    for (i=0; i&lt;8; ++i)\n    printf(\"%d\", x[i]);\n}</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 2 3 3 5 5 7 8</p>",
            "<b>B.</b> <p>1 2 3 4 5 6 7 8</p>",
            "<b>C.</b> <p>8 7 6 5 4 3 2 1</p>",
            "<b>D.</b> <p>1 2 3 5 4 6 7 8</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1 2 3 3 5 5 7 8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52137/isro2015-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following declaration:<pre><code> int a, *b=&amp;a, **c=&amp;b;</code></pre>The following program fragment<pre><code> a=4;    **c=5;</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>does not change the value of a</p>",
            "<b>B.</b> <p>assigns address of c to a</p>",
            "<b>C.</b> <p>assigns the value of b to a</p>",
            "<b>D.</b> <p>assigns 5 to a</p>"
          ],
          "correct_answer": "<b>D.</b> <p>assigns 5 to a</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19444/isro2015-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which of the following is an illegal array definition? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Type COLONGE : (LIME, PINE, MUSK, MENTHOL); <br> var a : array [COLONGE] of REAL;</p>",
            "<b>B.</b> <p>var a : array [REAL] of REAL;</p>",
            "<b>C.</b> <p>var a : array ['A'..'Z'] of REAL;</p>",
            "<b>D.</b> <p>var a : array [BOOLEAN] of REAL;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>var a : array [REAL] of REAL;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18461/isro2008-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
