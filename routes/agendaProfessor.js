var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 

/*router.post('/cadastrar', function(req, res){ 
    const data = {nome: req.body.nomeProfessor, matricula: req.body.matriculaProfessor, crefito: req.body.crefitoProfessor, email: req.body.emailProfessor, telefone: req.body.telefone, especialidade: req.body.especialidade};
    client.query("INSERT INTO PROFESSOR(matriculaProfessor, nomeProfessor, crefitoProfessor, emailProfessor, telefoneProfessor, codigoespecialidade, ativo) values($1, $2, $3, $4, $5, $6, 1)", [data.matricula, data.nome, data.crefito, data.email, data.telefone, data.especialidade]);         
    res.send({
      message: 'ok'
    });
  
  });
  router.get('/listar', function(req, res, next) { 
  client.query('select idprofessor, matriculaprofessor, nomeprofessor, crefitoprofessor, emailprofessor, telefoneprofessor, descricaoespecialidade, professor.codigoespecialidade from professor, especialidade where professor.codigoespecialidade = especialidade.codigoespecialidade and ativo = 1 order by nomeprofessor', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});*/

/*select nomeprofessor, descricaosemana, descricaohorainicio, descricaohorafim from
agendaprofessor, professor, horafim, horainicio, diasemana
where 
agendaprofessor.idprofessor = professor.idprofessor and
agendaprofessor.iddiasemana = diasemana.iddiasemana and
agendaprofessor.idhorainicio = horainicio.idhorainicio and
agendaprofessor.idhorafim = horafim.idhorafim*/

router.get('/listarHorarios', function (req, res){
    client.query("select nomeprofessor, descricaosemana, descricaohorainicio, descricaohorafim from " +
        "agendaprofessor, professor, horafim, horainicio, diasemana " +
        "where " +
        "agendaprofessor.idprofessor = professor.idprofessor and " + 
        "agendaprofessor.iddiasemana = diasemana.iddiasemana and " +
        "agendaprofessor.idhorainicio = horainicio.idhorainicio and " +
        "agendaprofessor.idhorafim = horafim.idhorafim" , (err, response) => {if (err) throw err;
            res.send(response.rows);
    });          
});

router.get('/listarProfessor', function (req, res){
    client.query("select nomeprofessor from agendaprofessor, professor where agendaprofessor.idprofessor = professor.idprofessor"  , (err, response) => {if (err) throw err;
        res.send(response.rows);
    });          
});