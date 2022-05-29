import quizRepository from '../data/quizRepository.js';

const getQuizList = async () => {
  const quizList = await quizRepository.getQuizList();
  return quizList;
};

const createQuiz = async (pQuiz) => {
  return await quizRepository.createQuiz(pQuiz);
};

const updateQuiz = async (pId, pQuiz) => {
  return await quizRepository.updateQuiz(pId, pQuiz);
};

const deleteQuiz = async (pId) => {
  await quizRepository.deleteQuiz(pId);
};

export default {
  getQuizList,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};
