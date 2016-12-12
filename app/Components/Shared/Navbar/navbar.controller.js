(function(angular){
    'use strict';
    function controllerFn($scope,$window,$mdSidenav){
        $scope.goto = function(path){
            $window.location.href = path;
        }
        $scope.material = function(){
            $window.location.href = "https://material.angularjs.org/";
        }
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }
    }
    
    controllerFn.$inject = ['$scope','$window','$mdSidenav'];
    
    angular.module("myApp").controller("NavbarController",controllerFn);
})(angular);

