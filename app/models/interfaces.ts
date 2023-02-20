export interface IUser{
    vid: string,
    getUserName(): string,
    setUserName(name: string): void
}

export interface IDocType{
    docType: string
}

export interface IUserVip{
    setCardNumber(card: number): void;
}