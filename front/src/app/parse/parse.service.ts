import { Injectable } from '@angular/core';
import { HttpCustomService } from '../services/http.custom.service';

@Injectable()
export class ParseService{
    constructor(private httpCustom:HttpCustomService){

    }
    public getPage(){
        this.httpCustom.get('http://cinema.dev/hello');
    }
}