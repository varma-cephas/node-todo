import express from "express"
import { index } from "./routes/home.js";
import { addTodo } from "./routes/add.js";
import { deleteTodo } from "./routes/delete.js";
import { createTable } from "./model/table/main.js";

const app = express();

createTable();

//middlewares
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())

app.use(index)
app.use(addTodo)
app.use(deleteTodo)

app.listen(3000, _=>{
    console.log("Your app is listening on localhost:", 3000)
})