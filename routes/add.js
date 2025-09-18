import { add } from "../controller/add.js";
import express from "express"
export const addTodo = express.Router();

addTodo.post("/add-todo", add)