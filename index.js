var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.redirect('https://github.com/abhaykv04/padachihn');
});

app.get('/myprint', (req, res) => {
    var json = {};

    json.ipaddress = req.ip;
    json.language = req.get('Accept-Language').split(',')[0];
    json.software = req.get('User-Agent').split(/[()]/)[1];

    res.json(json);
});

app.listen(PORT, () => {
    console.log('(padachihn): Listening on port', PORT);
});