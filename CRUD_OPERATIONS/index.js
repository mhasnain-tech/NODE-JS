// import express from "express";


// const app = express();

// app.use(express.json())

// // database 
// let users = [{
//     username : "muhammadhasnain",
//     email : "codermhasnain@gmail.com"
// },{
//     username : "umair",
//     email : "umairarfeen973@gmail.com"
// }]


// // create User
// app.post("/user" , (req,res) => {
    
//     let data = req.body
//     if(data){
//         users.push(data);
//     }

//     if(!data){
//        return res.status(400).send("Something Went Wrong!")
//     }

//    res.status(200).json({
//     status : "true",
//     data : users
//    })
// })

// // get all users 

// app.get("/user" , (req,res) => {

//    console.log("req body ---> ", req.body);
   

//     res.status(200).json({
//         status : "true",
//         data : users
//     })
// })

// // get single user 
// app.get("/user/:username", (req, res) => {
    
//     const {username} = req.params;

//     // console.log(param);

//     let findUser = users.find((user) => {
//         if(user.username == username){
//             return user
//         }
        
//     })
    

//     res.status(200).json({
//         status : "true",
//         message: "single user data",
//         data : findUser
//     })
// })

// // update user 

// app.put("/user/:username", (req, res) => {

//     let body = req.body;
//     // let {username} = req.params;
//     console.log(body);
    

//    users = users.map((user) => {
//     if(user.username == body.username){
//         return user = body
//     }

//     return user
// })

//     res.status(200).json({
//         status : "true",
//         message:"updated user successfully!"
//     })
// })

// // delete user 

// app.delete("/user/:username", (req, res) => {

//     let {username} = req.params;
    

//    users = users.filter((user) => user.username !== username)

//     res.status(200).json({
//         status : "true",
//         message:"deleted user successfully!"
//     })
// })



// app.listen(5500,() => {
//     console.log("Server Is Running on Port 5500!");
    
// })





import express from "express";


const app = express();


// database 
let users = [{
    username : "codermhasnain",
    email : "codermhasnain@gmail.com"
},{
    username : "umaircoder00",
    email : "umairarfeen973@gmail.com"
}]

// middleware suppose
app.use(express.json());


// create 
app.post("/user" , (req,res) => {

    let createdUser =  req.body
       if(createdUser){
        users.push(createdUser)
       }
       if(!createdUser){
        return res.status(401).json({
            status : "false",
            msg : "something went wrong!"
        })
       }

     res.status(201).json({
        status : "true",
        msg : "user created successfully!",
        data : createdUser
     })
})


// read 
app.get("/user" , (req,res) => {

    res.status(200).json({
        status : "true",
        msg : "user readed successfully!",
       data : users
    })
    
})

// get single user 

app.get("/user/:username" , (req,res) => {
   
   const {username} = req.params;

   let findSingleUser = users.find((user) => {
    if(user.username  === username){
        return user
    }
   })

    res.status(200).json({
        status : "true",
        msg : "single user data",
        data : findSingleUser

    })
})


// update user 

app.put("/user/:username" , (req,res) => {
  let body = req.body;
    console.log(req.body);
     users = users.map((user) => {
        if(user.username === body.username){
            return user = body
        }
        return user
     })  
    
    res.status(200).json({
    status : "true",
    msg : "updated user successfully!",

    })
})


// delete user 

app.delete("/user/:username" , (req,res) => {
  
    let {username} = req.params;

    users = users.filter((user) => user.username != username)
    
    res.status(200).json({
    status : "true",
    msg : "deleted user successfully!",
    data : users

    })
})

app.listen(5500 , () => {
    console.log("Server Is Running on Port 5500!");
    
})
