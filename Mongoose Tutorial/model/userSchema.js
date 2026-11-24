// import mongoose from "mongoose";

import mongoose from "mongoose";


// const userSchema = new mongoose.Schema({
//     name : String,
//     age : Number,
//     email : {
//         type : String,
//         required : true,
//         unique : true
//     },
//     password : {
//         type : String,
//         required : true,
//         default : "efnuiohunqIJPaoxlkoj"

//     }
// })

// const userModel = mongoose.model("user",userSchema)

// export default userModel


const userSchema = new mongoose.Schema({
    name : String,
    age: Number,
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    about : String
})


const userModel = mongoose.model("user" , userSchema)

export default userModel