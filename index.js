const express = require('express');
const request = require('request');

const app = express();
const PORT = 8001; // Porta local
const API_ENDPOINT = "https://aplicacao.dominio.br"; // URL da sua API

app.use((req, res) => {
  const url = `${API_ENDPOINT}${req.url}`;
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => console.log(`Redirecionando requisições de http://localhost:${PORT} para ${API_ENDPOINT}`));

