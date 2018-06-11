var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.post('/cadastrar', function(req, res){ 
  
  const data = {nome: req.body.nomeEstagiario, matricula: req.body.numeroMatricula, email: req.body.email, telefone: req.body.telefone};
  
  client.query("INSERT INTO estagiario(nomeestagiario, matriculaestagiario, emailestagiario, telefoneestagiario, idsemestre) values($1, $2, $3, $4, (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1))", [data.nome, data.matricula, data.email, data.telefone]);         
    res.send({
      message: 'ok'
    });
   
});

router.get('/listar', function(req, res, next) {
   
  client.query('SELECT * from estagiario where estagiario.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) order by nomeestagiario;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});  

router.post('/excluir', function(req, res){ 
  
  const data = {idEstagiario: req.body.idEstagiario};
  
  client.query("DELETE FROM estagiario WHERE idestagiario = $1", [data.idEstagiario], (err, response) => {
    var msg = "ok";
    if(err != null){  
      msg = "erro";
    }
    res.send({
      message: msg
    });
  });         
});

router.post('/editar', function(req, res){ 
  
  const data = {nome: req.body.nomeEstagiario, matricula: req.body.numeroMatricula, email: req.body.email, telefone: req.body.telefone, idEstagiario: req.body.idEstagiario};
  
  client.query("update estagiario set nomeestagiario = ($1), matriculaestagiario = ($2), emailestagiario = ($3), telefoneestagiario = ($4) where idestagiario = ($5)", [data.nome, data.matricula, data.email, data.telefone, data.idEstagiario]);         
  res.send({
    message: 'ok'
  });  
});

module.exports = router;
