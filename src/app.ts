import * as bodyParser from "body-parser";
import * as Express from "express";
import { Todo } from "./Todo.1";

const express = Express();
express.use(bodyParser.json());

const tasks: Todo[] = [
  {
    category: "Private",
    title: "買い物",
    done: false
  }
];

express.get("/", (req, res) => {
  res.send("Hello, VS Code!!!");
});

express.get("/tasks", (req, res) => {
  res.send(tasks);
});

express.post("/tasks", (req, res) => {
  const received = req.body;
  if ("category" in received && "title" in received && "done" in received) {
    const newTask: Todo = {
      category: received.category,
      title: received.title,
      done: received
    };
    tasks.push(newTask);
    console.log("Add:", newTask);
  } else {
    res.status(400).send("Parameters are invalid.");
  }
});

export { express as app };
