const num = process.argv[2]; 

let previousNum = num - 1;
let nextNum = +num + 1;

let check = +num+1;

if (check !== check){
    console.log('Its not a number, try again!')
} else {
    console.log(`Previous number: ${previousNum}`);
    console.log(`Next number: ${nextNum}`);;
}
