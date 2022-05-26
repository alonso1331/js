let num1 = 10
let num2 = "10"
console.log(num1 == num2);
console.log(num1 === num2);
//布林值會搭配邏輯運算子使用
// = 是指派
// == 等同於數學運算的=
// === 除了數值以外，連屬性(比如數字或字串)的性質都要相同

let x ;
let y = "";
let z = null;
console.log(x);
console.log(y);
console.log(z);

let a = true;
let b = "true";
console.log(typeof a);
console.log(typeof a, a);
console.log(typeof(b), b);

//if else條件式
// let c = prompt("請輸入數字","0");
// if(c > 0)document.write("您輸入的值是正數");
// if(c > 0){
//     Document.write("您輸入的值是正數");
//}//程式無法一行表達，也可以用大括號包住，這樣表達

// let d = prompt("請輸入數字", "0");
// if (d >= 0) {
//     document.write("輸入的值是正數");
// }else{
//     document.write("輸入的值是負數");
// }
// //如果eles只有一行，也可以濃縮為下列公式
// (d >= 0)?document.write("輸入的值是正數"):document.write("輸入的值是負數")

//未考慮負數和超過100以上的數字
// let score = prompt("請輸入數字", "0"); 
// if(score >= 60 && score<70){
//     document.write("丙等");
// }else if(score >= 70 && score<80){
//     document.write("乙等");
// }else if(score >= 80 && score<90){
//     document.write("甲等");
// }else if(score >= 90 && score<100){
//     document.write("優等");
// }else{
//     document.write("不及格");
// }

//加入限制負數與超過100的條件，並給予警告提示
// let e = prompt("請輸入數字");
// e = Number(e); //將字串轉為數字，否則輸入字串會無法判讀
// if(isNaN(e)){
//     alert("請輸入阿拉伯數字");
// }else if(e < 0){
//     alert("請輸入大於0的數字");
// }else if(e >= 0 && e < 60){
//     document.write("不及格");
// }else if(e >= 60 && e < 70){
//     document.write("丙等");
// }else if(e >= 70 && e < 80){
//     document.write("乙等");
// }else if(e >= 80 && e < 90){
//     document.write("甲等");
// }else if(e >= 90 && e < 100){
//     document.write("優等");
// }else{
//     alert("請輸入小於100的數字");
// }

//switch多向選擇條件控制：
// let payway = prompt("請選擇付款方式：1.ATM匯款 2.刷卡 3.貨到付款", "1");
// switch (payway){
//     case "1":
//         document.write("我的付款方式為ATM匯款");
//         break;
//     case "2":
//         document.write("我的付款方式為刷卡");
//         break;
//     case "3":
//         document.write("我的付款方式為貨到付款");
//         break;
//     default:
//         document.write("請選擇正確的付款方式");
// }

//用switch改寫成績判定
let e = prompt("請輸入數字");
switch(true){ //此用法與選項功能不同，所以()內要設定true,而非變數
    case e < 0:
        alert("請輸入大於0的數字")
        break;
    case e >= 0 && e < 60:
        document.write("不及格");
        break;
    case e >= 60 && e < 70:
        document.write("丙等");
        break;
    case e >= 70 && e < 80:
        document.write("乙等");
        break;  
    case e >= 80 && e < 90:
        document.write("甲等");
        break;
    case e >= 90 && e < 100:
        document.write("優等");
        break;
    default:
        alert("請輸入小於100的數字");
}
