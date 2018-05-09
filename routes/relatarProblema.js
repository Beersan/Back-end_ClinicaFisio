var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 


router.post('/relatarProblema', function(req, res){
  const data = {assuntoProblema: req.body.assuntoProblema, descricaoProblema: req.body.descricaoProblema};
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'no.reply.fisio@gmail.com',
      pass: 'fisiofisio'
    },
    tls: { rejectUnauthorized: false }
  });
  
  var mailOptions = {
    from: 'no.reply.fisio@gmail.com',
    //e-mail da muié / das molieres..
    to: 'danconte72@gmail.com',
    subject: "OUVIDORIA CLÝNICA FISIOTERAPIA - " + data.assuntoProblema,
    text: data.descricaoProblema
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
   
  client.query("INSERT INTO problema(assuntoproblema, descricaoproblema) values($1, $2)", [data.assuntoProblema, data.descricaoProblema], (err,response)=> {
    res.send({message: 'ok'});
  });
});

module.exports = router;
