var express = require('express');
var router = express.Router();
var client = require('./dbConnection'); 

router.get('/listarestagiario', function(req, res, next) {
    
    client.query("SELECT idestagiario, nomeestagiario, 'false' AS checked from estagiario where idestagiario not in (select idestagiario FROM grupoestagiarios) ORDER BY nomeestagiario ASC;", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.get('/listargrupo', function(req, res, next) {
    
    client.query('SELECT * from grupo where idgrupo not in (select idgrupo from grupoestagiarios) order by descricaogrupo;', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.get('/listarestagio', function(req, res, next) {
    
    client.query('SELECT * from estagio order by descricaoestagio;', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.post('/alterarestagio', function(req, res, next) {
    
    const data = {idgrupo: req.body.grupo};
    console.log(data.idgrupo);
    client.query('SELECT * from estagio es where idestagio not in (select idestagio from grupoestagiarios where idgrupo = $1 group by idestagio)  order by es.descricaoestagio',[data.idgrupo], (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });



  router.post('/cadastrar', function(req, res){ 
    
    const data = {grupo: req.body.grupo, codigos: req.body.codigos, estagio: req.body.estagio};
   
    client.query("DELETE FROM grupoestagiarios WHERE idgrupo = $1", [data.grupo]);         
    for (i = 0; i <= data.codigos.length; i++){
      client.query("INSERT INTO grupoestagiarios(idestagiario, idgrupo, idestagio) values($1, $2, $3)", [data.codigos[i], data.grupo, data.estagio]);         
    }
    res.send({
      message: 'ok'
    });  
  });

  router.post('/cadastrarnovoestagio', function(req, res){ 
    
    const data = {grupo: req.body.grupo, codigos: req.body.estagiarios, estagio: req.body.estagio};
    //client.query("DELETE FROM grupoestagiarios WHERE idgrupo = $1", [data.grupo]);   
    console.log(data.grupo)
    console.log(data.estagio)
    console.log(data.codigos)

    /*for (i = 0; i <= data.codigos.length; i++){
      client.query("INSERT INTO grupoestagiarios(idestagiario, idgrupo, idestagio) values($1, $2, $3)", [data.codigos[i], data.grupo, data.estagio]);         
    }*/
    res.send({
      message: 'ok'
    });  
  });

  router.get('/listargrupoestagiario', function(req, res, next) {
      
    client.query("SELECT G.idgrupo, est.idestagio, G.descricaogrupo, est.descricaoestagio, string_agg(E.nomeestagiario, ', ') as nomes FROM grupoestagiarios GE INNER JOIN estagiario E ON E.idestagiario = GE.idestagiario INNER JOIN grupo G ON G.idgrupo = GE.idgrupo INNER JOIN estagio est on est.idestagio = GE.idestagio GROUP BY G.idgrupo, est.idestagio", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.get('/listargrupoestagiariocomid', function(req, res, next) {
      
    client.query("SELECT G.idgrupo, est.idestagio, G.descricaogrupo, est.descricaoestagio, E.idestagiario, string_agg(E.nomeestagiario, ', ') as nomes FROM grupoestagiarios GE INNER JOIN estagiario E ON E.idestagiario = GE.idestagiario INNER JOIN grupo G ON G.idgrupo = GE.idgrupo INNER JOIN estagio est on est.idestagio = GE.idestagio GROUP BY G.idgrupo, est.idestagio, E.idestagiario", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.post('/excluir', function(req, res){ 
    const data = {idGrupo: req.body.idgrupo};

    client.query("DELETE FROM grupoestagiarios WHERE idgrupo = $1", [data.idGrupo]);         
      res.send({
        message: 'ok'
      });
  });

  router.post('/listarestagiarioseditar', function(req, res){ 
    const data = {idgrupo: req.body.idGrupo};
    client.query(" SELECT grupoestagiarios.idestagiario, nomeestagiario, 'true' AS checked" 
                + "    FROM grupoestagiarios"
                + "      INNER JOIN estagiario ON estagiario.idestagiario = grupoestagiarios.idestagiario "
                + "    WHERE grupoestagiarios.idgrupo = $1"
                + "  UNION "
                + "  SELECT idestagiario, nomeestagiario, 'false' AS checked "
                + "     FROM estagiario"
                + "     WHERE idestagiario not in (select idestagiario from grupoestagiarios)"
                + "  ORDER BY nomeestagiario", [data.idgrupo], (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });        
  });
  
  module.exports = router;


  /*router.post('/listarprofessor', function(req, res, next) {
    var query;
    var data = {idprofessor: req.body.professor};
    console.log(req.body);
    if (data.idprofessor != "" && data.idprofessor != null){
      client.query('SELECT * from professor where (idprofessor not in (select idprofessor from grupoestagiarios ) OR idprofessor = $1) order by nomeprofessor', [data.idprofessor], (err, response) => {
        if (err) throw err;
        res.send(response.rows);
      });   
    } else {
      console.log("teste");
      client.query('SELECT * from professor where idprofessor not in (select idprofessor from grupoestagiarios ) order by nomeprofessor', (err, response) => {
        if (err) throw err;
        res.send(response.rows);
      });
    }
  });*/