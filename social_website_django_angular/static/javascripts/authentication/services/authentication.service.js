(function () {
	'use strict';

	angular
		.module('social_djangular.authentication.services')
		.factory('Authentication', Authentication);

	Authentication.$inject = ['$cookies', '$http'];

	function Authentication($cookies, $http){
		var Authentication = {
		    getAuthenticatedAccount: getAuthenticatedAccount,
		    setAuthenticatedAccount: setAuthenticatedAccount,
		    isAuthenticated: isAuthenticated,
		    unauthenticate: unauthenticate,
		    login: login,
			register: register
		};

		return Authentication;

		function getAuthenticatedAccount(){
		    if (!$cookies.authenticatedAccount){
		        return;
		    }

		    return JSON.parse($cookies.authenticatedAccount)
		}

		function isAuthenticated(){
	        return !!$cookies.authenticatedAccount;
	    }

	    function setAuthenticatedAccount(account){
	        $cookies.authenticatedAccount = JSON.stringify(account);
	    }

	    function unauthenticate(){
	        delete $cookies.authenticatedAccount;
	    }

        function login(email, password){
            $http.post('/api/v1/auth/login/', {
                email: email,
                password: password
            }).then(loginSuccessFn, loginErrorFn);

            function loginSuccessFn(data, status, headers, config){
                Authentication.setAuthenticatedAccount(data.data);

                window.location = '/';
            }

            function loginErrorFn(data, status, headers, config){
                console.log('Login error.');
            }
        }

		function register(email, password, username){
			$http.post('/api/v1/accounts', {
				email: email,
				password: password,
				username: username
			});
		}
	}
})();