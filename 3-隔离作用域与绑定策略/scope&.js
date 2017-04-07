var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", function ($scope) {
    $scope.sayHello = function (name) {
        alert("Hello " + name);
    }
}]);
app.directive("greeting", function () {
    return {
        restrict: "EA",
        scope: {
            greet: "&"
        },
        template: "<div><input type='text' ng-model='userName'>" +
        "<button class='btn btn-default' ng-click='greet({name:userName})'>Greet</button></div>"
    }
});