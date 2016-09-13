//require
var Mongoose = require('Mongoose');	

//create connection
var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
	console.log('Conectado ao MongoDB.');
})

Mongoose.connect('mongodb://localhost/livaria');

//create schema
var bookSchema = new Mongoose.Schema({
	nome: String,
	autor: String,
	situacao: String
});

//create model object
var BookDB = Mongoose.model('BookDB', bookSchema);

//function to save a new book
var saveBook = function(Book){
	return new Promise(function(resolve, reject){
		var save = new BookDB(Book);

		save.save(function(err, book){
			if(err) return console.error(err);
			resolve(book);
		});
	})
}

//function to delete a book
var deleteBook = function(id){
	return new Promise(function(resolve, reject){
		BookDB.remove({_id: id}, function(err, book){
			if (err)
				console.log(err);
			resolve(book);
		})
	});
}

//function to update a book
var updateBook = function(Book){
	return new Promise(function(resolve, reject){
		BookDB.update(
			{_id: Book._id}, 
			{
				nome: Book.nome,
				autor: Book.autor,
				situacao: Book.situacao
			},
			{
				multi: true
			},
			function(err, book){
				if(err) return 
					console.error(err);
				resolve(book);
			}
		);
	})
}

//function to request all books inserteds
var getBook = function(){
	return new Promise(function(resolve, reject){
		BookDB.find(function(err, book){
			if (err)
				console.log(err);
			resolve(book);
		});
	})
}

//export
module.exports = {
	saveBook: saveBook,
	deleteBook: deleteBook,
	updateBook: updateBook,
	getBook: getBook
}