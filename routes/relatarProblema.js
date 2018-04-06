var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
//const { Client } = require('pg');

router.post('/relatarProblema', function(req, res){
  /*const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {descricaoProblema: req.body.descricaoProblema};

  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query("INSERT INTO problema(descricaoproblema) values($1)", [data.descricaoProblema]);
    res.send({
      message: 'ok'
    });
  });*/

  //NODEMAILER
  console.log("Teste nodemailer, funciona, definir se assim é um bom meio de o fazer")
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'no.reply.fisio@gmail.com',
      pass: 'fisiofisio'
    }
    /*host: "ec2-54-221-220-59.compute-1.amazonaws.com",
    port: 5432,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "no-reply@reclamacoes.com",
      pass: "herokuuu"
    }*/,
    tls: { rejectUnauthorized: false }
  });
  const data = {descricaoProblema: req.body.descricaoProblema};
  
  var mailOptions = {
    from: 'no.reply.fisio@gmail.com',
    to: 'daniel_bressan125@hotmail.com',
    subject: 'Reclamação!!',
    text: data.descricaoProblema
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
  res.send({
    message: 'ok'
  });

});

/*router.get('/listarProblemas', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  client.connect();
  client.query('SELECT * from problema order by idproblema;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });
});


router.post('/excluir', function(req, res){
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {idProblema: req.body.idpProblema};

  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query("DELETE FROM problema WHERE idproblema = $1", [data.idProblema]);
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
  const data = {nome: req.body.descricaoProblema};

  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query("UPDATE problema set descricaoproblema = ($1) where idproblema = ($5)", [data.descricaoProblema, data.idProblema]);
    res.send({
      message: 'ok'
    });
  });
});
*/
module.exports = router;
