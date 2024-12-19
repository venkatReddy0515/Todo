const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const mongoose=require("mongoose");
const LoginSystem=require("./LoginSystem");
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port=process.env.PORT||3000;

app.get("/",(req,res)=>{
    res.send("Hello i am back..")
})

app.post("/user",async(req,res)=>{
    const {name,age,id}=req.body;
    try{
        const newStudent=new LoginSystem({name,age,id});
        await newStudent.save();
        return res.status(201).json(newStudent);
    }
    catch(err){
        return res.status(400).json(err.message);
    }
})

app.listen(port,()=>{
    console.log("Server is running on https://localhost:5000");
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected....");
})
.catch((err)=>{
    console.log("error");
})