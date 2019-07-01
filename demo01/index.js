console.log("nihoa ");
function getData() {
}
var str = "你好ts";
/**
 * 1) tsc --init 生成tsconfig.json 改变“outDir”
 * 2) 任务 ， tsc监视
 */
// ts中数据类型：布尔（boolean） 数字类型（number） 字符串类型（string） 数组类型（array） 元组类型（tuple） 枚举类型（enum）任意类型（any） null 和undefined void nerver 
var flag = true;
// 定义数组的方式
// var arr = [1,3,4]; // es5
var arr = [11, 23, 33];
console.log(arr);
var arr2 = [1, 32, 34];
/**
 * [元组]
 *数组中既可以 是数字也可以是字符串
 * 需要为每个元素指定类型
 * */
var arr3 = [2, '2'];
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
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
    Flag[Flag["padding"] = 3] = "padding";
})(Flag || (Flag = {}));
var s = Flag.error; // 2
var p = Flag.padding; // 3
var Err;
(function (Err) {
    Err[Err["undefined"] = 1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
var e = Err.success; // 1
/**
 * any
 * 任意类型(可任意变化类型)
 * 应用场景：
 *
 */
var num = 123;
num = '123';
var oBox = document.getElementById("div");
oBox.style.color = 'red';
