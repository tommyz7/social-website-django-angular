(function(){
    'use strict';

    angular
        .module('social_djangular.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication', '$routeParams'];

    function LoginController($location, $scope, Authentication, $routeParams){
        var loginCtl = this;
        loginCtl.login = login;
        loginCtl.email= $routeParams.email;
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
