import { execute } from "./setup.js";
import sqlite3 from "sqlite3";

export const insertData = async (name)=>{
    const db = new sqlite3.Database("todo.db");
    const sql = `INSERT INTO todos (name) VALUES(?)`;
    try{
        await execute(db, sql, [name])
        console.log("data inserted successfully")
    }catch(err){
        console.log(err)
    }finally{
        db.close()
    }
}