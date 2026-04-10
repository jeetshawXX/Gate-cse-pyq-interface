window.__examLoadCallback({
  "title": "Computer Networks - IP Addressing",
  "duration": 30,
  "sections": [
    {
      "name": "IP Addressing",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"917\"></a><div itemprop=\"text\"><p>Which of the following assertions is FALSE about the Internet Protocol (IP)?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 27</b></p>",
          "type": "single",
          "options": [
            "<p>It is possible for a computer to have multiple IP addresses</p>",
            "<p>IP packets from the same source to the same destination can take different routes in the network</p>",
            "<p>IP ensures that a packet is discarded if it is unable to reach its destination within a given number of hops</p>",
            "<p>The packet source cannot set the route of an outgoing packets; the route is determined only by the routing tables in the routers on the way</p>"
          ],
          "correct_answer": "<p>The packet source cannot set the route of an outgoing packets; the route is determined only by the routing tables in the routers on the way</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/917/gate-cse-2003-question-27\" target=\"_blank\">https://gateoverflow.in/917/gate-cse-2003-question-27</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1052\"></a><div itemprop=\"text\"><p>Consider three IP networks \\( A, B \\) and \\( C \\). Host \\( H_A \\) in network&nbsp;\\( A \\) sends messages each containing \\( 180 \\) bytes of application data to a host \\( H_C \\) in network \\( C \\). The \\( \\text{TCP} \\) layer prefixes \\( 20 \\) byte header to the message.</p>\n\n<p>This passes through an intermediate network \\( B \\).The maximum packet size, including \\( 20 \\) byte IP header, in each network is:</p>\n\n<ul>\n\t<li>A: \\( \\text{1000 bytes} \\)</li>\n\t<li>B: \\( \\text{100 bytes} \\)</li>\n\t<li>C: \\( \\text{1000 bytes} \\)</li>\n</ul>\n\n<p>The network \\( A \\) and \\( B \\) are connected through a \\( 1 \\) Mbps link, while \\( B \\) and \\( C \\)<br>\n&nbsp;are connected by a \\( 512 \\)&nbsp;Kbps link (bps = bits per second).&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\n\n<p style=\"text-align:center\"><img alt=\"\" src=\"images/gateOverflow_pyq_images/computer_networks___ip_addressing/2065c2bb8e747e2b5c5e7225ed46074d.png\"></p>\n\n<p>Assuming that the packets are correctly delivered, how many bytes, including headers, are delivered to the \\( IP \\) layer at the destination for one application message,&nbsp;in the best case? Consider only data packets.</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 56</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 200 \\)</p>",
            "<p>\\( 220 \\)</p>",
            "<p>\\( 240 \\)</p>",
            "<p>\\( 260 \\)</p>"
          ],
          "correct_answer": "<p>\\( 260 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1052/gate-cse-2004-question-56\" target=\"_blank\">https://gateoverflow.in/1052/gate-cse-2004-question-56</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"43572\"></a><div itemprop=\"text\"><p>Consider three IP networks \\( A, B \\) and \\( C \\). Host \\( H_A \\) in network&nbsp;\\( A \\) sends messages each containing \\( 180 \\) \\( bytes \\) of application data to a host \\( H_C \\) in network \\( C \\). The TCP layer prefixes \\( 20 \\) byte header to the message. This passes through an intermediate network \\( B \\). The maximum packet size, including \\( 20 \\) byte IP header, in each network, is:</p>\n\n<ul>\n\t<li>\\( A: \\) \\( 1000 \\)&nbsp;\\( \\text{bytes} \\)</li>\n\t<li>\\( B:&nbsp;100 \\)&nbsp; &nbsp;\\( \\text{bytes} \\)</li>\n\t<li>\\( C: 1000 \\) \\( \\text{bytes} \\)</li>\n</ul>\n\n<p>The network \\( A \\) and \\( B \\) are connected through a \\( 1 \\) \\( Mbps \\) link, while \\( B \\) and \\( C \\) are connected by a \\( 512 \\) \\( Kbps \\) link (bps = bits per second).</p>\n\n<p style=\"text-align:center\"><img alt=\"\" src=\"images/gateOverflow_pyq_images/computer_networks___ip_addressing/5ee8d19d2bc9a8a474916ea6ed158a35.png\"></p>\n\n<p>What is the rate at which application data is transferred to host \\( H_C \\)? Ignore errors, acknowledgments, and other overheads.</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 57</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 325.5 \\) \\( \\text{Kbps} \\)</p>",
            "<p>\\( 354.5 \\)&nbsp;\\( \\text{Kbps} \\)</p>",
            "<p>\\( 409.6 \\)&nbsp;\\( \\text{Kbps} \\)</p>",
            "<p>\\( 512.0 \\)&nbsp;\\( \\text{Kbps} \\)</p>"
          ],
          "correct_answer": "<p>\\( 354.5 \\)&nbsp;\\( \\text{Kbps} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43572/gate-cse-2004-question-57\" target=\"_blank\">https://gateoverflow.in/43572/gate-cse-2004-question-57</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1606\"></a><div itemprop=\"text\"><p>In the IPv4 addressing format, the number of networks allowed under Class \\( C \\) addresses is:</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 23</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2^{14} \\)</p>",
            "<p>\\( 2^{7} \\)</p>",
            "<p>\\( 2^{21} \\)</p>",
            "<p>\\( 2^{24} \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^{21} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1606/gate-cse-2012-question-23\" target=\"_blank\">https://gateoverflow.in/1606/gate-cse-2012-question-23</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1548\"></a><div itemprop=\"text\"><p>In an IPv4 datagram, the \\( M \\) bit is \\( 0 \\), the value of \\( HLEN \\) is \\( 10 \\), the value of total length is \\( 400 \\) and the fragment offset value is \\( 300 \\). The position of the datagram, the sequence numbers of the first and the last bytes of the payload, respectively are:</p>\n\n</div><br><br><b>GATE CSE 2013 | Question: 37</b></p>",
          "type": "single",
          "options": [
            "<p>Last fragment, \\( 2400 \\) and \\( 2789 \\)</p>",
            "<p>First fragment, \\( 2400 \\) and \\( 2759 \\)</p>",
            "<p>Last fragment, \\( 2400 \\) and \\( 2759 \\)</p>",
            "<p>Middle fragment, \\( 300 \\) and \\( 689 \\)</p>"
          ],
          "correct_answer": "<p>Last fragment, \\( 2400 \\) and \\( 2759 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1548/gate-cse-2013-question-37\" target=\"_blank\">https://gateoverflow.in/1548/gate-cse-2013-question-37</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"2061\"></a><div itemprop=\"text\">Every host in an \\( \\textsf{IPv4} \\) network has a \\( 1\\text{-second} \\) resolution real-time clock with battery backup. Each host needs to generate up to \\( 1000 \\) unique identifiers per second. Assume that each host has a globally unique \\( \\textsf{IPv4} \\) address. Design a \\( 50\\text{-bit} \\) globally unique ID for this purpose. After what period (in seconds) will the identifiers generated by a host wrap around?</div><br><br><b>GATE CSE 2014 Set 3 | Question: 27</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "256",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2061/gate-cse-2014-set-3-question-27\" target=\"_blank\">https://gateoverflow.in/2061/gate-cse-2014-set-3-question-27</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"118427\"></a><div itemprop=\"text\">The maximum number of \\( \\textsf{IPv4} \\) router addresses that can be listed in the record route (RR) option field of an \\( \\textsf{IPv4} \\) header is______.</div><br><br><b>GATE CSE 2017 Set 2 | Question: 20</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "9",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118427/gate-cse-2017-set-2-question-20\" target=\"_blank\">https://gateoverflow.in/118427/gate-cse-2017-set-2-question-20</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"204129\"></a><div itemprop=\"text\">Consider an IP packet with a length of \\( 4,500\\;\\text{bytes} \\) that includes a \\( 20\\text{-byte}\\;\\textsf{IPv4} \\) header and a \\( 40\\text{-byte} \\) TCP header. The packet is forwarded to an \\( \\textsf{IPv4} \\) router that supports a Maximum Transmission Unit (MTU) of \\( 600\\;\\text{bytes} \\). Assume that the length of the IP header in all the outgoing fragments of this packet is \\( 20\\;\\text{bytes} \\). Assume that the fragmentation offset value stored in the first fragment is \\( 0 \\).<br>\n<br>\nThe fragmentation offset value stored in the third fragment is ________.</div><br><br><b>GATE CSE 2018 | Question: 54</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "144",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/204129/gate-cse-2018-question-54\" target=\"_blank\">https://gateoverflow.in/204129/gate-cse-2018-question-54</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"399269\"></a><div itemprop=\"text\"><p>Suppose in a web browser, you click on the \\( \\textsf{www. gate-2023.in}\\; \\text{URL} \\). The browser cache is empty. The \\( \\text{IP address} \\) for this \\( \\text{URL} \\) is not cached in your local host, so a \\( \\text{DNS} \\) lookup is triggered (by the local \\( \\text{DNS} \\) server deployed on your local host) over the \\( 3 \\)-tier \\( \\text{DNS} \\) hierarchy in an iterative mode. No resource records are cached anywhere across all \\( \\text{DNS} \\) servers.<br>\n<br>\nLet \\( \\text{RTT} \\) denote the round trip time between your local host and \\( \\text{DNS} \\) servers in the \\( \\text{DNS} \\) hierarchy. The round trip time between the local host and the web server hosting \\( \\textsf{www.gate-2023.in} \\) is also equal to \\( \\text{RTT} \\). The \\( \\text{HTML} \\) file associated with the \\( \\text{URL} \\) is small enough to have negligible transmission time and negligible rendering time by your web browser, which references \\( 10 \\) equally small objects on the same web server.<br>\n<br>\nWhich of the following statements is/are \\( \\text{CORRECT} \\) about the minimum elapsed time between clicking on the \\( \\text{URL} \\) and your browser fully rendering it?</p>\n\n</div><br><br><b>GATE CSE 2023 | Question: 42</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( 7\\; \\text{RTT} \\)s, in case of non-persistent \\( \\text{HTTP} \\) with \\( 5 \\) parallel \\( \\text{TCP} \\) connections.</p>",
            "<p>\\( 5\\; \\text{RTT} \\)s, in case of persistent \\( \\text{HTTP} \\) with pipelining.</p>",
            "<p>\\( 9\\; \\text{RTT} \\)s, in case of non-persistent \\( \\text{HTTP} \\) with \\( 5 \\) parallel \\( \\text{TCP} \\) connections.</p>",
            "<p>\\( 6\\; \\text{RTT} \\)s, in case of persistent \\( \\text{HTTP} \\) with pipelining.</p>"
          ],
          "correct_answer": [
            "<p>\\( 9\\; \\text{RTT} \\)s, in case of non-persistent \\( \\text{HTTP} \\) with \\( 5 \\) parallel \\( \\text{TCP} \\) connections.</p>",
            "<p>\\( 6\\; \\text{RTT} \\)s, in case of persistent \\( \\text{HTTP} \\) with pipelining.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399269/gate-cse-2023-question-42\" target=\"_blank\">https://gateoverflow.in/399269/gate-cse-2023-question-42</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"422869\"></a><div itemprop=\"text\"><p>​​​​​Which one of the following \\( \\text{CIDR} \\) prefixes exactly represents the range of \\( \\text{IP} \\) addresses \\( 10.12 .2 .0 \\) to \\( 10.12 .3 .255 \\)?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 28</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 10.12 .2 .0 / 23 \\)</p>",
            "<p>\\( 10.12 .2 .0 / 24 \\)</p>",
            "<p>\\( 10.12 .0 .0 / 22 \\)</p>",
            "<p>\\( 10.12 .2 .0 / 22 \\)</p>"
          ],
          "correct_answer": "<p>\\( 10.12 .2 .0 / 23 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422869/gate-cse-2024-set-2-question-28\" target=\"_blank\">https://gateoverflow.in/422869/gate-cse-2024-set-2-question-28</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"460827\"></a><div itemprop=\"text\"><p>​​​A machine receives an \\( IPv4 \\) datagram. The protocol field of the \\( IPv4 \\) header has the protocol number of a protocol \\( X \\).</p><div>Which ONE of the following is NOT a possible candidate for \\( X \\)?</div></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>Internet Control Message Protocol (ICMP)</p>",
            "<p>Internet Group Management (IGMP)</p>",
            "<p>Open Shortest Path First (OSPF)</p>",
            "<p>Routing Information Protocol (RIP)</p>"
          ],
          "correct_answer": "<p>Routing Information Protocol (RIP)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460827/gate-cse-2025-set-2-question-8\" target=\"_blank\">https://gateoverflow.in/460827/gate-cse-2025-set-2-question-8</a></p>"
        }
      ]
    }
  ]
});
