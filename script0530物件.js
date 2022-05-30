//建立物件object
// function Person(name, age, weight, height) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     this.height = height;
//     this.sayHello = function(){
//         return "您好，我是" + name +"，今年" + age + "歲，身高" + height +"公分，體重" + weight + "公斤。";
//     }    
// };
// person1 = new Person("Pepe", 25, 75, 170);
// person2 = new Person("Don", 29, 60, 169);
// person3 = new Person("Juan", 36, 80, 175);
// document.write(person1.sayHello()+"</br>")
// document.write(person2.sayHello() + "</br>" + person3.sayHello())

//4.5.JavaScript－認識DOM(Document Object Model)
//一、認識 DOM（Document Object Model）
// function sayHi(){
//     console.log("Hi");
// }

//二、Window Object
// let myInterval = window.setInterval(sayHi, 3000); //每3000毫秒=3秒會跳一次Hi

// function stop() {
//     clearInterval(myInterval);
// }

//三、尋找元素節點
// let myH1 = document.getElementById("first");
// let myP = document.getElementsByClassName("second");
// console.log(myH1);
// console.log(myP);

// let first = window.document.querySelector("#first");
// console.log(first);
// let second = window.document.querySelectorAll("p.second");
// console.log(second);

//四、Arrow Functions 箭頭函數
function sayHi(){
    console.log("Hi");
}

let sayHi = () =>{
    console.log("Hi");
}

sayHi();
//function和=>箭頭函數兩個語法效果是一樣的
//差別在於sayHi()如果放在function前也能執行，但是放在=>箭頭函數前，就不能執行，會顯示未定義

let TCNR = {
    name: "勞動部勞動力發展署中彰投分署",
    myName(){
        console.log("TCNR是" + this.name) + ":";
    },
    address: () => {
        console.log("TCNR的地址是台中市西屯區工業區一路100號");
    }
}

TCNR.myName();
TCNR.address();
