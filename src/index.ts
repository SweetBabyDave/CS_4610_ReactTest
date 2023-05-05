import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const client = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors()); // need for cross origin requests

type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
}

app.post("/todos", async (req, res) => {
  // todo implement this endpoint
  const todo = await client.todo.create({
    data: {
      content: req.body.content,
      isCompleted: req.body.isCompleted
    }
  })
  res.json({ todo });
})

app.get("/todos", async (req, res) => {
  // TODO implement this endpoint!
  const todos: Todo[] = await client.todo.findMany();
  res.json({ todos });
})

app.put("/todos/:id", async (req, res) => {
  // TODO implement this endpoint
  const id: number = parseInt(req.params.id);
  const todo = await client.todo.update({
    where: {id : id},
    data: {
      content: req.body.content,
      isCompleted: req.body.isCompleted
    }
  })
  res.json({ todo })
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});