(function(){
	'use strict';

	angular
		.module('social_djangular.authentication.controllers')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['$location', '$scope', 'Authentication'];

	function RegisterController($location, $scope, Authentication){
		var regCrl;
		regCrl = this;
		regCrl.register = register;
		function register(){
			Authentication.register(regCrl.email, regCrl.password, regCrl.username);
		}
	}
})();