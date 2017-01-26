(function(){
    'use strict';

    angular
        .module('social_djangular.posts.controller')
        .controller('NewPostController', NewPostController);

    NewPostController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Posts'];

    function NewPostController($rootScope, $scope, Authentication, Snackbar, Posts){
        var newPostCtl = this;

        newPostCtl.submit = submit;

        function submit(){
            $rootScope.$broadcast('post.created', {
                content: newPostCtl.content,
                author: {
                    username: Authentication.getAuthenticatedAccount().username
                }
            });
            $scope.closeThisDialog();

            Posts.create(newPostCtl.content).then(createPostSuccessFn, createPostErrorFn);

            function createPostSuccessFn(data, status, headers, config){
                Snackbar.show('Success! Post created.');
            }

            function createPostErrorFn(data, status, headers, config){
                $rootScope.$broadcast('post.created.error');
                Snackbar.error(data.data.content);
            }
        }
    }
})();