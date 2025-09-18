import { todos } from "./home.js"

export const add = async (req, res)=>{
    const todoName = req.body
    const tempId = (todos.size) + 1;
    todos.set(tempId, todoName)
    res.send(200)
}