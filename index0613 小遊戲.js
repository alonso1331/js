let createdTime; //圖形產生時間
let clickTime; //點擊圖形時間
let reactionTime; //總共反應的時間

//設定圖形隨機顏色，此設定改變rgba三個值的中間數值的值
function getRandomColor(){
    let max = 200;
    let min = 50;
    let green = Math.floor(Math.random() * (max - min + 1))
    let color = "rgba(131," + green + ", 71)";
    return color;
}

//跳出方塊的函式
function makeBox(){
    let time = Math.random();
    time = time * 2000; //2000的單位是毫秒
    setTimeout(function(){
    //再跳出新的方塊前，給予一個隨機顏色，所以要放在「.style.display = "block"」前    
    document.querySelector("div#box").style.backgroundColor = getRandomColor();
    //（六）設定圖形隨機形狀（正方形或圓形）,老師是將這個放在「.style.backgroundColor = getRandomColor」，我放在之後是想確認邏輯上是否要按照老師的順序，結果效果一樣，所以前後順序不影響結果

    //設定圖形隨機位置
    let min = 0;
    let max = window.innerHeight - 280; //避開文字的區域
    let top = Math.floor(Math.random() * (max - min + 1)) +min;
    min = 0;
    max = window.innerWidth - 140; //避開文字的區域
    let left = Math.floor(Math.random() * (max - min + 1)) +min;
    document.querySelector("div#box").style.top = top + "px";
    document.querySelector("div#box").style.left = left + "px";

    if (Math.random() >= 0.5) {
        document.querySelector("div#box").style.borderRadius = "70px";
    }else{
        document.querySelector("div#box").style.backgroundColor = "0px";
    }
    document.querySelector("div#box").style.display = "block"; 
    createdTime = Date.now();//圖片方塊產生後開始計時
    }, time);//時間倒數到了後顯示方塊，方塊的長相為#box
}
//此onclick觸發事件是讓方塊消失，然後再隨機秒數*2秒後跳出方塊
document.querySelector("div#box").onclick = function(){ //講義用getElementById("box"),老師這邊用querySelector不同練習
    this.style.display = "none";
    clickTime = Date.now();
reactionTime = (clickTime - createdTime) / 1000; //秒數以毫秒顯示，所以要除1000，轉變為秒
document.querySelector("span#time").innerHTML = reactionTime //在預設0秒的地方，輸出反應的秒數
makeBox();
}
makeBox(); //再輸出一次方塊跳出的函式
console.log(typeof makeBox);
console.log(typeof reactionTime);
console.log(typeof "div#box");
console.log(typeof time);