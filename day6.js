// 内置对象
// Math对象
// 属性：PI圆周率
// console.log(Math.PI);

// 方法：
// abs(x):返回一个值对于原点的距离，绝对值
// console.log(Math.abs(-5));


// pow(x,y):返回x的y次幂
// console.log(Math.pow(2,3));


// sqrt(x):返回x的平方根
// console.log(Math.sqrt(4));


// toFixed(x):返回数字保留x位的结果(四舍五入)
// let num = 3.145;
// console.log(num.toFixed(2));


// max(x,y):返回参数中的最大值
// console.log(Math.max(34,78,9,10));

// let arr = [23,45,1,2,90];
// console.log(Math.max(...arr));


// min(x,y):返回参数中的最小值
// console.log(Math.min(1,2,3,4));
// console.log(Math.min(...arr));



// 取整：
// round(x):返回x四舍五入取整后的结果
// console.log(Math.round(3.59));


// ceil(x):返回x向上取整后的结果
// console.log(Math.ceil(3.01));
// console.log(Math.ceil(-3.12));

// floor(x):返回x向下取整后的结果
// console.log(Math.floor(-2.5));
// console.log(Math.floor(2.5));


// random():生成0-1之间的随机数，包括0但不包括1   [0,1)
// console.log(Math.random());

// 获取0-10之间的随机数
// console.log(Math.random() * 10);

// 获取0-10之间的随机整数，包括0包括10 
// console.log(Math.ceil(Math.random() * 10));


// let sname = ['赵子彭','吴建伟','张少康','银星号'];
// 随机点名
// 索引值范围为0~length-1
// 获取随机索引值
// let index = Math.floor(Math.random() * sname.length);
// console.log(index);
// console.log(sname[index]);


// 实现任意区间内的随机值
// 5-10  [5,11)
// 0-1  ===> [5,11)  0,11
// function randNum(min,max){
//     return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(randNum(5,11));


// [5,10]
// function randNum(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


