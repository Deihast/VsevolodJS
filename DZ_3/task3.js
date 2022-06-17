const currentDate = {
    day: 26,
    month: 'January',
    year: 2020,
};

const randomTask = Math.floor(Math.random()*4);
const randomPlanet = Math.floor(Math.random()*3);
let missionDuration;
let chosenPlanet;
let ratio;

const currentTask = (taskNumber) => {
    let missionGoal;
    if (taskNumber === 0){
        missionGoal = 'Astronaut rescue';
        missionDuration = 8;
    } else if (taskNumber === 1){
        missionGoal = 'Ore mining';
        missionDuration = 36;
    } else if (taskNumber === 2){
        missionGoal = 'Discovering new plant species';
        missionDuration = 24;
    } else if (taskNumber === 3){
        console.log('!!! CURRENT TASK: EXTERMINATION !!!\nDestroy this planet and return to base immediately! ');
        process.exit();
    }

    console.log(`Mission goal: ${missionGoal}`);
    console.log(`Mission duration on planet: ${missionDuration} hours`)
};

const currentPlanet = (planetNumber) =>{
    if (planetNumber === 0){
        chosenPlanet = 'Proxima Centauri b';
        ratio = 8;
    } else if (planetNumber === 1){
        chosenPlanet = 'Ross 128 b';
        ratio = 12;
    } else if (planetNumber === 2){
        chosenPlanet = 'Kepler-22 b';
        ratio = 1.5;
    }
    const planetHours = Number(missionDuration) * ratio;
    console.log(`Mission duration relatively to Earth: ${planetHours} hours`);
    console.log(`Planet: ${chosenPlanet}`); 
};

console.log('************************************************')
console.log(`${currentDate.day}/${currentDate.month}/${currentDate.year}\nMission starts...`);
currentTask(randomTask);
currentPlanet(randomPlanet);
console.log('************************************************')

