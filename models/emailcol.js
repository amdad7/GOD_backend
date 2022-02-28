const mongoose=require('mongoose')

let emailcolschema=mongoose.Schema({
    name:String,
    email:String
})

module.exports=mongoose.model('emailcol',emailcolschema)