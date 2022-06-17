const astronautMeals = [
    {meal: 'Lasagna', time: 'breakfast', day: 'Monday, Wednesday, Friday, Saturday'},
    {meal: 'Bacon and eggs', time: 'breakfast', day: 'Tuesday, Friday, Thursday, Sunday'},
    {meal: 'Pancakes', time: 'breakfast', day: 'Wednesday, Friday, Saturday, Sunday'},
    {meal: 'Pasta', time: 'dinner', day: 'Sunday, Monday, Tuesday'},
    {meal: 'Ramen', time: 'dinner', day: 'Sunday, Wednesday, Thursday'},
    {meal: 'Grilled steak', time: 'dinner', day: 'Friday, Saturday, Monday'},
    {meal: 'Sushi', time: 'supper', day: 'Friday, Saturday, Wednesday'},
    {meal: 'Noodles', time: 'supper', day: 'Monday, Tuesday, Wednesday'},
    {meal: 'Cereal and milk', time: 'supper', day: 'Thursday, Friday, Saturday'},
];

const randomMeal = (mealTime, mealDay) => {
    let check = +mealTime + 1;
    let check2 = +mealDay+1;
    let isValid;
    let isValid2;

    if(typeof mealTime === 'string' && check !== check && (mealTime === 'dinner'|| mealTime === 'supper'|| mealTime === 'breakfast')){
        isValid = true;
    } else {
        isValid = false;
    }

    if(typeof mealDay === 'string' && check2 !== check2 && (mealDay === 'Monday'|| mealDay === 'Tuesday'|| mealDay === 'Wednesday'|| mealDay === 'Thursday'|| mealDay === 'Friday' || mealDay === 'Saturday'|| mealDay === 'Sunday')){
        isValid2 = true;
    } else {
        isValid2 = false;
    }

    if (isValid === true && isValid2 === true){
        const certainMeals = [];
        let a = 0;
        console.log(`Your time: ${mealDay}, ${mealTime}. You have next options: \n`);
        for (let i of astronautMeals){
            if(i.time === mealTime && i.day.includes(mealDay)){
                certainMeals[a] = i;
                a++;
            }
        }
    
        for (let k of certainMeals){
            console.log(k.meal);
        }
        console.log();

        if (a>0 && a === 1){
            console.log('You have only one option.');
        } else {
            console.log('Choosing random...');
        }
        
        let j;
        j = Math.floor(Math.random()*a);
        console.log(`Your meal is: ${certainMeals[j].meal}\nEnjoy your meal, Astronaut! `);
    } else{
        console.log('Invalid data, choose between: breakfast, dinner or supper. Also check correctness of the days of the week.');
    }
};

randomMeal('breakfast','Wednesday');



