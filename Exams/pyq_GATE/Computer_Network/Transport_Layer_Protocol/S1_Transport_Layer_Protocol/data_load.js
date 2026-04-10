window.__examLoadCallback({
  "title": "Transport_Layer_Protocol - Transport_Layer_Protocol - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Transport_Layer_Protocol",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following statements:\n<br><br>\n(i) Address Resolution Protocol (ARP) provides a mapping from an IP address to the corresponding hardware (link-layer) address.\n<br>\n(ii) A single TCP segment from a sender S to a receiver R cannot carry both data from S to R and acknowledgement for a segment from R to S.\n<br><br>\nWhich ONE of the following is CORRECT? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both (i) and (ii) are TRUE</p>",
            "<b>B.</b> <p>(i) is TRUE and (ii) is FALSE</p>",
            "<b>C.</b> <p>(i) is FALSE and (ii) is TRUE</p>",
            "<b>D.</b> <p>Both (i) and (ii) are FALSE</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(i) is TRUE and (ii) is FALSE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460829/gate-cse-2025-set-2-question-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the 3-way handshaking protocol for TCP connection establishment. Let the three packets exchanged during the connection establishment be denoted as P1, P2, and P3, in order. Which of the following option(s) is/are TRUE with respect to TCP header flags that are set in the packets? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>P3: SYN = 1, ACK = 1</p>",
            "<b>B.</b> <p>P2: SYN = 1, ACK = 1</p>",
            "<b>C.</b> <p>P2: SYN = 0, ACK = 1</p>",
            "<b>D.</b> <p>P1: SYN = 1</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>P2: SYN = 1, ACK = 1</p>",
            "<b>D.</b> <p>P1: SYN = 1</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460068/gate-cse-2025-set-1-question-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a TCP connection operating at a point of time with the congestion window\nof size 12 MSS (Maximum Segment Size), when a timeout occurs due to packet\nloss. Assuming that all the segments transmitted in the next two RTTs (Round Trip\nTime) are acknowledged correctly, the congestion window size (in MSS) during the\nthird RTT will be _________ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422853/gate-cse-2024-set-2-question-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which of the following statements about IPv4 fragmentation is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The fragmentation of an IP datagram is performed only at the source of the datagram</p>",
            "<b>B.</b> <p>The fragmentation of an IP datagram is performed at any IP router which finds that the size of the datagram to be transmitted exceeds the MTU</p>",
            "<b>C.</b> <p>The reassembly of fragments is performed only at the destination of the datagram</p>",
            "<b>D.</b> <p>The reassembly of fragments is performed at all intermediate routers along the path from the source to the destination</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The fragmentation of an IP datagram is performed at any IP router which finds that the size of the datagram to be transmitted exceeds the MTU</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422879/gate-cse-2024-set-2-question-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>TCP client P successfully establishes a connection to TCP server \\(\\mathrm{Q} \\). Let \\(N_P \\) denote the sequence number in the SYN sent from \\(\\mathrm{P} \\) to \\(\\mathrm{Q} \\). Let \\(N_Q \\) denote the acknowledgement number in the SYN ACK from Q to P. Which of the following statements is/are CORRECT? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The sequence number \\(N_P \\) is chosen randomly by \\(\\mathrm{P} \\)</p>",
            "<b>B.</b> <p>The sequence number \\(N_P \\) is always 0 for a new connection</p>",
            "<b>C.</b> <p>The acknowledgement number \\(N_Q \\) is equal to \\(N_P \\)</p>",
            "<b>D.</b> <p>The acknowledgement number \\(N_Q \\) is equal to \\(N_P+1 \\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>The sequence number \\(N_P \\) is chosen randomly by \\(\\mathrm{P} \\)</p>",
            "<b>D.</b> <p>The acknowledgement number \\(N_Q \\) is equal to \\(N_P+1 \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422823/gate-cse-2024-set-1-question-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Suppose you are asked to design a new reliable byte-stream transport protocol\nlike TCP. This protocol, named myTCP, runs over a 100 Mbps network with Round\nTrip Time of 150 milliseconds and the maximum segment lifetime of 2 minutes.<br>\nWhich of the following is/are valid lengths of the Sequence Number field in the\nmyTCP header? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>30 bits</p>",
            "<b>B.</b> <p>32 bits</p>",
            "<b>C.</b> <p>34 bits</p>",
            "<b>D.</b> <p>36 bits</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>32 bits</p>",
            "<b>C.</b> <p>34 bits</p>",
            "<b>D.</b> <p>36 bits</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399271/gate-cse-2023-question-40#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the data transfer using TCP over a 1 Gbps link. Assuming that the maximum segment lifetime (MSL) is set to 60 seconds, the minimum number of bits required for the sequence number field of the TCP header, to prevent the sequence number space from wrapping around during the MSL is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "33",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371886/Gate-cse-2022-question-50#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the three-way handshake mechanism followed during TCP connection establishment between hosts P and Q. Let X and Y be two random 32-bit starting sequence numbers chosen by P and Q respectively. Suppose P sends a TCP connection request message to Q with a TCP segment having SYN bit =1, SEQ number =X, and ACK bit =0. Suppose Q accepts the connection request. Which one of the following choices represents the information present in the TCP segment header that is sent by Q to P? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SYN  bit =1, SEQ number =X+1, ACK bit =0, ACK number =Y, FIN bit =0</p>",
            "<b>B.</b> <p>SYN  bit =0, SEQ number =X+1, ACK bit =0, ACK number =Y, FIN bit =1</p>",
            "<b>C.</b> <p>SYN  bit =1, SEQ number =Y, ACK bit =1, ACK number =X+1, FIN bit =0</p>",
            "<b>D.</b> <p>SYN  bit =1, SEQ number =Y, ACK bit =1, ACK number =X, FIN bit =0</p>"
          ],
          "correct_answer": "<b>C.</b> <p>SYN  bit =1, SEQ number =Y, ACK bit =1, ACK number =X+1, FIN bit =0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357533/gate-cse-2021-set-2-question-7#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider two hosts P and Q connected through a router R. The maximum transfer unit (MTU) value of the link between P and R is 1500 bytes, and between R and Q is 820 bytes.\n<br>\nA TCP segment of size 1400 bytes was transferred from P to Q through R, with IP identification value as 0x1234. Assume that the IP header size is 20 bytes. Further, the packet is allowed to be fragmented, i.e., Don't Fragment (DF) flag in the IP header is not set by P.\n<br>\nWhich of the following statements is/are correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Two fragments are created at R and the IP datagram size carrying the second fragment is 620 bytes.</p>",
            "<b>B.</b> <p>If the second fragment is lost, R will resend the fragment with the IP identification value 0x1234.</p>",
            "<b>C.</b> <p>If the second fragment is lost, P is required to resend the whole TCP segment.</p>",
            "<b>D.</b> <p>TCP destination port can be determined by analysing only the second fragment.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Two fragments are created at R and the IP datagram size carrying the second fragment is 620 bytes.</p>",
            "<b>C.</b> <p>If the second fragment is lost, P is required to resend the whole TCP segment.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357406/gate-cse-2021-set-1-question-45#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A TCP server application is programmed to listen on port number P on host S. A TCP client is connected to the TCP server over the network.\n<br>\nConsider that while the TCP connection was active, the server machine S crashed and rebooted. Assume that the client does not use the TCP keepalive timer. Which of the following behaviors is/are possible? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>If the client was waiting to receive a packet, it may wait indefinitely.</p>",
            "<b>B.</b> <p>The TCP server application on S can listen on P after reboot.</p>",
            "<b>C.</b> <p>If the client sends a packet after the server reboot, it will receive a RST segment.</p>",
            "<b>D.</b> <p>If the client sends a packet after the server reboot, it will receive a FIN segment.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>If the client was waiting to receive a packet, it may wait indefinitely.</p>",
            "<b>B.</b> <p>The TCP server application on S can listen on P after reboot.</p>",
            "<b>C.</b> <p>If the client sends a packet after the server reboot, it will receive a RST segment.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357407/gate-cse-2021-set-1-question-44#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a TCP connection between a client and a server with the following specifications; the round trip time is 6 ms, the size of the receiver advertised window is 50 KB, slow-start threshold at the client is 32 KB, and the maximum segment size is 2 KB. The connection is established at time t=0. Assume that there are no timeouts and errors during transmission. Then the size of the congestion window (in KB) at time t+60 ms after all acknowledgements are processed is _______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "44",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333176/gate2020-cs-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a long-lived TCP session with an end-to-end bandwidth of 1 Gbps (= \\(10^{9} \\) bits-per-second). The session starts with a sequence number of 1234. The minimum time (in seconds, rounded to the closest integer) before this sequence number can be used again is _______. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "34",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204099/gate2018-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
