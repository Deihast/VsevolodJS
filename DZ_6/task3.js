const randomResponse = [
    'Not checked yet',
    'Declined',
    'Not checked yet',
    'Accepted',
]

let response;

async function requestStatus () {

    const max = randomResponse.length;
    const idx = Math.floor(Math.random() * max);
    response = randomResponse[idx];
    console.log(response);
}

const requests = new Promise((resolve, reject) => {
    console.log('REQUESTED\n');
    setTimeout(() => {
        requestStatus();
        switch (response) {
            case 'Not checked yet':
                resolve(response);
                break;
            case 'Accepted':
                resolve(response);
            default:
                reject(response);
        }
    }, 3000)
}).then((res) => {
    return new Promise((resolve, reject) => {
        if (res === 'Not checked yet') {
            console.log('\nREQUESTED (2)\n');
            setTimeout(() => {
                requestStatus();
            }, 2000);
        } else {
            console.log('ACCEPTED!')
            resolve();            
        }
    })
}).then (() => {
    console.log('\nINVITATIONS HAVE BEEN SENT!');

}).catch((res) => {
    console.log('DECLINED!');
})