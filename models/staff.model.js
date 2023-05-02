const mongoose = require('mongoose')

const staffSchema = ({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const staffModel = mongoose.model("staff", staffSchema)

module.exports = staffModel