import QuizRepository from '../data/QuizRepository.js';
import UserRepository from '../data/UserRepository.js';
const getQuizList = async () => {
  const QuizList = await QuizRepository.getQuizList();
  return QuizList;
};

const getQuiz = async (pId) => {
  const Quiz = await QuizRepository.getQuiz(pId);
  return Quiz;
};

const createQuiz = async (pQuiz) => {
  /////bunu ilk yaptik
  const currentUser = await UserRepository.getUser(pQuiz.userIdUserDB) //21
  // console.log("currentUser",currentUser)
  // return await QuizRepository.createQuiz(pQuiz);
  const createdQuiz = await QuizRepository.createQuiz(pQuiz);
  currentUser.addQuiz(createdQuiz)

///quiz id yi buradan almaya calisiyorum
  const quizId = await  QuizRepository.getQuizId(pQuiz)
  // console.log("quiz servis",createdQuiz)
  return await createdQuiz
};

const updateQuiz = async (pId, pQuiz) => {
  return await QuizRepository.updateQuiz(pId, pQuiz);
};

const deleteQuiz = async (pId) => {
  await QuizRepository.deleteQuiz(pId);
};

export default {
  getQuizList,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuiz,
};
