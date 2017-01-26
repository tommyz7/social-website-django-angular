(function(){
    'use strict';

    angular
        .module('social_djangular.posts', [
            'social_djangular.posts.services',
            'social_djangular.posts.directives',
            'social_djangular.post.directives',
            'social_djangular.posts.controller'
        ]);

    angular.module('social_djangular.posts.services', []);
    angular.module('social_djangular.posts.directives', []);
    angular.module('social_djangular.post.directives', []);
    angular.module('social_djangular.posts.controller', []);
})();