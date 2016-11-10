angular
	.module('social_djangular', [
		'social_djangular.config',
		'social_djangular.routes',
	]);

angular
	.module('social_djangular.config', []);

angular
	.module('social_djangular.routes', ['ngRoute']);

