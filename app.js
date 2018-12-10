var app = angular.module("callService",[
    'ngResource',
    'ui.router'
]).controller("controllerForms", function ($scope) {
    $scope.hello = function () {
        console.log($scope.name);
        console.log($scope.email);
        console.log($scope.password);
    }
});