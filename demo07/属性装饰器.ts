/**
 * 属性装饰器：
 * 属性装饰器： 表达式会在运行的时候当作函数被调用，传入下列2个参数：
 * 1.对于静态成员来说是类的构造函数，对于实例成员时类的原型对象
 * 2.成员的名字
 **/

// 装饰器工厂
function logClass2 (parma:any) {
    return function (target:any) {
        target.prototype.url = parma
        target.prototype.getData = function () {
            console.log(parma)
        }
    }
}

// 属性装饰器
function logProperty(params:any) {
    return function(target:any, attr:any) {
        console.log(target)
        console.log(attr)
        target[attr] = params // target:类的原型对象 attr: url 属性成员
    }
}

@logClass2("http://baidu.com")
class HttpClient23 {
   @logProperty("http://itying.com")
   public url: any | undefined
   constructor () {}
   getData () {
       console.log(this.url)
   }
}
 