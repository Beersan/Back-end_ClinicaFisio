var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

//Cadastrar Professor 

router.post('/cadastrar', function(req, res){ 
  const data = {nome: req.body.nomeProfessor, matricula: req.body.matriculaProfessor, crefito: req.body.crefitoProfessor, email: req.body.emailProfessor, telefone: req.body.telefone, especialidade: req.body.especialidade};
  client.query("INSERT INTO PROFESSOR(matriculaProfessor, nomeProfessor, crefitoProfessor, emailProfessor, telefoneProfessor, codigoespecialidade, ativo) values($1, $2, $3, $4, $5, $6, 1)", [data.matricula, data.nome, data.crefito, data.email, data.telefone, data.especialidade]);         
  res.send({
    message: 'ok'
  });

});

//Listar Professor

router.get('/listar', function(req, res, next) { 
  client.query('select idprofessor, matriculaprofessor, nomeprofessor, crefitoprofessor, emailprofessor, telefoneprofessor, descricaoespecialidade, professor.codigoespecialidade from professor, especialidade where professor.codigoespecialidade = especialidade.codigoespecialidade and ativo = 1 order by nomeprofessor', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

//Excluir Professor

router.post('/excluir', function(req, res){
  const data = {idprofessor: req.body.idProfessor};
  client.query("update PROFESSOR set ativo = 0 where idprofessor = $1", [data.idprofessor]);
  res.send({
    message: 'ok'
  });
});

//Editar Professor

router.post('/editar', function(req, res){ 
  const data = {idprofessor: req.body.idProfessor,  nome: req.body.nomeProfessor, matricula: req.body.matriculaProfessor, telefone: req.body.telefoneProfessor, crefito: req.body.crefitoProfessor, email: req.body.emailProfessor, especialidade: req.body.especialidadeProfessor};
  client.query("update PROFESSOR set nomeProfessor = ($1), matriculaProfessor = ($2), emailProfessor = ($3), crefitoProfessor = ($4), telefoneProfessor = ($5) where idprofessor = ($6)", [data.nome, data.matricula, data.email, data.crefito, data.telefone, data.idprofessor]);         
  res.send({
    message: 'ok'
  });
});

//Selecionar Professor

router.get('/selecionar', function(req, res, next) {
  const data = {nome: req.body.nomeProfessor};
  client.query('SELECT * from PROFESSOR where nomeprofessor = ($1) order by NOMEPROFESSOR;', [data.nome]);
  res.send(response.rows);
});

//Listar Especialidade

router.get('/listarEspecialidade', function(req, res, next) {
  client.query('SELECT * from especialidade order by descricaoespecialidade', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});



module.exports = router;



