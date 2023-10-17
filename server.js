// const express = require('express');
// const colors = require('colors');

import express from "express";
import colors from "colors";
import dotenv from 'dotenv';

const app = express();

dotenv.config();


app.get("/", (req, res) => {
    res.send("<h1>My ecommarce app is running</h1>")
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgBlack.white);
});