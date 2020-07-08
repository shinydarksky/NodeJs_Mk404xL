const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3200
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('View engine','ejs')
app.get('/',(req,res)=>{
    res.send('HOME')
})
app.get('/search',(req,res)=>{
    var temp = req.query.q
    console.log(temp)
    res.render("../Views/search.pug",{value:temp})
})
app.get('/create',(req,res)=>{
    console.log(req.query)
    console.log(req.body)
    res.render("../Views/test.pug")
})
app.post('/create',(req,res)=>{
    console.log(req.query)
    console.log(req.body)
    res.render("../Views/test.pug")
    // res.redirect('/')
})



app.listen(port,()=>console.log(`Test server ${port}`))