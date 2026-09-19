const express = require('express');
const helmet = require('helmet');

const app = express();

// IMPORTANTE: Deve ficar ANTES de qualquer rota
app.use(helmet());

// Rotas abaixo
app.get('/', (req, res) => {
  res.send('API a funcionar!');
});

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/', (req, res) => {
  res.json({ message: "API segura operacional" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
