import { execute } from "./setup.js";
import sqlite3 from "sqlite3";

export const insertData = async (name, completed)=>{
    const db = new sqlite3.Database("todo.db");
    const sql = `INSERT INTO todos (name, completed) VALUES(?, ?)`;
    try{
        await execute(db, sql, [name, completed])
        console.log("data inserted successfully")
    }catch(err){
        console.log(err)
    }finally{
        db.close()
    }
}