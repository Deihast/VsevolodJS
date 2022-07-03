let num = Math.round(process.argv[2]);
let result;
let arr = [];
arr.push(1,2,3,4,5,6,7,8,9,10);
let check;
check = Number(num) + 1;

if (check !== check){
    console.log('Not a number');
    process.exit();
} else if (Number(num) < 0 || Number(num) > 9) {
    console.log('Invalid number');
    process.exit();
}

for (let i = 0; i < 10; i++){
    result = Number(num) * Number(arr[i]);
    console.log(`${num} * ${arr[i]} = ${result}`);
}