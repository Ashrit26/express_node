const express = require('express');
const bodyParser = require('body-parser');
const { execSync } = require('child_process');

const container = express.Router();

container.use(bodyParser.urlencoded({extended: true}));


container.route('/')
    .post((req, res, next) => {
        if(req.body.cmd===undefined){
            res.json({error: true, message: "Invalid parameters"});
            return;
        }
        const cmd = req.body.cmd;
        const output = execSync(cmd);
        console.log(output);
        res.json({error: false});
    });


module.exports = container;
