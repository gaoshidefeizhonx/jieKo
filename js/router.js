const express = require("express")
const mysql = require("./mysql")
const router = express.Router()


//查询数据库
router.get("/selectAll", (req, res) => {
    mysql.query("select * from user", (err, data) => {
        if (data) {
            res.send({code: 200, msg: "获取数据成功", data: data})
        } else {
            res.send({code: 400, msg: "获取数据失败"})
        }
    })
})

//添加数据
router.post("/insertUser", (req, res) => {
    const data = req.body
    const uname = data.uname
    const gender = data.gender
    const age = data.age
    const user = {uname: uname, gender: gender, age: age}
    mysql.query("insert into user set ?", user, (err, data) => {
        if (data.affectedRows == 1) {
            res.send({code: 200, msg: "插入成功"})
        } else {
            res.send({code: 400, msg: "插入失败"})
        }
    })
})

//删除数据
router.delete("/delUser", (req, res) => {
    mysql.query("delete from user where id = ?", req.query.id, (err, data) => {
        if (err) return console.log(err.message);
        if (data.affectedRows == 1) {
            res.send({code: 200, msg: "删除成功"})
        } else {
            res.send({code: 400, msg: "删除失败"})
        }
    })
})

//修改数据
router.post("/upUser", (req, res) => {
    const data = req.body
    const uname = data.uname
    const gender = data.gender
    const age = data.age
    const user = {uname: uname, gender: gender, age: age}
    mysql.query("update user set ? where id = ?", [user, req.query.id], (err, data) => {
        if (data.affectedRows == 1) {
            res.send({code: 200, msg: "修改成功"})
        } else {
            res.send({code: 400, msg: "修改失败"})
        }
    })
})

module.exports = router

