import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('quiz_db', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

const Quiz = sequelize.define('Quiz', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  answer1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer4: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correct: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Quiz;