var app = angular.module("myApp",[]);
app.controller("Controller",["$scope", function ($scope) {
    $scope.user = {
        name:"Botao",
        email:"botaoxyz@163.com",
        gender:"male",
        agree:true
    };
    $scope.reset = function () {
        $scope.user = {};
    }
}]);