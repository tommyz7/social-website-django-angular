(function () {
    'use strict';

    angular
        .module('social_djangular.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'Authentication', 'Posts', 'Snackbar'];


    function IndexController($scope, Authentication, Posts, Snackbar) {
        var index_ctl = this;

        index_ctl.isAuthenticated = Authentication.isAuthenticated();
        index_ctl.posts = [];

        activate();

        function activate() {
            Posts.all().then(postsSuccessFn, postsErrorFn);

            $scope.$on('post.created', function(event, post) {
                index_ctl.posts.unshift(post);
            });

            $scope.$on('post.created.error', function() {
                index_ctl.posts.shift();
            });

            function postsSuccessFn(data, status, headers, config) {
                index_ctl.posts = data.data;
            }

            function postsErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }

    }
})();
