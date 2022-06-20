const a = 5;
const b = '12';
const c = '5';
const h = 'w';
const j = null;
const k = [];
const d = 2; // multiplier

console.log('First result is: \n')

if (typeof a === 'number' || typeof a === 'string'){
    let result1;
    result1 = a**d;
    if(result1 !== result1){
        console.log('Its NaN. Try again.\n')
    } else{
        console.log(result1);
    }
} else {
    console.log('You cant do this!\n');
}

console.log('Second result is: \n')

if (typeof j === 'number' || typeof j === 'string'){
    let result1;
    result1 = j**d;
    if(result1 !== result1){
        console.log('Its NaN. Try again.\n')
    } else{
        console.log(result1);
    }
} else {
    console.log('You cant do this!\n');
}

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