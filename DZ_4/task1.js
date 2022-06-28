const coffeeMenu = [
    {name:'Сappuccino', price: 30, id: 11 },
    {name:'Latte', price: 25, id: 9 },
    {name:'Americano', price: 15, id: 7 },
];

const snackMenu = [
    {name: 'Crisps', price: 50, id: 6 },
    {name: 'Snickers', price: 28, id: 5 },
    {name: 'Nuts', price: 25, id: 29 },
];

let totalBalance = 600;
let extractedMoney = 0;
let change = 0;

function checkIsNaN (value){
    const check = +value;
    const isNaN = Number.isNaN(check);
    return isNaN;
}

function extractMoney (banknoteValue){
    if (checkIsNaN(banknoteValue) === false){
    switch (banknoteValue){
        case 5:
            totalBalance = totalBalance - banknoteValue;
            extractedMoney = extractedMoney + banknoteValue;
            break;
        case 10:
            totalBalance = totalBalance - banknoteValue;
            extractedMoney = extractedMoney + banknoteValue;
            break;
        case 20:
            totalBalance = totalBalance - banknoteValue;
            extractedMoney = extractedMoney + banknoteValue;
            break;
        case 50:
            totalBalance = totalBalance - banknoteValue;
            extractedMoney = extractedMoney + banknoteValue;
            break;
        default:
            console.log('Invalid banknote!');
            return;
    }
    console.log(`Money left: ${totalBalance} | Money extracted: ${extractedMoney}`);
    } else {
        console.log('Not a banknote!');
    }
}

const Product = function(type, menu){
    this.type = type;
    this.menu = menu;
    
    this.info = () => {
        console.log('===================================');
        console.log(`${type} menu (Name (ID) | Price): `);
        for (let value of menu){
            console.log(`${value.name} (${value.id}) | ${value.price}`);
        }
        console.log('===================================');
    }
}

const Buying = function(product){
    const yourOrder = [];
    let isValidID;
    this.buying = (orderID, amount) => {

        if(checkIsNaN(orderID) === true){
            console.log('Invalid data');
            process.exit();
        } else if (checkIsNaN(amount) === true){
            console.log('Invalid data');
            process.exit();
        }

        for (let ID of product){
                if (orderID === ID.id){
                    yourOrder[0] = ID;
                    break;
                } else {
                    isValidID = false;
                }
            }

        if(isValidID === false && yourOrder[0] === undefined){
            console.log('Invalid ID');
            process.exit();
        }
       
        let price = Number(yourOrder[0].price) * amount;
         change = extractedMoney - price;
        extractedMoney = change;

        if (change < 0){
            console.log(`You need ${Math.abs(change)} more money to buy this!`);
            return;
        } else if (change === 0){
            console.log(`You bought ${amount} ${yourOrder[0].name} and there is no change`);
            return;
        } else {
            console.log(`You bought ${amount} ${yourOrder[0].name} and your change is ${change}.`);
            return;
        }
    }
    
}

const coffee = new Product('Coffee', coffeeMenu);
const snack = new Product('Snack',snackMenu );
const coffeeBUY = new Buying(coffee.menu);
const snackBUY = new Buying(snack.menu);

coffee.info();
snack.info();

extractMoney(50);
extractMoney(50);
extractMoney(50);
extractMoney(50);
extractMoney(13); // Invalid banknote 
extractMoney('w'); // Not a banknote

coffeeBUY.buying(11, 3);
snackBUY.buying(29, 4);

console.log(`Your have ${totalBalance} on your balance, and ${extractedMoney} cash.`);




