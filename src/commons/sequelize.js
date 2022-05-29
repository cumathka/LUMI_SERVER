import { Sequelize } from 'sequelize';
import Quiz from '../models/quizModel.js';
import User from '../models/userModel.js';

const sequelize = new Sequelize('quiz_db', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

Quiz.hasMany(User);
User.belongsTo(Quiz);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true })
    await Quiz.sync();
    await User.sync();
    console.log('Connected database!');
  } catch (error) {
    console.log('Error');
  }
};


connectToDatabase();
