const amount = 5;
const price = 29;
const delivery = 15;
const totalPrice = 50;
const month = 'January';
const name = 'Steve Jobs';

let earnings; 
let expenses; 
let profit;

earnings = amount * totalPrice;
expenses = (amount * price) + delivery;
profit = earnings - expenses;

console.log(`Good day, ${name}. Sending You report for ${month}. This month our profit is ${profit}, earnings are ${earnings} and expenses are ${expenses} hryvnia`);
 