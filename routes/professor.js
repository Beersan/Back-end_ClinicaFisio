var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

//Cadastrar Professor 

router.post('/cadastrar', function(req, res){ 
  const data = {
    nome: req.body.nomeProfessor, 
    matricula: req.body.matriculaProfessor, 
    crefito: req.body.crefitoProfessor, 
    email: req.body.emailProfessor, 
    telefone: req.body.telefone, 
    especialidade: req.body.especialidade,
    estagio: req.body.estagio,
  };
  client.query("INSERT INTO PROFESSOR(matriculaProfessor, nomeProfessor, crefitoProfessor, emailProfessor, telefoneProfessor, codigoespecialidade, ativo, idestagio, idsemestre) values ($1, $2, $3, $4, $5, $6, 1, $7, (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1))", [data.matricula, data.nome, data.crefito, data.email, data.telefone, data.especialidade, data.estagio]);         
  res.send({
    message: 'ok'
  });
});

//Listar Professor

router.get('/listar', function(req, res, next) { 
  client.query('select idprofessor, matriculaprofessor, nomeprofessor, crefitoprofessor, emailprofessor, telefoneprofessor, descricaoestagio, descricaoespecialidade, professor.codigoespecialidade, professor.idestagio from professor, especialidade, estagio where professor.codigoespecialidade = especialidade.codigoespecialidade and professor.idestagio = estagio.idestagio and ativo = 1 AND professor.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) order by nomeprofessor', (err, response) => {
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
  const data = {
    idprofessor: req.body.idProfessor,
    nome: req.body.nomeProfessor,
    matricula: req.body.matriculaProfessor, 
    crefito: req.body.crefitoProfessor, 
    email: req.body.emailProfessor,
    telefone: req.body.telefone,
    especialidade: req.body.especialidade,
    estagio: req.body.estagio,
  };
  client.query("update PROFESSOR set nomeProfessor = ($1), matriculaProfessor = ($2), telefoneProfessor = ($3), crefitoProfessor = ($4), emailProfessor = ($5), codigoEspecialidade = ($6), idestagio = ($7) where idprofessor = ($8)", [data.nome, data.matricula, data.telefone, data.crefito, data.email, data.especialidade, data.estagio, data.idprofessor]);         
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


router.get('/listarEstagio', function(req, res, next) {
  client.query('SELECT * from estagio order by descricaoestagio', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/agenda', function(req, res){
    const data = {
      idProfessor: req.body.idProfessor
    };
    client.query(
      'select professor.nomeprofessor, diasemana.descricaosemana, horainicio.descricaohorainicio, horafim.descricaohorafim from '+
      'professor, diasemana, horainicio, horafim, agendaprofessor ' +
      'where ' +
      'agendaprofessor.idprofessor = professor.idprofessor and ' +
      'agendaprofessor.idhorainicio = horainicio.idhorainicio and ' +
      'agendaprofessor.idhorafim = horafim.idhorafim and ' +
      'agendaprofessor.iddiasemana = diasemana.iddiasemana and '+
      'agendaprofessor.idprofessor = $1'
      ,[data.idProfessor], (err, response) => {
        if (err) throw err;
        res.send(response.rows);
      });          
    });
  
module.exports = router;



