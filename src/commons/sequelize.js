import { Sequelize } from 'sequelize';
import user from '../models/UserModel.js';
import quiz from '../models/QuizModel.js';
import question from "../models/QuestionModal.js"

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host:process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

user.hasMany(quiz);
quiz.hasMany(question,{onDelete:'cascade'});
quiz.belongsTo(user);
question.belongsTo(quiz);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await user.sync();
    await quiz.sync();
    await question.sync();
    console.log('Connected!');
  } catch (error) {
    console.log('Error');
  }
};

connectToDatabase();
