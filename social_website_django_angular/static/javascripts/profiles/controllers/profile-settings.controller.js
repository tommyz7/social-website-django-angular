(function(){
    'use strict';

    angular
        .module('social_djangular.profiles.controllers')
        .controller('ProfileSettingsController', ProfileSettingsController);

    ProfileSettingsController.$inject = ['$location', '$routeParams', 'Profile', 'Authentication', 'Snackbar'];

    function ProfileSettingsController($location, $routeParams, Profile, Authentication, Snackbar){
        var profileSettingsCtl = this;

        profileSettingsCtl.profile = undefined;
        profileSettingsCtl.destroy = destroy;
        profileSettingsCtl.update = update;

        activate();

        function activate(){
            var authenticatedAccount = Authentication.getAuthenticatedAccount();
            var username = $routeParams.username.substr(1);

            if (!authenticatedAccount || authenticatedAccount.username != username){
                $location.url('/');
                Snackbar.error('You are not authorized to view this page.');
            }

            Profile.get(username).then(profileSuccessFn, profileErrorFn);

            function profileSuccessFn(data, status, headers, config){
                profileSettingsCtl.profile = data.data;
            }

            function profileErrorFn(data, status, headers, config){
                $location.url('/');
                Snackbar.error('That user does not exist.');
            }
        }


        function destroy(){
            Profile.destory(profileSettingsCtl.profile.username).then(profileDestroySuccess, profileDestroyError);

            function profileDestroySuccess(data, status, headers, config){
                Authentication.unauthenticate();
                window.location = '/';
                Snackbar.show('Your account has been deleted.');
            }

            function profileDestroyError(data, status, headers, config){
                Snackbar.error(data.error);
            }
        }

        function update(){
            Profile.update(profileSettingsCtl.profile).then(profileUpdateSuccess, profileUpdateError);

            function profileUpdateSuccess(data, status, headers, config){
                if (profileSettingsCtl.profile.password
                || profileSettingsCtl.profile.username != Authentication.getAuthenticatedAccount().username
                || profileSettingsCtl.profile.email != Authentication.getAuthenticatedAccount().email) {
                    Authentication.unauthenticate();
                    Snackbar.show('Your profile has been updated. Please log in again.');
                    setTimeout(function(){
                        window.location = '/login?email='+profileSettingsCtl.profile.email;
                    }, 2000);
                } else {
                    Snackbar.show('Your profile has been updated.');
                }
            }

            function profileUpdateError(data, status, headers, config){
                Snackbar.error(data.data.detail);
            }
        }

    }

})();