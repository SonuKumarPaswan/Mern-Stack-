const mongoose=require("mongoose");
const Chat=require("./models/chat.js")


main().then((res)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})
 async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
 }

const allChats = [
  {
    from: "Neha",
    to: "Priya",
    mgs: "Hi, Priya! Send me your resume.",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Amit",
    mgs: "Hey, did you complete the project?",
    created_at: new Date()
  },
  {
    from: "Sonu",
    to: "Riya",
    mgs: "Let’s meet at 5 PM today.",
    created_at: new Date()
  },
  {
    from: "Ravi",
    to: "Anjali",
    mgs: "Congratulations on your new job!",
    created_at: new Date()
  },
  {
    from: "Pooja",
    to: "Neha",
    mgs: "Can you help me with the code?",
    created_at: new Date()
  },
  {
    from: "Arjun",
    to: "Vikram",
    mgs: "Join the meeting at 3 PM sharp.",
    created_at: new Date()
  },
  {
    from: "Ankit",
    to: "Divya",
    mgs: "Please review my PR on GitHub.",
    created_at: new Date()
  },
  {
    from: "Meena",
    to: "Sonu",
    mgs: "Happy Birthday, Sonu!",
    created_at: new Date()
  },
  {
    from: "Kabir",
    to: "Raj",
    mgs: "Let's plan the trip this weekend.",
    created_at: new Date()
  },
  {
    from: "Tina",
    to: "Sahil",
    mgs: "Good morning! Have a nice day.",
    created_at: new Date()
  }
];

 Chat.insertMany(allChats);