const cigarettesMenu = [
    {name: 'Winston', amount: 4, price: 59, id: 01},
    {name: 'Marvel', amount: 3, price: 61, id: 02},
    {name: 'Camel', amount: 5, price: 63, id: 03},
    {name: 'Malboro', amount: 2, price: 75, id: 04},
    {name: 'West', amount: 1, price: 76, id: 05},
];

const drinksMenu = [
    {name: 'Water', amount: 9, price: 12, id: 01},
    {name: 'Beer', amount: 4, price: 35, id: 02},
    {name: 'Apple juice', amount: 3, price: 21, id: 03},
    {name: 'Orange juice', amount: 4, price: 21, id: 04},
    {name: 'Cola', amount: 5, price: 25, id: 05},
];

const toysMenu = [
    {name: 'Altair', amount: 10, price: 50, id: 01},
    {name: 'Atmos', amount: 8, price: 50, id: 02},
    {name: 'Fencer', amount: 5, price: 50, id: 03},
    {name: 'Hyper Dragonoid', amount: 6, price: 50, id: 04},
    {name: 'Percival', amount: 7, price: 50, id: 05},
];

function checkIsNaN(value){
    const isNaN = Number.isNaN(+value);
    if (isNaN === false && value !== 0 && value !== null){
        return isNaN;
    } else {
        console.log('Invalid data');
        return;
    }
}

const VendingMachine = function(productType, stock, temperatureInside){
    this.productType = productType;
    this.stock = stock;
    this.temperatureInside = temperatureInside;
    this.cashLimit = 300;
    this.balance = 0;
};

VendingMachine.prototype.showTemperature = function (){
    console.log(`Temperature inside vending machine with ${this.productType} is: ${this.temperatureInside} degrees Celsius`);
}

VendingMachine.prototype.showStock = function(){
    console.log(`*************************************************\nWe have next stock of ${this.productType}:\n`);
    for (value of this.stock){
        console.log(value.name);
    }
    console.log('*************************************************');
}

VendingMachine.prototype.moneyInsert = function(banknoteValue){
    if (checkIsNaN(banknoteValue) === false){
        if(banknoteValue <= this.cashLimit){
            switch (banknoteValue){
                case 10: 
                    this.balance = this.balance + banknoteValue;
                    this.cashLimit = this.cashLimit - banknoteValue;
                    break;
                case 20: 
                    this.balance = this.balance + banknoteValue;
                    this.cashLimit = this.cashLimit - banknoteValue;
                    break;
                case 50:
                    this.balance = this.balance + banknoteValue;
                    this.cashLimit = this.cashLimit - banknoteValue;
                    break;
                case 100: 
                    this.balance = this.balance + banknoteValue;
                    this.cashLimit = this.cashLimit - banknoteValue;
                    break;
                default:
                    console.log('Invalid banknote!');
                    return;  
            }
             console.log(`You inserted ${banknoteValue} and your balance is ${this.balance}`);
        } else {
            console.log(`CASH BOX IS FULL, YOUR BALANCE: ${this.balance}`);
        }
    }    
}

VendingMachine.prototype.buy = function(orderID, amount){  
    if(this.balance !== 0){
        if(this.stock.find(product => product.id === orderID) !== undefined){
            if(checkIsNaN(orderID) === false && checkIsNaN(amount) === false){
                const yourOrder = [];
                yourOrder.push(this.stock.find(product => product.id === orderID));
                const totalOrder = yourOrder[0].price * amount;
                const idx = this.stock.indexOf(yourOrder[0]);

                this.balance = this.balance - totalOrder;
                this.stock[idx].amount -= amount;
        
                if(this.balance >= 0 && this.stock[idx].amount >= 0){
                    console.log(`You bought ${amount} ${yourOrder[0].name} for ${yourOrder[0].price} each and your balance left: ${this.balance}`);
                } else if (this.stock[idx].amount < 0){
                    console.log(`Try to buy less or product is out of stock.`);
                } else {
                    console.log(`Not enough money! Your balance: ${this.balance + totalOrder} and order price is ${totalOrder}`);
                }
            }
            
        } else {
            console.log('Invalid data!');
        }
    } else {
        console.log('Please, insert money!');
    }
}

const cigarettesMachine = new VendingMachine('cigarettes', cigarettesMenu, 15);
const drinksMachine = new VendingMachine('drinks', drinksMenu, 5);
const toysMachine = new VendingMachine('toys', toysMenu, 15);

cigarettesMachine.showStock();
cigarettesMachine.showTemperature();

cigarettesMachine.moneyInsert(100);
cigarettesMachine.moneyInsert(100);
cigarettesMachine.moneyInsert(100);
cigarettesMachine.moneyInsert(100);
cigarettesMachine.moneyInsert('w');

cigarettesMachine.buy(02, 2);
cigarettesMachine.buy(02, 1);
cigarettesMachine.buy(02, 2);




