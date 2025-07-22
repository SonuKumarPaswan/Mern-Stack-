const express=require("express");
const mongoose=require("mongoose");
const app=express();
const path=require("path");
const methodOverride = require('method-override');
const Chat=require("./models/chat.js")



app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// MongoDB Connection 
main().then((res)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})
 async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
 }

// Index Routes
app.get("/chats", async (req,res)=>{
    const chats=await Chat.find();
    console.log(chats)
    res.render("index.ejs",{chats})
})

// new chats routes 
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
})
app.post("/chats",(req,res)=>{
    let {from,mgs,to}=req.body;
    let newChat=new Chat({
        from:from,
        mgs:mgs,
        to:to,
        created_at:new Date()
    })

    newChat.save().then((res)=>{
        console.log("chat was saved")
    }).catch((err)=>{
        console.log(err)
    })
    
    res.redirect("/chats")
})
// edit chat routes
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    // console.log(chat);
    res.render("edit.ejs",{chat});
})
app.put("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    let {mgs:newMgs}=req.body;
     await Chat.findByIdAndUpdate(id,{mgs:newMgs},{runValidators:true, new:true})
    res.redirect("/chats")
})
// Delete routes
app.delete("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    console.log(id);
  let delChat= await Chat.findByIdAndDelete(id)
//   console.log(delChat)
  res.redirect("/chats")
})

//  Server connection with express 
app.get("/",(req,res)=>{
    res.send("Sever working");
})

app.listen(8080,()=>{
    console.log("listening port working");
})