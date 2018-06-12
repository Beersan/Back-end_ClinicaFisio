var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var client = require('./dbConnection');


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
    subject: "OUVIDORIA CLÍNICA FISIOTERAPIA - " + data.assuntoProblema,
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
