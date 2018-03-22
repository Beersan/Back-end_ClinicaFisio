var express = require('express');
var router = express.Router();

router.post('/routes', function(req, res){
  res.send({
    message: 'Welcome, friend!'
  });
});
/*if(req.body.name.toLowerCase() === 'homer'){

    res.status(401).send({message: 'Sorry, no Homer\'s!'});

} else {

    res.send({
        passed: true,
        message: 'Welcome, friend!'
    });

}*/
  
module.exports = router;