(function(){
    'use strict';

    angular
        .module('social_djangular.profiles.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$routeParams', 'Profile', 'Posts', 'Snackbar'];

    function ProfileController($location, $routeParams, Profile, Posts, Snackbar){
        var profileCtl = this;

        profileCtl.profile = undefined;
        profileCtl.posts = [];

        activate();

        function activate(){
            var username = $routeParams.username.substr(1);

            Profile.get(username).then(profileSuccessFn, profileErrorFn);
            Posts.get(username).then(postsSuccessFn, postsErrorFn);

            function profileSuccessFn(data, status, headers, config){
                profileCtl.profile = data.data;
            }

            function profileErrorFn(data, status, headers, config){
                $location.url('/');
                Snackbar.error('That user doesn\'t exsist.');
            }

            function postsSuccessFn(data, status, headers, config){
                profileCtl.posts = data.data;
            }

            function postsErrorFn(data, status, headers, config){
                Snackbar.error(data.data.error);
            }

        }


    }
})();