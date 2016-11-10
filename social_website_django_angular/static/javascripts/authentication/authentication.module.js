(function(){
	'use strict';

	angular
		.module('social_djangular.authentication', [
			'social_djangular.authentication.controllers',
			'social_djangular.authentication.services'
		]);

	angular
		.module('social_djangular.authentication.controllers', []);

	angular
		.module('social_djangular.authentication.services', ['ngCookies']);
})();