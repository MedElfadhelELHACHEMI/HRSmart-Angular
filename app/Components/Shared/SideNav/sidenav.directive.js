(function (angular) {
    'use strict';

    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: 'Components/Shared/SideNav/sidenav.view.html'
        }
    }
    angular.module('myApp').directive('sidenav', direvtiveFN);
})(angular);
