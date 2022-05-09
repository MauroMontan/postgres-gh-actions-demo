import express, { json } from "express";
import Prisma from "@prisma/client";

const prisma = new  Prisma.PrismaClient();

const app = express();

const port = 3000;

app.use(json());


app.get("/posts",async (_,res)=>{
    const posts = await prisma.post.findMany({});
    res.json(posts);
});

app.listen(port, () => {
    console.log("listening on")
});
