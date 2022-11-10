import { Request,Response } from 'express';
import 'reflect-metadata'                 
import { createConnection } from 'typeorm'     
var bodyParser = require('body-parser')     
var express = require('express')       
var cors = require('cors')           
const helmet = require("helmet");         
import routes from "./routes/routes";       
var morgan = require('morgan')         
require("dotenv").config(); 
//import { Directus } from '@directus/sdk';    
import * as winston from "winston";
//import * as morgan from "morgan";
//const directus = new Directus('http://localhost:8055');


export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.timestamp({ format: 'HH:mm:ss:ms' }),
        winston.format.colorize(),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
          winston.format.simple(),
      ),
    }),
  ],
  exitOnError: false,
});

if (process.env.NODE_ENV === "dev") {
  logger.add(
    new winston.transports.File({
      level: 'info',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
        // winston.format.splat(),
        // winston.format.json()
      ),
      maxsize: 5242880, //5MB
      maxFiles: 5,
    }));
}
logger.info("logging started");

                     
createConnection()            
  .then(async () => {                            
    // Create a new express application instance 
    const app = express(); 
                            
    // Call middlewares 
    app.use(cors()); 
    app.use(helmet());                                    
    app.use(bodyParser.urlencoded({extended:true}));  
    app.use(bodyParser.json()); 
   // app.use(morgan('dev'));  
    app.use(morgan(function (tokens:any,req:Request, res:Response) {
      const msg = [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'), '-',
          tokens['response-time'](req, res), 'ms',
      ].join(' ');
      logger.http(msg);
      return null;
      // return msg;
  })
  ); 
  async function start() {
    // We don't need to authenticate if data is public
    // const publicData = await directus.items('public').readByQuery({ meta: 'total_count' });
  
    // console.log({
    //   items: publicData.data,
    //   total: publicData.meta.total_count,
    // });
  
    // // But, we need to authenticate if data is private
    // let authenticated = false;
  
    // // Try to authenticate with token if exists
    // await directus.auth
    //   .refresh()
    //   .then(() => {
    //     authenticated = true;
    //   })
    //   .catch(() => {});
  
    // // Let's login in case we don't have token or it is invalid / expired
    // while (!authenticated) {
    //   const email = "mishragsanjeev1999@gmail.com"
    //   const password = "1999"
  
    //   await directus.auth
    //     .login({ email, password })
    //     .then(() => {
    //       authenticated = true;
    //     })
    //     .catch(() => {
    //      console.log('Invalid credentials');
    //     });
    // }
  
    // // After authentication, we can fetch the private data in case the user has access to it
    // const privateData = await directus.items('privateData').readByQuery({ meta: 'total_count' });
  
    // console.log({
    //   items: privateData.data,
    //   total: privateData.meta.total_count,
    // });
  }
  
  start();
    //Set all routes from routes folder 
    app.use("/", routes);  
                                 
    app.listen(8000, () => {                        
      console.log("Server started on port",8000); 
    }); 
  })                                   
  .catch(error => console.log(error));  