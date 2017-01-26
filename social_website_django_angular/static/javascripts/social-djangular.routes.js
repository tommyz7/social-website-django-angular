(function(){
	'use strict';

	angular
		.module('social_djangular.routes')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider){
		$routeProvider.when('/register', {
			controller: 'RegisterController',
			controllerAs: 'regCtl',
			templateUrl: 'static/templates/authentication/register.html'
		}).when('/login', {
		    controller: 'LoginController',
		    controllerAs: 'loginCtl',
		    templateUrl: 'static/templates/authentication/login.html'
		}).when('/', {
		    controller: 'IndexController',
		    controllerAs: 'indexCtl',
		    templateUrl: 'static/templates/layout/index.html'
		}).otherwise('/');
	}
})();