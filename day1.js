// 两种引入方式：
// 内嵌方式：
/*
<script type="text/javascript">
    alert('这是Javascript程序');
</script>

// 外联方式：
<script type="text/javascript" src="hello.js"></script>

*/

// 注意：
// 1、script标签的type属性可以不设置，因为默认就是为text/javascript。
// 2、script标签中的内容为js代码，如果指定了src属性，那么万万不能在script标签中编写js代码，因为浏览器会加载src属性对应的文件内容到script内容中。

//三种输出方式
// 1、在控制台中输出
// console.log(90);
// console.log("今天天气不错！");

// 2、在网页中输出
// document.write("js");

// 3、弹窗输出
// alert("今天正式开始学习js");


// 输入方式
// prompt("请输入您的密码：");


// 定义变量
// var、let
// 区别：1、var可以重复定义声明变量，let不可以
// 2、作用域提升问题：var可以进行先使用后定义；let不可以

// var password = 123456;
// var pass = prompt("请输入您的密码：");
// var password = 789;
// console.log(password);

// let sname = "张三";
// let sname = '李四';

// console.log(age);
// // var age = 18;
// let age = 18;


// 定义常量：
// const price = 3;
// price = 4;
// console.log(price);

// 变量命名规则：
// 可以由任意顺序的大小写字母、数字、下划线(_)和美元符号($)组成，但标识符不能以数字开头，不能是JavaScript中的保留字或关键字。 

// 变量命名规范：
// 1.分隔命名法
// 使用下划线（_）作为单词间隔，如： user_name、user_age等

// 2.驼峰命名法：大驼峰、小驼峰
// 使用单词首字母大小写进行间隔，如：UserName 、 userAge等


// 注释：
// 单行注释：//
// 多行注释：/* */
/**
 * 和换个角色将建设规划
 * 的手感还是
 */



// 数据类型：
// 1、基本数据类型：数值型、字符串、布尔值、undefined、null
// 2、引用数据类型:Object


// 字符串：
// 创建字符串：
// 1、字面量：''   ""  ``
// let str = '字符串';
// let str = "字符串1";
// let str = `字符串2`;
// console.log(str);


// 转义字符：
// \’	表示单引号	\”	表示双引号
// \n	表示换行符	\\	表示反斜线 \ 号本身
// let str1 = 'I\'m liming';
// let str2 = "我叫\n\"张三\"";
// console.log(str2);
// document.write(str2);


// ``:模板字面量
// let sname = '孟凡昊';
// console.log('我叫' + sname);
// console.log(`我叫${sname}`);

// document.write(`<h1>我叫${sname}</h1>`);


// let username = '李白';
// let like = '喝酒';
// console.log(`${username}是一个诗人，她最喜欢${like}！`);



// boolean类型的值只有两个： true或者false，代表真假性。


// 数值型：
// 特殊的数值：NaN ---not a number
// isNaN:是否为一个非数字，如果是数字返回false,如果不是一个数字返回true

// 数值的表示方法：
// 进制的分类：
// 二进制：由0、1组成,由0b开头
// console.log(0b10);

// 八进制：由0-7,由0o开头
// console.log(0o37);

// 十进制：由0-9组成

// 十六进制：0-9，a-f,由0x开头
// console.log(0x9a);



// 查看数据类型：
// typeof 数据;
// typeof(数据);
// let str = 'true';
// console.log(typeof str);  //结果为'string'
// console.log(typeof(123));  //'number'

// console.log(typeof('李白') == 'string');


// 强制类型转换：
// parseInt（变量名）：将变量转换为整数 把小数和不是数字的部分去掉；
//注意：
//1.只有首字符开始的连续数字转换后得到具体值，其他得到NaN
//2.除了字符串的其他类型转换后都得到NaN
// let a = parseInt("250.124");
// console.log(a, typeof a); //250
// a = parseInt("sb250");
// console.log(a, typeof a); //NaN
// a = parseInt("2a5b0");
// console.log(a, typeof a); //2

// parseFloat(变量名)：将字符串转为小数 
//注意：
//1.只有首字符开始的连续数字转换后得到具体值，其他得到NaN
//2.除了字符串的其他类型转换后都得到NaN
//3.如果小数后面的值是有效值，转换后就保留，否则就删除
// let b="25.00";
// b=parseFloat(b);
// console.log(b, typeof b); //25
// b=parseFloat("25.01");
// console.log(b, typeof b); //25.01

// Number (变量名)：将变量转换为数字
//注意：
//1.只能纯数字构成字符串才可以转换
//2.true：1；false：0
//3.Undefined：NaN ; null:0;
// let num2 = undefined;
// let num3 = Number(num2);
// console.log(num3,typeof num3);


// 布尔类型转换：Boolean
// 代表无的数据：0、NaN、null、undefined、''、""
// console.log(Boolean(" "));


// undefined和null
// 不同点：
// undefined：未定义，变量声明但未赋值，或者访问一些不存在的属性或者元素时，返回undefined
// null:空，赋值了，但是这个值是空的，使用typeof查看时，结果为object

// 相同点：都代表的是空值，在布尔值转换中都为false


// length:长度，字符串的字符个数
// let str1 = 'hello';
// console.log(str1.length);  



// 算数运算符
//+:可以做数值运算，还可以进行字符串拼接（字符串可以与任意数据进行拼接）
// let num1 = 10;
// let num2 = 5;
// console.log(num1 + num2);
// console.log("我叫" + 123);

// //-：可以做数值运算;还可以进行数据类型的自动转换后做数值运算
// console.log(num1 - num2);
// console.log(15 - "10");

// //*:可以做数值运算;还可以进行数据类型的自动转换后做数值运算
// console.log(num1 * true);

// // /:可以做数值运算;还可以进行数据类型的自动转换后做数值运算
// console.log(num1 / true);

// // %:使用场景：比如求奇偶性、求一个数是否可以被另一个数整除、因子/因数
// console.log(num2 % num1);



// ++、--：
// 前置++：
// let num = 10;
// ++num;  //num进行自增1

// 后置++：
// num++;  //num进行自增1
// console.log(num)

// 不同点：
// let result = ++num;  //11:先将num进行+1，再赋值给result
// let result = num++;  //10：直接将num的值先赋给result,然后在进行+1
// console.log(result,num);



// 比较运算符：
// > >=
// let num1 = 10,num2 = 5;
// console.log(num1 >= num2);

// <  <=
// console.log(num1 <= num2);

// 相等比较：==  ===（全等）
// ==:对比值即可
// ===：需要对比数值以及数据类型
// console.log(5 == "5");
// console.log(5 === "5");

// 不等比较：!=  !==(不全等)
// console.log(5 !== 5);



// 逻辑运算符：
// 逻辑与：&& 两者(两者以上）都为真时，则返回真；有一者为假则返回假
// console.log(7 > 8 && 9 > 8 && 10 > 9);

// 逻辑或：|| 只有一者为真时，则返回真；全部为假时则返回假
// console.log(7 > 8 || 9 > 8);

// 逻辑非：!取反
// console.log(!(8 > 9));
// isNaN：使用取反场景较多

// 短路运算(取值运算)：
// 逻辑与：如果值全部为真，则取最后一个值；如果出现代表为假的值，则返回第一个为假的值
// console.log(7 && 0 && null);

// 逻辑或：如果出现真值，则返回第一个为真的值；如果全部为假，则返回最后一个值
// console.log(undefined || '' || 0 || null);


// 赋值运算符:=
let num1 = 7;
console.log(num1 = 8);

