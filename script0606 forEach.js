//array
let Number = [15, 3, 25, 10, 27, 35];

// //一般要輸出array的值，會用以下方式
// for(let i = 0; i < Number.length; i++){ // 給予i一個值 i < array長度時，i++,直到>Number.length
//     if(Number[i] > 20){ //當array裡的值i > 20
//         console.log(Number[i]); //輸出array>20的值
//     }
// }
// //if判斷是只能用在數值，不能用在字串

// //用forEach更精簡
// Number.forEach(function Num(n){ //function Num(n)是function的寫法function name(params)
//     if(n > 20){
//         console.log(n);
//     }
// });

// //forEach還有其他寫法
// Number.forEach(Num);

// function Num(n) {
//    if(n > 20){
//        console.log(n);
//    } 
// };

// Number.forEach(function (n) {
//     if (n > 20){
//         console.log(n);
//     }
// });

// //用 arrow functions
// Number.forEach((n) => {
//     if(n > 20){
//         console.log(n);
//     }
// });

// //如果n變數不複雜，只代表一個值，而且沒有其他判斷，比如<, >等等，可簡化括號
// Number.forEach(n => {
//     if(n > 20){
//         console.log(n);
//     }
// });

// //forEach完整公式運用,index和arr都可以換成其他變數
// Number.forEach((n, index, arr) =>{
//     if(n > 20){
//         console.log(n);
//         console.log(n + "的index是" + index);
//         console.log(arr);
//     }
// });

//HTMLCollection
// let myP1 = document.getElementsByClassName("second");
// console.log(myP1);
// // myP1.forEach(n => {
// //     console.log(n);
// // });

// //NodeList
// let myP2 = document.querySelectorAll(".second");
// console.log(myP2);
// myP2.forEach(n => {
//     console.log(n);
// });

//length, index 這組可以運用在上面兩個函示
//push, pop, shift, unshift, slice 這組不能
//另外，forEach用在getElementsByClassName會顯示Uncaught TypeError: myP1.forEach is not a function
//forEach可以用在querySelectorAll

// let body = document.querySelectorAll("body");
// console.log(body.children);
// console.log(body.childNodes);
// console.log(body.parentElement);

let myP = document.querySelectorAll("p.second");
let body = myP.parentElement;
let myH1 = body.children[0];
console.log(myH1);