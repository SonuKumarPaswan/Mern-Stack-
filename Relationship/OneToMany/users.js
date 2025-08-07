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

const orderSchema =new Schema(
    {
        item:String,
        price:Number
    }
)
const Order=mongoose.model("Order",orderSchema);

const addOrders= async ()=>{
    let res= await Order.insertMany([
        {item:"samosa",price:12},
        {item:"Chocolate",price:102},
        {item:"Chaumin",price:10},
    ] )
    console.log(res)
}
// addOrders();

const custumerSchema= new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})
const Customer=mongoose.model("Customer",custumerSchema);

const addCustomer= async()=>{
    let cust1= new Customer({
        name:"Rahul",
    })
    let order1= await Order.findOne({item:"samosa"})
    let order2= await Order.findOne({item:"Chocolate"})
    cust1.orders.push(order1)
    cust1.orders.push(order2)
    let res= await cust1.save()
    console.log(res)
}
addCustomer();