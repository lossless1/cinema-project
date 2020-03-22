import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import * as Rx from 'rxjs';
import { CookieConsentComponent } from '../shared/CookieConsent';
import { Router } from '@angular/router';

@Injectable()
export class HttpCustomService {

    public subjectLoader: any = new Rx.Subject<string>();


    private headers: Headers;

    constructor(private http: Http,
                private router:Router) {
    }

    public get(url) {
        this.changeStateLoader(true);
        this.addHeaders();
        return this.http.get(url, {
            headers: this.headers
        }).map(this.extractData)
            .catch(this.handleError)
            .finally(() => {
                this.changeStateLoader(false);
            });
    }

    public post(url, data) {
        this.changeStateLoader(true);
        this.addHeaders(data);
        return this.http.post(url, data, {
            headers: this.headers
        }).map(this.extractData)
            .finally(() => {
                this.changeStateLoader(false);
            });
    }

    public changeStateLoader(bool) {
        this.subjectLoader.next(bool);
    }

    private addHeaders(data?) {
        this.headers = new Headers();
        if (data instanceof FormData) {
            this.headers.append("enctype", "multipart/form-data");
        }
        this.headers.append('Accept', 'application/json');
        if (CookieConsentComponent.getCookie('access_token').length > 1) {
            this.headers.append(`Authorization`,
                `Bearer ${CookieConsentComponent.getCookie('access_token')}`);
        }else{
            this.router.navigate(['/login']).then(log => {});
        }
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return error.json().error;
    }
}
