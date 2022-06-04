import QuestionRepository from '../data/QuestionRepository.js';

const getQuestionList = async () => {
  const QuestionList = await QuestionRepository.getQuestionList();
  return QuestionList;
};

const getQuestion = async (pId) => {
  const Question = await QuestionRepository.getQuestion(pId);
  return Question;
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
  getQuestionList,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
};
