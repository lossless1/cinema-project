import {
    Component,
    OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user.service';

@Component({
    selector: 'navigation-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'navigation.component.css'
    ],
    templateUrl: `navigation.component.html`
})

export class NavigationComponent implements OnInit, OnDestroy {

    public isAuthorized: boolean = false;

    private _subscriptionAuthorization: Subscription;

    constructor(public userService: UserService) {
        this._subscriptionAuthorization =
            this.userService.subjectAuthorization.subscribe(
                (auth) => {
                    this.isAuthorized = auth;
                }
            );
    }

    public ngOnInit(): void {
        console.log('ngOnInit Navigation');
    }

    public ngOnDestroy() {
        this._subscriptionAuthorization.unsubscribe();
    }
}
