import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/rolobee")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("Rolobee backend running");
});

app.listen(5000,()=>{
  console.log("Server running on port 5000");
});
import Project from "./models/Project.js";

app.post("/api/projects", async (req,res)=>{
  try{
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  }catch(err){
    res.status(500).json(err);
  }
});
app.get("/api/projects", async (req,res)=>{
  const projects = await Project.find();
  res.json(projects);
});