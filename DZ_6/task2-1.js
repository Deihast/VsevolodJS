const singer1 = {
    "powerful voice" : 9,
    "good memory" : 7,
    "musical phrasing" : 7,
    "rhythm sense" : 8,
    "artistic ability" : 4,
    "stress tolerance" : 3,
    firstContest : 0,
    secondContest: 0,
    thirdContest: 0
};

const singer2 = {
    "powerful voice" : 5,
    "good memory" : 4,
    "musical phrasing" : 9,
    "rhythm sense" : 10,
    "artistic ability" : 8,
    "stress tolerance" : 7,
    firstContest : 0,
    secondContest: 0,
    thirdContest: 0
};

const singer3 = {
    "powerful voice" : 10,
    "good memory" : 10,
    "musical phrasing" : 10,
    "rhythm sense" : 10,
    "artistic ability" : 10,
    "stress tolerance" : 10,
    firstContest : 0,
    secondContest: 0,
    thirdContest: 0
}

async function acapellaVocalContest (singer) {
    const res = singer["powerful voice"] + singer["good memory"];
    singer.firstContest = res;

    if (res >= 18) {
        return console.log("Brilliant!", res);
    } else if (res < 18 && res > 14) {
        return console.log("Good", res);
    } else if (res < 14 && res >= 10) {
        return console.log("Ok", res);
    } else {
        return console.log("Awful", res);
    }
}   

async function pianoVocalContest (singer) {
    const res = singer["musical phrasing"] + singer["rhythm sense"];
    singer.secondContest = res;

    if (res >= 18) {
        return console.log("Brilliant!", res);
    } else if (res < 18 && res > 14) {
        return console.log("Good", res);
    } else if (res < 14 && res >= 10) {
        return console.log("Ok", res);
    } else return console.log("Awful", res);
}

async function liveShow (singer) {
    const randEvent = [
        'fan appears on the stage',
        'technical problems',
        'everything is good',
        'everything is good',
        'everything is good',
        'rain',
    ]

    const max = randEvent.length - 1;
    const index = Math.floor(Math.random() * max);
    const event = randEvent[index];
    let res;

    if (singer["stress tolerance"] >= 7) {
        res = singer["stress tolerance"] + singer["artistic ability" ];
    } else {
        res = singer["stress tolerance"] + singer["artistic ability" ];
        switch (event) {
            case 'fan appears on the stage':
                res = res - 2;
                break;
            case 'technical problems':
                res = res - 4;
                break;
            case 'rain':
                res = res - 1;
            default:
                break;
        }
    }
    singer.thirdContest = res;

    console.log(event);

    if (res >= 18) {

        return console.log("Brilliant!", res);
    } else if (res < 18 && res > 14) {
        return console.log("Good", res);
    } else if (res < 14 && res >= 10) {
        return console.log("Ok", res);
    } else return console.log("Awful", res);
}

async function countingScore (singer) {
    const result = new Promise ((resolve, reject) => {
        if (singer) {
            resolve(singer)
        }
        reject('Invalid input');

    }).then((singer) => {
        console.log('First contest is: A capella!');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                acapellaVocalContest(singer);
                if (singer.firstContest > 10) {
                    resolve(singer);
                }

                reject('You don`t have much score to pass(1)');
            }, 3000);
        })
    }).then((singer) => {
        console.log('\nSecond contest is: Piano vocal!');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                pianoVocalContest(singer);
                if (singer.secondContest > 10) {
                resolve(singer);
                }
                
                reject('You don`t have much score to pass(2)');
            }, 3000);
        })
    }).then((singer) => {
        console.log('\nLIVE SHOW !');
        return new Promise ((resolve, reject) =>{
            setTimeout(() => {
                liveShow(singer);
                if (singer.thirdContest > 10) {
                    resolve('\nContest is over! You have passed!');
                }

                reject('You don`t have much score to pass(3)')  
            }, 3000)
        })
    }).then((x) => {
        console.log(x);
    }).catch((reject) => {
        console.log(reject);
    })
}

countingScore(singer3);