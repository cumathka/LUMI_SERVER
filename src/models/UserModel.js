import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('my_db', 'root', '-', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
});

export default User;
