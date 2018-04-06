var express = require('express');
var router = express.Router();
const { Client } = require('pg');

router.get('/listarestagiario', function(req, res, next) {
    const client = new Client({
      connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
      ssl: true,
    });
    client.connect();  
    client.query("SELECT idestagiario, nomeestagiario, 'false' AS checked from estagiario where idestagiario not in (select idestagiario from grupoestagiarios);", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.get('/listargrupo', function(req, res, next) {
    const client = new Client({
      connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
      ssl: true,
    });
    client.connect();  
    client.query('SELECT * from grupo where idgrupo not in (select idgrupo from grupoestagiarios) order by descricaogrupo;', (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.post('/cadastrar', function(req, res){ 
    
    const client = new Client({
      connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
      ssl: true,
    });

    /*this.dados = codigos;
    var text = JSON.stringify(this.dados);
    var obj = JSON.parse(text);
    this.grupo = obj.grupo;
    this.codEstagiarios = obj.codigos;

    console.log(this.grupo);
    console.log(this.codEstagiarios);*/


    const data = {grupo: req.body.grupo, codigos: req.body.codigos};
    
    //console.log(req.body.grupo);
    console.log(req.body.codigos);
       
    
    client.connect((err, client, done) => {
      if(err){
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      console.log(data.codigos.length);
      for (i = 0; i <= data.codigos.length; i++){
        console.log('estou aqui lalalala');
        client.query("INSERT INTO grupoestagiarios(idestagiario, idgrupo) values($1, $2)", [data.codigos[i], data.grupo]);         
        
      }
      res.send({
        message: 'ok'
      });
      
     
    }); 
  });

  
  module.exports = router;

  //where idestagiario not in (select idestagiario from grupoestagiarios)