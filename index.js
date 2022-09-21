'use strict';

const express = require('express');
const app = express();
const port = 9000;

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname});
});
