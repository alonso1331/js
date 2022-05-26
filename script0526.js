// let i = 0;
// while (i<10){
//     i++;
//     document.write(i + " ");
// }

//do/while迴圈控制,結果大部分與上方一樣

// do{
//     i++
//     document.write(i + " ");
// }while(i<10)

//第一個公式是運作順序：判斷→累加→輸出
//第二個公式是運作順序：累加→輸出→判斷
//所以如果i = 0，第二個公式會無法運作，但是第一個會得到輸出值為1


//for計次迴圈控制
let countI = 0;
for(i = 1; i <= 10 ; i++){
    countI += i;
}
document.write(countI);