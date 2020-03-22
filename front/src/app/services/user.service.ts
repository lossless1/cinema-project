import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { HttpCustomService } from './http.custom.service';
import { IToken } from '../models/IToken';
import { CookieConsentComponent } from '../shared/CookieConsent';
import { CONFIG_URL } from '../app.config';
import { Router } from '@angular/router';
import { UserLogin } from "../shared/UserLogin";
import { UserRegistration } from '../shared/UserRegistration';

@Injectable()
export class UserService {

    public accessData: IToken;

    public subjectAuthorization: any = new Rx.Subject<string>();

    public selectedPostId: number = 1;

    constructor(private http: HttpCustomService,
                private router: Router) {

    }

    public checkUserAuthorized() {
        if (CookieConsentComponent.getCookie('access_token').length === 0) {
            this.router.navigate(['/login']).then(log => {
            });
            this.changeStateAuth(false);
            console.log('User not authorized');
        } else {
            console.log('User authorized');
            this.changeStateAuth(true);
        }
    }

    public changeStateAuth(bool) {
        this.subjectAuthorization.next(bool);
    }





    public getUserInfo(){
        return this.http.get(CONFIG_URL.getUserInfo);
    }

    public updateUserInfo(userData){
        return this.http.post(CONFIG_URL.updateUserInfo, userData)
    }

    public updateUserImage(event){
        let files = event.srcElement.files;
        let formData: FormData = new FormData();
        formData.append('image', files[0], files[0].name);

        // For multiple files
        // for (let i = 0; i < files.length; i++) {
        //     formData.append(`files[]`, files[i], files[i].name);
        // }

        return this.http.post(CONFIG_URL.updateUserImageApi, formData);
    }
    public authUser(email: string, password: string, username: string): Rx.Observable<IToken> {
        return this.http.post(CONFIG_URL.authUser, new UserLogin(
            CONFIG_URL.grant_type,
            CONFIG_URL.client_id,
            CONFIG_URL.client_secret,
            email,
            password,
            username,
            password
        ));
    }


    public logoutUser() {
        return this.http.get(CONFIG_URL.logoutUser)
            .subscribe((data) => {
                CookieConsentComponent.deleteCookie('access_token');
                this.router.navigate(['/login']).then(() => {
                });
                this.changeStateAuth(false);
                console.log(data);
            }, (err) => {
                console.log(err);
            });
    }

    public registerUser(username,password,email,passwordConfirmation){
        return this.http.post(CONFIG_URL.registerUserApi, new UserRegistration(
            CONFIG_URL.grant_type,
            CONFIG_URL.client_id,
            CONFIG_URL.client_secret,
            username,
            password,
            email,
            passwordConfirmation
        ))
    }
    public writeAuthAccessData(params: IToken) {
        this.accessData = params;
        CookieConsentComponent.setCookie('access_token', params.access_token, params.expires_in, '/');
    }
}
