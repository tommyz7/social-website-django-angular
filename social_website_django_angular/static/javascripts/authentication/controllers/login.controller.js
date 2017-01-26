(function(){
    'use strict';

    angular
        .module('social_djangular.authentication.controllers')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$location', '$scope', 'Authentication'];
    function LoginController($location, $scope, Authentication){
        var loginCtl = this;
        loginCtl.login = login;
        activate();

        function activate(){
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }
        function login(){
            Authentication.login(loginCtl.email, loginCtl.password);
        }
    }
})();
