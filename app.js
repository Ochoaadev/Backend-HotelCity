var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require('./src/config/conexion');
const cors = require("cors");
const { swaggerDocs } = require("./swagger");
const fs = require('fs')

var indexRouter = require("./src/routes/routes");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());  


app.use('/', indexRouter);


// Verificación de .ENV, en caso que no exista, se detiene el servidor
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

   app.listen(4000, () => {
      console.log(`[Running] - PORT: 4000`);
      console.log("[Link]    " + "http://localhost:4000");
      swaggerDocs(app, 4000);
    });


    connection()
    .then(() => console.log('Conectado a la base de datos correctamente'))
    .catch((e) => console.error(`Ocurrió un error al conectar con la base de datos: ${e.message}`));
   CheckEnv();

module.exports = app;
