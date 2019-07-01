function Person () {
    this.name = "张三"
    this.age = 33
}

var p = new Person()

// 构造函数增加方法
Person.prototype.getName = function () {
    console.log(this.name)
} 

// 直接在构造函数名上添加方法： 静态方法
Persion.getInfo = function () {
   alert("我是静态方法") 
}
Persion.getInfo()

// es5的继承
// 原型链 + 对象冒充的组合继承模式
// 1.对象冒充实现继承
function Web () {
    Person.call(this) // 对象冒充实现继承,只能构造函数中的方法，但是不能继承原型上的方法
}
var w = new Web()
w.run()
w.getName() //error

//2. 原型链继承 [既可以继承构造函数中的方法，也可以继承原型上的方法]
function Web2 () {}
Web2.prototype = new Persion ()

//弊端: 原型继承的方式没法给父类传参数
function Animal (name, age) {
    this.name = name
    this.age = age
    this.getName = function () {
        console.log(this.name)
    }
}
function Dog (name, age) {}
Dog.prototype = new Animal()
let dog = new Dog("拉布拉多", 23)
dog.getName() // undefined


// 解决方案：实例化子类的时候设法给父类传参 ，冒充继承+原型继承

function Animal (name, age) {
    this.name = name
    this.age = age
    this.getName = function () {
        console.log(this.name)
    }
}
function Dog (name, age) {
    Animal.call(this, name, age)
}
Dog.prototype = Animal.prototype
Dog.prototype.constructor = Dog
let dog = new Dog("拉布拉多", 23)
dog.getName() 

