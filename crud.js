const http=require('http')
const fs=require('fs')
const contents=[{
    "name": "Kavya",
    "age": 23,
    "id": 1,
    "rollno": "c23"
},{
    "name": "sandy",
    "age": 21,
    "id": 3,
    "rollno": "c20"
},{
    "name": "Kavya",
    "age": 20,
    "id": 7,
    "rollno": "c19"
},{
    "name": "Kavya",
    "age": 19,
    "id": 9,
    "rollno": "b24"
}]
fs.writeFile('./student.json',contents,(err)=>{
    if(err){
        console.log("Error in Writing file")
        return;
    }
    console.log("File written Successfully")
})