
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







