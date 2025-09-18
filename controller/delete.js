import { todos } from "./home.js"

export const removeTodo = (req, res)=>{
    const todoName = req.body
    for(const [key, value] of todos.entries()){
        if(value.name === todoName.name){
            todos.delete(key)
            break
        }
        continue
    }
    res.send(200)
}