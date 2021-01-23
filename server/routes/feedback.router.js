const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST route to add feedback entry to database
router.post('/', (req, res) => {
  let results = req.body;

  const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
  `;

  pool
    .query(queryText, [
      results.feeling,
      results.understanding,
      results.support,
      results.comments,
    ])
    .then(res.sendStatus(201))
    .catch((err) => console.error(`error in POST with ${queryText}`, err));
});

module.exports = router;
