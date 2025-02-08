
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_name } from "../constants.js";

dotenv.config({
    path: "../env"
})

const Dbconnection = async()=>{
    try {
        console.log("Try Block : ", process.env.MONGODB_URI ,DB_name );
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_name}`)
        // console.log("Database Connected : ", {connectionInstance});
        
    } catch (error) {
        console.error("Error Occured : " ,error)
        console.log("Error : ", error)
    }
  }


export default Dbconnection