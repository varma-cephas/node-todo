import { removeTodo } from "../controller/delete.js";
import express from "express"
export const deleteTodo = express.Router();

deleteTodo.post("/delete-todo", removeTodo)