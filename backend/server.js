const express =require("express")
const colors=require("colors")
const {errorHandler} =require('./middleware/ErrorMiddleware')
const dotenv =require("dotenv").config()
const connectDB =require('./config/db')

//connec to database

connectDB()
const app =express()
const PORT =process.env.PORT || 8000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//route
app.use('/api/users',require("./routes/UserRoutes"))
app.use(errorHandler)
app.listen(PORT,()=>console.log(`server started on port ${PORT}`))

app.get('/', (req,res )=>{
    res.status(201).json({message:'welcome to support desk API '})
})

