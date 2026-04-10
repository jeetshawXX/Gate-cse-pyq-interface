window.__examLoadCallback({
  "title": "Operating_System - System_Call",
  "duration": 72,
  "sections": [
    {
      "name": "System_Call",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following code snippet using the fork() and wait() system calls.\nAssume that the code compiles and runs correctly, and that the system calls run\nsuccessfully without any errors.<pre><code>\nint x = 3;\nwhile(x &gt; 0) {\nfork();\nprintf(\"hello\");\nwait(NULL);\nx--;\n}</code></pre>\nThe total number of times the printf statement is executed is ___ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422795/gate-cse-2024-set-1-question-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which one or more of the following options guarantee that a computer system will\ntransition from user mode to kernel mode? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Function Call</p>",
            "<b>B.</b> <p>malloc Call</p>",
            "<b>C.</b> <p>Page Fault</p>",
            "<b>D.</b> <p>System Call</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>Page Fault</p>",
            "<b>D.</b> <p>System Call</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399299/gate-cse-2023-question-13#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which of the following standard C library functions will always invoke a system call when executed from a single-threaded process in a UNIX/Linux operating system? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>exit</p>",
            "<b>B.</b> <p>malloc</p>",
            "<b>C.</b> <p>sleep</p>",
            "<b>D.</b> <p>strlen</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>exit</p>",
            "<b>C.</b> <p>sleep</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357438/gate-cse-2021-set-1-question-14#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The following C program is executed on a Unix / Linux system:<pre><code>#include &lt; unistd.h &gt;\n  int main() {\n    int i;\n    for (i = 0; i &lt; 10; i++)\n      if (i % 2 == 0) fork();\n    return 0;\n  }</code></pre>\nThe total number of child process created is __________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302831/gate2019-cs-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The difference between a named pipe and a regular file in Unix is that <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Unlike a regular file, named pipe is a special file</p>",
            "<b>B.</b> <p>The data in a pipe is transient, unlike the content of a regular file</p>",
            "<b>C.</b> <p>Pipes forbid random accessing, while regular files do allow this.</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213575/isro2018-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>The following C program:<br><pre><code> {\n    fork(); fork(); printf(\"yes\");\n    \n}</code></pre>If we execute this core segment, how many times the string yes will be printed? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only once</p>",
            "<b>B.</b> <p>2 times</p>",
            "<b>C.</b> <p>4 times</p>",
            "<b>D.</b> <p>8 times</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4 times</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213584/isro2018-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The Linux command<br><pre><code> mknod myfifo b 4 16</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>will create a character device if user is root</p>",
            "<b>B.</b> <p>will create a named pipe FIFO if user is root</p>",
            "<b>C.</b> <p>will create a block device if user is root</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>C.</b> <p>will create a block device if user is root</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128774/isro2017-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Wha is the output of the following program?<br><pre><code> main()\n{\n    int a = 10;\n    if(fork()) == 0))\n        a++;\n    printf(\"%d\\n\",a);  \n}</code></pre><br> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10 and 11</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>11</p>",
            "<b>D.</b> <p>11 and 11</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10 and 11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128699/isro2017-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following program.<br><pre><code> main()\n{\n    fork();\n    fork();\n    fork();\n}</code></pre>How many new processes will be created? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51698/isro2015-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Identify the correct order in which a server process must invoke the function calls accept, bind, listen, and recv according to UNIx socket API. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>listen, accept, bind, recv</p>",
            "<b>B.</b> <p>bind, listen, accept, recv</p>",
            "<b>C.</b> <p>bind, accept, listen, recv</p>",
            "<b>D.</b> <p>accept, listen, bind, recv</p>"
          ],
          "correct_answer": "<b>B.</b> <p>bind, listen, accept, recv</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8108/gate2015-2-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A process executes the code <br>\nfork(); <br>\nfork(); <br>\nfork(); <br>\nThe total number of child processes created is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/40/gate2012-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which of the following UNIX command allows scheduling a program to be executed at the specifies time? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>cron</p>",
            "<b>B.</b> <p>nice</p>",
            "<b>C.</b> <p>date and time</p>",
            "<b>D.</b> <p>schedule</p>"
          ],
          "correct_answer": "<b>A.</b> <p>cron</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52822/isro2011-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Fork is <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the creation of a new job</p>",
            "<b>B.</b> <p>the dispatching of a task</p>",
            "<b>C.</b> <p>increasing the priority of a task</p>",
            "<b>D.</b> <p>the creation of a new process</p>"
          ],
          "correct_answer": "<b>D.</b> <p>the creation of a new process</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50002/isro2008-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the execution of the following commands in a shell on a Linux operating system.<br><br>\nbash$ cat alpha<br>\nMathematics<br>\nbash$ In alpha beta<br>\nbash$ rm alpha<br>\nbash$ cat &gt;&gt; beta &lt;&lt; SAME<br>\nInformation Technology<br>\nSAME<br>\nbash$ cat beta<br><br>\nThe output of the last command will be: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Mathematics Information Technology SAME</p>",
            "<b>B.</b> <p>Mathematics Information Technology</p>",
            "<b>C.</b> <p>Information Technology</p>",
            "<b>D.</b> <p>Information Technology SAME</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Information Technology SAME</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "NOTE: This question is out of Syllabus Now.<a href=\"https://gateoverflow.in/3274/gate2008-it-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A process executes the following code<pre><code>for (i = 0; i &lt; n; i + +) fork( );</code></pre>The total number of child processes created is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n</p>",
            "<b>B.</b> <p>\\(2^{n}-1\\)</p>",
            "<b>C.</b> <p>\\(2^{n}\\)</p>",
            "<b>D.</b> <p>\\(2^{n+1}-1\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(2^{n}-1\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/489/gate2008-66#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>A client process P needs to make a TCP connection to a server process S. Consider the following situation: the server process S executes a socket(), a bind() and a listen() system call in that order, following which it is preempted. Subsequently, the client process P executes a socket() system call followed by connect() system call to connect to the server process S. The server process has not executed any accept() system call. Which one of the following events could take place? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>connect() system call returns successfully</p>",
            "<b>B.</b> <p>connect() system call blocks</p>",
            "<b>C.</b> <p>connect() system call returns an error</p>",
            "<b>D.</b> <p>connect() system call results in a core dump</p>"
          ],
          "correct_answer": "<b>C.</b> <p>connect() system call returns an error</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/482/gate2008-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Which of the following system calls results in the sending of SYN packets? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>socket</p>",
            "<b>B.</b> <p>bind</p>",
            "<b>C.</b> <p>listen</p>",
            "<b>D.</b> <p>connect</p>"
          ],
          "correct_answer": "<b>D.</b> <p>connect</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/415/gate2008-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>The contents of the text file t1 txt containing four lines are as follows :<br>\na1        b1<br>\na2        b2<br>\na3        b2<br>\na4        b1<br>\nThe contents of the text file t2 txt containing five lines are as follows :<br>\na1        c1<br>\na2        c2<br>\na3        c3<br>\na4        c3<br>\na5        c4<br>\nConsider the following Bourne shell script :<br><pre><code>awk - F '  '  ' {Print $1, $2} ' t1.txt |\nwhile read a b ; do\n            awk -v aV = $ a - v by = $b  - F ' '\n            aV = = $1 (print aV, bV, $2 ) ' t2.txt\ndone </code></pre> <br>Which one of the following strings will NOT be present in the output generated when the above script in run? (Note that the given strings may be substrings of a printed line.) <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\"b1 c1\"</p>",
            "<b>B.</b> <p>\"b2 c3\"</p>",
            "<b>C.</b> <p>\"b1 c2\"</p>",
            "<b>D.</b> <p>\"b1 c3\"</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\"b1 c2\"</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3501/gate2007-it-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>A user level process in Unix traps the signal sent on a Ctrl-C input, and has a signal handling routine that saves appropriate files before terminating the process. When a Ctrl-C input is given to this process, what is the mode in which the signal handling routine executes? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>User mode</p>",
            "<b>B.</b> <p>Kernel mode</p>",
            "<b>C.</b> <p>Superuser mode</p>",
            "<b>D.</b> <p>Privileged mode</p>"
          ],
          "correct_answer": "<b>A.</b> <p>User mode</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3764/gate2005-it-19-ugcnet-june2012-iii-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>The shell command<br><pre><code> find -name passwd -print</code></pre> <br>\nis executed in /etc directory of a computer system running Unix. Which of the following shell commands will give the same information as the above command when executed in the same directory? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ls passwd</p>",
            "<b>B.</b> <p>cat passwd</p>",
            "<b>C.</b> <p>grep name passwd</p>",
            "<b>D.</b> <p>grep print passwd</p>"
          ],
          "correct_answer": "<b>C.</b> <p>grep name passwd</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3763/gate2005-it-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>A student wishes to create symbolic links in a computer system running Unix. Three text files named \"file 1\", \"file 2\" and \"file 3\" exist in her current working directory, and the student has read and write permissions for all three files. Assume that file 1 contains information about her hobbies, file 2 contains information about her friends and file 3 contains information about her courses. The student executes the following sequence of commands from her current working directory. <br><pre><code> ln -s file 1 file 2\nln -s file 2 file 3</code></pre> <br>\nWhich of the following types of information would be lost from her file system?<br>\nI.Hobbies<br>\nII.Friends<br>\nIII.Courses<br> <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>II and III only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>I and III only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3762/gate2005-it-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Consider the following code fragment:<pre><code>  if (fork() == 0)\n  { a = a + 5; printf(\"%d,%dn\", a, &amp;a); }\n  else { a = a - 5; printf(\"%d, %dn\", a, &amp;a); }  </code></pre> Let u, v be the values printed by the parent process, and x, y be the values printed by the child process. Which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>u = x + 10 and v = y</p>",
            "<b>B.</b> <p>u = x + 10 and v != y</p>",
            "<b>C.</b> <p>u + 10 = x and v = y</p>",
            "<b>D.</b> <p>u + 10 = x and v != y</p>"
          ],
          "correct_answer": "<b>C.</b> <p>u + 10 = x and v = y</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/765/gate2005-72#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>A process executes the following segment of code :<br><pre><code> for(i = 1; i &lt;= n; i++)\n    fork ();</code></pre>\nThe number of new processes created is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n</p>",
            "<b>B.</b> <p>((n(n + 1))/2)</p>",
            "<b>C.</b> <p>\\(2^n - 1\\)</p>",
            "<b>D.</b> <p>\\(3^n - 1\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(2^n - 1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3707/gate2004-it-64\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Which of the following commands or sequences of commands will rename a file x to file y in a Unix system ?<br>\nI. mv y, x<br>\nII. mv x, y<br>\nIII. cp y, x (rm x)<br>\nIV. cp x, y (rm x)<br> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II and III</p>",
            "<b>B.</b> <p>II and IV</p>",
            "<b>C.</b> <p>I and III</p>",
            "<b>D.</b> <p>II only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II and IV</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3657/gate2004-it-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>System calls are usually invoked by using <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a software interrupt</p>",
            "<b>B.</b> <p>polling</p>",
            "<b>C.</b> <p>an indirect jump</p>",
            "<b>D.</b> <p>a privileged instruction</p>"
          ],
          "correct_answer": "<b>A.</b> <p>a software interrupt</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1464/gate1999-1-11-ugcnet-dec2015-ii-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>When an interrupt occurs, an operating system <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ignores the interrupt</p>",
            "<b>B.</b> <p>always changes state of interrupted process after processing the interrupt</p>",
            "<b>C.</b> <p>always resumes execution of interrupted process after processing the interrupt</p>",
            "<b>D.</b> <p>may change state of interrupted process to 'blocked' and schedule another process.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>may change state of interrupted process to 'blocked' and schedule another process.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2239/gate1997-3-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
