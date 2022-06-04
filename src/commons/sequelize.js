import { Sequelize } from 'sequelize';
import user from '../models/UserModel.js';
import quiz from '../models/QuizModel.js';
import question from "../models/QuestionsModal.js"

const sequelize = new Sequelize('my_db', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

user.hasMany(quiz);
user.hasMany(question);
quiz.hasMany(question);
quiz.belongsTo(user);
question.belongsTo(user);
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
