import express, { json } from "express";
import Prisma from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new Prisma.PrismaClient();

const app = express();

const port = process.env.PORT | 3000;

app.use(json());


app.get("/posts", async (_, res) => {
    const posts = await prisma.post.findMany({});
    res.json(posts);
});

app.listen(port, () => {
    console.log(`listening on: ${port} `);
});
