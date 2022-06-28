const CoffeeMachineConstructor = function(){
    this.waste = 500;
    this.coffeeVol = 300;
    this.coffeLim = 300;

    this.waterVol = 1000;
    this.waterLim = 1000;

    this.milkVol = 600;
    this.milkLim = 600;

    this.cacaoVol = 300;
    this.cacaoLim = 300;

    this.chocolateVol = 200;
    this.chocolateLim = 200;
};

CoffeeMachineConstructor.prototype.makeCoffeeBasedDrink = function(orderName, extraCoffee, extraMilk){
    let orderSize;
    let milkAdd;

      switch(orderName){
        case 'Americano':
            this.coffeeVol = this.coffeeVol - 10;
            this.waterVol = this.waterVol - 100;
            this.waste = this.waste - 10;
            break;
        case 'Espresso':
            this.coffeeVol = this.coffeeVol - 6;
            this.waterVol = this.waterVol - 80;
            this.waste = this.waste - 6;
            break;
        case 'Cappuccino':
            this.coffeeVol = this.coffeeVol - 15;
            this.waterVol = this.waterVol - 150;
            this.milkVol = this.milkVol - 10;
            this.waste = this.waste - 15;
            break;
        default:
            console.log('Invalid order!')
            return;
    }

    if(extraCoffee === true){
        this.coffeeVol = this.coffeeVol - 5;
        this.waste = this.waste - 5;
        orderSize = 'big';
    } else if (extraCoffee === false){
        orderSize = 'small';
    }
    
    if (extraMilk === true && orderName !== 'Cappuccino'){
        if(this.milkVol - 10 >= 0){
            this.milkVol = this.milkVol - 10;
            milkAdd = 'milk';
        } else {
            this.milkVol = 0;
            console.log('Not enough milk!!!');
            return;
        }
        
    } else if (extraMilk === true && orderName === 'Cappuccino'){
        if(this.milkVol - 5 >= 0){
            this.milkVol = this.milkVol - 5;
            milkAdd = 'extra milk';
        } else {
            this.milkVol = 0;
            console.log('Not enough milk!!!');
            return;
        }

    } else if (extraMilk === false && orderName !== 'Cappuccino'){
        milkAdd = 'no milk';
    } else if (extraMilk === false && orderName === 'Cappuccino'){
        milkAdd = 'no extra milk';
    }

    if(this.waste < 0){
        this.waste = 0;
        console.log('Fill out waste box and try again!');
        return;
    }

    if(this.coffeeVol < 0){
        this.coffeeVol = 0;
        console.log('Fill in coffee!');
        return;
    }
    
    if(this.waterVol < 0){
        this.waterVol = 0;
        console.log('No water!');
        return;
    }

    console.log(`Making... ${orderSize} ${orderName} with ${milkAdd}`);

}

CoffeeMachineConstructor.prototype.makeMilkBasedDrink = function (orderName, extraMainProduct, extraMilk){
    let orderSize;
    let milkAdd;

    switch (orderName){
        case 'Hot chocolate':
            this.milkVol = this.milkVol - 20;
            this.chocolateVol = this.chocolateVol - 10;
            break;
        case 'Cacao':
            this.milkVol =  this.milkVol - 20;
            this.cacaoVol = this.cacaoVol - 15;
            break;
        default:
            console.log('Invalid order!');
    }

    if(extraMainProduct === true && orderName === 'Hot chocolate'){
        this.chocolateVol = this.chocolateVol - 10;
        orderSize = 'big';
    } else if (extraMainProduct === true && orderName === 'Cacao'){
        this.cacaoVol = this.cacaoVol - 15;
        orderSize = 'big';
    } else if (extraMainProduct === false){
        orderSize = 'small'
    }

    if(extraMilk === true){
        this.milkVol = this.milkVol - 10;
        milkAdd = 'extra milk';
    } else if (extraMilk === false){
        milkAdd = 'no extra milk';
    }

    if(this.chocolateVol < 0 && orderName === 'Hot chocolate'){
        this.chocolateVol = 0;
        console.log('No chocolate cant do this!');
        return;
    }
    
    if(this.cacaoVol < 0 && orderName === 'Cacao'){
        this.cacaoVol = 0;
        console.log('No cacao cant do this!');
        return;
    }

    if(this.milkVol < 0){
        this.milkVol = 0;
        console.log('No milk! Fill in!');
        return;
    }

    console.log(`Making... ${orderSize} ${orderName} with ${milkAdd}`);
}

