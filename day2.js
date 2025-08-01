// 赋值运算符:=
// let num1 = 7;
// console.log(num1 = 8);

// 复合赋值运算符：
// let num = 10;
// num += 5;  //等价于num = num + 5;
// console.log(num);

// num -= 10;
// console.log(num);

// num *= 2;
// console.log(num);

// num /= 5;
// console.log(num);

// num %= 1;
// console.log(num);



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


// 语句：
// if语句：
// 单分支：
//  if(表达式){
//           语句块；
//     }


// 示例：
// 输入年龄，判断年龄>18，输出“可以上网”
// 提示：输入语句是prompt('请输入年龄')
// let age = Number(prompt("请输入您的年龄"));
// console.log(typeof age);
// if(age > 18){
//     console.log("可以上网");
// }


// 输入成绩，判断是否等于100，成立输出“满分”


// 双分支：
//   if(表达式){
//            语句块1；
//   }else{
//            语句块2；
//   }


// 示例：
// 输入成绩，判断是否等于100，成立输出“满分”，否则输出“加油”

// let score = Number(prompt("请输入成绩："));
// if(score == 100){
//     console.log("满分");
// }else{
//     console.log("加油");
// }



// 多分支
// if(表达式1){
//      语句块1；
// }else if(表达式2){
//      语句块2；
// }else{
//      语句块3；
// }


// 示例：
// 输入一个数，判断是正数还是负数
// let num = Number(prompt("请输入一个数："));
// if(num > 0){
//     console.log("正数");
// }else if(num < 0){
//     console.log("负数");
// }else{
//     console.log("0既不是正数也不是负数");
// }


// 输入两个数，判断两个数的关系（大于、小于或等于）
// let num1 = Number(prompt("请输入一个数："));
// let num2 = Number(prompt("请输入一个数："));
// if(num1 > num2){
//     console.log(num1 + '较大');
// }else if(num1 == num2){
//     console.log('相等');
// }else{
//     console.log(num2 + "较大");
// }




// 输入操作数、运算符，实现简易计算器
// let num1 = Number(prompt("请输入第一个数："));
// let operator = prompt("请输入操作符：");
// let num2 = Number(prompt("请输入第二个数："));
// if(operator == "+"){
//     console.log(num1 + num2);
// }else if(operator == '-'){
//     console.log(num1 - num2);
// }else if(operator == "*"){
//     console.log(num1 * num2);
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


// switch(operator){
//     case "+":
//         console.log(num1 + num2);
//         break;
//     default:
//         console.log("你所输入的运算符有误！");
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;

// }



// 判断day是星期几
// let day = Number(prompt("请输入1-7"));
// switch(day){
//     case 1:
//         console.log("星期一");
//         break;
//     case 2:
//         console.log("星期二");
//         break;
//     case 3:
//         console.log("星期三");
//         break;
//     default:
//         console.log('输入的值不合法');
//         break;
// }


// 输入月份判断季节
// 春：3、4、5月
// 夏：6、7、8月
// 秋：9、10、11月
// 冬：12、1、2月

// let month = Number(prompt("请输入月份："));
// switch(month){
//     case 3:
//     case 4:
//     case 5:
//         console.log("春季");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("夏季");
//         break;
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







