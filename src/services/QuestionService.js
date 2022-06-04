import QuestionRepository from '../data/QuestionRepository.js';

const getQuestion = async () => {
  const QuestionList = await QuestionRepository.getQuestion();
  return QuestionList;
};

const createQuestion = async (pQuestion) => {
  return await QuestionRepository.createQuestion(pQuestion);
};

const updateQuestion = async (pId, pQuestion) => {
  return await QuestionRepository.updateQuestion(pId, pQuestion);
};

const deleteQuestion = async (pId) => {
  await QuestionRepository.deleteQuestion(pId);
};

export default {
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
