const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


//gets information from the database
router.get('/api/project', (req, res) => {
    const queryText = `SELECT * FROM "projects";`;
    pool.query(queryText)
        .then((result) => { 
            console.log(result) 
            res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT plant query', err);
            res.sendStatus(500);
        });
});


router.post('/project', (req, res) => {
    console.log(req.body);
    
    const newProject = req.body;
    const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ($1, $2, $3, $4, $5, $6, $7);
`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.thumbnail,
        newProject.website,
        newProject.gitHub,
        newProject.date,
        newProject.tag_id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing POST Project query', err);
            res.sendStatus(500);
        });
});

// router.put('/', (req, res) => {
//     const updatedPlant = req.body;

//     const queryText = `UPDATE table_name
//   SET "name" = $1, 
//   "kingdom" = $2, 
//   "clade" = $3, 
//   "order" = $4, 
//   "family" = $5, 
//   "subfamily" = $6, 
//   "genus" = $7
//   WHERE id=$8;`;

//     const queryValues = [
//         updatedPlant.name,
//         updatedPlant.kingdom,
//         updatedPlant.clade,
//         updatedPlant.order,
//         updatedPlant.family,
//         updatedPlant.subfamily,
//         updatedPlant.genus,
//         updatedPlant.id,
//     ];

//     pool.query(queryText, queryValues)
//         .then(() => { res.sendStatus(200); })
//         .catch((err) => {
//             console.log('Error completing SELECT plant query', err);
//             res.sendStatus(500);
//         });
// });

router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM project WHERE id=$1';
    console.log('query', req.query.id, 'params', req.params.id)
    pool.query(queryText, [Number(req.params.id)])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE project query', err);
            res.sendStatus(500);
        });
});

module.exports = router;
