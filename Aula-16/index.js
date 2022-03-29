const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const Filme = require('./model/filme');

const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

app.get('/', async (req, res) => {
	const filmes = await Filme.findAll();

	res.render('index', {
		filmes,
	});
});

app.get('/filmes/:id', async (req, res) => {
	const filme = await Filme.findByPk(req.params.id);

	res.render('detalhes', {
		filme,
	});
});

app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
);
