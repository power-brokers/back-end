const express = require('express');
const queries = require('../db/queries.js');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/vendors', function (req, res) {

	queries.getAllVendors().then((entry, err) => {
		if(err) {
			throw (err);
		}

		console.log('get request to vendors returned: ', entry);
  	res.send(entry);
	});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));