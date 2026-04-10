window.__examLoadCallback({
  "title": "Programming and DS - Dangling Pointers",
  "duration": 3,
  "sections": [
    {
      "name": "Dangling Pointers",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"59939\"></a><div itemprop=\"text\"><p>Consider the following sequence of operations:</p>\n\n<ul>\n\t<li>Pointer p1 is set to point at a new heap-dynamic variable.</li>\n\t<li>Pointer p2 is assigned p1’s value</li>\n\t<li>The heap dynamic variable pointed to by p1 is explicitly de-allocated but p2 is not changed by the operation</li>\n</ul>\n\n<p>This situation leads to which of the following:</p>\n\n</div><br><br><b>Programming and DS: UGC NET CSE | September 2013 | Part 3 | Question: 65</b></p>",
          "type": "single",
          "options": [
            "<p>p1 becomes a dangling pointer</p>",
            "<p>p2 becomes a dangling pointer</p>",
            "<p>Both p1 and p2 are now dangling pointers</p>",
            "<p>Neither p1 nor p2 is now a dangling pointer</p>"
          ],
          "correct_answer": "<p>p2 becomes a dangling pointer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/59939/ugc-net-cse-september-2013-part-3-question-65\" target=\"_blank\">https://gateoverflow.in/59939/ugc-net-cse-september-2013-part-3-question-65</a></p>"
        }
      ]
    }
  ]
});
