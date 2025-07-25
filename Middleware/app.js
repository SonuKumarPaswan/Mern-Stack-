// what do middllewares do?
// middlewares function can perform the following task
// 1.Excute any code 
// 2.make change to the request and the response object 
// 3.end the request and response cycle 
// 4. call the next middleware function in the stack 

const express=require("express");
const app=express();
const ExpressError = require("./ExpressEroor");

// Middleware 
// app.use((req,res,next)=>{
//     console.log("1st Middleware");
//     next();
//     console.log("middleware")
// })

// logger -- morgan
// app.use((req,res,next)=>{
//    req.time=new Date(Date.now()).toString();
//    req.time=Date.now();
//    console.log(req.time)
//    console.log(req)
//     next();
// })


const tokenErr=(req,res,next)=>{
    let {token}=req.query;
    if(token === "giveaccess"){
        next();
    }
  throw new ExpressError(401,"ACCESS DENIED!");
}

app.get("/api",tokenErr,(req,res)=>{
    res.send("Data")
})
app.get("/",(req,res)=>{
    res.send("Hi, i am root")
})
app.get("/random",(req,res)=>{
    res.send("This is random page")
})
app.get("/err",(req,res)=>{
   abc=acb
})
app.get("/admin",(req,res)=>{
    throw new ExpressError(404,"Page Not Found");
})

app.use(( err,req,res,next)=>{
    let {statusCode,message}=err;
    console.log("-- Error -- ");
    // next(err);
    res.status(statusCode).send(message);
})
// app.use(( err,req,res,next)=>{
//     console.log("-- Error2 -- ");
//     next(err);
// })
// app.use((req,res)=>{
//     res.send('page not found')
// })

app.listen(8080,()=>{
    console.log("listing port on 8080");
})