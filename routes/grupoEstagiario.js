var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 

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

  router.post('/listarprofessor', function(req, res, next) {
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
  });

  router.post('/cadastrar', function(req, res){ 
    
    const data = {grupo: req.body.grupo, codigos: req.body.codigos, professor: req.body.professor};
   
    client.query("DELETE FROM grupoestagiarios WHERE idgrupo = $1", [data.grupo]);         
    for (i = 0; i <= data.codigos.length; i++){
      client.query("INSERT INTO grupoestagiarios(idestagiario, idgrupo, idprofessor) values($1, $2, $3)", [data.codigos[i], data.grupo, data.professor]);         
    }
    res.send({
      message: 'ok'
    });  
  });

  router.get('/listargrupoestagiario', function(req, res, next) {
      
    client.query("SELECT G.idgrupo, P.idprofessor, G.descricaogrupo, P.nomeprofessor, string_agg(E.nomeestagiario, ', ') as nomes FROM grupoestagiarios GE INNER JOIN estagiario E ON E.idestagiario = GE.idestagiario INNER JOIN grupo G ON G.idgrupo = GE.idgrupo INNER JOIN professor P on P.idprofessor = GE.idprofessor GROUP BY G.idgrupo, P.idprofessor", (err, response) => {
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
