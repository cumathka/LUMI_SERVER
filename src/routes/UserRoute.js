import express from 'express';
import UserService from '../services/UserService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const UserList = await UserService.getUserList();
  res.status(200).send(UserList);
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const User = await UserService.getUser(id);
  res.status(200).send(User);
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


router.post("/reminder", async (req, res)=>{
  await UserService.sendReminderEmail()
  res.status(200).send(null);
})


router.post("/check", async (req, res)=>{
  const auth0User = req.body;
  const user = {
      email: auth0User.email,
      first_name: auth0User.given_name,
      last_name: auth0User.family_name 
  };

  const status = await UserService.checkUser(user); // firstname, lastname, email
  res.status(200).send(status);
})






export default router;


