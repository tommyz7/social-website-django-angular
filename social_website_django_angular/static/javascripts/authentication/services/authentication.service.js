(function () {
	'use strict';

	angular
		.module('social_djangular.authentication.services')
		.factory('Authentication', Authentication);

	Authentication.$inject = ['$cookies', '$http', 'Snackbar'];

	function Authentication($cookies, $http, Snackbar){
		var Authentication = {
		    getAuthenticatedAccount: getAuthenticatedAccount,
		    setAuthenticatedAccount: setAuthenticatedAccount,
		    isAuthenticated: isAuthenticated,
		    unauthenticate: unauthenticate,
		    login: login,
		    logout: logout,
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
	        $http.get('/admin/logout/');
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
                Snackbar.error('Login error.');
            }
        }

        function logout(){
            return $http.post('/api/v1/auth/logout/')
                .then(logoutSuccessFn, logoutFailFn);

            function logoutSuccessFn(data, status, headers, config){
                Authentication.unauthenticate();
                window.location = '/';
            }

            function logoutFailFn(data, status, headers, config){
                Snackbar.error('logout unsuccessful');
            }
        }

		function register(email, password, username){
			$http.post('/api/v1/accounts/', {
				email: email,
				password: password,
				username: username
			}).then(registerSuccessFn, registerErrorFn);

			function registerSuccessFn(data, status, headers, config){
			    Authentication.login(email, password);
			}

			function registerErrorFn(data, status, headers, config){
			    Snackbar.error('registerErrorFn');
			}
		}
	}
})();
