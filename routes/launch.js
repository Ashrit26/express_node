const express = require('express');
const bodyParser = require('body-parser');
const { execSync } = require('child_process');
const container = require('./container');
const app = express();

const launch = express.Router();


app.use('/container', container);




module.exports = launch
