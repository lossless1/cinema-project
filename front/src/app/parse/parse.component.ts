import {
    Component,
    OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { HttpCustomService } from '../tools/http.custom.service';
import { IPost } from '../models/IPost';
import { PostService } from "../services/post.service";

@Component({
    selector: 'parse-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'parse.component.css'
    ],
    templateUrl: `parse.component.html`,
})

export class ParseComponent implements OnInit, OnDestroy {

    public link: string;

    constructor(private postService: PostService) {

    }

    public ngOnInit(): void {

    }

    public parsePage(link){
        this.postService.getAllPosts()
            .subscribe((data) => {
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
        console.log(link.value);
    }

    public getAllPosts() {
        this.postService.getAllPosts()
            .subscribe((data) => {
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    public ngOnDestroy() {
    }
}
