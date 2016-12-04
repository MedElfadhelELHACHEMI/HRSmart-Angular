(function (angular) {
    'use strict';
    
    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: 'Components/Navbar/navbar.view.html'
        }
    }
    angular.module('myApp').directive('navbar', direvtiveFN);
})(angular);
