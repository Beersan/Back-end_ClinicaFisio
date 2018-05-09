var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

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
