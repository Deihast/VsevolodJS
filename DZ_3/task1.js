const rocketLaunch = (rocketName, launchDelay) => {
    const msToSeconds = Number(launchDelay) / 1000;
    console.log(`Rocket "${rocketName}" is about to start the mission! Delay before launch: ${msToSeconds}s`);
    let a = msToSeconds - 1;
    let timerID = setInterval(() => {console.log(a); a--;}, 1000);
    setTimeout (() => {clearInterval(timerID); console.log ('0...\nROCKET LAUNCHED!'); }, launchDelay);
};

rocketLaunch('Tardis', 10000);