import User from '../models/UserModel.js';



const  isUserExisting = async (pEmail) => {
  const emailCount = await User.count({
      where: {email: pEmail}
    });
  return emailCount == 0 ? false : true;
}


const getUserList = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (pId) => {
  try {
    return await User.findByPk(pId);
  } catch (error) {
    console.log(error);
  }
};

const getUserProfilePic = async (pId) => {
  try {
    const userPic = await User.findOne({
      where: {id: pId}
    });
    return await userPic.avatar
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

const updateUser= async (pId, pUser) => {
  try {

    return await User.update(pUser, {
      where: {id: pId}
    });
    // return await User.save();
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




const  getUserByMail = async (pEmail) => {
  const userId = await User.findOne({
      where: {email: pEmail}
    });
    console.log(userId);
  return await userId.id
}











export default {
  getUserList,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  isUserExisting,
  getUserByMail,
  getUserProfilePic
};
