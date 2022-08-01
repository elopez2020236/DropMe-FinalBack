const express = require('express');
const controladorTraros = require('../controller/tratos.controller');
const md_autenticacion = require('../middlewares/autenticacion');

const api = express.Router();
api.get('/obternerTratosLog',md_autenticacion.Auth,controladorTraros.mostrarTratos);
api.get('/obtenerTratospendientes',md_autenticacion.Auth,controladorTraros.mostrarTratosP);
api.
module.exports = api;