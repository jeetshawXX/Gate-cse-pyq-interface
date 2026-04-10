window.__examLoadCallback({
  "title": "Databases - Tuple Relational Calculus",
  "duration": 3,
  "sections": [
    {
      "name": "Tuple Relational Calculus",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"460051\"></a><div itemprop=\"text\"><p>Consider two relations describing teams and players in a sports league:</p><ul><li>teams(tid, tname): tid, tname are team-id and team-name, respectively</li><li>players(pid,pname,tid): pid, pname, and tid denote player-id, playername and the team-id of the player, respectively</li></ul><p>Which ONE of the following tuple relational calculus queries returns the name of the players who play for the team having tname as ' \\( M I^{\\prime} \\) ?</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 29</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\left\\{p\\right. \\). pname \\( \\mid p \\in \\) players \\( \\wedge \\exists t\\left(t \\in\\right. \\) teams \\( \\left.\\left.\\wedge p . t i d=t . t i d \\wedge t . t n a m e=' M I^{\\prime}\\right)\\right\\} \\)</p>",
            "<p>\\( \\left\\{p\\right. \\). pname \\( \\mid p \\in \\) teams \\( \\wedge \\exists t\\left(t \\in\\right. \\) players \\( \\left.\\left.\\wedge p . t i d=t . t i d \\wedge t . t n a m e=' M I^{\\prime}\\right)\\right\\} \\)</p>",
            "<p>\\( \\left\\{p\\right. \\). pname \\( \\mid p \\in \\) players \\( \\wedge \\exists t\\left(t \\in\\right. \\) teams \\( \\wedge t \\). tname \\( \\left.\\left.=' M I^{\\prime}\\right)\\right\\} \\)</p>",
            "<p>\\( \\left\\{p\\right. \\). pname \\( \\mid p \\in \\) teams \\( \\wedge \\exists t\\left(t \\in\\right. \\) players \\( \\wedge t \\). tname \\( \\left.\\left.=' M I^{\\prime}\\right)\\right\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\left\\{p\\right. \\). pname \\( \\mid p \\in \\) players \\( \\wedge \\exists t\\left(t \\in\\right. \\) teams \\( \\left.\\left.\\wedge p . t i d=t . t i d \\wedge t . t n a m e=' M I^{\\prime}\\right)\\right\\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460051/gate-cse-2025-set-1-question-29\" target=\"_blank\">https://gateoverflow.in/460051/gate-cse-2025-set-1-question-29</a></p>"
        }
      ]
    }
  ]
});
