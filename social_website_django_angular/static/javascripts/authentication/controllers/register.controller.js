(function(){
	'use strict';

	angular
		.module('social_djangular.authentication.controllers')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['$location', '$scope', 'Authentication'];

	function RegisterController($location, $scope, Authentication){
		var regCrl = this;
		regCrl.register = register;

		activate();

		function activate(){
		    if (Authentication.isAuthenticated()){
		        $location.url('/');
		    }
		}
		function register(){
			return Authentication.register(regCrl.email, regCrl.password, regCrl.username);
		}
	}
})();