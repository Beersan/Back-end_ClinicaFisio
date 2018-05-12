var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.get('/listarPacientesFila', function(req, res, next) {
  client.query("SELECT P.bairropaciente, P.cidadepaciente, P.codigoespecialidade, P.contato1paciente, "
                + " CASE WHEN P.contato2paciente IS NULL THEN 'Não informado' ELSE P.contato2paciente END AS telefone2 , "
                + " P.cpfpaciente, P.datanascpaciente, P.encmedicopaciente, P.encmedpaciente, "
                + " P.enderecopaciente,	P.idpaciente,	P.nomepaciente,	P.numeropaciente, "
                + " P.observacoespaciente,	P.rendapaciente,	P.rgpaciente, E.descricaoespecialidade, "
                + " CASE WHEN encmedpaciente IS NULL THEN 'none' ELSE 'initial' END AS classeenc,"
                + " CASE WHEN ES.nomeestagiario IS NULL THEN 'Não vinculado' ELSE ES.nomeestagiario END AS nomeEstagiario "
                + " FROM paciente P "
                + "   INNER JOIN especialidade E ON E.codigoespecialidade = P.codigoespecialidade" 
                + "   LEFT JOIN estagiariopacientes EP ON EP.idpaciente = P.idpaciente " 
                + "   LEFT JOIN estagiario ES ON ES.idestagiario = EP.idestagiario " 
                + "   WHERE P.aprovado = 1 " 
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
                    + "  		INNER JOIN professor P ON P.idprofessor = GE.idprofessor "
                    + "  		INNER JOIN especialidade ESP ON ESP.codigoespecialidade = P.codigoespecialidade "
                    + "     WHERE (SELECT COUNT(EP.idestagiario) "
                    + "               FROM estagiariopacientes EP " 
                    + "           WHERE EP.idestagiario = E.idestagiario) <= 2 "
                    + "  	  ORDER BY E.nomeestagiario, GR.descricaogrupo" , (err, response) => {
        if (err) throw err;
        res.send(response.rows);
    });       
});

router.post('/vincularPacienteEstagiario  ', function(req, res){   
  const data = {paciente: req.body.idpaciente, estagiario: req.body.estagiario};
  
  client.query("INSERT INTO estagiariopacientes (idpaciente,idestagiario)values($1, $2)", [data.paciente, data.estagiario]);         
    res.send({
      message: 'ok'
    });
   
});
module.exports = router;