import { Sequelize, DataTypes } from 'sequelize';
import 'dotenv/config'
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host:process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
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
  details: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

export default Quiz;
