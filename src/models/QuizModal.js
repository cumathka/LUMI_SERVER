import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('QuizNewDb', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

const Quiz = sequelize.define('Quiz', {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

export default Quiz;