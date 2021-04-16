let express = require('express');

let app = express();

app.use('/test', function(req, res){
    console.log(req.body);
    res.send('Test Endpoint Success');
})
app.get('/home', (req, res) =>{
    //this will send back a file in the current directory (__dirname) followed by the path to the file we want to send
    res.sendFile(__dirname + '/static.html');
})

// app.post('/test', function(req, res){
//     console.log(req.body);
//     res.send('Test Post endpoint 2 success')
// });

app.post('/test', function(req, res){
        console.log(req.body);
        res.send('Test Post endpoint success')
    });


app.listen(8503, function(){
    console.log('Earballs is what we say to know you are working!');
});
