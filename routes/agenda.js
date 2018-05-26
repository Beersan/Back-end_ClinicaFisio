var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.get('/listarpaciente', function(req, res, next) {    
  client.query("SELECT  P.idpaciente, P.nomepaciente"
                + " FROM paciente P "
                + " INNER JOIN estagiariopacientes ep on ep.idpaciente = P.idpaciente  "
                + " WHERE P.idpaciente NOT IN (SELECT idpaciente FROM agenda LIMIT 1)  "
                + " AND aprovado = 1 "
                + " ORDER BY nomepaciente;", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/listarprofessor', function(req, res) {
  const data = {idpaciente: req.body.paciente};
  client.query(" SELECT DISTINCT P.idprofessor, P.nomeprofessor "
                + " FROM professor P "
                + " INNER JOIN grupoestagiarios GE on GE.idestagio = P.idestagio "
                + " INNER JOIN estagiariopacientes EP on EP.idestagiario = GE.idestagiario "
                + " WHERE EP.idpaciente = $1 "
                + " AND GE.ativo = 1 "
                + " AND P.ativo = 1 ",[data.idpaciente], (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/listardia', function(req, res) {
  const data = {idprofessor: req.body.idprofessor};
  client.query(" SELECT DISTINCT DS.iddiasemana, DS.descricaosemana "
              + "   FROM diasemana DS "
              + " INNER JOIN agendaprofessor AP ON AP.iddiasemana = DS.iddiasemana "              
              + " WHERE AP.idprofessor = $1 "
              + " ORDER BY iddiasemana;", [data.idprofessor], (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/listarhorario', function(req, res) {  
  const data = {idprofessor: req.body.professor, dia: req.body.dia};
  
  client.query(" SELECT DISTINCT HI.descricaohorainicio, HI.idhorainicio "
                + " FROM horainicio HI "
                + " WHERE HI.descricaohorainicio BETWEEN ("
                + "    SELECT DISTINCT hinicio.descricaohorainicio"
                + "    FROM horainicio hinicio"
                + "    INNER JOIN agendaprofessor ap ON ap.idhorainicio = hinicio.idhorainicio "
                + "    WHERE ap.idprofessor = $1 "
                + "    AND ap.iddiasemana = $2 "
                + "    LIMIT 1"
                + "  ) AND ("
                + "    SELECT DISTINCT hf.descricaohorafim "
                + "    FROM horafim hf "
                + "    INNER JOIN agendaprofessor ap ON ap.idhorafim = hf.idhorafim "
                + "    WHERE ap.idprofessor = $3 "
                + "    AND ap.iddiasemana = $4 "
                + "    LIMIT 1 "                  
                + "  ) ORDER BY HI.descricaohorainicio", [data.idprofessor, data.dia, data.idprofessor, data.dia], (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/cadastrar', function(req, res){ 
  
  const data = {idpaciente: req.body.paciente, iddiasemana: req.body.dia, idhorainicio: req.body.horario, numerosessoes: req.body.numeroSessoes, datainicio: req.body.dataInicioAtendimento};
  
  client.query("INSERT INTO agenda (idpaciente, iddiasemana, idhorainicio, numerosessoes, datainicio) values($1, $2, $3, $4, $5) RETURNING codigo", [data.idpaciente, data.iddiasemana, data.idhorainicio, data.numerosessoes, data.datainicio],(err, response) => {
    if (err) throw err;
    console.log(response.rows);
  });    
  res.send({message: 'ok'});
});

//tamo testando

router.get('/listar', function(req, res, next) {
   
  client.query("SELECT 'assets/imgs/emespera.png' AS status, p.nomepaciente, ds.descricaosemana, hi.descricaohorainicio, numerosessoes, datainicio FROM agenda ag INNER JOIN paciente P on p.idpaciente = ag.idpaciente INNER JOIN diasemana ds on ds.iddiasemana = ag.iddiasemana INNER JOIN horainicio hi on hi.idhorainicio = ag.idhorainicio ORDER BY p.nomepaciente", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});
  /*

router.post('/excluir', function(req, res){ 
  
  const data = {idEstagiario: req.body.idEstagiario};
  
  client.query("DELETE FROM estagiario WHERE idestagiario = $1", [data.idEstagiario], (err, response) => {
    var msg = "ok";
    if(err != null){  
      msg = "erro";
    }
    res.send({
      message: msg
    });
  });         
});

router.post('/editar', function(req, res){ 
  
  const data = {nome: req.body.nomeEstagiario, matricula: req.body.numeroMatricula, email: req.body.email, telefone: req.body.telefone, idEstagiario: req.body.idEstagiario};
  
  client.query("update estagiario set nomeestagiario = ($1), matriculaestagiario = ($2), emailestagiario = ($3), telefoneestagiario = ($4) where idestagiario = ($5)", [data.nome, data.matricula, data.email, data.telefone, data.idEstagiario]);         
  res.send({
    message: 'ok'
  });  
});*/

module.exports = router;
