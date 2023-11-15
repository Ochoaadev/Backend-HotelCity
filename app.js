var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Verificación de .ENV, en caso que no exista, se detiene el servidor
const CheckEnv = () => {
    try {
       fs.accessSync('.env', fs.constants.F_OK);
       //Si lo encuentra devuelve el console.log
       console.log('Archivo .env encontrado');
    } catch (err) {
       //Caso contrario, devuelve el error(Dicho error se visualiza en la consola, antes del [Running]-PORT)
       console.error('Error: Archivo .env no encontrado');
       process.exit(1)
    }
   };

   dbconnection();
    CheckEnv();

module.exports = app;
