import { todos } from "../app.js";
import { deleteTodo } from "../model/data/delete/main.js";

export const removeTodo = async (req, res)=>{
    const todo = req.body
    try{
        await deleteTodo(todo.name)
        todos.delete(todo.name)
        res.send(200)
    }catch(err){
        console.log("There was an error deleting todo",err)
        res.status(500).send("there was an error deleting todo")
    }
}