import {IUser, IDocType, IUserVip} from '../models/interfaces'

class User implements IUser, IDocType{
    private _vid: string = '56768-73883';
    private _docType: string = '' ;

    constructor (protected name: string, private location: string) {}

    public getUserName(): string{
        return this.name;
    }
    public setUserName(name: string): void{
       this.name = name;
    }

    public get vid(): string{
        return this._vid;
    }
    public set vid(name: string) {
        this._vid = name;
    }

    public get docType(): string{
        return this._docType;
    }
    public set docType(type: string) {
        this._docType = type;
    }

}

class userVip extends User implements  IUserVip {
    constructor(name: string, location: string, private cardNumber: number){
        super(name, location);
        this.name = ''; 
    }

    public setCardNumber(cardNumber: number): void{
        this.cardNumber = cardNumber;
    }
}

const user = new User ("Alex", "Russia");
user.docType = "password";
console.log(user);

const userVipObj = new userVip ("Alex", "Russia", 123456);