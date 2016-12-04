(function(angular){
    'use strict';
    function controllerFn($scope){
        $scope.msg = "test";
    }
    
    controllerFn.$inject = ['$scope'];
    
    angular.module("myApp").controller("Test2Controller",controllerFn);
})(angular);

