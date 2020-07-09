const express = require('express')
var useRouter = require('./Routes/user.routes')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// var users = db.get("list").value()
app.get('/',(req,res) => res.send("hello"))
app.use('/users',useRouter)
app.listen(port,()=>{console.log(`exemple about port ${port}`) })

