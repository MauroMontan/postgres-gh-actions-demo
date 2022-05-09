import Post from "../app/models/post_model.js";


describe("test suit for post model",()=>{
    test("1) instantiate post model",()=>{                
    const data = new Post({
        title: "post title",
        author: "random author",
        authorId: 1,
        content: "content",
        published: false
    });
        expect(data).toBeInstanceOf(Post);
    });
});
