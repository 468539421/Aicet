
// 条件运算符（三目运算符）：
// 语法：
// 条件 ? '符合条件的结果' : '不符合条件的结果';
// let age = 20;
// 判断是否成年
// age >= 18 ? console.log('成年') : console.log("未成年");
// let result = age >= 18 ? '成年' : '未成年';
// console.log(`结果为：${result}`);

// 如果现在你的余额超过5元，那你可以吃一份早餐,如果为5元可以吃豆浆+油条，如果超过5元可以吃小笼包；如果没有余额，则无法吃早餐
// let money = 5;
// money >= 5 ? (money == 5 ? console.log("吃豆浆油条") : console.log("小笼包")) : console.log("无法吃早餐");



// 多分支
// if(表达式1){
//      语句块1；
// }else if(表达式2){
//      语句块2；
// }else{
//      语句块3；
// }





// switch语句
// 语法：
// switch (表达式) {
//    case 表达式1:
//        语句块；
//        break;
//    case 表达式2:
//        语句块；
//        break;
//    default:
//        语句块；
//        break;
// }




// 会员购物时，根据积分的不同享受不同的折扣，如何实现
// 积分<200：9折
// 2000<=积分<4000：8折
// 4000<=积分<8000：7折
// 积分>=8000：6折
// let score = Number(prompt("请输入积分："));
// switch(true){
//     case score < 200:
//         console.log("九折");
//         break;
//     case score >= 2000 && score < 4000:
//         console.log('八折');
//         break;
//     case score >= 4000 && score < 8000:
//         console.log("七折");
//         break;
//     default:
//         console.log("六折");
//         break;
// }


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


// 累乘
// 1*2*3*4*5*……*9*10或者叫做10的阶乘
// let pro = 1;
// for(let i = 1;i <= 10;i++){
//     pro *= i;
// }
// console.log(pro);



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

/////////////////////////////////////////////////////////////////////////////
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

// while(表达式){
//     语句块；
// }
// 输入用户名，判断用户名是否为admin，若不是则一直输入，否则提示输入成功
// let username = prompt("请输入用户名");
// while(username != 'admin'){
//     username = prompt("请输入用户名");
// }

// do...while循环
// 循环输出1*2、2*3、3*4、……9*10以及其结果
// let num = 1;
// do{
//     console.log(`${num} * ${num + 1} = ${num * (num + 1)}`);
//     num++;
// }while(num <= 9);

///////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////


// 第二题：使用for循环打印1 - 100 之间所有除30、 25 和90之外的5的倍数
// for(let i = 1;i <= 100;i++){
//     if(i % 5 == 0){
//         if(i == 30 || i == 25 || i == 90){
//             continue;
//         }
//         console.log(i);
//     }
// }

