window.__examLoadCallback({
  "title": "Computer Networks - TCP",
  "duration": 61,
  "sections": [
    {
      "name": "TCP",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1333\"></a><div itemprop=\"text\"><p>While opening a \\( TCP \\) connection, the initial sequence number is to be derived using a time-of-day (ToD) clock that keeps running even when the host is down. The low order \\( 32 \\) bits of the counter of the ToD clock is to be used for the initial sequence numbers. The clock counter increments once per milliseconds. The maximum packet lifetime is given to be \\( 64 \\)s.</p>\n\n<p>Which one of the choices given below is closest to the minimum permissible rate at which sequence numbers used for packets of a connection can increase?</p>\n\n</div><br><br><b>GATE CSE 2009 | Question: 47</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0.015 \\)/s</p>",
            "<p>\\( 0.064 \\)/s</p>",
            "<p>\\( 0.135 \\)/s</p>",
            "<p>\\( 0.327 \\)/s</p>"
          ],
          "correct_answer": "<p>\\( 0.015 \\)/s</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1333/gate-cse-2009-question-47\" target=\"_blank\">https://gateoverflow.in/1333/gate-cse-2009-question-47</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1605\"></a><div itemprop=\"text\"><p>Which of the following transport layer protocols is used to support electronic mail?</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 22</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{SMTP} \\)</p>",
            "<p>\\( \\textsf{IP} \\)</p>",
            "<p>\\( \\textsf{TCP} \\)</p>",
            "<p>\\( \\textsf{UDP} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{TCP} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1605/gate-cse-2012-question-22\" target=\"_blank\">https://gateoverflow.in/1605/gate-cse-2012-question-22</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"8217\"></a><div itemprop=\"text\"><p>Suppose two hosts use a TCP connection to transfer a large file. Which of the following statements is/are FALSE with respect to the TCP connection?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>If the sequence number of a segment is \\( m, \\) then the sequence number of the subsequent segment is always \\( m+1. \\)</li>\n\t<li>If the estimated round trip time at any given point of time is \\( t \\) sec, the value of the retransmission timeout is always set to greater than or equal to \\( t \\) sec.</li>\n\t<li>The size of the advertised window never changes during the course of the TCP connection.</li>\n\t<li>The number of unacknowledged bytes at the sender is always less than or equal to the advertised window.</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2015 Set 1 | Question: 1‏9</b></p>",
          "type": "single",
          "options": [
            "<p>III only</p>",
            "<p>I and III only</p>",
            "<p>I and IV only</p>",
            "<p>II and IV only</p>"
          ],
          "correct_answer": "<p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8217/gate-cse-2015-set-1-question-1-9\" target=\"_blank\">https://gateoverflow.in/8217/gate-cse-2015-set-1-question-1-9</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"8154\"></a><div itemprop=\"text\"><p>Assume that the bandwidth for a \\( \\text{TCP} \\) connection &nbsp;is \\( 1048560 \\) bits/sec. Let \\( \\alpha \\) be the value of RTT in milliseconds (rounded off to the nearest integer) after which the \\( \\text{TCP} \\) window scale option is needed. Let \\( \\beta \\) be the maximum possible window size with window scale option. Then the values of \\( \\alpha \\) and \\( \\beta \\) are&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2015 Set 2 | Question: 34</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 63 \\) milliseconds, \\( 65535 \\) \\( \\times  \\)2\\( ^{14} \\)</p>",
            "<p>\\( 63 \\) milliseconds, \\( 65535 \\) \\( \\times  \\)2\\( ^{16} \\)</p>",
            "<p>\\( 500 \\) milliseconds, \\( 65535 \\) \\( \\times  \\)2\\( ^{14} \\)</p>",
            "<p>\\( 500 \\) milliseconds, \\( 65535 \\) \\( \\times  \\)2\\( ^{16} \\)</p>"
          ],
          "correct_answer": "<p>\\( 500 \\) milliseconds, \\( 65535 \\) \\( \\times  \\)2\\( ^{14} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8154/gate-cse-2015-set-2-question-34\" target=\"_blank\">https://gateoverflow.in/8154/gate-cse-2015-set-2-question-34</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"8425\"></a><div itemprop=\"text\"><p>Consider the following statements.</p><ol style=\"list-style-type:upper-roman\"><li>TCP connections are full duplex</li><li>TCP has no option for selective acknowledgement</li><li>TCP connections are message streams</li></ol></div><br><br><b>GATE CSE 2015 Set 3 | Question: 22</b></p>",
          "type": "single",
          "options": [
            "<p>Only I is correct</p>",
            "<p>Only I and III are correct</p>",
            "<p>Only II and III are correct</p>",
            "<p>All of I, II and III are correct</p>"
          ],
          "correct_answer": "<p>Only I is correct</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8425/gate-cse-2015-set-3-question-22\" target=\"_blank\">https://gateoverflow.in/8425/gate-cse-2015-set-3-question-22</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"39572\"></a><div itemprop=\"text\"><p>Identify the correct sequence in which the following packets are transmitted on the network by a host when a browser requests a webpage from a remote server, assuming that the host has just been restarted.</p>\n\n\n\n</div><br><br><b>GATE CSE 2016 Set 2 | Question: 25</b></p>",
          "type": "single",
          "options": [
            "<p>HTTP GET request, DNS query, TCP SYN</p>",
            "<p>DNS query, HTTP GET request, TCP SYN</p>",
            "<p>DNS query, TCP SYN, HTTP GET request.</p>",
            "<p>TCP SYN, DNS query, HTTP GET request.</p>"
          ],
          "correct_answer": "<p>DNS query, TCP SYN, HTTP GET request.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39572/gate-cse-2016-set-2-question-25\" target=\"_blank\">https://gateoverflow.in/39572/gate-cse-2016-set-2-question-25</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"118194\"></a><div itemprop=\"text\"><p>Consider a TCP client and a TCP server running on two different machines. After completing data transfer, the TCP client calls close to terminate the connection and a FIN segment is sent to the TCP server. Server-side TCP responds by sending an ACK, which is received by the client-side TCP. As per the TCP connection state diagram \\( \\text{(RFC 793)} \\), in which state does the client-side TCP connection wait for the FIN from the server-side TCP?</p>\n\n</div><br><br><b>GATE CSE 2017 Set 1 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>LAST-ACK</p>",
            "<p>TIME-WAIT</p>",
            "<p>FIN-WAIT-\\( 1 \\)</p>",
            "<p>FIN-WAIT-\\( 2 \\)</p>"
          ],
          "correct_answer": "<p>FIN-WAIT-\\( 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118194/gate-cse-2017-set-1-question-14\" target=\"_blank\">https://gateoverflow.in/118194/gate-cse-2017-set-1-question-14</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"204099\"></a><div itemprop=\"text\">Consider a long-lived \\( \\text{TCP} \\) session with an end-to-end bandwidth of \\( 1\\; \\text{Gbps}\\; (=10^9 \\) bits-per-second\\( ). \\) The session starts with a sequence number of \\( 1234 \\). The minimum time (in seconds, rounded to the closet integer) before this sequence number can be used again is _________.</div><br><br><b>GATE CSE 2018 | Question: 25</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "34:35",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/204099/gate-cse-2018-question-25\" target=\"_blank\">https://gateoverflow.in/204099/gate-cse-2018-question-25</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"333176\"></a><div itemprop=\"text\">Consider a \\( \\textsf{TCP} \\) connection between a client and a server with the following specifications; the round trip time is \\( 6 \\) ms, the size of the receiver advertised window is \\( 50 \\) KB, slow-start threshold at the client is \\( 32 \\) KB, and the maximum segment size is \\( 2 \\) KB. The connection is established at time \\( t=0 \\). Assume that there are no timeouts and errors during transmission. Then the size of the congestion window (in \\( \\text{KB} \\)) at time \\( t+60 \\) ms after all acknowledgements are processed is _______</div><br><br><b>GATE CSE 2020 | Question: 55</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "44",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/333176/gate-cse-2020-question-55\" target=\"_blank\">https://gateoverflow.in/333176/gate-cse-2020-question-55</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"357407\"></a><div itemprop=\"text\"><p>A \\( \\text{TCP} \\) server application is programmed to listen on port number \\( P \\) on host \\( S \\). A \\( \\text{TCP} \\) client is connected to the \\( \\text{TCP} \\) server over the network.</p>\n\n<p>Consider that while the \\( \\text{TCP} \\) connection was active, the server machine \\( S \\) crashed and rebooted. Assume that the client does not use the \\( \\text{TCP} \\) keepalive&nbsp;timer. Which of the following behaviors is/are possible?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 44</b></p>",
          "type": "multiple",
          "options": [
            "<p>If the client was waiting to receive a packet, it may wait indefinitely</p>",
            "<p>The \\( \\text{TCP} \\) server application on \\( S \\) can listen on \\( P \\) after reboot</p>",
            "<p>If the client sends a packet after the server reboot, it will receive a \\( \\text{RST} \\) segment</p>",
            "<p>If the client sends a packet after the server reboot, it will receive a \\( \\text{FIN} \\) segment</p>"
          ],
          "correct_answer": [
            "<p>If the client was waiting to receive a packet, it may wait indefinitely</p>",
            "<p>The \\( \\text{TCP} \\) server application on \\( S \\) can listen on \\( P \\) after reboot</p>",
            "<p>If the client sends a packet after the server reboot, it will receive a \\( \\text{RST} \\) segment</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357407/gate-cse-2021-set-1-question-44\" target=\"_blank\">https://gateoverflow.in/357407/gate-cse-2021-set-1-question-44</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"357406\"></a><div itemprop=\"text\"><p>Consider two hosts \\( P \\) and \\( Q \\) connected through a router \\( R \\). The maximum transfer unit \\( \\text{(MTU)} \\) value of the link between \\( P \\) and \\( R \\) is \\( 1500 \\) bytes, and between \\( R \\) and \\( Q \\) is \\( 820 \\) bytes.</p>\n\n<p>A \\( \\text{TCP} \\) segment of size \\( 1400 \\) bytes was transferred from \\( P \\) to \\( Q \\) through \\( R \\), with \\( \\text{IP} \\) identification value as \\( \\textsf{0x1234}. \\)&nbsp;Assume that the \\( \\text{IP} \\) header size is \\( 20 \\) bytes. Further, the packet is allowed to be fragmented, i.e., \\( \\textsf{Don’t Fragment&nbsp;(DF)} \\) flag in the \\( \\text{IP} \\) header is \\( \\textit{not} \\) set by \\( P \\).</p>\n\n<p>Which of the following statements is/are correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 45</b></p>",
          "type": "multiple",
          "options": [
            "<p>Two fragments are created at \\( R \\) and the \\( \\text{IP} \\)&nbsp;datagram size carrying the second fragment is \\( 620 \\) bytes.</p>",
            "<p>If the second fragment is lost, \\( R \\) will resend the fragment with the \\( \\text{IP} \\) identification value \\( \\textsf{0x1234}. \\)</p>",
            "<p>If the second fragment is lost, \\( P \\) is required to resend the whole \\( \\text{TCP} \\) segment.</p>",
            "<p>\\( \\text{TCP} \\) destination port can be determined by analysing&nbsp;\\( \\textit{only} \\) the second fragment.</p>"
          ],
          "correct_answer": [
            "<p>Two fragments are created at \\( R \\) and the \\( \\text{IP} \\)&nbsp;datagram size carrying the second fragment is \\( 620 \\) bytes.</p>",
            "<p>If the second fragment is lost, \\( P \\) is required to resend the whole \\( \\text{TCP} \\) segment.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357406/gate-cse-2021-set-1-question-45\" target=\"_blank\">https://gateoverflow.in/357406/gate-cse-2021-set-1-question-45</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"357533\"></a><div itemprop=\"text\"><p>Consider the three-way handshake mechanism&nbsp;followed during \\( \\text{TCP} \\) connection establishment between hosts \\( P \\) and \\( Q \\). Let \\( X \\) and \\( Y \\) be two random \\( 32 \\)-bit starting sequence numbers chosen by \\( P \\) and \\( Q \\) respectively. Suppose \\( P \\) sends a \\( \\text{TCP} \\) connection request message to&nbsp;\\( Q \\) with a \\( \\text{TCP} \\) segment having \\( \\text{SYN} \\) bit \\( =1 \\), \\( \\text{SEQ} \\) number \\( =X \\), and \\( \\text{ACK} \\) bit \\( =0 \\). Suppose \\( Q \\) accepts the connection request. Which one of the following choices represents the information present in the \\( \\text{TCP} \\) segment header that is sent by \\( Q \\) to \\( P \\)?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 2 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{SYN} \\) bit \\( =1 \\), \\( \\text{SEQ} \\) number \\( =X+1 \\), \\( \\text{ACK} \\) bit \\( =0 \\), \\( \\text{ACK} \\) number \\( =Y \\), \\( \\text{FIN} \\) bit \\( =0 \\)</p>",
            "<p>\\( \\text{SYN} \\) bit \\( =0 \\), \\( \\text{SEQ} \\) number \\( =X+1 \\), \\( \\text{ACK} \\) bit \\( =0 \\), \\( \\text{ACK} \\) number \\( =Y \\), \\( \\text{FIN} \\) bit \\( =1 \\)</p>",
            "<p>\\( \\text{SYN} \\) bit \\( =1 \\), \\( \\text{SEQ} \\) number \\( =Y \\), \\( \\text{ACK} \\) bit \\( =1 \\), \\( \\text{ACK} \\) number \\( =X+1 \\), \\( \\text{FIN} \\) bit \\( =0 \\)</p>",
            "<p>\\( \\text{SYN} \\) bit \\( =1 \\), \\( \\text{SEQ} \\) number \\( =Y \\), \\( \\text{ACK} \\) bit \\( =1 \\), \\( \\text{ACK} \\) number \\( =X \\), \\( \\text{FIN} \\) bit \\( =0 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{SYN} \\) bit \\( =1 \\), \\( \\text{SEQ} \\) number \\( =Y \\), \\( \\text{ACK} \\) bit \\( =1 \\), \\( \\text{ACK} \\) number \\( =X+1 \\), \\( \\text{FIN} \\) bit \\( =0 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357533/gate-cse-2021-set-2-question-7\" target=\"_blank\">https://gateoverflow.in/357533/gate-cse-2021-set-2-question-7</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"371886\"></a><div itemprop=\"text\">Consider the data transfer using \\( \\text{TCP} \\) over a \\( 1 \\; \\text{Gbps} \\) link. Assuming that the maximum segment lifetime \\( \\text{(MSL)} \\) is set to \\( 60 \\; \\text{seconds}, \\) the minimum number of bits required for the sequence number field of the \\( \\text{TCP} \\) header, to prevent the sequence number space from wrapping around during the \\( \\text{MSL} \\) is ________________.</div><br><br><b>GATE CSE 2022 | Question: 50</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "33",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/371886/gate-cse-2022-question-50\" target=\"_blank\">https://gateoverflow.in/371886/gate-cse-2022-question-50</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"399271\"></a><div itemprop=\"text\"><p>Suppose you are asked to design a new reliable byte-stream transport protocol like \\( \\text{TCP}. \\) This protocol, named \\( \\textsf{myTCP} \\), runs over a \\( 100 \\mathrm{~Mbps} \\) network with Round Trip Time of \\( 150 \\) milliseconds and the maximum segment lifetime of \\( 2 \\) minutes.</p>\n\n<p>Which of the following is/are valid lengths of the <strong>Sequence Number</strong> field in the \\( \\textsf{myTCP} \\) header?</p>\n\n</div><br><br><b>GATE CSE 2023 | Question: 40</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( 30 \\) bits</p>",
            "<p>\\( 32 \\) bits</p>",
            "<p>\\( 34 \\) bits</p>",
            "<p>\\( 36 \\) bits</p>"
          ],
          "correct_answer": [
            "<p>\\( 32 \\) bits</p>",
            "<p>\\( 34 \\) bits</p>",
            "<p>\\( 36 \\) bits</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399271/gate-cse-2023-question-40\" target=\"_blank\">https://gateoverflow.in/399271/gate-cse-2023-question-40</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"422823\"></a><div itemprop=\"text\"><p>​\\( \\mathrm{TCP} \\) client \\( \\mathrm{P} \\) successfully establishes a connection to \\( \\text{TCP} \\) server \\( \\mathrm{Q} \\). Let \\( \\text{N}_{P} \\) denote the sequence number in the \\( \\text{SYN} \\) sent from \\( \\mathrm{P} \\) to \\( \\mathrm{Q} \\). Let \\( \\text{N}_{Q} \\) denote the acknowledgement number in the SYN ACK from \\( \\text{Q} \\) to \\( \\text{P} \\). Which of the following statements is/are CORRECT?</p></div><br><br><b>GATE CSE 2024 | Set 1 | Question: 19</b></p>",
          "type": "multiple",
          "options": [
            "<p>The sequence number \\( \\text{N}_{P} \\)&nbsp;is chosen randomly by \\( \\mathrm{P} \\)</p>",
            "<p>The sequence number \\( \\text{N}_{P} \\)&nbsp;is always \\( 0 \\) for a new connection</p>",
            "<p>The acknowledgement number \\( \\text{N}_{Q} \\) is equal to \\( \\text{N}_{P} \\)&nbsp;</p>",
            "<p>The acknowledgement number \\( \\text{N}_{Q} \\) is equal to \\( \\text{N}_{P}+1 \\)</p>"
          ],
          "correct_answer": [
            "<p>The sequence number \\( \\text{N}_{P} \\)&nbsp;is chosen randomly by \\( \\mathrm{P} \\)</p>",
            "<p>The acknowledgement number \\( \\text{N}_{Q} \\) is equal to \\( \\text{N}_{P}+1 \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422823/gate-cse-2024-set-1-question-19\" target=\"_blank\">https://gateoverflow.in/422823/gate-cse-2024-set-1-question-19</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"422853\"></a><div itemprop=\"text\"><p>Consider a \\( \\text{TCP} \\) connection operating at a point of time with the congestion window of size \\( 12 \\) \\( \\text{MSS} \\) (Maximum Segment Size), when a timeout occurs due to packet loss. Assuming that all the segments transmitted in the next two \\( \\text{RTTs} \\) (Round Trip Time) are acknowledged correctly, the congestion window size (<em>in \\( MSS \\)</em>) during the third \\( \\text{RTT} \\) will be __________.</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 44</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422853/gate-cse-2024-set-2-question-44\" target=\"_blank\">https://gateoverflow.in/422853/gate-cse-2024-set-2-question-44</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"460068\"></a><div itemprop=\"text\"><p>Consider the \\( 3 \\)-way handshaking protocol for TCP connection establishment. Let the three packets exchanged during the connection establishment be denoted as \\( \\text{P1, P2} \\), and \\( \\text{P3} \\), in order. Which of the following option(s) is/are TRUE with respect to TCP header flags that are set in the packets?</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 12</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( \\mathrm{P} 3: \\mathrm{SYN}=1, \\mathrm{ACK}=1 \\)</p>",
            "<p>\\( \\mathrm{P} 2: \\mathrm{SYN}=1, \\mathrm{ACK}=1 \\)</p>",
            "<p>\\( \\text{P2} \\): \\( \\mathrm{SYN}=0, \\mathrm{ACK}=1 \\)</p>",
            "<p>\\( \\text{P1: SYN = 1} \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( \\mathrm{P} 2: \\mathrm{SYN}=1, \\mathrm{ACK}=1 \\)</p>",
            "<p>\\( \\text{P1: SYN = 1} \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460068/gate-cse-2025-set-1-question-12\" target=\"_blank\">https://gateoverflow.in/460068/gate-cse-2025-set-1-question-12</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"3664\"></a><div itemprop=\"text\"><p>Which one of the following statements is FALSE?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 23</b></p>",
          "type": "single",
          "options": [
            "<p>TCP guarantees a minimum communication rate</p>",
            "<p>TCP ensures in-order delivery</p>",
            "<p>TCP reacts to congestion by reducing sender window size</p>",
            "<p>TCP employs retransmission to compensate for packet loss</p>"
          ],
          "correct_answer": "<p>TCP guarantees a minimum communication rate</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3664/gate-it-2004-question-23\" target=\"_blank\">https://gateoverflow.in/3664/gate-it-2004-question-23</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"3669\"></a><div itemprop=\"text\"><p>In TCP, a unique sequence number is assigned to each</p></div><br><br><b>GATE IT 2004 | Question: 28</b></p>",
          "type": "single",
          "options": [
            "<p>byte</p>",
            "<p>word</p>",
            "<p>segment</p>",
            "<p>message</p>"
          ],
          "correct_answer": "<p>byte</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3669/gate-it-2004-question-28\" target=\"_blank\">https://gateoverflow.in/3669/gate-it-2004-question-28</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"3446\"></a><div itemprop=\"text\"><p>Consider the following statements about the timeout value used in TCP.</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>The timeout value is set to the RTT (Round Trip Time) measured during TCP connection establishment for the entire duration of the connection.</li>\n\t<li>Appropriate RTT estimation algorithm is used to set the timeout value of a TCP connection.</li>\n\t<li>Timeout value is set to twice the propagation delay from the sender to the receiver.</li>\n</ol>\n\n<p>Which of the following choices hold?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (i) \\) is false, but \\( (ii) \\) and \\( (iii) \\) are true</p>",
            "<p>\\( (i) \\) and \\( (iii) \\)&nbsp;are false, but \\( (ii) \\) is true</p>",
            "<p>\\( (i) \\) and \\( (ii) \\)&nbsp;are false, but \\( (iii) \\) is true</p>",
            "<p>\\( (i), (ii) \\) and \\( (iii) \\) are false</p>"
          ],
          "correct_answer": "<p>\\( (i) \\) and \\( (iii) \\)&nbsp;are false, but \\( (ii) \\) is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3446/gate-it-2007-question-13\" target=\"_blank\">https://gateoverflow.in/3446/gate-it-2007-question-13</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"3447\"></a><div itemprop=\"text\"><p>Consider a \\( TCP \\) connection in a state where there are no outstanding \\( ACK \\)s. The sender sends two segments back to back. The sequence numbers of the first and second segments are \\( 230 \\) and \\( 290 \\) respectively. The first segment was lost, but the second segment was received correctly by the receiver. Let \\( X \\) be the amount of data carried in the first segment (in bytes), and \\( Y \\) be the \\( ACK \\) number sent by the receiver.<br>\nThe values of \\( X \\) and \\( Y \\) (in that order) are</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 60 \\) and \\( 290 \\)</p>",
            "<p>\\( 230 \\) and \\( 291 \\)</p>",
            "<p>\\( 60 \\) and \\( 231 \\)</p>",
            "<p>\\( 60 \\) and \\( 230 \\)</p>"
          ],
          "correct_answer": "<p>\\( 60 \\) and \\( 230 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3447/gate-it-2007-question-14\" target=\"_blank\">https://gateoverflow.in/3447/gate-it-2007-question-14</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"3383\"></a><div itemprop=\"text\"><p>The three way handshake for \\( \\text{TCP} \\) connection establishment is shown below.&nbsp;</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"352\" src=\"images/gateOverflow_pyq_images/computer_networks___tcp/559afa8566a33e21f420f6c7f03b6dfd.png\" width=\"390\"></p>\n\n<p>Which of the following statements are TRUE?</p>\n\n<p>\\( S1: \\)&nbsp; Loss of \\( \\text{SYN} + \\text{ACK} \\) from the server will not establish a connection</p>\n\n<p>\\( S2: \\)&nbsp; Loss of \\( \\text{ACK} \\) from the client cannot establish the connection</p>\n\n<p>\\( S3: \\)<strong>&nbsp;</strong>The server moves \\( \\text{LISTEN} \\to \\text{SYN_RCVD} \\to \\text{SYN_SENT} \\to \\text{ESTABLISHED} \\) in the state machine on no packet loss</p>\n\n<p>\\( S4: \\)<strong>&nbsp;</strong>The server moves \\( \\text{LISTEN} \\to \\text{SYN_RCVD} \\to \\text{ESTABLISHED} \\) in the state machine on no packet loss</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 69</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S2 \\) and \\( S3 \\) only</p>",
            "<p>\\( S1 \\) and \\( S4 \\) only</p>",
            "<p>\\( S1 \\) and \\( S3 \\) only</p>",
            "<p>\\( S2 \\) and \\( S4 \\) only</p>"
          ],
          "correct_answer": "<p>\\( S1 \\) and \\( S4 \\) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3383/gate-it-2008-question-69\" target=\"_blank\">https://gateoverflow.in/3383/gate-it-2008-question-69</a></p>"
        }
      ]
    }
  ]
});
