const express = require('express')
const router = express.Router()
var db = require('../db')


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
router.get('/create',(req,res)=>res.render("../Views/create.pug"))
router.post('/create',(req,res)=>{
    var errors = []
    if(!req.body.name){
        errors.push('Name errors is required.')
    }
    if(errors.length != 0){
        res.render('../Views/create.pug',{errors:errors,value:req.body})
        return
    }
    db.get('users').push(req.body.name).write()
    console.log(req.body.name)

    res.redirect('/')
})






module.exports = router