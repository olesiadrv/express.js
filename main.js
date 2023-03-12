const express = require('express');
const app = express();
const port = 3000;


// task 2
app.get('/', function(req, res){
    res.send('Hello');
});


// task 3
app.get('/about', function(req, res){
res.send('<h2><i>Darvai Olesia</i></h2>');
});


// task 4
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send('Error');
});


// task *
const fs = require ('fs');
app.get ('/aboutMe', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, html) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error');
          }
          res.send (html);
    });
});


// // task **
app.use (express.static('image'));
app.get ('/png', (req, res) => {
    res.sendFile(__dirname + '/image/index.html');
});


app.listen(port, function(){
    console.log('running');
});