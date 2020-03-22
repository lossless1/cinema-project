export interface IUserImage {
    data: string;
    message: string;
    success: string;
}

export class UserImage implements IUserImage {
    data: string;
    message: string;
    success: string;

    constructor() {
        this.data = 'http://creo.webdill.com/uploads/2/e/2edfb5b4.png';
        this.message = '';
        this.success = '';
    }
}
