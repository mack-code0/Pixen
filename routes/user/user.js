const express = require('express');
const route = express.Router()
const axios = require("axios").default

route.get("/register", (req, res)=>{
    res.render("register")
})
route.post("/register", (req, res)=>{
    axios({
        method: "POST",
        data: req.body,
        responseType: "json",
        url: "http://localhost:4000/api/register"
    }).then((resp)=>{
        res.send(resp.data)
    }).catch((err)=>{
        res.status(400).json({"Error": "An Error occured", "err": err})
    })
})

module.exports = route