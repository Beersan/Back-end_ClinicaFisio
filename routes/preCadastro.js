var express = require('express');
var router = express.Router();
const { Client } = require('pg');

router.get('/listarEspecialidade', function(req, res, next) {
    const client = new Client({
      connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
      ssl: true,
    });
    client.connect();  
    client.query('SELECT * from especialidade;', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });
  
  module.exports = router;