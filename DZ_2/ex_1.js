/*FIRST_PART*/

const authorization = {
    login: 'Vsevolod',
    password: 'qwerty12345',
};

console.log('First example: \n');
console.log('User login: '+ authorization.login);
console.log('User password: '+ authorization.password);
console.log();

const authorization1 = {};
authorization1.login = 'Some User';
authorization1.password = 'Some Password';

console.log('Second example: \n');
console.log('User login: '+ authorization1.login);
console.log('User password: '+ authorization1.password);
console.log();

const authorization2 = {};
Object.defineProperty(authorization2, 'login', {value:'Mario'});
Object.defineProperty(authorization2, 'password', {value:'99999'});

console.log('Third example: \n');
console.log('User login: '+ authorization2.login);
console.log('User password: '+ authorization2.password);
console.log();

const authorization3 = new Object();
authorization3['login'] = 'Thomas Shelby';
authorization3['password'] = 'peakyblinders12092013';

console.log('Fourth example: \n');
console.log('User login: '+ authorization3['login']);
console.log('User password: '+ authorization3['password']);
console.log();

const authorization4 = Object.create(authorization3);
authorization4.login = 'Arthur';
authorization4.password = 'pendragon79';

console.log('Fifth example: \n');
console.log('User login: '+ authorization4['login']);
console.log('User password: '+ authorization4['password']);
console.log();

// SECOND_PART
let j = 0;
const logins = ['User1', 'User2', 'User3', 'User4', 'User5'];

console.log('Users: \n');

while (j<logins.length){
    console.log(logins[j]);
    j++;
}

console.log();

const logins1 = [];
logins1[0] = 'User-1';
logins1[1] = 'User-2';
logins1[2] = 'User-3';
console.log(logins1);

console.log();

logins1.push('User-4');
console.log(logins1);

const logins2 = new Array();
const logins3 = new Array('User_1', 'User_2', 'User_3');

console.log(logins2, logins3);

const logins4 = [];
logins4.push('USER01', 'USER02', 'USER03');
console.log(logins4);
