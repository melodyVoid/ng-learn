var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", function ($scope) {
    $scope.ctrlFlavor = "water";
}]);
app.directive("drink", function () {
    return {
        restrict: "EA",
        template: "<input type='text' ng-model='flavor'>",
        scope: {
            flavor: "="
        }
    }
});