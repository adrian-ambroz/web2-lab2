const express = require('express');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 3000;



app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Radi! Vrijeme iz baze: ${result.rows[0].now}`)
    } catch (err) {
        console.error(err);
        res.status(500).send(`Greška pri spajanju na bazu: ${err.message}`);
    }
  
});

app.listen(port, () => {
  console.log(`Server radi na portu${port}`);
});