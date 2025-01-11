var express = require('express')
const mongoose=require("mongoose")
const {v4: uuidv4 } = require("uuid")  // import uuid
const cors=require('cors')
// app creation
const app=express();

// middleware
app.use(express.json())
mongoose.connect("mongodb+srv://pavithra:pavisecemern@cluster0.xezm2.mongodb.net/").then(()=>{
    console.log("Connected to DB")
})

const expenseSchema=new mongoose.Schema({
    id: { type: String, required:true, unique: true}, 
    title:{type: String, required: true},
    amount: {type:Number, required: true}
})

const Expenses=mongoose.model("Expenses", expenseSchema);

app.get("/api/expenses", async(req,res)=> {
    try{
    const expenses= await Expenses.find()
    res.status(200),json({expenses})
    } catch(err){
        res.status(500).json(err.message)
    }
})

app.get("/api/expenses/:id", async(req,res)=> {
    try{
        const {id} = req.params;
        const expense=await Expenses.findOne({id})
        if(!expense){
            return res.status(404).json({message: "Expense not found"})
        }
        res.status(200).json(expense)
    } catch(error){
        res.status(500).json(error.message)
    }
})

app.post("/api/expenses", async(req,res)=> {
    console.log(req.body)
    const{ title, amount}=req.body
    try{
        const newExpense = new Expenses({
            id: uuidv4(),
            title,  // this is same as title: title
            amount
        })
        const savedExpense = await newExpense.save()
        res.status(200).json(savedExpense)
    }  
    catch(err){
        res.status(500).json({message: "Error in creating expense"})
    }
})

app.put("/api/expenses/:id", async(req, res) => {
    const {id}=req.params;
    const {title, amount}= req.body;
    try{
        const updateExpense = await Expenses.findOneAndUpdate(
            {id},
            {title, amount}
        )
        if(!updateExpense){
           return res.status(404).json({message: "Expense not found"})
        }
        res.status(200).json(updateExpense)
    }
    catch(err){
        res.status(500).json({message: "Error in updating expense"})
    }
})

app.delete("/api/expenses/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteExpense=await Expenses.deleteOne({id});
        if(!deleteExpense){
            return res.status(404).json({message:"Expense not found"})
        }
    res.status(200).json({message:"Expense deleted"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
/*
const students=[{
    name:"hari",
    age:21
},{
    name:"kavi",
    age:23
}]

//read data
app.get("/api/sayhello",(req,res)=>{
    res.send("Hello cce!!")
    res.end();
})
app.get("/api/students",(req,res)=>{
    res.status(200).json(students);
})
app.get("/api/students/:age",(req,res)=>{
    const {age}=req.params;
    const student=students.find((student)=>student.age==age);
    if(!student){
        res.status(404).json({message:"Student not found"})
    }
    else{
        res.status(200).json(student);
    }
})
*/