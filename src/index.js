//require('dotenv').config({path:'./env'});

import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App is running on ${process.env.PORT}`)
    })
    app.get('/', (req,res)=>{
        res.send("hello")
    })
}).catch(()=>{
    console.log("unable to connect with Mongo DB connect")
})



app.on("error",(error)=>{
    console.log("Unable to connect to DB");
    throw error;
})
