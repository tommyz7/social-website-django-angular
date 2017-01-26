(function(){
    'use strict';

    angular
        .module('social_djangular.posts.directives')
        .directive('posts', posts);

    function posts(){
        var directive = {
            controller: 'PostsController',
            controllerAs: 'postsCtl',
            restrict: 'E',
            scope: {
                posts: '='
            },
            templateUrl: '/static/templates/posts/posts.html'
        };

        return directive;
    }
})();