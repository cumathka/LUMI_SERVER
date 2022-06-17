import { Sequelize, DataTypes } from 'sequelize';
import 'dotenv/config'
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host:process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});
  const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    question: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    answer1: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    answer2: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    answer3: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    answer4: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correct: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });
  export default Question;