var express = require('express');
var router = express.Router();
const { Client } = require('pg');

router.post('/cadastrar', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {descricaoGrupo: req.body.descricao};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("INSERT INTO grupo(descricaogrupo) values($1)", [data.descricaoGrupo]);         
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
    client.query('SELECT * from grupo order by descricaogrupo;', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });
    
  
  router.post('/excluir', function(req, res){ 
    const client = new Client({
      connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
      ssl: true,
    });
    const data = {idGrupo: req.body.idGrupo};
    
    client.connect((err, client, done) => {
      if(err){
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }    
      client.query("DELETE FROM grupo WHERE idgrupo = $1", [data.idGrupo]);         
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
    const data = {descricaoGrupo: req.body.descricaoGrupo, idGrupo: req.body.idGrupo};
    
    client.connect((err, client, done) => {
      if(err){
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }    
      client.query("update grupo set descricaogrupo = ($1) where idgrupo = ($2)", [data.descricaoGrupo, data.idGrupo]);         
      res.send({
        message: 'ok'
      });
    }); 
  });*/

  module.exports = router;