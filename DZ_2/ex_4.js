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

const profile = [];
const newProfile = {};
let k = 0;
let a = 0;

for (let key in fightersProfile){
    profile[k] = new Object();
    profile[k][`${key}`] = fightersProfile[key];               
    k++;
}

 while (a <= profile.length-1 && a >=0){
    for(let key in profile[a]){
         if(key === 'name'){
            newProfile['fullName'] = 'Konrad McGregor';
         } else if (key === 'age'){
             newProfile[`${key}`] = 30;
         }
        a++;
    }
}

console.log(`${newProfile.fullName}, ${newProfile.age}`);

