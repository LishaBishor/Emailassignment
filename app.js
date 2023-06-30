const express=require('express')
const app=new express();
const api=require('./routes/sample')
require('dotenv').config();
var morgan=require('morgan')
app.use(morgan('dev'));
"use strict";
const nodemailer = require("nodemailer");

app.use('/api',api)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});