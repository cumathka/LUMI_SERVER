import UserRepository from '../data/UserRepository.js';

const getUserList = async () => {
  const UserList = await UserRepository.getUserList();
  return UserList;
};

const getUser = async (pId) => {
  const User = await UserRepository.getUser(pId);
  return User;
};

const createUser = async (pUser) => {
  return await UserRepository.createUser(pUser);
};

const updateUser = async (pId, pUser) => {
  return await UserRepository.updateUser(pId, pUser);
};

const deleteUser = async (pId) => {
  await UserRepository.deleteUser(pId);
};

export default {
  getUserList,
  createUser,
  updateUser,
  deleteUser,
  getUser,
};
