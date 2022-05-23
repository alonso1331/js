/*document.write("About Me" + "<br/>");
alert("alert"); //彈跳出警告視窗，只能按確認
console.log("123"); //不會顯示在網頁上，要在F12看
prompt("請輸入年齡","25"); //彈跳出輸入文字的對話視窗
confirm("請確認");//彈跳出需要使用者確認的對話視窗，可以選擇確認與取消
*/

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

//數字相關函式
let num1 = "16";
let num2 = 30;
console.log(num1 + num2); //字串與數字相加，因為num1是字串所以不法與後面的num2相加，故為1630 
num1 = Number(num1);
console.log(num1 + num2); //= console.log(number(num1) + num2); 
num2 = num2.toString();
console.log(num1 + num2); //num2變成字串，無法與num1相加

let pi = 3.1415926535;
console.log(pi.toFixed(3));

//字串相關函式
let text1 = "En la noche del 27 de marzo, el Ejército de Ucrania bombardeó un bosque a las afueras de Kiev que albergaba un enorme campamento con tropas del Kremlin. Dos meses después, los restos del ataque siguen visibles"
console.log(text1.length);

let text2 = "Marzo"
console.log(text2[0]); //M
console.log(text2[1]); //a
console.log(text2[2]); //r
console.log(text2[3]); //z
console.log(text2[4]); //0
console.log(text2[5]); //undefined
console.log(text2[-1]); //undefined

//slice() 裁切字串
console.log(text1.slice(0, 5)); //En la 空格也算一個單位
console.log(text2.slice(-1)); //o
console.log(text2.slice(-2)); //zo

//indexOf() 尋找指定字元位置，大小寫不同
console.log(text2.indexOf("m")); //-1 代表找不到該字元
console.log(text2.indexOf("M")); //0 位於順序0
console.log(text2.indexOf("z")); //3 位於順序3
console.log(text2.toUpperCase().indexOf("R")); //2 位於順序2 當不確定大小寫時，可以全部換成大寫toUpperCase()或小寫toLowerCase()，然後給字元去找

//split() 將字串切割為陣列
let text3 = "En la noche del 27 de marzo"
console.log(text3.split(" ")); //遇到空格裁切為陣列，會依照單字來裁切(7) ['En', 'la', 'noche', 'del', '27', 'de', 'marzo']
console.log(text3.split("")); //如果是以這方式裁切，會將所有的字串包含空格全部裁切為陣列(27) ['E', 'n', ' ', 'l', 'a', ' ', 'n', 'o', 'c', 'h', 'e', ' ', 'd', 'e', 'l', ' ', '2', '7', ' ', 'd', 'e', ' ', 'm', 'a', 'r', 'z', 'o']
