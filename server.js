// const express = require('express');
// const colors = require('colors');

import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"

const app = express();

// configure env
dotenv.config();

// config DB 
connectDB();

// middlewares 
app.use(express.json());
app.use(morgan("dev"));

// routes 
app.use("/api/v1/auth", authRoute);

// rest api 
app.get("/", (req, res) => {
    res.send("<h1>My ecommarce app is running now</h1>")
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgBlack.white);
});