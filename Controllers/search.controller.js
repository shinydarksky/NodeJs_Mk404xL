var db = require('../db')
module.exports = {
    search:(req,res)=>{
        var liusers = db.get('users').filter((a)=>{
            return a === req.query.q 
        })
        var temp = req.query.q
        console.log(temp)
        res.render("../Views/search.pug",{
        title:liusers,value: temp//{name:temp}
        })
    }
}