(function (angular) {
    'use strict';
    
    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: 'Components/JobSearchHelper/jobSearchHelper.view.html'
        }
    }
    angular.module('JobSearchHelper').directive('jobsearchhelper', direvtiveFN);
})(angular);
