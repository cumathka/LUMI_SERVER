import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('quiz_db', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default User;
