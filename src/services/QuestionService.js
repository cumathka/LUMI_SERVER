import QuestionRepository from '../data/QuestionRepository.js';
import QuizRepository from '../data/QuizRepository.js';

const getQuestionList = async (QuizId) => {
  const QuestionList = await QuestionRepository.getQuestionList(QuizId);
  return QuestionList;
};
const getAllQuestions = async () => {
  const QuestionList = await QuestionRepository.getAllQuestions();
  return QuestionList;
};

const getQuestion = async (pId) => {
  const Question = await QuestionRepository.getQuestion(pId);
  return Question;
};

const createQuestion = async (pQuestion) => {
  // console.log(pQuestion,"soru bu")
  // const currentQuiz = await QuizRepository.getQuiz("20") 
  // console.log("currentQuiz",currentQuiz)
  // const createdQuestion = await QuestionRepository.createQuestion(pQuestion);
  // currentQuiz.addQuestion(createdQuestion)
  // return await createdQuestion
  // return await QuestionRepository.createQuestion(pQuestion);
  

////yeni ama olmayan
  console.log(pQuestion,"soru bu")
  const currentQuiz = await QuizRepository.getQuiz(pQuestion.QuizId) 
  // console.log("currentQuiz",currentQuiz)
  const createdQuestion = await QuestionRepository.createQuestion(pQuestion.oneQuestion);
  console.log("craeted question, ",createdQuestion ,"+ current quiz" , currentQuiz)
  currentQuiz.addQuestion(createdQuestion)
  return await createdQuestion


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
  getAllQuestions
};
