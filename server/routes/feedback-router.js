const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route to get all feedback entries to Admin component
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "feedback" ORDER BY "date" DESC, "id";`;

  pool
    .query(queryText)
    .then((response) => res.send(response.rows))
    .catch((err) => {
      console.error(`error in GET with ${queryText}`, err);
      res.sendStatus(500);
    });
});

// POST route to add feedback entry to database
router.post('/', (req, res) => {
  let results = req.body;

  const queryText = `
    INSERT INTO "feedback" ("name", "feeling", "understanding", 
    "support", "comments") 
    VALUES ($1, $2, $3, $4, $5);
  `;

  pool
    .query(queryText, [
      results.name,
      results.feeling,
      results.understanding,
      results.support,
      results.comments,
    ])
    .then(res.sendStatus(201))
    .catch((err) => {
      console.error(`error in POST with ${queryText}`, err);
      res.sendStatus(500);
    });
});

// PUT route to change flagged status on Admin
router.put('/:id', (req, res) => {
  const queryText = `
    UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1;
  `;

  pool
    .query(queryText, [req.params.id])
    .then(res.sendStatus(200))
    .catch((err) => {
      console.error(`error in PUT with ${queryText}`, err);
      res.sendStatus(500);
    });
});

// DELETE route to delete feedback entry on Admin
router.delete('/:id', (req, res) => {
  const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;

  pool
    .query(queryText, [req.params.id])
    .then(res.sendStatus(204))
    .catch((err) => {
      console.error(`error in DELETE with ${queryText}`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
