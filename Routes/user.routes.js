const express = require('express')
const create = require('../Controllers/create.controller')
const router = express.Router()
var db = require('../db')
const e = require('express')
// router.get('/',(req,res)=>res.render("../Views/index.pug",{}))
router.get('/',(req,res)=>{
    res.render("../Views/users.pug",{
    title:db.get('users').value()
    })
})
router.get('/search',(req,res)=>{
    var liusers = db.get('users').filter((a)=>{
        return a === req.query.q 
    })
    var temp = req.query.q
    console.log(temp)
    res.render("../Views/search.pug",{
    title:liusers,value: temp//{name:temp}
    })
})
router.get('/create',create.get)
router.post('/create',create.post)






module.exports = router