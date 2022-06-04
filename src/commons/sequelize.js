import { Sequelize } from 'sequelize';
import Quiz from '../models/QuizModal.js';
import User from '../models/UserModal.js';
import Question from '../models/QuestionModal.js';
const sequelize = new Sequelize('QuizNewDb', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

User.hasMany(Quiz);
Quiz.hasMany(Question);
Question.belongsTo(Quiz);
Quiz.belongsTo(User);


const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true })
    await Quiz.sync();
    await User.sync();
    await Question.sync();
    console.log('Connected database!');
  } catch (error) {
    console.log('Database baglanmadi---Error');
  }
};


connectToDatabase();
