import {
    Component,
    OnInit,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { CookieConsentComponent } from '../shared/CookieConsent';
import { Subscription } from 'rxjs';
import { HttpCustomService } from '../services/http.custom.service';
import { UserService } from "../services/user.service";

@Component({
    selector: 'auth-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'auth.component.css'
    ],
    templateUrl: `auth.component.html`
})

export class AuthComponent implements OnInit, OnDestroy {

    public username: string;
    public email: string;
    public password: string;

    public isError: boolean = false;
    public errorHead: string;
    public errorBody: string;

    public isSuccess: boolean = false;

    private subsAuthUser: Subscription;

    constructor(public userService: UserService,
                private route: Router,
                private http:HttpCustomService) {

    }

    public ngOnInit(): void {
        CookieConsentComponent.deleteCookie('access_token');
        this.userService.checkUserAuthorized();
        console.log('Initial App State');
    }

    public authUser() {
        this.userService.authUser(
            this.email,
            this.password,
            this.username,
        ).subscribe((data) => {
            this.isError = false;
            this.isSuccess = true;
            this.userService.writeAuthAccessData(data);
            this.userService.changeStateAuth(true);
            this.route.navigate(['/cabinet']).then(() => {});
        }, (err) => {
            let data = err.json();
            this.errorHead = data.hint;
            this.errorBody = data.message;
            this.isError = true;
            this.isSuccess = false;
            this.userService.changeStateAuth(false);
        });
    }

    public ngOnDestroy() {
        // this.subsAuthUser.unsubscribe();
    }
}
