var app = angular.module("myApp", []);
app.directive("expander", function () {
    return {
        restrict: "EA",
        replace: true,
        transclude: true,
        scope: {
            title: "=expanderTitle"
        },
        templateUrl: "Expander.template.html",
        link: function (scope, elem, attr) {
            scope.showMe = false;
            scope.toggle = function () {
                scope.showMe = !scope.showMe;
            }
        }
    }
});
app.controller("expanderController", ["$scope", function ($scope) {
    $scope.title = "点击展开";
    $scope.text = "这里是内部的内容";
}]);