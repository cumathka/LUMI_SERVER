import express from 'express';
import UserService from '../services/UserService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const UserList = await UserService.getUsers();
  res.status(200).send(UserList);
});

router.post('/', async (req, res) => {
  const User = await UserService.createUser(req.body);
  res.status(201).send(User);
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const User = req.body;
  const updatedUser = await UserService.updateUser(id, User);
  res.status(200).send(updatedUser);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await UserService.deleteUser(id);
  res.status(200).send('Deleted!');
});

export default router;
