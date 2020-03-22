"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Posts = (function () {
    function Posts(content, created_at, id, likes, likes_total, photo, type, updated_at, user) {
        this.content = content;
        this.created_at = created_at;
        this.id = id;
        this.likes = likes;
        this.likes_total = likes_total;
        this.photo = photo;
        this.type = type;
        this.updated_at = updated_at;
        this.user = user;
    }
    return Posts;
}());
exports.Posts = Posts;
