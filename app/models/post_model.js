
class Post {
    constructor(payload) {
        this.title = payload.title;
        this.content = payload.content;
        this.published = payload.published;
        this.author = payload.author;
        this.authorId = payload.authorId;
    }
}


export default Post;
