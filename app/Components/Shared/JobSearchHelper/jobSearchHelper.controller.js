(function (angular) {
    'use strict';

    function controllerFn($scope) {
        $scope.skills = [{name:"Front End Developpement"},{name:"Back End Developpement"},{name:"Yuki On The Block"}];
    }
    controllerFn.$inject = ['$scope'];
    angular.module('JobSearchHelper').controller("JobSearchHelperController", controllerFn);
})(angular);
