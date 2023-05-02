const studentModel = require("../models/student.model")

const getStudents = (req,res) => {
    res.render("signupStudent")
}

const getStudentsLogin = (req,res) => {
    res.render("loginStudent")
}

const registerStudents = (req,res) => {
    console.log(req.body)
    res.send("You have signed up")
    let form = new studentModel(req.body)
    form.save()
}

module.exports = {getStudents, getStudentsLogin, registerStudents}