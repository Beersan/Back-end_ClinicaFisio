var express = require('express');
var router = express.Router();
const { Client } = require('pg');

router.post('/cadastrar', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {solicitante: req.body.solicitante, salaReserva: req.body.salaReserva, dataReserva: req.body.dataReserva};

  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("INSERT INTO reservasala(solicitante, salareserva, datareserva) values($1, $2, $3)", [data.solicitante, data.salaReserva, data.dataReserva]);         
    res.send({
      message: 'ok'
    });
  }); 
});

router.get('/listar', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  client.connect();  
  client.query('SELECT * from reservasala order by datareserva;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});
  

router.post('/excluir', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {idReserva: req.body.idReserva};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("DELETE FROM reservasala WHERE idreserva = $1", [data.idReserva]);         
    res.send({
      message: 'ok'
    });
  }); 
});

router.post('/editar', function(req, res){ 
  const client = new Client({
    connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
    ssl: true,
  });
  const data = {solicitante: req.body.solicitante, salaReserva: req.body.salaReserva, dataReserva: req.body.dataReserva, idReserva: req.body.idReserva};
  
  client.connect((err, client, done) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }    
    client.query("UPDATE reserva SET solicitante = ($1), salareserva = ($2), datareserva = ($3) where idreserva = ($4)", [data.solicitante, data.salaReserva, data.dataReserva, data.idReserva]);         
    res.send({
      message: 'ok'
    });
  }); 
});

module.exports = router;
