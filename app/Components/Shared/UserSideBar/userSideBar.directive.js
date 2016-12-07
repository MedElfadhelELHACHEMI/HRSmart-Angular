(function (angular) {
    'use strict';
    
    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: 'Components/Shared/UserSideBar/userSideBar.view.html'
        }
    }
    angular.module('UserSideBar').directive('usersidebar', direvtiveFN);
})(angular);
