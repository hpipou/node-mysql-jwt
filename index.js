const express=require("express");
const app=express();
const cors=require("cors");

// Cors policy
app.use(cors())
app.options('*', cors())

// Read JSON DATA
app.use(express.json())