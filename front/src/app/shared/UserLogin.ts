export interface IUserLogData {
    grant_type: string;
    client_id: number;
    client_secret: string;
    username: string;
    password: string;
    name: string;
    password_confirmation: string;
}

export class UserLogin implements IUserLogData {
    constructor(public grant_type: string,
                public client_id: number,
                public client_secret: string,
                public username: string,
                public password: string,
                public name: string,
                public password_confirmation: string) {
    }
}
