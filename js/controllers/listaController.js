//controller to "lista" screen
angular.module('app.controllers').controller('listaController',['$scope', 'httpService', '$location', '$rootScope', 
	function(scope, httpService, location, rootScope){
		//initialize object
		scope.lista;

		//options to select
		scope.options = [{
			nome: 'Todos',
			valor: ''
		},
		{
			nome: 'Emprestado',
			valor: 'E'
		},
		{
			nome: 'Devolvido',
			valor: 'D'
		}];

		//function to request books list
		scope.get = function(livro){
			httpService.get().then(function(result){
				scope.lista = result.data;
			});
		}

		//function to delete a book on click
		scope.deleteBook = function(livro, idx){
			alertify.confirm('Exclusão de Livros', 'Deseja realmente excluir este livro?', function(){ 
				httpService.delete(livro).then(function(result){
					scope.lista.splice(idx, 1);
				});
			}, function(){console.log('Ação cancelada')})
			.set('labels', {
				ok:'Sim', 
				cancel:'Não'
			});
		}

		//function to update a book on click
		scope.updateBook = function(livro){
			rootScope.livro = livro;
			location.path('cadastro');
		}

		//search for inserted books
		scope.get();
}]);