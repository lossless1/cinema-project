import {
    Component,
    OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { HttpCustomService } from '../../tools/http.custom.service';
import { IPost, Posts } from '../../models/IPost';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from "../../services/post.service";

@Component({
    selector: 'view-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'view.component.css'
    ],
    templateUrl: `view.component.html`
})

export class ViewComponent implements OnInit, OnDestroy {

    public postData: IPost[] = [new Posts()];

    public id: number;

    constructor(private postService: PostService,
                private activateRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.activateRoute.params.subscribe((params: Params) => {
            this.id = params.id;
            this.getPostById(this.id);
        });
    }

    public getPostById(id: number) {
        this.postService.getPostById(id)
            .subscribe((data) => {
                    console.log(data);
                    this.postData = [<IPost>data];
                },
                error => {
                    console.log(error);
                });
    }

    public ngOnDestroy() {
    }
}
