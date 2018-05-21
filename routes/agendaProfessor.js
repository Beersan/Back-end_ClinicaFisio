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
        idprofessor : req.body.idprofessor,
        descricaoDiaSemana : req.body.diaSemana,
        descricaoHoraInicio : req.body.horaInicio,
        descricaoHoraFim : req.body.horaFim
    };
    //console.log(data.descricaoDiaSemana[1]);
    //console.log("tamanho = " + data.descricaoDiaSemana.length);

    for(i = 0; i <= data.descricaoDiaSemana.length; i++){

        if(data.descricaoDiaSemana[i] == 'Segunda-Feira'){
            diaSemanaString = 1;
        }else if(data.descricaoDiaSemana[i] == 'Terça-Feira'){
            diaSemanaString = 2;
        }else if(data.descricaoDiaSemana[i] == 'Quarta-Feira'){
            diaSemanaString = 3;
        }else if(data.descricaoDiaSemana[i] == 'Quinta-Feira'){
            diaSemanaString = 4;
        }else if(data.descricaoDiaSemana[i] == 'Sexta-Feira'){
            diaSemanaString = 5;
        }

            console.log(data.descricaoDiaSemana[i]);
            console.log(data.descricaoDiaSemana.length);

        client.query("insert into agendaprofessor (idprofessor, iddiasemana, idhorainicio, idhorafim) values ($1, $2," + 
            "(select idhorainicio from horainicio where descricaohorainicio = ($3)), " +
            "(select idhorafim from horafim where descricaohorafim = ($4)))"
            ,[data.idprofessor, diaSemanaString, data.descricaoHoraInicio[i], data.descricaoHoraFim[i]]);
        res.send({
            message: 'ok'
        });   
    }
});
module.exports = router;