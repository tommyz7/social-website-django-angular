(function (){
    'use strict';

    angular
        .module('social_djangular.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'Authentication'];


    function NavbarController($scope, Authentication){
        var nbCtl = this;

        nbCtl.logout = logout;

        function logout(){
            Authentication.logout();
        }
    }
})();