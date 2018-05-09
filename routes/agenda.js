var express = require('express');
var router = express.Router();
const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
//client.connect();

router.get('/listarpaciente', function(req, res, next) {
    
    client.query("SELECT idpaciente, nomepaciente FROM paciente WHERE idpaciente NOT IN (SELECT idpaciente FROM agenda) AND aprovado = 1 ORDER BY nomepaciente;", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.get('/listardia', function(req, res, next) {
    
    client.query("SELECT iddiasemana, descricaosemana from diasemana ORDER BY iddiasemana;", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.get('/listarhorario', function(req, res, next) {
    
    client.query("SELECT idhorainicio, descricaohorainicio from horainicio ORDER BY idhorainicio;", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

router.post('/cadastrar', function(req, res){ 
  
  const data = {idpaciente: req.body.paciente, iddiasemana: req.body.dia, idhorainicio: req.body.horario, numerosessoes: req.body.numeroSessoes, datainicio: req.body.dataInicioAtendimento};
  
    console.log(data);

  client.query("INSERT INTO agenda(idpaciente, iddiasemana, idhorainicio, numerosessoes, datainicio) values($1, $2, $3, $4, $5)", [data.idpaciente, data.iddiasemana, data.idhorainicio, data.numerosessoes, data.datainicio]);         
    res.send({
      message: 'ok'
    });
   
});



router.get('/listar', function(req, res, next) {
   
  client.query('SELECT p.nomepaciente, ds.descricaosemana, hi.descricaohorainicio, numerosessoes, datainicio FROM agenda ag INNER JOIN paciente P on p.idpaciente = ag.idpaciente INNER JOIN diasemana ds on ds.iddiasemana = ag.iddiasemana INNER JOIN horainicio hi on hi.idhorainicio = ag.idhorainicio ORDER BY p.nomepaciente', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});
  /*

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
});*/

module.exports = router;
