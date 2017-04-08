var app = angular.module("myApp", []);
app.filter("myFilter", function () {
    return function (item, num) {
        num = num ? num : 1;
        return item + "☺".repeat(num);
    }
});
app.filter("truncate", function () {
    return function (telNum,length) {    //<td>{{v.tel|truncate:8}}</td>
        length = length?length:4;
        return telNum.substr(0,11-length)+"*".repeat(length);
    }
});
app.controller("filterController", ["$scope", function ($scope) {
    $scope.data = [
        {id: 1, name: "Jack", tel: "13033456743"},  //坑:电话号码需是字符串型,找了半天bug
        {id: 2, name: "Mary", tel: "15032254324"},
        {id: 3, name: "Ed", tel: "18734356895"}
    ]
}]);