class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined
}
class MysqlDb {
    add (info:ArticleCate):boolean {
        console.log(info);
        console.log(info.title);
        return true;
    }
}

var a = new ArticleCate()
a.title = "国内"
a.desc = "国内2"
a.status = 1;
var Db = new MysqlDb();
Db.add(a)

// 泛型类:类做参数
class MysqlDb2<T> {
    add (info:T):boolean {
        console.log(info);
        return true;
    };
    update (info:T, id:number):boolean {
        return true;
    }
}

// 定义一个User类，和数据库进行 映射
class User {
    username: string | undefined;
    password: string | undefined;
}
var u = new User();
u.username = '张三';
var Db2 = new MysqlDb2<User>();
Db2.add(u)

class ArticleCate2 {
    title: string | undefined;
    des: string | undefined;
    author: string | undefined;
    status?:string|boolean;
    constructor (
        title: string|undefined, 
        des:string | undefined,
        author:string | undefined) {
            this.title = title;
            this.des = des;
            this.author = author;
    };
}
var ar = new ArticleCate2("武汉维权", "政府无能", "太尚军");
var Ar2 = new MysqlDb2<ArticleCate2>();
Ar2.add(ar)
Ar2.update(ar, 23)