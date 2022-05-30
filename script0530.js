function convertDF(dc) {
    return dc * 1.8 +32;
}

var dc = prompt ("請輸入攝氏溫度:","25")
document.write("華氏溫度為：" + convertDF(dc));