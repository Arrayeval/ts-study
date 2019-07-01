class Person1 {
    name: String; // 属性， 前面省略了关键字public
    
    constructor(n:string) { // 构造函数， 实例化类的时候触发的方法
        this.name = n
    }
    getName():string {
        alert(this.name)
        return 'getName'
    }
    setName(name:string):void {
        this.name = name
    }
}
var m = new Person1("张三")


// ts中的继承 extends\super

class Person2 {
    public name:string;
    constructor (name:string) {
        this.name = name;
    }
    run():string {
        return `${this.name}在运动`
    }
} 
var p2 = new Person2('王五')
p2.run()

class Webdd extends Person2 {
    static age= 23
    constructor (name:string) {
        super(name) //初始化父类构造函数
    }
    static print ():void { // 静态方法中不能调用类的非静态属性
        alert("print方法 ")
        console.log(Webdd.age)
    }
}
var ww = new Webdd("里斯")
Webdd.print()

// 类里面的修饰符， typescript 里面定义属性给了三种修饰符
 /**
  * public: 公有 在类里面， 子类， 类外面都可以访问
  * protected:保护类型 在类里面， 子类里面可以访问，在类外部是无法访问的
  * private: 私有 在类里面可以访问，子类，类外部没法访问[可以在当前类的方法中使用]
  * 属性如果不加修饰符， 默认就是公有（public）
 */
 

 // 多态也是继承的一种
 class Animal2 {
    public name:string;
     constructor (name:string) {
        this.name = name
     }
     eat () {
        console.log("吃的方法")
     }
 }

 class Dog extends Animal2 {
     constructor (name:string) {
        super(name)
     }
     eat ():string {
        return this.name + '吃肉'
     }
 }

 // typescript中的抽象类，他是提供其他类继承的基类，不能直接被实例化
 // 用abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 // abstract抽象方法只能放在抽象类里面
 // 抽象类和抽象方法用来定义标准

 abstract class Animal3 {
     public name:string;
     constructor (name) {
         this.name = name
     }
     abstract eat():any
 }
 class Cat extends Animal3 {
     constructor (name) {
        super(name)
     }
     eat () { // 抽象的子类必须实现抽象类里面的抽象方法
        console.log(this.name+ "吃粮食")
     }
 }

 var d = new Cat("小狗")