const express = require('express')
const {getStudents, getStudentsLogin, registerStudents} = require('../controllers/student.controller')
const router = express.Router()

router.get("/", getStudents)
router.get("/login", getStudentsLogin)
router.post("/signup", registerStudents)

module.exports = router