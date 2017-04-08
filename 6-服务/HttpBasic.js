var app = angular.module("myApp",[]);
app.controller("LoadDataCtrl",["$scope","$http", function ($scope,$http) {
    $http({
        method:"GET",
        url:"data.json"
    }).then(function (response) {
        //成功的时候执行
        console.log("success...");
        console.log(response);
        $scope.users = response.data;
    }, function (response) {
        //失败的时候执行
        console.log("error...");
        console.log(response);
    });

}]);