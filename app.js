import express from "express"
import { index } from "./routes/home.js";
import { addTodo } from "./routes/add.js";
import { deleteTodo } from "./routes/delete.js";
import { createTable } from "./model/table/main.js";
import { getTodos } from "./routes/getTodos.js";

const app = express();
export const todos = new Map([]);


//middlewares
createTable();
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())

app.use(index)
app.use(addTodo)
app.use(deleteTodo)
app.use(getTodos)


app.listen(3000, _=>{
    console.log("Your app is listening on localhost:", 3000)
})