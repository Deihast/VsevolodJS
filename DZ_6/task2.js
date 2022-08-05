const singer1 = {
    "powerful voice" : 9,
    "good memory" : 7,
    "musical phrasing" : 7,
    "rhythm sense" : 8,
    "artistic ability" : 4,
    "stress tolerance" : 3
};

const singer2 = {
    "powerful voice" : 5,
    "good memory" : 4,
    "musical phrasing" : 9,
    "rhythm sense" : 10,
    "artistic ability" : 8,
    "stress tolerance" : 7
};

async function acapellaVocalContest (singer) {
    const res = singer["powerful voice"] + singer["good memory"];

    if (res >= 18) {
        console.log("Brilliant!", res);
    } else if (res < 18 && res > 14) {
        return console.log("Good", res);
    } else if (res < 14 && res >= 10) {
        return console.log("Ok", res);
    } else return console.log("Awful", res);
}   

async function pianoVocalContest (singer) {
    const res = singer["musical phrasing"] + singer["rhythm sense"];

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
    
    const index = Math.floor(Math.random() * randEvent.length);
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
        reject ('Invalid input');

    }).then((singer) => {
        console.log('First contest is: A capella!');
        return new Promise((resolve) => {
            setTimeout(() => {
                acapellaVocalContest(singer);
                resolve(singer);
            }, 3000);
        })
    }).then((singer) => {
        console.log('\nSecond contest is: Piano vocal!');
        return new Promise((resolve) => {
            setTimeout(() => {
                pianoVocalContest(singer);
                resolve(singer);
            }, 3000);
        })
    }).then((singer) => {
        console.log('\nLIVE SHOW !');
        return new Promise ((resolve) =>{
            setTimeout(() => {
                liveShow(singer);
                resolve('\nContest is over!');
            }, 3000)
        })
    }).then((x) => {
        console.log(x);
    }).catch((x) => {
        console.log(x);
    })
}

countingScore(singer2);