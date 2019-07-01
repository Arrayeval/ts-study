// 函数类型的接口： 对函数参数，以及返回值进行约束

interface encrypt {
    (key:String, value:string): string;
}

var md5:encrypt = function (key:String, value:string):string {
    return Key + value
}
console.log(md5('name', 'afd'))


// 函数类型接口
interface ConfigFn {
    (value1:string, value2:string):string;
}
var setData:ConfigFn = function (value1:string, value2:string):string{
    return value1 + value2
}

