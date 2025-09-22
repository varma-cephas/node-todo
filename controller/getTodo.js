import { todos } from "../app.js"

export const getTodo = async (req, res)=>{
    const currentTodo = [];
    todos.forEach(todo=>{
        currentTodo.push(todo)
    })
    res.json(currentTodo)
}

