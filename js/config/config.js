//configs to routes
angular.module('app').config(['$routeProvider', function (routeProvider) {
    routeProvider
        .when('/cadastro', {
            templateUrl: 'cadastro.html',
            controller: 'cadastroController'
        })
        .otherwise({
            redirectTo: '/cadastro'
        });
}]);