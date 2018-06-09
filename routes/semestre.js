var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.post('/cadastrar', function(req, res){ 
  const data = {nome: req.body.nomeSemestre, dataInicio: req.body.dataInicioSemestre, dataFim: req.body.dataFimSemestre};
  
  client.query('SELECT CASE WHEN ativo = 1 THEN 0 ELSE 1 END AS ativo FROM semestre ORDER BY ativo DESC LIMIT 1;', (err, response) => {
    var ativo;
    if (err) throw err;
    console.log(response.rows);
    if (response.rows[0] == null || response.rows[0] == ''){
      ativo = "1";  
    } else {
      ativo = response.rows[0].ativo;
    }
    client.query("INSERT INTO semestre(nomesemestre, datainiciosemestre, datafimsemestre, ativo) values($1, $2, $3, $4)", [data.nome, data.dataInicio, data.dataFim, ativo]);         
    res.send({
      message: 'ok'
    });
  });      
});

router.post('/alterarstatus', function(req, res){ 
  
  const data = {idSemestre: req.body.idSemestre};
  
  client.query("update semestre set ativo = 0 where idsemestre = (select idsemestre from semestre where ativo = 1)", (err, response) => {
    client.query("update semestre set ativo = (select case when ativo = 1 then 0 else 1 end from semestre where idsemestre = $1) where idsemestre = $2", [data.idSemestre, data.idSemestre]);         
    res.send({
      message: 'ok'
    });
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
