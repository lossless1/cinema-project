export interface IUserData {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    firstname: string;
    surname: string;
    position: string;
    company: string;
    phone: string;
    description: string;
    linkedin_account: string;
    facebook_account: string;
    twitter_account: string;
    google_plus_account: string;
    image: string;
}
export class UserData implements IUserData {
    public id: number;
    public name: string;
    public email: string;
    public created_at: string;
    public updated_at: string;
    public firstname: string;
    public surname: string;
    public position: string;
    public company: string;
    public phone: string;
    public description: string;
    public linkedin_account: string;
    public facebook_account: string;
    public twitter_account: string;
    public google_plus_account: string;
    public image: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.created_at = '';
        this.updated_at = '';
        this.firstname = '';
        this.surname = '';
        this.position = '';
        this.company = '';
        this.phone = '';
        this.description = '';
        this.linkedin_account = '';
        this.facebook_account = '';
        this.twitter_account = '';
        this.google_plus_account = '';
        this.image = '';
    }
}
