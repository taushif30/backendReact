const auth = (req,res,next)=>{
    console.log("Auth middleware")
    const age = 18;
    if (age >=18){
        next();
    }
    else{
        res.send("User not Allowed")
        console.log("user not allowed")
    }
}

module.exports = auth;