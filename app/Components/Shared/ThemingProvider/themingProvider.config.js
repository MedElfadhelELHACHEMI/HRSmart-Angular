(function (angular) {
    angular.module("myApp").config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('light-blue')
            .warnPalette('red')
            .backgroundPalette('grey');
    });
})(angular);
