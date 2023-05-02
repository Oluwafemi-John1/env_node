const express = require('express');
const app = express();
const ejs = require('ejs');
app.set("view engine", "ejs");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()
const PORT = process.env.PORT || 5000
const SALARY = process.env.SALARY
const MONGO_URI = process.env.URI
app.use(bodyParser.urlencoded({extended:true}))

const studentRouter = require('./routes/student.route')
const staffRouter = require('./routes/staff.route')
// const studentModel = require('./models/student.model')
app.use("/student", studentRouter)
app.use("/staff", staffRouter)

mongoose.connect(MONGO_URI)
.then(()=>{
    // console.log(result);
    console.log("Mongoose has mongoosed");
})
.catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.render("dashboard")
})

app.listen(PORT,()=>{
    console.log(`Lift off! We have lift off ${PORT}`);
    console.log(`My one week salary is ${SALARY}`);
})