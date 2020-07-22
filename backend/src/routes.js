const express = require('express');
const ClienteController = require('./controllers/ClienteController');
const AtendimentoController = require('./controllers/AtendimentoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.create);

routes.get('/atendimentos', AtendimentoController.index);
routes.post('/atendimentos', AtendimentoController.create);
routes.delete('/atendimentos/:id', AtendimentoController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;