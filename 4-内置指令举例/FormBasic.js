var app = angular.module("myApp",[]);
app.controller("TestForm",["$scope", function ($scope) {
    $scope.user = {
        userName : "Botao",
        password : "123456"
    };
    $scope.save = function () {
        alert("保存数据")
    }
}]);