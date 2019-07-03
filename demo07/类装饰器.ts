/**
 * 装饰器： 装饰器是一种特殊的类型声明，他能被附加到类声明，方法，属性或者参数上，可以修改类的行为
 * 通俗的讲： 装饰器是一个方法，可以注入到类，方法，属性参数上来拓展类，属性，方法，参数的功能 
 * 
 * 写法： 普通装饰器（无法传参） 装饰工厂（可传参）
 * */

 // 1.类装饰器： 类装饰器在类声明之前被声明（紧靠着类声明），用于修改，替换类的定义
 

 // 普通装饰器
 function logClass (parma:any) {
     console.log(parma) // parma就是装饰器
     parma.prototype.apiUrl = "动态拓展属性";
     parma.prototype.run = function () {
        console.log("我就是一个run方法")
     }
 }

 @logClass
 class HttpClient {
    constructor () {}
    getData () {}
 }

 // 装饰器工厂
function logClass2 (parma:any) {
    return function (target:any) {
        target.prototype.getData = function () {
            console.log(parma)
        }
    }
}

@logClass2("http://baidu.com")
class HttpClient2 {
   constructor () {}
   getData () {}
}

/**
 * 类装饰器：可以用来重载构造函数
 * 装饰器表达式在运行的时候会当作函数被调用
 * */
 function loginClass (target:any) {
     return class extends target {
        apiUrl:any = "我是修改后的数据";
        getData () {
            this.apiUrl = this.apiUrl + '------';
            console.log(this.apiUrl)
        }
     }
 }
 @loginClass
 class HttpLoginClient {
    public apiUrl: string | undefined;
    constructor () {
        this.apiUrl = '我是构造函数里面的apiUrl'
    }
    getData () {
        console.log(this.apiUrl)
    }
 }
 var http = new HttpLoginClient()
 http.getData()


