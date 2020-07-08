const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const adapter = new FileSync('db.json')
const db = low(adapter)  
db.defaults({ users: []}).write()
// var users = db.get("list").value()
app.get('/',(req,res)=>res.render("../Views/index.pug",{}))
app.get('/users',(req,res)=>{
    res.render("../Views/users.pug",{
    title:db.get('users').value()
    })
})
app.get('/users/search',(req,res)=>{
    var liusers = db.get('users').filter((a)=>{
        return a === req.query.q 
    })
    var temp = req.query.q
    console.log(temp)
    res.render("../Views/search.pug",{
    title:liusers,value: temp//{name:temp}
    })
})
app.get('/users/create',(req,res)=>res.render("../Views/create.pug"))
app.post('/users/create',(req,res)=>{
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

    res.redirect('/users')
})
app.listen(port,()=>{console.log(`exemple about port ${port}`) })

