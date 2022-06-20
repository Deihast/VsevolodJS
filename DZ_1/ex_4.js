let a = 5;
let b = '12';
let c = '5';
let h = 'w';
let j = null;
let k = [];

let d = 2; 

console.log('First result is: \n')

if (typeof a === 'number' || typeof a === 'string'){
    let result1;
    result1 = a**d;
    if(result1 !== result1){
        console.log('Its NaN. Try again.')
    } else{
        console.log(result1);
    }
} else {
    console.log('You cant do this!');
}

console.log();
console.log('Second result is: \n')

if (typeof h === 'number' || typeof h === 'string'){
    let result1;
    result1 = h**d;
    if(result1 !== result1){
        console.log('Its NaN. Try again.')
    } else{
        console.log(result1);
    }
} else {
    console.log('You cant do this!');
}

console.log();
console.log('Third result is: \n')
if (typeof b === 'number' || typeof b === 'string'){
    let result1;
    result1 = b**d;
    if(result1 !== result1){
        console.log('Its NaN. Try again.')
    } else{
        console.log(result1);
    }
} else {
    console.log('You cant do this!');
}