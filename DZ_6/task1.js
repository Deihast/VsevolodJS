const fs = require ('fs');

class KaraokeSong {

    _songText;

    constructor (name) {
        this.songName = name;
        this.songLength = 0;
    }

    uploadSongText = (text) => {
        fs.readFile(text, (err, data) => {
            if (err) {
                console.log('ERROR', err);
                return;
            }
            this._songText = data.toString();
            this._songText = this._songText.split('/');
        });
    }

    startSong = () => {
        let i = 0;
        const p = new Promise ((resolve, reject) => {
            setTimeout (() => {
                if (this._songText[0]) {
                    resolve(`Song ${this.songName} is loading...`);
                }
                reject('Invalid data');
            }, 3000);
        }).then((validData) => {
            console.log(`${validData}\nStart in 3 s.\n********************************` );
                setTimeout(() => {
                    this._songText.forEach(element => {
                        this.songLength++;
                    });
                    let timer = setInterval (() => {console.log(this._songText[i]); i++}, 2000);
                    let end = 2000 * Number(this.songLength);
                    setTimeout(() => {clearInterval(timer); console.log('********************************\nEnd of the song')}, end);
                }, 3000);
        }).catch((invalidData) => {console.log(invalidData)});
    }
}

const karaokesong1 = new KaraokeSong('STARSET - ECHO');

karaokesong1.uploadSongText('./songtext.txt');
karaokesong1.startSong();