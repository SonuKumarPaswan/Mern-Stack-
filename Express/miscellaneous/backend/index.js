const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{

    // query ko use karte jab ham url se data ko get method ke through get karte hain
    const{user,password}=req.query;

    console.log(user,password)
    res.send(`starded GET Request ... WELCOME  ${user}`)
})
app.post("/register",(req,res)=>{

    // print undefined lekin data aaya hain but readable formate me nhi hain usek liye hame use karte hain  ----> app.use(express.urlencoded({extended:true})); then undefined print nhi hoga console me 

    // if we can send json data form postman/hoppscoach/forntend then use   ---->     app.use(express.json())

    // console.log(req.body)
//  when we can use post method then use "body" to get the data form url 
    const{user,password}=req.body;

    console.log(user,password)
    res.send(`starded GET Request ...Welcome! ${user}`)
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})