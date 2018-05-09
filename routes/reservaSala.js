var express = require('express');
var router = express.Router();
var client = require('./dbConnection');

router.post('/cadastrar', function(req, res){ 
  var data = {solicitante: req.body.solicitante, salaReserva: req.body.salaReserva, dataReserva: req.body.dataReserva};
  
  client.query("INSERT INTO reservasala(solicitante, salareserva, datareserva) values($1, $2, $3)", [data.solicitante, data.salaReserva, data.dataReserva], (err, response) => {
    res.send({message: 'ok'});
  });   
});

router.post('/listarDataReserva', function(req, res, next) { 
  var data = {salaReserva: req.body.sala};
  console.log(req.body);

  client.query('SELECT datareserva from reservasala where salareserva = $1 ', [data.salaReserva], (err, response) => {
    if (err) throw err;
    res.send(response.rows);
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

/*var datasReserva = [];
  var eIgual = false;

  client.query('SELECT datareserva from reservasala;', (err, response) => {
    if (err) throw err;
    datasReserva = datareserva;

    for(var i = 0; i < datasReserva.length; i++){
      if(data.dataReserva == datasReserva[i]){
        eIgual = true;
      }
    }

    if(eIgual){
      res.send({});
    } else{
      client.query("INSERT INTO reservasala(solicitante, salareserva, datareserva) values($1, $2, $3)", [data.solicitante, data.salaReserva, data.dataReserva], (err, response) => {
        res.send({message: 'ok'});
      });
    }
  });*/
