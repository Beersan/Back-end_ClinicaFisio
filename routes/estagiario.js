var express = require('express');
var router = express.Router();




router.post('/', function(req, res){
  //res.send({
    //message: 'Welcome, friend!'
    //req.body.estagiaro
  //});
  /*const { Client } = require('pg');

  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });

  client.connect();
  client.query("INSERT INTO estagiario(nome, matricula, email, telefone) values($1, $2, $3, $4)", ['Anand', 'Karthik'])*/
  
  res.send(req.body);
  
      
});
//res.render('index', { title: 'Estagiario' });


  
module.exports = router;

