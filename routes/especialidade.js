var express = require('express');
var router = express.Router();
const results = [];

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});

router.post('/cadastrar', function(req, res){

  const data = {descricaoEspecialidade: req.body.descricaoEspecialidade};

  client.connect((err, client, done) => {
    /*if(err){
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }*/
    console.log(data.descricaoEspecialidade);

    client.query("INSERT INTO especialidade(descricaoespecialidade) values($1)", [data.descricaoEspecialidade]);

    res.send({
      message: 'Agora vai da certo'
    });
    /*query.on('row', (row) => {
        results.push(row);
    });*/

    // query.on('end', ()=>{
    //   done();
    //   return res.json(results);
    // });
  });
/*

router.get('/listar', function(req, res, next) {

  client.connect();

  client.query('SELECT * from estagiario;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);

    client.end();

  });

*/
});

module.exports = router;


/*
    res.rows.forEach(row=>{
      console.log(row);
    });
    await client.end();
    query.on('row', (row) => {
      results.push(row);
      console.log("1");
    });
    console.log("2");
    query.on('end', ()=>{
      done();
      return res.json(results);
      console.log("3");
    });*/
