var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope", function ($scope) {
    $scope.ctrlFlavor = "water"
}]);
app.directive("drink", function () {
    return {
        restrict:"EA",
        template:"<div>{{flavor}}</div>",
        //link: function (scope,elem,attr) {    //这样写太繁琐
        //    scope.flavor = attr.flavor;
        //},
        scope:{
            flavor:"@"
        }
    }
});