/******************* 
// CRUD OPERATION
1. GET  retrieves resources 
2. POST---> Submits new data to the  sever
3. PUT ----> updates existing data 
4. PATACH ----> updates existing data perticullary
5 DELETE ----> remove data 

//  create Restfull APIs 
1. GET  ----> /posts    : to get data  for all posts
2. POST -----> /posts   : to add a new post
3. GET -------> /posts/:id  : to get one post (using id)
4. PATCH -------> /posts/:id  : to update specific post 
5. DELETE ------> /posts/:id   : to delete specific post
***************/



//  first we can write basic code 


const express=require("express");

const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid'); // use for create random id generated
const methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}));
// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))
app.use(express.json());


app.set("view engin", "ejs")
app.set("views" , path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

// now code start 

let posts=[
    {   
        id:uuidv4(),
        usernaem:"apnacollege",
        content:"I love coding"
    },
    {
        id:uuidv4(),
        usernaem:"Sonu",
        content:"Hard work is important to achieve success"
    },
    {
        id:uuidv4(),
        usernaem:"dhiraj",
        content:"I got selected for my first intership"
    },
]

app.get("/posts",(req,res)=>{
    // res.send("server is working well")
    res.render("index.ejs",{posts});
})
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let{usernaem,content}=req.body;
    let id=uuidv4();
    // console.log(usernaem,content)
    posts.push({id,usernaem,content});
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
   let post= posts.find((p)=> id === p.id);
    // console.log(id)
    if(post){
        res.render('show.ejs', {post})
    }else{
        res.send("Post not found")
    }
})

app.patch("/posts/:id",(req,res)=>{
    let{id}=req.params;
   let newContent=req.body.content;
   let post= posts.find((p)=> id === p.id);
   post.content=newContent;
   console.log(post);
    res.redirect("/posts")
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit.ejs", {post})
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=> id!==p.id);
     res.redirect("/posts")
})

app.listen(port, (req, res)=>{
    console.log(`listening port on ${port}`);
})