var express = require('express');
var router = express.Router();
var client = require('./dbConnection');
var diaSemanaString;
var diaSemanaArray;
var descricaoHoraInicioArray;
var descricaoHoraFimArray;

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
    client.query("select * from horainicio order by descricaohorainicio ASC", (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});

router.get('/listarHoraFim', function (req, res){
    client.query('select * from horafim order by descricaohorafim ASC', (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});

router.get('/listarPeriodo', function (req, res){
    client.query('select * from periodo', (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});

router.post('/inserirAgenda', function (req, res, next){
    const data = {
        idprofessor : req.body.idprofessor,
        descricaoDiaSemana : req.body.diaSemana,
        descperiodo : req.body.periodo,
        descricaoHoraInicio : req.body.horaInicio,
        descricaoHoraFim : req.body.horaFim,
    };
    for(i = 0; i <= data.descricaoDiaSemana.length -1; i++){

        /*if(data.descricaoDiaSemana[i] == 'Segunda-Feira'){
            diaSemanaString = 1;
        }else if(data.descricaoDiaSemana[i] == 'Terça-Feira'){
            diaSemanaString = 2;
        }else if(data.descricaoDiaSemana[i] == 'Quarta-Feira'){
            diaSemanaString = 3;
        }else if(data.descricaoDiaSemana[i] == 'Quinta-Feira'){
            diaSemanaString = 4;
        }else if(data.descricaoDiaSemana[i] == 'Sexta-Feira'){
            diaSemanaString = 5;
        }*/
        client.query("insert into agendaprofessor (idprofessor, iddiasemana, idperiodo, idhorainicio, idhorafim) values ($1, " + 
            "(select iddiasemana from diasemana where descricaosemana = ($2))," +
            "(select idperiodo from periodo where descricaoperiodo = ($3))," +
            "(select idhorainicio from horainicio where descricaohorainicio = ($4)), " +
            "(select idhorafim from horafim where descricaohorafim = ($5)))"
            ,[data.idprofessor, /*diaSemanaString*/data.descricaoDiaSemana[i], data.descperiodo[i], data.descricaoHoraInicio[i], data.descricaoHoraFim[i]]);
    }
    res.send({
        message: 'ok'
    });
});

module.exports = router;