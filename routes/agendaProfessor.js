var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.get('/listarProfessor', function (req, res){
    client.query("select idprofessor, nomeprofessor from professor, especialidade where professor.codigoespecialidade = especialidade.codigoespecialidade and ativo = 1 order by nomeprofessor"  , (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});

router.get('/listarDiaSemana', function(req, res){
    client.query("select * from diasemana", (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});

router.get('/listarHoraInicio', function(req, res){
    client.query("select * from horainicio", (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});

router.get('/listarHoraFim', function (req, res){
    client.query('select * from horafim', (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});

router.post('/inserirAgenda', function (req, res){
    const data = {
        professor : req.body.idprofessor,
        dia : req.body.diaSemana,
        horaInicio : req.body.horaInicio,
        horaFim : req.body.horaFim
    };
    console.log(data);
    for (i = 0; i <= data.dia.length; i++){
      client.query("INSERT INTO agendaprofessor (idprofessor, iddiasemana, idhorainicio, idhorafim) VALUES ($1,$2,$3,$4)", 
      [data.professor, data.dia[i], data.horaInicio[i], data.horaFim[i]]);
    }
    res.send({message: 'ok'});
});
module.exports = router;