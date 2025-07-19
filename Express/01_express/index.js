const express=require("express")
const app=express()
let port=8080
app.listen(port,()=>{
    console.log(`app linstening on port ${port}`)
})

// app.use((req ,res)=>{
//     console.log("Requiest recieved")
//     let code="<h1>Fruit</h1> <ul><li>apple</li> <li>Banana</li></ul>"
//     res.send(code)
// })

app.get("/",(req,res)=>{
    res.send("you connected root path")
})
app.get("/fruit",(req,res)=>{
    res.send("you connected  fruit path")
})
app.get("/apple",(req,res)=>{
    res.send("you connected apple path")
})

app.get("/:username/:id",(req,res)=>{
    console.log(req.params)
    res.send("hello i am root");
})