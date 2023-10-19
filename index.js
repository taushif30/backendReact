const express = require ("express");
const categoryRouter= require("./routing/categorieRouting");
const app = express();

const cors=require('cors')

app.use(cors({
    origin:"*"  //for every and anywhere
}))

// app.cors(cors({
//     origin:["http//localhost:3000","http//localhost:3001"] //for two server
// }))

//application level middleware
const middleware1=(req,res,next)=>{
    console.log("Middleware1 run first and then is going to hit the api")
    next();
}

const middleware2=(req,res,next)=>{
    console.log("Middleware2 run first and then is going to hit the api")
    next();
}

const middleware3=(req,res,next)=>{
    // const age = req.params.age;
    // if(age>18){
    //     next();
    // }
    // else{
    //     res.send("user is no tallowed due to 18")
    // }
    console.log("Middleware3 run first and then is going to hit the api")
    next();
}
// app.use(auth)
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)
app.use("/api",categoryRouter)


app.get("/",(req,res)=>{
    res.send("This is Server")
})
app.get("/contact",middleware1,(req,res)=>{
    res.send("This is Server")
})

app.listen(4500,()=>{
    try{
        console.log("Server running : 4500")
    }
    catch(err){
        console.log(`Error occured starting Server : ${err}`)
    }
})
