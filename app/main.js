import express, { json } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

const port = 3000;

app.use(json());

app.listen(port, () => {
    console.log("listening on")
});
