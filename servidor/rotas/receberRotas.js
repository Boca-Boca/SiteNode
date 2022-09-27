

const express = require('express');

const rotas = express.Router();

const receberControles= require('../controle/receberControles');


//ROTAS DO SITE
rotas.get('/', receberControles.home);


module.exports = rotas ;
