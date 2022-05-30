//function 傳回值的運用
// function convertDF(dc) {
//     return dc * 1.8 +32;
// }

// var dc = prompt ("請輸入攝氏溫度:","25")
// document.write("華氏溫度為：" + convertDF(dc));

//找出未排序陣列中最小值
// function sort(nums){
//     function minIndex(left, right) {
//         console.log(left, right);
//         if(right === nums.length){
//             return left;
//         }else if(nums[right] < nums[left]){
//             return minIndex(right, right+1);
//         }
//         else{
//             return minIndex(left, right+1);
//         }
//     }   
    
//     for(let i = 0; i < nums.length; i++){
//         let selected = minIndex(i, i + 1);
//         console.log("seleced=" + selected, "i=" + i);
//         if(i !== selected){
//             //交換 i 與 selected 處的元素
//             let tmp = nums[i];
//             nums[i] = nums[selected];
//             nums[selected] = tmp;
//         }
//     }
// }

// let nums = [10, 3 ,5, 2, 4];
// sort(nums);//陣列 (array) 的 sort() 方法用來重新排序陣列中的元素
// //如果要排陣列[10, 3 ,5, 2, 4]，語法要寫變數.sort(),但是因為電腦邏輯判定的問題，10的1比2小，所以10的排序會在2前
// console.log(nums);


document.write("建立一維陣列Array");
document.write("</br>");
document.write("</br>");
let student = ["Pepe", "Don", "Pilla"];
document.write("<table border='1'><tr><td>編號</td><td>姓名</td></tr>");
for (let i = 0; i < student.length; i++){
    document.write("<tr><td>" + (i+1) + "</td><td>" + student[i] + "</td></tr>");
}
document.write("</table>");

document.write("</br>");
document.write("使用for in");
document.write("</br>");
document.write("變更前");
let student01 = ["Pepe", "Don", "Pilla"];
document.write("<table border='1'><tr><td>編號</td><td>姓名</td></tr>");
//for (let i = 0; i < student.length; i++){
for(i in student01){
    document.write("<tr><td>" + (i+1) + "</td><td>" + student01[i] + "</td></tr>");//用for in 編號會變成字串，所以編號會變成01 11 21
}
document.write("</table>");

document.write("</br>");
document.write("變更後");
let student02 = ["Pepe", "Don", "Pilla"];
document.write("<table border='1'><tr><td>編號</td><td>姓名</td></tr>");
for(i in student02){
    document.write("<tr><td>" + (Number(i)+1) + "</td><td>" + student02[i] + "</td></tr>");//用for in 編號會變成字串，所以編號會變成01 11 21，所以(i+1)要強制變成數值
}
document.write("</table>");

document.write("</br>");
document.write("</br>");
document.write("建立多維陣列Array");
document.write("</br>");
let student03 = new Array();
student03[0]=["Pepe", "95", "80"];
student03[1]=["Don", "82", "85"];
student03[2]=["Pilla", "90", "92"];
document.write("<table border='1'><tr><td>姓名</td><td>國文</td><td>英文</td></tr>");
for (let a = 0; a < student03.length; a++){
    document.write("<tr>");
    for (let b = 0; b < student03[a].length; b++){
        document.write("<td>" + student03[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("</br>");
document.write("</br>");
document.write("用for in 建立多維陣列Array");
document.write("</br>");
let student04 = new Array();
student04[0]=["Pepe", "95", "80"];
student04[1]=["Don", "82", "85"];
student04[2]=["Pilla", "90", "92"];
document.write("<table border='1'><tr><td>姓名</td><td>國文</td><td>英文</td></tr>");
for(a in student04){
    document.write("<tr>");
    for(b in student04){
        document.write("<td>" + student03[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

//陣列相關函式
let nums = [1, 5, 2, 10, 8];
console.log(nums);

nums.push(20)
console.log(nums);

nums.pop();
console.log(nums);

nums.unshift(20);
console.log(nums);

nums.shift(20);
console.log(nums);

//nums.splice(1,2);//切掉陣列排序第1位置開始(從0開始算)的2個數字
//console.log(nums);
//得到[1, 10, 8]

//nums.splice(1, 1, 20);//切掉陣列排序第1位置(從0開始算)開始的1個數字,並補進1個數值10
//console.log(nums);
//得到[1, 20, 2, 10, 8]

//nums.splice(3);//列出陣列排序第3位置(從0開始算)開始的數字
//console.log(nums);
//得到[1, 5, 2]

//nums.splice(-2);//列出陣列排序倒數第2位以前的數字，不包含倒數第2位本身的值
//console.log(nums);
//得到[1, 5, 2]

nums.splice(0, 3, 9, 8);//切掉陣列排序第0位置開始到第3位置(不包含)3本身之間的數字,並補進數值9、8
console.log(nums);
//得到[9, 8, 10, 8]
