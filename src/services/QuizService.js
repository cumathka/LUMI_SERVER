import QuizRepository from '../data/QuizRepository.js';

const getQuizList = async () => {
  const QuizList = await QuizRepository.getQuizList();
  return QuizList;
};

const getQuiz = async (pId) => {
  const Quiz = await QuizRepository.getQuiz(pId);
  return Quiz;
};

const createQuiz = async (pQuiz) => {
  return await QuizRepository.createQuiz(pQuiz);
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
