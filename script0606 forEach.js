//array
let Number = [15, 3, 25, 10, 27, 35];

// //一般要輸出array的值，會用以下方式
// for(let i = 0; i < Number.length; i++){ // 給予i一個值 i < array長度時，i++,直到>Number.length
//     if(Number[i] > 20){ //當array裡的值i > 20
//         console.log(Number[i]); //輸出array>20的值
//     }
// }
// //if判斷是只能用在數值，不能用在字串


//---------------
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


//---------------
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


//---------------
// let body = document.querySelectorAll("body");
// console.log(body.children);
// console.log(body.childNodes);
// console.log(body.parentElement);

// let myP = document.querySelector("p.second"); //querySelector只能抓一個值，該值取決於children[?]
// let body = myP.parentElement;
// let myH1 = body.children[1];
// console.log(myH1);

// let myH1 = document.querySelector("h1#first")
// console.log(myH1);

// myH1.innerHTML = "<marquee><font color = 'red'>Hi</font></marquee>"

//---------------
//appenChind()-插入指定元素屬性,通常用在會員登入後，抓取會員資料，顯示會員姓名
// let body = document.querySelector("body"); //三、尋找元素節點 querySeletor() -尋找指定元素節點

// let myH1 = document.createElement("h1"); //三、尋找元素節點 createElement() -新增指定元素標籤。
// myH1.innerText = "歡迎光臨"; //五、元素屬性與方法 innerText -插入指定文字
// body.appendChild(myH1); //五、元素屬性與方法 appenChind()-插入指定元素屬性

//---------------
//classList -回傳類別屬性清單
let myP = document.querySelector("p");

//myP.classList.add("red");
console.log(myP.classList);
console.log(myP.classList.contains("red"));
console.log(myP.classList.contains("blue"));

//---------------
//getAttribute() -回傳指定元素屬性
let a = document.querySelector("a");
console.log(a.getAttribute("href"));

//---------------
//querySeletor() -尋找指定元素屬性
//querySeletorAll() -尋找指定元素屬性
let section = document.querySelector("section");

// let redP = section.querySelectorAll("p.red");
// console.log(redP);//因為限定在section，所以只會抓到section裡的值，共2個,可與下行對比
// let redP = document.querySelectorAll("p.red");//因為尋找document，所以會抓全文內的值，到共3個
// console.log(redP);

//---------------
// //remove() -移除指定元素
// let redP = document.querySelectorAll("p.red");//因為尋找document，所以會抓全文內的值，到共3個
// redP.remove();

//---------------
//style -控制CSS style
let redP = document.querySelector("p");

//myP.style.backgroundColor = "yellow";
myP.style = "background-color: blue; color: red; font-size: 2rem;"; //兩種用法都可以，第二種用法可以寫成一行，但是第一個用法一個性質只能寫一種，不購簡潔

//---------------
//六、Events觸發事件
window.addEventListener("click", e => { //e是event，可簡寫為e，console.log(e)，也要簡寫e，用event，就要寫console.log(event) //此觸發事件為在網頁click滑鼠，會記錄滑鼠軌跡
    console.log(e);
});