//routs to application
"use strict";
angular.module('app.routes', [])
.config(['$routeProvider', function (routeProvider) {
	routeProvider
		.when('/lista', {
			templateUrl: 'view/lista.html',
			controller: 'listaController'
		})
		.when('/cadastro', {
			templateUrl: 'view/cadastro.html',
			controller: 'cadastroController'
		})
		.otherwise({
			redirectTo: '/lista'
		});
}]);
