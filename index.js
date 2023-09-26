const express=require('express');
const  connection  = require('./config/db');
const cookieParser=require('cookie-parser')
const {userRoute}=require('./Routes/user.route');
const { categoryRoute } = require('./Routes/category.route');

require('dotenv').config()
const app=express()

app.use(express.json())
app.use(cookieParser())

app.use("/user",userRoute);
app.use("/category/",categoryRoute)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("server is running")
})