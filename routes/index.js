const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    console.log("This is the Index")
    res.render('index')
})


module.exports = router