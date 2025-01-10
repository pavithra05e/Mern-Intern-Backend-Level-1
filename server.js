const http=require('http');//http is a built-in module in Node.js
const fs = require('fs');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/json'});
    //write the data from file.js in the response
    fs.readFile('./sample.json','utf8',(err,data)=>{
        if(err){
            console.log("Cannot open the file");
            return;
        }
        res.write(data);
        res.end();
});
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

// const http=require("http");  //http is a module(library) contains server creating methods
// //const modules=require("./modules") 
// const file=require('./file')

// const server=http.createServer((req,res) => {   //calllback func/
//     res.writeHead(200,{"Content-Type": "text/plain"}); //writeheader is for headers
//     // res.write(`Addition: ${modules.add(10,15)}\n`);
//     res.write(`User details: ${file.users}\n`);
//     res.end();   // to end the response
// });
// server.listen(3000,()=>{
//    console.log("server is running on port http://localhost:3000")
// })

// console.log("Hello world")
//const modules=require("./modules")  // encapsulation 
/*console.log(modules.add(10,15))
console.log(modules.subtract(10,15))
console.log(modules.multiply(10,15))
console.log(modules.divide(10,15))
console.log(modules.modulo(10,15))
*/