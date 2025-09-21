import { readData } from "../model/data/read/main.js";

export const todos = new Map([]);

export const home = async (req, res)=>{
    const todosFromDB = await readData();
    // console.log(todosFromDB)
    for(const todo of todosFromDB){
        todos.set(todo.name, {name:todo.name, completed: todo.completed===1?true:false})
    }
    // console.log(todos)
    res.render("index", {todos})
}

