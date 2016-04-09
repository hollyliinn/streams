// cd . && npm install (at bash to change it to express)
var express = require('express');
var app = express ();

app.get('/', function (req, res) {
    res.send('Welcome!');
});
app.get('/bye', function(req, res) {
    res.send('Goodbye!');
});
app.get()
app.listen(process.env.PORT, function () {
    console.log('Example app listening on  port 3000!');
});