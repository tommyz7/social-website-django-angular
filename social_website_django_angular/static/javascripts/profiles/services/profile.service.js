(function(){
    'use strict';

    angular
        .module('social_djangular.profiles.services')
        .factory('Profile', Profile);

    Profile.$inject = ['$http', 'Authentication'];

    function Profile($http, Authentication){
        var accounts_endpoint = '/api/v1/accounts/';

        var Profile = {
            destory: destory,
            get: get,
            update: update
        };
        return Profile;

        function destory(profile){
            return $http.delete(accounts_endpoint + profile.id + '/');
        }

        function get(username){
            return $http.get(accounts_endpoint + username + '/');
        }

        function update(profile){
            var account = Authentication.getAuthenticatedAccount();
            return $http.put(accounts_endpoint + account.username + '/', profile);
        }
    }
})();