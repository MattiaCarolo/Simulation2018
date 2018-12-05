const url = 'https://simulation2018.herokuapp.com/sqaure?string=1';
const https = require('https');
var fetch = require('node-fetch');

test('Trying to connect to the server', () => {

	fetch('http://localhost:5000/square?string=3')
        .then(res => res.json())
        .then(json => expect(json.results).toEqual(9));
});