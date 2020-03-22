import {
    Component,
    OnInit,
    ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, ViewChildren
} from '@angular/core';
import { UserData } from '../models/IUserData';
import { HttpCustomService } from '../services/http.custom.service';
import { UserImage } from '../models/IImage'
import { UserService } from '../services/user.service';

@Component({
    selector: 'cabinet-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'cabinet.component.css'
    ],
    templateUrl: `cabinet.component.html`
})

export class CabinetComponent implements OnInit, AfterViewInit {

    @ViewChild('imageFile') imageFile: ElementRef;

    public userData: UserData = new UserData();

    public userImage: UserImage = new UserImage();

    constructor(public userService: UserService,
                private http: HttpCustomService) {
    }

    public ngAfterViewInit(): void {
        this.getUserInfo();
    }

    public ngOnInit(): void {
        console.log('ngOnInit');
    }

    public getUserInfo() {
        this.userService.getUserInfo()
            .subscribe((data) => {
                this.userData = <UserData>data;
                console.log(data);
            }, (err) => {
                console.log(err);
            });
    }

    public updateUserInfo() {
        this.userService.updateUserInfo(this.userData)
            .subscribe((data) => {
                this.userData = data;
                console.log(data);
            }, (err) => {
                console.log(err);
            });
    }

    public updateUserImage(event) {
        this.userService.updateUserImage(event).subscribe(
            res => {
                this.userImage = res;
                this.userData.image = this.userImage.data;
                console.log(res);
            },
            error => {
                console.error(error);
            }
        );
    }

    public logoutUser() {
        this.userService.logoutUser();
    }
}
