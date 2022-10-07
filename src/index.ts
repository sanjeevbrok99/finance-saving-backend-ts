import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
var bodyParser = require('body-parser')
var express = require('express')
var cors = require('cors')
const helmet = require("helmet");
import routes from "./routes/routes";
var morgan = require('morgan')
require("dotenv").config();

createConnection()
  .then(async () => {
    // Create a new express application instance
    const app = express();

    // Call middlewares
    app.use(cors());
    app.use(helmet()); 
    app.use(bodyParser.urlencoded({extended:true})); 
    app.use(bodyParser.json());
    app.use(morgan('dev')); 
 
    //Set all routes from routes folder
    app.use("/", routes); 
 
    app.listen(8055, () => { 
      console.log("Server started on port", 8055);
    });
  })
  .catch(error => console.log(error));