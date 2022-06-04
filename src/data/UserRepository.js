import User from '../models/UserModel.js';

const getUserList = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (pUser) => {
  try {
    return await User.create(pUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (pId, pUser) => {
  try {
    let User = await User.findByPk(pId);
    User.set({
      name: pUser.name,
    });
    return await User.save();
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (pId) => {
  try {
    await User.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getUserList,
  createUser,
  updateUser,
  deleteUser,
};
