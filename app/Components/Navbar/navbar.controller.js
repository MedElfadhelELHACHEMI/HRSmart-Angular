(function(angular){
    'use strict';
    function controllerFn($scope,$window){
        $scope.goto = function(path){
            $window.location.href = "#"+path;
        }
        $scope.material = function(){
            $window.location.href = "https://material.angularjs.org/";
        }
    }
    
    controllerFn.$inject = ['$scope','$window'];
    
    angular.module("myApp").controller("NavbarController",controllerFn);
})(angular);

