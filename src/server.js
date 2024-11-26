const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { Client } = require('pg');  // Banco de dados PostgreSQL

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());  // Permite requisições de outros domínios
app.use(bodyParser.json());

// Configuração do banco de dados PostgreSQL (ajuste com suas credenciais)
const client = new Client({
  connectionString: process.env.DATABASE_URL,  // Supondo que você tenha um arquivo .env com a URL
});

client.connect();

// Rota para pegar todos os livros
app.get('/livros', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM livros');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar livros', error);
    res.status(500).json({ message: 'Erro ao buscar livros' });
  }
});

// Rota para adicionar um novo livro
app.post('/livros', async (req, res) => {
  const { titulo, autor, ano } = req.body;
  try {
    await client.query('INSERT INTO livros (titulo, autor, ano) VALUES ($1, $2, $3)', [titulo, autor, ano]);
    res.status(201).json({ message: 'Livro adicionado com sucesso' });
  } catch (error) {
    console.error('Erro ao adicionar livro', error);
    res.status(500).json({ message: 'Erro ao adicionar livro' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
