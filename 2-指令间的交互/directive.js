var app = angular.module("myApp",[]);
app.directive("superman", function () {
    return {
        restrict:"AE",
        scope:{},   //隔离作用域
        controller: function ($scope) {     //指令内部的controller,用来给指令暴露出public方法,供外部调用
            $scope.abilities = [];
            this.addStrength = function () {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function () {
                $scope.abilities.push("speed");
            };
            this.addLight = function () {
                $scope.abilities.push("light");
            };
        },
        link: function (scope,elem,attr) {
            elem.addClass("btn btn-primary");
            elem.on("mouseenter", function () {
                console.log(scope.abilities);
            });
        }
    }
});
app.directive("strength", function () {
    return {
        require:"^superman",     //依赖于superman指令
        link: function (scope,elem,attr,supermanCtrl) {
            supermanCtrl.addStrength();

        }
    }
});
app.directive("speed", function () {
    return{
        require:"^superman",
        link: function (scope,elem,attr,supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
app.directive("light", function () {
    return{
        require:"^superman",
        link: function (scope,elem,attr,supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});