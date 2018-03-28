var express = require('express');
var router = express.Router();
const results = [];

const { Client } = require('pg');
/*const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});*/

router.post('/relatarProblema', function(req, res){

  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });

  const data = {problema: req.body.descricaoProblema};

  //console.log('teste' + JSON.stringify(data));

  client.connect((err, client, done) => {
    if(err){
      //done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query("INSERT INTO relatarproblema(descricaoproblema) values($1)", [data.descricaoProblema]);
    //client.end();

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

  client.query('SELECT * from estagiario;', (err, response) => {
    if (err) throw err;

    res.send(response.rows);

//    client.end();
  });

});*/

module.exports = router;
