(function(){
	'use strict';

	angular
		.module('social_djangular.routes')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider){
		$routeProvider.when('/register', {
			controller: 'RegisterController',
			controllerAs: 'RegCtl',
			templateUrl: 'static/templates/authentication/register.html'
		}).otherwise('/');
	}
})();