var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var estagiario = require('./routes/estagiario');
var especialidade = require('./routes/especialidade');
var relatarProblema = require('./routes/relatarProblema');
var users = require('./routes/users');
var grupo = require('./routes/grupo');
var preCadastro = require('./routes/preCadastro');
var grupoEstagiario = require('./routes/grupoEstagiario');
var semestre = require('./routes/semestre');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth');
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/preCadastro', preCadastro);
app.use('/users', users);
app.use('/estagiario', estagiario);
app.use('/especialidade', especialidade);
app.use('/problema', relatarProblema);
app.use('/grupo', grupo);
app.use('/grupoEstagiario', grupoEstagiario);
app.use('/semestre', semestre);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
