var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.post('/retornarArquivosPacientes', function(req, res, next) {    
  const data = {idpaciente: req.body.idpaciente}; 
  client.query("SELECT PA.idpaciente, PA.arquivo "
            + " FROM pacientearquivos PA "
            + "     WHERE PA.idpaciente = $1" 
            + "     AND PA.arquivo IS NOT NULL", [data.idpaciente], (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.get('/listarPacientesFila', function(req, res, next) {
  client.query("SELECT P.bairropaciente, P.cidadepaciente, P.codigoespecialidade, P.contato1paciente, "
                + " CASE WHEN P.contato2paciente IS NULL THEN 'Não informado' ELSE P.contato2paciente END AS telefone2 , "
                + " P.cpfpaciente, P.datanascpaciente, P.encmedicopaciente, P.encmedpaciente, "
                + " P.enderecopaciente,	P.idpaciente,	P.nomepaciente,	P.numeropaciente, "
                + " P.observacoespaciente,	P.rendapaciente,	P.rgpaciente, E.descricaoespecialidade, "
                + " CASE WHEN ES.nomeestagiario IS NULL THEN 'Não vinculado' ELSE ES.nomeestagiario END AS nomeEstagiario "
                + " termoimagem, termoconcordancia "
                + " FROM paciente P "
                + "   INNER JOIN especialidade E ON E.codigoespecialidade = P.codigoespecialidade" 
                + "   LEFT JOIN estagiariopacientes EP ON EP.idpaciente = P.idpaciente " 
                + "   LEFT JOIN estagiario ES ON ES.idestagiario = EP.idestagiario " 
                + "   WHERE P.aprovado = 1 " 
                + "   AND P.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) "
                + " ORDER BY  P.encmedicopaciente DESC, CAST(P.rendapaciente AS INT) ASC ", (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });       
});

router.get('/listarEstagiariosFila', function(req, res, next) {
    client.query("SELECT E.idestagiario, E.nomeestagiario, GR.descricaogrupo, P.nomeprofessor, ESP.descricaoespecialidade"
                    + " FROM grupoestagiarios GE "
                    + "  		INNER JOIN estagiario E ON E.idestagiario = GE.idestagiario "
                    + "  		INNER JOIN grupo GR ON GR.idgrupo = GE.idgrupo "
                    + "     INNER JOIN estagio EST ON EST.idestagio = GE.idestagio "
                    + "  		INNER JOIN professor P ON P.idestagio = GE.idestagio "
                    + "  		INNER JOIN especialidade ESP ON ESP.codigoespecialidade = P.codigoespecialidade "
                    + "     WHERE (SELECT COUNT(EP.idestagiario) "
                    + "               FROM estagiariopacientes EP " 
                    + "           WHERE EP.idestagiario = E.idestagiario) < 2 "                    
                    + "     AND GE.ativo = 1 "
                    + "     AND GE.idestagio = 1 "
                    + "     AND GR.idsemestre = (SELECT idsemestre FROM semestre WHERE ativo = 1 LIMIT 1) "
                    + "  	  ORDER BY E.nomeestagiario, GR.descricaogrupo" , (err, response) => {
        if (err) throw err;
        res.send(response.rows);
    });       
});

router.post('/gravarAnexosPaciente', function(req, res){   
  const data = {anexos: req.body.anexos, idpaciente: req.body.idpaciente, imagem: req.body.anexoImagem, conc: req.body.anexoConc};
   
  client.query("UPDATE paciente SET termoimagem = $1, termoconcordancia = $2 WHERE idpaciente = $3", [data.imagem, data.conc, data.idpaciente]);         
  client.query("DELETE FROM pacientearquivos WHERE idpaciente = $1", [data.idpaciente]);         
  for (i = 0; i <= data.anexos.length; i++){
    client.query("INSERT INTO pacientearquivos(idpaciente,arquivo) values($1, $2)", [data.idpaciente, data.anexos[i]]);         
  }       
  res.send({message: 'ok'});   
});

router.post('/vincularPacienteEstagiario', function(req, res){   
  const data = {idestagiario: req.body.idestagiario, idpaciente: req.body.idpaciente};
   
  client.query("INSERT INTO estagiariopacientes (idestagiario,idpaciente) VALUES ($1, $2)", [data.idestagiario,data.idpaciente]);
  res.send({message: 'ok'});   
});

module.exports = router;