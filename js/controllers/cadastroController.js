//module to "cadastro" screen
angular.module('app.controllers').controller('cadastroController',['$scope', 'httpService', '$rootScope',
	function(scope, httpService, rootScope){

		//initialize object case user wanna update a book
		scope.livro = rootScope.livro ? rootScope.livro : {};

		//options to select
		scope.options = [{
			nome: 'Emprestado',
			valor: 'E'
		},
		{
			nome: 'Devolvido',
			valor: 'D'
		}];

		//function to save object
		scope.save = function(livro){
			httpService.put(livro).then(function(result){
				console.log(result);
				if(result.data._id){
					alertify.success('Cadastro efetuado com sucesso!');
				}else if(result.data.ok){
					alertify.success('Cadastro atualizado com sucesso!');
				}else{
					alertify.error('Não foi possível realizar esta operação!');
				}
			});
		}
}]);