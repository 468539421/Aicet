
// for循环
// 语法：
// for(表达式1; 表达式2; 表达式3){
//     语句块；
// }

// 执行顺序：
// 先执行表达式1
// 再执行表达式2，若为真，则执行循环体，否则结束循环。
// 执行完循环体后再执行表达式3
// 重复②和③直到表达式2不成立，结束循环


// 循环输出10遍：对不起，我错了
// for(let i = 0;i < 10;i++){
//     console.log("对不起，我错了");
// }

// 输出1-10
// for(let i = 1;i <= 10;i++){
//     console.log(i);
// }


// 第一题：在页面输出1-100之间所有的数，要求如下
// 偶数的字体颜色为红色
// 奇数的字体颜色为绿色
// for(let i = 1;i <= 100;i++){
//     if(i % 2 == 0){
//         document.write(`<p style='color:red'>${i}</p>`);
//     }else{
//         document.write(`<p style='color:green'>${i}</p>`);
//     }
// }


// 输出h1-h6标签，里面的内容为：这是*级标签
{/* <h1>这是1及标签</h1>
<h1>这是2及标签</h1>
... */}

// for(let i = 1;i <= 6;i++){
//     // document.write(`<h${i}>这是${i}级标签</h${i}>`);
//     document.write("<h" + i + ">这是" + i + "级标签</h" + i + ">");
// }


// 输出一个数的因数（从1到他本身之内所有能被整除的数）
// let num = parseInt(prompt("请输入一个整数："));
// for(let i = 1;i <= num;i++){
//     if(num % i == 0){
//         console.log(i);
//     }
// }


// 输出2000-2060年之间所有的闰年
// for(let i = 2000;i <= 2060;i++){
//     if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
//         console.log(i);
//     }
// }



// 累加求和
// 求1-100之间的所有整数之和
// let sum = 0;
// for(let i = 1;i <= 100;i++){
//     sum += i;
// }
// let avg = sum / 100;
// console.log(sum,avg);


// 第三题：求1-100之间的偶数和
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);



// 第一题：求1/1+1/2+1/3+1/4+……+1/100 = 结果
// let sum = 0;
// let str = '';
// for(let i = 1;i <= 100;i++){
//     sum += 1 / i;
//     if(i == 100){
//         str += `1 / ${i}`;
//     }else{
//         str += `1 / ${i} + `;
//     }
// }
// console.log(str + "=" + sum);


// 第二题：求1/2+2/3+3/4+4/5+……+100/101
// 分子：1-100
// 分母：2-101  分子+1
// let sum = 0;
// for(let i = 1;i <= 100;i++){
//     sum += i / (i + 1);
// }
// console.log(sum);



// 累乘
// 1*2*3*4*5*……*9*10或者叫做10的阶乘
// let pro = 1;
// for(let i = 1;i <= 10;i++){
//     pro *= i;
// }
// console.log(pro);

// 第二题：使用for循环打印1 - 10 之间除5的倍数之外的数的乘积
// let pro = 1;
// for(let i = 1;i <= 10;i++){
//     if(i % 5 != 0){
//         pro *= i;
//     }
// }
// console.log(pro);



// 作业
// 1. 打印数字阶梯
// 规则：
// 输入一个正整数 n，使用 for 循环在网页上打印从 1 到 n 的数字，每个数字占一行。
// let num = parseInt(prompt("请输入："));
// if(num > 0){
//     for(let i = 1;i <= num;i++){
//         document.write(i + '<br>');
//     }
// }

// 逆序打印
// let num = parseInt(prompt("请输入："));
// if(num > 0){
//     for(let i = num;i >= 1;i--){
//         document.write(i + '<br>');
//     }
// }


// 6. 打印乘法表行
// 规则：
// 输入一个正整数 n，打印 n 的乘法表（从 1 到 10）。
// let n = parseInt(prompt("请输入："));
// for(let i = 1;i <= 10;i++){
//     console.log(`${n} * ${i} = ${n * i}`);
// }


//  * * * * * 
// for(let i = 1;i <= 5;i++){
//     document.write(" * ");
// }


//  * * * * * 
//  * * * * * 
//  * * * * * 
//  * * * * * 
// 总结：1、进入到内层循环之后，必须执行完毕，才能再次进入外层循环
// 2、外层循环控制行，内层循环控制列
// for (let j = 1; j <= 4; j++) {
//     for (let i = 1; i <= 5; i++) {
//         document.write(" * ");
//     }
//     document.write("<br>");
// }


//  *
//  * * 
//  * * *
//  * * * * 

// for(let i = 1;i <= 1;i++){
//     document.write(' * ');
// }

// document.write("<br>");

// for(let i = 1;i <= 2;i++){
//     document.write(' * ');
// }

// document.write("<br>");

// for(let i = 1;i <= 3;i++){
//     document.write(' * ');
// }


// for (let j = 1; j <= 4; j++) {
//     for (let i = 1; i <= j; i++) {
//         document.write(' * ');
//     }
//     document.write("<br>");
// }


// 九九乘法表
// for(let j = 1;j <= 9;j++){
//     for(let i = 1;i <= j;i++){
//         document.write(`${i} * ${j} = ${i * j}&nbsp;&nbsp;&nbsp;`);
//     }
//     document.write("<br>");
// }



