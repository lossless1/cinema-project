export interface IToken {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}
export class Token implements IToken {
    public token_type: string;
    public expires_in: number;
    public access_token: string;
    public refresh_token: string;
}
