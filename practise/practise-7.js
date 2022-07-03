let userMonth = process.argv[2];
let userYear = process.argv[3];
let yearsOld;
let fullMonths;

const months = [
    {month: 'None', num: 0},
    {month: 'January', num: 1},
    {month: 'February', num: 2},
    {month: 'March', num: 3},
    {month: 'April', num: 4},
    {month: 'May', num: 5},
    {month: 'June', num: 6},
    {month: 'July', num: 7},
    {month: 'August', num: 8},
    {month: 'September', num: 9},
    {month: 'October', num: 10},
    {month: 'November', num: 11},
    {month: 'December', num: 12},
];

const currentDate = {
    month: months[6].month,
    num: months[6].num,
    year: 2022,
};

if (Number(userMonth) > 12 || Number(userMonth) < 1){
    console.log('Invalid data');
    process.exit();
} else if (userYear <= 0){
    console.log('Invalid data');
    process.exit();
}

for (let i = 0; i < 13; i++){
    if (Number(userMonth) === months[i].num){
        console.log(`You entered date: ${months[i].month} ${userYear} \n`);
        console.log(`Current date: ${currentDate.month} ${currentDate.year} \n`);
    }
}

yearsOld = currentDate.year - userYear;
fullMonths = Math.abs(currentDate.num - userMonth);

console.log(`Your age is: ${yearsOld} years and ${fullMonths} months`);


