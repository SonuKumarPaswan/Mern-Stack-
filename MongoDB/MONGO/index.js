const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});


const User=mongoose.model("User",userSchema);


User.findOneAndUpdate({name:"Dhiraj"},{age:23}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})


// Print all data 
// User.find().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })

//  show all users in console

// User.find({age:{$gt:23}}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })



// const user1=new User({
//     name:"Dhiraj",
//     email:"dhiraj@gmail.com",
//     age:23
// });



// user1.save()
// const user2=new User({
//     name:"Adam",
//     email:"adam@gmail.com",
//     age:24
// });
// user2.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })