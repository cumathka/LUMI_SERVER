import QuizRepository from '../data/QuizRepository.js';
import UserRepository from '../data/UserRepository.js';
const getQuizList = async (limit,offset,sortBy,category,userInp) => {
  if (sortBy ==="newest") {
    if (category === 'all') {
      const QuizList = await QuizRepository.getQuizList(limit,offset,'DESC',userInp);
      return QuizList;
    }
    const QuizList = await QuizRepository.getQuizListWithSameCategory(limit,offset,'DESC',category,userInp);
    return QuizList;
  }else{
    if (category === 'all') {
      const QuizList = await QuizRepository.getQuizList(limit,offset,'ASC',userInp);
    return QuizList;
    }
    const QuizList = await QuizRepository.getQuizListWithSameCategory(limit,offset,'ASC',category,userInp);
    return QuizList;
  }
};

const getQuiz = async (pId) => {
  const Quiz = await QuizRepository.getQuiz(pId);
  return Quiz;
};
const getForPostMan = async () => {
  const postman = await QuizRepository.getForPostMan();
  return postman;
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

const getMyQuizzes = async (UserId,limit,offset,userInp) => {
  
  const myQuiz = await QuizRepository.getMyQuizzes(UserId,limit,offset,userInp)
  return myQuiz;
};



export default {
  getQuizList,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuiz,
  getMyQuizzes,
  getForPostMan
};
