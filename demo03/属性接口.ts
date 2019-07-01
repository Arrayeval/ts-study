function printLabel(labelInfo:{label:string}):void {
    console.log("printLabel", labelInfo.label)
}
printLabel({label:"张三"})

//批量方法传入参数的约束
 
// 接口： 行为和动作的约束 对批量方法进行约束
// 1:属性类接口
interface FullName {
    firstName:string;
    secondName:string;
    age?:number // 接口可选属性
}
function printName(info:FullName) {
    // 必须传入对象 firstName secondName
    console.log(info.firstName+ '--'+ info.secondName)
}
printName({
    secondName: 'bao',
    firstName: 'li',
})
printName({
    secondName: 'bao',
    firstName: 'li',
    age:34
})
printName({
    firstName: 'w'
})


// demo02
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}

function ajax(config:Config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('change')
            if (config.dataType === 'json') {
                console.log(xhr.responseText)
                return
            }
            console.log(xhr.responseText)
            return
        }
    }
}
ajax({
    type: 'get',
    url: 'http"baidu.com',
    dataType: 'json',
})