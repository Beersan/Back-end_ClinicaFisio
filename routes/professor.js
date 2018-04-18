var express = require('express');
var router = express.Router();
const { Client } = require('pg');
var conn = require('./database');
var connectionString = conn.PG;

router.post('/cadastrar', function(req, res){ 
  const client = new Client({
    connectionString,
    ssl: true,
  });
  console.log(req.body)
  const data = {nome: req.body.nomeProfessor, matricula: req.body.matriculaProfessor, crefito: req.body.crefitoProfessor, email: req.body.emailProfessor, telefone: req.body.telefoneProfessor, especialidade: req.body.especialidadeProfessor};
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("INSERT INTO PROFESSOR(matriculaProfessor, nomeProfessor, crefitoProfessor, emailProfessor, telefoneProfessor, codigoespecialidade, ativo) values($1, $2, $3, $4, $5, $6, 1)", [data.matricula, data.nome, data.crefito, data.email, data.telefone, data.especialidade]);         
    res.send({
      message: 'ok'
    });
  }); 
});

router.get('/listar', function(req, res, next) {
  const client = new Client({
    connectionString,
    ssl: true,
  });
  client.connect();  
  client.query('select idprofessor, matriculaprofessor, nomeprofessor, crefitoprofessor, emailprofessor, telefoneprofessor, descricaoespecialidade, professor.codigoespecialidade from professor, especialidade where professor.codigoespecialidade = especialidade.codigoespecialidade and ativo = 1 order by nomeprofessor', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/excluir', function(req, res){ 
  const client = new Client({
    connectionString,
    ssl: true,
  });
  const data = {idprofessor: req.body.idProfessor};
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("update PROFESSOR set ativo = 0 where idprofessor = 61", [data.idprofessor]);         
    res.send({
      message: 'ok'
    });
  }); 
});

router.post('/editar', function(req, res){ 
  const client = new Client({
    connectionString,
    ssl: true,
  });
  const data = {idprofessor: req.body.idProfessor,  nome: req.body.nomeProfessor, matricula: req.body.matriculaProfessor, telefone: req.body.telefoneProfessor, crefito: req.body.crefitoProfessor, email: req.body.emailProfessor, especialidade: req.body.especialidadeProfessor};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("update PROFESSOR set nomeProfessor = ($1), matriculaProfessor = ($2), emailProfessor = ($3), crefitoProfessor = ($4), telefoneProfessor = ($5) where idprofessor = ($6)", [data.nome, data.matricula, data.email, data.crefito, data.telefone, data.idprofessor]);         
    res.send({
      message: 'ok'
    });
  }); 
});

router.get('/selecionar', function(req, res, next) {
  const client = new Client({
    connectionString,
    ssl: true,
  });
  const data = {nome: req.body.nomeProfessor}
  client.connect();  
  client.query('SELECT * from PROFESSOR where nomeprofessor = ($1) order by NOMEPROFESSOR;', [data.nome]);
    res.send(response.rows);
  });  

  router.get('/listarEspecialidade', function(req, res, next) {
    const client = new Client({
      connectionString,
      ssl: true,
    });
    client.connect();
    client.query('SELECT * from especialidade order by descricaoespecialidade', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });



  module.exports = router;

