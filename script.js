document.write("About Me" + "<br/>");
alert("alert"); //彈跳出警告視窗，只能按確認
console.log("123"); //不會顯示在網頁上，要在F12看
prompt("請輸入年齡","25"); //彈跳出輸入文字的對話視窗
confirm("請確認");//彈跳出需要使用者確認的對話視窗，可以選擇確認與取消
let myName =prompt("請輸入您的姓名：");
let myAge = 18, myHeight = 165, myWeight = 50;

document.write("我是" + myName + "<br/>");
document.write("身高" + myHeight + "公分，體重" + myWeight +"公斤");
document.write("今年" + myAge + "歲。");

let x = 2;
++x; //x = x + 1
console.log(x);

--x; //x = x - 1
console.log(x);

//3^10
console.log(3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3);
console.log(3**10);

//字串的運用
let a = "huwa";
let b = 50;
let c = 30;
console.log(a + b + c); //字串後的數字無法與字串相加，所以會顯示為huwa5030
console.log(b + c + a + b + c); //字串前的數字是數字，可以相加，所以會顯示為80huwa5030

//字串與數字轉換型態
let num1 = "16";
let num2 = 30;
console.log(num1 + num2); //字串與數字相加，因為num1是字串所以不法與後面的num2相加，故為1630 
num1 = Number(num1);
console.log(num1 + num2); //= console.log(number(num1) + num2); 
num2 = num2.toString();
console.log(num1 + num2); //num2變成字串，無法與num1相加

let pi = 3.1415926535;
console.log(pi.toFixed(3));
