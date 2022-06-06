let Number = [15, 3, 25, 10, 27, 35];

//一般要輸出array的值，會用以下方式
for(let i = 0; i < Number.length; i++){ // 給予i一個值 i < array長度時，i++,直到>Number.length
    if(Number[i] > 20){ //當array裡的值i > 20
        console.log(Number[i]); //輸出array>20的值
    }
}
//if判斷是只能用在數值，不能用在字串

//用forEach更精簡
Number.forEach(function Num(n){ //function Num(n)是function的寫法function name(params)
    if(n > 20){
        console.log(n);
    }
});

//forEach還有其他寫法
Number.forEach(Num);

function Num(n) {
   if(n > 20){
       console.log(n);
   } 
};

Number.forEach(function (n) {
    if (n > 20){
        console.log(n);
    }
});

//用 arrow functions
Number.forEach((n) => {
    if(n > 20){
        console.log(n);
    }
});

//如果n變數不複雜，只代表一個值，而且沒有其他判斷，比如<, >等等，可簡化括號
Number.forEach(n => {
    if(n > 20){
        console.log(n);
    }
});