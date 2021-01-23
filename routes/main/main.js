const express = require("express")
const route = express.Router()
const axios = require('axios').default;

route.get("/", (req, res)=>{
    res.render("index")
})

route.get("/post", (req, res)=>{
    res.render("post")
})

module.exports = route