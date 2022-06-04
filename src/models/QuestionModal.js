import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('my_db', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

  const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
    },
  });
  
  export default Question;