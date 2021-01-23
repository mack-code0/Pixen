const express = require("express")
const app = express()
const path = require("path")
const rootDir = require("./utils/path")

const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/pixen", {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
//     if(err) throw err.errmsg
//     console.log("Connected")
// })

app.set("view engine", "ejs")
app.use(express.static(path.join(rootDir, "public")))

const UserRoutes = require("./routes/user/user")
const MainRoutes = require("./routes/main/main")
const UserApi = require("./apis/User")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/", MainRoutes)
app.use("/", UserRoutes)
app.use("/api/", UserApi)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log("Listening to port "+PORT);
})