import { readData } from "../model/data/read/main.js";

import { todos } from "../app.js";

export const home = async (req, res)=>{
    const todosFromDB = await readData();
    for(const todo of todosFromDB){
        todos.set(todo.name, {name:todo.name, completed: todo.completed===1?true:false})
    }
    res.render("index", {todos})
}

