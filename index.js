const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});