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




