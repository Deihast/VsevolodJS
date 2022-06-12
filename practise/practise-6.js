let green = 3;
let red = 2;
let t = process.argv[2];
let check;
let color = 'green';
let a = 0;

check = Number(t+1);

if (check !== check){
    console.log('Its not a number, try again.');
} else {
    while (Number(a) < Number(t)){
        switch (color){
            case 'green':
                color = 'red';
                a = Number(a) + Number(green);
                break;
            case 'red':
                color = 'green';
                a = Number(a) + Number(red);
                break;
            default:
                console.log('Wrong color!');
                break;
        }
    }
    
    if (color === 'green'){
        color = 'red';
    } else if (color === 'red') {
        color = 'green';
    }
    
    if (Number(a) > Number(t)){
        if (color === 'green'){
            a = a - green;
        } else if(color === 'red'){
            a = a - red;
        }
    }
    console.log(`According to my calculations, color is ${color}`);
}








