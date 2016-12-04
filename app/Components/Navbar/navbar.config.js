(function(angular){
    'use strict';
    function configFn($routeProvider){
        $routeProvider.when('/',{
            controller:"Test1Controller",
            templateUrl:"Components/Test1/test1.view.html"
        }).when('/test2',{
            controller:"Test2Controller",
            templateUrl:"Components/Test2/test2.view.html"
        }).otherwise('/');
    }
    
    configFn.$inject=['$routeProvider'];
    angular.module("myApp").config(configFn);
    
})(angular);