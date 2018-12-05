const url = 'https://simulation2018.herokuapp.com/square?string=1';
const https = require('https');
var fetch = require('node-fetch');

test('Trying to connect to the server', () => {

	fetch('https://simulation2018.herokuapp.com/square?string=1')
        .then(res => res.json())
        .then(json => expect(json.results).toEqual(9));
});

test('Wrong type', () => {

	fetch('https://simulation2018.herokuapp.com/square?strdfing=1')
        .then(res => res.json())
        .then(json => expect(json.results).toEqual(-1));
});

test('No argument', () => {

	fetch('https://simulation2018.herokuapp.com/square?string=')
        .then(res => res.json())
        .then(json => expect(json.results).toEqual(0));
});