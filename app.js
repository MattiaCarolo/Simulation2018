
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));

// a useless function that returns a fixed object. you can use it, if you want, for testing purposes
app.get('/count',function (req, res) {
    res.json({count: 3})
})

app.get('/square',(req,res) => {
    res.setHeader('content-type', 'application/json');
    var response = {results: null};
    if(req.query.string!=null){
        var string = req.query.string;
        let ris = square(string);
        response.results = ris;
        res.json(response)
    }
    else{
        response.results = -1;
        res.json(response)
    }
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