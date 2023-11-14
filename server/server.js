const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

app.get('/', function(req, res) {
  res.json({ message: 'Hello World'});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});