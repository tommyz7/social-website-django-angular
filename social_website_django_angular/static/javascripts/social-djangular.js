angular
	.module('social_djangular', [
		'social_djangular.config',
		'social_djangular.routes',
		'social_djangular.authentication',
		'social_djangular.layout',
		'social_djangular.posts',
		'social_djangular.utils'
	]);

angular
	.module('social_djangular.config', []);

angular
	.module('social_djangular.routes', ['ngRoute']);

angular
	.module('social_djangular')
	.run(csrf_token);

csrf_token.$inject = ['$http'];

function csrf_token($http){
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrftoken';
}
