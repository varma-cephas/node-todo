import { todos } from "./home.js";
import { insertData } from "../model/data/insert/main.js";

export const add = async (req, res)=>{
    const todo = req.body
    try{
        todos.set(todo.name, todo)
        await insertData(todo.name, 0)
        res.send(200)
    }catch(err){
        console.log(err)
        res.status(500).send("there was an error inserting todo")
    }
}