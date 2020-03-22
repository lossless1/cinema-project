import {
    Component,
    OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { HttpCustomService } from '../tools/http.custom.service';
import { IPost } from '../models/IPost';
import { PostService } from "../services/post.service";
import { UserService } from '../services/user.service';

@Component({
    selector: 'posts-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'posts.component.css'
    ],
    templateUrl: `posts.component.html`,
})

export class PostsComponent implements OnInit, OnDestroy {

    public postsData: IPost;

    constructor(private postService: PostService,
                private userService:UserService) {

    }

    public ngOnInit(): void {
        this.userService.checkUserAuthorized();
        this.getAllPosts();
    }

    public getAllPosts() {
        this.postService.getAllPosts()
            .subscribe((data) => {
                    console.log(data);
                    this.postsData = <IPost>data;
                },
                error => {
                    console.log(error);
                });
    }

    public deletePost(id: number) {
    console.log(id);
        let isDelete = confirm('Are you sure?');
        if (isDelete) {
            this.postService.deletePost(id)
                .subscribe((data) => {
                        console.log(data);
                    },
                    error => {
                        console.log(error);
                    });
        }
    }

    public ngOnDestroy() {
    }
}
