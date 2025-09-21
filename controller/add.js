import { todos } from "./home.js"

export const add = async (req, res)=>{
    const todo = req.body
    const tempId = (todos.size) + 1;
    todos.set(tempId, todo)
    res.send(200)
}