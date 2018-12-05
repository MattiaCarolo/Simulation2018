
const express = require('express'),
bodyParser = require('body-parser'),
squares = require('./square.js');

const app = express();
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));

// a useless function that returns a fixed object. you can use it, if you want, for testing purposes
app.get('/count',function (req, res) {
    res.json({count: 3})
})

app.post('/square',(req,res) => {
    var string = req.query.string;
    let ris = square(string);
    return {
        "status": 200, 
        "result": {ris}
  }; 
});

app.listen(app.get('port'), function() {
console.log('Node app is running on port', app.get('port'));
});

function square(s){
    if(typeof s === "string" )
        return s*s;
    else
        return -1
}