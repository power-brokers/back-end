const express = require('express');
const queries = require('../db/queries.js');

const app = express();

const port = process.env.PORT || 8000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/vendors', function (req, res) {

	queries.getAllVendors().then((entry, err) => {
		if(err) {
			throw (err);
		}

		console.log('get request to vendors returned: ', entry);
  	res.send(entry);
	});


})

app.listen(port, () => console.log('power-brokers api is up and running on port ' + port));