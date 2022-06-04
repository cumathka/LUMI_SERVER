import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import QuizRoute from './routes/QuizRoute.js';
import QuestionRoute from "./routes/QuestionRoute.js"

import './commons/sequelize.js';

const app = express();
const port = 8080;

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/User', UserRoute);
app.use('/api/v1/Quiz', QuizRoute);
app.use('/api/v1/Question',QuestionRoute)


app.listen(port, () => {
  console.log(`connected ${port}`);
});
