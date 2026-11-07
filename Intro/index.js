// let a = "Muhammad Hasnain";
// console.log(a);

// READFILESYNC 

// const fs = require("fs");
// let file = fs.readFileSync("./text.txt" , "utf-8");
// console.log(file);
 
// READFILEASYNC

// const fs = require("fs");
// let file = fs.readFile('./text.txt' , 'utf-8' , (err,data) => {
// console.log("Data+---->",data);

// })

// console.log(file);

// WRITEFILESYNC 
// const fs = require('fs');
// let write = fs.writeFileSync('./server.txt' , 'Hello , I am Muhammad Hasnain I am Passionate front-end Developer')


// OVERWRITE ALSO WRITEFILEASYNC 
// const fs = require("fs");
// let write = fs.writeFile("./server.txt" , "Hello Kya hal Hai bolo" ,(err,data) => {
// console.log("data" , data);

// } )

// console.log(write);

// import fs from 'fs/promises';

// let data = fs.writeFile("./server.txt" , "Cahahahahahahahah" , "utf-8" , (err,data) => {
// console.log(data);

// })



// console.log(data);

// const fs = require('fs');
// let data = fs.readFileSync("./server.txt" , "utf-8");
// console.log(data);



// Server 

// const http = require("http");
// const url = require("url");


// let server = http.createServer((req,res) => {
//     console.log(req.url);
//     if(req.url == "/shoes"){
//         res.end("Taking Shoes and Giving Money!")
//         return
//     }
//     else if(req.url == "/ponka"){
//         res.end("Bhai Tu hai Ponka!")
//         return
//     }
//     else if(req.url == "/mamo"){
//         res.end("Bhai Tu hai Ponka! mamo")
//         return
//     }
//  res.end("Hello From the Server!")
// })

// server.listen(5400 , '127.0.0.1',() => {
//     console.log("Server Listening on Port 5400");
    
// })







// START 
// const fs = require("fs");
// let readFile = fs.readFileSync("./server.txt" , "utf-8");
// console.log(readFile);

// const fs = require("fs");
// let readFile = fs.readFile("./text.txt" , "utf-8" , (err,data) => {
// console.log(data);

// })
// console.log("----->",readFile);




// const fs = require("fs");
// let writeFile = fs.writeFileSync("./ponka.txt","My Name is Patrick." , "utf-8");
// console.log(writeFile);


// const fs = require("fs");
// let async = fs.writeFile("./loda.txt" , "My Name Is Hasnain. I am a Passionate Learner." , "utf-8" , (err,data) => {
// console.log(data);

// })
// console.log(async);



// const fs = require("fs");
// const http = require("http");
// const url = require("url")


// let server = http.createServer((req,res) => {
//     console.log(req.url);
//     if(req.url == "/ponka") {
//         res.end("Hi Ponke")
//      return     
//     }else if(req.url == "/shoes"){
//         res.end("Yelo Shoes")
//     }else if(req.url == '/users') {
//        res.end("Yelo Users Ka Data ajj ki class main!")
//     }
//     else{
//         res.end("Hello from the Server")

//     }    
// })

// server.listen(5500 , "127.0.0.1" , () => {
//     console.log("Server chala bhai!");
    
// })


// One Last Time 

// const fs = require("fs");
// let read = fs.readFileSync("./server.txt" , "utf-8")
// console.log(read);


// const fs = require("fs");
// let read = fs.readFile("./text.txt" , "utf-8" , (err,data) => {
// console.log(data);

// })


// const fs = require("fs");
// let write = fs.writeFileSync("./pp.txt" , "Hello World" , "utf-8" )
// console.log(write);


// const fs = require("fs");
// let write = fs.writeFile("./ponka.tsx" , "rafce" , "utf-8" , (err,data) => {
// console.log(data);

// })

// console.log(write);


// const fs = require("fs");
// const http = require("http");
// const url = require("url")
// let server = http.createServer((req,res) => {
//     console.log(req.url);
//     if(req.url == "/users"){
//         res.end("Fetching Users")
//     }else if(req.url == "/shoes"){
//         res.end("Fetching Brand Shoes")
//     }
// else{
//     res.end("Server Is Running!")

// }    
// })

server.listen(5500, '127.0.0.1' , () => {
    console.log("cahala");
    
}) 