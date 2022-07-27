const express = require('express')

 require('dotenv').config()
const connectDb =require('./config/db')

 
let app =express()
connectDb()

let userRouter =require('./router/user')
let adminRouter =require('./router/admin')
 
const { notFound, errorHandler } = require('./middleweres/errorMiddleweres')

app.use(express.json())


app.use("/", userRouter);
app.use("/admin", adminRouter);

app.use(notFound)
app.use(errorHandler)
const PORT =process.env.PORT || 5000
console.log(PORT);
app.listen(PORT,()=>console.log(`server started in ${PORT}`))