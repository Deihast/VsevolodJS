let firstNumber = 0;
let remainNumbers = 0;
let num = 0; 

for (let i = 0; i < 9; i++){
    firstNumber = i;
    for (let k = 0; k < 100; k++){
        remainNumbers = k;
        num = Number((remainNumbers * 10)) + Number(firstNumber);
        if (num === 564){
            let x;
            x  = String(firstNumber) + remainNumbers;
            console.log(`Calculating is done, initial number X : ${x}`);  
        }
    }
}
