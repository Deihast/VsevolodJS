const floors = process.argv[2];
const flatsPerFloor = process.argv[3];
const myFlatNum = process.argv[4];

const check = +myFlatNum + 1;
const flats = Math.round((floors * flatsPerFloor));

if (flats !== flats || check !== check){
    console.log('Invalid data...');
    process.exit();
} else {
    console.log(`Amount of flats: ${flats}, Your flat is № ${myFlatNum}`);
}

if (myFlatNum > flats || myFlatNum <= 0){
    console.log(`Wrong flat number! Flat № ${myFlatNum} does not exist`);
    process.exit();
}

let a = Number(flatsPerFloor);
let j = Number(floors);
let f = 1;

while (j > 0){
    if(a < myFlatNum){
        a = a + Number(flatsPerFloor);
        f++;
    } else {
        console.log(`Your flat is: ${f} `)
        break;
    }
    j--;
}




















