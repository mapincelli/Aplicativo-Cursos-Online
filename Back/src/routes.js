const express = require('express');
const router = express.Router();
const UserControllers = require('./controllers/userControllers');

//rotas de usuario
router.post('/users/cads', UserControllers.inserir);
router.post('/users/login', UserControllers.login);
router.get('/users/vagas', UserControllers.FillVagas);
router.get('/users/curso', UserControllers.FillCursos);
router.get('/users', UserControllers.buscarTodos);
//rotas de empresa
router.post('/emps/cads', UserControllers.inserirVaga);

///router.put('/users/:codigo', userControllers.alterar);

module.exports = router;

