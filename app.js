const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORTA = process.env.PORT || 3000;

app.use(bodyParser.json());

const livrosRota = require('./rotas/livros');
app.use('/api/livros', livrosRota);

app.listen(PORTA, () => {
  console.log(`Servidor está rodando na porta ${PORTA}`);
});
