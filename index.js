const express = require("express")
const router = require("./js/router")
const app = express()

app.use(express.urlencoded({extended: false}));
app.use("/",express.static("wed"));
app.use(router)

app.listen(80, () => {
    console.log("启动")
})