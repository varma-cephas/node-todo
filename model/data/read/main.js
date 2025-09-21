import sqlite3 from "sqlite3"
import { fetchAll } from "./setup.js"

export const readData = async ()=>{
    const db = new sqlite3.Database("todo.db");
    let sql = `SELECT * FROM todos`;
    try{
        const todos = await fetchAll(db, sql);
        return todos;
    }catch(err){
        console.log(err);
    } finally {
        db.close();
    }
}