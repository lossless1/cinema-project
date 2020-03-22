import { Injectable } from '@angular/core';
import { HttpCustomService } from './http.custom.service';
import { CONFIG_URL } from '../app.config';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

    constructor(private httpCustom: HttpCustomService,
                private http: Http) {

    }

    public getAllPosts() {
        return this.httpCustom.get(CONFIG_URL.posts);
    }

    public getPostById(id: number) {
        return this.httpCustom.get(`${CONFIG_URL.posts}/${id}`);
    }

    public deletePost(id: number) {
        return this.http.delete(`${CONFIG_URL.posts}/${id}`);
    }

    public updatePostById(id: number,content) {
        return this.http.post(`${CONFIG_URL.posts}/${id}`,{content:content});
    }

    public createPostById(createData) {
        return this.httpCustom.post(`${CONFIG_URL.posts}`, createData)
    }
}
