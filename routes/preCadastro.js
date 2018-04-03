var express = require('express');
var router = express.Router();
const { Client } = require('pg');

router.get('/listarEspecialidade', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  client.connect();  
  client.query('SELECT * from especialidade;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

router.post('/gravar', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {
    nomePaciente: req.body.nomePaciente, 
    registroGeral: req.body.registroGeral,
    CPF: req.body.CPF, 
    dataNascimento: req.body.dataNascimento,
    rendaFamiliar: req.body.rendaFamiliar,
    endereco: req.body.endereco,
    numero: req.body.numero,
    bairro: req.body.bairro, 
    cidade: req.body.cidade,
    encaminhamento: req.body.encaminhamento,
    especialidade: req.body.especialidade,
    telefoneUm: req.body.telefoneUm,
    telefoneDois: req.body.telefoneDois
  };
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("INSERT INTO paciente (nomepaciente, rgpaciente, cpfpaciente, datanascpaciente, rendapaciente, " 
                                        + " enderecopaciente, numeropaciente, bairropaciente, cidadepaciente, "
                                        + "encmedicopaciente, codigoespecialidade, contato1paciente, contato2paciente ) "
                                        + " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", 
                                        [ data.nomePaciente,                                           
                                          data.registroGeral, 
                                          data.CPF, 
                                          data.dataNascimento, 
                                          data.rendaFamiliar, 
                                          data.endereco, 
                                          data.numero, 
                                          data.bairro, 
                                          data.cidade, 
                                          data.encaminhamento, 
                                          data.especialidade, 
                                          data.telefoneUm, 
                                          data.telefoneDois
                                        ]);         
    res.send({
      message: 'ok'
    });
  });   
});

router.get('/listarPacientes', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  client.connect();  


  client.query('SELECT P.bairropaciente, P.cidadepaciente, P.codigoespecialidade, P.contato1paciente, '
                + ' P.contato2paciente, P.cpfpaciente, P.datanascpaciente, P.encmedicopaciente, '
                + ' P.enderecopaciente,	P.idpaciente,	P.nomepaciente,	P.numeropaciente, '
                + ' P.observacoespaciente,	P.rendapaciente,	P.rgpaciente, E.descricaoespecialidade '
                + ' FROM paciente P '
                + ' INNER JOIN especialidade E ON E.codigoespecialidade = P.codigoespecialidade', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});

module.exports = router;