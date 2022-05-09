import Prisma from "@prisma/client";
import Post from "./app/models/post_model.js";

const prisma = new Prisma.PrismaClient();


const main = async () => {
    const data = new Post({
        title: "post title",
        author: "random author",
        authorId: 1,
        content: "content",
        published: false
    });

    const data2 = new Post({
        title: "post title 2",
        author: "random author 2",
        authorId: 2,
        content: "content",
        published: false
    });

    const newPost = await prisma.post.upsert({
        where: { id: 1 },
        update: {},
        create: data
    });


    const newPost2 = await prisma.post.upsert({
        where: { id: 2 },
        update: {},
        create: data2
    });

    console.log(newPost);
    console.log(newPost2);
};

main().catch(e => {
    throw e
})
    .finally(async () => {
        await prisma.$disconnect()
    })
