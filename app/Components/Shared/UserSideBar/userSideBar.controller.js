(function (angular) {
    'use strict';

    function controllerFn($scope) {
        $scope.user = {
            firstName: "Hadhemi",
            lastName: "Laouini",
            dateNaissance: new Date()
        };
    }
    controllerFn.$inject = ['$scope'];
    angular.module('UserSideBar').controller("UserSideBarController", controllerFn);
})(angular);
