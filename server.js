const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let sensorData = {};

app.post('/data', (req, res) => {
    sensorData = req.body;
    res.send('Data received');
});

app.get('/data', (req, res) => {
    res.json(sensorData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
