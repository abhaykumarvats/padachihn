// Create an instance of express
var express = require('express');
var app = express();

// Assign port number
var PORT = process.env.PORT || 3000;

// Listen for GET requests to /
app.get('/', (req, res) => {
    res.redirect('https://github.com/abhaykv04/padachihn');
});

// Listen for GET requests to /myprint
app.get('/myprint', (req, res) => {
    // Populate json
    var json = {}, array = req.ip.split(':');
    
    json.ipaddress = array[array.length - 1];
    json.language = req.get('Accept-Language').split(',')[0];
    json.software = req.get('User-Agent').split(/[()]/)[1];

    // Send response as json
    res.json(json);
});

// Start server and listen for requests
app.listen(PORT, () => {
    console.log('(padachihn): Listening on port', PORT);
});