(function (angular) {
    'use strict';
    
    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: 'Components/Shared/Navbar/navbar.view.html'
        }
    }
    angular.module('myApp').directive('navbar', direvtiveFN);
})(angular);
