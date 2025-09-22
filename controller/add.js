import { todos } from "../app.js";
import { insertData } from "../model/data/insert/main.js";

export const add = async (req, res)=>{
    const todo = req.body
    try{
        await insertData(todo.name, 0)
        todos.set(todo.name, todo)
        console.log(todos)
        res.send(200)
    }catch(err){
        console.log(err)
        res.status(500).send("there was an error inserting todo")
    }
}