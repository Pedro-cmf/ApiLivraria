const express = require('express');
const router = express.Router();
const livrosControlador = require('../controladores/livrosControlador');

router.get('/', livrosControlador.listarLivros);
router.post('/comprar', livrosControlador.comprarLivro);
router.post('/adicionar', livrosControlador.adicionarLivro);

module.exports = router;