CoffeeMachineConstructor.prototype.showStatus = function(){
    console.log('*****************************************************');
    console.log(`Current status:\nWaste box space left:${this.waste}\nCoffee left: ${this.coffeeVol}\nWater left: ${this.waterVol}\nMilk left: ${this.milkVol}\nCacao left: ${this.cacaoVol}\nChocolate left: ${this.chocolateVol}\n`);
    console.log('*****************************************************');
}

const coffeeMachine1 = new CoffeeMachineConstructor();

coffeeMachine1.makeCoffeeBasedDrink('Cappuccino', false, true);
coffeeMachine1.makeCoffeeBasedDrink('Americano', true, false);
coffeeMachine1.makeCoffeeBasedDrink('Espresso', false, false);
coffeeMachine1.makeMilkBasedDrink('Hot chocolate', false, true);
coffeeMachine1.makeMilkBasedDrink('Cacao', true, false);

coffeeMachine1.showStatus();

// !!! TASK 4 - MASTER !!!

const master = {
    name: 'Vsevolod',
    fillCoffe: function(){
        this.result =  this.coffeLim - this.coffeeVol;
        if(this.result === 0){
            console.log(`Coffee box is FULL!`);
        } else {
            this.coffeeVol = this.coffeeVol + this.result;
            console.log(`Coffee filled: ${this.coffeeVol}, Missing coffee: ${this.result}`);
        }
    },
    fillWater: function(){
        this.result =  this.waterLim - this.waterVol;
        if(this.result === 0){
            console.log(`Water box is FULL!`);
        } else {
            this.waterVol = this.waterVol + this.result;
            console.log(`Water filled: ${this.waterVol}, Missing water: ${this.result}`);
        }
    },
    fillMilk: function(){
        this.result =  this.milkLim - this.milkVol;
        if(this.result === 0){
            console.log(`Milk box is FULL!`);
        } else {
            this.milkVol = this.milkVol + this.result;
            console.log(`Milk filled: ${this.milkVol}, Missing milk: ${this.result}`);
        }
    },
    fillCacao: function(){
        this.result =  this.cacaoLim - this.cacaoVol;
        if(this.result === 0){
            console.log(`Cacao box is FULL!`);
        } else {
            this.cacaoVol = this.cacaoVol + this.result;
            console.log(`Cacao filled: ${this.cacaoVol}, Missing cacao: ${this.result}`);
        }
    },
    fillChocolate: function(){
        this.result =  this.chocolateLim - this.chocolateVol;
        if(this.result === 0){
            console.log(`Chocolate box is FULL!`);
        } else {
            this.chocolateVol = this.chocolateVol + this.result;
            console.log(`Chocolate filled: ${this.chocolateVol}, Missing chocolate: ${this.result}`);
        }
    },
    clearWaste: function(){
        if (this.waste === 500){
            console.log('No need to clear');
        } else {
            console.log(`Waste box is empty now`);
        }
    }
};

master.fillCoffe.bind(coffeeMachine1)();
master.fillWater.bind(coffeeMachine1)();
master.fillMilk.bind(coffeeMachine1)();
master.fillCacao.bind(coffeeMachine1)();
master.fillChocolate.bind(coffeeMachine1)();
master.clearWaste.bind(coffeeMachine1)();

coffeeMachine1.showStatus();

