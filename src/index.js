import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import './commons/sequelize.js';

const app = express();
const port = 3000;

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/User', UserRoute);

app.listen(port, () => {
  console.log(`connected ${port}`);
});
