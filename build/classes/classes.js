"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this._vid = '56768-73883';
        this._docType = '';
    }
    getUserName() {
        return this.name;
    }
    setUserName(name) {
        this.name = name;
    }
    get vid() {
        return this._vid;
    }
    set vid(name) {
        this._vid = name;
    }
    get docType() {
        return this._docType;
    }
    set docType(type) {
        this._docType = type;
    }
}
class userVip extends User {
    constructor(name, location, cardNumber) {
        super(name, location);
        this.cardNumber = cardNumber;
        this.name = '';
    }
    setCardNumber(cardNumber) {
        this.cardNumber = cardNumber;
    }
}
const user = new User("Alex", "Russia");
user.docType = "password";
console.log(user);
const userVipObj = new userVip("Alex", "Russia", 123456);
//# sourceMappingURL=classes.js.map