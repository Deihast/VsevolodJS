const allFights = new Array({name: 'Mario Barrios', win: true, loose: false, draw: false}, 
{name: 'Isaac Cruz', win: false, loose: false, draw: true}, 
{name: 'Isaac Cruz', win: false, loose: true, draw: false}, 
{name: 'Ronaldo Romero', win: true, loose: false, draw: false} 
);

const fightersProfile = {
    name: 'Gervonta Davis',
    wins: 27,
    loses: 0,
    draws: 0,
    age: 27,
    division: 'lightweight',
    nationality: 'American',
    organization: 'WBA',
    opponents: [],
};

const authorization = {
    login: 'admin',
    password: 'admin',
};

let k = 0;
const recentResults = [];
let d = -1;

if(authorization.login === 'admin' && authorization.password === 'admin'){
    console.log();
    console.log(`Welcome, ${authorization.login} \n`);
    for (let opponent of allFights){
        fightersProfile.opponents[k] = opponent.name;
        k++;
    }
    for (let result of allFights){
        if (result.win === true){
           fightersProfile.wins++;
           d++;
           recentResults[d] = result.name + ' - W ';
        } else if (result.loose === true) {
            fightersProfile.loses++;
            d++;
            recentResults[d] = result.name + ' - L ';
        } else if (result.draw === true){
            fightersProfile.draws++;
            d++;
            recentResults[d] = result.name + ' - D ';
        } else {
            console.log('Enter the result!')
        }
    }
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 3; j++){
            if(i === (j+1)){
                continue;
            } else if (fightersProfile.opponents[i] === fightersProfile.opponents[j+1]) {
                fightersProfile.opponents.splice (1, (j));
            }
        }
    }
    console.log(`===== ${fightersProfile.organization} Fighter Profile 2022 ===== \n`);
    console.log (fightersProfile.name);
    console.log (`${fightersProfile.wins}-${fightersProfile.loses}-${fightersProfile.draws} (W-L-D)`);
    console.log(`Age: ${fightersProfile.age}`);
    console.log(`Division: ${fightersProfile.division}`);
    console.log(`Nationality: ${fightersProfile.nationality}`);
    console.log();
    console.log(`Recent opponents: ${fightersProfile.opponents} \n`);
    console.log(`Latest fights: ${recentResults}`);
} else {
    console.log('Invalid login or password. Try again.');
}

