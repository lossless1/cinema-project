import {
    Component,
    OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { HttpCustomService } from '../../tools/http.custom.service';
import { AppService } from '../../app.service';
import { IPost, Posts } from '../../models/IPost';
import { ActivatedRoute, Params } from '@angular/router';
import { CONFIG_URL } from '../../app.config';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'update-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'update.component.css'
    ],
    templateUrl: `update.component.html`
})

export class UpdateComponent implements OnInit, OnDestroy {

    public postData: IPost = new Posts();

    public id: number;

    constructor(private postService: PostService,
                private activateRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.activateRoute.params.subscribe((params: Params) => {
            this.id = params.id;
            this.getPostById();
        });
    }

    public getPostById() {
        this.postService.getPostById(this.id)
            .subscribe((data) => {
                    console.log(data);
                    this.postData = <IPost>data;
                },
                error => {
                    console.log(error);
                });
    }

    public updatePostById() {
        this.postService.updatePostById(this.id, this.postData.content)
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
