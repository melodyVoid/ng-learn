var app = angular.module("myApp", []);
app.directive("hello", function () {
    return {
        restrict: "EA",
        scope: {},    //设置隔离作用域,四个指令互不影响
        template: "<div><input type='text' ng-model='hello'></div>",
        replace: true
    }
});