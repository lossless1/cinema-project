import {
    Component,
    OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'create-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'create.component.css'
    ],
    templateUrl: `create.component.html`
})

export class CreateComponent implements OnInit, OnDestroy {

    public createData = {
        post_type: '',
        content: ''
    };


    constructor(private postService: PostService) {
    }

    public ngOnInit(): void {

    }

    public createPostById() {
        this.postService.createPostById(this.createData)
            .subscribe((data) => {
                    console.log(data);
                    this.createData = data;
                },
                error => {
                    console.log(error);
                });
    }

    public ngOnDestroy() {
    }
}
