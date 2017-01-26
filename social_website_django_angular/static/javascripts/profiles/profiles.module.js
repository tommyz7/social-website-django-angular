(function(){
    'use strict';

    angular
        .module('social_djangular.profiles', [
            'social_djangular.profiles.services',
            'social_djangular.profiles.controllers'
        ]);

    angular.module('social_djangular.profiles.services', []);
    angular.module('social_djangular.profiles.controllers', []);
})();