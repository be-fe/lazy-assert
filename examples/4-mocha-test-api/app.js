var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/hello', function (req, res) {
    res.send({
        hello: ', ' + (req.query.name || 'nobody'),
        name: req.query.name || 'nobody',
        timestamp: new Date().getTime(),
        thingsWeDontCare: {what: 'ever'}
    });
});

app.post('/hi', function (req, res) {
    res.send({
        hi: ', ' + (req.body.name || 'nobody'),
        name: req.query.name || 'nobody',
        timestamp: new Date().getTime(),
        thingsWeDontCare: {what: 'ever'}
    });
});

app.listen(8822, function () {
    console.log('Server started at http://localhost:8822');
});