document.getElementById("myButton").onclick = function() {
    let x = Math.random()
    x = x * 4;
    x = Math.floor(x);
    console.log(x);

    if (x == document.getElementById("myInput").value){
        alert("恭喜，您猜對了");
    }else{
        alert("您猜錯了，這個數字是" + x);
    }
}