// 10. 斐波那契数列（简化版）
// 规则：
// 输入一个正整数 n（n ≥ 2），打印斐波那契数列的前 n 项。斐波那契数列定义为：
// •第 1 项：0
// •第 2 项：1
// 从第 3 项开始，每一项是前两项的和。
// let num1 = 0;
// let num2 = 1;
// let n = parseInt(prompt("请输入一个正整数："));
// console.log(num1 + '\n' + num2);
// if(n > 0){
//     for(let i = 3;i <= n;i++){
//         let num3 = num1 + num2;  // 0 1 1 2
//         console.log(num3);
//         num1 = num2;   //1
//         num2 = num3;   //1
//     }
// }



// while循环
// while语句---输出10次——'我现在没空，忙着优秀'
// let i = 1;
// while(i <= 10){
//     console.log("我现在没空，忙着优秀");
//     i++;
// }


// 循环输出100次‘学习如此简单’
// let i = 1;
// while(i <= 100){
//     console.log("学习很简单");
//     i++;
// }

// 循环输出1-100之间所有的数（包括1和100）
// let i = 1;
// while(i <= 100){
//     console.log(i);
//     i++;
// }


// 循环输出9*1、9*2、9*3、……9*9以及其结果
// let i = 1;
// while(i <= 9){
//     console.log(`9 * ${i} = ${9 * i}`);
//     i++;
// }



// while(表达式){
//     语句块；
// }
// 输入用户名，判断用户名是否为admin，若不是则一直输入，否则提示输入成功
// let username = prompt("请输入用户名");
// while(username != 'admin'){
//     username = prompt("请输入用户名");
// }


// 题目要求：
// 猜数游戏，输入一个数字，根据用户输的数与标准值（8）进行比较，并给出提示（大了/小了），以便下次的输入能接近标准值，直到猜中为止
// 实现思路
// 确定循环结束的控制方式 
// 确定相关变量
// 确定循环条件、循环体

// 循环条件：不等于8
// 循环体：循环输入数字，判断数字>8还是<8


// let num = Number(prompt("请输入一个数值："));
// while(num != 8){
//     if(num > 8){
//         alert("大了");
//     }else{
//         alert("小了");
//     }
//     num = Number(prompt("请输入一个数值："));
// }




// do...while循环
// 循环输出1*2、2*3、3*4、……9*10以及其结果
// let num = 1;
// do{
//     console.log(`${num} * ${num + 1} = ${num * (num + 1)}`);
//     num++;
// }while(num <= 9);


// 1 + 2 + 3 4 + 5 6 + 7  = 100
// 1 + 2 3 + 4 + 5 + 6 7 



// 公司计划2015年培养3万人，每年增长25%，
// 请问按此增长速度，到哪一年培训学员人数将达到10万人？
// let year = 2015,person = 3;
// do{
//     // person = person + person * 0.25;
//     person *= 1.25;
//     year++;
// }while(person < 10);
// console.log(year);



// 输入用户名，判断用户名是否为admin，若不是则一直输入，否则提示输入成功
// while(true){
//     let username = prompt("请输入用户名");
//     if(username == 'admin'){
//         alert("输入成功！");
//         break;
//     }
// }


// 第一题：三次机会输入密码（正确密码为admin） 
// 输入密码
// 三次之内输入正确，结束循环，则提示‘密码正确’
// 若三次机会都未输入正确，则提示‘很遗憾，没有输入正确呀’  
// 如果不是最后一次尝试，请给用户一定提示：密码错误，你还有*次机会


// 定义初始化尝试次数
// let attempts = 0;
// do{
//     let password = prompt("请输入密码：");
//     // 检查密码是否正确
//     if(password == 'admin'){
//         alert("密码正确");
//         // 结束循环
//         break;
//     }else{
//         // 增加尝试次数
//         attempts++;
//         alert("密码错误，你还有" + (3 - attempts) + '次机会');
//     }
// }while(attempts < 3);
// if(attempts == 3){
//     alert("很遗憾，没有输入正确呀");
// }



// 第二题：使用for循环打印1 - 100 之间所有除30、 25 和90之外的5的倍数
// for(let i = 1;i <= 100;i++){
//     if(i % 5 == 0){
//         if(i == 30 || i == 25 || i == 90){
//             continue;
//         }
//         console.log(i);
//     }
// }


// 循环输出1-10不是5的倍数的值
// for(let i = 1;i <= 10;i++){
//     if(i % 5 == 0){
//         continue;
//     }
//     console.log(i);
// }




// 函数
// 函数的定义方式：
// 函数声明：
// 语法：
// function 函数名称(参数){
//     函数体;
// }

// 函数调用：
// 函数名称(参数);


// 函数表达式（匿名函数）：
// let 变量名 = function(参数){
//     函数体;
// }

// 函数调用：
// 变量名(参数);

// str();  //先使用后进行定义声明

// function str(){
//     console.log("目标化信念");
// }

// let str = function(){
//     console.log("目标话信念");
// }


// 箭头函数
// 语法：
// let 变量名 = (参数) => {函数体};

// 无参数函数
// let sayHello = () => {
//     console.log("hello");
// }

// // 调用：
// sayHello();

// // 单参数函数：
// let square = (x) => {
//     console.log(x * x);
// }

// square(5);
// square(6);


// 封装一个函数，输出2019年到2030年之间所有的闰年。
// function year(){
//     for(let i = 2019;i <= 2030;i++){
//         if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
//             console.log(i);
//         }
//     }
// }

// year();



// 定义三个数，封装一个函数，输出三个数的最大值。
// let a = 1,b = 2,c = 3;
// function max(){
//     if(a > b && a > c){
//         console.log(a);
//     }else if(b > a && b > c){
//         console.log(b);
//     }else if(c > a && c > b){
//         console.log(c);
//     }
// }
// max();