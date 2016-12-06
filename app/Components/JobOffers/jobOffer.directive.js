(function (angular) {
    'use strict';
    
    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: 'Components/JobOffers/jobOffer.view.html'
        }
    }
    angular.module('JobOffers').directive('joboffer', direvtiveFN);
})(angular);
