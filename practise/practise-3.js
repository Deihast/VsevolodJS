const tanyaAge = process.argv[2];
const mityaAge = process.argv[3];
let check1 = +tanyaAge + 1;
let check2 = +mityaAge + 1;

if (check1 !== check1){
    console.log('First argument is not a number!');
}
if (check2 !== check2){
    console.log('Second argument is not a number!');
}

if (check1 !== check1 || check2 !== check2){
    console.log('Invalid data, closing the app');
    process.exit();
}

let isValid = true;

if (tanyaAge > 100 || tanyaAge <= 0){
    console.log('Wrong Tanya age!');
    isValid = false;
}

if (mityaAge > 100 || mityaAge <=0){
    console.log('Wrong Mitya age!');
    isValid = false;
}

if(isValid === false ){
    console.log('Invalid data, closing the app');
    process.exit();
}

let averageAge;

averageAge = Math.round((Number(tanyaAge) + Number(mityaAge))/2);  
console.log(`Average age of Tanya and Mitya: ${averageAge}`);