var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

// -------------- serve static folders -------------- //

app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.json())

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/html/home.html");
})

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/html/test.html");
})



http.listen(process.env.PORT, process.env.IP);
