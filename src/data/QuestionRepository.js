import Question from '../models/QuestionModal.js';

const getQuestionList = async (QuizId) => {
  try {
    return await Question.findAll({
      where:{
        QuizId:QuizId
      }
    });
  } catch (error) {
    console.log(error);
  }
};



const getAllQuestions = async () => {
  try {
    return await Question.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getQuestion = async (pId) => {
  try {
    return await Question.findByPk(pId);
  } catch (error) {
    console.log(error);
  }
};

const createQuestion = async (pQuestion) => {
  try {
    return await Question.create(pQuestion);
  } catch (error) {
    console.log(error);
  }
};

const updateQuestion = async (pId, pQuestion) => {
  try {

    return await Question.update(pQuestion, {
      where: {id: pId}
    });
    // let Question = await Question.findByPk(pId);
    // Question.update({
    //   answer1: pQuestion.answer1,
    //   answer2: pQuestion.answer2,
    //   answer3: pQuestion.answer3,
    //   answer4: pQuestion.answer4,
    //   correct: pQuestion.correct,
    //   question:pQuestion.question
    // });
    // return await Question.save();
  } catch (error) {
    console.log(error);
  }
};

const deleteQuestion = async (pId) => {
  try {
    await Question.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getQuestionList,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestions
};
