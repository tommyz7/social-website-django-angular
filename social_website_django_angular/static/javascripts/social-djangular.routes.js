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
			templateUrl: '/static/templates/authentication/register.html'
		}).when('/login', {
		    controller: 'LoginController',
		    controllerAs: 'loginCtl',
		    templateUrl: '/static/templates/authentication/login.html'
		}).when('/', {
		    controller: 'IndexController',
		    controllerAs: 'indexCtl',
		    templateUrl: '/static/templates/layout/index.html'
		}).when('/+:username', {
		    controller: 'ProfileController',
		    controllerAs: 'profileCtl',
		    templateUrl: '/static/templates/profiles/profile.html'
		}).when('/+:username/settings', {
		    controller: 'ProfileSettingsController',
		    controllerAs: 'settingsCtl',
		    templateUrl: '/static/templates/profiles/settings.html'
		}).otherwise('/');
	}
})();