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
// let countI = 0;
// for(i = 1; i <= 10 ; i++){
//     countI += i;
// }
// document.write(countI);

//break遇到符合條件跳出程式
// for(i = 1; i <= 10 ; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

for(let i = 2; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log("i=" + i, "j=" + j);
    }
}

for(let a = 2; a <= 9; a++){
    for (let b = 1; b <= 9; b++){
        console.log("a=" + a, "b=" + b, "a*b =" + a * b);
    }
}

document.writeln("列印等腰三角形</br>");
    for(let i=0; i<5; i++){
        for(let j=5; j>i; j--){
            document.writeln("&nbsp");
        }
        for(var k=0; k<2*i+1; k++){
            document.writeln("*");
        }
        document.writeln("</br>")
    }
document.writeln("</br>");
document.writeln("列印直角三角形</br>");
    for(let i=0; i<5; i++){
        for(let j=5; j==i; j++){
            document.writeln("&nbsp");
        }
         for(var k=0; k<2*i+1; k++){
            document.writeln("*");
        }
        document.writeln("</br>")
    }


// document.writeln("列印正方形</br>");
// let str = " ";
// for(let i=0; i<5; i++){
//     for(let j=5; j<5; j++){
//         str = str + "*"
//     }
//     str = str + "\n"
// }
// document.write(str);