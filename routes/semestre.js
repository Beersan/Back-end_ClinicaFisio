var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 

router.post('/cadastrar', function(req, res){ 
  
  const data = {nome: req.body.nomeSemestre, dataInicio: req.body.dataInicioSemestre, dataFim: req.body.dataFimSemestre};
  client.query("INSERT INTO semestre(nomesemestre, datainiciosemestre, datafimsemestre) values($1, $2, $3)", [data.nome, data.dataInicio, data.dataFim]);         
    res.send({
      message: 'ok'
    });
});

router.get('/listar', function(req, res, next) {
  
  client.query('SELECT * from semestre order by nomesemestre;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});  

router.post('/excluir', function(req, res){ 
  
  const data = {idSemestre: req.body.idSemestre};
  
  client.query("DELETE FROM semestre WHERE idsemestre = $1", [data.idSemestre]);         
    res.send({
      message: 'ok'
    });
});

router.post('/editar', function(req, res){ 
  
  const data = {nome: req.body.nomeSemestre, dataInicio: req.body.dataInicioSemestre, dataFim: req.body.dataFimSemestre, idSemestre: req.body.idSemestre};
  
  client.query("update semestre set nomesemestre = ($1), datainiciosemestre = ($2), datafimsemestre = ($3) where idsemestre = ($4)", [data.nome, data.dataInicio, data.dataFim, data.idSemestre]);         
  res.send({
    message: 'ok'
  });
});

module.exports = router;
