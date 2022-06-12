let num1 = process.argv[2];
let num2 = process.argv[3];
let num3 = process.argv[4];
let num4 = process.argv[5];
let num5 = process.argv[6];
let temp;

const numbers = [];
numbers.push(num1, num2, num3, num4, num5);
console.log('Even or odd: \n')
for (let i of numbers){
    temp = Number(i)%2;
    if (temp === 0){
        console.log(`${i} is even number`);
    } else if (temp !== temp){
        console.log('Not a number!');
    } else{
        console.log(`${i} is odd number`);
    }
}

console.log();
console.log('Split result: \n');
const num = 'NUMBERS';
let array = num.split('');

for (let i of array){
    console.log(`${i}`);
}

