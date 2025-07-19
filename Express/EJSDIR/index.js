const express=require("express");
const app=express();
const path = require("path");
let port=8080;

// using blow we cann't run the code out side  of directory thencode doesn't  work public file 
app.use(express.static("public"));

// using blow we can run the code out side  of directory then work public file 

app.use(express.static( path.join(__dirname, "/public/css")));
app.use(express.static( path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));




// about part main for create backend code 



// if we use ejs template the render method is madatory
//    npm install ejs, express

app.get("/", (req,res)=>{
    res.render("home")
})
app.get("/rolldice", (req,res)=>{
    res.render("rolldice")
})

// create variable path the use blow code 
//  and we want to run backend code continueslly install nodemon 

app.get("/ig/:username", (req,res)=>{
    let {username}=req.params;
    const instaData=require('./data.json')
    const data=instaData[username]

    if(data){
        console.log(data)
        res.render("instagram",{data})
    }else{
       res.status(404).render("error", { 
    username, 
    statusCode: 404 
});
    }
})
app.get("/home", (req,res)=>{
    res.send("this is home page")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})