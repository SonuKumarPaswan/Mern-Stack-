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

const userSchema =new Schema([
    {
        location:String,
        city:String
    }
])
const Order=mongoose.model("Order",userSchema);

const addAdd= async ()=>{
    await Order.insertMany(
        {
            location:"Naya bas gali no-1",
            city:"Noida"
        },
        {
            location:"Naya bas gali no-2. Noida sector-15",
            city:"Noida"
        },
        {
            location:"Naya bas gali no-3 Noida sector-16",
            city:"Noida"
        }
    )

}
console.log(addAdd())