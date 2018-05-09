var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.post('/cadastrar', function(req, res){ 
 
  const data = {descricaoGrupo: req.body.descricao, semestre: req.body.semestre};
  client.query("INSERT INTO grupo(descricaogrupo, idsemestre) values($1, $2)", [data.descricaoGrupo, data.semestre]);         
    res.send({
      message: 'ok'
    });
});

router.get('/listar', function(req, res, next) {
     
    client.query('SELECT grupo.descricaogrupo, semestre.nomesemestre, grupo.idsemestre, grupo.idgrupo from grupo inner join semestre ON semestre.idsemestre = grupo.idsemestre order by descricaogrupo;', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });
    
  
  router.post('/excluir', function(req, res){ 
    
    const data = {idGrupo: req.body.idGrupo};
    client.query("DELETE FROM grupo WHERE idgrupo = $1", [data.idGrupo], (err, response) => {
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
    
    const data = {descricaoGrupo: req.body.descricao, idGrupo: req.body.idGrupo, semestre: req.body.semestre};
    
    client.query("update grupo set descricaogrupo = ($1), idsemestre = ($2) where idgrupo = ($3)", [data.descricaoGrupo, data.semestre, data.idGrupo]);         
    res.send({
      message: 'ok'
    });
  });

  router.get('/listarsemestre', function(req, res, next) {
    
    client.query('SELECT * from semestre order by nomesemestre;', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  module.exports = router;