var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	const { Client } = require('pg');

	const client = new Client({
	  connectionString: process.env.DATABASE_URL,
	  ssl: true,
	});

	client.connect();

	client.query('SELECT * from teste;', (err, res) => {
	  if (err) throw err;
	  for (let row of res.rows) {
		console.log(JSON.stringify(row));
	  }
	  client.end();
	});	
	res.render('index', { title: 'Express' });
});

module.exports = router;

