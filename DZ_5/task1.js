var fs = require('fs');

class ProfileTemplate {
    photo = '';

    constructor(firstName, lastName, age, country, gender, uid){
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
        if (changedSetting !== undefined && changedSetting !== null) {
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
        console.log(`Name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\nCountry: ${this.country}\nGender: ${this.gender}\nUser ID: ${this._uid}\n`);
    };

    addFriend = (uid) => {
        const idx = allUsers.indexOf(allUsers.find(user => user._uid === uid));
        
        if (this.friendList.find(user => user._uid === uid) === undefined && this._uid !== uid) {
            if (allUsers[idx].country === 'russia') {
                console.log('This person can`t be your friend, add someone else...\n');
            } else {
                if (allUsers[idx] !== undefined) {
                    this.friendList.push(allUsers[idx]);
                    console.log(`Successfully added to friendlist!\n`);
                } else {
                    console.log('Wrong data or this person haven`t created profile yet. Try again.\n');
                }
            }
        } else if (this._uid === uid) {
            console.log('You can`t add yourself!');
        } else {
            console.log('You`ve already have this user in your friendlist!\n');
        }
    };
    
    delFriend = (uid) => {
        const idx = this.friendList.indexOf(this.friendList.find(user => user._uid === uid));
        
        if (this.friendList[idx] !== undefined) {
            this.friendList.splice(idx, 1);
            console.log(`Successfully deleted!`);
        } else {
            console.log('You dont have such user in your friendlist!\n');
        }
    };

    showFriendList = () => {
        if (this.friendList.length === 0) {
            console.log('You have no friends :( Try to add someone.\n');
        } else {
            console.log('\nYour friendlist:');
            this.friendList.forEach((friend) => console.log(`${friend.firstName} ${friend.lastName}`));
        }
    };

    showFriendProfile = (uid) => {
        const idx = this.friendList.indexOf(this.friendList.find(user => user._uid === uid));

        if (this.friendList[idx] !== undefined) {
            console.log('\nYour friend full info: ');
            this.friendList[idx].showInfo();
        } else {
            console.log('You dont have such user in your friendlist!\n');
        }
    };

    findFriend = (firstName, lastName) => {
        let firstNameIsValid = true;
        let lastNameIsValid = true;
        
        if (firstName === undefined || firstName === null) {
            firstNameIsValid = false;
        }

        if (lastName === undefined || lastName === null) {
            lastNameIsValid = false;
        }

        if (!firstNameIsValid && !lastNameIsValid) {
            console.log('\nWrong data!\n');
        } else {
            if (firstNameIsValid) {
                console.log(`\nResults for name: ${firstName}\n`);
                allUsers.forEach(user => {if (user.firstName === firstName) {console.log(user.firstName, user.lastName + `\nUser ID: ${user._uid}\n`)}});
            }
        }
    };

    receiveLetter = (uid, text) => {
        this.mailbox.push({addresserUid: uid, messageText: text, type: 'recd'})
    };

    sendLetter = (uid, text) => {
        if (allUsers.find(user => user._uid === uid) !== undefined) {
            const idx = allUsers.indexOf(allUsers.find(user => user._uid === uid));
            this.mailbox.push({addresseeUid: uid, messageText: text, type: 'sent'});
            allUsers[idx].receiveLetter(this._uid, text);
        } else {
            console.log('User doesn`t exist');
        }
        
    };

    showMail = (uid) => {
        if (uid === undefined || uid === null) {
            console.log('All letters in your mailbox: \n');
            this.mailbox.forEach(letter => {
                if (letter.type === 'recd') {
                    const idx = allUsers.indexOf(allUsers.find(user => user._uid === letter.addresserUid));
                    console.log(`From: ${allUsers[idx].firstName} ${allUsers[idx].lastName}\nTo: You\nMessage:\n\n${letter.messageText}\n************************`);
                } else {
                    const idx = allUsers.indexOf(allUsers.find(user => user._uid === letter.addresseeUid));
                    console.log(`To: ${allUsers[idx].firstName} ${allUsers[idx].lastName}\nFrom: You\nMessage:\n\n${letter.messageText}\n************************`);
                }
            });
        } else {
            let letterExist;
            const idx = allUsers.indexOf(allUsers.find(user => user._uid === uid));
            if (allUsers[idx] !== undefined){
                console.log(`================================\nAll letters to/from ${allUsers[idx].firstName} ${allUsers[idx].lastName}\n================================`);
                this.mailbox.forEach(letter => {
                    if (letter.type === 'recd' && letter.addresserUid === uid) {
                        const idx = allUsers.indexOf(allUsers.find(user => user._uid === letter.addresserUid));                             
                        console.log(`From: ${allUsers[idx].firstName} ${allUsers[idx].lastName}\nTo: You\nMessage:\n\n${letter.messageText}\n************************`);
                    } else if (letter.type === 'sent' && letter.addresseeUid === uid){
                        const idx = allUsers.indexOf(allUsers.find(user => user._uid === letter.addresseeUid));
                        console.log(`To: ${allUsers[idx].firstName} ${allUsers[idx].lastName}\nFrom: You\nMessage:\n\n${letter.messageText}\n************************`);
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
// user1.addFriend(1004);
// user1.addFriend(1005);
// user1.showFriendList();
// user1.showFriendProfile(1002);
// user1.delFriend(1002);
// user1.showFriendList();

// user1.findFriend('Vlad');

// user1.sendLetter(1004, 'Hello there!');
// user1.sendLetter(1004, 'How are you?');
// user4.sendLetter(1001, 'Hi! Im fine, what about you?');

// user1.showMail();
// user4.showMail(1001);

user1.changeSettings('fiRstNaMe', 'Vsevolod');
user1.showInfo();

