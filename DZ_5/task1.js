var fs = require('fs');

class ProfileTemplate {
    photo = '';

    constructor (firstName, lastName, age, country, gender, uid) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.gender = gender;
        this._uid = uid;
        this.friendList = [];
        this.mailbox = [];
    };

    changeSettings = (setting, changedSetting) => {
        const currentSetting = setting.toLowerCase();
        if (changedSetting) {
            switch (currentSetting) {
                case 'firstname':
                    this.firstName = changedSetting;
                    break;
                case 'lastname':
                    this.lastName = changedSetting;
                    break;
                case 'age':
                    if (typeof(changedSetting) === 'number') {
                        this.age = changedSetting;
                        break;
                    } else {
                        console.log('Invalid data!');
                        break;
                    }
                case 'country': 
                    this.country = changedSetting;
                    break;
                case 'gender':
                    this.gender = changedSetting;
                    break;
                default:
                    console.log('Invalid setting');
                    break;
            }
        } else {
            console.log('Invalid data!');
        }

    };

    uploadPic = (pic) => {
        const base64 = fs.readFileSync(pic, 'base64');
        this.photo = base64;
    };

    showInfo = () => {
        console.log(`
        Name: ${this.firstName} ${this.lastName}
        Age: ${this.age}
        Country: ${this.country}
        Gender: ${this.gender}
        User ID: ${this._uid}
        `);
    };

    addFriend = (uid) => {
        const idx = allUsers.findIndex(user => user._uid === uid);
        
        if (!this.friendList.find(user => user._uid === uid) && this._uid !== uid) { 
            if (allUsers[idx].country === 'russia') {
                console.log('This person can`t be your friend, add someone else...');
            } else {
                if (allUsers[idx]) {  
                    this.friendList.push(allUsers[idx]);
                    console.log(`Successfully added to friendlist!`);
                } else {
                    console.log('Wrong data or this person haven`t created profile yet. Try again.');
                }
            }
        } else if (this._uid === uid) {
            console.log('You can`t add yourself!');
        } else {
            console.log('You`ve already have this user in your friendlist!');
        }
    };
    
    delFriend = (uid) => {
        const idx = this.friendList.findIndex(user => user._uid === uid);
        
        if (this.friendList[idx]) {
            this.friendList.splice(idx, 1);
            console.log(`Successfully deleted!`);
        } else {
            console.log('You don`t have such user in your friendlist!');
        }
    };

    showFriendList = () => {
        if (!this.friendList.length) {
            console.log('You have no friends :( Try to add someone.');
        } else {
            console.log('\nYour friendlist:');
            this.friendList.forEach((friend) => console.log(`${friend.firstName} ${friend.lastName}`));
        }
    };

    showFriendProfile = (uid) => {
        const idx = this.friendList.findIndex(user => user._uid === uid);

        if (this.friendList[idx]) {
            console.log('\nYour friend full info: ');
            this.friendList[idx].showInfo();
        } else {
            console.log('You dont have such user in your friendlist!\n');
        }
    };

    findFriend = (firstName, lastName) => {
        if (!firstName && !lastName) {
            console.log('\nWrong data!\n');
        } else {
            if (firstName) {
                console.log(`\nResults for name: ${firstName}\n`);
                allUsers.forEach(user => {
                    if (user.firstName === firstName) {
                        console.log(user.firstName, user.lastName + `\nUser ID: ${user._uid}\n`)
                    }
                });
            }
        }
    };

    receiveLetter = (uid, text) => {
        this.mailbox.push({addresserUid: uid, messageText: text, type: 'recd'});
    };

    sendLetter = (uid, text) => {
        if (allUsers.find(user => user._uid === uid)) {
            const idx = allUsers.findIndex(user => user._uid === uid);
            this.mailbox.push({addresseeUid: uid, messageText: text, type: 'sent'});
            allUsers[idx].receiveLetter(this._uid, text);
        } else {
            console.log('User doesn`t exist');
        }
    };

    showMail = (uid) => {
        if (!uid) {
            console.log('All letters in your mailbox: \n');
            this.mailbox.forEach(letter => {
                if (letter.type === 'recd') {
                    const idx = allUsers.findIndex(user => user._uid === letter.addresserUid);
                    console.log(`
                    **********************
                    From: ${allUsers[idx].firstName} ${allUsers[idx].lastName}
                    To: You
                    Message:\n
                    ${letter.messageText}
                    **********************
                    `);
                } else {
                    const idx = allUsers.findIndex(user => user._uid === letter.addresseeUid);
                    console.log(`
                    **********************
                    To: ${allUsers[idx].firstName} ${allUsers[idx].lastName}
                    From: You
                    Message:\n
                    ${letter.messageText}
                    **********************
                    `);
                }
            });
        } else {
            let letterExist;
            const idx = allUsers.findIndex(user => user._uid === uid);
            if (allUsers[idx]){
                console.log(`
                ================================
                All letters to/from ${allUsers[idx].firstName} ${allUsers[idx].lastName}
                ================================
                `);
                this.mailbox.forEach(letter => {
                    if (letter.type === 'recd' && letter.addresserUid === uid) {
                        const idx = allUsers.findIndex(user => user._uid === letter.addresserUid);                             
                        console.log(`
                        ************************
                        From: ${allUsers[idx].firstName} ${allUsers[idx].lastName}
                        To: You
                        Message:\n
                        ${letter.messageText}
                        ************************
                        `);
                    } else if (letter.type === 'sent' && letter.addresseeUid === uid){
                        const idx = allUsers.findIndex(user => user._uid === letter.addresseeUid);
                        console.log(`
                        ************************
                        To: ${allUsers[idx].firstName} ${allUsers[idx].lastName}
                        From: You
                        Message:\n
                        ${letter.messageText}
                        ************************
                        `);
                    } else {
                        letterExist = false;
                    }
                });
    
                if (letterExist === false) {
                    console.log('You have no letters from this user!');
                }
            } else {
                console.log('Invalid data!');
            }
        }
    };
}

const user1 = new ProfileTemplate('Vlad', 'Spirin', 26, 'Ukraine', 'Male', 1001);
const user2 = new ProfileTemplate('Stepan', 'Bandera', 113, 'Ukraine', 'Male', 1002);
const user3 = new ProfileTemplate('???', '???', 0, 'russia', 'Male', 1003);
const user4 = new ProfileTemplate('Anya', 'Forger', 15, 'Japan', 'Female', 1004);
const user5 = new ProfileTemplate('Vlad', 'Bruno', 35, 'Italy', 'Male', 1005);

const allUsers = [user1, user2, user3, user4, user5];

// user1.showInfo();
// user2.showInfo();
// user3.showInfo();
// user4.showInfo();
// user5.showInfo();

// user1.uploadPic('./1.jpg');
// user2.uploadPic('./2.jpg');
// user3.uploadPic('./3.jpg');
// user4.uploadPic('./4.jpg');
// user5.uploadPic('./5.jpg');

// user1.showFriendList();
// user1.addFriend(1001);
// user1.addFriend(1003);
// user1.addFriend(1002);
// user1.addFriend(1002);
// // user1.addFriend(1004);
// // user1.addFriend(1005);
// user1.showFriendList();
// user1.showFriendProfile(1002);
// user1.delFriend(1002);
// user1.showFriendList();

// user1.findFriend('Vlad');

user1.sendLetter(1004, 'Hello there!');
user1.sendLetter(1004, 'How are you?');
user4.sendLetter(1001, 'Hi! Im fine, what about you?');

user1.showMail();
user4.showMail(1001);

// user1.changeSettings('fiRstNaMe','Vlad');
// user1.showInfo();

