var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
//client.connect(); 

router.get('/listarPacientesFila', function(req, res, next) {
  client.query("SELECT P.bairropaciente, P.cidadepaciente, P.codigoespecialidade, P.contato1paciente, "
                + " CASE WHEN P.contato2paciente IS NULL THEN 'Não informado' ELSE P.contato2paciente END AS telefone2 , "
                + " P.cpfpaciente, P.datanascpaciente, P.encmedicopaciente, P.encmedpaciente, "
                + " P.enderecopaciente,	P.idpaciente,	P.nomepaciente,	P.numeropaciente, "
                + " P.observacoespaciente,	P.rendapaciente,	P.rgpaciente, E.descricaoespecialidade, "
                + " CASE WHEN encmedpaciente IS NULL THEN 'none' ELSE 'initial' END AS classeenc "
                + " FROM paciente P "
                + " INNER JOIN especialidade E ON E.codigoespecialidade = P.codigoespecialidade" 
                + " WHERE P.aprovado = 1 " 
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
                    + "  	ORDER BY E.nomeestagiario, GR.descricaogrupo" , (err, response) => {
        if (err) throw err;
        res.send(response.rows);
    });       
});
module.exports = router;