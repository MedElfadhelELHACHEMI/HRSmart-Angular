(function (angular) {
    angular.module("myApp").config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('red')
            .accentPalette('light-blue')
            .warnPalette('red')
            .backgroundPalette('blue');
    });
})(angular);
