let createdTime; //圖形產生時間
let clickTime; //點擊圖形時間
let reactionTime; //總共反應的時間


//跳出方塊的函式
function makeBox(){
    let time = Math.random();
    time = time * 2000; //2000的單位是毫秒
    setTimeout(function(){document.querySelector("div#box").style.display = "block" 
    createdTime = Date.now();//圖片產生後開始計時
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