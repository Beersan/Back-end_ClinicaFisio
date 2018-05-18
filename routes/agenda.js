var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.get('/listarpaciente', function(req, res, next) {
    
    client.query("SELECT  P.idpaciente, P.nomepaciente FROM paciente P INNER JOIN estagiariopacientes ep on ep.idpaciente = P.idpaciente WHERE P.idpaciente NOT IN (SELECT idpaciente FROM agenda) AND aprovado = 1 ORDER BY nomepaciente;", (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.post('/listarprofessor', function(req, res, next) {
    const data = {idpaciente: req.body.paciente};
    client.query("select ap.idprofessor from agendaprofessor ap INNER JOIN grupoestagiarios ge on ge.idprofessor = ap.idprofessor INNER JOIN estagiariopacientes ep on ep.idestagiario = ge.idestagiario WHERE ep.idpaciente = $1",[data.idpaciente], (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  router.post('/listardia', function(req, res) {

    const data = {idpaciente: req.body.paciente};
    client.query("SELECT ds.iddiasemana, ds.descricaosemana from diasemana ds INNER JOIN agendaprofessor ap on ap.iddiasemana = ds.iddiasemana INNER JOIN grupoestagiarios ge on ge.idprofessor = ap.idprofessor INNER JOIN estagiariopacientes ep on ep.idestagiario = ge.idestagiario WHERE ep.idpaciente = $1 ORDER BY iddiasemana;", [data.idpaciente], (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

  

  router.post('/listarhorario', function(req, res, next) {

    
    const data = {idpaciente: req.body.paciente, idprofessor: req.body.professor[0].idprofessor, dia: req.body.dia};
    console.log(data.dia);
    
    client.query("select hi.descricaohorainicio, hi.idhorainicio "
                  + "from horainicio hi "
                  + "where hi.descricaohorainicio BETWEEN ("
                  + "    select DISTINCT hinicio.descricaohorainicio"
                  + "    from horainicio hinicio"
                  + "    inner join agendaprofessor ap on ap.idhorainicio = hinicio.idhorainicio "
                  + "    INNER JOIN grupoestagiarios ge on ge.idprofessor = ap.idprofessor "
                  + "    INNER JOIN estagiariopacientes ep on ep.idestagiario = ge.idestagiario "
                  + "    WHERE ap.idprofessor = $1"
                  + "    AND ap.iddiasemana = $2 limit 1"
                  + "  ) AND ("
                  + "    select DISTINCT hf.descricaohorafim "
                  + "    from horafim hf "
                  + "    inner join agendaprofessor ap on ap.idhorafim = hf.idhorafim "
                  + "    INNER JOIN grupoestagiarios ge on ge.idprofessor = ap.idprofessor "
                  + "    INNER JOIN estagiariopacientes ep on ep.idestagiario = ge.idestagiario "
                  + "    WHERE ap.idprofessor = $3"
                  + "    AND ap.iddiasemana = $4 limit 1"
                  + "  )", [data.idprofessor, data.dia, data.idprofessor, data.dia], (err, response) => {
      if (err) throw err;
      res.send(response.rows);
    });          
  });

router.post('/cadastrar', function(req, res){ 
  
  const data = {idpaciente: req.body.paciente, iddiasemana: req.body.dia, idhorainicio: req.body.horario, numerosessoes: req.body.numeroSessoes, datainicio: req.body.dataInicioAtendimento};
  
    console.log(data);

  client.query("INSERT INTO agenda(idpaciente, iddiasemana, idhorainicio, numerosessoes, datainicio) values($1, $2, $3, $4, $5)", [data.idpaciente, data.iddiasemana, data.idhorainicio, data.numerosessoes, data.datainicio]);         
    res.send({
      message: 'ok'
    });
   
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
