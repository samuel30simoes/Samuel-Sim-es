const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "API segura operacional" });
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});

const express = require('express');
const helmet = require('helmet'); // <--- 1. Importar o Helmet

const app = express();

app.use(helmet()); // <--- 2. Ativar o middleware no início

// Mantém o resto das tuas rotas normais
app.get('/', (req, res) => {
  res.send('API Online');
});

app.listen(3000);

const express = require('express');
const helmet = require('helmet'); // 1. Importar a biblioteca

const app = express();

app.use(helmet()); // 2. Ativar os cabeçalhos de segurança HTTP

// As tuas rotas existentes mantêm-se abaixo...