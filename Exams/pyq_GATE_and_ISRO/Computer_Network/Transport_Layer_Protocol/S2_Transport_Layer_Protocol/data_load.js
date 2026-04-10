window.__examLoadCallback({
  "title": "Transport_Layer_Protocol - Transport_Layer_Protocol - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Transport_Layer_Protocol",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following statements regarding the slow start phase of the TCP congestion control algorithm. Note that \\(cwnd\\) stands for the TCP congestion window and MSS denotes the Maximum Segment Size. <br><br> (i) The cwnd increases by 2 MSS on every successful acknowledgment. <br>\n(ii) The cwnd approximately doubles on every successful acknowledgement.  <br>\n(iii) The cwnd increases by 1 MSS every round trip time. <br>\n(iv) The cwnd approximately doubles every round trip time. <br><br>\nWhich one of the following is correct? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only (ii) and (iii) are true</p>",
            "<b>B.</b> <p>Only (i) and (iii) are true</p>",
            "<b>C.</b> <p>Only (iv) is true</p>",
            "<b>D.</b> <p>Only (i) and (iv) are true</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Only (iv) is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204088/gate2018-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Match the following: <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Transport_Layer_Protocol\\q13_4a5b162b.jpg\"> <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-III, Q-IV, R-II, S-I</p>",
            "<b>B.</b> <p>P-II, Q-I, R-IV, S-III</p>",
            "<b>C.</b> <p>P-IV, Q-I, R-II, S-III</p>",
            "<b>D.</b> <p>P-IV, Q-I, R-III, S-II</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P-IV, Q-I, R-II, S-III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204087/gate2018-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider socket API on a Linux machine that supports connected UDP sockets. A connected\nUDP socket is a UDP socket on which connect function has already been called. Which of the\nfollowing statements is/are CORRECT ?<br>\nI. A connected UDP socket can be used to communicate with multiple peers\nsimultaneously.<br>\nII. A process can successfully call connect function again for an already connected UDP\nsocket. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118209/gate2017-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider a TCP client and a TCP server running on two different machines. After completing\ndata transfer, the TCP client calls close to terminate the connectional and a FIN segment is\nsent to the TCP server. Server-side TCP responds by sending an ACK which is received by\nthe client-side TCP. As per the TCP connections state diagram (RFC 793), in which state does\nthe client-side TCP connection wait for the FIN from the sever-side TCP? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LAST-ACK</p>",
            "<b>B.</b> <p>TIME-WAIT</p>",
            "<b>C.</b> <p>FIN-WAIT-1</p>",
            "<b>D.</b> <p>FIN-WAIT-2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>FIN-WAIT-2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118194/gate2017-1-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>What is the maximum size of data that the application layer can pass on to the TCP layer below? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Any size</p>",
            "<b>B.</b> <p>\\(2^{16} \\text { bytes - size of TCP header }\\)</p>",
            "<b>C.</b> <p>\\(2^{16} \\text { bytes }\\)</p>",
            "<b>D.</b> <p>1500 bytes</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Any size</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/412/gate2008-14-isro2016-74\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>For a host machine that uses the token bucket algorithm for congestion control, the token bucket has a capacity of 1 megabyte and the maximum output rate is 20 megabytes per second. Tokens arrive at a rate to sustain output at a rate of 10megabytes per second. The  token bucket is currently full and the machine needs to send 12megabytes of data. The minimum time required to transmit the data is _____seconds. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39720/gate2016-1-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>An ACK number of 1000 in TCP always means that <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>999 bytes have been successfully received</p>",
            "<b>B.</b> <p>1000 bytes have been successfully received</p>",
            "<b>C.</b> <p>1001 bytes have been successfully received</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19790/isro2015-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following statements.<br>\nI. TCP connections are full duplex <br>\nII. TCP has no option for selective acknowledgement <br>\nIII. TCP connections are message streams <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only I is correct</p>",
            "<b>B.</b> <p>Only I and III are correct</p>",
            "<b>C.</b> <p>Only II and III are correct</p>",
            "<b>D.</b> <p>All of I, II and III are correct</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Only I is correct</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8425/gate2015-3-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Assume that the bandwidth for a TCP connection is 1048560 bits/sec. Let \\(\\alpha\\) be the value of RTT in milliseconds (rounded off to the nearest integer) after which the TCP window scale option is needed. Let \\(\\beta\\) be the maximum possible window size with window scale option. Then the values of \\(\\alpha\\) and \\(\\beta\\) are <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>63 milliseconds, 65535 x \\(2^{14}\\)</p>",
            "<b>B.</b> <p>63 milliseconds, 65535 x \\(2^{16}\\)</p>",
            "<b>C.</b> <p>500 milliseconds, 65535 x \\(2^{14}\\)</p>",
            "<b>D.</b> <p>500 milliseconds, 65535 x \\(2^{16}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>500 milliseconds, 65535 x \\(2^{14}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8154/gate2015-2-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Host A sends a UDP datagram containing 8880 bytes of user data to host B over an Ethernet LAN. Ethernet frames may carry data up to 1500 bytes (i.e. MTU=1500 bytes). Size of UDP header is 8 bytes and size of IP header is 20 bytes. There is no option field in IP header. How many total number of IP fragments will be transmitted and what will be the contents of offset field in the last fragment? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6 and 925</p>",
            "<b>B.</b> <p>6 and 7400</p>",
            "<b>C.</b> <p>7 and 1110</p>",
            "<b>D.</b> <p>7 and 8880</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7 and 1110</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8255/gate2015-2-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Suppose two hosts use a TCP connection to transfer a large file. Which of the following statements is/are FALSE with respect to the TCP connection?<br>\nI. If the sequence number of a segment is m, then the sequence number of the subsequent segment is always m+1.<br>\nII. If the estimated round trip time at any given point of time is t sec, the value of the retransmission timeout is always set to greater than or equal to t sec. <br>\nIII. The size of the advertised window never changes during the course of the TCP connection.<br>\nIV. The number of unacknowledged bytes at the sender is always less than or equal to the advertised window. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>III only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>I and IV only</p>",
            "<b>D.</b> <p>II and IV only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8217/gate2015-1-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which one of the following socket API functions converts an unconnected active TCP socket\ninto a passive socket? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>connect</p>",
            "<b>B.</b> <p>bind</p>",
            "<b>C.</b> <p>listen</p>",
            "<b>D.</b> <p>accept</p>"
          ],
          "correct_answer": "<b>C.</b> <p>listen</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1982/gate2014-2-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Let the size of congestion window of a TCP connection be 32 KB when a timeout occurs. The round trip time of the connection is 100 msec and the maximum segment size used is 2kB. The time taken (in msec) by the TCP connection to get back to 32KB congestion window is ______ <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1100",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1794/gate2014-1-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The protocol data unit for the transport layer in the internet stack is <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Segment</p>",
            "<b>B.</b> <p>Message</p>",
            "<b>C.</b> <p>Datagram</p>",
            "<b>D.</b> <p>Frame</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Segment</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44154/isro-2013-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which algorithm is used to shape the bursty traffic into a fixed rate traffic by averaging the data rate? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Solid bucket algorithm</p>",
            "<b>B.</b> <p>Spanning tree algorithm</p>",
            "<b>C.</b> <p>Hocken helm algorithm</p>",
            "<b>D.</b> <p>Leaky bucket algorithm</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Leaky bucket algorithm</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43985/isro-2013-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
