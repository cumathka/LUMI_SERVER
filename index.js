import express from "express";
import bodyParser from'body-parser'; // post islemleri icin, payload okunmasini saglar
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../api/swagger_output.json';

import {router as websiteRouter} from './controller/website-router.js'
import {router as customerRouter} from './controller/customer-router.js'
import {router as taskRouter} from './controller/task-router.js'
import {router as engineerRouter} from './controller/engineer-router.js'

const app = express();

// Configuring body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/engineers', engineerRouter);
app.use('/api/v1/websites', websiteRouter);

app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000, ()=>{
    console.log("rest api server has benn just on port 3000 started!")
});