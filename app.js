//requires
var express = require("express"),
	app = express(),      
	bodyParser = require('body-parser'),
	path = require("path"),
	models = require('./server/models/model.js');

//body parser to encode requests
app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true }));      

//root
app.use(express.static(path.join(__dirname, '/')));
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

//initialize server
app.listen(3000);

//route to save and update book
app.post('/api/livros', function(req, res) {
	var livro = {};
	livro.nome = req.body.nome;
	livro.autor = req.body.autor;
	livro.situacao = req.body.situacao;

	//if exists id, update book
	if (req.body._id) {
		livro._id = req.body._id;

		console.log('aqui');
		models.updateBook(livro).then(function(book){
			res.json(book);
		});
	//else, save a new
	}else{
		console.log('ali');
		models.saveBook(livro).then(function(book){
			res.json(book);
		});
	}
});


//route to get books
app.get('/api/livros', function(req, res) {
	models.getBook().then(function(books){
		res.json(books);
	});
});

//delete book receving a sample param
app.delete('/api/livros/:id', function(req, res) {
	var id = req.params.id;
	models.deleteBook(id).then(function(book){
		res.json({status:'Ok'});
	})
});

console.log("Running at Port 3000");