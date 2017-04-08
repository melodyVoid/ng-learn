var app = angular.module("myApp",[]);
app.controller("filterCtrl",["$scope", function ($scope) {
    $scope.price = 1234.78;
    $scope.time = new Date().getTime();
    $scope.message = "每天都是新的开始";
    $scope.name = "John Doe";
    $scope.data = [
        {name: "Jack", sex: "female", age: 18},
        {name: "Mary", sex: "male", age: 20},
        {name: "Ed", sex: "female", age: 103}
    ]
}]);