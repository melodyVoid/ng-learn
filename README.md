# ng-learn

### 1-指令的复用

![QQ20170407-141202](img/attention/QQ20170407-141202.png)



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

### 3-隔离作用域与绑定策略

- @把当前属性作为**字符串**传递，还可以绑定来自外层scope的值，在属性中插入{{}}即可。

- = 与父scope中的属性进行双向绑定。

- & 传递一个来自父scope的函数，稍后调用。

### 6-服务

#### Service的特性：

- Service都是单例的。

- Service由$injector负责实例化。

- Service在整个应用的生命周期中存在，可以用来共享数据。

- 在需要的地方利用依赖注入机制注入Service。

- 自定义的Service需要写在内置的Service后面。

- 内置Service的命名以$符号开头，自定义Service应当避免。

#### Service、Provider、Factory本质都是Provider
- Service、Provider、Factory
- Provider模式是“策略模式”+"抽象工厂模式"的混合体。

### 过滤器
#### 使用$filter服务
- $filter是用来进行数据格式化的专用服务。
- AngularJS内置了9个filter：
- currency,date,filter,json,limitTo,lowercase,uppercase,number,orederBy.
- filter可以嵌套使用(用管道符号|分隔)。
- filter是可以传递参数的。
- 用户可以定义自己的filter。


