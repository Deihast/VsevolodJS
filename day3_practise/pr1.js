const myArr = [11,2,37,81,44,26];

//MAP

/* const newArr = myArr.map((element, index) => {
    const newValue = element * 2;
    console.log(index);
    return newValue;
});

console.log(newArr);
*/

//forEach

/* myArr.forEach((element, index, arr) => {
    console.log('Current element: ', element);
    console.log('CHECK: ', arr[index]);
});
*/

//filter

/* const names = ['Sasha', 'Sveta', 'Maksim', 'Gena', 'Stas'];

const filterNames = names.filter((element) => element.startsWith('S')); //если хотим получить всех у кого НЕ НАЧИНАЕТСЯ с буквы S, пишем логический оператор ! перед element.starts...
console.log(filterNames);
*/

//reduce

const myArr1 = [99, 8, 10, 26, 240]; /*
const result = myArr1.reduce((accum, element) => {
    console.log('ACCUMULATOR: ',accum);
    console.log(accum, '+', element);
    console.log('RESULT:', accum+element);
    return accum + element;
},0);
*/

//sort

myArr1.sort((current, next) => current - next );
console.log(myArr1);

//some, every, find
