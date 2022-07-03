const team1 = {
    name: 'T1',
    fullName: 'T1',
    country: 'Korea',
    worldPlace: '#2',
    wins: 315,
    winRate: 73,
    midPlayer: 'Faker',
    topPlayer: 'Zeus',
    junglePlayer: 'Oner',
    adcarryPlayer: 'Gumayushi',
    suppPlayer: 'Keria',
    earnedMoney2020: '121,964',
    earnedMoney2021: '291,206',
    earnedMoney2022: '218,143', 
};

const team2 = {
    name: 'DK',
    fullName: 'DAMWON KIA Gaming',
    country: 'Korea',
    worldPlace: '-',
    wins: 160,
    winRate: 72,
    midPlayer: 'ShowMaker',
    topPlayer: 'Nuguri',
    junglePlayer: 'Canyon',
    adcarryPlayer: 'deokdam',
    suppPlayer: 'Kellin',
    earnedMoney2020: '1,412,848',
    earnedMoney2021: '770,293',
    earnedMoney2022: '42,028', 
};

const team3 = {
    name: 'EG',
    fullName: 'Evil Geniuses',
    country: 'USA',
    worldPlace: '3',
    wins: 83,
    winRate: 56,
    midPlayer: 'Jojopyun',
    topPlayer: 'Impact',
    junglePlayer: 'Inspired',
    adcarryPlayer: 'Danny',
    suppPlayer: 'Vulcan',
    earnedMoney2020: '25,000',
    earnedMoney2021: '0',
    earnedMoney2022: '125,000', 
};

let team = process.argv[2];

switch (team){
    case 'EG' :
        console.log('================================================================');
        console.log(`Team name: ${team3.name} (${team3.fullName})`);
        console.log(`Country: ${team3.country}`);
        console.log(`World place: ${team3.worldPlace}`);
        console.log(`Wins: ${team3.wins} | Winrate: ${team3.winRate}%`);
        console.log('Players: \n');
        console.log(`Mid: ${team3.midPlayer}`);
        console.log(`Top: ${team3.topPlayer}`);
        console.log(`Jungle: ${team3.junglePlayer}`);
        console.log(`ADC: ${team3.adcarryPlayer}`);
        console.log(`Support: ${team3.suppPlayer} \n`);
        console.log(`How much ${team3.name} earned:`);
        console.log(`2020: $${team3.earnedMoney2020}`);
        console.log(`2021: $${team3.earnedMoney2021}`);
        console.log(`2022: $${team3.earnedMoney2022}`);
        console.log('================================================================');
        break;
    case 'T1' :
        console.log('================================================================');
        console.log(`Team name: ${team1.name}`);
        console.log(`Country: ${team1.country}`);
        console.log(`World place: ${team1.worldPlace}`);
        console.log(`Wins: ${team1.wins} | Winrate: ${team1.winRate}%`);
        console.log('Players: \n');
        console.log(`Mid: ${team1.midPlayer}`);
        console.log(`Top: ${team1.topPlayer}`);
        console.log(`Jungle: ${team1.junglePlayer}`);
        console.log(`ADC: ${team1.adcarryPlayer}`);
        console.log(`Support: ${team1.suppPlayer} \n`);
        console.log(`How much ${team1.name} earned:`);
        console.log(`2020: $${team1.earnedMoney2020}`);
        console.log(`2021: $${team1.earnedMoney2021}`);
        console.log(`2022: $${team1.earnedMoney2022}`);
        console.log('================================================================');
        break;
    case 'DK' :
        console.log('================================================================');
        console.log(`Team name: ${team2.name} (${team2.fullName})`);
        console.log(`Country: ${team2.country}`);
        console.log(`World place: ${team2.worldPlace}`);
        console.log(`Wins: ${team2.wins} | Winrate: ${team2.winRate}%`);
        console.log('Players: \n');
        console.log(`Mid: ${team2.midPlayer}`);
        console.log(`Top: ${team2.topPlayer}`);
        console.log(`Jungle: ${team2.junglePlayer}`);
        console.log(`ADC: ${team2.adcarryPlayer}`);
        console.log(`Support: ${team2.suppPlayer} \n`);
        console.log(`How much ${team2.name} earned:`);
        console.log(`2020: $${team2.earnedMoney2020}`);
        console.log(`2021: $${team2.earnedMoney2021}`);
        console.log(`2022: $${team2.earnedMoney2022}`);
        console.log('================================================================');
        break;
    default :
        console.log('Invalid input, please choose and enter: DK, T1 or EG');
        break;
}   