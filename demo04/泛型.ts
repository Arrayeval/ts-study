// 泛型： 可以支持不特定的数据类型，要求：传入的参数和返回的参数一致
function getData<T>(value:T):T {
    return value
}

getData<number>(123) // 参数必须是 number
getData<string>('123') // 参数必须是string

function getData2<T>(value:T):any {
    return value
}
getData2('3')
getData2(33)


class NumberDeal<T> {
    public list:T[] = [];
    add (value:T):any {
        this.list.push(value)
        return this;
    }
    min():T {
        return Math.min.apply(null, this.list)
    }
}
var m1 = new NumberDeal<number>()
m1.add(1).add(2).add(3).add(5)
console.log(m1.min())

var m2 = new NumberDeal<string> ()
m2.add("a").add("b").add("c")


// 泛型类型接口
interface ConfigFn2 {
    <T>(value:T):T
}
var getData3:ConfigFn2 = function<T>(value:T):T {
    return value
}
getData3<string>('werer')

//形式2
interface ConfigFn3<T> {
    (value:T):T;
}
function getData4 <T>(value:T):T {
    return   value
}
var myGetData:ConfigFn3<string> =  getData4