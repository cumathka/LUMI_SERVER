import UserRepository from '../data/UserRepository.js';
import populateRemidnerTemplate from './email-templates/reminder.js';
import * as emailService from './email-service.js';
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

const sendReminderEmail = async() => {
  // get customer info from database by id
  //const customer = await customerRepository.findById(pCustomerId)
  const customer = await UserRepository.getUser()
  // extract email from db
  // send email by emailservice
  // customers.forEach((customer) => {
  //     const title = "Reminder";
  //     const message = populateRemidnerTemplate(customer.name, customer.last_name);

  //     emailService.send(customer.email, title, message);
  // });

    const title = "Reminder";
    const message = populateRemidnerTemplate("cuma" ,"kaya");
    emailService.send("cumakaya2531@gmail.com", title, message);

}


const  checkUser =async (pUser) => {
  // find user object by email in the database
  // if the user is existing in the db then allow the user to log in (send role info back to the react)
  // if the user is not existing then create the user in the db
  const isUserExisting = await UserRepository.isUserExisting(pUser.email)
  if(isUserExisting){
      return {
          permitted: true,
          //role: "CUSTOMER"
      }
  }else{
      const user = await UserRepository.createUser(pUser);
      console.log(user)
      const message = populateRemidnerTemplate(user.first_name ,user.last_name);
      emailService.send(user.email,"welcome",message)
      return {
          permitted: false,
          //role: "CUSTOMER"
      }
  }
}


export default {
  sendReminderEmail,
  getUserList,
  createUser,
  updateUser,
  deleteUser,
  getUser,
  checkUser
};
