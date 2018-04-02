var express = require('express');
var router = express.Router();
const { Client } = require('pg');

router.post('/cadastrar', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {nome: req.body.nomeProfessor, matricula: req.body.matriculaProfessor, crefito: req.body.crefitoProfessor, email: req.body.emailProfessor, telefone: req.body.telefoneProfessor, especialidade: req.body.especialidadeProfessor};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("INSERT INTO PROFESSOR(matriculaProfessor, nomeProfessor, crefitoProfessor, emailProfessor, telefoneProfessor) values($1, $2, $3, $4, $5)", [data.nome, data.matricula, data.telefone, data.crefito, data.email]);         
    res.send({
      message: 'ok'
    });
  }); 
});

router.get('/listar', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  client.connect();  
  client.query('SELECT * from PROFESSOR order by NOMEPROFESSOR;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});
  

router.post('/excluir', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {idProfessor: req.body.idProfessor};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("DELETE FROM PROFESSOR WHERE idProfessor = $1", [data.idProfessor]);         
    res.send({
      message: 'ok'
    });
  }); 
});

router.post('/editar', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {nome: req.body.nomeProfessor, matricula: req.body.matriculaProfessor, telefone: req.body.telefoneProfessor, crefito: req.body.crefitoProfessor, email: req.body.emailProfessor, especialidade: req.body.especialidadeProfessor};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("update PROFESSOR set nomeProfessor = ($1), matriculaProfessor = ($2), emailProfessor = ($3), crefitoProfessor = ($4), telefoneProfessor = ($5) where idestagiario = ($6)", [data.nome, data.matricula, data.email, data.telefone, data.idEstagiario]);         
    res.send({
      message: 'ok'
    });
  }); 
});

module.exports = router;
