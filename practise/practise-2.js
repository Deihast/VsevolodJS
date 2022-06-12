const x = process.argv[2]; 
let y;

let check = +x+1;

if (check !== check){
    console.log('Its not a number, try again!');
} else { 
    y = (17*(x**2) - (6*x) + 13);
    console.log(y);
}