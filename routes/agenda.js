var express = require('express');
var router = express.Router();
var client = require('./dbConnection');
var nodemailer = require('nodemailer');

router.get('/listarpaciente', function(req, res, next) {    
  client.query("SELECT  P.idpaciente, P.nomepaciente"
                + " FROM paciente P "
                + " INNER JOIN estagiariopacientes ep on ep.idpaciente = P.idpaciente  "
                + " WHERE P.idpaciente NOT IN (SELECT idpaciente FROM agenda LIMIT 1)  "
                + " AND aprovado = 1 "
                + " AND P.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) "
                + " ORDER BY nomepaciente;", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/buscarsessoes', function(req, res) {  
  const data = {idagenda: req.body.idagenda};
  
  client.query(" SELECT GA.idgerenciaratendimento, GA.idagenda, GA.datasessao, GA.assinatura, GA.evolucaodiaria,"
                + "   CASE GA.presenca WHEN 1 THEN 'true' ELSE 'false' END AS presente "
                + "   FROM gerenciaratendimento GA "                
                + "   WHERE GA.idagenda = $1 "
                + "   ORDER BY GA.datasessao ", [data.idagenda], (err, response) => {
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
                + " AND P.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) "
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
  var idagenda;
  const data = {
    idpaciente: req.body.paciente, 
    idprofessor: req.body.professor, 
    iddiasemana: req.body.dia, 
    idhorainicio: req.body.horario, 
    numerosessoes: req.body.numeroSessoes, 
    datainicio: req.body.dataInicioAtendimento
  };
  
  client.query("INSERT INTO agenda (idpaciente, iddiasemana, idhorainicio, numerosessoes, datainicio, idprofessor, idstatus, idsemestre) values($1, $2, $3, $4, $5, $6, 1,(SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1)) RETURNING idagenda", [data.idpaciente, data.iddiasemana, data.idhorainicio, data.numerosessoes, data.datainicio, data.idprofessor],(err, response) => {
    if (err) throw err;
    idagenda = response.rows[0].idagenda;    
    var dataInicio = new Date(data.datainicio);  
    for (i = 0; i < data.numerosessoes; i++){
      client.query("INSERT INTO gerenciaratendimento(idagenda, datasessao) values($1, $2)", [idagenda, dataInicio.toISOString().slice(0, 10)]);         
      dataInicio.setDate(dataInicio.getDate() + 7);
    }
  });
  res.send({message: 'ok'});  
});

router.post('/gravarAssinatura', function(req, res){   
  const data = {
    assinatura: req.body.assinatura, 
    idgerenciaratendimento: req.body.idgerenciaratendimento
  };  
  client.query(" UPDATE gerenciaratendimento SET assinatura = $1, presenca = 1 "
              +" WHERE idgerenciaratendimento = $2 ", [data.assinatura, data.idgerenciaratendimento], (err, response) => {
    if (err) throw err;
    res.send({message: 'ok'});
  });
});

router.post('/gravarEvolucao', function(req, res){   
  const data = {
    evolucaodiaria: req.body.evolucaodiaria, 
    idgerenciaratendimento: req.body.idgerenciaratendimento
  };
  
  client.query(" UPDATE gerenciaratendimento SET evolucaodiaria = $1 "
              +" WHERE idgerenciaratendimento = $2 ", [data.evolucaodiaria, data.idgerenciaratendimento], (err, response) => {
    if (err) throw err;
    res.send({message: 'ok'});
  });
});

router.post('/gravarStatus', function(req, res){   
  const data = {
    status: req.body.status, 
    idagenda: req.body.idagenda
  };
  
  client.query(" UPDATE agenda SET idstatus = $1 "
              +" WHERE idagenda = $2 ", [data.status, data.idagenda], (err, response) => {
    if (err) throw err;
    res.send({message: 'ok'});
  });
});

router.get('/listar', function(req, res, next) {   
  client.query("SELECT p.nomepaciente, ds.descricaosemana, "
              + " CASE ag.idstatus "
              + "   WHEN 1 THEN 'assets/imgs/emespera.png'" 
              + "   WHEN 2 THEN 'assets/imgs/emandamento.png'" 
              + "   WHEN 3 THEN 'assets/imgs/finalizado.png'" 
              + "   WHEN 4 THEN 'assets/imgs/cancelado.png'"
              + " END "
              + " AS status,"
              + " CASE ag.idstatus "
              + "   WHEN 1 THEN 'Em espera'" 
              + "   WHEN 2 THEN 'Em andamento'" 
              + "   WHEN 3 THEN 'Finalizado'" 
              + "   WHEN 4 THEN 'Encerrado'"
              + " END "
              + " AS tituloStatus,"
              + " hi.descricaohorainicio, ag.numerosessoes, ag.datainicio, "
              + " ag.idagenda, ag.idstatus, ES.nomeestagiario, P.idpaciente, "
              + " (SELECT DISTINCT 1 FROM pacientearquivos PAR WHERE PAR.idpaciente = P.idpaciente ) AS exames "
              + " FROM agenda ag "
              + " INNER JOIN paciente P on P.idpaciente = ag.idpaciente "
              + " INNER JOIN estagiariopacientes EP on EP.idpaciente = p.idpaciente "
              + " INNER JOIN estagiario ES on ES.idestagiario = EP.idestagiario "
              + " INNER JOIN diasemana ds on ds.iddiasemana = ag.iddiasemana "
              + " INNER JOIN horainicio hi on hi.idhorainicio = ag.idhorainicio "
              + " AND ag.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) "
              + " ORDER BY ag.datainicio ", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/excluir', function(req, res){   
  const data = {idagenda: req.body.idagenda};
  client.query(" DELETE FROM gerenciaratendimento WHERE idagenda = $1;", [data.idagenda], (err, response) => {    
    if (err) throw err;    
  });          
  client.query(" DELETE FROM agenda WHERE idagenda = $1 ", [data.idagenda], (err, response) => {    
    if (err) throw err;
    res.send({
      message: "ok"
    });
  });         
});


router.post('/enviarExamesPaciente', function(req, res){
  var arquivos, mensagem, texto;
  const data = {idpaciente: req.body.idpaciente};
  client.query(" SELECT DISTINCT string_agg(PA.arquivo, ' \n\n ') AS arquivos, ES.emailestagiario, P.nomepaciente,   "
              + " ES.nomeestagiario, DS.descricaosemana, HI.descricaohorainicio "
              + " FROM pacientearquivos PA "
              + " INNER JOIN estagiariopacientes EP on EP.idpaciente = PA.idpaciente "
              + " INNER JOIN estagiario ES on ES.idestagiario = EP.idestagiario "
              + " INNER JOIN paciente P on P.idpaciente = EP.idpaciente "
              + " INNER JOIN agenda A on A.idpaciente = P.idpaciente "
              + " INNER JOIN diasemana DS on DS.iddiasemana = A.iddiasemana "
              + " INNER JOIN horainicio HI on HI.idhorainicio = A.idhorainicio "
              + " WHERE P.idpaciente = $1 "
              + " AND PA.arquivo IS NOT NULL "
              + " GROUP BY  ES.emailestagiario, P.nomepaciente ",[data.idpaciente], (err, response) => {
    if (err) throw err;
    
    if (response.rows[0] != null && response.rows[0] != ''){      
      arquivos = response.rows[0].arquivos;     
      texto = "Olá " + response.rows[0].nomeestagiario + ", \n\n "
      + " O atendimento para o paciente " + response.rows[0].nomepaciente + " inicia " + response.rows[0].descricaosemana
      + " às " + response.rows[0].descricaohorainicio + " horas. \n\n " 
      + " Segue link dos exames \n\n " + arquivos;
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'no.reply.fisio@gmail.com',
          pass: 'fisiofisio'
        },
        tls: { rejectUnauthorized: false }
      });
      
      var mailOptions = {
        from: 'no.reply.fisio@gmail.com',
        to: response.rows[0].emailestagiario,
        subject: "Clínica Escola de Fisioterapia - UNIARP - Exames do paciente " + response.rows[0].nomepaciente ,
        text: texto
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
      mensagem = "enviado";
    } else {
      mensagem = "semArquivo";
    }
    res.send({message: mensagem});
  });    
});

module.exports = router;
