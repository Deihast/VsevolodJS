const allFighters = [{name: 'Gervonta Devis', age: 27}, 
{name: 'Ronaldo Romero', age: 26}, 
{name: 'Avery Sparrow', age: 28}, 
{name: 'Jackson Marinez',age: 30 }, 
{name: 'Arturs Ahmetovs', age: 25}
];

let a;

for (let i = 0; i < 5; i++){
    for(let j = 0; j < 4; j++){
        if (allFighters[j].age < allFighters[j+1].age){
            a = allFighters[j];
            allFighters[j] = allFighters[j+1];
            allFighters[j+1] = a;
        } 
    }  
    
}

const lastIndex = allFighters.length - 1;

console.log(`${allFighters[0].name} is the oldest fighter, his age: ${allFighters[0].age} \n`);
console.log(`${allFighters[lastIndex].name} is the youngest fighter, his age: ${allFighters[lastIndex].age}`);