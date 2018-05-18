var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 

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
    console.log(req.body);
    const data = {
        nomeProfessor : req.body.professor,
        descricaoDiaSemana : req.body.diaSemana,
        descricaoHoraInicio : req.body.horainicio,
        descricaoHoraFim : req.body.horafim
    };
    //console.log("valores " + professor, diaSemana, horainicio, horafim)
        client.query("insert into agendaprofessor (idprofessor, iddiasemana, idhorainicio, idhorafim) values (" + 
        "(select idprofessor from professor where nomeprofessor = ($1) and ativo = 1), " +
        "(select iddiasemana from diasemana where descricaosemana = ($2)), " +
        "(select idhorainicio from horainicio where descricaohorainicio = ($3)), " +
        "(select idhorafim from horafim where descricaohorafim = ($4)))"
        , [data.nomeProfessor, data.descricaoDiaSemana, data.descricaoHoraIniciohorainicio, data.descricaoHoraFim]);       
        res.send({
        message: 'ok'
    });
});
module.exports = router;