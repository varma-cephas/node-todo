import sqlite3 from "sqlite3"
import { execute } from "./sql.js"

export const createTable = async ()=>{
    const db = new sqlite3.Database("todo.db");
    try{
        await execute(
            db,
            `CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                completed INTEGER,
            )
            `
        );
    }catch(err){
          console.log(err)  
    } finally {
        db.close()
    }
}

