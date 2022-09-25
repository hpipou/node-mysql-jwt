const express=require("express");
const app=express();
const cors=require("cors");

// Cors policy
app.use(cors())
app.options('*', cors())

// Read JSON DATA
app.use(express.json())

// Start server
app.listen(3000,()=>console.log("SERVER START"))