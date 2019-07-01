console.log("nihoa ");
function getData() {
}
var str = "你好ts";


/**
 * 1) tsc --init 生成tsconfig.json 改变“outDir”
 * 2) 任务 ， tsc监视  
 */ 
// ts中数据类型：布尔（boolean） 数字类型（number） 字符串类型（string） 数组类型（array） 元组类型（tuple） 枚举类型（enum）任意类型（any） null 和undefined void nerver 

let flag:boolean = true

// 定义数组的方式
// var arr = [1,3,4]; // es5
var arr:number[] = [11,23,33]
console.log(arr)

var arr2:Array<number> = [1,32,34]

/**
 * [元组]
 *数组中既可以 是数字也可以是字符串
 * 需要为每个元素指定类型
 * */ 
let arr3:[number, string] = [2, '2']

let arr4:any[] = ['333', 2, true]

/**
 * [枚举]
 * 元素种类可以多样
 * enum 枚举名 {
 *  标识符[=整型常数]
 *  标识符[=整型常数]
 *  标识符[=整型常数]
 *  .....
 * }
 * 如果没有赋值：则值为其下标
 * 应用场景： 错误状态吗
*/
enum Flag {success = 1, error = 2, 'padding'}
let s:Flag = Flag.error // 2
let p:Flag = Flag.padding // 3

enum Err {
    "undefined"=1,
    "null"=-2,
    "success"=1
}   
let e:Err = Err.success // 1

/**
 * any 
 * 任意类型(可任意变化类型)
 * 应用场景：
 *  
 */
var num:any = 123
num = '123'

var oBox:any = document.getElementById("div")
oBox.style.color = 'red'

/**
 * null / undefined 其他（never类型）数据类型的子类型 
 **/
var testNum:number
console.log(testNum) // 输出：undefined 编译报错

var testNum2:undefined
console.log(testNum2) // 输出 undefined 正确

var testNum3:number | undefined
console.log(testNum3)


var testNum4:null

/**
 * void 没有任何类型
 * 用于 定义方法的时候方法没有返回值
 * 
*/
function run ():void {
}
run()

function run2():number {
    return 122
}

// never 类型：是其他类型（包括null, undefined） 的子类型， 代表不会出现的值