import { IPostLikes } from './IPosts';
import { IPostType } from './IPosts';
import { IPostUser } from './IPosts';

export interface IPostUserFlags {
    alias: string;
    id: number;
    title: string;
}

export class PostUserFlags implements IPostUserFlags {
    constructor(public alias = '',
                public id = 0,
                public title = '') {

    }
}

export interface IPostUser {
    flags: PostUserFlags[];
    id: number;
    image: string;
    name: string;
    surname: string;
}


export class PostUser implements IPostUser {
    constructor(public flags = [new PostUserFlags],
                public id = 0,
                public image = '',
                public name = '',
                public surname = '') {

    }
}

export interface IPostLikes {
    created_at: string;
    post_id: number;
    updated_at: string;
    user_id: number;
}

export class PostLikes implements IPostLikes {
    constructor(public created_at = '',
                public post_id = 0,
                public updated_at = '',
                public user_id = 0) {

    }
}

export interface IPostType {
    id: number;
    name: string;
}

export class PostType implements IPostType {
    constructor(public id = 0,
                public name = '') {
    }
}

export interface IPost {
    content: string;
    created_at: string;
    id: number;
    likes: PostLikes[];
    likes_total: number;
    photo: string;
    type: PostType;
    updated_at: string;
    user: PostUser;
}

export class Posts implements IPost {
    constructor(public comments_total = '',
                public content = '',
                public created_at = '',
                public id = 0,
                public likes = [new PostLikes()],
                public likes_total = 0,
                public photo = '',
                public type = new PostType(),
                public updated_at = '',
                public user = new PostUser()) {

    }
}