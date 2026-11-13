// import express from "express";


// const app = express();


// let users = []


// app.use(express.json())

// app.get("/" , (req,res) => {
//    res.send("Welcome To Dashboard using Express Js")
// })



// app.post("/signup" , (req,res) => {
//     console.log(req.body);
    
//     if(req.body){
//       users.push(req.body)
//     }

//    res.status(201).json({
//       status : "true",
//       msg : "User Signup Successfully!",
//       data : users
//    })
// })

// app.get("/health" , (req,res) => {
//    res.json({
//     status : "true",
//     data : [1,2,3,4],
//     userData : users
//    })
// })

// app.listen(5500 , () => {
//     console.log("Server Is Listening on Port 5500!");
    
// })