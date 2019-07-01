// 可索引接口： 数组，对象的约束（不常用）
var arr:number[] = [2,34]
var arr2:Array<string> = ['a', 'v']

interface UserArr {
    [index:number]:string
}
var arr4:UserArr = ['this is info', 'camlie']

var arr5:UserArr = [3, 'eee'] //error

var obj:UserArr = {
    1: 'eee',
    2: 'bbb'
}

var obj2:UserArr = {// error
    "a": 'dd'
}

// 类类型接口： 对类的约束 和抽象类有点相似
interface Animal {
    name: string;
    eat(str:string) :void
}

class Dog implements Animal {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
    eat() {
        console.log(this.name+"吃饭")
    }
}
var d = new Dog("小黑")

// 接口的拓展： 接口可以继承接口
interface Animal{
    eat():void;
    name: string;
}
interface Person extends Animal {
    work():void
}

class Web  implements Person {
    public name: string;
    constructor (name:string) {
        this.name = name
    }
    eat():void {}
    work():void {}
}

var W = new Web('小李')