window.__examLoadCallback({
  "title": "Network_Layer_Protocol - Network_Layer_Protocol - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Network_Layer_Protocol",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider a network that uses Ethernet and IPv4. Assume that IPv4 headers do not use any options field. Each Ethernet frame can carry a maximum of 1500 bytes in its data field. A UDP segment is transmitted. The payload (data) in the UDP segment is 7488 bytes.\n<br>\nWhich ONE of the following choices has the CORRECT total number of fragments transmitted and the size of the last fragment including IPv4 header? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5 fragments, 1488 bytes</p>",
            "<b>B.</b> <p>6 fragments, 88 bytes</p>",
            "<b>C.</b> <p>6 fragments, 108 bytes</p>",
            "<b>D.</b> <p>6 fragments, 116 bytes</p>"
          ],
          "correct_answer": "<b>D.</b> <p>6 fragments, 116 bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460822/gate-cse-2025-set-2-question-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A machine receives an IPv4 datagram. The protocol field of the IPv4 header has the protocol number of a protocol X.  <br>\nWhich ONE of the following is NOT a possible candidate for X? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Internet Control Message Protocol (ICMP)</p>",
            "<b>B.</b> <p>Internet Group Management Protocol (IGMP)</p>",
            "<b>C.</b> <p>Open Shortest Path First (OSPF)</p>",
            "<b>D.</b> <p>Routing Information Protocol (RIP)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Routing Information Protocol (RIP)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460827/gate-cse-2025-set-2-question-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the routing protocols given in List I and the names given in List II:\n<br><br>\n\\(\\begin{array}{|c l|c l|}\n\\hline\n\\textbf{List I} &amp; &amp; \\textbf{List II} &amp; \\\\\n\\hline\n\\text{(i)} &amp; \\text{Distance vector routing} &amp; \\text{(a)} &amp; \\text{Bellman-Ford} \\\\\n\\hline\n\\text{(ii)} &amp; \\text{Link state routing} &amp; \\text{(b)} &amp; \\text{Dijkstra} \\\\\n\\hline\n\\end{array}\n\\)<br><br>\nFor matching of items in List I with those in List II, which ONE of the following options is CORRECT? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) - (a) and (ii) - (b)</p>",
            "<b>B.</b> <p>(i) - (a) and (ii) - (a)</p>",
            "<b>C.</b> <p>(i) - (b) and (ii) - (a)</p>",
            "<b>D.</b> <p>(i) - (b) and (ii) - (b)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(i) - (a) and (ii) - (b)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460828/gate-cse-2025-set-2-question-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Suppose a message of size 15000 bytes is transmitted from a source to a destination using IPv4 protocol via two routers as shown in the figure. Each router has a defined maximum transmission unit (MTU) as shown in the figure, including IP header. The number of fragments that will be delivered to the destination is _________. (Answer in integer)\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Network_Layer_Protocol\\q47_cddf7a5f.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460033/gate-cse-2025-set-1-question-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A packet with the destination IP address 145.36.109.70 arrives at a router whose routing table is shown. Which interface will the packet be forwarded to?\n<br>    \\(\\begin{array}{|c|c|c|}\n\\hline\n\\textbf{Subnet Address} &amp; \\textbf{Subnet Mask (in CIDR notation)} &amp; \\textbf{Interface} \\\\\n\\hline\n145.36.0.0 &amp; /16 &amp; E1 \\\\\n\\hline\n145.36.128.0 &amp; /17 &amp; E2 \\\\\n\\hline\n145.36.64.0 &amp; /18 &amp; E3 \\\\\n\\hline\n145.36.255.0 &amp; /24 &amp; E4 \\\\\n\\hline\n\\text{Default} &amp; -- &amp; E5 \\\\\n\\hline\n\\end{array}\\) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(E3\\)</p>",
            "<b>B.</b> <p>\\(E1\\)</p>",
            "<b>C.</b> <p>\\(E2\\)</p>",
            "<b>D.</b> <p>\\(E5\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(E3\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460050/gate-cse-2025-set-1-question-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which  one  of  the  following  CIDR  prefixes  exactly  represents  the  range  of IP addresses 10.12.2.0 to 10.12.3.255? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10.12.2.0/23</p>",
            "<b>B.</b> <p>10.12.2.0/24</p>",
            "<b>C.</b> <p>10.12.0.0/22</p>",
            "<b>D.</b> <p>10.12.2.0/22</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10.12.2.0/23</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422869/gate-cse-2024-set-2-question-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which of the following fields of an IP header is/are always modified by any router before it forwards the IP packet? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Source IP Address</p>",
            "<b>B.</b> <p>Protocol</p>",
            "<b>C.</b> <p>Time to Live (TTL)</p>",
            "<b>D.</b> <p>Header Checksum</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Time to Live (TTL)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422875/gate-cse-2024-set-2-question-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Node X has a TCP connection open to node Y. The packets from X to Y go through\nan intermediate IP router R. Ethernet switch S is the first switch on the network path\nbetween X and R. Consider a packet sent from X to Y over this connection.<br>\nWhich of the following statements is/are TRUE about the destination IP and MAC\naddresses on this packet at the time it leaves X? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The destination IP address is the IP address of R</p>",
            "<b>B.</b> <p>The destination IP address is the IP address of Y</p>",
            "<b>C.</b> <p>The destination MAC address is the MAC address of S</p>",
            "<b>D.</b> <p>The destination MAC address is the MAC address of Y</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The destination IP address is the IP address of Y</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422884/gate-cse-2024-set-2-question-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider sending an IP datagram of size 1420 bytes (including 20 bytes of IP header) from a sender to a receiver over a path of two links with a router between them. The first link (sender to router) has an MTU (Maximum Transmission Unit) size of 542 bytes, while the second link (router to receiver) has an MTU size of 360 bytes. The number of fragments that would be delivered at the receiver is _____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422787/gate-cse-2024-set-1-question-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the entries shown below in the forwarding table of an \\( \\mathbb{P} \\) router. Each entry consists of an IP prefix and the corresponding next hop router for packets whose destination IP address matches the prefix. The notation \"\\( \\mathrm{/N} \\)\" in a prefix indicates a subnet mask with the most significant \\( \\mathrm{N} \\) bits set to 1. <br><br> \\(\n\\begin{array}{|l|c|}\n\\hline Prefix &amp; Next\\;  hop \\; router \\\\\n\\hline  10.1 .1 .0 / 24  &amp; R1 \\\\\n\\hline 10.1 .1 .128 / 25  &amp; R2 \\\\\n\\hline  10.1 .1 .64 / 26 &amp; R3 \\\\\n\\hline 10.1 .1 .192 / 26  &amp; R4 \\\\\n\\hline\n\\end{array}\\)\n<br><br>\nThis router forwards 20 packets each to 5 hosts. The IP addresses of the hosts are 10.1.1.16, 10.1.1.72, 10.1.1.132, 10.1.1.191, and 10.1.1.205. The number of packets forwarded via the next hop router \\( R 2 \\) is <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "40",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422794/gate-cse-2024-set-1-question-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following fields is/are modified in the IP header of a packet going out\nof a network address translation (NAT) device from an internal network to an\nexternal network? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Source IP</p>",
            "<b>B.</b> <p>Destination IP</p>",
            "<b>C.</b> <p>Header Checksum</p>",
            "<b>D.</b> <p>Total Length</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Source IP</p>",
            "<b>C.</b> <p>Header Checksum</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422821/gate-cse-2024-set-1-question-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The forwarding table of a router is shown below.<br>\\(\\begin{array}{|c|c|c|c|}\n\\hline \\\\\nSubnet \\; Number&amp;Subnet \\;Mask&amp;Interface ID \\\\ \\hline\n200.150.0.0 &amp;255.255.0.0&amp; 1\\\\ \\hline\n200.150.64.0 &amp;255.255.224.0 &amp;2\\\\ \\hline\n200.150.68.0 &amp;255.255.255.0 &amp;3\\\\ \\hline\n200.150.68.64 &amp;255.255.255.224 &amp;4 \\\\ \\hline\nDefault &amp; &amp;0\\\\ \\hline\n\\end{array} \\)  <br>A packet addressed to a destination address 200.150.68.118 arrives at the router.\nIt will be forwarded to the interface with ID _____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399256/gate-cse-2023-question-55#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which of the following statements is/are INCORRECT about\nthe OSPF (Open Shortest Path First) routing protocol used in the Internet? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>OSPF implements Bellman-Ford algorithm to find shortest paths.</p>",
            "<b>B.</b> <p>OSPF uses Dijkstra's shortest path algorithm to implement least-cost path routing</p>",
            "<b>C.</b> <p>OSPF is used as an inter-domain routing protocol</p>",
            "<b>D.</b> <p>OSPF implements hierarchical routing.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>OSPF implements Bellman-Ford algorithm to find shortest paths.</p>",
            "<b>C.</b> <p>OSPF is used as an inter-domain routing protocol</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399297/gate-cse-2023-question-15#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a network with three routers P, Q, R shown in the figure below. All the links have cost of unity.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Network_Layer_Protocol\\q47_7e9a46a2.jpg\"><br>The routers exchange distance vector routing information and have converged on the routing tables, after which the link Q-R fails. Assume that P and Q send out routing updates at random times, each at the same average rate. The probability of a routing loop formation (rounded off to one decimal place) between P and Q, leading to count-to-infinity problem, is ____ <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371889/Gate-cse-2022-question-47#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider routing table of an organization's router shown below:<br>\\(\n\\begin{array}{|l|l|l|}\nSubnet Number          &amp; Subnet Mask              &amp; Next Hop                 \\\\\n12.20.164.0 &amp;  255.255.252.0 &amp;  R1            \\\\\n12.20.170.0 &amp;  255.255.254.0 &amp;  R2            \\\\\n12.20.168.0 &amp;  255.255.254.0 &amp;  Interface 0   \\\\\n12.20.166.0 &amp;  255.255.254.0 &amp;  Interface 1   \\\\\ndefault     &amp; ~                        &amp;  R3      \\\\  \\hline\n\\end{array}\n\\)<br>Which of the following prefixes in CIDR notation can be collectively used to correctly aggregate all of the subnets in the routing table? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>12.20.164.0/20</p>",
            "<b>B.</b> <p>12.20.164.0/22</p>",
            "<b>C.</b> <p>12.20.164.0/21</p>",
            "<b>D.</b> <p>12.20.168.0/22</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>12.20.164.0/22</p>",
            "<b>D.</b> <p>12.20.168.0/22</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371891/Gate-cse-2022-question-45#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
