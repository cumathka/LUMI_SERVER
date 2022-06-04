import UserRepository from '../data/UserRepository.js';

const getUsers = async () => {
  const UserList = await UserRepository.getUsers();
  return UserList;
};

const createUser = async (pUser) => {
  return await UserRepository.createUser(pUser);
};

const updateUser = async (pId, pUser) => {
  return await UserRepository.updateQuiz(pId, pUser);
};

const deleteUser = async (pId) => {
  await UserRepository.deleteUser(pId);
};

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
