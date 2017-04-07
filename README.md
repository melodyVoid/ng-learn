# ng-learn

### 1-指令的复用

![QQ20170407-141202](/Users/melody0z/github/ng-learn/img/attention/QQ20170407-141202.png)

### 2-指令间的交互

>#### 动感超人小例子

#### 什么逻辑写在controller里？什么逻辑写在link里？

- 如果想要指令暴露public方法供外部调用，就写在controller里。

- link是用来处理指令内部的一些事务的。比如：给元素绑定事件，操作DOM之类的。

```
app.directive("strength", function () {
        return {
            require:"^superman",     //依赖于superman指令
            link: function (scope,elem,attr,supermanCtrl) {
                supermanCtrl.addStrength();
            }
        }
 });
```

`require:"^superman"`表示依赖

写了require之后，link函数就可以写第四个参数，第四个参数会自动注入到link函数里面来，这样supermanCtrl就可以用superman指令控制器里暴露出的方法了。


