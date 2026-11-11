// import express from "express";

// const app = express();

// app.use(express.json())

// app.get("/" , (req,res) => {
// console.log("REQUEST -->" , req);

//   res.status(200).send("Successfully Hit on Port 5500")

// })

// app.post("/signup" , (req,res) => {
// console.log("REQUEST -->" , req.body);

//   res.status(200).send("Successfully Hit on Port 5500")

// })


// app.put("/edit-user" , (req,res) => {
// console.log("REQUEST -->" , req.body);

//   res.status(200).send("Successfully Hit on Port 5500")

// })


// app.delete("/delete-user" , (req,res) => {

//   res.status(200).send("Successfully Hit on Port 5500")

// })


// app.listen(5500,() => {
//     console.log("Server is Lisening on Port 5500");
    
// })





import express from "express";

const app = express();


app.use(express.json())

app.get("/" , (req,res) => {
console.log("Request --->",req);

res.status(200).send("Server Hit Successfully!")

})

app.post("/signup" , (req,res) => {
console.log("Request --->",req.body);

res.status(200).send("Server Hit Successfully User Data!")

})

app.put("/user" , (req,res) => {
 console.log("req ---->" , req );
 
 res.status(200).send("User Updated Successfully!")
})

app.delete("/delete" , (req,res) => {
console.log("req ---> " , req);

 res.status(200).send("Deleted Successfully!")
})

app.listen(5500 , () => {
console.log("Server Is Running on Port 5500");

})