import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('my_db', 'root', '-', {
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