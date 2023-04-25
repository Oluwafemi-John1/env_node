const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("signupStaff")
})
router.get("/login",(req,res)=>{
    res.render("loginStaff")
})
module.exports = router;