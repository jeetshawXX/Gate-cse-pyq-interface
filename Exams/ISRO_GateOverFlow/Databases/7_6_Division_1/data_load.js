window.__examLoadCallback({
  "title": "Databases - Division",
  "duration": 3,
  "sections": [
    {
      "name": "Division",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"182063\"></a><div itemprop=\"text\"><p>Consider the following schema:</p>\n\n<p>\\( \\text{Sailors(sid,sname,rating,age)} \\)<br>\n\\( \\text{Boats(bid,bname,colour)} \\)<br>\n\\( \\text{Reserves(sid,bid,day)} \\)</p>\n\n<p>Two boats can have the same name but the colour&nbsp;differentiates them.</p>\n\n<p>The two relations</p>\n\n<p>\\( \\rho (Tempsids,(\\pi _{sid,bid}\\,Reserves)/(\\pi_{bid}(\\sigma_{bname='Ganga'}\\,Boats ))), \\)<br>\n\\( \\pi_{sname}(Tempside\\Join Sailors) \\)</p>\n\n<p>If \\( / \\) is division operation, the above set of relations represents the query</p>\n\n</div><br><br><b>Databases: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>Names of sailors who have reserved all boats called Ganga.</p>",
            "<p>Names of sailors who have not reserved any Ganga&nbsp;boat.</p>",
            "<p>Names of sailors who have reserved at least one Ganga&nbsp;boat.</p>",
            "<p>Names of sailors who have reserved at most one Ganga&nbsp;boat.</p>"
          ],
          "correct_answer": "<p>Names of sailors who have reserved all boats called Ganga.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/182063/isro-dec2017-13\" target=\"_blank\">https://gateoverflow.in/182063/isro-dec2017-13</a></p>"
        }
      ]
    }
  ]
});
