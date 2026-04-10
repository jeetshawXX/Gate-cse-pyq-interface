window.__examLoadCallback({
  "title": "Computer Networks - Sliding Window",
  "duration": 42,
  "sections": [
    {
      "name": "Sliding Window",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"967\"></a><div itemprop=\"text\"><p>Host \\( A \\) is sending data to host \\( B \\)&nbsp;over a full duplex link. \\( A \\) and \\( B \\) are using the sliding window protocol for flow control. The send and receive window sizes are \\( 5 \\) packets each. Data packets (sent only from \\( A \\) to \\( B \\)) are all \\( 1000 \\) bytes long and the transmission time for such a packet is \\( 50 \\) \\( μs \\). Acknowledgment packets (sent only from \\( B \\) to \\( A \\)) are very small and require negligible transmission time. The propagation delay over the link is \\( 200 \\) \\( μs \\). What is the maximum achievable throughput in this communication?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 84</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 7.69 \\times 10^6 \\) Bps</p>",
            "<p>\\( 11.11 \\times 10^6 \\) Bps</p>",
            "<p>\\( 12.33 \\times 10^6 \\) Bps</p>",
            "<p>\\( 15.00 \\times 10^6 \\) Bps</p>"
          ],
          "correct_answer": "<p>\\( 11.11 \\times 10^6 \\) Bps</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/967/gate-cse-2003-question-84\" target=\"_blank\">https://gateoverflow.in/967/gate-cse-2003-question-84</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1361\"></a><div itemprop=\"text\"><p>The maximum window size for data transmission using the selective reject protocol with \\( n\\text{-bit} \\) frame sequence numbers is:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 25</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2^n \\)</p>",
            "<p>\\( 2^{n-1} \\)</p>",
            "<p>\\( 2^n-1 \\)</p>",
            "<p>\\( 2^{n-2} \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^{n-1} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1361/gate-cse-2005-question-25\" target=\"_blank\">https://gateoverflow.in/1361/gate-cse-2005-question-25</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1820\"></a><div itemprop=\"text\"><p>Station \\( A \\) uses \\( 32\\;&nbsp;\\text{byte} \\) packets to transmit messages to Station \\( B \\) using a sliding&nbsp;window protocol. The round trip delay between A and \\( B \\) is \\( 80\\; \\text{milliseconds} \\) and&nbsp;the bottleneck bandwidth on the path between \\( A \\) and \\( B \\) is \\( 128\\;&nbsp;\\text{kbps} \\) . What is the&nbsp;optimal window size that \\( A \\) should use?</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 20 \\)</p>",
            "<p>\\( 40 \\)</p>",
            "<p>\\( 160 \\)</p>",
            "<p>\\( 320 \\)</p>"
          ],
          "correct_answer": "<p>\\( 40 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1820/gate-cse-2006-question-44\" target=\"_blank\">https://gateoverflow.in/1820/gate-cse-2006-question-44</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1822\"></a><div itemprop=\"text\"><p>Station \\( A \\) needs to send a message consisting of \\( 9 \\) packets to Station \\( B \\) using a&nbsp;sliding window (window size \\( 3 \\)) and go-back-\\( n \\) error control strategy. All packets&nbsp;are ready and immediately available for transmission. If every \\( 5 \\)th packet that \\( A \\) transmits gets lost (but no acks from \\( B \\) ever get lost), then what is the number of&nbsp;packets that \\( A \\) will transmit for sending the message to \\( B \\)?&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 46</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 12 \\)</p>",
            "<p>\\( 14 \\)</p>",
            "<p>\\( 16 \\)</p>",
            "<p>\\( 18 \\)</p>"
          ],
          "correct_answer": "<p>\\( 16 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1822/gate-cse-2006-question-46\" target=\"_blank\">https://gateoverflow.in/1822/gate-cse-2006-question-46</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1267\"></a><div itemprop=\"text\"><p>The distance between two stations \\( M \\) and \\( N \\) is \\( L \\) kilometers. All frames are \\( K \\) bits long. The propagation delay per kilometer is \\( t \\) seconds. Let \\( R \\) bits/second be the channel capacity. Assuming that the processing delay is negligible, the \\( \\text{minimum} \\) number of bits for the sequence number field in a frame for maximum utilization, when the \\( \\text{sliding window protocol} \\) is used, is:</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 69</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\lceil \\log_2 \\frac{2LtR +2K}{K} \\rceil \\)</p>",
            "<p>\\( \\lceil \\log_2 \\frac{2LtR}{K} \\rceil \\)</p>",
            "<p>\\( \\lceil \\log_2 \\frac{2LtR +K}{K} \\rceil \\)</p>",
            "<p>\\( \\lceil \\log_2 \\frac{2LtR +2K}{2K} \\rceil \\)</p>"
          ],
          "correct_answer": "<p>\\( \\lceil \\log_2 \\frac{2LtR +K}{K} \\rceil \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1267/gate-cse-2007-question-69\" target=\"_blank\">https://gateoverflow.in/1267/gate-cse-2007-question-69</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1340\"></a><div itemprop=\"text\"><p>Frames of \\( \\text{1000 bits} \\) are sent over a \\( 10^6 \\) \\( \\text{bps} \\) duplex link between two hosts. The propagation time is \\( \\text{25 ms} \\). Frames are to be transmitted into this link to maximally pack them in transit (within the link).</p>\n\n<p>What is the minimum number of bits \\( (I) \\) that will be required to represent the sequence numbers distinctly? Assume that no time gap needs to be given between transmission of two frames.</p>\n\n</div><br><br><b>GATE CSE 2009 | Question: 57, ISRO2016-75</b></p>",
          "type": "single",
          "options": [
            "<p>\\( I=2 \\)</p>",
            "<p>\\( I=3 \\)</p>",
            "<p>\\( I=4 \\)</p>",
            "<p>\\( I=5 \\)</p>"
          ],
          "correct_answer": "<p>\\( I=5 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1340/gate-cse-2009-question-57-isro2016-75\" target=\"_blank\">https://gateoverflow.in/1340/gate-cse-2009-question-57-isro2016-75</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"43470\"></a><div itemprop=\"text\"><p>Frames of \\( 1000\\text{ bits} \\) are sent over a \\( 10^6 \\) bps duplex link between two hosts. The propagation time is \\( 25ms \\). Frames are to be transmitted into this link to maximally pack them in transit (within the link).</p>\n\n<p>Let \\( I \\)&nbsp;be the minimum number of bits \\( (I) \\) that will be required to represent the sequence numbers distinctly assuming that no time gap needs to be given between transmission of two frames.</p>\n\n<p>Suppose that the sliding window protocol is used with the sender window size of \\( 2^{I} \\), where \\( I \\) is the numbers of bits as mentioned earlier and acknowledgements are always piggy backed. After sending \\( 2^I \\) frames, what is the minimum time the sender will have to wait before starting transmission of the next frame? (Identify the closest choice ignoring the frame processing time)</p>\n\n</div><br><br><b>GATE CSE 2009 | Question: 58</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 16ms \\)</p>",
            "<p>\\( 18ms \\)</p>",
            "<p>\\( 20ms \\)</p>",
            "<p>\\( 22ms \\)</p>"
          ],
          "correct_answer": "<p>\\( 20ms \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43470/gate-cse-2009-question-58\" target=\"_blank\">https://gateoverflow.in/43470/gate-cse-2009-question-58</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1795\"></a><div itemprop=\"text\">Consider a selective repeat sliding window protocol that uses a frame size of \\( 1 \\) \\( \\text{KB} \\) to send data on a \\( 1.5 \\) \\( \\text{Mbps} \\) link with a one-way latency of \\( 50 \\) \\( \\text{msec} \\). To achieve a link utilization of \\( 60\\% \\), the minimum number of bits required to represent the sequence number field is ________.</div><br><br><b>GATE CSE 2014 Set 1 | Question: 28</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1795/gate-cse-2014-set-1-question-28\" target=\"_blank\">https://gateoverflow.in/1795/gate-cse-2014-set-1-question-28</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"8481\"></a><div itemprop=\"text\">Consider a network connecting two systems located \\( 8000 \\) \\( \\text{Km} \\) apart. The bandwidth of the network is \\( 500 \\times 10^6 \\) \\( \\text{bits} \\) per second. The propagation speed of the media is \\( 4 \\times 10^6 \\) \\( \\text{meters} \\) per second. It needs to design a Go-Back-\\( N \\) sliding window protocol for this network. The average packet size is \\( 10^7 \\) \\( \\text{bits} \\). The network is to be used to its full capacity. Assume that processing delays at nodes are negligible. Then, the minimum size in bits of the sequence number field has to be ______.</div><br><br><b>GATE CSE 2015 Set 3 | Question: 28</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8481/gate-cse-2015-set-3-question-28\" target=\"_blank\">https://gateoverflow.in/8481/gate-cse-2015-set-3-question-28</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"39577\"></a><div itemprop=\"text\">Consider a \\( 128 \\times 10^3 \\) bits/second satellite communication link with one way propagation delay of \\( 150 \\) milliseconds. Selective retransmission (repeat) protocol is used on this link to send data with a frame size of \\( 1 \\) kilobyte. Neglect the transmission time of acknowledgement. The minimum number of bits required for the sequence number field to achieve \\( 100 \\% \\) utilization is ________.</div><br><br><b>GATE CSE 2016 Set 2 | Question: 55</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39577/gate-cse-2016-set-2-question-55\" target=\"_blank\">https://gateoverflow.in/39577/gate-cse-2016-set-2-question-55</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"3725\"></a><div itemprop=\"text\"><p>In a sliding window \\( ARQ \\) scheme, the transmitter's window size is \\( N \\) and the receiver's window size is \\( M \\). The minimum number of distinct sequence numbers required to ensure correct operation of the \\( ARQ \\) scheme is</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 81</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\min (M, N) \\)</p>",
            "<p>\\( \\max (M, N) \\)</p>",
            "<p>\\( M + N \\)</p>",
            "<p>\\( MN \\)</p>"
          ],
          "correct_answer": "<p>\\( M + N \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3725/gate-it-2004-question-81\" target=\"_blank\">https://gateoverflow.in/3725/gate-it-2004-question-81</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"3727\"></a><div itemprop=\"text\"><p>A \\( 20 \\) \\( \\text{Kbps} \\) satellite link has a propagation delay of \\( 400 \\) \\( \\text{ms} \\). The transmitter employs the \"go back \\( n \\) \\( ARQ \\)\" scheme with \\( n \\) set to \\( 10 \\). Assuming that each frame is \\( 100 \\) \\( \\text{byte} \\) long, what is the maximum data rate possible?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 83</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)&nbsp;\\( \\text{Kbps} \\)</p>",
            "<p>\\( 10 \\)&nbsp;\\( \\text{Kbps} \\)​​​​​​​</p>",
            "<p>\\( 15 \\)&nbsp;\\( \\text{Kbps} \\)​​​​​​​</p>",
            "<p>\\( 20 \\)&nbsp;\\( \\text{Kbps} \\)​​​​​​​</p>"
          ],
          "correct_answer": "<p>\\( 10 \\)&nbsp;\\( \\text{Kbps} \\)​​​​​​​</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3727/gate-it-2004-question-83\" target=\"_blank\">https://gateoverflow.in/3727/gate-it-2004-question-83</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"3732\"></a><div itemprop=\"text\"><p>Suppose that the maximum transmit window size for a TCP connection is \\( 12000 \\) \\( \\text{bytes} \\). Each packet consists of \\( 2000 \\) \\( \\text{bytes} \\). At some point in time, the connection is in slow-start phase with a current transmit window of \\( 4000 \\) \\( \\text{bytes} \\). Subsequently, the transmitter receives two acknowledgments. Assume that no packets are lost and there are no time-outs. What is the maximum possible value of the current transmit window?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 88</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4000 \\) \\( \\text{bytes} \\)</p>",
            "<p>\\( 8000 \\) \\( \\text{bytes} \\)</p>",
            "<p>\\( 10000 \\) \\( \\text{bytes} \\)</p>",
            "<p>\\( 12000 \\) \\( \\text{bytes} \\)</p>"
          ],
          "correct_answer": "<p>\\( 8000 \\) \\( \\text{bytes} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3732/gate-it-2004-question-88\" target=\"_blank\">https://gateoverflow.in/3732/gate-it-2004-question-88</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"3608\"></a><div itemprop=\"text\"><p>Suppose that it takes \\( 1 \\) unit of time to transmit a packet (of fixed size) on a communication link. The link layer uses a window flow control protocol with a window size of \\( N \\) packets. Each packet causes an ack or a nak to be&nbsp;generated by the receiver, and ack/nak transmission times are negligible. Further, the round trip time on the link is equal to \\( N \\) units. Consider time \\( i &gt; N \\). If only acks have been received till time i(no naks), then the goodput evaluated at the transmitter at time i(in packets per unit time) is</p>\n\n</div><br><br><b>GATE IT 2006 | Question: 64</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1- \\dfrac{&nbsp;&nbsp;N}{i} \\)<br>\n\t&nbsp;</p>",
            "<p>\\( \\dfrac{i}{(N + i)} \\)<br>\n\t&nbsp;</p>",
            "<p>\\( 1 \\)<br>\n\t&nbsp;</p>",
            "<p>\\( 1 - e^{\\left(\\frac{i}{N}\\right)} \\)</p>"
          ],
          "correct_answer": "<p>\\( 1- \\dfrac{&nbsp;&nbsp;N}{i} \\)<br>\n\t&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3608/gate-it-2006-question-64\" target=\"_blank\">https://gateoverflow.in/3608/gate-it-2006-question-64</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"3375\"></a><div itemprop=\"text\"><p>A \\( 1\\;\\text{Mbps} \\)&nbsp;satellite link connects two ground stations. The altitude of the satellite is \\( 36,504\\;\\text{km} \\)&nbsp;and speed of the signal is \\( 3 \\times&nbsp;10^{8}\\;\\text{m/s}. \\)&nbsp;What should be the packet size for a channel utilization of \\( 25\\% \\)&nbsp;for a satellite link using go-back-\\( 127 \\) sliding window proto­col? Assume that the acknowledgment packets are negligible in size and that there are no errors during communication.</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 64</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 120\\;\\text{bytes} \\)</p>",
            "<p>\\( 60\\;\\text{bytes} \\)</p>",
            "<p>\\( 240\\;\\text{bytes} \\)</p>",
            "<p>\\( 90\\;\\text{bytes} \\)</p>"
          ],
          "correct_answer": "<p>\\( 120\\;\\text{bytes} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3375/gate-it-2008-question-64\" target=\"_blank\">https://gateoverflow.in/3375/gate-it-2008-question-64</a></p>"
        }
      ]
    }
  ]
});
