const express = require('express');
const router = express.Router();

router.get('/saudacao', (req, res) => {
  res.send('Olá, esta é uma rota de saudação!');
});

module.exports = router;