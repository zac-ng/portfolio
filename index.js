var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var nodemailer = require('nodemailer');

// -------------- serve static folders -------------- //

app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use(express.json())

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/html/home.html");
})

app.get('/test', function(req,res) {
    res.sendFile(__dirname + "/html/test.html");
})

app.get('/send_email' , function(req, res){
    
    console.log("SERVER CALLED")
    const name = req.query.name
    const email = req.query.email
    const message = req.query.message 
    const no_extension = req.query.name

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'portfolioemail5783@gmail.com',
            pass: 'nodemailer'
        }
    });

    var mailOptions = {
        from: 'portfolioemail5783@gmail.com',
        to: 'zncodebox@gmail.com',
        subject: 'Portfolio Website Message' + 'from' + name + 'at' + email,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send("1")
        } else {
            res.send("0")
        }
    });

})




http.listen(process.env.PORT, process.env.IP);
