import Prisma from "@prisma/client";

const prisma = new Prisma.PrismaClient();

describe("test suit for prisma", () => {

    test("1) get post from database", async () => {
        const data = {
            id:1,
            title:"title",
            content:"content",
            published:false,
            author:"author",
            authorId:1
        };
        const post = await prisma.post.findUnique({
            where:{id:1},
        }); 

        expect(post).toEqual(data);
    });
});
