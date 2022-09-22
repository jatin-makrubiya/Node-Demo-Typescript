import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {createServer} from 'http';
import bodyparse from 'body-parser';
import dbconnect from './config/db.config'
dotenv.config();
const app: Express = express();
const port : string = '8181';
app.use(bodyparse.json())
dbconnect();
app.get('/api/v1/health', (req:Request, res:Response) =>{
    res.status(200).json({message : 'Server Running'})
})

const http = createServer(() =>{
    console.log('Server is Running on http://localhost:8181')
}).listen(port);

