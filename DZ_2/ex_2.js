const fightersProfile = {
    name: 'Gervonta Davis',
    wins: 27,
    loses: 0,
    draws: 0,
    age: 27,
    division: 'lightweight',
    nationality: 'American',
    organization: 'WBA',
};

const currentYear = 2022;

if (currentYear === 2022){
    console.log(`===== ${fightersProfile.organization} Fighter Profile ${currentYear} ===== \n`);
    console.log (fightersProfile.name);
    console.log (`${fightersProfile.wins}-${fightersProfile.loses}-${fightersProfile.draws} (W-L-D)`);
    console.log(`Age: ${fightersProfile.age}`);
    console.log(`Division: ${fightersProfile.division}`);
    console.log(`Nationality: ${fightersProfile.nationality}`);
    console.log();
} else if (currentYear === 2023) {
    const changes = {organization:'MMA', division: 'welterweight'};
    const newFightersProfile = {...fightersProfile, ...changes};

    console.log(`===== ${newFightersProfile.organization} Fighter Profile ${currentYear} ===== \n`);
    console.log (newFightersProfile.name);
    console.log (`${newFightersProfile.wins}-${newFightersProfile.loses}-${newFightersProfile.draws} (W-L-D)`);
    console.log(`Age: ${newFightersProfile.age}`);
    console.log(`Division: ${newFightersProfile.division}`);
    console.log(`Nationality: ${newFightersProfile.nationality}`);
    console.log();
} else {
    console.log('Enter the valid year: 2022 or 2023!');
}

