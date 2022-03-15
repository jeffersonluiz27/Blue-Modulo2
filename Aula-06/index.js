const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/index', (req, res) => {
	const devList = ['Backend', 'Frontend', 'Fullstack'];
	const analyticsList = ['Engenharia de dados', 'Ciência de dados'];
	res.render('index', {
		titulo: 'Blue',
		devList: devList,
		analyticsList: analyticsList,
	});
});

app.post('/', function (req, res) {
	res.send('Post');
});

app.get('/pagina', function (req, res) {
	res.send('Pagina2');
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
);
