const express = require('express');
const db = require('../data/db-config.js');


const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
  .then(car => {
    res.json(car);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve fruit' });
  });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newcarEntry => {
      res.status(201).json(newcarEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

router.put('/:id', async (req, res) => {

    const { id } = req.params;
    const changes = req.body;

    try {
        const count = await db('cars').update(changes).where({ id });

        if (count) {
            res.json({ updated: count });
        } else {
            res.status(404).json({ message: 'invalid id' });
        }
    } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'error updating', error: err });
    }
});

router.delete('/:id', async (req, res) => {

    const { id } = req.params;

    try {
        const count = await db('cars').where({ id }).del();

        if (count) {
            res.json({ deleted: count });
        } else {
            res.status(404).json({ message: 'invalid id' });
        }
    } catch (err) {
        res.status(500).json({ message: 'error deleting', error: err });
    }

});

module.exports = router;