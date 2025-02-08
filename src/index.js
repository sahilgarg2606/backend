import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import Dbconnection from "./db/imdex.js";
import { DB_name } from "./constants.js";
dotenv.config()
// Dbconnection()


const app = express()
;(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI} / ${DB_name}`)
        app.on("Error" , ()=>{
            console.log("Error :",  error); 
        })
        app.get("/" , (req ,res)=>{
            res.send("Database Connected");
        })
        app.get("/rules" , (req, res)=>{
            const rules = [
                {"1" : "Laptop Is compulsory"},
                {"2" : "Minimum 3 players is allowrd"},
                {"3" : "Every class has to participate"},
            ];
           res.send(rules)
        })
        app.listen( process.env.PORT,()=>{
          console.log("Database Connected on PORT" , process.env.PORT)
        })
    } catch (error) {
        console.error("Error :", error);
     
    }
})()
