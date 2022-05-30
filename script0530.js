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

