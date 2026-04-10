window.__examLoadCallback({
  "title": "Data_Link_Layer - Data_Link_Layer - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Data_Link_Layer",
      "questions": [
        {
          "id": 1,
          "question": "<p>Suppose we are transmitting frames between two nodes using the Stop-and-Wait protocol. The frame size is 3000 bits. The transmission rate of the channel is 2000 bps (bits/second) and the propagation delay between the two nodes is 100 milliseconds. Assume that the processing times at the source and destination are negligible. Also, assume that the size of the acknowledgment packet is negligible.\nWhich ONE of the following most accurately gives the channel utilization for the above scenario in percentage? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>88.23</p>",
            "<b>B.</b> <p>93.75</p>",
            "<b>C.</b> <p>85.44</p>",
            "<b>D.</b> <p>66.67</p>"
          ],
          "correct_answer": "<b>A.</b> <p>88.23</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460809/gate-cse-2025-set-2-question-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider an Ethernet segment with a transmission speed of \\(10^8\\) bits/sec and a\nmaximum segment length of 500 meters. If the speed of propagation of the signal\nin the medium is \\(2 \\times 10^8\\) meters/sec, then the minimum frame size (in bits) required\nfor collision detection is _________ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "500",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422852/gate-cse-2024-set-2-question-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a network path \\(\\mathrm{P}-\\mathrm{Q}-\\mathrm{R} \\) between nodes \\(\\mathrm{P} \\) and \\(\\mathrm{R} \\) via router \\(\\mathrm{Q} \\). Node \\(\\mathrm{P} \\) sends a file of size \\(10^6 \\) bytes to \\(R \\) via this path by splitting the file into chunks of \\(10^3 \\) bytes each. Node \\(P \\) sends these chunks one after the other without any wait time between the successive chunk transmissions. Assume that the size of extra headers added to these chunks is negligible, and that the chunk size is less than the MTU.\n<br>\nEach of the links \\(\\mathrm{P}-\\mathrm{Q} \\) and \\(\\mathrm{Q}-\\mathrm{R} \\) has a bandwidth of \\(10^6 \\mathrm{bits} / \\mathrm{sec} \\), and negligible propagation latency. Router \\(Q \\) immediately transmits every packet it receives from \\(P \\) to \\(R \\), with negligible processing and queueing delays. Router \\(Q \\) can simultaneously receive on link \\(P-Q \\) and transmit on \\(\\operatorname{link} Q-R \\).\n<br>\nAssume P starts transmitting the chunks at time \\(t=0 \\).\nWhich one of the following options gives the time (in seconds, rounded off to 3 decimal places) at which \\(\\mathrm{R} \\) receives all the chunks of the file? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>8.008</p>",
            "<b>C.</b> <p>15.992</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8.008</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422816/gate-cse-2024-set-1-question-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Suppose two hosts are connected by a point-to-point link and they are configured\nto use Stop-and-Wait protocol for reliable data transfer. Identify in which one of\nthe following scenarios, the utilization of the link is the lowest. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Longer link length and lower transmission rate</p>",
            "<b>B.</b> <p>Longer link length and higher transmission rate</p>",
            "<b>C.</b> <p>Shorter link length and lower transmission rate</p>",
            "<b>D.</b> <p>Shorter link length and higher transmission rate</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Longer link length and higher transmission rate</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399305/gate-cse-2023-question-7#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider a 100 Mbps link between an earth station (sender) and a satellite (receiver) at an altitude of 2100 km. The signal propagates at a speed of \\(3  \\times 10^8\\) m/s. The time taken (in milliseconds, rounded off to two decimal places) for the receiver to completely receive a packet of 1000 bytes transmitted by the sender is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7.07",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371887/Gate-cse-2022-question-49#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a network using the pure ALOHA medium access control protocol, where each frame is of length 1,000 bits. The channel transmission rate is 1 Mbps (=\\(10^6\\) bits per second). The aggregate number of transmissions across all the nodes (including new frame transmissions and retransmitted frames due to collisions) is modelled as a Poisson process with a rate of 1,000 frames per second. Throughput is defined as the average number of frames successfully transmitted per second. The throughput of the network (rounded to the nearest integer) is ______________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "130",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357483/gate-cse-2021-set-2-question-54#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the cyclic redundancy check (CRC) based error detecting scheme having the generator polynomial \\(X^3+X+1\\). Suppose the message \\(m_4m_3m_2m_1m_0=11000\\) is to be transmitted. Check bits \\(c_2c_1c_0\\) are appended at the end of the message by the transmitter using the above CRC scheme. The transmitted bit string is denoted by \\(m_4m_3m_2m_1m_0c_2c_1c_0\\). The value of the checkbit sequence \\(c_2c_1c_0\\) is <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>101</p>",
            "<b>B.</b> <p>110</p>",
            "<b>C.</b> <p>100</p>",
            "<b>D.</b> <p>111</p>"
          ],
          "correct_answer": "<b>C.</b> <p>100</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357506/gate-cse-2021-set-2-question-34#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the sliding window flow-control protocol operating between a sender and a receiver over a full-duplex error-free link. Assume the following:<br><br>The time taken for processing the data frame by the receiver is negligible.<br>\nThe time taken for processing the acknowledgement frame by the sender is negligible.<br>\nThe sender has infinite number of frames available for transmission.<br>\nThe size of the data frame is 2,000 bits and the size of the acknowledgement frame is 10 bits.<br>\nThe link data rate in each direction is 1 Mbps (\\(= 10^6\\) bits per second).<br>\nOne way propagation delay of the link is 100 milliseconds.<br><br>\nThe minimum value of the sender's window size in terms of the number of frames, (rounded to the nearest  integer)  needed  to achieve a link utilization of 50% is _____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357402/gate-cse-2021-set-1-question-49#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Assume that a 12-bit Hamming codeword consisting of 8-bit data and 4 check bits is \\(d_8d_7d_6d_5c_8d_4d_4d_3d_2c_4d_1c_2c_1\\), where the data bits and the check bits are given in the following tables:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Data_Link_Layer\\q29_b9ace977.jpg\"><br>\nWhich one of the following choices gives the correct values of x and y? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x is 0 and y is 0</p>",
            "<b>B.</b> <p>x is 0 and y is 1</p>",
            "<b>C.</b> <p>x is 1 and y is 0</p>",
            "<b>D.</b> <p>x is 1 and y is 1</p>"
          ],
          "correct_answer": "<b>A.</b> <p>x is 0 and y is 0</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357422/gate-cse-2021-set-1-question-29#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following two statements.\n<br><br>\nS1: Destination MAC address of an ARP reply is a broadcast address.<br>\nS2: Destination MAC address of an ARP request is a broadcast address.<br><br>\nWhich one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are true</p>",
            "<b>B.</b> <p>S1 is true and S2 is false</p>",
            "<b>C.</b> <p>S1 is false and S2 is true</p>",
            "<b>D.</b> <p>Both S1 and S2 are false</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S1 is false and S2 is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357444/gate-cse-2021-set-1-question-8#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider that 15 machines need to be connected in a LAN using 8-port Ethernet switches. Assume that these switches do not have any separate up link ports. The minimum number of switches needed is ___________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302799/gate2019-cs-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Suppose that in an IP-over-Ethernet network, a machine X wishes to find the MAC address of another machine Y in its subnet. Which one of the following techniques can be used for this? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X sends an ARP request packet to the local gateway's IP address which then finds the  MAC address of Y and sends to X</p>",
            "<b>B.</b> <p>X sends an ARP request packet to the local gateway's MAC address which then finds the MAC address of Y and sends to X</p>",
            "<b>C.</b> <p>X sends an ARP request packet with broadcast MAC address in its local subnet</p>",
            "<b>D.</b> <p>X sends an ARP request packet with broadcast IP address in its local subnet</p>"
          ],
          "correct_answer": "<b>C.</b> <p>X sends an ARP request packet with broadcast MAC address in its local subnet</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302819/gate2019-cs-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>StationA uses 32 byte packets to transmit messages to Station B using a sliding window protocol. The round trip delay between A and B is 80 ms and the bottleneck bandwidth on the path between A and B is 128 kbps. What is the optimal window size that A should use? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20</p>",
            "<b>B.</b> <p>40</p>",
            "<b>C.</b> <p>160</p>",
            "<b>D.</b> <p>320</p>"
          ],
          "correct_answer": "<b>B.</b> <p>40</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213544/isro2018-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>________ can detect burst error of length less than or equal to degree of the polynomial and detects burst errors that affect odd number of bits. <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hamming Code</p>",
            "<b>B.</b> <p>CRC</p>",
            "<b>C.</b> <p>VRC</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>CRC</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213577/isro2018-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a simple communication system where multiple nodes are connected by a shared broadcast medium (like Ethernet or wireless). The nodes in the system use the following carrier-sense based medium access protocol. A node that receives a packet to transmit will carrier-sense the medium for 5 units of time. If the node does not detect any other transmission in this duration, it starts transmitting its packet in the next time unit. If the node detects another transmission, it waits until this other transmission finishes, and then begins to carrier-sense for 5 time units again. Once they start to transmit, nodes do not perform any collision detection and continue transmission even if a collision occurs. All transmissions last for 20 units of time. Assume that the transmission signal travels at the speed of 10 meters per unit time in the medium. <br>Assume that the system has two nodes P and Q, located at a distance d meters from each other. P starts transmitting a packet at time t=0 after successfully completing its carrier-sense phase. Node Q has a packet to transmit at time t=0 and begins to carrier-sense the medium. <br>The maximum distance d (in meters, rounded to the closest integer) that allows Q to\nsuccessfully avoid a collision between its proposed transmission and P's ongoing\ntransmission is _____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204130/gate2018-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
