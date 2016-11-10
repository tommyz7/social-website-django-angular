angular
	.module('social_djangular', [
		'social_djangular.config',
		'social_djangular.routes',
		'social_djangular.authentication'
	]);

angular
	.module('social_djangular.config', []);

angular
	.module('social_djangular.routes', ['ngRoute']);

