// import express from "express";
// import dotenv from "dotenv"
// import mongoose from "mongoose";
// import User from "./model/userSchema.js"


// dotenv.config()
// const app = express();
// const PORT = process.env.PORT




// const connectDB = async () => {
//     try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("database is connected!");
    
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// app.use(express.json())
// app.get("/" , (req,res) => {

//     res.status(200).json({
//         status : "true",
//         message : "server is running!"
//     })
// })
// app.get("/health" , (req,res) => {

//     res.status(200).json({
//         status : "true",
//         message : "Health is good!"
//     })
// })


// app.post("/user" , async (req,res) => {
    
//   try {

//     const userData = req.body;
//     // const userData = {
//     //     name : "Muhammad Hasnain",
//     //     age : 17,
//     //     email : "codermhasnain@gmail.com",
//     //     password : "hasnain@12345$"
//     //    }
     
    
//         const user = new User(userData);
         
//         if(user){
//           await  user.save()
//         }

    
//         res.status(200).json({
//             status : "true",
//             message : "user added successfully!"
//         })
//   } catch (error) {
//     res.status(400).json({
//         status : 'false',
//         message : error.message
//     })
//   }
// })

// app.listen(PORT , () => {
//     console.log(`Server is listening on port ${PORT}`);
    
//     connectDB()
    
// })




import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import User from './model/userSchema.js'
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5500;


const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected!");

    
    
} catch (error) {
    console.log(error.message);
    
}
}

app.use(express.json())
app.get("/" , (req,res) => {

     res.status(200).json({
        status : "true",
        message : "Hello from the server!"
     })
})

app.get("/api/health" , (req,res) => {

     res.status(200).json({
        status : "true",
        message : "Health is Good as Usually Alhumdullilah!"
     })
})

app.post("/api/user" , async (req,res) => {
   try {
    // const userData = {
    //     name : "Muhammad Hasnain",
    //     age : 17,
    //     email : "hasnain@gmail.com",
    //     password : "hasnainzainab@123$"
    // }
      const userData = req.body;
    const user  = new User(userData);
    
     if(user) {
       await user.save()

       res.status(200).json({
        status : "true",
        message : "User Signup or Access Dashboard Successfully!"
    })
     }
     
   } catch (error) {
    
    res.status(400).json({
        status : "false",
        message : error.message
    })

   }

})



app.listen(PORT , () => {
console.log(`Server is listening on Port ${PORT}`);
connectDB()

})