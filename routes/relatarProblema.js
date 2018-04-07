var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/relatarProblema', function(req, res){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'no.reply.fisio@gmail.com',
      pass: 'fisiofisio'
    },
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

module.exports = router;
