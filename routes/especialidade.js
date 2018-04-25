var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 

router.post('/cadastrar', function(req, res){
  const data = {descricaoespecialidade: req.body.descricaoEspecialidade};
  
  client.query("INSERT INTO especialidade(descricaoespecialidade) values($1)", [data.descricaoespecialidade], (err,response)=> {
    res.send({message: 'ok'});
  });
});

router.get('/listar', function(req, res, next) {
  client.query('SELECT * from especialidade order by descricaoespecialidade;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });
});

router.post('/excluir', function(req, res){
  const data = {codigoEspecialidade: req.body.codigoEspecialidade};

  client.query("DELETE FROM especialidade WHERE codigoespecialidade = $1", [data.codigoEspecialidade], (err,response)=> {
    res.send({message: 'ok'});
  });
});

router.post('/editar', function(req, res){
  const data = {codigoespecialidade: req.body.codigoEspecialidade, descricaoespecialidade: req.body.descricaoEspecialidade};

  client.query("UPDATE especialidade SET descricaoespecialidade = ($2) where codigoespecialidade = ($1)", [data.codigoespecialidade, data.descricaoespecialidade], (err,response)=> {
    res.send({message: 'ok'});
  });
});

module.exports = router;
