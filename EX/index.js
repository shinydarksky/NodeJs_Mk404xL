const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3200
app.get('/',(req,res)=>{
    res.send('hello')
})
// app.listen(port,()=>console.log(`Test server ${port}`))
app.listen(2000,()=>{
        console.log('hello')
    })