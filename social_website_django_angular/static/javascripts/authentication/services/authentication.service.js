(function () {
	'use strict';

	angular
		.module('social_djangular.authentication.services')
		.factory('Authentication', Authentication);

	Authentication.$inject = ['$cookies', '$http'];

	function Authentication($cookies, $http){
		var Authentication = {
			register: register
		};

		return Authentication;

		function register(email, password, username){
			$http.post('/api/v1/accounts', {
				email: email,
				password: password,
				username: username
			});
		}
	}
})();