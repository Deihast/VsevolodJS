const myStation = {
    name: 'Redemption',
    crewMembers: 7,
    foodAmount: 600,
    waterAmount: 800,
    oxygenAmount: 1500,
};

const consumptionPerMember = {
    food: 5,
    water: 8,
    oxygen: 12,
};

const login = 'Astrein'; // process.argv[2];
const password = '@A260100a'; // process.argv[3];
let auth;
if (login === 'Astrein' && password === '@A260100a'){
    auth = true;
} else {
    auth = false;
    console.log('***Invalid login or password!***');
    process.exit();
}

if (auth === true){
console.log('*************************************************************')
console.log(`Welcome to the station "${myStation.name}", Pioneer ${login}!\n`);
console.log(`Information:\nThere are(is) ${myStation.crewMembers} people on the station.`);
console.log(`Total food amount: ${myStation.foodAmount}`);
console.log(`Total water amount: ${myStation.waterAmount}`);
console.log(`Total oxygen amount: ${myStation.oxygenAmount}\n`);
}

const foodConsumption = function(totalAmt){
    let cmpt = totalAmt;
    return function (spend){
        if(spend > cmpt){
            console.log('No food left... Everyone died');
            process.exit();
        }
        cmpt = cmpt - spend;
        return cmpt;  
    }
};
const waterConsumption = function(totalAmt){
    let cmpt = totalAmt;
    return function (spend){
        if(spend > cmpt){
            console.log('No water left... Everyone died');
            process.exit();
        }
        cmpt = cmpt - spend;
        return cmpt;  
    }
};
const oxygenConsumption = function(totalAmt){
    let cmpt = totalAmt;
    return function (spend){
        if(spend > cmpt){
            console.log('No oxygen left... Everyone died');
            process.exit();
        }
        cmpt = cmpt - spend;
        return cmpt;  
    }
};

const foodIntake = foodConsumption(myStation.foodAmount);
const waterIntake = waterConsumption(myStation.waterAmount);
const oxygenIntake = oxygenConsumption(myStation.oxygenAmount);

let amtOfEvents = 0;

const events = [
    {description: '!!!EMERGENCY!!! METEOR HIT THE STATION!'}, //decreased amount of oxygen
    {description: 'Astronaut(s) left the station'}, // decreased all resources consumption
    {description: 'Astronaut(s) died'}, // decreased all resources consumption
    {description: 'Astronaut(s) joined the station'}, // increased all resources consumption
    {description: 'Astronaut(s) got sick'}, // increased water consumption
    {description: 'Supply delivery!'},
];

for (let k of events){
    amtOfEvents++;
};

const randomThing = (max) => {
    let j =  Math.floor(Math.random()*max);
    return j;
};

let consumptionF; 
let consumptionW;
let consumptionO;

let u = 1;

const skipWeek = (() => {
    let days = 7;
    console.log('Report for a week: ');
    const eventsID = [];
    for (let i = 0; i < days; i++){
        eventsID[i] = randomThing(amtOfEvents);
    }
    
    for (let ID of eventsID){
        
        switch (ID){
            case 0:
                console.log(`Day ${u} ${events[0].description}`);
                consumptionF = consumptionPerMember.food * myStation.crewMembers;
                consumptionW = consumptionPerMember.water * myStation.crewMembers;
                consumptionO = (consumptionPerMember.oxygen * myStation.crewMembers) + 120;
                console.log(`Due to collision station cover was damaged, you lost additional 120 oxygen!`);
                console.log(`Daily report\nFood left: ${foodIntake(consumptionF)}\nWater left: ${waterIntake(consumptionW)}\nOxygen left: ${oxygenIntake(consumptionO)}\n`);
                u = u + 1;
                break;
            case 1:
                console.log(`Day ${u} ${events[1].description}`);
                myStation.crewMembers = myStation.crewMembers - 1;
                consumptionF = consumptionPerMember.food * myStation.crewMembers;
                consumptionW = consumptionPerMember.water * myStation.crewMembers;
                consumptionO = consumptionPerMember.oxygen * myStation.crewMembers;
                console.log(`Daily report\nFood left: ${foodIntake(consumptionF)}\nWater left: ${waterIntake(consumptionW)}\nOxygen left: ${oxygenIntake(consumptionO)}\n`);
                u = u +1;
                break;
            case 2:
                console.log(`Day ${u} ${events[2].description}`);
                myStation.crewMembers = myStation.crewMembers - 1;
                consumptionF = consumptionPerMember.food * myStation.crewMembers;
                consumptionW = consumptionPerMember.water * myStation.crewMembers;
                consumptionO = consumptionPerMember.oxygen * myStation.crewMembers;
                console.log(`Daily report\nFood left: ${foodIntake(consumptionF)}\nWater left: ${waterIntake(consumptionW)}\nOxygen left: ${oxygenIntake(consumptionO)}\n`);
                u = u + 1;
                break;
            case 3:
                console.log(`Day ${u} ${events[3].description}`);
                myStation.crewMembers = Number(myStation.crewMembers) + 1;
                consumptionF = consumptionPerMember.food * myStation.crewMembers;
                consumptionW = consumptionPerMember.water * myStation.crewMembers;
                consumptionO = consumptionPerMember.oxygen * myStation.crewMembers;
                console.log(`Daily report\nFood left: ${foodIntake(consumptionF)}\nWater left: ${waterIntake(consumptionW)}\nOxygen left: ${oxygenIntake(consumptionO)}\n`);
                u = u + 1;
                break;
            case 4:
                console.log(`Day ${u} ${events[4].description}`);
                consumptionF = consumptionPerMember.food * myStation.crewMembers;
                consumptionW = Number((consumptionPerMember.water * myStation.crewMembers)) + 10;
                consumptionO = consumptionPerMember.oxygen * myStation.crewMembers;
                console.log(`Daily report\nFood left: ${foodIntake(consumptionF)}\nWater left: ${waterIntake(consumptionW)}\nOxygen left: ${oxygenIntake(consumptionO)}\n`);
                u = u + 1;
                break;
            case 5:
                console.log(`Day ${u} ${events[5].description}`);
                consumptionF = Number((consumptionPerMember.food * myStation.crewMembers)) - 100;
                consumptionW = Number((consumptionPerMember.water * myStation.crewMembers)) - 250;
                consumptionO = Number((consumptionPerMember.oxygen * myStation.crewMembers)) - 400;
                console.log(`YOU HAVE EARNED EXTRA SUPPLIES!`)
                console.log(`Daily report\nFood left: ${foodIntake(consumptionF)}\nWater left: ${waterIntake(consumptionW)}\nOxygen left: ${oxygenIntake(consumptionO)}\n`);
                u = u + 1;
                break;
            default:
                console.log('Invalid event ID');
                break;
        }
      
    }
    
});

skipWeek();
skipWeek();














