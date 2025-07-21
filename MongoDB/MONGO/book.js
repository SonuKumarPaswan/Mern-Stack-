const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String
    },
    price:{
        type:Number
    },
    discount:{
        type:Number,
        default:0
    }

})
const Book = mongoose.model("Book",bookSchema);

const book=new Book({
    title:"Mathmatics XII",
    author:"RD sharma",
    price:1200
})
const book1=new Book({
    title:"Gone girl",
    author:"Roshan Sharma",
    price:1200
})
book1.save().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})