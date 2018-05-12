var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 

/*router.get('/listarHorarios', function (req, res){
    client.query("select nomeprofessor, descricaosemana, descricaohorainicio, descricaohorafim from " +
        "agendaprofessor, professor, horafim, horainicio, diasemana " +
        "where " +
        "agendaprofessor.idprofessor = professor.idprofessor and " + 
        "agendaprofessor.iddiasemana = diasemana.iddiasemana and " +
        "agendaprofessor.idhorainicio = horainicio.idhorainicio and " +
        "agendaprofessor.idhorafim = horafim.idhorafim" , (err, response) => {if (err) throw err;
            res.send(response.rows);
    });          
});*/

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
module.exports = router;