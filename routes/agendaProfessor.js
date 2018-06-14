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
    
    client.query("DELETE FROM agendaprofessor WHERE idprofessor = $1", [data.idprofessor], (err, response) => {
        for(i = 0; i <= data.descricaoDiaSemana.length -1; i++){
            client.query("insert into agendaprofessor (idprofessor, iddiasemana, idperiodo, idhorainicio, idhorafim) values ($1, " + 
                "(select iddiasemana from diasemana where descricaosemana = ($2))," +
                "(select idperiodo from periodo where descricaoperiodo = ($3))," +
                "(select idhorainicio from horainicio where descricaohorainicio = ($4)), " +
                "(select idhorafim from horafim where descricaohorafim = ($5)))"
                ,[data.idprofessor, data.descricaoDiaSemana[i], data.descperiodo[i], data.descricaoHoraInicio[i], data.descricaoHoraFim[i]]);
        }
        res.send({
            message: 'ok'
        });
    });
    
});
router.post('/listarAgenda', function (req, res, next){
    const data ={
        idprofessor: req.body.idprofessor
    }
    client.query('select idagendaprofessor, professor.nomeprofessor, diasemana.descricaosemana, horainicio.descricaohorainicio, horafim.descricaohorafim, periodo.descricaoperiodo ' + 
        'from agendaprofessor, professor, diasemana, horainicio, horafim, periodo ' + 
        'where ' +
        'agendaprofessor.idprofessor = professor.idprofessor and ' + 
        'agendaprofessor.iddiasemana = diasemana.iddiasemana and ' +
        'agendaprofessor.idhorainicio = horainicio.idhorainicio and ' +
        'agendaprofessor.idhorafim = horafim.idhorafim and ' +
        'agendaprofessor.idperiodo = periodo.idperiodo and ' +
        'professor.idprofessor  = ($1)', [data.idprofessor], 
        (err, response) => {if (err) throw err;
            res.send(response.rows);
        });          
    });

module.exports = router;