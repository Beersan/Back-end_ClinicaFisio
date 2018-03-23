var express = require('express');
var router = express.Router();
const results = [];


router.post('/', function(req, res){
 
  const { Client } = require('pg');
  const data = {nome: req.body.nomeEstagiario, matricula: req.body.numeroMatricula, email: req.body.email, telefone: req.body.telefone};
  
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  client.connect((err, client, done) => {
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    //console.log(data.matricula + "-  TESTE");
    
    client.query("INSERT INTO estagiario(nomeestagiario, matriculaestagiario, emailestagiario, telefoneestagiario) values($1, $2, $3, $4)", [data.nome, data.matricula, data.email, data.telefone]);  
      
    return "testeRetorno"
    /*query.on('row', (row) => {
        results.push(row);
    });*/

    // query.on('end', ()=>{
    //   done();
    //   return res.json(results);
    // });
  });
  
      
});
  
module.exports = router;
