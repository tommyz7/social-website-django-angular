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

angular
	.module('social_djangular')
	.run(csrf_token);

csrf_token.$inject = ['$http'];

function csrf_token($http){
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrftoken';
}
