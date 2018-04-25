var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://avzgogfkefojwd:98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea@ec2-54-221-220-59.compute-1.amazonaws.com:5432/dcasactg6t0691',
  ssl: true,
});
client.connect(); 

router.post('/cadastrar', function(req, res){ 
  const data = {solicitante: req.body.solicitante, salaReserva: req.body.salaReserva, dataReserva: req.body.dataReserva};
  
  client.query("INSERT INTO reservasala(solicitante, salareserva, datareserva) values($1, $2, $3)", [data.solicitante, data.salaReserva, data.dataReserva], (err, response) => {
    res.send({message: 'ok'});
  });
});

router.get('/listar', function(req, res, next) { 
  client.query('SELECT * from reservasala order by datareserva DESC;', (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });          
});
  
router.post('/excluir', function(req, res){ 
  const data = {idReserva: req.body.idReserva};
  
  client.query("DELETE FROM reservasala WHERE idreserva = $1", [data.idReserva], (err,response)=> {
    res.send({message: 'ok'});
  });       
});

router.post('/editar', function(req, res){ 
  const data = {idReserva: req.body.idReserva, solicitante: req.body.solicitante, salaReserva: req.body.salaReserva, dataReserva: req.body.dataReserva,};
 
  client.query("UPDATE reservasala SET solicitante = ($2), salareserva = ($3), datareserva = ($4) where idreserva = ($1)", [data.idReserva, data.solicitante, data.salaReserva, data.dataReserva], (err,response)=> {
    res.send({message: 'ok'});
  });  
});

module.exports = router;
