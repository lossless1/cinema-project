import {
    Component,
    OnInit,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';
import {
    HttpCustomService
} from './services/http.custom.service';
import * as Rx from 'rxjs';
import { AppService } from './app.service';
import { UserService } from './services/user.service';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    templateUrl: `./app.component.html`
})

export class AppComponent implements OnInit, OnDestroy {

    public isLoading: boolean = false;

    private _subscriptionLanguage: any;

    constructor(private userService: UserService,
                private http: HttpCustomService) {
        this._subscriptionLanguage =
            this.http.subjectLoader.subscribe(
                (lang) => {
                    this.isLoading = lang;
                }
            );
    }

    public ngOnInit() {
        console.log('ngOnInit AppComponent');
        this.userService.checkUserAuthorized();
        Rx.Observable.timer(0, 1800000)
            .subscribe(t => {
                this.userService.checkUserAuthorized();
            });
    }

    public ngOnDestroy() {
        this._subscriptionLanguage.unsubscribe();
    }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
