const mongoose = require('mongoose')

const studentSchema = ({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const studentModel = mongoose.model("user", studentSchema)

module.exports = studentModel