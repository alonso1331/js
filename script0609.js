//Event Bubbling觸發事件的callback
let a = document.querySelector("div.a");
let b = document.querySelector("div.b");

a.addEventListener("click", e => {
    alert("a的callback正在執行");
});

b.addEventListener("click", e => {
    e.stopPropagation();//停止Event Bubbling的函示
    alert("b的callback正在執行")
});

//---------------
//Storage處存資料之一
// localStorage.setItem("name","Alonso");
// localStorage.setItem("add", "Taiwan");
// localStorage.setItem("age", "28");

//localStorage.removeItem("age");//刪除localStorage指定資料
//localStorage.clear();//localStorage全部清空


// console.log(localStorage);

// let myName = localStorage.getItem("name");
// document.write(myName);

//---------------
//Storage處存資料之二：輸入陣列的用法
let names = ["WU", "CHEN", "REY"];
console.log(names)
localStorage.setItem("names", names);
// let myNames = localStorage.getItem("names");
// console.log(myNames); //輸出myNames內容
// console.log(typeof myNames);//輸出myNames屬性 在此為字串，但是輸入時是用字串，這樣會造成資料讀取問題
//JavaScript Object Natation
//JSON.parse();
//JSON.stringify();

//使用JSON.stringify()轉換成字串
//setItem存放資料
localStorage.setItem("names", JSON.stringify(names));

//getItem取得資料
//使用JSON.parse()轉換回陣列
let myNames = JSON.parse(localStorage.getItem("names"));
console.log(myNames);



