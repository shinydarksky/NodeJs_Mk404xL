const express = require('express')
const create = require('../Controllers/create.controller')
const search = require('../Controllers/search.controller')
const router = express.Router()
var db = require('../db')
const e = require('express')
// router.get('/',(req,res)=>res.render("../Views/index.pug",{}))
router.get('/',(req,res)=>{
    res.render("../Views/users.pug",{
    title:db.get('users').value()
    })
})
router.get('/search',search)
router.get('/create',create.get)
router.post('/create',create.post)






module.exports = router