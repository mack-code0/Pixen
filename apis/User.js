const express = require("express")
const route = express.Router()
const UserDB = require("./../models/usersModel")


route.post("/register", (req, res)=>{
    const saveUser = new UserDB(req.body)
    saveUser.save((err, data)=>{
        if(err) res.status(304).json("An error occured")
        res.status(200).json(data)
    })
})

module.exports = route