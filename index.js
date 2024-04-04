const express = require('express');
const request = require('request');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8001;
const API_ENDPOINT = process.env.API_ENDPOINT;

app.use((req, res) => {
  const url = `${API_ENDPOINT}${req.url}`;
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => console.log(`Redirecionando requisições de http://localhost:${PORT} para ${API_ENDPOINT}`));

