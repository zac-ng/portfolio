var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

// -------------- serve static folders -------------- //

app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(express.json())
  
// -------------- middleware functions -------------- //

// -------------- bodyParser setup -------------- //

app.use(bodyParser.urlencoded({ extended: false})); 
app.use(bodyParser.json());


app.get('/', function(req,res) {
    res.sendFile(__dirname + "/html/home.html");
})

http.listen(process.env.PORT, process.env.IP);