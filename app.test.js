const url = 'http://localhost:5000/square?string=34';
const https = require('http');


test('Trying to connect to the server', () => {

	https.get(url, (res) => {

	    res.on('data', (d) => {
			expect(Number(d)).toEqual(1);
		});
	});

});