var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.post('/cadastrar', function(req, res){ 
 
  const data = {descricaoGrupo: req.body.descricao, semestre: req.body.semestre};
  client.query("INSERT INTO grupo(descricaogrupo, idsemestre) values($1, (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1))", [data.descricaoGrupo]);         
    res.send({
      message: 'ok'
    });
});

router.get('/listar', function(req, res, next) {     
  client.query('SELECT grupo.descricaogrupo, grupo.idgrupo from grupo where grupo.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) order by descricaogrupo;', (err, response) => {
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
  const data = {descricaoGrupo: req.body.descricao, idGrupo: req.body.idGrupo};  
  client.query("update grupo set descricaogrupo = ($1) where idgrupo = ($2)", [data.descricaoGrupo, data.idGrupo]);         
  res.send({
    message: 'ok'
  });
});

module.exports = router;