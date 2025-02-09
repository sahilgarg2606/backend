import dotenv from "dotenv";
import Dbconnection from "./db/imdex.js";
import {app} from "./app.js";
dotenv.config()


Dbconnection()
.then(()=>{
    app.get("/" , (req , res)=>{
        res.send("Hello")
    })
   app.listen(
    process.env.PORT,()=>{
     console.log("App is listening on PORT :" , process.env.PORT);
   })
}).catch((error)=>{
    console.error("Error Occured :" , error)
})



