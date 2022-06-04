import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import QuizRoute from './routes/QuizRoute.js';
import UserRoute from './routes/UserRoute.js';
import QuestionRoute from './routes/QuestionRute.js';
import './commons/sequelize.js';

const app = express();
const port = 3001;

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/quiz', QuizRoute);
app.use('/api/v1/user', UserRoute);
app.use('/api/v1/question', QuestionRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
