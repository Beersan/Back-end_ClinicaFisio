var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {

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

router.get('/precadastro', function (req, res, next) {
	 response = {
		"nome_completo": "koe Silva",
 		"rg": "5.258.868",
 		"cpf": "077.066.859-55",
 		"data_nasc": "25/12/1994",
 		"renda_mensal": "5.000,00",
 		"endereco": "Ruasdjaslidhalsih",
 		"numero": "100",
 		"bairro": "Vila kurtz",
 		"cidade": "Cacador",
 		"contato1": "49988155536",
 		"contato2": "49984155536",
 		"encaminhamento_med": "sim",
		 "area_especialidade": "coluna"
		 
	};
	
 console.log(response);
 res.end(JSON.stringify(response));
});*/


module.exports = router;
