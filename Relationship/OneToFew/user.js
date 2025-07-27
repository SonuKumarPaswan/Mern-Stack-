const mongoose=require("mongoose");
const {Schema}=mongoose;



main().then((res)=>{
    console.log("connection succefful");
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
    
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/realationDemo');

}

const userSchema =new Schema({
    username:String,
    addresses:[
        {   _id:false,
            location:String,
            city:String
        }
    ],
})
const User=mongoose.model("User",userSchema);

const addUser= async ()=>{
    let  user=new User({
        username:"Sonu",
        addresses:[
            {  
                location:"naya bas gali no-2",
                city:"Noida"
            }
        ]
    })
    user.addresses.push({   location:"gali no -1, Naya bas sector-15",city:"Noida sector 15"});
  let set = await user.save();
    console.log(set)
}
addUser();