import QuestionRepository from '../data/QuestionRepository.js';
import QuizRepository from '../data/QuizRepository.js';

const getQuestionList = async () => {
  const QuestionList = await QuestionRepository.getQuestionList();
  return QuestionList;
};

const getQuestion = async (pId) => {
  const Question = await QuestionRepository.getQuestion(pId);
  return Question;
};

const createQuestion = async (pQuestion) => {
  console.log(pQuestion,"soru bu")
  const currentQuiz = await QuizRepository.getQuiz("20") 
  console.log("currentQuiz",currentQuiz)
  const createdQuestion = await QuestionRepository.createQuestion(pQuestion);
  currentQuiz.addQuestion(createdQuestion)
  return await createdQuestion
  // return await QuestionRepository.createQuestion(pQuestion);
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
