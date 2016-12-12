/**
 * Created by BoB on 12/12/2016.
 */
(function (angular) {
    'use strict';

    function controllerFn($scope) {
        $scope.title='index page';
        $scope.jobs = [{
            name: "Front End Developpement",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            jobSkills: [{
                name: "JavaScript"
            }, {
                name: "HTML"
            }, {
                name: "CSS"
            }]
        }, {
            name: "Back End Developpement",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            jobSkills: [{
                name: "JavaScript"
            }, {
                name: "NodeJS"
            }, {
                name: "Express"
            }]
        }, {
            name: "Yuki On The Block",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            jobSkills: [{
                name: "Nothing"
            }, {
                name: "Everything"
            }]
        }];
    }
    controllerFn.$inject = ['$scope'];
    angular.module('IndexContent').controller("IndexContentController", controllerFn);
})(angular);
