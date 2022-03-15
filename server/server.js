const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const DUMMY_EVENTS = [];

app.use(bodyParser.json());



app.listen(5000);