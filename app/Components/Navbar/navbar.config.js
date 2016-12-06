(function(angular){
    'use strict';
    function configFn($routeProvider){
        $routeProvider.when('/joboffers',{
            controller:"JobOffersController",
            templateUrl:"Components/JobOffers/jobOffers.view.html"
        }).when('/test2',{
            controller:"Test2Controller",
            templateUrl:"Components/Test2/test2.view.html"
        }).otherwise('/');
    }
    
    configFn.$inject=['$routeProvider'];
    angular.module("myApp").config(configFn);
    
})(angular);