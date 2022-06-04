/*SECOND TASK*/

const wallet = 300;
let price;
let change; let more;

const myList = {        //Amount kg or litres of products you need

    ptt : 3,
    slt : 1,
    mlk : 2,
    tmt : 2,
    cbg : 1,
};

const pricePerOne = {

    potato: 12, //kg
    salt: 70, //kg
    milk: 25, //liter
    tomato: 50, //kg
    cabbage: 36, //kg

};

const a = pricePerOne;
const b = myList;

console.log('I need: \n' + myList.ptt + 'kg of potatoes');
console.log(myList.slt + 'kg of salt');
console.log(myList.mlk + 'L of milk');
console.log(myList.tmt + 'kg of tomatoes');
console.log(myList.cbg + 'kg of cabbage \n');

console.log('Level one: \n')

console.log('Calculating the price... \n');
price = a.potato * b.ptt + a.salt * b.slt + a.milk * b.mlk + a.tomato * b.tmt + a.cabbage * b.cbg;
console.log('The price is: '+ price);

if (price === wallet){
    console.log('Congratulations, you have just the right amount of money! Take your order. \n');
} else if (price < wallet){
    change = wallet-price;
    console.log('You have enough money to buy products, your change is: '+change+'\n');
} else{
    more = price-wallet;
    console.log('Sorry, you dont have enough money... You need '+more+' more hryvnia. \n');
}

console.log('Level two: \n')

let price2;
let change2;

price2 = a.potato * b.ptt;
if (price2 < wallet){
    change2 = wallet-price2;
    console.log('You can buy potatoes and you have '+change2+' money left');
} else if (price2 > wallet) {
    console.log('You cant buy this, go earn more money');
} else{
    console.log('You can buy only this, no money left');
}
 
change2 -= (a.salt * b.slt);
if (change2 > 0){
    console.log('You can buy salt and you have '+ change2 + ' money left');
} else if (change2 === 0){
    console.log ('You can buy only this, no money left');
} else{
    console.log('You cant buy salt');
}

change2 -= (a.milk * b.mlk);
if (change2 > 0){
    console.log('You can buy milk and you have '+ change2 + ' money left');
} else if (change2 === 0){
    console.log ('You can buy only this, no money left');
} else{
    console.log('You cant buy milk');
}

change2 -= (a.tomato * b.tmt);
if (change2 > 0){
    console.log('You can buy tomatoes and you have '+ change2 + ' money left');
} else if (change2 === 0){
    console.log ('You can buy only this, no money left');
} else{
    console.log('You cant buy tomatoes');
}

change2 -= (a.cabbage * b.cbg);
if (change2 > 0){
    console.log('You can buy cabbage and you have '+ change2 + ' money left \n');
} else if (change2 === 0){
    console.log ('You can buy only this, no money left \n');
} else{
    console.log('You cant buy cabbage \n');
}

console.log('Level three: \n')

let price3 = 0;
let change3 = 0;

const potato2 = a.potato * b.ptt;
const salt2 = 300; //a.salt * b.slt;
const milk2 = a.milk * b.mlk;
const tomato2 = a.tomato * b.tmt;
const cabbage2 = 700; //a.cabbage * b.cbg;

if (potato2 < wallet){
    change3 = wallet - potato2;
    console.log('You can buy potato, '+change3+' money left');
} else if (potato2 === wallet){
    console.log('Take only this.');
} else {
    console.log('Try buy something else');
}

if (salt2 < wallet && change3 === 0){
    change3 = wallet - salt2;
    console.log('You can buy salt, '+change3+' money left.');
} else if (salt2 < change3){
    change3 -= salt2;
    console.log('You can buy salt, '+change3+' money left.');
} else{
    console.log('Try buy something else');
}

if (milk2 < wallet && change3 === 0){
    change3 = wallet - milk2;
    console.log('You can buy milk, '+change3+' money left.');
} else if (milk2 < change3){
    change3 -= milk2;
    console.log('You can buy milk, '+change3+' money left.');
} else{
    console.log('Try buy something else');
}

if (tomato2 < wallet && change3 === 0){
    change3 = wallet - tomato2;
    console.log('You can buy tomato, '+change3+' money left.');
} else if (tomato2 < change3){
    change3 -= tomato2;
    console.log('You can buy tomato, '+change3+' money left.');
} else{
    console.log('Try buy something else');
}

if (cabbage2 < wallet && change3 === 0){
    change3 = wallet - cabbage2;
    console.log('You can buy cabbage, '+change3+' money left. \n');
} else if (cabbage2 < change3){
    change3 -= cabbage2;
    console.log('You can buy cabbage, '+change3+' money left. \n');
} else{
    console.log('Try buy something else \n');
}

console.log('Total change: '+change3);