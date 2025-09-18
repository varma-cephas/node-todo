import { execute } from "../insert/setup.js";
import sqlite3 from "sqlite3";

export const deleteTodo = async (todoName)=>{
    const db = new sqlite3.Database("todo.db");
    const sql = `DELETE FROM todos WHERE name = ?`;
    console.log(`${todoName} deleted successfully`)
    try{
        await execute(db, sql, [todoName])
    }catch(err){
        console.log(err)
    }finally{
        db.close()
    }
}