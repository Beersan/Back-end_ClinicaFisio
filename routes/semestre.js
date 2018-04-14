var express = require('express');
var router = express.Router();
const { Client } = require('pg');

router.post('/cadastrar', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {nome: req.body.nomeSemestre, dataInicio: req.body.dataInicioSemestre, dataFim: req.body.dataFimSemestre};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("INSERT INTO semestre(nomesemestre, datainiciosemestre, datafimsemestre) values($1, $2, $3)", [data.nome, data.dataInicio, data.dataFim]);         
    res.send({
      message: 'ok'
    });
  }); 
});

/*router.get('/listar', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  client.connect();  
  client.query('SELECT * from estagiario order by nomeestagiario;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});
  

router.post('/excluir', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {idEstagiario: req.body.idEstagiario};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("DELETE FROM estagiario WHERE idestagiario = $1", [data.idEstagiario]);         
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
  const data = {nome: req.body.nomeEstagiario, matricula: req.body.numeroMatricula, email: req.body.email, telefone: req.body.telefone, idEstagiario: req.body.idEstagiario};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("update estagiario set nomeestagiario = ($1), matriculaestagiario = ($2), emailestagiario = ($3), telefoneestagiario = ($4) where idestagiario = ($5)", [data.nome, data.matricula, data.email, data.telefone, data.idEstagiario]);         
    res.send({
      message: 'ok'
    });
  }); 
});*/

module.exports = router;
