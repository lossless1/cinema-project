import { Component } from '@angular/core';

@Component({
    selector: 'cookie-consent',
})
export class CookieConsentComponent {

    public static getCookie(name: string) {
        let ca: string[] = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

    public static deleteCookie(name) {
        let d: Date = new Date();
        let path: string;
        let expires: string;
        d.setTime(d.getTime() - 1);
        expires = `expires=${d.toUTCString()}`;
        path = '' ? `; path=` : '';
        document.cookie = `${name}=''; ${expires}${path}`;
    }

    public static setCookie(name: string, value: string, expire: number, path: string = '') {
        let d: Date = new Date();
        let expires: string;
        let cookiePath: string;
        d.setTime(d.getTime() + expire);
        expires = `expires=${d.toUTCString()}`;
        cookiePath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cookiePath}`;
    }

    public checkAuth(){

    }
}
