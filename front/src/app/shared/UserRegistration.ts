export interface IUserRegData {
    grant_type: string;
    client_id: number;
    client_secret: string;
    name: string;
    password: string;
    email: string;
    password_confirmation: string;
}

export class UserRegistration implements IUserRegData {
    constructor(public grant_type: string,
                public client_id: number,
                public client_secret: string,
                public name: string,
                public password: string,
                public email: string,
                public password_confirmation: string) {
    }
}
