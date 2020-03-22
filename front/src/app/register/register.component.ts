import {
    Component,
    OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { HttpCustomService } from '../services/http.custom.service'
import { CookieConsentComponent } from '../shared/CookieConsent';
import { UserService } from "../services/user.service";

@Component({
    selector: 'register-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'register.component.css'
    ],
    templateUrl: `register.component.html`
})

export class RegisterComponent implements OnInit, OnDestroy {

    public username: string;
    public email: string;
    public password: string;
    public passwordConfirmation: string;
    public isError: boolean = false;

    constructor(private userService: UserService,
                private httpCustom: HttpCustomService) {
    }

    public ngOnInit(): void {
        CookieConsentComponent.deleteCookie('access_token');
    }

    public registerUser() {
        this.userService.registerUser(
            this.username,
            this.password,
            this.email,
            this.passwordConfirmation
        ).subscribe((data) => {
            this.httpCustom.changeStateLoader(false);
            console.log(data);
        });
    }

    public ngOnDestroy() {

    }
}
