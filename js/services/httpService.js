//general services
"use strict";
angular.module("app.services").service("httpService", ["$http",
	function (http) {
		//default url
		var contextPath = "http://localhost:3000/api",
			url = '/livros';

		//function to get books
		this.get = function () {
			return http({
				method: 'GET',
				url: contextPath + url,
				contentType: "application/json"
			}).error(function (e, status) {
				alertify.error('Erro');
			});
		};

		//function to insert or update books
		this.put = function (obj) {
			return http({
				method: 'POST',
				url: contextPath + url,
				data: JSON.stringify(obj),
				contentType: "application/json"
			}).error(function (e, status) {
				alertify.error('Erro');
			});
		};

		//function to delete book
		this.delete = function (obj) {
			return http({
				method: 'DELETE',
				url: contextPath + url + '/' + obj._id,
				contentType: "application/json"
			}).error(function (e, status) {
				alertify.error('Erro');
			});
		};
}]);