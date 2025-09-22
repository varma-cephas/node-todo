import { getTodo } from "../controller/getTodo.js";
import express from "express"
export const getTodos = express.Router();

getTodos.get("/get-todo", getTodo)