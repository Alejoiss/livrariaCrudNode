//main screen
angular.module('app.controllers').controller('mainController', ['$location', '$scope', 
	function(location, scope){
	
	scope.menuItem = [{
		label: 'Lista',
		path: 'lista'
	},
	{
		label: 'Cadastro',
		path: 'cadastro'
	}];

	scope.goTo = function(path){
		location.path(path);
	}
}])