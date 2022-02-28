const emailcol = require("../models/emailcol");

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    //alert("You have entered an invalid email address!")
    return (false)
}

module.exports=async (req,res)=>{
    var payload=req.body;
    if (ValidateEmail(payload.email)){

    var email = await emailcol.findOne({email:payload.email})
    if (email==null){
        var entry={
            'name':payload.name,
            'email':payload.email,
        };
        var col = emailcol(entry);
        col.save()
    }
}
    res.status(200).json({'messege':'success'})
    
}

